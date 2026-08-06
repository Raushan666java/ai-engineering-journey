"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[34390],{

/***/ 51889
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_29_junit_5_md_617_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-29-junit-5-md-617.json
const site_docs_courses_java_29_junit_5_md_617_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/29-junit5","title":"JUnit 5 Deep Dive","description":"Previous Mockito","source":"@site/docs/courses/java/29-junit5.md","sourceDirName":"courses/java","slug":"/java/29-junit5","permalink":"/ai-engineering-journey/java/29-junit5","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":29,"frontMatter":{"id":"29-junit5","slug":"/java/29-junit5","title":"JUnit 5 Deep Dive","sidebar_label":"JUnit 5 Deep Dive","sidebar_position":29},"sidebar":"coursesSidebar","previous":{"title":"Keycloak & Identity Federation","permalink":"/ai-engineering-journey/java/28-keycloak"},"next":{"title":"Mockito & Mocking Frameworks","permalink":"/ai-engineering-journey/java/30-mockito"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/29-junit5.md


const frontMatter = {
	id: '29-junit5',
	slug: '/java/29-junit5',
	title: 'JUnit 5 Deep Dive',
	sidebar_label: 'JUnit 5 Deep Dive',
	sidebar_position: 29
};
const contentTitle = 'JUnit 5 Deep Dive';

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
  "value": "Table of Contents",
  "id": "table-of-contents",
  "level": 2
}, {
  "value": "1. Architecture Overview",
  "id": "1-architecture-overview",
  "level": 2
}, {
  "value": "1.1 JUnit Platform",
  "id": "11-junit-platform",
  "level": 3
}, {
  "value": "1.2 JUnit Jupiter",
  "id": "12-junit-jupiter",
  "level": 3
}, {
  "value": "1.3 JUnit Vintage",
  "id": "13-junit-vintage",
  "level": 3
}, {
  "value": "2. Annotations &amp; Lifecycle",
  "id": "2-annotations--lifecycle",
  "level": 2
}, {
  "value": "2.1 Core Test Annotations",
  "id": "21-core-test-annotations",
  "level": 3
}, {
  "value": "2.2 DisplayName and DisplayNameGeneration",
  "id": "22-displayname-and-displaynamegeneration",
  "level": 3
}, {
  "value": "2.3 Test Method Ordering",
  "id": "23-test-method-ordering",
  "level": 3
}, {
  "value": "2.4 Test Instance Lifecycle",
  "id": "24-test-instance-lifecycle",
  "level": 3
}, {
  "value": "2.5 Interface Default Methods",
  "id": "25-interface-default-methods",
  "level": 3
}, {
  "value": "3. Assertions &amp; Assumptions",
  "id": "3-assertions--assumptions",
  "level": 2
}, {
  "value": "3.1 Standard Assertions",
  "id": "31-standard-assertions",
  "level": 3
}, {
  "value": "3.2 Grouped Assertions (assertAll)",
  "id": "32-grouped-assertions-assertall",
  "level": 3
}, {
  "value": "3.3 Assumptions",
  "id": "33-assumptions",
  "level": 3
}, {
  "value": "4. Parameterized Tests",
  "id": "4-parameterized-tests",
  "level": 2
}, {
  "value": "4.1 ValueSource",
  "id": "41-valuesource",
  "level": 3
}, {
  "value": "4.2 NullSource, EmptySource, NullAndEmptySource",
  "id": "42-nullsource-emptysource-nullandemptysource",
  "level": 3
}, {
  "value": "4.3 EnumSource",
  "id": "43-enumsource",
  "level": 3
}, {
  "value": "4.4 MethodSource",
  "id": "44-methodsource",
  "level": 3
}, {
  "value": "4.5 CsvSource",
  "id": "45-csvsource",
  "level": 3
}, {
  "value": "4.6 CsvFileSource",
  "id": "46-csvfilesource",
  "level": 3
}, {
  "value": "4.7 ArgumentsSource (Custom ArgumentsProvider)",
  "id": "47-argumentssource-custom-argumentsprovider",
  "level": 3
}, {
  "value": "5. Argument Conversion &amp; Aggregation",
  "id": "5-argument-conversion--aggregation",
  "level": 2
}, {
  "value": "5.1 Implicit and Explicit Conversion",
  "id": "51-implicit-and-explicit-conversion",
  "level": 3
}, {
  "value": "5.2 Argument Aggregation",
  "id": "52-argument-aggregation",
  "level": 3
}, {
  "value": "6. Dynamic Tests",
  "id": "6-dynamic-tests",
  "level": 2
}, {
  "value": "6.1 DynamicTest",
  "id": "61-dynamictest",
  "level": 3
}, {
  "value": "6.2 DynamicContainer",
  "id": "62-dynamiccontainer",
  "level": 3
}, {
  "value": "6.3 Stream-Based Dynamic URL Tests",
  "id": "63-stream-based-dynamic-url-tests",
  "level": 3
}, {
  "value": "7. Test Templates",
  "id": "7-test-templates",
  "level": 2
}, {
  "value": "8. Nested Tests",
  "id": "8-nested-tests",
  "level": 2
}, {
  "value": "9. Tagging &amp; Filtering",
  "id": "9-tagging--filtering",
  "level": 2
}, {
  "value": "10. Extensions",
  "id": "10-extensions",
  "level": 2
}, {
  "value": "10.1 @ExtendWith and Extension Interfaces",
  "id": "101-extendwith-and-extension-interfaces",
  "level": 3
}, {
  "value": "11. Test Reporting",
  "id": "11-test-reporting",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: Architecture Diagram",
  "id": "exercise-1-architecture-diagram",
  "level": 3
}, {
  "value": "Exercise 2: Comprehensive Parameterized Tests",
  "id": "exercise-2-comprehensive-parameterized-tests",
  "level": 3
}, {
  "value": "Exercise 3: Custom ArgumentsProvider",
  "id": "exercise-3-custom-argumentsprovider",
  "level": 3
}, {
  "value": "Exercise 4: Dynamic Test from File System",
  "id": "exercise-4-dynamic-test-from-file-system",
  "level": 3
}, {
  "value": "Exercise 5: Nested Stack Implementation",
  "id": "exercise-5-nested-stack-implementation",
  "level": 3
}, {
  "value": "Exercise 6: Custom Extension",
  "id": "exercise-6-custom-extension",
  "level": 3
}, {
  "value": "Exercise 7: Argument Conversion",
  "id": "exercise-7-argument-conversion",
  "level": 3
}, {
  "value": "Exercise 8: Test Template",
  "id": "exercise-8-test-template",
  "level": 3
}, {
  "value": "Exercise 9: Tagged Test Suite",
  "id": "exercise-9-tagged-test-suite",
  "level": 3
}, {
  "value": "Exercise 10: Reporting with TestInfo and TestReporter",
  "id": "exercise-10-reporting-with-testinfo-and-testreporter",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
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
        id: "junit-5-deep-dive",
        children: "JUnit 5 Deep Dive"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/28-keycloak",
          children: "Keycloak"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/30-mockito",
          children: "Mockito"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JUnit 5 is a complete rewrite of the most widely used testing framework in the Java ecosystem. Unlike JUnit 4, which was a single monolithic library, JUnit 5 is composed of three modules: JUnit Platform, JUnit Jupiter, and JUnit Vintage. This modular architecture enables IDEs, build tools, and custom engines to integrate cleanly while supporting both JUnit 5's new model and backward compatibility with JUnit 4 tests."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every example in this chapter compiles and runs against JUnit 5.10+. Add this dependency to your project:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.junit.jupiter</groupId>\n    <artifactId>junit-jupiter</artifactId>\n    <version>5.10.2</version>\n    <scope>test</scope>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter you will be able to:"
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
        href: "../../assets/images/lessons/java/29-junit5/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/29-junit5/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/29-junit5/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/29-junit5/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/29-junit5/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/29-junit5/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diagram the JUnit 5 architecture including the Platform, Jupiter, and Vintage modules and explain how they interact with IDEs and build tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write parameterized tests using every source annotation and combine them with argument conversion and aggregation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generate dynamic tests at runtime using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@TestFactory"
        }), " and the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DynamicTest"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "DynamicContainer"
        }), " API"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement custom extensions using the JUnit 5 Extension Model"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Control test instance lifecycle with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PER_CLASS"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PER_METHOD"
        }), " and justify when each is appropriate"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Organise tests into nested hierarchies with shared setup at each level"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the full assertion API including grouped assertions and assumptions"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Capture and report test metadata with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TestInfo"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TestReporter"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "JUnit 5 → modular test framework with Platform + Jupiter + Vintage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jupiter API for new tests, Vintage for JUnit 4 backwards compatibility"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Annotations → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Test"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@ParameterizedTest"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@DisplayName"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Nested"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Rich lifecycle hooks: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@BeforeAll"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@AfterEach"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assertions and Assumptions → comprehensive assertion library"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "assertAll()"
            }), " for grouped assertions, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "assumeTrue()"
            }), " for conditional test execution"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[JUnit 5] --> B[JUnit Platform]\n    A --> C[Jupiter API]\n    A --> D[Vintage Engine]\n    C --> C1[Annotations]\n    C --> C2[Assertions]\n    C --> C3[Assumptions]\n    C --> C4[Extensions]\n    C1 --> C1A[@Test / @ParameterizedTest]\n    C1 --> C1B[@Nested / @DisplayName]\n    C1 --> C1C[@BeforeEach / @AfterEach]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Difference"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JUnit 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy framework"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@Test"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@BeforeClass"
            }), " → single jar"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JUnit 5 Jupiter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New annotation model"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@Test"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@BeforeAll"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@DisplayName"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "junit-jupiter-api"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JUnit 5 Vintage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs JUnit 4 tests on Platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "junit-vintage-engine"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "assertAll()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Groups multiple assertions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reports all failures, not just first"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Test"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marks a test method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Test void shouldReturnTrue() { ... }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ParameterizedTest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test with multiple arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ValueSource(strings = {\"a\", \"b\"})"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@DisplayName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-readable test name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@DisplayName(\"Login with valid credentials\")"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ExtendWith"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registers extensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ExtendWith(MockitoExtension.class)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unit Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JUnit 5 + AssertJ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AssertJ fluent assertions for readable tests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integration Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@SpringBootTest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full application context test with JUnit 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parameterized Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@CsvSource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test validation logic with multiple input sets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What are the three sub-projects of JUnit 5? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Platform, Jupiter, Vintage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which annotation allows writing nested test classes for better organization? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Nested"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How do you group assertions so all failures are reported? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "assertAll()"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "table-of-contents",
      children: "Table of Contents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1-architecture-overview",
          children: "Architecture Overview"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#2-annotations--lifecycle",
          children: "Annotations & Lifecycle"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#3-assertions--assumptions",
          children: "Assertions & Assumptions"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#4-parameterized-tests",
          children: "Parameterized Tests"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#5-argument-conversion--aggregation",
          children: "Argument Conversion & Aggregation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#6-dynamic-tests",
          children: "Dynamic Tests"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#7-test-templates",
          children: "Test Templates"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#8-nested-tests",
          children: "Nested Tests"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#9-tagging--filtering",
          children: "Tagging & Filtering"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#10-extensions",
          children: "Extensions"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#11-test-reporting",
          children: "Test Reporting"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#summary",
          children: "Summary"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#exercises",
          children: "Exercises"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-architecture-overview",
      children: "1. Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/29-junit5.png",
        alt: "JUnit 5 Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JUnit 5 is divided into three modules:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────┐\n│         JUnit Jupiter               │  ← API + implementation for writing tests\n│   (junit-jupiter-api + engine)      │     (@Test, assertions, extensions)\n├─────────────────────────────────────┤\n│         JUnit Vintage                │  ← Allows JUnit 4 tests to run on the Platform\n│   (junit-vintage-engine)             │\n├─────────────────────────────────────┤\n│         JUnit Platform               │  ← Foundation: launcher, console, engine SPI\n│   (junit-platform-commons + engine)  │     IDEs and build tools talk to this layer only\n└─────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-junit-platform",
      children: "1.1 JUnit Platform"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Platform is the foundation. It provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TestEngine"
        }), " SPI that any test framework (JUnit Jupiter, JUnit Vintage, Spek, etcd) can implement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Launcher"
        }), " API that IDEs, Maven Surefire, Gradle, and custom runners use to discover and execute tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TestDescriptor"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TestExecutionResult"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TestPlan"
        }), " types that abstract away the details of any specific engine"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.architecture;\n\nimport org.junit.platform.launcher.Launcher;\nimport org.junit.platform.launcher.LauncherDiscoveryRequest;\nimport org.junit.platform.launcher.core.LauncherDiscoveryRequestBuilder;\nimport org.junit.platform.launcher.core.LauncherFactory;\nimport org.junit.platform.launcher.listeners.SummaryGeneratingListener;\nimport org.junit.platform.launcher.listeners.TestExecutionSummary;\n\nimport static org.junit.platform.engine.discovery.DiscoverySelectors.selectClass;\n\n/**\n * Programmatic launcher — demonstrates how IDEs and build tools\n * discover and run JUnit 5 tests without relying on any JUnit 4\n * concepts.\n */\npublic class PlatformLauncherDemo {\n\n    public static void main(String[] args) {\n        LauncherDiscoveryRequest request = LauncherDiscoveryRequestBuilder.request()\n            .selectors(selectClass(\"junit5.architecture.SampleTest\"))\n            .build();\n\n        Launcher launcher = LauncherFactory.create();\n        SummaryGeneratingListener listener = new SummaryGeneratingListener();\n        launcher.registerTestExecutionListeners(listener);\n        launcher.execute(request);\n\n        TestExecutionSummary summary = listener.getSummary();\n        System.out.println(\"Tests found: \" + summary.getTestsFoundCount());\n        System.out.println(\"Tests succeeded: \" + summary.getTestsSucceededCount());\n        System.out.println(\"Tests failed: \" + summary.getTestsFailedCount());\n\n        summary.getFailures().forEach(failure ->\n            System.out.println(\"  \" + failure.getTestIdentifier().getDisplayName()\n                + \" -> \" + failure.getException().getMessage()));\n    }\n}\n\nclass SampleTest {\n\n    @org.junit.jupiter.api.Test\n    void shouldPass() {\n        org.junit.jupiter.api.Assertions.assertEquals(2, 1 + 1);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-junit-jupiter",
      children: "1.2 JUnit Jupiter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Jupiter is the programming model — the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "junit-jupiter-api"
      }), " module provides every annotation and assertion you use when writing JUnit 5 tests. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "junit-jupiter-engine"
      }), " module is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TestEngine"
      }), " implementation that the Platform discovers at runtime."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.architecture;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.DisplayName;\n\n/**\n * Every Jupiter test class is discovered by the Jupiter engine.\n * The engine scans for methods annotated with @Test, @ParameterizedTest,\n * @TestFactory, @RepeatedTest, or @TestTemplate.\n */\nclass JupiterEngineDiscoveryDemo {\n\n    @Test\n    @DisplayName(\"A simple test that always passes\")\n    void standardTest() {\n    }\n\n    @Test\n    void anotherStandardTest() {\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-junit-vintage",
      children: "1.3 JUnit Vintage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vintage provides a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TestEngine"
      }), " that runs JUnit 4 tests (and JUnit 3 tests via the JUnit 4 runner). This is critical for migration: you can adopt the JUnit 5 Platform immediately while keeping existing JUnit 4 tests running unchanged."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.junit.vintage</groupId>\n    <artifactId>junit-vintage-engine</artifactId>\n    <version>5.10.2</version>\n    <scope>test</scope>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.architecture;\n\nimport org.junit.Test;\nimport static org.junit.Assert.assertEquals;\n\n/**\n * This is a JUnit 4 style test. With junit-vintage-engine on the\n * classpath, the Platform discovers and runs it alongside Jupiter\n * tests without any code changes.\n */\npublic class VintageCompatibilityTest {\n\n    @Test\n    public void jUnit4StyleTest() {\n        assertEquals(\"JUnit 4 style runs on JUnit 5 Platform\", 4, 2 + 2);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ParameterizedTest"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@CsvSource"
        }), " to avoid repetitive test code when testing multiple input-output pairs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-annotations--lifecycle",
      children: "2. Annotations & Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-core-test-annotations",
      children: "2.1 Core Test Annotations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.annotations;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.DisplayName;\nimport org.junit.jupiter.api.Disabled;\nimport org.junit.jupiter.api.RepeatedTest;\nimport org.junit.jupiter.api.RepetitionInfo;\nimport org.junit.jupiter.api.TestInfo;\nimport org.junit.jupiter.api.TestReporter;\nimport org.junit.jupiter.api.Timeout;\n\nimport java.time.Duration;\nimport java.util.Map;\n\n/**\n * Demonstrates the core JUnit Jupiter annotations: @Test, @RepeatedTest,\n * @Disabled, @Timeout, @DisplayName.\n */\nclass CoreAnnotationDemo {\n\n    @Test\n    @DisplayName(\"Prices are calculated correctly for bulk orders\")\n    void basicTest() {\n    }\n\n    @Test\n    @Disabled(\"TODO: fix this test after refactoring the pricing module\")\n    void temporarilyDisabled() {\n    }\n\n    @RepeatedTest(value = 5, name = \"{displayName} — attempt {currentRepetition} of {totalRepetitions}\")\n    @DisplayName(\"Retry sensitive operation\")\n    void repeated(RepetitionInfo info) {\n        int attempt = info.getCurrentRepetition();\n        System.out.println(\"Attempt \" + attempt + \" of \" + info.getTotalRepetitions());\n    }\n\n    @Test\n    @Timeout(value = 2, unit = java.util.concurrent.TimeUnit.SECONDS)\n    void mustFinishWithinTwoSeconds() throws InterruptedException {\n        Thread.sleep(500);\n    }\n\n    @Test\n    @DisplayName(\"TestInfo and TestReporter injection\")\n    void usingTestInfoAndReporter(TestInfo info, TestReporter reporter) {\n        reporter.publishEntry(Map.of(\n            \"displayName\", info.getDisplayName(),\n            \"tags\", String.valueOf(info.getTags()),\n            \"testClass\", info.getTestClass().map(Class::getSimpleName).orElse(\"N/A\")\n        ));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-displayname-and-displaynamegeneration",
      children: "2.2 DisplayName and DisplayNameGeneration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.annotations;\n\nimport org.junit.jupiter.api.DisplayName;\nimport org.junit.jupiter.api.DisplayNameGeneration;\nimport org.junit.jupiter.api.DisplayNameGenerator;\nimport org.junit.jupiter.api.MethodOrderer;\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.TestMethodOrder;\nimport org.junit.jupiter.api.IndicativeSentencesGeneration;\nimport org.junit.jupiter.params.ParameterizedTest;\nimport org.junit.jupiter.params.provider.ValueSource;\n\n/**\n * @DisplayNameGeneration controls how display names are generated\n * for test classes and methods.\n *\n * ReplaceUnderscores: converts {@code should_throw_when_null} into\n * \"should throw when null\".\n *\n * Standard: preserves method names as-is.\n *\n * IndicativeSentencesGeneration: generates sentences from the enclosing\n * class name + method name.\n */\n@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)\n@TestMethodOrder(MethodOrderer.DisplayName.class)\nclass DisplayNameGenerationDemo {\n\n    @Test\n    void should_throw_when_input_is_null() {\n        // display name becomes: \"should throw when input is null\"\n    }\n\n    @Test\n    void should_return_correct_sum_for_positive_numbers() {\n    }\n\n    @Nested\n    @DisplayNameGeneration(DisplayNameGenerator.Standard.class)\n    class StandardNaming {\n\n        @Test\n        void some_method_with_underscores() {\n            // display name is the raw method name:\n            // \"some_method_with_underscores\"\n        }\n    }\n\n    @Nested\n    @IndicativeSentencesGeneration(\n        separator = \" -> \",\n        generator = DisplayNameGenerator.ReplaceUnderscores.class\n    )\n    class When_user_is_anonymous {\n\n        @Test\n        void should_redirect_to_login() {\n            // display name becomes:\n            // \"When user is anonymous -> should redirect to login\"\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.annotations;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.DisplayName;\nimport org.junit.jupiter.api.DisplayNameGeneration;\nimport org.junit.jupiter.api.DisplayNameGenerator;\n\n/**\n * Custom display name generator that strips common test prefixes.\n */\nclass CustomDisplayNameGeneratorDemo {\n\n    @Test\n    void testThatUserIsRedirectedToLoginPage() {\n    }\n\n    @Test\n    void testThatPaymentIsProcessedCorrectly() {\n    }\n\n    /**\n     * A custom generator that removes \"testThat\" or \"test\" prefixes\n     * and converts camelCase to readable sentences.\n     */\n    static class CleanEnglishGenerator extends DisplayNameGenerator.Standard {\n\n        @Override\n        public String generateDisplayNameForMethod(Class<?> testClass,\n                                                    java.lang.reflect.Method testMethod) {\n            String name = testMethod.getName();\n            if (name.startsWith(\"testThat\")) {\n                name = name.substring(8);\n            } else if (name.startsWith(\"test\")) {\n                name = name.substring(4);\n            }\n            return name.replaceAll(\"([a-z])([A-Z])\", \"$1 $2\")\n                       .toLowerCase();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-test-method-ordering",
      children: "2.3 Test Method Ordering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.annotations;\n\nimport org.junit.jupiter.api.MethodOrderer;\nimport org.junit.jupiter.api.Order;\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.TestMethodOrder;\n\n/**\n * @TestMethodOrder controls the execution order of test methods.\n *\n * Available orderers:\n * - MethodOrderer.DisplayName        — alphabetical by display name\n * - MethodOrderer.MethodName         — alphabetical by method name\n * - MethodOrderer.OrderAnnotation    — @Order values, ascending\n * - MethodOrderer.Random             — pseudo-random, deterministic seed\n * - Custom Orderer implementation\n */\n@TestMethodOrder(MethodOrderer.OrderAnnotation.class)\nclass TestMethodOrderDemo {\n\n    @Test\n    @Order(3)\n    void last() {\n    }\n\n    @Test\n    @Order(1)\n    void first() {\n    }\n\n    @Test\n    @Order(2)\n    void second() {\n    }\n}\n\n@TestMethodOrder(MethodOrderer.MethodName.class)\nclass AlphabeticalOrderDemo {\n\n    @Test\n    void alphaTest() {\n    }\n\n    @Test\n    void betaTest() {\n    }\n\n    @Test\n    void gammaTest() {\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-test-instance-lifecycle",
      children: "2.4 Test Instance Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.lifecycle;\n\nimport org.junit.jupiter.api.AfterAll;\nimport org.junit.jupiter.api.AfterEach;\nimport org.junit.jupiter.api.BeforeAll;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.TestInstance;\n\nimport static org.junit.jupiter.api.Assertions.assertTrue;\n\n/**\n * PER_CLASS (non-static @BeforeAll/@AfterAll):\n *   - A single instance of the test class is created for the entire run.\n *   - @BeforeAll and @AfterAll methods do NOT need to be static.\n *   - Useful for expensive setup (e.g., starting a test database).\n *   - Instance variables preserve state across tests — use with caution.\n */\n@TestInstance(TestInstance.Lifecycle.PER_CLASS)\nclass PerClassLifecycleDemo {\n\n    private final StringBuilder setupLog = new StringBuilder();\n    private int sharedCounter = 0;\n\n    @BeforeAll\n    void initAll() {\n        // Non-static: PER_CLASS makes this legal\n        System.out.println(\"PER_CLASS @BeforeAll — runs once for the class\");\n    }\n\n    @BeforeEach\n    void init() {\n        sharedCounter++;\n        setupLog.append(\"init|\");\n    }\n\n    @Test\n    void firstTest() {\n        assertTrue(sharedCounter >= 1);\n    }\n\n    @Test\n    void secondTest() {\n        assertTrue(sharedCounter >= 2);\n    }\n\n    @Test\n    void thirdTest() {\n        assertTrue(sharedCounter >= 3);\n    }\n\n    @AfterEach\n    void tearDown() {\n        System.out.println(\"After each test — counter is \" + sharedCounter);\n    }\n\n    @AfterAll\n    void tearDownAll() {\n        System.out.println(\"PER_CLASS @AfterAll — runs once after all tests\");\n    }\n}\n\n/**\n * PER_METHOD (default):\n *   - A NEW instance of the test class is created for EACH test method.\n *   - @BeforeAll/@AfterAll must be static.\n *   - No shared state between tests — safer default.\n */\n@TestInstance(TestInstance.Lifecycle.PER_METHOD)\nclass PerMethodLifecycleDemo {\n\n    private final int instanceId = System.identityHashCode(this);\n\n    @BeforeAll\n    static void initAll() {\n        // Must be static in PER_METHOD mode\n        System.out.println(\"PER_METHOD @BeforeAll — runs once\");\n    }\n\n    @BeforeEach\n    void init() {\n        System.out.println(\"New instance: \" + instanceId);\n    }\n\n    @Test\n    void firstTest() {\n        System.out.println(\"Running in instance \" + instanceId);\n    }\n\n    @Test\n    void secondTest() {\n        // instanceId is different from firstTest's\n        System.out.println(\"Running in instance \" + instanceId);\n    }\n\n    @AfterEach\n    void tearDown() {\n    }\n\n    @AfterAll\n    static void tearDownAll() {\n        System.out.println(\"PER_METHOD @AfterAll — runs once\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-interface-default-methods",
      children: "2.5 Interface Default Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.lifecycle;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.TestInstance;\n\n/**\n * JUnit 5 allows @Test, @BeforeEach, @AfterEach, etc. on interface\n * default methods. This enables reusable test behaviours via\n * composition through interfaces.\n */\ninterface DatabaseTest {\n\n    @BeforeEach\n    default void setUpDatabase() {\n        System.out.println(\"Opening database connection...\");\n    }\n\n    @Test\n    default void databaseConnectionIsValid() {\n        System.out.println(\"Verifying database connection...\");\n    }\n}\n\ninterface TransactionalTest {\n\n    @BeforeEach\n    default void beginTransaction() {\n        System.out.println(\"Beginning transaction...\");\n    }\n}\n\nclass UserRepositoryTest implements DatabaseTest, TransactionalTest {\n\n    @Test\n    void shouldSaveUser() {\n        System.out.println(\"Testing user persistence...\");\n    }\n\n    @Test\n    void shouldFindUserByEmail() {\n        System.out.println(\"Testing user lookup by email...\");\n    }\n}\n\n/**\n * Default test methods in interfaces can also be parameterized,\n * allowing generic contract tests.\n */\ninterface ComparableContract<T extends Comparable<T>> {\n\n    T createValue();\n    T createSmallerValue();\n    T createLargerValue();\n\n    @Test\n    default void shouldReturnZeroWhenEqual() {\n        T value = createValue();\n        org.junit.jupiter.api.Assertions.assertEquals(0, value.compareTo(value));\n    }\n\n    @Test\n    default void shouldReturnNegativeWhenSmaller() {\n        T smaller = createSmallerValue();\n        T larger = createLargerValue();\n        org.junit.jupiter.api.Assertions.assertTrue(smaller.compareTo(larger) < 0);\n    }\n\n    @Test\n    default void shouldReturnPositiveWhenLarger() {\n        T smaller = createSmallerValue();\n        T larger = createLargerValue();\n        org.junit.jupiter.api.Assertions.assertTrue(larger.compareTo(smaller) > 0);\n    }\n}\n\nclass IntegerContractTest implements ComparableContract<Integer> {\n\n    @Override\n    public Integer createValue() {\n        return 42;\n    }\n\n    @Override\n    public Integer createSmallerValue() {\n        return 1;\n    }\n\n    @Override\n    public Integer createLargerValue() {\n        return 100;\n    }\n}\n\nclass StringContractTest implements ComparableContract<String> {\n\n    @Override\n    public String createValue() {\n        return \"banana\";\n    }\n\n    @Override\n    public String createSmallerValue() {\n        return \"apple\";\n    }\n\n    @Override\n    public String createLargerValue() {\n        return \"cherry\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!NOTE]\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "@BeforeAll"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@AfterAll"
        }), " methods must be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static"
        }), " by default unless ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@TestInstance(Lifecycle.PER_CLASS)"
        }), " is used."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-assertions--assumptions",
      children: "3. Assertions & Assumptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-standard-assertions",
      children: "3.1 Standard Assertions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.assertions;\n\nimport org.junit.jupiter.api.Test;\n\nimport java.time.Duration;\nimport java.util.Arrays;\nimport java.util.List;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass StandardAssertionDemo {\n\n    private final Calculator calc = new Calculator();\n\n    @Test\n    void basicAssertions() {\n        assertEquals(4, calc.add(2, 2));\n        assertEquals(4, calc.add(2, 2), \"optional failure message\");\n        assertEquals(4, calc.add(2, 2), () -> \"lazy evaluation: \" + expensiveMessage());\n\n        assertNotEquals(5, calc.add(2, 2));\n        assertTrue(calc.add(1, 1) > 0);\n        assertFalse(calc.add(-1, -1) > 0);\n        assertNull(calc.getLastResult());\n    }\n\n    @Test\n    void objectAssertions() {\n        Object a = new Object();\n        Object b = a;\n        Object c = new Object();\n\n        assertSame(a, b);\n        assertNotSame(a, c);\n        assertNotNull(a);\n        assertInstanceOf(Integer.class, 42);\n    }\n\n    @Test\n    void arrayAssertions() {\n        int[] expected = {1, 2, 3};\n        int[] actual = {1, 2, 3};\n        assertArrayEquals(expected, actual);\n    }\n\n    @Test\n    void iterableAssertions() {\n        List<String> expected = Arrays.asList(\"a\", \"b\", \"c\");\n        List<String> actual = Arrays.asList(\"a\", \"b\", \"c\");\n        assertIterableEquals(expected, actual);\n    }\n\n    @Test\n    void exceptionAssertions() {\n        Exception exception = assertThrows(IllegalArgumentException.class, () -> {\n            calc.divide(1, 0);\n        });\n        assertTrue(exception.getMessage().contains(\"cannot divide by zero\"));\n\n        assertDoesNotThrow(() -> calc.divide(4, 2));\n    }\n\n    @Test\n    void timeoutAssertions() {\n        assertTimeout(Duration.ofMillis(200), () -> {\n            Thread.sleep(100);\n            return \"finished\";\n        });\n\n        // assertTimeoutPreemptively — interrupts the thread if it times out\n        // Use with caution: the thread is interrupted, not killed, so\n        // resources may leak.\n        String result = assertTimeoutPreemptively(\n            Duration.ofMillis(500),\n            () -> {\n                Thread.sleep(100);\n                return \"done\";\n            }\n        );\n        assertEquals(\"done\", result);\n    }\n\n    @Test\n    void linesMatch() {\n        List<String> expected = Arrays.asList(\"foo\", \"bar\", \"baz\");\n        List<String> actual = Arrays.asList(\"foo\", \"bar\", \"baz\");\n        assertLinesMatch(expected, actual);\n    }\n\n    private String expensiveMessage() {\n        return \"Computed after \" + System.currentTimeMillis();\n    }\n}\n\nclass Calculator {\n\n    private Integer lastResult;\n\n    int add(int a, int b) {\n        lastResult = a + b;\n        return lastResult;\n    }\n\n    int divide(int a, int b) {\n        if (b == 0) {\n            throw new IllegalArgumentException(\"cannot divide by zero\");\n        }\n        lastResult = a / b;\n        return lastResult;\n    }\n\n    Integer getLastResult() {\n        return lastResult;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-grouped-assertions-assertall",
      children: "3.2 Grouped Assertions (assertAll)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "assertAll"
      }), " executes every assertion inside, even if some fail. This is critical for verifying domain objects: you want to see ALL violations, not stop at the first one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.assertions;\n\nimport org.junit.jupiter.api.Test;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass GroupedAssertionDemo {\n\n    @Test\n    void singleAssertAll() {\n        Address address = new Address(\"123 Main St\", \"Springfield\", \"IL\", \"62701\");\n\n        assertAll(\"address\",\n            () -> assertEquals(\"123 Main St\", address.street()),\n            () -> assertEquals(\"Springfield\", address.city()),\n            () -> assertEquals(\"IL\", address.state()),\n            () -> assertEquals(\"62701\", address.zip())\n        );\n    }\n\n    @Test\n    void nestedAssertAll() {\n        Customer customer = new Customer(\n            \"Alice\",\n            \"Johnson\",\n            new Address(\"456 Oak Ave\", \"Portland\", \"OR\", \"97201\")\n        );\n\n        assertAll(\"customer\",\n            () -> assertEquals(\"Alice\", customer.firstName()),\n            () -> assertEquals(\"Johnson\", customer.lastName()),\n            () -> assertAll(\"customer.address\",\n                () -> assertEquals(\"456 Oak Ave\", customer.address().street()),\n                () -> assertEquals(\"Portland\", customer.address().city()),\n                () -> assertEquals(\"OR\", customer.address().state())\n            )\n        );\n    }\n\n    @Test\n    void assertAllWithCollectionResult() {\n        // assertAll returns a list of Throwables (one per failed head).\n        // You can inspect this list programmatically.\n        assertAll(\"multiple validations\",\n            () -> assertTrue(true),\n            () -> assertTrue(true)\n            // Every head is executed; none throw, so the overall test passes.\n        );\n    }\n\n    /**\n     * Demonstration: assertAll reports ALL failures at once,\n     * unlike a plain sequence of assertions that stops at the first.\n     */\n    @Test\n    void compareWithSequentialFailures() {\n        // With sequential assertions, this test stops at the first failure.\n        // Uncomment to see the behaviour:\n        // Person p = new Person(null, \"Doe\");\n        // assertNotNull(p.firstName(), \"firstName must not be null\"); // FAILS — stops here\n        // assertNotNull(p.lastName(), \"lastName must not be null\");   // never reached\n\n        // With assertAll, both failures are reported:\n        Person p = new Person(null, null);\n        assertAll(\"person fields\",\n            () -> assertNotNull(p.firstName(), \"firstName must not be null\"),\n            () -> assertNotNull(p.lastName(), \"lastName must not be null\")\n        );\n    }\n}\n\nrecord Address(String street, String city, String state, String zip) {}\nrecord Customer(String firstName, String lastName, Address address) {}\nrecord Person(String firstName, String lastName) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-assumptions",
      children: "3.3 Assumptions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Assumptions gate test execution based on conditions. A failed assumption ", (0,jsx_runtime.jsx)(_components.em, {
        children: "skips"
      }), " the test rather than failing it. This is different from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assert*"
      }), " which fails."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.assertions;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.condition.EnabledOnOs;\nimport org.junit.jupiter.api.condition.OS;\n\nimport static org.junit.jupiter.api.Assertions.assertEquals;\nimport static org.junit.jupiter.api.Assumptions.*;\n\nclass AssumptionDemo {\n\n    @Test\n    void assumeEnvironment() {\n        String ciEnv = System.getenv(\"CI\");\n        assumeTrue(ciEnv != null, \"Skipping: not running in CI environment\");\n        // Only runs if CI env var is set\n        assertEquals(\"true\", ciEnv);\n    }\n\n    @Test\n    void assumingThatExample() {\n        // assumingThat runs the executable only if the condition is true.\n        // Unlike assumeTrue, the test is NOT skipped — the block is\n        // simply not executed.\n        assumingThat(\n            \"CI\".equals(System.getenv(\"ENV\")),\n            () -> {\n                // This block only runs in CI environment\n                assertEquals(4, 2 + 2);\n            }\n        );\n\n        // This always runs\n        assertEquals(2, 1 + 1);\n    }\n\n    @Test\n    void assumeWithCustomMessage() {\n        assumeTrue(\n            Runtime.version().feature() >= 17,\n            () -> \"Test requires Java 17+, got \" + Runtime.version()\n        );\n    }\n\n    @Test\n    @EnabledOnOs(OS.LINUX)\n    void onlyOnLinux() {\n        // Built-in conditional execution annotation\n        assertEquals(0, 0);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\nAlways use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "assertEquals(expected, actual)"
        }), " → the argument order matters for clear failure messages."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-parameterized-tests",
      children: "4. Parameterized Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Parameterized tests run the same test method multiple times with different arguments. They are declared with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ParameterizedTest"
      }), " plus at least one source annotation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-valuesource",
      children: "4.1 ValueSource"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.parameterized;\n\nimport org.junit.jupiter.params.ParameterizedTest;\nimport org.junit.jupiter.params.provider.ValueSource;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass ValueSourceDemo {\n\n    private final StringValidator validator = new StringValidator();\n\n    @ParameterizedTest\n    @ValueSource(strings = {\"racecar\", \"radar\", \"level\", \"madam\"})\n    void palindromesAreRecognized(String candidate) {\n        assertTrue(validator.isPalindrome(candidate));\n    }\n\n    @ParameterizedTest\n    @ValueSource(ints = {2, 4, 6, 8, 10})\n    void evenNumbers(int number) {\n        assertEquals(0, number % 2);\n    }\n\n    @ParameterizedTest\n    @ValueSource(longs = {1L, 2L, 3L})\n    void longValues(long value) {\n        assertTrue(value > 0);\n    }\n\n    @ParameterizedTest\n    @ValueSource(doubles = {1.5, 2.7, 3.14})\n    void doubleValues(double value) {\n        assertTrue(value > 0);\n    }\n}\n\nclass StringValidator {\n\n    boolean isPalindrome(String s) {\n        String reversed = new StringBuilder(s).reverse().toString();\n        return s.equals(reversed);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-nullsource-emptysource-nullandemptysource",
      children: "4.2 NullSource, EmptySource, NullAndEmptySource"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.parameterized;\n\nimport org.junit.jupiter.params.ParameterizedTest;\nimport org.junit.jupiter.params.provider.EmptySource;\nimport org.junit.jupiter.params.provider.NullAndEmptySource;\nimport org.junit.jupiter.params.provider.NullSource;\nimport org.junit.jupiter.params.provider.ValueSource;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass NullEmptySourceDemo {\n\n    private final UserService service = new UserService();\n\n    @ParameterizedTest\n    @NullSource\n    void shouldRejectNull(String name) {\n        assertFalse(service.isValidUsername(name));\n    }\n\n    @ParameterizedTest\n    @EmptySource\n    void shouldRejectEmpty(String name) {\n        assertFalse(service.isValidUsername(name));\n    }\n\n    @ParameterizedTest\n    @NullAndEmptySource\n    void shouldRejectNullOrEmpty(String name) {\n        assertFalse(service.isValidUsername(name));\n    }\n\n    @ParameterizedTest\n    @NullAndEmptySource\n    @ValueSource(strings = {\" \", \"\\t\", \"\\n\", \"ab\", \"a\", \"\"})\n    void shouldRejectAllInvalidValues(String name) {\n        assertFalse(service.isValidUsername(name));\n    }\n}\n\nclass UserService {\n\n    boolean isValidUsername(String username) {\n        return username != null\n            && !username.isBlank()\n            && username.length() >= 3\n            && username.length() <= 20\n            && username.matches(\"^[a-zA-Z0-9_]+$\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-enumsource",
      children: "4.3 EnumSource"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.parameterized;\n\nimport org.junit.jupiter.params.ParameterizedTest;\nimport org.junit.jupiter.params.provider.EnumSource;\nimport org.junit.jupiter.params.provider.EnumSource.Mode;\n\nimport java.time.DayOfWeek;\nimport java.time.Month;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass EnumSourceDemo {\n\n    private final BusinessCalendar calendar = new BusinessCalendar();\n\n    @ParameterizedTest\n    @EnumSource(DayOfWeek.class)\n    void allDaysAreHandled(DayOfWeek day) {\n        assertNotNull(calendar.describe(day));\n    }\n\n    @ParameterizedTest\n    @EnumSource(value = DayOfWeek.class, names = {\"SATURDAY\", \"SUNDAY\"})\n    void weekendsAreNonWorking(DayOfWeek day) {\n        assertFalse(calendar.isWorkingDay(day));\n    }\n\n    @ParameterizedTest\n    @EnumSource(value = DayOfWeek.class, names = {\"SATURDAY\", \"SUNDAY\"}, mode = Mode.EXCLUDE)\n    void weekdaysAreWorking(DayOfWeek day) {\n        assertTrue(calendar.isWorkingDay(day));\n    }\n\n    @ParameterizedTest\n    @EnumSource(value = DayOfWeek.class, names = \".+DAY\", mode = Mode.MATCH_ALL)\n    void matchByPattern(DayOfWeek day) {\n        assertNotNull(day);\n    }\n\n    @ParameterizedTest\n    @EnumSource(value = Month.class, names = {\"JANUARY\", \"FEBRUARY\", \"MARCH\"}, mode = Mode.INCLUDE)\n    void q1Months(Month month) {\n        assertTrue(month.getValue() <= 3);\n    }\n}\n\nclass BusinessCalendar {\n\n    boolean isWorkingDay(DayOfWeek day) {\n        return switch (day) {\n            case SATURDAY, SUNDAY -> false;\n            default -> true;\n        };\n    }\n\n    String describe(DayOfWeek day) {\n        return switch (day) {\n            case MONDAY -> \"Start of work week\";\n            case TUESDAY -> \"Second day\";\n            case WEDNESDAY -> \"Midweek\";\n            case THURSDAY -> \"Almost Friday\";\n            case FRIDAY -> \"Last workday\";\n            case SATURDAY -> \"Weekend\";\n            case SUNDAY -> \"Weekend\";\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-methodsource",
      children: "4.4 MethodSource"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@MethodSource"
      }), " references a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "static"
      }), " factory method (or methods) that returns a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stream"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collection"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Iterable"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Iterator"
      }), ", or array of arguments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.parameterized;\n\nimport org.junit.jupiter.params.ParameterizedTest;\nimport org.junit.jupiter.params.provider.Arguments;\nimport org.junit.jupiter.params.provider.MethodSource;\n\nimport java.util.List;\nimport java.util.stream.IntStream;\nimport java.util.stream.Stream;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.junit.jupiter.params.provider.Arguments.arguments;\n\nclass MethodSourceDemo {\n\n    private final TaxCalculator tax = new TaxCalculator();\n\n    @ParameterizedTest\n    @MethodSource(\"provideTaxBrackets\")\n    void taxIsCalculatedCorrectly(double income, double expectedTax) {\n        assertEquals(expectedTax, tax.calculate(income), 0.01);\n    }\n\n    static Stream<Arguments> provideTaxBrackets() {\n        return Stream.of(\n            arguments(10_000, 0),\n            arguments(50_000, 6_000),\n            arguments(100_000, 17_000),\n            arguments(250_000, 62_000)\n        );\n    }\n\n    @ParameterizedTest\n    @MethodSource(\"junit5.parameterized.ExternalDataProviders#provideStrings\")\n    void externalMethodSource(String input) {\n        assertNotNull(input);\n    }\n\n    @ParameterizedTest\n    @MethodSource({\"provideNames\", \"provideMoreNames\"})\n    void multipleFactories(String name) {\n        assertNotNull(name);\n    }\n\n    static Stream<String> provideNames() {\n        return Stream.of(\"Alice\", \"Bob\", \"Charlie\");\n    }\n\n    static Stream<String> provideMoreNames() {\n        return Stream.of(\"Diana\", \"Eve\");\n    }\n\n    @ParameterizedTest\n    @MethodSource\n    void methodSourceMatchingName(String value) {\n        // When @MethodSource has no value, it uses the test method name:\n        // \"methodSourceMatchingName\"\n        assertFalse(value.isEmpty());\n    }\n\n    static Stream<String> methodSourceMatchingName() {\n        return Stream.of(\"x\", \"y\", \"z\");\n    }\n\n    @ParameterizedTest\n    @MethodSource(\"intStreamProvider\")\n    void withSimpleTypes(int value) {\n        assertTrue(value >= 0);\n    }\n\n    static IntStream intStreamProvider() {\n        return IntStream.range(0, 5);\n    }\n\n    @ParameterizedTest\n    @MethodSource(\"objectListProvider\")\n    void withObjectList(String item) {\n        assertNotNull(item);\n    }\n\n    static List<String> objectListProvider() {\n        return List.of(\"A\", \"B\", \"C\");\n    }\n}\n\nclass ExternalDataProviders {\n\n    static Stream<String> provideStrings() {\n        return Stream.of(\"external1\", \"external2\", \"external3\");\n    }\n}\n\nclass TaxCalculator {\n\n    double calculate(double income) {\n        if (income <= 12_000) return 0;\n        if (income <= 50_000) return (income - 12_000) * 0.15;\n        if (income <= 150_000) return 5700 + (income - 50_000) * 0.25;\n        return 30700 + (income - 150_000) * 0.35;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-csvsource",
      children: "4.5 CsvSource"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.parameterized;\n\nimport org.junit.jupiter.params.ParameterizedTest;\nimport org.junit.jupiter.params.provider.CsvSource;\nimport org.junit.jupiter.params.provider.CsvFileSource;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass CsvSourceDemo {\n\n    private final ShoppingCart cart = new ShoppingCart();\n\n    @ParameterizedTest\n    @CsvSource({\n        \"apple,   1.50,  3,  4.50\",\n        \"banana,  0.75,  2,  1.50\",\n        \"orange,  1.25,  4,  5.00\",\n        \"'kiwi fruit',  0.50, 10, 5.00\"\n    })\n    void lineItemTotal(String product, double unitPrice, int quantity, double expectedTotal) {\n        assertEquals(expectedTotal, cart.calculateLineTotal(unitPrice, quantity), 0.001);\n    }\n\n    @ParameterizedTest\n    @CsvSource(textBlock = \"\"\"\n        apple,   1.50,  3,  4.50\n        banana,  0.75,  2,  1.50\n        orange,  1.25,  4,  5.00\n        kiwi,    0.50, 10,  5.00\n    \"\"\")\n    void usingTextBlock(String product, double unitPrice, int quantity, double expectedTotal) {\n        assertEquals(expectedTotal, cart.calculateLineTotal(unitPrice, quantity), 0.001);\n    }\n\n    @ParameterizedTest\n    @CsvSource(value = {\n        \"null | 0 | 0\",\n        \"''   | 0 | 0\"\n    }, delimiter = '|', nullValues = {\"null\", \"N/A\"})\n    void withNullAndCustomDelimiter(String input, int length, int hashCode) {\n        // nullValues: \"null\" and \"N/A\" strings in the CSV become Java null\n        assertNull(input);\n        assertEquals(0, length);\n    }\n\n    @ParameterizedTest\n    @CsvSource(value = {\n        \"1 : 2 : 3\",\n        \"10: 20: 30\"\n    }, delimiter = ':')\n    void customDelimiter(int a, int b, int c) {\n        assertEquals(a + b, c);\n    }\n\n    @ParameterizedTest\n    @CsvSource({\n        \"hello,  5,  true\",\n        \"hi,     2,  true\",\n        \",       0,  false\"\n    })\n    void stringLengthAndPresence(String input, int expectedLength, boolean expectedPresent) {\n        if (input != null) {\n            assertEquals(expectedLength, input.length());\n        }\n        assertEquals(expectedPresent, input != null && !input.isEmpty());\n    }\n}\n\nclass ShoppingCart {\n\n    double calculateLineTotal(double unitPrice, int quantity) {\n        return unitPrice * quantity;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-csvfilesource",
      children: "4.6 CsvFileSource"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.parameterized;\n\nimport org.junit.jupiter.params.ParameterizedTest;\nimport org.junit.jupiter.params.provider.CsvFileSource;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\n/**\n * Loads test data from a CSV file on the classpath.\n *\n * src/test/resources/tax-data.csv:\n *   income, expectedTax\n *   10000, 0\n *   50000, 6000\n *   100000, 17000\n *   250000, 62000\n */\nclass CsvFileSourceDemo {\n\n    private final TaxCalculator tax = new TaxCalculator();\n\n    @ParameterizedTest\n    @CsvFileSource(resources = \"/tax-data.csv\", numLinesToSkip = 1)\n    void fromCsvFile(double income, double expectedTax) {\n        assertEquals(expectedTax, tax.calculate(income), 0.01);\n    }\n\n    @ParameterizedTest\n    @CsvFileSource(\n        resources = \"/tax-data.csv\",\n        numLinesToSkip = 1,\n        delimiter = ',',\n        encoding = \"UTF-8\"\n    )\n    void withExplicitSettings(double income, double expectedTax) {\n        assertEquals(expectedTax, tax.calculate(income), 0.01);\n    }\n\n    @ParameterizedTest\n    @CsvFileSource(\n        resources = {\"/tax-data.csv\", \"/more-tax-data.csv\"},\n        numLinesToSkip = 1\n    )\n    void fromMultipleFiles(double income, double expectedTax) {\n        assertDoesNotThrow(() -> tax.calculate(income));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-argumentssource-custom-argumentsprovider",
      children: "4.7 ArgumentsSource (Custom ArgumentsProvider)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.parameterized;\n\nimport org.junit.jupiter.api.extension.ExtensionContext;\nimport org.junit.jupiter.params.ParameterizedTest;\nimport org.junit.jupiter.params.provider.Arguments;\nimport org.junit.jupiter.params.provider.ArgumentsProvider;\nimport org.junit.jupiter.params.provider.ArgumentsSource;\n\nimport java.util.stream.Stream;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.junit.jupiter.params.provider.Arguments.arguments;\n\nclass ArgumentsSourceDemo {\n\n    @ParameterizedTest\n    @ArgumentsSource(RomanNumeralProvider.class)\n    void romanNumerals(int arabic, String roman) {\n        RomanConverter converter = new RomanConverter();\n        assertEquals(roman, converter.toRoman(arabic));\n    }\n}\n\nclass RomanNumeralProvider implements ArgumentsProvider {\n\n    @Override\n    public Stream<? extends Arguments> provideArguments(ExtensionContext context) {\n        return Stream.of(\n            arguments(1, \"I\"),\n            arguments(4, \"IV\"),\n            arguments(9, \"IX\"),\n            arguments(10, \"X\"),\n            arguments(40, \"XL\"),\n            arguments(50, \"L\"),\n            arguments(90, \"XC\"),\n            arguments(100, \"C\"),\n            arguments(400, \"CD\"),\n            arguments(500, \"D\"),\n            arguments(900, \"CM\"),\n            arguments(1000, \"M\"),\n            arguments(1987, \"MCMLXXXVII\"),\n            arguments(2024, \"MMXXIV\")\n        );\n    }\n}\n\nclass RomanConverter {\n\n    private static final int[] VALUES = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};\n    private static final String[] SYMBOLS = {\"M\", \"CM\", \"D\", \"CD\", \"C\", \"XC\", \"L\", \"XL\", \"X\", \"IX\", \"V\", \"IV\", \"I\"};\n\n    String toRoman(int num) {\n        if (num <= 0 || num > 3999) {\n            throw new IllegalArgumentException(\"Out of range: \" + num);\n        }\n        StringBuilder result = new StringBuilder();\n        for (int i = 0; i < VALUES.length; i++) {\n            while (num >= VALUES[i]) {\n                num -= VALUES[i];\n                result.append(SYMBOLS[i]);\n            }\n        }\n        return result.toString();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-argument-conversion--aggregation",
      children: "5. Argument Conversion & Aggregation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-implicit-and-explicit-conversion",
      children: "5.1 Implicit and Explicit Conversion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JUnit 5 automatically converts strings to common types (", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "long"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "double"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "boolean"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BigDecimal"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UUID"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Locale"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "File"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Path"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "URL"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "URI"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Instant"
      }), ", etc.). For custom types, implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ArgumentConverter"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.parameterized;\n\nimport org.junit.jupiter.api.extension.ParameterContext;\nimport org.junit.jupiter.params.converter.ArgumentConversionException;\nimport org.junit.jupiter.params.converter.ArgumentConverter;\nimport org.junit.jupiter.params.converter.ConvertWith;\nimport org.junit.jupiter.params.ParameterizedTest;\nimport org.junit.jupiter.params.provider.CsvSource;\n\nimport java.time.LocalDate;\nimport java.time.format.DateTimeFormatter;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass ArgumentConversionDemo {\n\n    @ParameterizedTest\n    @CsvSource({\n        \"2024-01-15, 2024-01-15\",\n        \"2023-12-25, 2023-12-25\"\n    })\n    void implicitDateConversion(LocalDate date, LocalDate expected) {\n        assertEquals(expected, date);\n    }\n\n    @ParameterizedTest\n    @CsvSource({\n        \"15-01-2024, 2024-01-15\",\n        \"25-12-2023, 2023-12-25\"\n    })\n    void explicitConversion(@ConvertWith(EuropeanDateConverter.class) LocalDate date) {\n        assertNotNull(date);\n        assertEquals(LocalDate.now().getYear(), date.getYear());\n    }\n}\n\nclass EuropeanDateConverter implements ArgumentConverter {\n\n    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern(\"dd-MM-yyyy\");\n\n    @Override\n    public Object convert(Object source, ParameterContext context)\n            throws ArgumentConversionException {\n        if (source == null) {\n            return null;\n        }\n        if (!(source instanceof String s)) {\n            throw new ArgumentConversionException(\"Expected a String but got \" + source.getClass());\n        }\n        try {\n            return LocalDate.parse(s, FORMATTER);\n        } catch (Exception e) {\n            throw new ArgumentConversionException(\"Failed to convert '\" + s + \"' to LocalDate\", e);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-argument-aggregation",
      children: "5.2 Argument Aggregation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a parameterized test has many arguments, aggregating them into a single object improves readability."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.parameterized;\n\nimport org.junit.jupiter.api.extension.ParameterContext;\nimport org.junit.jupiter.params.ParameterizedTest;\nimport org.junit.jupiter.params.aggregator.AggregateWith;\nimport org.junit.jupiter.params.aggregator.ArgumentsAccessor;\nimport org.junit.jupiter.params.aggregator.ArgumentsAggregationException;\nimport org.junit.jupiter.params.aggregator.ArgumentsAggregator;\nimport org.junit.jupiter.params.provider.CsvSource;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass ArgumentAggregationDemo {\n\n    @ParameterizedTest\n    @CsvSource({\n        \"Alice, 30, alice@example.com\",\n        \"Bob, 25, bob@example.com\",\n        \"Charlie, 35, charlie@example.com\"\n    })\n    void usingArgumentsAccessor(ArgumentsAccessor accessor) {\n        String name = accessor.getString(0);\n        int age = accessor.getInteger(1);\n        String email = accessor.getString(2);\n\n        assertNotNull(name);\n        assertTrue(age > 0);\n        assertTrue(email.contains(\"@\"));\n    }\n\n    @ParameterizedTest\n    @CsvSource({\n        \"Alice, 30, alice@example.com\",\n        \"Bob, 25, bob@example.com\"\n    })\n    void usingCustomAggregator(@AggregateWith(PersonAggregator.class) Person person) {\n        assertNotNull(person.name());\n        assertTrue(person.age() > 0);\n        assertTrue(person.email().contains(\"@\"));\n    }\n\n    @ParameterizedTest\n    @CsvSource({\n        \"Alice, 30, alice@example.com\",\n        \"Bob, 25, bob@example.com\"\n    })\n    void usingCustomAnnotation(@CsvToPerson Person person) {\n        assertNotNull(person);\n    }\n}\n\nrecord Person(String name, int age, String email) {}\n\nclass PersonAggregator implements ArgumentsAggregator {\n\n    @Override\n    public Object aggregateArguments(ArgumentsAccessor accessor, ParameterContext context)\n            throws ArgumentsAggregationException {\n        return new Person(\n            accessor.getString(0),\n            accessor.getInteger(1),\n            accessor.getString(2)\n        );\n    }\n}\n\n/**\n * Composed annotation for reusable aggregation.\n */\n@java.lang.annotation.Target(java.lang.annotation.ElementType.PARAMETER)\n@java.lang.annotation.Retention(java.lang.annotation.RetentionPolicy.RUNTIME)\n@AggregateWith(PersonAggregator.class)\n@interface CsvToPerson {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-dynamic-tests",
      children: "6. Dynamic Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dynamic tests are generated at runtime by a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TestFactory"
      }), " method. Unlike ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Test"
      }), " methods which are compile-time constants, dynamic tests can be generated based on external data, database state, or file system contents."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-dynamictest",
      children: "6.1 DynamicTest"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.dynamictests;\n\nimport org.junit.jupiter.api.DynamicNode;\nimport org.junit.jupiter.api.DynamicTest;\nimport org.junit.jupiter.api.TestFactory;\nimport org.junit.jupiter.api.DynamicContainer;\n\nimport java.util.Arrays;\nimport java.util.Collection;\nimport java.util.Iterator;\nimport java.util.List;\nimport java.util.Random;\nimport java.util.function.Function;\nimport java.util.stream.IntStream;\nimport java.util.stream.Stream;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.junit.jupiter.api.DynamicContainer.dynamicContainer;\nimport static org.junit.jupiter.api.DynamicTest.dynamicTest;\n\nclass DynamicTestDemo {\n\n    private final StringConverter converter = new StringConverter();\n\n    @TestFactory\n    Collection<DynamicTest> collectionOfDynamicTests() {\n        return Arrays.asList(\n            dynamicTest(\"1st dynamic test\", () -> assertTrue(true)),\n            dynamicTest(\"2nd dynamic test\", () -> assertEquals(4, 2 + 2))\n        );\n    }\n\n    @TestFactory\n    Stream<DynamicTest> streamOfDynamicTests() {\n        return Stream.of(\n            dynamicTest(\"positive number\", () -> assertTrue(42 > 0)),\n            dynamicTest(\"negative number\", () -> assertTrue(-1 < 0)),\n            dynamicTest(\"zero\", () -> assertEquals(0, 0))\n        );\n    }\n\n    @TestFactory\n    Iterator<DynamicTest> iteratorOfDynamicTests() {\n        return List.of(\n            dynamicTest(\"from iterator 1\", () -> {}),\n            dynamicTest(\"from iterator 2\", () -> {})\n        ).iterator();\n    }\n\n    /**\n     * Generate dynamic tests from external data — this is where\n     * dynamic tests truly shine: tests are generated per data row.\n     */\n    @TestFactory\n    Stream<DynamicTest> dynamicTestsFromData() {\n        List<String> words = Arrays.asList(\"racecar\", \"radar\", \"level\", \"hello\", \"world\");\n        return words.stream()\n            .filter(word -> word.contains(\"a\"))\n            .map(word -> dynamicTest(\n                \"palindrome test: \" + word,\n                () -> {\n                    if (word.equals(\"hello\") || word.equals(\"world\")) {\n                        assertFalse(converter.isPalindrome(word));\n                    } else {\n                        assertTrue(converter.isPalindrome(word));\n                    }\n                }\n            ));\n    }\n\n    @TestFactory\n    Stream<DynamicTest> dynamicTestsWithGeneratedNames() {\n        return IntStream.range(1, 5)\n            .mapToObj(i -> dynamicTest(\n                \"multiplication test #\" + i,\n                () -> assertEquals(i * i, i * i)\n            ));\n    }\n\n    @TestFactory\n    Stream<DynamicTest> randomDynamicTests() {\n        Random random = new Random(42);\n        return Stream.generate(() -> {\n                int a = random.nextInt(100);\n                int b = random.nextInt(100);\n                return dynamicTest(\n                    a + \" + \" + b + \" = \" + (a + b),\n                    () -> assertEquals(a + b, a + b)\n                );\n            })\n            .limit(10);\n    }\n}\n\nclass StringConverter {\n\n    boolean isPalindrome(String s) {\n        return s.equals(new StringBuilder(s).reverse().toString());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-dynamiccontainer",
      children: "6.2 DynamicContainer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "DynamicContainer"
      }), " groups dynamic tests into a hierarchical structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.dynamictests;\n\nimport org.junit.jupiter.api.DynamicContainer;\nimport org.junit.jupiter.api.DynamicNode;\nimport org.junit.jupiter.api.DynamicTest;\nimport org.junit.jupiter.api.TestFactory;\n\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Stream;\n\nimport static org.junit.jupiter.api.DynamicContainer.dynamicContainer;\nimport static org.junit.jupiter.api.DynamicTest.dynamicTest;\n\nclass DynamicContainerDemo {\n\n    private final ProductValidator validator = new ProductValidator();\n\n    @TestFactory\n    DynamicNode nestedDynamicTests() {\n        return dynamicContainer(\"Products\", Stream.of(\n            dynamicContainer(\"Electronics\", Stream.of(\n                dynamicTest(\"Laptop price is valid\", () -> validator.isValidPrice(999.99)),\n                dynamicTest(\"Phone price is valid\", () -> validator.isValidPrice(699.99))\n            )),\n            dynamicContainer(\"Books\", Stream.of(\n                dynamicTest(\"Novel price is valid\", () -> validator.isValidPrice(14.99)),\n                dynamicTest(\"Textbook price is valid\", () -> validator.isValidPrice(79.99))\n            ))\n        ));\n    }\n\n    @TestFactory\n    DynamicNode deeplyNestedStructure() {\n        return dynamicContainer(\"Math Operations\", Arrays.asList(\n            dynamicContainer(\"Addition\", Arrays.asList(\n                dynamicContainer(\"Positive\", List.of(\n                    dynamicTest(\"1 + 1 = 2\", () -> {}),\n                    dynamicTest(\"2 + 3 = 5\", () -> {})\n                )),\n                dynamicContainer(\"Negative\", List.of(\n                    dynamicTest(\"-1 + -1 = -2\", () -> {}),\n                    dynamicTest(\"-5 + 3 = -2\", () -> {})\n                ))\n            )),\n            dynamicContainer(\"Multiplication\", Arrays.asList(\n                dynamicTest(\"2 * 3 = 6\", () -> {}),\n                dynamicTest(\"4 * 5 = 20\", () -> {})\n            ))\n        ));\n    }\n}\n\nclass ProductValidator {\n\n    boolean isValidPrice(double price) {\n        return price > 0 && price < 100_000;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-stream-based-dynamic-url-tests",
      children: "6.3 Stream-Based Dynamic URL Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.dynamictests;\n\nimport org.junit.jupiter.api.DynamicTest;\nimport org.junit.jupiter.api.TestFactory;\n\nimport java.io.IOException;\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport java.util.List;\nimport java.util.stream.Stream;\n\nimport static org.junit.jupiter.api.Assertions.assertEquals;\nimport static org.junit.jupiter.api.DynamicTest.dynamicTest;\n\nclass DynamicUrlTestDemo {\n\n    private final HttpClient httpClient = HttpClient.newHttpClient();\n\n    @TestFactory\n    Stream<DynamicTest> allEndpointsReturnOk() {\n        List<String> urls = List.of(\n            \"https://httpbin.org/status/200\",\n            \"https://httpbin.org/status/201\"\n        );\n        return urls.stream()\n            .map(url -> dynamicTest(\"GET \" + url + \" returns 2xx\", () -> {\n                HttpRequest request = HttpRequest.newBuilder()\n                    .uri(URI.create(url))\n                    .GET()\n                    .build();\n                HttpResponse<String> response = httpClient.send(request,\n                    HttpResponse.BodyHandlers.ofString());\n                int status = response.statusCode();\n                assertEquals(200, status, url + \" returned \" + status);\n            }));\n    }\n\n    @TestFactory\n    Stream<DynamicTest> batchValidation() {\n        List<ValidationCase> cases = List.of(\n            new ValidationCase(\"valid@email.com\", true),\n            new ValidationCase(\"not-an-email\", false),\n            new ValidationCase(\"user@.com\", false)\n        );\n        return cases.stream()\n            .map(tc -> dynamicTest(\n                tc.input() + \" -> \" + tc.expected(),\n                () -> assertEquals(tc.expected(), isValidEmail(tc.input()))\n            ));\n    }\n\n    private boolean isValidEmail(String email) {\n        return email != null && email.matches(\"^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,}$\");\n    }\n\n    record ValidationCase(String input, boolean expected) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-test-templates",
      children: "7. Test Templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.templates;\n\nimport org.junit.jupiter.api.TestTemplate;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.junit.jupiter.api.extension.Extension;\nimport org.junit.jupiter.api.extension.ExtensionContext;\nimport org.junit.jupiter.api.extension.TestTemplateInvocationContext;\nimport org.junit.jupiter.api.extension.TestTemplateInvocationContextProvider;\n\nimport java.util.List;\nimport java.util.stream.Stream;\n\nimport static org.junit.jupiter.api.Assertions.assertTrue;\n\n/**\n * @TestTemplate methods are invoked multiple times through\n * a TestTemplateInvocationContextProvider extension — one invocation\n * per context. This is the mechanism behind @RepeatedTest and\n * @ParameterizedTest.\n */\nclass TestTemplateDemo {\n\n    @TestTemplate\n    @ExtendWith(MyTestTemplateProvider.class)\n    void templateTestMethod(int value) {\n        assertTrue(value > 0);\n    }\n}\n\nclass MyTestTemplateProvider implements TestTemplateInvocationContextProvider {\n\n    @Override\n    public boolean supportsTestTemplate(ExtensionContext context) {\n        return true;\n    }\n\n    @Override\n    public Stream<TestTemplateInvocationContext> provideTestTemplateInvocationContexts(\n            ExtensionContext context) {\n        return Stream.of(\n            invocationContext(\"positive case 1\", 1),\n            invocationContext(\"positive case 2\", 2),\n            invocationContext(\"positive case 3\", 3)\n        );\n    }\n\n    private TestTemplateInvocationContext invocationContext(String displayName, int value) {\n        return new TestTemplateInvocationContext() {\n            @Override\n            public String getDisplayName(int invocationIndex) {\n                return displayName;\n            }\n\n            @Override\n            public List<Extension> getAdditionalExtensions() {\n                return List.of(new ValueResolver(value));\n            }\n        };\n    }\n}\n\nclass ValueResolver implements org.junit.jupiter.api.extension.ParameterResolver {\n\n    private final int value;\n\n    ValueResolver(int value) {\n        this.value = value;\n    }\n\n    @Override\n    public boolean supportsParameter(\n            org.junit.jupiter.api.extension.ParameterContext parameterContext,\n            ExtensionContext extensionContext) {\n        return parameterContext.getParameter().getType() == int.class;\n    }\n\n    @Override\n    public Object resolveParameter(\n            org.junit.jupiter.api.extension.ParameterContext parameterContext,\n            ExtensionContext extensionContext) {\n        return value;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-nested-tests",
      children: "8. Nested Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Nested"
      }), " creates inner test classes that inherit their parent's setup. Each level can have its own ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@BeforeEach"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "@AfterEach"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.nested;\n\nimport org.junit.jupiter.api.AfterEach;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.DisplayName;\nimport org.junit.jupiter.api.Nested;\nimport org.junit.jupiter.api.Test;\n\nimport java.util.EmptyStackException;\nimport java.util.Stack;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\n/**\n * Nested tests follow the \"Given-When-Then\" / \"Arrange-Act-Assert\"\n * structure. The outer class sets up the fixture, and each nested\n * class tests a specific behaviour.\n */\n@DisplayName(\"A Stack\")\nclass StackNestedTest {\n\n    private Stack<String> stack;\n\n    @BeforeEach\n    void setUp() {\n        System.out.println(\"Outer @BeforeEach\");\n    }\n\n    @AfterEach\n    void tearDown() {\n        System.out.println(\"Outer @AfterEach\");\n    }\n\n    @Nested\n    @DisplayName(\"when new\")\n    class WhenNew {\n\n        @BeforeEach\n        void createNewStack() {\n            stack = new Stack<>();\n        }\n\n        @Test\n        @DisplayName(\"is empty\")\n        void isEmpty() {\n            assertTrue(stack.isEmpty());\n        }\n\n        @Test\n        @DisplayName(\"throws EmptyStackException when popped\")\n        void throwsExceptionWhenPopped() {\n            assertThrows(EmptyStackException.class, () -> stack.pop());\n        }\n\n        @Test\n        @DisplayName(\"throws EmptyStackException when peeked\")\n        void throwsExceptionWhenPeeked() {\n            assertThrows(EmptyStackException.class, stack::peek);\n        }\n\n        @Nested\n        @DisplayName(\"after pushing an element\")\n        class AfterPushing {\n\n            private String element = \"item\";\n\n            @BeforeEach\n            void pushAnElement() {\n                stack.push(element);\n            }\n\n            @Test\n            @DisplayName(\"is no longer empty\")\n            void isNotEmpty() {\n                assertFalse(stack.isEmpty());\n            }\n\n            @Test\n            @DisplayName(\"peek returns the element\")\n            void peekReturnsElement() {\n                assertEquals(element, stack.peek());\n            }\n\n            @Test\n            @DisplayName(\"pop returns the element\")\n            void popReturnsElement() {\n                assertEquals(element, stack.pop());\n            }\n\n            @Test\n            @DisplayName(\"size is 1\")\n            void sizeIsOne() {\n                assertEquals(1, stack.size());\n            }\n\n            @Nested\n            @DisplayName(\"after pushing a second element\")\n            class AfterPushingSecond {\n\n                private String secondElement = \"second\";\n\n                @BeforeEach\n                void pushSecond() {\n                    stack.push(secondElement);\n                }\n\n                @Test\n                @DisplayName(\"size increases to 2\")\n                void sizeIsTwo() {\n                    assertEquals(2, stack.size());\n                }\n\n                @Test\n                @DisplayName(\"pop returns the top element (LIFO)\")\n                void popReturnsTop() {\n                    assertEquals(secondElement, stack.pop());\n                    assertEquals(element, stack.pop());\n                }\n            }\n        }\n    }\n\n    @Nested\n    @DisplayName(\"when full\")\n    class WhenFull {\n\n        private static final int CAPACITY = 10;\n\n        @BeforeEach\n        void fillStack() {\n            stack = new Stack<>();\n            for (int i = 0; i < CAPACITY; i++) {\n                stack.push(\"item-\" + i);\n            }\n        }\n\n        @Test\n        @DisplayName(\"size equals capacity\")\n        void sizeEqualsCapacity() {\n            assertEquals(CAPACITY, stack.size());\n        }\n\n        @Test\n        @DisplayName(\"popping all elements returns them in LIFO order\")\n        void lifoOrder() {\n            for (int i = CAPACITY - 1; i >= 0; i--) {\n                assertEquals(\"item-\" + i, stack.pop());\n            }\n            assertTrue(stack.isEmpty());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-tagging--filtering",
      children: "9. Tagging & Filtering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.tags;\n\nimport org.junit.jupiter.api.Tag;\nimport org.junit.jupiter.api.Test;\n\n/**\n * Tags allow filtering tests at run time — run only \"fast\" tests\n * during development, run \"integration\" and \"slow\" tests in CI.\n *\n * Maven: mvn test -Dgroups=\"fast\"\n * Gradle: gradle test --tests \"*.fast.*\"\n * IDE: configure test runner to include/exclude tags\n */\n@Tag(\"domain-model\")\nclass TaggedTestDemo {\n\n    @Test\n    @Tag(\"fast\")\n    void unitLevel() {\n    }\n\n    @Test\n    @Tag(\"fast\")\n    @Tag(\"smoke\")\n    void smokeTest() {\n    }\n\n    @Test\n    @Tag(\"integration\")\n    void databaseTest() {\n    }\n\n    @Test\n    @Tag(\"integration\")\n    @Tag(\"slow\")\n    void fullIntegrationTest() {\n    }\n\n    @Test\n    @Tag(\"performance\")\n    @Tag(\"slow\")\n    @Tag(\"load\")\n    void performanceBenchmark() {\n    }\n}\n\n/**\n * Tags are inherited from the class level to all test methods.\n * Combined with @Tag on methods, you can build a flexible\n * filtering taxonomy.\n */\n@Tag(\"repository\")\n@Tag(\"integration\")\nclass RepositoryTaggedTestDemo {\n\n    @Test\n    @Tag(\"h2\")\n    void withEmbeddedDatabase() {\n    }\n\n    @Test\n    @Tag(\"postgres\")\n    void withRealDatabase() {\n    }\n}\n\n/**\n * Composed annotation for reusable tag groups.\n */\n@Target(java.lang.annotation.ElementType.TYPE)\n@Retention(java.lang.annotation.RetentionPolicy.RUNTIME)\n@Tag(\"integration\")\n@Tag(\"slow\")\n@interface SlowIntegrationTest {\n}\n\n@SlowIntegrationTest\nclass AnnotatedTagTest {\n\n    @Test\n    void thisIsASlowIntegrationTest() {\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-extensions",
      children: "10. Extensions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extensions are JUnit 5's mechanism for plugging custom behaviour into the test lifecycle. They replace JUnit 4's runners and rules."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-extendwith-and-extension-interfaces",
      children: "10.1 @ExtendWith and Extension Interfaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.extensions;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.AfterAllCallback;\nimport org.junit.jupiter.api.extension.AfterEachCallback;\nimport org.junit.jupiter.api.extension.BeforeAllCallback;\nimport org.junit.jupiter.api.extension.BeforeEachCallback;\nimport org.junit.jupiter.api.extension.ExtensionContext;\nimport org.junit.jupiter.api.extension.TestExecutionExceptionHandler;\nimport org.junit.jupiter.api.extension.TestInstancePostProcessor;\nimport org.junit.jupiter.api.extension.ParameterContext;\nimport org.junit.jupiter.api.extension.ParameterResolver;\nimport org.junit.jupiter.api.extension.ExtendWith;\n\nimport java.lang.reflect.Field;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\n@ExtendWith({\n    TimingExtension.class,\n    DatabaseExtension.class,\n    MockExtension.class,\n    IgnoreIOExceptionExtension.class,\n    CustomParameterResolver.class\n})\nclass ExtensionDemo {\n\n    private DatabaseConnection connection;\n\n    @Mock\n    private PaymentGateway paymentGateway;\n\n    @Test\n    void injectedParameter(\n            @Injectable(\"hello from extension\") String message,\n            DatabaseConnection conn) {\n        assertNotNull(message);\n        assertNotNull(conn);\n        assertTrue(conn.isConnected());\n    }\n\n    @Test\n    void customParameterResolver(int randomValue) {\n        assertTrue(randomValue >= 1 && randomValue <= 100);\n    }\n\n    @Test\n    void exceptionHandling() {\n        // IOException is silently swallowed by the extension\n        throw new java.io.IOException(\"this is handled\");\n    }\n}\n\n// ---- Annotations ----\n\n@java.lang.annotation.Target({java.lang.annotation.ElementType.FIELD})\n@java.lang.annotation.Retention(java.lang.annotation.RetentionPolicy.RUNTIME)\n@interface Mock {\n}\n\n@java.lang.annotation.Target({java.lang.annotation.ElementType.PARAMETER})\n@java.lang.annotation.Retention(java.lang.annotation.RetentionPolicy.RUNTIME)\n@interface Injectable {\n    String value();\n}\n\n// ---- Extension implementations ----\n\nclass TimingExtension implements BeforeEachCallback, AfterEachCallback {\n\n    private final ThreadLocal<Long> startTime = new ThreadLocal<>();\n\n    @Override\n    public void beforeEach(ExtensionContext context) {\n        startTime.set(System.nanoTime());\n    }\n\n    @Override\n    public void afterEach(ExtensionContext context) {\n        long elapsed = System.nanoTime() - startTime.get();\n        long ms = elapsed / 1_000_000;\n        if (ms > 100) {\n            System.out.printf(\"SLOW: %s took %dms%n\",\n                context.getDisplayName(), ms);\n        }\n        startTime.remove();\n    }\n}\n\nclass DatabaseExtension implements BeforeAllCallback, AfterAllCallback {\n\n    private DatabaseConnection connection;\n\n    @Override\n    public void beforeAll(ExtensionContext context) {\n        connection = new DatabaseConnection();\n        connection.connect();\n        System.out.println(\"Database connected\");\n    }\n\n    @Override\n    public void afterAll(ExtensionContext context) {\n        if (connection != null) {\n            connection.disconnect();\n            System.out.println(\"Database disconnected\");\n        }\n    }\n}\n\nclass DatabaseConnection {\n\n    private boolean connected;\n\n    void connect() {\n        connected = true;\n    }\n\n    void disconnect() {\n        connected = false;\n    }\n\n    boolean isConnected() {\n        return connected;\n    }\n}\n\nclass MockExtension implements TestInstancePostProcessor {\n\n    @Override\n    public void postProcessTestInstance(Object testInstance, ExtensionContext context)\n            throws Exception {\n        for (Field field : testInstance.getClass().getDeclaredFields()) {\n            if (field.isAnnotationPresent(Mock.class)) {\n                field.setAccessible(true);\n                // In a real implementation, use Mockito.mock()\n                field.set(testInstance, new Object());\n            }\n        }\n    }\n}\n\nclass IgnoreIOExceptionExtension implements TestExecutionExceptionHandler {\n\n    @Override\n    public void handleTestExecutionException(ExtensionContext context, Throwable throwable)\n            throws Throwable {\n        if (throwable instanceof java.io.IOException) {\n            System.out.println(\"Ignoring IOException: \" + throwable.getMessage());\n            return; // swallow the exception — test passes\n        }\n        throw throwable; // re-throw all other exceptions\n    }\n}\n\nclass CustomParameterResolver implements ParameterResolver {\n\n    @Override\n    public boolean supportsParameter(ParameterContext parameterContext,\n                                      ExtensionContext extensionContext) {\n        Class<?> type = parameterContext.getParameter().getType();\n        if (type == int.class || type == Integer.class) {\n            return true;\n        }\n        if (parameterContext.isAnnotated(Injectable.class)) {\n            return true;\n        }\n        if (type == DatabaseConnection.class) {\n            return true;\n        }\n        return false;\n    }\n\n    @Override\n    public Object resolveParameter(ParameterContext parameterContext,\n                                    ExtensionContext extensionContext) {\n        Class<?> type = parameterContext.getParameter().getType();\n        if (type == int.class || type == Integer.class) {\n            return (int) (Math.random() * 100) + 1;\n        }\n        if (parameterContext.isAnnotated(Injectable.class)) {\n            return parameterContext.findAnnotation(Injectable.class).get().value();\n        }\n        if (type == DatabaseConnection.class) {\n            return extensionContext.getRoot()\n                .getStore(ExtensionContext.Namespace.GLOBAL)\n                .get(\"databaseConnection\", DatabaseConnection.class);\n        }\n        return null;\n    }\n}\n\n// ---- Conditional Extension ----\n\nclass ConditionalExtension implements org.junit.jupiter.api.extension.ConditionEvaluationResult,\n                                     org.junit.jupiter.api.extension.ExecutionCondition {\n\n    @Override\n    public ConditionEvaluationResult evaluateExecutionCondition(ExtensionContext context) {\n        String osName = System.getProperty(\"os.name\").toLowerCase();\n        if (osName.contains(\"win\")) {\n            return ConditionEvaluationResult.enabled(\"Running on Windows\");\n        }\n        return ConditionEvaluationResult.disabled(\"This test requires Windows\");\n    }\n\n    @Override\n    public ConditionEvaluationResult evaluateExecutionCondition() {\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-test-reporting",
      children: "11. Test Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.reporting;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.TestInfo;\nimport org.junit.jupiter.api.TestReporter;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\n/**\n * TestInfo and TestReporter are injected by the JUnit Jupiter engine\n * into any @Test, @ParameterizedTest, @RepeatedTest, or @TestFactory\n * method that declares them as parameters.\n */\nclass TestReportingDemo {\n\n    @Test\n    void testInfoDemo(TestInfo info) {\n        System.out.println(\"Display name: \" + info.getDisplayName());\n        System.out.println(\"Test class: \" + info.getTestClass().map(Class::getName).orElse(\"none\"));\n        System.out.println(\"Test method: \" + info.getTestMethod().map(Object::toString).orElse(\"none\"));\n        System.out.println(\"Tags: \" + info.getTags());\n    }\n\n    @Test\n    void testReporterDemo(TestReporter reporter) {\n        reporter.publishEntry(\"status\", \"running\");\n        reporter.publishEntry(\"timestamp\", String.valueOf(System.currentTimeMillis()));\n    }\n\n    @Test\n    void structuredReport(TestReporter reporter) {\n        Map<String, String> values = new HashMap<>();\n        values.put(\"expected\", \"100\");\n        values.put(\"actual\", \"100\");\n        values.put(\"result\", \"PASS\");\n        reporter.publishEntry(\"assertion-result\", values);\n    }\n\n    @Test\n    void multipleReportEntries(TestReporter reporter) {\n        reporter.publishEntry(\"phase\", \"setup\");\n        reporter.publishEntry(\"phase\", \"execution\");\n        reporter.publishEntry(\"phase\", \"teardown\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered the complete JUnit 5 testing framework. The JUnit 5 architecture was explained through its three modules: the Platform (launcher, engine SPI), Jupiter (the new programming model), and Vintage (backward compatibility with JUnit 4)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You learned every Jupiter annotation: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Test"
      }), " for standard tests, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ParameterizedTest"
      }), " for data-driven tests with seven source annotations (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ValueSource"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@NullSource"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EmptySource"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@NullAndEmptySource"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EnumSource"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@MethodSource"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@CsvSource"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@CsvFileSource"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ArgumentsSource"
      }), "), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RepeatedTest"
      }), " for repetition, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TestFactory"
      }), " for dynamic tests, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TestTemplate"
      }), " for template-driven invocations, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TestMethodOrder"
      }), " for ordering control, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@DisplayName"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@DisplayNameGeneration"
      }), " for naming, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Nested"
      }), " for hierarchical organisation, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Tag"
      }), " for filtering, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Disabled"
      }), " for deactivation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The assertion API was covered in full: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assertEquals"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assertThrows"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assertAll"
      }), " with grouped assertions, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assertTimeout"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assertNotNull"
      }), ", and the assumption family (", (0,jsx_runtime.jsx)(_components.code, {
        children: "assumeTrue"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assumingThat"
      }), "). The distinction between sequential assertions (stop at first failure) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assertAll"
      }), " (report all failures) was demonstrated."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Parameterized tests were explored in depth with argument conversion (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConvertWith"
      }), ", custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ArgumentConverter"
      }), ") and aggregation (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@AggregateWith"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ArgumentsAccessor"
      }), ", custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ArgumentsAggregator"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dynamic tests showed how ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TestFactory"
      }), " methods can generate tests at runtime using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DynamicTest.dynamicTest()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DynamicContainer.dynamicContainer()"
      }), ", supporting stream-based, data-driven, and hierarchical dynamic test suites."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The extension model was covered through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ExtendWith"
      }), " and extension interfaces: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BeforeAllCallback"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AfterEachCallback"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ParameterResolver"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TestExecutionExceptionHandler"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TestInstancePostProcessor"
      }), ". Custom parameter resolvers and conditional test execution demonstrated how to extend the JUnit engine itself."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Test lifecycle management included ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@BeforeAll"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "@AfterAll"
      }), " (static in PER_METHOD, non-static in PER_CLASS), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@BeforeEach"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "@AfterEach"
      }), " (instance-level), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TestInstance.Lifecycle.PER_CLASS"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PER_METHOD"
      }), ", and default method support in interfaces."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nested tests showed how inner classes create hierarchical test structures with shared setup at each level, naturally following the Given-When-Then pattern."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Finally, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TestInfo"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TestReporter"
      }), " were demonstrated for capturing and publishing test metadata, enabling custom reporting and integration with CI/CD dashboards."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-architecture-diagram",
      children: "Exercise 1: Architecture Diagram"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a program that uses the JUnit Platform Launcher API to discover and run all tests in a package, print the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TestPlan"
      }), ", and report a summary. Execute the launcher from a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " method."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-comprehensive-parameterized-tests",
      children: "Exercise 2: Comprehensive Parameterized Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TemperatureConverter"
      }), " class with methods:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "celsiusToFahrenheit(double c) -> double"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "fahrenheitToCelsius(double f) -> double"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "celsiusToKelvin(double c) -> double"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kelvinToCelsius(double k) -> double"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write parameterized tests using:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@CsvSource"
        }), " to test all four methods with at least 5 cases each"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@MethodSource"
        }), " that provides ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Arguments"
        }), " with both the method name and expected result"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@EnumSource"
        }), " to test conversion direction enums"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-custom-argumentsprovider",
      children: "Exercise 3: Custom ArgumentsProvider"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FibonacciArgumentsProvider"
      }), " that generates the first 20 Fibonacci numbers and their ordinal positions. Write a parameterized test that verifies each Fibonacci number is the sum of the two preceding ones."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-dynamic-test-from-file-system",
      children: "Exercise 4: Dynamic Test from File System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TestFactory"
      }), " method that scans a directory of JSON test case files, reads each file, parses it into a test case, and generates a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DynamicTest"
      }), " per file. The test should fail with a descriptive message if the JSON is malformed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-nested-stack-implementation",
      children: "Exercise 5: Nested Stack Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Test a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Deque"
      }), " implementation using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Nested"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Outer: common setup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 1: \"when empty\" — test isEmpty, pop/peek exceptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 2: \"after push\" — verify size, pop returns correct element"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 3: \"after multiple pushes\" — verify LIFO ordering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 4: \"after clear\" — verify it is empty again"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6-custom-extension",
      children: "Exercise 6: Custom Extension"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RetryExtension"
      }), " that retries failed tests up to 3 times. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TestExecutionExceptionHandler"
      }), " to catch failures, log the retry count, and re-execute the test. Add a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Retry(count = 5)"
      }), " annotation for configuration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7-argument-conversion",
      children: "Exercise 7: Argument Conversion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ISODurationConverter"
      }), " that converts ISO-8601 duration strings (", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"P2DT3H4M\""
      }), ") into ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.time.Duration"
      }), " objects. Write a parameterized test that verifies the conversion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8-test-template",
      children: "Exercise 8: Test Template"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FibonacciTestTemplate"
      }), " using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TestTemplate"
      }), " that generates test contexts for each Fibonacci number position. Each context should provide the position number and expected value as parameters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9-tagged-test-suite",
      children: "Exercise 9: Tagged Test Suite"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a tag taxonomy for a multi-module project:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@UnitTest"
        }), " — fast, no external dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@IntegrationTest"
        }), " — requires database or external service"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@SlowTest"
        }), " — takes more than 1 second"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@SmokeTest"
        }), " — critical path verification"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@SecurityTest"
        }), " — security-related checks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a composed annotation that combines these for a \"pre-commit\" suite."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10-reporting-with-testinfo-and-testreporter",
      children: "Exercise 10: Reporting with TestInfo and TestReporter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a test that uses both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TestInfo"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TestReporter"
      }), " to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log the start and end time of each test"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report the test method name, class, and tags"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Publish structured key-value pairs for each assertion made"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generate a JSON summary from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TestReporter.publishEntry"
        }), " calls"]
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