"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[4390],{

/***/ 1889
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
const site_docs_courses_java_29_junit_5_md_617_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/29-junit5","title":"JUnit 5 Deep Dive","description":"Previous Mockito","source":"@site/docs/courses/java/29-junit5.md","sourceDirName":"courses/java","slug":"/java/29-junit5","permalink":"/ai-engineering-journey/java/29-junit5","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":29,"frontMatter":{"id":"29-junit5","slug":"/java/29-junit5","title":"JUnit 5 Deep Dive","sidebar_label":"JUnit 5 Deep Dive","sidebar_position":29},"sidebar":"course-java","previous":{"title":"Keycloak & Identity Federation","permalink":"/ai-engineering-journey/java/28-keycloak"},"next":{"title":"Mockito & Mocking Frameworks","permalink":"/ai-engineering-journey/java/30-mockito"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
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
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        children: "<dependency>\r\n    <groupId>org.junit.jupiter</groupId>\r\n    <artifactId>junit-jupiter</artifactId>\r\n    <version>5.10.2</version>\r\n    <scope>test</scope>\r\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[JUnit 5] --> B[JUnit Platform]\r\n    A --> C[Jupiter API]\r\n    A --> D[Vintage Engine]\r\n    C --> C1[Annotations]\r\n    C --> C2[Assertions]\r\n    C --> C3[Assumptions]\r\n    C --> C4[Extensions]\r\n    C1 --> C1A[\"@Test / @ParameterizedTest\"]\r\n    C1 --> C1B[\"@Nested / @DisplayName\"]\r\n    C1 --> C1C[\"@BeforeEach / @AfterEach\"]"
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
        children: "┌─────────────────────────────────────┐\r\n│         JUnit Jupiter               │  ← API + implementation for writing tests\r\n│   (junit-jupiter-api + engine)      │     (@Test, assertions, extensions)\r\n├─────────────────────────────────────┤\r\n│         JUnit Vintage                │  ← Allows JUnit 4 tests to run on the Platform\r\n│   (junit-vintage-engine)             │\r\n├─────────────────────────────────────┤\r\n│         JUnit Platform               │  ← Foundation: launcher, console, engine SPI\r\n│   (junit-platform-commons + engine)  │     IDEs and build tools talk to this layer only\r\n└─────────────────────────────────────┘\n"
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
        children: "package junit5.architecture;\r\n\r\nimport org.junit.platform.launcher.Launcher;\r\nimport org.junit.platform.launcher.LauncherDiscoveryRequest;\r\nimport org.junit.platform.launcher.core.LauncherDiscoveryRequestBuilder;\r\nimport org.junit.platform.launcher.core.LauncherFactory;\r\nimport org.junit.platform.launcher.listeners.SummaryGeneratingListener;\r\nimport org.junit.platform.launcher.listeners.TestExecutionSummary;\r\n\r\nimport static org.junit.platform.engine.discovery.DiscoverySelectors.selectClass;\r\n\r\n/**\r\n * Programmatic launcher — demonstrates how IDEs and build tools\r\n * discover and run JUnit 5 tests without relying on any JUnit 4\r\n * concepts.\r\n */\r\npublic class PlatformLauncherDemo {\r\n\r\n    public static void main(String[] args) {\r\n        LauncherDiscoveryRequest request = LauncherDiscoveryRequestBuilder.request()\r\n            .selectors(selectClass(\"junit5.architecture.SampleTest\"))\r\n            .build();\r\n\r\n        Launcher launcher = LauncherFactory.create();\r\n        SummaryGeneratingListener listener = new SummaryGeneratingListener();\r\n        launcher.registerTestExecutionListeners(listener);\r\n        launcher.execute(request);\r\n\r\n        TestExecutionSummary summary = listener.getSummary();\r\n        System.out.println(\"Tests found: \" + summary.getTestsFoundCount());\r\n        System.out.println(\"Tests succeeded: \" + summary.getTestsSucceededCount());\r\n        System.out.println(\"Tests failed: \" + summary.getTestsFailedCount());\r\n\r\n        summary.getFailures().forEach(failure ->\r\n            System.out.println(\"  \" + failure.getTestIdentifier().getDisplayName()\r\n                + \" -> \" + failure.getException().getMessage()));\r\n    }\r\n}\r\n\r\nclass SampleTest {\r\n\r\n    @org.junit.jupiter.api.Test\r\n    void shouldPass() {\r\n        org.junit.jupiter.api.Assertions.assertEquals(2, 1 + 1);\r\n    }\r\n}\n"
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
        children: "package junit5.architecture;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.DisplayName;\r\n\r\n/**\r\n * Every Jupiter test class is discovered by the Jupiter engine.\r\n * The engine scans for methods annotated with @Test, @ParameterizedTest,\r\n * @TestFactory, @RepeatedTest, or @TestTemplate.\r\n */\r\nclass JupiterEngineDiscoveryDemo {\r\n\r\n    @Test\r\n    @DisplayName(\"A simple test that always passes\")\r\n    void standardTest() {\r\n    }\r\n\r\n    @Test\r\n    void anotherStandardTest() {\r\n    }\r\n}\n"
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
        children: "<dependency>\r\n    <groupId>org.junit.vintage</groupId>\r\n    <artifactId>junit-vintage-engine</artifactId>\r\n    <version>5.10.2</version>\r\n    <scope>test</scope>\r\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.architecture;\r\n\r\nimport org.junit.Test;\r\nimport static org.junit.Assert.assertEquals;\r\n\r\n/**\r\n * This is a JUnit 4 style test. With junit-vintage-engine on the\r\n * classpath, the Platform discovers and runs it alongside Jupiter\r\n * tests without any code changes.\r\n */\r\npublic class VintageCompatibilityTest {\r\n\r\n    @Test\r\n    public void jUnit4StyleTest() {\r\n        assertEquals(\"JUnit 4 style runs on JUnit 5 Platform\", 4, 2 + 2);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\r\nUse ", (0,jsx_runtime.jsx)(_components.code, {
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
        children: "package junit5.annotations;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.DisplayName;\r\nimport org.junit.jupiter.api.Disabled;\r\nimport org.junit.jupiter.api.RepeatedTest;\r\nimport org.junit.jupiter.api.RepetitionInfo;\r\nimport org.junit.jupiter.api.TestInfo;\r\nimport org.junit.jupiter.api.TestReporter;\r\nimport org.junit.jupiter.api.Timeout;\r\n\r\nimport java.time.Duration;\r\nimport java.util.Map;\r\n\r\n/**\r\n * Demonstrates the core JUnit Jupiter annotations: @Test, @RepeatedTest,\r\n * @Disabled, @Timeout, @DisplayName.\r\n */\r\nclass CoreAnnotationDemo {\r\n\r\n    @Test\r\n    @DisplayName(\"Prices are calculated correctly for bulk orders\")\r\n    void basicTest() {\r\n    }\r\n\r\n    @Test\r\n    @Disabled(\"TODO: fix this test after refactoring the pricing module\")\r\n    void temporarilyDisabled() {\r\n    }\r\n\r\n    @RepeatedTest(value = 5, name = \"{displayName} — attempt {currentRepetition} of {totalRepetitions}\")\r\n    @DisplayName(\"Retry sensitive operation\")\r\n    void repeated(RepetitionInfo info) {\r\n        int attempt = info.getCurrentRepetition();\r\n        System.out.println(\"Attempt \" + attempt + \" of \" + info.getTotalRepetitions());\r\n    }\r\n\r\n    @Test\r\n    @Timeout(value = 2, unit = java.util.concurrent.TimeUnit.SECONDS)\r\n    void mustFinishWithinTwoSeconds() throws InterruptedException {\r\n        Thread.sleep(500);\r\n    }\r\n\r\n    @Test\r\n    @DisplayName(\"TestInfo and TestReporter injection\")\r\n    void usingTestInfoAndReporter(TestInfo info, TestReporter reporter) {\r\n        reporter.publishEntry(Map.of(\r\n            \"displayName\", info.getDisplayName(),\r\n            \"tags\", String.valueOf(info.getTags()),\r\n            \"testClass\", info.getTestClass().map(Class::getSimpleName).orElse(\"N/A\")\r\n        ));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-displayname-and-displaynamegeneration",
      children: "2.2 DisplayName and DisplayNameGeneration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.annotations;\r\n\r\nimport org.junit.jupiter.api.DisplayName;\r\nimport org.junit.jupiter.api.DisplayNameGeneration;\r\nimport org.junit.jupiter.api.DisplayNameGenerator;\r\nimport org.junit.jupiter.api.MethodOrderer;\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.TestMethodOrder;\r\nimport org.junit.jupiter.api.IndicativeSentencesGeneration;\r\nimport org.junit.jupiter.params.ParameterizedTest;\r\nimport org.junit.jupiter.params.provider.ValueSource;\r\n\r\n/**\r\n * @DisplayNameGeneration controls how display names are generated\r\n * for test classes and methods.\r\n *\r\n * ReplaceUnderscores: converts {@code should_throw_when_null} into\r\n * \"should throw when null\".\r\n *\r\n * Standard: preserves method names as-is.\r\n *\r\n * IndicativeSentencesGeneration: generates sentences from the enclosing\r\n * class name + method name.\r\n */\r\n@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)\r\n@TestMethodOrder(MethodOrderer.DisplayName.class)\r\nclass DisplayNameGenerationDemo {\r\n\r\n    @Test\r\n    void should_throw_when_input_is_null() {\r\n        // display name becomes: \"should throw when input is null\"\r\n    }\r\n\r\n    @Test\r\n    void should_return_correct_sum_for_positive_numbers() {\r\n    }\r\n\r\n    @Nested\r\n    @DisplayNameGeneration(DisplayNameGenerator.Standard.class)\r\n    class StandardNaming {\r\n\r\n        @Test\r\n        void some_method_with_underscores() {\r\n            // display name is the raw method name:\r\n            // \"some_method_with_underscores\"\r\n        }\r\n    }\r\n\r\n    @Nested\r\n    @IndicativeSentencesGeneration(\r\n        separator = \" -> \",\r\n        generator = DisplayNameGenerator.ReplaceUnderscores.class\r\n    )\r\n    class When_user_is_anonymous {\r\n\r\n        @Test\r\n        void should_redirect_to_login() {\r\n            // display name becomes:\r\n            // \"When user is anonymous -> should redirect to login\"\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.annotations;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.DisplayName;\r\nimport org.junit.jupiter.api.DisplayNameGeneration;\r\nimport org.junit.jupiter.api.DisplayNameGenerator;\r\n\r\n/**\r\n * Custom display name generator that strips common test prefixes.\r\n */\r\nclass CustomDisplayNameGeneratorDemo {\r\n\r\n    @Test\r\n    void testThatUserIsRedirectedToLoginPage() {\r\n    }\r\n\r\n    @Test\r\n    void testThatPaymentIsProcessedCorrectly() {\r\n    }\r\n\r\n    /**\r\n     * A custom generator that removes \"testThat\" or \"test\" prefixes\r\n     * and converts camelCase to readable sentences.\r\n     */\r\n    static class CleanEnglishGenerator extends DisplayNameGenerator.Standard {\r\n\r\n        @Override\r\n        public String generateDisplayNameForMethod(Class<?> testClass,\r\n                                                    java.lang.reflect.Method testMethod) {\r\n            String name = testMethod.getName();\r\n            if (name.startsWith(\"testThat\")) {\r\n                name = name.substring(8);\r\n            } else if (name.startsWith(\"test\")) {\r\n                name = name.substring(4);\r\n            }\r\n            return name.replaceAll(\"([a-z])([A-Z])\", \"$1 $2\")\r\n                       .toLowerCase();\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-test-method-ordering",
      children: "2.3 Test Method Ordering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.annotations;\r\n\r\nimport org.junit.jupiter.api.MethodOrderer;\r\nimport org.junit.jupiter.api.Order;\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.TestMethodOrder;\r\n\r\n/**\r\n * @TestMethodOrder controls the execution order of test methods.\r\n *\r\n * Available orderers:\r\n * - MethodOrderer.DisplayName        — alphabetical by display name\r\n * - MethodOrderer.MethodName         — alphabetical by method name\r\n * - MethodOrderer.OrderAnnotation    — @Order values, ascending\r\n * - MethodOrderer.Random             — pseudo-random, deterministic seed\r\n * - Custom Orderer implementation\r\n */\r\n@TestMethodOrder(MethodOrderer.OrderAnnotation.class)\r\nclass TestMethodOrderDemo {\r\n\r\n    @Test\r\n    @Order(3)\r\n    void last() {\r\n    }\r\n\r\n    @Test\r\n    @Order(1)\r\n    void first() {\r\n    }\r\n\r\n    @Test\r\n    @Order(2)\r\n    void second() {\r\n    }\r\n}\r\n\r\n@TestMethodOrder(MethodOrderer.MethodName.class)\r\nclass AlphabeticalOrderDemo {\r\n\r\n    @Test\r\n    void alphaTest() {\r\n    }\r\n\r\n    @Test\r\n    void betaTest() {\r\n    }\r\n\r\n    @Test\r\n    void gammaTest() {\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-test-instance-lifecycle",
      children: "2.4 Test Instance Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.lifecycle;\r\n\r\nimport org.junit.jupiter.api.AfterAll;\r\nimport org.junit.jupiter.api.AfterEach;\r\nimport org.junit.jupiter.api.BeforeAll;\r\nimport org.junit.jupiter.api.BeforeEach;\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.TestInstance;\r\n\r\nimport static org.junit.jupiter.api.Assertions.assertTrue;\r\n\r\n/**\r\n * PER_CLASS (non-static @BeforeAll/@AfterAll):\r\n *   - A single instance of the test class is created for the entire run.\r\n *   - @BeforeAll and @AfterAll methods do NOT need to be static.\r\n *   - Useful for expensive setup (e.g., starting a test database).\r\n *   - Instance variables preserve state across tests — use with caution.\r\n */\r\n@TestInstance(TestInstance.Lifecycle.PER_CLASS)\r\nclass PerClassLifecycleDemo {\r\n\r\n    private final StringBuilder setupLog = new StringBuilder();\r\n    private int sharedCounter = 0;\r\n\r\n    @BeforeAll\r\n    void initAll() {\r\n        // Non-static: PER_CLASS makes this legal\r\n        System.out.println(\"PER_CLASS @BeforeAll — runs once for the class\");\r\n    }\r\n\r\n    @BeforeEach\r\n    void init() {\r\n        sharedCounter++;\r\n        setupLog.append(\"init|\");\r\n    }\r\n\r\n    @Test\r\n    void firstTest() {\r\n        assertTrue(sharedCounter >= 1);\r\n    }\r\n\r\n    @Test\r\n    void secondTest() {\r\n        assertTrue(sharedCounter >= 2);\r\n    }\r\n\r\n    @Test\r\n    void thirdTest() {\r\n        assertTrue(sharedCounter >= 3);\r\n    }\r\n\r\n    @AfterEach\r\n    void tearDown() {\r\n        System.out.println(\"After each test — counter is \" + sharedCounter);\r\n    }\r\n\r\n    @AfterAll\r\n    void tearDownAll() {\r\n        System.out.println(\"PER_CLASS @AfterAll — runs once after all tests\");\r\n    }\r\n}\r\n\r\n/**\r\n * PER_METHOD (default):\r\n *   - A NEW instance of the test class is created for EACH test method.\r\n *   - @BeforeAll/@AfterAll must be static.\r\n *   - No shared state between tests — safer default.\r\n */\r\n@TestInstance(TestInstance.Lifecycle.PER_METHOD)\r\nclass PerMethodLifecycleDemo {\r\n\r\n    private final int instanceId = System.identityHashCode(this);\r\n\r\n    @BeforeAll\r\n    static void initAll() {\r\n        // Must be static in PER_METHOD mode\r\n        System.out.println(\"PER_METHOD @BeforeAll — runs once\");\r\n    }\r\n\r\n    @BeforeEach\r\n    void init() {\r\n        System.out.println(\"New instance: \" + instanceId);\r\n    }\r\n\r\n    @Test\r\n    void firstTest() {\r\n        System.out.println(\"Running in instance \" + instanceId);\r\n    }\r\n\r\n    @Test\r\n    void secondTest() {\r\n        // instanceId is different from firstTest's\r\n        System.out.println(\"Running in instance \" + instanceId);\r\n    }\r\n\r\n    @AfterEach\r\n    void tearDown() {\r\n    }\r\n\r\n    @AfterAll\r\n    static void tearDownAll() {\r\n        System.out.println(\"PER_METHOD @AfterAll — runs once\");\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-interface-default-methods",
      children: "2.5 Interface Default Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.lifecycle;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.BeforeEach;\r\nimport org.junit.jupiter.api.TestInstance;\r\n\r\n/**\r\n * JUnit 5 allows @Test, @BeforeEach, @AfterEach, etc. on interface\r\n * default methods. This enables reusable test behaviours via\r\n * composition through interfaces.\r\n */\r\ninterface DatabaseTest {\r\n\r\n    @BeforeEach\r\n    default void setUpDatabase() {\r\n        System.out.println(\"Opening database connection...\");\r\n    }\r\n\r\n    @Test\r\n    default void databaseConnectionIsValid() {\r\n        System.out.println(\"Verifying database connection...\");\r\n    }\r\n}\r\n\r\ninterface TransactionalTest {\r\n\r\n    @BeforeEach\r\n    default void beginTransaction() {\r\n        System.out.println(\"Beginning transaction...\");\r\n    }\r\n}\r\n\r\nclass UserRepositoryTest implements DatabaseTest, TransactionalTest {\r\n\r\n    @Test\r\n    void shouldSaveUser() {\r\n        System.out.println(\"Testing user persistence...\");\r\n    }\r\n\r\n    @Test\r\n    void shouldFindUserByEmail() {\r\n        System.out.println(\"Testing user lookup by email...\");\r\n    }\r\n}\r\n\r\n/**\r\n * Default test methods in interfaces can also be parameterized,\r\n * allowing generic contract tests.\r\n */\r\ninterface ComparableContract<T extends Comparable<T>> {\r\n\r\n    T createValue();\r\n    T createSmallerValue();\r\n    T createLargerValue();\r\n\r\n    @Test\r\n    default void shouldReturnZeroWhenEqual() {\r\n        T value = createValue();\r\n        org.junit.jupiter.api.Assertions.assertEquals(0, value.compareTo(value));\r\n    }\r\n\r\n    @Test\r\n    default void shouldReturnNegativeWhenSmaller() {\r\n        T smaller = createSmallerValue();\r\n        T larger = createLargerValue();\r\n        org.junit.jupiter.api.Assertions.assertTrue(smaller.compareTo(larger) < 0);\r\n    }\r\n\r\n    @Test\r\n    default void shouldReturnPositiveWhenLarger() {\r\n        T smaller = createSmallerValue();\r\n        T larger = createLargerValue();\r\n        org.junit.jupiter.api.Assertions.assertTrue(larger.compareTo(smaller) > 0);\r\n    }\r\n}\r\n\r\nclass IntegerContractTest implements ComparableContract<Integer> {\r\n\r\n    @Override\r\n    public Integer createValue() {\r\n        return 42;\r\n    }\r\n\r\n    @Override\r\n    public Integer createSmallerValue() {\r\n        return 1;\r\n    }\r\n\r\n    @Override\r\n    public Integer createLargerValue() {\r\n        return 100;\r\n    }\r\n}\r\n\r\nclass StringContractTest implements ComparableContract<String> {\r\n\r\n    @Override\r\n    public String createValue() {\r\n        return \"banana\";\r\n    }\r\n\r\n    @Override\r\n    public String createSmallerValue() {\r\n        return \"apple\";\r\n    }\r\n\r\n    @Override\r\n    public String createLargerValue() {\r\n        return \"cherry\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!NOTE]\r\n", (0,jsx_runtime.jsx)(_components.code, {
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
        children: "package junit5.assertions;\r\n\r\nimport org.junit.jupiter.api.Test;\r\n\r\nimport java.time.Duration;\r\nimport java.util.Arrays;\r\nimport java.util.List;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\nclass StandardAssertionDemo {\r\n\r\n    private final Calculator calc = new Calculator();\r\n\r\n    @Test\r\n    void basicAssertions() {\r\n        assertEquals(4, calc.add(2, 2));\r\n        assertEquals(4, calc.add(2, 2), \"optional failure message\");\r\n        assertEquals(4, calc.add(2, 2), () -> \"lazy evaluation: \" + expensiveMessage());\r\n\r\n        assertNotEquals(5, calc.add(2, 2));\r\n        assertTrue(calc.add(1, 1) > 0);\r\n        assertFalse(calc.add(-1, -1) > 0);\r\n        assertNull(calc.getLastResult());\r\n    }\r\n\r\n    @Test\r\n    void objectAssertions() {\r\n        Object a = new Object();\r\n        Object b = a;\r\n        Object c = new Object();\r\n\r\n        assertSame(a, b);\r\n        assertNotSame(a, c);\r\n        assertNotNull(a);\r\n        assertInstanceOf(Integer.class, 42);\r\n    }\r\n\r\n    @Test\r\n    void arrayAssertions() {\r\n        int[] expected = {1, 2, 3};\r\n        int[] actual = {1, 2, 3};\r\n        assertArrayEquals(expected, actual);\r\n    }\r\n\r\n    @Test\r\n    void iterableAssertions() {\r\n        List<String> expected = Arrays.asList(\"a\", \"b\", \"c\");\r\n        List<String> actual = Arrays.asList(\"a\", \"b\", \"c\");\r\n        assertIterableEquals(expected, actual);\r\n    }\r\n\r\n    @Test\r\n    void exceptionAssertions() {\r\n        Exception exception = assertThrows(IllegalArgumentException.class, () -> {\r\n            calc.divide(1, 0);\r\n        });\r\n        assertTrue(exception.getMessage().contains(\"cannot divide by zero\"));\r\n\r\n        assertDoesNotThrow(() -> calc.divide(4, 2));\r\n    }\r\n\r\n    @Test\r\n    void timeoutAssertions() {\r\n        assertTimeout(Duration.ofMillis(200), () -> {\r\n            Thread.sleep(100);\r\n            return \"finished\";\r\n        });\r\n\r\n        // assertTimeoutPreemptively — interrupts the thread if it times out\r\n        // Use with caution: the thread is interrupted, not killed, so\r\n        // resources may leak.\r\n        String result = assertTimeoutPreemptively(\r\n            Duration.ofMillis(500),\r\n            () -> {\r\n                Thread.sleep(100);\r\n                return \"done\";\r\n            }\r\n        );\r\n        assertEquals(\"done\", result);\r\n    }\r\n\r\n    @Test\r\n    void linesMatch() {\r\n        List<String> expected = Arrays.asList(\"foo\", \"bar\", \"baz\");\r\n        List<String> actual = Arrays.asList(\"foo\", \"bar\", \"baz\");\r\n        assertLinesMatch(expected, actual);\r\n    }\r\n\r\n    private String expensiveMessage() {\r\n        return \"Computed after \" + System.currentTimeMillis();\r\n    }\r\n}\r\n\r\nclass Calculator {\r\n\r\n    private Integer lastResult;\r\n\r\n    int add(int a, int b) {\r\n        lastResult = a + b;\r\n        return lastResult;\r\n    }\r\n\r\n    int divide(int a, int b) {\r\n        if (b == 0) {\r\n            throw new IllegalArgumentException(\"cannot divide by zero\");\r\n        }\r\n        lastResult = a / b;\r\n        return lastResult;\r\n    }\r\n\r\n    Integer getLastResult() {\r\n        return lastResult;\r\n    }\r\n}\n"
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
        children: "package junit5.assertions;\r\n\r\nimport org.junit.jupiter.api.Test;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\nclass GroupedAssertionDemo {\r\n\r\n    @Test\r\n    void singleAssertAll() {\r\n        Address address = new Address(\"123 Main St\", \"Springfield\", \"IL\", \"62701\");\r\n\r\n        assertAll(\"address\",\r\n            () -> assertEquals(\"123 Main St\", address.street()),\r\n            () -> assertEquals(\"Springfield\", address.city()),\r\n            () -> assertEquals(\"IL\", address.state()),\r\n            () -> assertEquals(\"62701\", address.zip())\r\n        );\r\n    }\r\n\r\n    @Test\r\n    void nestedAssertAll() {\r\n        Customer customer = new Customer(\r\n            \"Alice\",\r\n            \"Johnson\",\r\n            new Address(\"456 Oak Ave\", \"Portland\", \"OR\", \"97201\")\r\n        );\r\n\r\n        assertAll(\"customer\",\r\n            () -> assertEquals(\"Alice\", customer.firstName()),\r\n            () -> assertEquals(\"Johnson\", customer.lastName()),\r\n            () -> assertAll(\"customer.address\",\r\n                () -> assertEquals(\"456 Oak Ave\", customer.address().street()),\r\n                () -> assertEquals(\"Portland\", customer.address().city()),\r\n                () -> assertEquals(\"OR\", customer.address().state())\r\n            )\r\n        );\r\n    }\r\n\r\n    @Test\r\n    void assertAllWithCollectionResult() {\r\n        // assertAll returns a list of Throwables (one per failed head).\r\n        // You can inspect this list programmatically.\r\n        assertAll(\"multiple validations\",\r\n            () -> assertTrue(true),\r\n            () -> assertTrue(true)\r\n            // Every head is executed; none throw, so the overall test passes.\r\n        );\r\n    }\r\n\r\n    /**\r\n     * Demonstration: assertAll reports ALL failures at once,\r\n     * unlike a plain sequence of assertions that stops at the first.\r\n     */\r\n    @Test\r\n    void compareWithSequentialFailures() {\r\n        // With sequential assertions, this test stops at the first failure.\r\n        // Uncomment to see the behaviour:\r\n        // Person p = new Person(null, \"Doe\");\r\n        // assertNotNull(p.firstName(), \"firstName must not be null\"); // FAILS — stops here\r\n        // assertNotNull(p.lastName(), \"lastName must not be null\");   // never reached\r\n\r\n        // With assertAll, both failures are reported:\r\n        Person p = new Person(null, null);\r\n        assertAll(\"person fields\",\r\n            () -> assertNotNull(p.firstName(), \"firstName must not be null\"),\r\n            () -> assertNotNull(p.lastName(), \"lastName must not be null\")\r\n        );\r\n    }\r\n}\r\n\r\nrecord Address(String street, String city, String state, String zip) {}\r\nrecord Customer(String firstName, String lastName, Address address) {}\r\nrecord Person(String firstName, String lastName) {}\n"
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
        children: "package junit5.assertions;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.condition.EnabledOnOs;\r\nimport org.junit.jupiter.api.condition.OS;\r\n\r\nimport static org.junit.jupiter.api.Assertions.assertEquals;\r\nimport static org.junit.jupiter.api.Assumptions.*;\r\n\r\nclass AssumptionDemo {\r\n\r\n    @Test\r\n    void assumeEnvironment() {\r\n        String ciEnv = System.getenv(\"CI\");\r\n        assumeTrue(ciEnv != null, \"Skipping: not running in CI environment\");\r\n        // Only runs if CI env var is set\r\n        assertEquals(\"true\", ciEnv);\r\n    }\r\n\r\n    @Test\r\n    void assumingThatExample() {\r\n        // assumingThat runs the executable only if the condition is true.\r\n        // Unlike assumeTrue, the test is NOT skipped — the block is\r\n        // simply not executed.\r\n        assumingThat(\r\n            \"CI\".equals(System.getenv(\"ENV\")),\r\n            () -> {\r\n                // This block only runs in CI environment\r\n                assertEquals(4, 2 + 2);\r\n            }\r\n        );\r\n\r\n        // This always runs\r\n        assertEquals(2, 1 + 1);\r\n    }\r\n\r\n    @Test\r\n    void assumeWithCustomMessage() {\r\n        assumeTrue(\r\n            Runtime.version().feature() >= 17,\r\n            () -> \"Test requires Java 17+, got \" + Runtime.version()\r\n        );\r\n    }\r\n\r\n    @Test\r\n    @EnabledOnOs(OS.LINUX)\r\n    void onlyOnLinux() {\r\n        // Built-in conditional execution annotation\r\n        assertEquals(0, 0);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\r\nAlways use ", (0,jsx_runtime.jsx)(_components.code, {
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
        children: "package junit5.parameterized;\r\n\r\nimport org.junit.jupiter.params.ParameterizedTest;\r\nimport org.junit.jupiter.params.provider.ValueSource;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\nclass ValueSourceDemo {\r\n\r\n    private final StringValidator validator = new StringValidator();\r\n\r\n    @ParameterizedTest\r\n    @ValueSource(strings = {\"racecar\", \"radar\", \"level\", \"madam\"})\r\n    void palindromesAreRecognized(String candidate) {\r\n        assertTrue(validator.isPalindrome(candidate));\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @ValueSource(ints = {2, 4, 6, 8, 10})\r\n    void evenNumbers(int number) {\r\n        assertEquals(0, number % 2);\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @ValueSource(longs = {1L, 2L, 3L})\r\n    void longValues(long value) {\r\n        assertTrue(value > 0);\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @ValueSource(doubles = {1.5, 2.7, 3.14})\r\n    void doubleValues(double value) {\r\n        assertTrue(value > 0);\r\n    }\r\n}\r\n\r\nclass StringValidator {\r\n\r\n    boolean isPalindrome(String s) {\r\n        String reversed = new StringBuilder(s).reverse().toString();\r\n        return s.equals(reversed);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-nullsource-emptysource-nullandemptysource",
      children: "4.2 NullSource, EmptySource, NullAndEmptySource"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.parameterized;\r\n\r\nimport org.junit.jupiter.params.ParameterizedTest;\r\nimport org.junit.jupiter.params.provider.EmptySource;\r\nimport org.junit.jupiter.params.provider.NullAndEmptySource;\r\nimport org.junit.jupiter.params.provider.NullSource;\r\nimport org.junit.jupiter.params.provider.ValueSource;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\nclass NullEmptySourceDemo {\r\n\r\n    private final UserService service = new UserService();\r\n\r\n    @ParameterizedTest\r\n    @NullSource\r\n    void shouldRejectNull(String name) {\r\n        assertFalse(service.isValidUsername(name));\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @EmptySource\r\n    void shouldRejectEmpty(String name) {\r\n        assertFalse(service.isValidUsername(name));\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @NullAndEmptySource\r\n    void shouldRejectNullOrEmpty(String name) {\r\n        assertFalse(service.isValidUsername(name));\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @NullAndEmptySource\r\n    @ValueSource(strings = {\" \", \"\\t\", \"\\n\", \"ab\", \"a\", \"\"})\r\n    void shouldRejectAllInvalidValues(String name) {\r\n        assertFalse(service.isValidUsername(name));\r\n    }\r\n}\r\n\r\nclass UserService {\r\n\r\n    boolean isValidUsername(String username) {\r\n        return username != null\r\n            && !username.isBlank()\r\n            && username.length() >= 3\r\n            && username.length() <= 20\r\n            && username.matches(\"^[a-zA-Z0-9_]+$\");\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-enumsource",
      children: "4.3 EnumSource"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.parameterized;\r\n\r\nimport org.junit.jupiter.params.ParameterizedTest;\r\nimport org.junit.jupiter.params.provider.EnumSource;\r\nimport org.junit.jupiter.params.provider.EnumSource.Mode;\r\n\r\nimport java.time.DayOfWeek;\r\nimport java.time.Month;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\nclass EnumSourceDemo {\r\n\r\n    private final BusinessCalendar calendar = new BusinessCalendar();\r\n\r\n    @ParameterizedTest\r\n    @EnumSource(DayOfWeek.class)\r\n    void allDaysAreHandled(DayOfWeek day) {\r\n        assertNotNull(calendar.describe(day));\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @EnumSource(value = DayOfWeek.class, names = {\"SATURDAY\", \"SUNDAY\"})\r\n    void weekendsAreNonWorking(DayOfWeek day) {\r\n        assertFalse(calendar.isWorkingDay(day));\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @EnumSource(value = DayOfWeek.class, names = {\"SATURDAY\", \"SUNDAY\"}, mode = Mode.EXCLUDE)\r\n    void weekdaysAreWorking(DayOfWeek day) {\r\n        assertTrue(calendar.isWorkingDay(day));\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @EnumSource(value = DayOfWeek.class, names = \".+DAY\", mode = Mode.MATCH_ALL)\r\n    void matchByPattern(DayOfWeek day) {\r\n        assertNotNull(day);\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @EnumSource(value = Month.class, names = {\"JANUARY\", \"FEBRUARY\", \"MARCH\"}, mode = Mode.INCLUDE)\r\n    void q1Months(Month month) {\r\n        assertTrue(month.getValue() <= 3);\r\n    }\r\n}\r\n\r\nclass BusinessCalendar {\r\n\r\n    boolean isWorkingDay(DayOfWeek day) {\r\n        return switch (day) {\r\n            case SATURDAY, SUNDAY -> false;\r\n            default -> true;\r\n        };\r\n    }\r\n\r\n    String describe(DayOfWeek day) {\r\n        return switch (day) {\r\n            case MONDAY -> \"Start of work week\";\r\n            case TUESDAY -> \"Second day\";\r\n            case WEDNESDAY -> \"Midweek\";\r\n            case THURSDAY -> \"Almost Friday\";\r\n            case FRIDAY -> \"Last workday\";\r\n            case SATURDAY -> \"Weekend\";\r\n            case SUNDAY -> \"Weekend\";\r\n        };\r\n    }\r\n}\n"
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
        children: "package junit5.parameterized;\r\n\r\nimport org.junit.jupiter.params.ParameterizedTest;\r\nimport org.junit.jupiter.params.provider.Arguments;\r\nimport org.junit.jupiter.params.provider.MethodSource;\r\n\r\nimport java.util.List;\r\nimport java.util.stream.IntStream;\r\nimport java.util.stream.Stream;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.junit.jupiter.params.provider.Arguments.arguments;\r\n\r\nclass MethodSourceDemo {\r\n\r\n    private final TaxCalculator tax = new TaxCalculator();\r\n\r\n    @ParameterizedTest\r\n    @MethodSource(\"provideTaxBrackets\")\r\n    void taxIsCalculatedCorrectly(double income, double expectedTax) {\r\n        assertEquals(expectedTax, tax.calculate(income), 0.01);\r\n    }\r\n\r\n    static Stream<Arguments> provideTaxBrackets() {\r\n        return Stream.of(\r\n            arguments(10_000, 0),\r\n            arguments(50_000, 6_000),\r\n            arguments(100_000, 17_000),\r\n            arguments(250_000, 62_000)\r\n        );\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @MethodSource(\"junit5.parameterized.ExternalDataProviders#provideStrings\")\r\n    void externalMethodSource(String input) {\r\n        assertNotNull(input);\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @MethodSource({\"provideNames\", \"provideMoreNames\"})\r\n    void multipleFactories(String name) {\r\n        assertNotNull(name);\r\n    }\r\n\r\n    static Stream<String> provideNames() {\r\n        return Stream.of(\"Alice\", \"Bob\", \"Charlie\");\r\n    }\r\n\r\n    static Stream<String> provideMoreNames() {\r\n        return Stream.of(\"Diana\", \"Eve\");\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @MethodSource\r\n    void methodSourceMatchingName(String value) {\r\n        // When @MethodSource has no value, it uses the test method name:\r\n        // \"methodSourceMatchingName\"\r\n        assertFalse(value.isEmpty());\r\n    }\r\n\r\n    static Stream<String> methodSourceMatchingName() {\r\n        return Stream.of(\"x\", \"y\", \"z\");\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @MethodSource(\"intStreamProvider\")\r\n    void withSimpleTypes(int value) {\r\n        assertTrue(value >= 0);\r\n    }\r\n\r\n    static IntStream intStreamProvider() {\r\n        return IntStream.range(0, 5);\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @MethodSource(\"objectListProvider\")\r\n    void withObjectList(String item) {\r\n        assertNotNull(item);\r\n    }\r\n\r\n    static List<String> objectListProvider() {\r\n        return List.of(\"A\", \"B\", \"C\");\r\n    }\r\n}\r\n\r\nclass ExternalDataProviders {\r\n\r\n    static Stream<String> provideStrings() {\r\n        return Stream.of(\"external1\", \"external2\", \"external3\");\r\n    }\r\n}\r\n\r\nclass TaxCalculator {\r\n\r\n    double calculate(double income) {\r\n        if (income <= 12_000) return 0;\r\n        if (income <= 50_000) return (income - 12_000) * 0.15;\r\n        if (income <= 150_000) return 5700 + (income - 50_000) * 0.25;\r\n        return 30700 + (income - 150_000) * 0.35;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-csvsource",
      children: "4.5 CsvSource"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.parameterized;\r\n\r\nimport org.junit.jupiter.params.ParameterizedTest;\r\nimport org.junit.jupiter.params.provider.CsvSource;\r\nimport org.junit.jupiter.params.provider.CsvFileSource;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\nclass CsvSourceDemo {\r\n\r\n    private final ShoppingCart cart = new ShoppingCart();\r\n\r\n    @ParameterizedTest\r\n    @CsvSource({\r\n        \"apple,   1.50,  3,  4.50\",\r\n        \"banana,  0.75,  2,  1.50\",\r\n        \"orange,  1.25,  4,  5.00\",\r\n        \"'kiwi fruit',  0.50, 10, 5.00\"\r\n    })\r\n    void lineItemTotal(String product, double unitPrice, int quantity, double expectedTotal) {\r\n        assertEquals(expectedTotal, cart.calculateLineTotal(unitPrice, quantity), 0.001);\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @CsvSource(textBlock = \"\"\"\r\n        apple,   1.50,  3,  4.50\r\n        banana,  0.75,  2,  1.50\r\n        orange,  1.25,  4,  5.00\r\n        kiwi,    0.50, 10,  5.00\r\n    \"\"\")\r\n    void usingTextBlock(String product, double unitPrice, int quantity, double expectedTotal) {\r\n        assertEquals(expectedTotal, cart.calculateLineTotal(unitPrice, quantity), 0.001);\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @CsvSource(value = {\r\n        \"null | 0 | 0\",\r\n        \"''   | 0 | 0\"\r\n    }, delimiter = '|', nullValues = {\"null\", \"N/A\"})\r\n    void withNullAndCustomDelimiter(String input, int length, int hashCode) {\r\n        // nullValues: \"null\" and \"N/A\" strings in the CSV become Java null\r\n        assertNull(input);\r\n        assertEquals(0, length);\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @CsvSource(value = {\r\n        \"1 : 2 : 3\",\r\n        \"10: 20: 30\"\r\n    }, delimiter = ':')\r\n    void customDelimiter(int a, int b, int c) {\r\n        assertEquals(a + b, c);\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @CsvSource({\r\n        \"hello,  5,  true\",\r\n        \"hi,     2,  true\",\r\n        \",       0,  false\"\r\n    })\r\n    void stringLengthAndPresence(String input, int expectedLength, boolean expectedPresent) {\r\n        if (input != null) {\r\n            assertEquals(expectedLength, input.length());\r\n        }\r\n        assertEquals(expectedPresent, input != null && !input.isEmpty());\r\n    }\r\n}\r\n\r\nclass ShoppingCart {\r\n\r\n    double calculateLineTotal(double unitPrice, int quantity) {\r\n        return unitPrice * quantity;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-csvfilesource",
      children: "4.6 CsvFileSource"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.parameterized;\r\n\r\nimport org.junit.jupiter.params.ParameterizedTest;\r\nimport org.junit.jupiter.params.provider.CsvFileSource;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\n/**\r\n * Loads test data from a CSV file on the classpath.\r\n *\r\n * src/test/resources/tax-data.csv:\r\n *   income, expectedTax\r\n *   10000, 0\r\n *   50000, 6000\r\n *   100000, 17000\r\n *   250000, 62000\r\n */\r\nclass CsvFileSourceDemo {\r\n\r\n    private final TaxCalculator tax = new TaxCalculator();\r\n\r\n    @ParameterizedTest\r\n    @CsvFileSource(resources = \"/tax-data.csv\", numLinesToSkip = 1)\r\n    void fromCsvFile(double income, double expectedTax) {\r\n        assertEquals(expectedTax, tax.calculate(income), 0.01);\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @CsvFileSource(\r\n        resources = \"/tax-data.csv\",\r\n        numLinesToSkip = 1,\r\n        delimiter = ',',\r\n        encoding = \"UTF-8\"\r\n    )\r\n    void withExplicitSettings(double income, double expectedTax) {\r\n        assertEquals(expectedTax, tax.calculate(income), 0.01);\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @CsvFileSource(\r\n        resources = {\"/tax-data.csv\", \"/more-tax-data.csv\"},\r\n        numLinesToSkip = 1\r\n    )\r\n    void fromMultipleFiles(double income, double expectedTax) {\r\n        assertDoesNotThrow(() -> tax.calculate(income));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-argumentssource-custom-argumentsprovider",
      children: "4.7 ArgumentsSource (Custom ArgumentsProvider)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.parameterized;\r\n\r\nimport org.junit.jupiter.api.extension.ExtensionContext;\r\nimport org.junit.jupiter.params.ParameterizedTest;\r\nimport org.junit.jupiter.params.provider.Arguments;\r\nimport org.junit.jupiter.params.provider.ArgumentsProvider;\r\nimport org.junit.jupiter.params.provider.ArgumentsSource;\r\n\r\nimport java.util.stream.Stream;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.junit.jupiter.params.provider.Arguments.arguments;\r\n\r\nclass ArgumentsSourceDemo {\r\n\r\n    @ParameterizedTest\r\n    @ArgumentsSource(RomanNumeralProvider.class)\r\n    void romanNumerals(int arabic, String roman) {\r\n        RomanConverter converter = new RomanConverter();\r\n        assertEquals(roman, converter.toRoman(arabic));\r\n    }\r\n}\r\n\r\nclass RomanNumeralProvider implements ArgumentsProvider {\r\n\r\n    @Override\r\n    public Stream<? extends Arguments> provideArguments(ExtensionContext context) {\r\n        return Stream.of(\r\n            arguments(1, \"I\"),\r\n            arguments(4, \"IV\"),\r\n            arguments(9, \"IX\"),\r\n            arguments(10, \"X\"),\r\n            arguments(40, \"XL\"),\r\n            arguments(50, \"L\"),\r\n            arguments(90, \"XC\"),\r\n            arguments(100, \"C\"),\r\n            arguments(400, \"CD\"),\r\n            arguments(500, \"D\"),\r\n            arguments(900, \"CM\"),\r\n            arguments(1000, \"M\"),\r\n            arguments(1987, \"MCMLXXXVII\"),\r\n            arguments(2024, \"MMXXIV\")\r\n        );\r\n    }\r\n}\r\n\r\nclass RomanConverter {\r\n\r\n    private static final int[] VALUES = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};\r\n    private static final String[] SYMBOLS = {\"M\", \"CM\", \"D\", \"CD\", \"C\", \"XC\", \"L\", \"XL\", \"X\", \"IX\", \"V\", \"IV\", \"I\"};\r\n\r\n    String toRoman(int num) {\r\n        if (num <= 0 || num > 3999) {\r\n            throw new IllegalArgumentException(\"Out of range: \" + num);\r\n        }\r\n        StringBuilder result = new StringBuilder();\r\n        for (int i = 0; i < VALUES.length; i++) {\r\n            while (num >= VALUES[i]) {\r\n                num -= VALUES[i];\r\n                result.append(SYMBOLS[i]);\r\n            }\r\n        }\r\n        return result.toString();\r\n    }\r\n}\n"
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
        children: "package junit5.parameterized;\r\n\r\nimport org.junit.jupiter.api.extension.ParameterContext;\r\nimport org.junit.jupiter.params.converter.ArgumentConversionException;\r\nimport org.junit.jupiter.params.converter.ArgumentConverter;\r\nimport org.junit.jupiter.params.converter.ConvertWith;\r\nimport org.junit.jupiter.params.ParameterizedTest;\r\nimport org.junit.jupiter.params.provider.CsvSource;\r\n\r\nimport java.time.LocalDate;\r\nimport java.time.format.DateTimeFormatter;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\nclass ArgumentConversionDemo {\r\n\r\n    @ParameterizedTest\r\n    @CsvSource({\r\n        \"2024-01-15, 2024-01-15\",\r\n        \"2023-12-25, 2023-12-25\"\r\n    })\r\n    void implicitDateConversion(LocalDate date, LocalDate expected) {\r\n        assertEquals(expected, date);\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @CsvSource({\r\n        \"15-01-2024, 2024-01-15\",\r\n        \"25-12-2023, 2023-12-25\"\r\n    })\r\n    void explicitConversion(@ConvertWith(EuropeanDateConverter.class) LocalDate date) {\r\n        assertNotNull(date);\r\n        assertEquals(LocalDate.now().getYear(), date.getYear());\r\n    }\r\n}\r\n\r\nclass EuropeanDateConverter implements ArgumentConverter {\r\n\r\n    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern(\"dd-MM-yyyy\");\r\n\r\n    @Override\r\n    public Object convert(Object source, ParameterContext context)\r\n            throws ArgumentConversionException {\r\n        if (source == null) {\r\n            return null;\r\n        }\r\n        if (!(source instanceof String s)) {\r\n            throw new ArgumentConversionException(\"Expected a String but got \" + source.getClass());\r\n        }\r\n        try {\r\n            return LocalDate.parse(s, FORMATTER);\r\n        } catch (Exception e) {\r\n            throw new ArgumentConversionException(\"Failed to convert '\" + s + \"' to LocalDate\", e);\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-argument-aggregation",
      children: "5.2 Argument Aggregation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a parameterized test has many arguments, aggregating them into a single object improves readability."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.parameterized;\r\n\r\nimport org.junit.jupiter.api.extension.ParameterContext;\r\nimport org.junit.jupiter.params.ParameterizedTest;\r\nimport org.junit.jupiter.params.aggregator.AggregateWith;\r\nimport org.junit.jupiter.params.aggregator.ArgumentsAccessor;\r\nimport org.junit.jupiter.params.aggregator.ArgumentsAggregationException;\r\nimport org.junit.jupiter.params.aggregator.ArgumentsAggregator;\r\nimport org.junit.jupiter.params.provider.CsvSource;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\nclass ArgumentAggregationDemo {\r\n\r\n    @ParameterizedTest\r\n    @CsvSource({\r\n        \"Alice, 30, alice@example.com\",\r\n        \"Bob, 25, bob@example.com\",\r\n        \"Charlie, 35, charlie@example.com\"\r\n    })\r\n    void usingArgumentsAccessor(ArgumentsAccessor accessor) {\r\n        String name = accessor.getString(0);\r\n        int age = accessor.getInteger(1);\r\n        String email = accessor.getString(2);\r\n\r\n        assertNotNull(name);\r\n        assertTrue(age > 0);\r\n        assertTrue(email.contains(\"@\"));\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @CsvSource({\r\n        \"Alice, 30, alice@example.com\",\r\n        \"Bob, 25, bob@example.com\"\r\n    })\r\n    void usingCustomAggregator(@AggregateWith(PersonAggregator.class) Person person) {\r\n        assertNotNull(person.name());\r\n        assertTrue(person.age() > 0);\r\n        assertTrue(person.email().contains(\"@\"));\r\n    }\r\n\r\n    @ParameterizedTest\r\n    @CsvSource({\r\n        \"Alice, 30, alice@example.com\",\r\n        \"Bob, 25, bob@example.com\"\r\n    })\r\n    void usingCustomAnnotation(@CsvToPerson Person person) {\r\n        assertNotNull(person);\r\n    }\r\n}\r\n\r\nrecord Person(String name, int age, String email) {}\r\n\r\nclass PersonAggregator implements ArgumentsAggregator {\r\n\r\n    @Override\r\n    public Object aggregateArguments(ArgumentsAccessor accessor, ParameterContext context)\r\n            throws ArgumentsAggregationException {\r\n        return new Person(\r\n            accessor.getString(0),\r\n            accessor.getInteger(1),\r\n            accessor.getString(2)\r\n        );\r\n    }\r\n}\r\n\r\n/**\r\n * Composed annotation for reusable aggregation.\r\n */\r\n@java.lang.annotation.Target(java.lang.annotation.ElementType.PARAMETER)\r\n@java.lang.annotation.Retention(java.lang.annotation.RetentionPolicy.RUNTIME)\r\n@AggregateWith(PersonAggregator.class)\r\n@interface CsvToPerson {\r\n}\n"
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
        children: "package junit5.dynamictests;\r\n\r\nimport org.junit.jupiter.api.DynamicNode;\r\nimport org.junit.jupiter.api.DynamicTest;\r\nimport org.junit.jupiter.api.TestFactory;\r\nimport org.junit.jupiter.api.DynamicContainer;\r\n\r\nimport java.util.Arrays;\r\nimport java.util.Collection;\r\nimport java.util.Iterator;\r\nimport java.util.List;\r\nimport java.util.Random;\r\nimport java.util.function.Function;\r\nimport java.util.stream.IntStream;\r\nimport java.util.stream.Stream;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.junit.jupiter.api.DynamicContainer.dynamicContainer;\r\nimport static org.junit.jupiter.api.DynamicTest.dynamicTest;\r\n\r\nclass DynamicTestDemo {\r\n\r\n    private final StringConverter converter = new StringConverter();\r\n\r\n    @TestFactory\r\n    Collection<DynamicTest> collectionOfDynamicTests() {\r\n        return Arrays.asList(\r\n            dynamicTest(\"1st dynamic test\", () -> assertTrue(true)),\r\n            dynamicTest(\"2nd dynamic test\", () -> assertEquals(4, 2 + 2))\r\n        );\r\n    }\r\n\r\n    @TestFactory\r\n    Stream<DynamicTest> streamOfDynamicTests() {\r\n        return Stream.of(\r\n            dynamicTest(\"positive number\", () -> assertTrue(42 > 0)),\r\n            dynamicTest(\"negative number\", () -> assertTrue(-1 < 0)),\r\n            dynamicTest(\"zero\", () -> assertEquals(0, 0))\r\n        );\r\n    }\r\n\r\n    @TestFactory\r\n    Iterator<DynamicTest> iteratorOfDynamicTests() {\r\n        return List.of(\r\n            dynamicTest(\"from iterator 1\", () -> {}),\r\n            dynamicTest(\"from iterator 2\", () -> {})\r\n        ).iterator();\r\n    }\r\n\r\n    /**\r\n     * Generate dynamic tests from external data — this is where\r\n     * dynamic tests truly shine: tests are generated per data row.\r\n     */\r\n    @TestFactory\r\n    Stream<DynamicTest> dynamicTestsFromData() {\r\n        List<String> words = Arrays.asList(\"racecar\", \"radar\", \"level\", \"hello\", \"world\");\r\n        return words.stream()\r\n            .filter(word -> word.contains(\"a\"))\r\n            .map(word -> dynamicTest(\r\n                \"palindrome test: \" + word,\r\n                () -> {\r\n                    if (word.equals(\"hello\") || word.equals(\"world\")) {\r\n                        assertFalse(converter.isPalindrome(word));\r\n                    } else {\r\n                        assertTrue(converter.isPalindrome(word));\r\n                    }\r\n                }\r\n            ));\r\n    }\r\n\r\n    @TestFactory\r\n    Stream<DynamicTest> dynamicTestsWithGeneratedNames() {\r\n        return IntStream.range(1, 5)\r\n            .mapToObj(i -> dynamicTest(\r\n                \"multiplication test #\" + i,\r\n                () -> assertEquals(i * i, i * i)\r\n            ));\r\n    }\r\n\r\n    @TestFactory\r\n    Stream<DynamicTest> randomDynamicTests() {\r\n        Random random = new Random(42);\r\n        return Stream.generate(() -> {\r\n                int a = random.nextInt(100);\r\n                int b = random.nextInt(100);\r\n                return dynamicTest(\r\n                    a + \" + \" + b + \" = \" + (a + b),\r\n                    () -> assertEquals(a + b, a + b)\r\n                );\r\n            })\r\n            .limit(10);\r\n    }\r\n}\r\n\r\nclass StringConverter {\r\n\r\n    boolean isPalindrome(String s) {\r\n        return s.equals(new StringBuilder(s).reverse().toString());\r\n    }\r\n}\n"
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
        children: "package junit5.dynamictests;\r\n\r\nimport org.junit.jupiter.api.DynamicContainer;\r\nimport org.junit.jupiter.api.DynamicNode;\r\nimport org.junit.jupiter.api.DynamicTest;\r\nimport org.junit.jupiter.api.TestFactory;\r\n\r\nimport java.util.Arrays;\r\nimport java.util.List;\r\nimport java.util.stream.Stream;\r\n\r\nimport static org.junit.jupiter.api.DynamicContainer.dynamicContainer;\r\nimport static org.junit.jupiter.api.DynamicTest.dynamicTest;\r\n\r\nclass DynamicContainerDemo {\r\n\r\n    private final ProductValidator validator = new ProductValidator();\r\n\r\n    @TestFactory\r\n    DynamicNode nestedDynamicTests() {\r\n        return dynamicContainer(\"Products\", Stream.of(\r\n            dynamicContainer(\"Electronics\", Stream.of(\r\n                dynamicTest(\"Laptop price is valid\", () -> validator.isValidPrice(999.99)),\r\n                dynamicTest(\"Phone price is valid\", () -> validator.isValidPrice(699.99))\r\n            )),\r\n            dynamicContainer(\"Books\", Stream.of(\r\n                dynamicTest(\"Novel price is valid\", () -> validator.isValidPrice(14.99)),\r\n                dynamicTest(\"Textbook price is valid\", () -> validator.isValidPrice(79.99))\r\n            ))\r\n        ));\r\n    }\r\n\r\n    @TestFactory\r\n    DynamicNode deeplyNestedStructure() {\r\n        return dynamicContainer(\"Math Operations\", Arrays.asList(\r\n            dynamicContainer(\"Addition\", Arrays.asList(\r\n                dynamicContainer(\"Positive\", List.of(\r\n                    dynamicTest(\"1 + 1 = 2\", () -> {}),\r\n                    dynamicTest(\"2 + 3 = 5\", () -> {})\r\n                )),\r\n                dynamicContainer(\"Negative\", List.of(\r\n                    dynamicTest(\"-1 + -1 = -2\", () -> {}),\r\n                    dynamicTest(\"-5 + 3 = -2\", () -> {})\r\n                ))\r\n            )),\r\n            dynamicContainer(\"Multiplication\", Arrays.asList(\r\n                dynamicTest(\"2 * 3 = 6\", () -> {}),\r\n                dynamicTest(\"4 * 5 = 20\", () -> {})\r\n            ))\r\n        ));\r\n    }\r\n}\r\n\r\nclass ProductValidator {\r\n\r\n    boolean isValidPrice(double price) {\r\n        return price > 0 && price < 100_000;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-stream-based-dynamic-url-tests",
      children: "6.3 Stream-Based Dynamic URL Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.dynamictests;\r\n\r\nimport org.junit.jupiter.api.DynamicTest;\r\nimport org.junit.jupiter.api.TestFactory;\r\n\r\nimport java.io.IOException;\r\nimport java.net.URI;\r\nimport java.net.http.HttpClient;\r\nimport java.net.http.HttpRequest;\r\nimport java.net.http.HttpResponse;\r\nimport java.util.List;\r\nimport java.util.stream.Stream;\r\n\r\nimport static org.junit.jupiter.api.Assertions.assertEquals;\r\nimport static org.junit.jupiter.api.DynamicTest.dynamicTest;\r\n\r\nclass DynamicUrlTestDemo {\r\n\r\n    private final HttpClient httpClient = HttpClient.newHttpClient();\r\n\r\n    @TestFactory\r\n    Stream<DynamicTest> allEndpointsReturnOk() {\r\n        List<String> urls = List.of(\r\n            \"https://httpbin.org/status/200\",\r\n            \"https://httpbin.org/status/201\"\r\n        );\r\n        return urls.stream()\r\n            .map(url -> dynamicTest(\"GET \" + url + \" returns 2xx\", () -> {\r\n                HttpRequest request = HttpRequest.newBuilder()\r\n                    .uri(URI.create(url))\r\n                    .GET()\r\n                    .build();\r\n                HttpResponse<String> response = httpClient.send(request,\r\n                    HttpResponse.BodyHandlers.ofString());\r\n                int status = response.statusCode();\r\n                assertEquals(200, status, url + \" returned \" + status);\r\n            }));\r\n    }\r\n\r\n    @TestFactory\r\n    Stream<DynamicTest> batchValidation() {\r\n        List<ValidationCase> cases = List.of(\r\n            new ValidationCase(\"valid@email.com\", true),\r\n            new ValidationCase(\"not-an-email\", false),\r\n            new ValidationCase(\"user@.com\", false)\r\n        );\r\n        return cases.stream()\r\n            .map(tc -> dynamicTest(\r\n                tc.input() + \" -> \" + tc.expected(),\r\n                () -> assertEquals(tc.expected(), isValidEmail(tc.input()))\r\n            ));\r\n    }\r\n\r\n    private boolean isValidEmail(String email) {\r\n        return email != null && email.matches(\"^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,}$\");\r\n    }\r\n\r\n    record ValidationCase(String input, boolean expected) {}\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-test-templates",
      children: "7. Test Templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.templates;\r\n\r\nimport org.junit.jupiter.api.TestTemplate;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.junit.jupiter.api.extension.Extension;\r\nimport org.junit.jupiter.api.extension.ExtensionContext;\r\nimport org.junit.jupiter.api.extension.TestTemplateInvocationContext;\r\nimport org.junit.jupiter.api.extension.TestTemplateInvocationContextProvider;\r\n\r\nimport java.util.List;\r\nimport java.util.stream.Stream;\r\n\r\nimport static org.junit.jupiter.api.Assertions.assertTrue;\r\n\r\n/**\r\n * @TestTemplate methods are invoked multiple times through\r\n * a TestTemplateInvocationContextProvider extension — one invocation\r\n * per context. This is the mechanism behind @RepeatedTest and\r\n * @ParameterizedTest.\r\n */\r\nclass TestTemplateDemo {\r\n\r\n    @TestTemplate\r\n    @ExtendWith(MyTestTemplateProvider.class)\r\n    void templateTestMethod(int value) {\r\n        assertTrue(value > 0);\r\n    }\r\n}\r\n\r\nclass MyTestTemplateProvider implements TestTemplateInvocationContextProvider {\r\n\r\n    @Override\r\n    public boolean supportsTestTemplate(ExtensionContext context) {\r\n        return true;\r\n    }\r\n\r\n    @Override\r\n    public Stream<TestTemplateInvocationContext> provideTestTemplateInvocationContexts(\r\n            ExtensionContext context) {\r\n        return Stream.of(\r\n            invocationContext(\"positive case 1\", 1),\r\n            invocationContext(\"positive case 2\", 2),\r\n            invocationContext(\"positive case 3\", 3)\r\n        );\r\n    }\r\n\r\n    private TestTemplateInvocationContext invocationContext(String displayName, int value) {\r\n        return new TestTemplateInvocationContext() {\r\n            @Override\r\n            public String getDisplayName(int invocationIndex) {\r\n                return displayName;\r\n            }\r\n\r\n            @Override\r\n            public List<Extension> getAdditionalExtensions() {\r\n                return List.of(new ValueResolver(value));\r\n            }\r\n        };\r\n    }\r\n}\r\n\r\nclass ValueResolver implements org.junit.jupiter.api.extension.ParameterResolver {\r\n\r\n    private final int value;\r\n\r\n    ValueResolver(int value) {\r\n        this.value = value;\r\n    }\r\n\r\n    @Override\r\n    public boolean supportsParameter(\r\n            org.junit.jupiter.api.extension.ParameterContext parameterContext,\r\n            ExtensionContext extensionContext) {\r\n        return parameterContext.getParameter().getType() == int.class;\r\n    }\r\n\r\n    @Override\r\n    public Object resolveParameter(\r\n            org.junit.jupiter.api.extension.ParameterContext parameterContext,\r\n            ExtensionContext extensionContext) {\r\n        return value;\r\n    }\r\n}\n"
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
        children: "package junit5.nested;\r\n\r\nimport org.junit.jupiter.api.AfterEach;\r\nimport org.junit.jupiter.api.BeforeEach;\r\nimport org.junit.jupiter.api.DisplayName;\r\nimport org.junit.jupiter.api.Nested;\r\nimport org.junit.jupiter.api.Test;\r\n\r\nimport java.util.EmptyStackException;\r\nimport java.util.Stack;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\n/**\r\n * Nested tests follow the \"Given-When-Then\" / \"Arrange-Act-Assert\"\r\n * structure. The outer class sets up the fixture, and each nested\r\n * class tests a specific behaviour.\r\n */\r\n@DisplayName(\"A Stack\")\r\nclass StackNestedTest {\r\n\r\n    private Stack<String> stack;\r\n\r\n    @BeforeEach\r\n    void setUp() {\r\n        System.out.println(\"Outer @BeforeEach\");\r\n    }\r\n\r\n    @AfterEach\r\n    void tearDown() {\r\n        System.out.println(\"Outer @AfterEach\");\r\n    }\r\n\r\n    @Nested\r\n    @DisplayName(\"when new\")\r\n    class WhenNew {\r\n\r\n        @BeforeEach\r\n        void createNewStack() {\r\n            stack = new Stack<>();\r\n        }\r\n\r\n        @Test\r\n        @DisplayName(\"is empty\")\r\n        void isEmpty() {\r\n            assertTrue(stack.isEmpty());\r\n        }\r\n\r\n        @Test\r\n        @DisplayName(\"throws EmptyStackException when popped\")\r\n        void throwsExceptionWhenPopped() {\r\n            assertThrows(EmptyStackException.class, () -> stack.pop());\r\n        }\r\n\r\n        @Test\r\n        @DisplayName(\"throws EmptyStackException when peeked\")\r\n        void throwsExceptionWhenPeeked() {\r\n            assertThrows(EmptyStackException.class, stack::peek);\r\n        }\r\n\r\n        @Nested\r\n        @DisplayName(\"after pushing an element\")\r\n        class AfterPushing {\r\n\r\n            private String element = \"item\";\r\n\r\n            @BeforeEach\r\n            void pushAnElement() {\r\n                stack.push(element);\r\n            }\r\n\r\n            @Test\r\n            @DisplayName(\"is no longer empty\")\r\n            void isNotEmpty() {\r\n                assertFalse(stack.isEmpty());\r\n            }\r\n\r\n            @Test\r\n            @DisplayName(\"peek returns the element\")\r\n            void peekReturnsElement() {\r\n                assertEquals(element, stack.peek());\r\n            }\r\n\r\n            @Test\r\n            @DisplayName(\"pop returns the element\")\r\n            void popReturnsElement() {\r\n                assertEquals(element, stack.pop());\r\n            }\r\n\r\n            @Test\r\n            @DisplayName(\"size is 1\")\r\n            void sizeIsOne() {\r\n                assertEquals(1, stack.size());\r\n            }\r\n\r\n            @Nested\r\n            @DisplayName(\"after pushing a second element\")\r\n            class AfterPushingSecond {\r\n\r\n                private String secondElement = \"second\";\r\n\r\n                @BeforeEach\r\n                void pushSecond() {\r\n                    stack.push(secondElement);\r\n                }\r\n\r\n                @Test\r\n                @DisplayName(\"size increases to 2\")\r\n                void sizeIsTwo() {\r\n                    assertEquals(2, stack.size());\r\n                }\r\n\r\n                @Test\r\n                @DisplayName(\"pop returns the top element (LIFO)\")\r\n                void popReturnsTop() {\r\n                    assertEquals(secondElement, stack.pop());\r\n                    assertEquals(element, stack.pop());\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    @Nested\r\n    @DisplayName(\"when full\")\r\n    class WhenFull {\r\n\r\n        private static final int CAPACITY = 10;\r\n\r\n        @BeforeEach\r\n        void fillStack() {\r\n            stack = new Stack<>();\r\n            for (int i = 0; i < CAPACITY; i++) {\r\n                stack.push(\"item-\" + i);\r\n            }\r\n        }\r\n\r\n        @Test\r\n        @DisplayName(\"size equals capacity\")\r\n        void sizeEqualsCapacity() {\r\n            assertEquals(CAPACITY, stack.size());\r\n        }\r\n\r\n        @Test\r\n        @DisplayName(\"popping all elements returns them in LIFO order\")\r\n        void lifoOrder() {\r\n            for (int i = CAPACITY - 1; i >= 0; i--) {\r\n                assertEquals(\"item-\" + i, stack.pop());\r\n            }\r\n            assertTrue(stack.isEmpty());\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-tagging--filtering",
      children: "9. Tagging & Filtering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.tags;\r\n\r\nimport org.junit.jupiter.api.Tag;\r\nimport org.junit.jupiter.api.Test;\r\n\r\n/**\r\n * Tags allow filtering tests at run time — run only \"fast\" tests\r\n * during development, run \"integration\" and \"slow\" tests in CI.\r\n *\r\n * Maven: mvn test -Dgroups=\"fast\"\r\n * Gradle: gradle test --tests \"*.fast.*\"\r\n * IDE: configure test runner to include/exclude tags\r\n */\r\n@Tag(\"domain-model\")\r\nclass TaggedTestDemo {\r\n\r\n    @Test\r\n    @Tag(\"fast\")\r\n    void unitLevel() {\r\n    }\r\n\r\n    @Test\r\n    @Tag(\"fast\")\r\n    @Tag(\"smoke\")\r\n    void smokeTest() {\r\n    }\r\n\r\n    @Test\r\n    @Tag(\"integration\")\r\n    void databaseTest() {\r\n    }\r\n\r\n    @Test\r\n    @Tag(\"integration\")\r\n    @Tag(\"slow\")\r\n    void fullIntegrationTest() {\r\n    }\r\n\r\n    @Test\r\n    @Tag(\"performance\")\r\n    @Tag(\"slow\")\r\n    @Tag(\"load\")\r\n    void performanceBenchmark() {\r\n    }\r\n}\r\n\r\n/**\r\n * Tags are inherited from the class level to all test methods.\r\n * Combined with @Tag on methods, you can build a flexible\r\n * filtering taxonomy.\r\n */\r\n@Tag(\"repository\")\r\n@Tag(\"integration\")\r\nclass RepositoryTaggedTestDemo {\r\n\r\n    @Test\r\n    @Tag(\"h2\")\r\n    void withEmbeddedDatabase() {\r\n    }\r\n\r\n    @Test\r\n    @Tag(\"postgres\")\r\n    void withRealDatabase() {\r\n    }\r\n}\r\n\r\n/**\r\n * Composed annotation for reusable tag groups.\r\n */\r\n@Target(java.lang.annotation.ElementType.TYPE)\r\n@Retention(java.lang.annotation.RetentionPolicy.RUNTIME)\r\n@Tag(\"integration\")\r\n@Tag(\"slow\")\r\n@interface SlowIntegrationTest {\r\n}\r\n\r\n@SlowIntegrationTest\r\nclass AnnotatedTagTest {\r\n\r\n    @Test\r\n    void thisIsASlowIntegrationTest() {\r\n    }\r\n}\n"
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
        children: "package junit5.extensions;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.AfterAllCallback;\r\nimport org.junit.jupiter.api.extension.AfterEachCallback;\r\nimport org.junit.jupiter.api.extension.BeforeAllCallback;\r\nimport org.junit.jupiter.api.extension.BeforeEachCallback;\r\nimport org.junit.jupiter.api.extension.ExtensionContext;\r\nimport org.junit.jupiter.api.extension.TestExecutionExceptionHandler;\r\nimport org.junit.jupiter.api.extension.TestInstancePostProcessor;\r\nimport org.junit.jupiter.api.extension.ParameterContext;\r\nimport org.junit.jupiter.api.extension.ParameterResolver;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\n\r\nimport java.lang.reflect.Field;\r\nimport java.nio.file.Files;\r\nimport java.nio.file.Path;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\n@ExtendWith({\r\n    TimingExtension.class,\r\n    DatabaseExtension.class,\r\n    MockExtension.class,\r\n    IgnoreIOExceptionExtension.class,\r\n    CustomParameterResolver.class\r\n})\r\nclass ExtensionDemo {\r\n\r\n    private DatabaseConnection connection;\r\n\r\n    @Mock\r\n    private PaymentGateway paymentGateway;\r\n\r\n    @Test\r\n    void injectedParameter(\r\n            @Injectable(\"hello from extension\") String message,\r\n            DatabaseConnection conn) {\r\n        assertNotNull(message);\r\n        assertNotNull(conn);\r\n        assertTrue(conn.isConnected());\r\n    }\r\n\r\n    @Test\r\n    void customParameterResolver(int randomValue) {\r\n        assertTrue(randomValue >= 1 && randomValue <= 100);\r\n    }\r\n\r\n    @Test\r\n    void exceptionHandling() {\r\n        // IOException is silently swallowed by the extension\r\n        throw new java.io.IOException(\"this is handled\");\r\n    }\r\n}\r\n\r\n// ---- Annotations ----\r\n\r\n@java.lang.annotation.Target({java.lang.annotation.ElementType.FIELD})\r\n@java.lang.annotation.Retention(java.lang.annotation.RetentionPolicy.RUNTIME)\r\n@interface Mock {\r\n}\r\n\r\n@java.lang.annotation.Target({java.lang.annotation.ElementType.PARAMETER})\r\n@java.lang.annotation.Retention(java.lang.annotation.RetentionPolicy.RUNTIME)\r\n@interface Injectable {\r\n    String value();\r\n}\r\n\r\n// ---- Extension implementations ----\r\n\r\nclass TimingExtension implements BeforeEachCallback, AfterEachCallback {\r\n\r\n    private final ThreadLocal<Long> startTime = new ThreadLocal<>();\r\n\r\n    @Override\r\n    public void beforeEach(ExtensionContext context) {\r\n        startTime.set(System.nanoTime());\r\n    }\r\n\r\n    @Override\r\n    public void afterEach(ExtensionContext context) {\r\n        long elapsed = System.nanoTime() - startTime.get();\r\n        long ms = elapsed / 1_000_000;\r\n        if (ms > 100) {\r\n            System.out.printf(\"SLOW: %s took %dms%n\",\r\n                context.getDisplayName(), ms);\r\n        }\r\n        startTime.remove();\r\n    }\r\n}\r\n\r\nclass DatabaseExtension implements BeforeAllCallback, AfterAllCallback {\r\n\r\n    private DatabaseConnection connection;\r\n\r\n    @Override\r\n    public void beforeAll(ExtensionContext context) {\r\n        connection = new DatabaseConnection();\r\n        connection.connect();\r\n        System.out.println(\"Database connected\");\r\n    }\r\n\r\n    @Override\r\n    public void afterAll(ExtensionContext context) {\r\n        if (connection != null) {\r\n            connection.disconnect();\r\n            System.out.println(\"Database disconnected\");\r\n        }\r\n    }\r\n}\r\n\r\nclass DatabaseConnection {\r\n\r\n    private boolean connected;\r\n\r\n    void connect() {\r\n        connected = true;\r\n    }\r\n\r\n    void disconnect() {\r\n        connected = false;\r\n    }\r\n\r\n    boolean isConnected() {\r\n        return connected;\r\n    }\r\n}\r\n\r\nclass MockExtension implements TestInstancePostProcessor {\r\n\r\n    @Override\r\n    public void postProcessTestInstance(Object testInstance, ExtensionContext context)\r\n            throws Exception {\r\n        for (Field field : testInstance.getClass().getDeclaredFields()) {\r\n            if (field.isAnnotationPresent(Mock.class)) {\r\n                field.setAccessible(true);\r\n                // In a real implementation, use Mockito.mock()\r\n                field.set(testInstance, new Object());\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nclass IgnoreIOExceptionExtension implements TestExecutionExceptionHandler {\r\n\r\n    @Override\r\n    public void handleTestExecutionException(ExtensionContext context, Throwable throwable)\r\n            throws Throwable {\r\n        if (throwable instanceof java.io.IOException) {\r\n            System.out.println(\"Ignoring IOException: \" + throwable.getMessage());\r\n            return; // swallow the exception — test passes\r\n        }\r\n        throw throwable; // re-throw all other exceptions\r\n    }\r\n}\r\n\r\nclass CustomParameterResolver implements ParameterResolver {\r\n\r\n    @Override\r\n    public boolean supportsParameter(ParameterContext parameterContext,\r\n                                      ExtensionContext extensionContext) {\r\n        Class<?> type = parameterContext.getParameter().getType();\r\n        if (type == int.class || type == Integer.class) {\r\n            return true;\r\n        }\r\n        if (parameterContext.isAnnotated(Injectable.class)) {\r\n            return true;\r\n        }\r\n        if (type == DatabaseConnection.class) {\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n\r\n    @Override\r\n    public Object resolveParameter(ParameterContext parameterContext,\r\n                                    ExtensionContext extensionContext) {\r\n        Class<?> type = parameterContext.getParameter().getType();\r\n        if (type == int.class || type == Integer.class) {\r\n            return (int) (Math.random() * 100) + 1;\r\n        }\r\n        if (parameterContext.isAnnotated(Injectable.class)) {\r\n            return parameterContext.findAnnotation(Injectable.class).get().value();\r\n        }\r\n        if (type == DatabaseConnection.class) {\r\n            return extensionContext.getRoot()\r\n                .getStore(ExtensionContext.Namespace.GLOBAL)\r\n                .get(\"databaseConnection\", DatabaseConnection.class);\r\n        }\r\n        return null;\r\n    }\r\n}\r\n\r\n// ---- Conditional Extension ----\r\n\r\nclass ConditionalExtension implements org.junit.jupiter.api.extension.ConditionEvaluationResult,\r\n                                     org.junit.jupiter.api.extension.ExecutionCondition {\r\n\r\n    @Override\r\n    public ConditionEvaluationResult evaluateExecutionCondition(ExtensionContext context) {\r\n        String osName = System.getProperty(\"os.name\").toLowerCase();\r\n        if (osName.contains(\"win\")) {\r\n            return ConditionEvaluationResult.enabled(\"Running on Windows\");\r\n        }\r\n        return ConditionEvaluationResult.disabled(\"This test requires Windows\");\r\n    }\r\n\r\n    @Override\r\n    public ConditionEvaluationResult evaluateExecutionCondition() {\r\n        return null;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-test-reporting",
      children: "11. Test Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package junit5.reporting;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.TestInfo;\r\nimport org.junit.jupiter.api.TestReporter;\r\n\r\nimport java.util.HashMap;\r\nimport java.util.Map;\r\n\r\n/**\r\n * TestInfo and TestReporter are injected by the JUnit Jupiter engine\r\n * into any @Test, @ParameterizedTest, @RepeatedTest, or @TestFactory\r\n * method that declares them as parameters.\r\n */\r\nclass TestReportingDemo {\r\n\r\n    @Test\r\n    void testInfoDemo(TestInfo info) {\r\n        System.out.println(\"Display name: \" + info.getDisplayName());\r\n        System.out.println(\"Test class: \" + info.getTestClass().map(Class::getName).orElse(\"none\"));\r\n        System.out.println(\"Test method: \" + info.getTestMethod().map(Object::toString).orElse(\"none\"));\r\n        System.out.println(\"Tags: \" + info.getTags());\r\n    }\r\n\r\n    @Test\r\n    void testReporterDemo(TestReporter reporter) {\r\n        reporter.publishEntry(\"status\", \"running\");\r\n        reporter.publishEntry(\"timestamp\", String.valueOf(System.currentTimeMillis()));\r\n    }\r\n\r\n    @Test\r\n    void structuredReport(TestReporter reporter) {\r\n        Map<String, String> values = new HashMap<>();\r\n        values.put(\"expected\", \"100\");\r\n        values.put(\"actual\", \"100\");\r\n        values.put(\"result\", \"PASS\");\r\n        reporter.publishEntry(\"assertion-result\", values);\r\n    }\r\n\r\n    @Test\r\n    void multipleReportEntries(TestReporter reporter) {\r\n        reporter.publishEntry(\"phase\", \"setup\");\r\n        reporter.publishEntry(\"phase\", \"execution\");\r\n        reporter.publishEntry(\"phase\", \"teardown\");\r\n    }\r\n}\n"
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

/***/ 8453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
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