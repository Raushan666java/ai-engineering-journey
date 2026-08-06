"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[67897],{

/***/ 26785
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_30_mockito_md_366_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-30-mockito-md-366.json
const site_docs_courses_java_30_mockito_md_366_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/30-mockito","title":"Mockito & Mocking Frameworks","description":"Previous Spring Boot Testing","source":"@site/docs/courses/java/30-mockito.md","sourceDirName":"courses/java","slug":"/java/30-mockito","permalink":"/ai-engineering-journey/java/30-mockito","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"id":"30-mockito","slug":"/java/30-mockito","title":"Mockito & Mocking Frameworks","sidebar_label":"Mockito & Mocking Frameworks","sidebar_position":30},"sidebar":"coursesSidebar","previous":{"title":"JUnit 5 Deep Dive","permalink":"/ai-engineering-journey/java/29-junit5"},"next":{"title":"Spring Boot Testing","permalink":"/ai-engineering-journey/java/31-spring-boot-test"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/30-mockito.md


const frontMatter = {
	id: '30-mockito',
	slug: '/java/30-mockito',
	title: 'Mockito & Mocking Frameworks',
	sidebar_label: 'Mockito & Mocking Frameworks',
	sidebar_position: 30
};
const contentTitle = 'Mockito & Mocking Frameworks';

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
  "value": "1. Mock Creation",
  "id": "1-mock-creation",
  "level": 2
}, {
  "value": "1.1 Static mock() Method",
  "id": "11-static-mock-method",
  "level": 3
}, {
  "value": "1.2 @Mock Annotation with MockitoExtension",
  "id": "12-mock-annotation-with-mockitoextension",
  "level": 3
}, {
  "value": "1.3 Manual Initialisation with MockitoAnnotations.openMocks",
  "id": "13-manual-initialisation-with-mockitoannotationsopenmocks",
  "level": 3
}, {
  "value": "2. InjectMocks — Wiring the System Under Test",
  "id": "2-injectmocks--wiring-the-system-under-test",
  "level": 2
}, {
  "value": "2.1 Injection Strategy Edge Cases",
  "id": "21-injection-strategy-edge-cases",
  "level": 3
}, {
  "value": "3. Stubbing",
  "id": "3-stubbing",
  "level": 2
}, {
  "value": "3.1 when().thenReturn / thenThrow / thenAnswer / thenCallRealMethod",
  "id": "31-whenthenreturn--thenthrow--thenanswer--thencallrealmethod",
  "level": 3
}, {
  "value": "3.2 doReturn/when, doThrow/when, doAnswer/when",
  "id": "32-doreturnwhen-dothrowwhen-doanswerwhen",
  "level": 3
}, {
  "value": "3.3 Stubbing with Custom Answer",
  "id": "33-stubbing-with-custom-answer",
  "level": 3
}, {
  "value": "4. Verification",
  "id": "4-verification",
  "level": 2
}, {
  "value": "4.1 verify with Times",
  "id": "41-verify-with-times",
  "level": 3
}, {
  "value": "4.2 InOrder Verification",
  "id": "42-inorder-verification",
  "level": 3
}, {
  "value": "4.3 Timeout Verification",
  "id": "43-timeout-verification",
  "level": 3
}, {
  "value": "5. Argument Matchers",
  "id": "5-argument-matchers",
  "level": 2
}, {
  "value": "5.1 Built-in Matchers",
  "id": "51-built-in-matchers",
  "level": 3
}, {
  "value": "5.2 Custom ArgumentMatcher (argThat)",
  "id": "52-custom-argumentmatcher-argthat",
  "level": 3
}, {
  "value": "6. ArgumentCaptor",
  "id": "6-argumentcaptor",
  "level": 2
}, {
  "value": "6.1 Basic Captor",
  "id": "61-basic-captor",
  "level": 3
}, {
  "value": "6.2 Captor with Complex Verification",
  "id": "62-captor-with-complex-verification",
  "level": 3
}, {
  "value": "7. BDD Style",
  "id": "7-bdd-style",
  "level": 2
}, {
  "value": "8. Spying",
  "id": "8-spying",
  "level": 2
}, {
  "value": "8.1 spy() and @Spy",
  "id": "81-spy-and-spy",
  "level": 3
}, {
  "value": "8.2 Spy vs Mock — When to Use What",
  "id": "82-spy-vs-mock--when-to-use-what",
  "level": 3
}, {
  "value": "8.3 Partial Mocking with Answer",
  "id": "83-partial-mocking-with-answer",
  "level": 3
}, {
  "value": "9. Advanced Features",
  "id": "9-advanced-features",
  "level": 2
}, {
  "value": "9.1 Lenient Stubbing",
  "id": "91-lenient-stubbing",
  "level": 3
}, {
  "value": "9.2 MockSettings",
  "id": "92-mocksettings",
  "level": 3
}, {
  "value": "9.3 Mocking Final Classes and Methods",
  "id": "93-mocking-final-classes-and-methods",
  "level": 3
}, {
  "value": "9.4 Mocking Static Methods",
  "id": "94-mocking-static-methods",
  "level": 3
}, {
  "value": "9.5 Mocking Constructors",
  "id": "95-mocking-constructors",
  "level": 3
}, {
  "value": "9.6 Mock Cleanup and Reset",
  "id": "96-mock-cleanup-and-reset",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: Mock Creation",
  "id": "exercise-1-mock-creation",
  "level": 3
}, {
  "value": "Exercise 2: InjectMocks",
  "id": "exercise-2-injectmocks",
  "level": 3
}, {
  "value": "Exercise 3: Stubbing",
  "id": "exercise-3-stubbing",
  "level": 3
}, {
  "value": "Exercise 4: Verification",
  "id": "exercise-4-verification",
  "level": 3
}, {
  "value": "Exercise 5: Argument Matchers and Captors",
  "id": "exercise-5-argument-matchers-and-captors",
  "level": 3
}, {
  "value": "Exercise 6: BDD Style",
  "id": "exercise-6-bdd-style",
  "level": 3
}, {
  "value": "Exercise 7: Spy",
  "id": "exercise-7-spy",
  "level": 3
}, {
  "value": "Exercise 8: Static Method Mocking",
  "id": "exercise-8-static-method-mocking",
  "level": 3
}, {
  "value": "Exercise 9: Constructor Mocking",
  "id": "exercise-9-constructor-mocking",
  "level": 3
}, {
  "value": "Exercise 10: Complete Mocking Suite",
  "id": "exercise-10-complete-mocking-suite",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
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
        id: "mockito--mocking-frameworks",
        children: "Mockito & Mocking Frameworks"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/29-junit5",
          children: "JUnit 5"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/31-spring-boot-test",
          children: "Spring Boot Testing"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mockito is the most widely used mocking framework in the Java ecosystem. It allows you to create test doubles (mocks, spies) that isolate the unit under test from its dependencies, control the behaviour of those dependencies through stubbing, and verify that specific interactions occurred. This chapter covers everything from basic mock creation through advanced features like mocking static methods and constructors introduced in Mockito 3.x/4.x/5.x."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add this dependency:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.mockito</groupId>\n    <artifactId>mockito-core</artifactId>\n    <version>5.12.0</version>\n    <scope>test</scope>\n</dependency>\n\n<!-- For mocking static methods and constructors -->\n<dependency>\n    <groupId>org.mockito</groupId>\n    <artifactId>mockito-inline</artifactId>\n    <version>5.2.0</version>\n    <scope>test</scope>\n</dependency>\n"
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
        href: "../../assets/images/lessons/java/30-mockito/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/30-mockito/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/30-mockito/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/30-mockito/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/30-mockito/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/30-mockito/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create mocks using both the static ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mock()"
        }), " method and the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Mock"
        }), " annotation with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MockitoExtension"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Inject mocks into the system under test using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@InjectMocks"
        }), " and understand the three injection strategies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write stub definitions using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "when().thenReturn"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "when().thenThrow"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "when().thenAnswer"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "when().thenCallRealMethod"
        }), ", and the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "doReturn/when"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "doThrow/when"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "doAnswer/when"
        }), " variants"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify interaction counts, order, and absence using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "verify"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "InOrder"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "verifyNoMoreInteractions"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "verifyNoInteractions"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use built-in argument matchers (", (0,jsx_runtime.jsx)(_components.code, {
          children: "any()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eq()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "anyString"
        }), ", etc.), custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "argThat"
        }), " matchers, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ArgumentCaptor"
        }), " for flexible verification"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply BDDMockito to write tests in the Given/When/Then style"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create spies and distinguish when to use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spy()"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mock()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure lenient stubbing to suppress unnecessary-stubbing warnings"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Answer"
        }), " implementations and configure mocks with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MockSettings"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mock final classes and methods, static methods, and constructors using mockito-inline"
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
            children: "Mockito → mocking framework for unit tests"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create mocks with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Mock"
            }), ", inject with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@InjectMocks"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Stubbing → define mock behavior with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "when().thenReturn()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Support for exceptions, answers, and callbacks"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Verification → assert interactions with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "verify()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check invocation count, order, timeout, and argument matching"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Mockito] --> B[Mock Creation]\n    A --> C[Stubbing]\n    A --> D[Verification]\n    A --> E[Argument Matchers]\n    B --> B1[@Mock / @Spy]\n    B --> B2[@InjectMocks]\n    C --> C1[when / thenReturn]\n    C --> C2[doThrow / doAnswer]\n    D --> D1[verify / verifyNoInteractions]\n    E --> E1[any / eq / argThat]\n"
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Mock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates a mock instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All methods return defaults unless stubbed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Spy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wraps a real object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real methods execute unless stubbed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@InjectMocks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Injects mocks into the object under test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor, setter, field injection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Mockito.when()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines stubbing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "when(foo.bar()).thenReturn(value)"
            })
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
              children: "when(mock.method()).thenReturn(x)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stubs return value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic stubbing pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "doThrow(e).when(mock).method()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stubs exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For void methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "verify(mock, times(n)).method()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verifies invocation count"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "atLeast(1)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "never()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ArgumentCaptor<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Captures method arguments"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "captor.getValue()"
            }), " for assertion"]
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
            children: "Service Layer Tests"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mock repositories with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Mock"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolate business logic from data access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controller Tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mock service layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test HTTP handling without full context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy Code"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@Spy"
            }), " on real objects"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial mocking for hard-to-test classes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What annotation creates a mock and automatically injects it into the test subject? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@InjectMocks"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How do you stub a void method to throw an exception? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "doThrow(new RuntimeException()).when(mock).voidMethod()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which Mockito method checks that no interactions occurred on a mock? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "verifyNoInteractions(mock)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "table-of-contents",
      children: "Table of Contents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1-mock-creation",
          children: "Mock Creation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#2-injectmocks--wiring-the-system-under-test",
          children: "InjectMocks — Wiring the System Under Test"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#3-stubbing",
          children: "Stubbing"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#4-verification",
          children: "Verification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#5-argument-matchers",
          children: "Argument Matchers"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#6-argumentcaptor",
          children: "ArgumentCaptor"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#7-bdd-style",
          children: "BDD Style"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#8-spying",
          children: "Spying"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#9-advanced-features",
          children: "Advanced Features"
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
      id: "1-mock-creation",
      children: "1. Mock Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/30-mockito.png",
        alt: "Mockito Mocking Framework Flow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-static-mock-method",
      children: "1.1 Static mock() Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.creation;\n\nimport org.junit.jupiter.api.Test;\n\nimport java.util.List;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.mockito.Mockito.*;\n\n/**\n * The simplest way to create a mock: call Mockito.mock().\n * The mock implements the same interface or extends the same class,\n * but all methods return default values (0, false, null, empty collections).\n */\nclass MockCreationTest {\n\n    @Test\n    void createMockWithStaticMethod() {\n        List<String> list = mock(List.class);\n        assertNotNull(list);\n\n        // Default behaviour: returns default values for unstubbed methods\n        assertNull(list.get(0));         // null for object return\n        assertEquals(0, list.size());    // 0 for primitive int\n        assertFalse(list.contains(\"x\")); // false for boolean\n\n        // The mock does NOT delegate to the real implementation\n        list.add(\"hello\");\n        verify(list).add(\"hello\");       // records the interaction\n    }\n\n    @Test\n    void createMockWithCustomSettings() {\n        List<String> list = mock(List.class, withSettings()\n            .name(\"customMock\")\n            .verboseLogging()\n            .defaultAnswer(CALLS_REAL_METHODS) // careful: only works with concrete classes\n        );\n        // withSettings() returns MockSettings for advanced configuration\n    }\n\n    @Test\n    void mockConcreteClass() {\n        ArrayList<String> arrayList = mock(ArrayList.class);\n        // ArrayList is a concrete class — Mockito can mock it\n        assertNull(arrayList.get(0)); // default behaviour, not the real ArrayList\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-mock-annotation-with-mockitoextension",
      children: "1.2 @Mock Annotation with MockitoExtension"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.creation;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\n\nimport java.util.Map;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.mockito.Mockito.*;\n\n/**\n * @ExtendWith(MockitoExtension.class) initialises all @Mock fields\n * before each test method. This is the preferred approach — it\n * reduces boilerplate, provides better error messages, and integrates\n * with JUnit 5's lifecycle.\n */\n@ExtendWith(MockitoExtension.class)\nclass MockAnnotationTest {\n\n    @Mock\n    private Map<String, String> cache;\n\n    @Mock(strict = true)\n    private PaymentGateway paymentGateway;\n\n    @Mock(lenient = true)\n    private Logger logger;   // lenient = skip unnecessary-stubbing checks\n\n    @Mock(answer = Answers.RETURNS_DEEP_STUBS)\n    private DeepService deepService;\n\n    @Test\n    void mockIsCreated() {\n        assertNotNull(cache);\n        assertNull(cache.get(\"any-key\"));\n    }\n\n    @Test\n    void deepStubs() {\n        // With RETURNS_DEEP_STUBS, chained calls return mocks automatically\n        // deepService.getConfig().getTimeout() — both getConfig() and getTimeout()\n        // return mocks without explicit stubbing\n        int timeout = deepService.getConfig().getTimeout();\n        assertEquals(0, timeout); // default int value\n    }\n}\n\ninterface PaymentGateway {\n    boolean charge(String cardNumber, double amount);\n    boolean refund(String transactionId);\n}\n\ninterface Logger {\n    void log(String message);\n    void error(String message);\n}\n\ninterface DeepService {\n    Config getConfig();\n}\n\ninterface Config {\n    int getTimeout();\n    String getUrl();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-manual-initialisation-with-mockitoannotationsopenmocks",
      children: "1.3 Manual Initialisation with MockitoAnnotations.openMocks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.creation;\n\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport org.mockito.ArgumentCaptor;\nimport org.mockito.Captor;\nimport org.mockito.Mock;\nimport org.mockito.MockitoAnnotations;\n\nimport java.util.List;\n\nimport static org.mockito.Mockito.*;\n\n/**\n * When you cannot use MockitoExtension (e.g., in a custom test base class,\n * Android, or a DI framework), you can initialise mocks manually.\n */\nclass ManualInitTest {\n\n    private AutoCloseable mocks;\n\n    @Mock\n    private List<String> list;\n\n    @Captor\n    private ArgumentCaptor<String> captor;\n\n    @BeforeEach\n    void setUp() {\n        // Opens all @Mock, @Spy, @Captor, @InjectMocks fields\n        mocks = MockitoAnnotations.openMocks(this);\n    }\n\n    @AfterEach\n    void tearDown() throws Exception {\n        // Clean up the mocks after each test\n        mocks.close();\n    }\n\n    @Test\n    void usesMock() {\n        list.add(\"hello\");\n        verify(list).add(\"hello\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ExtendWith(MockitoExtension.class)"
        }), " to enable Mockito annotations → this replaces the legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MockitoJUnitRunner"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-injectmocks--wiring-the-system-under-test",
      children: "2. InjectMocks — Wiring the System Under Test"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@InjectMocks"
      }), " attempts to inject mock dependencies into the object under test using three strategies, tried in order:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constructor injection"
        }), " (preferred)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Setter injection"
        }), " (if no constructor is found)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Field injection"
        }), " (direct field reflection)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.injection;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.InjectMocks;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.mockito.Mockito.*;\n\n/**\n * @InjectMocks creates the SUT (System Under Test) and injects\n * matching @Mock or @Spy beans into it.\n */\n@ExtendWith(MockitoExtension.class)\nclass InjectMocksTest {\n\n    @Mock\n    private UserRepository userRepository;\n\n    @Mock\n    private EmailService emailService;\n\n    @InjectMocks\n    private UserRegistrationService registrationService;\n\n    @Test\n    void registrationSuccess() {\n        User user = new User(\"alice@example.com\", \"Alice\");\n        when(userRepository.save(any(User.class))).thenReturn(user);\n\n        User result = registrationService.register(user);\n\n        assertNotNull(result);\n        verify(emailService).sendWelcomeEmail(user.getEmail(), user.getName());\n    }\n}\n\n// ---- Production Code ----\n\nclass UserRegistrationService {\n\n    private final UserRepository userRepository;\n    private final EmailService emailService;\n\n    // Constructor injection — Mockito uses this\n    public UserRegistrationService(UserRepository userRepository, EmailService emailService) {\n        this.userRepository = userRepository;\n        this.emailService = emailService;\n    }\n\n    public User register(User user) {\n        if (userRepository.findByEmail(user.getEmail()) != null) {\n            throw new DuplicateUserException(\"User already exists: \" + user.getEmail());\n        }\n        User saved = userRepository.save(user);\n        emailService.sendWelcomeEmail(user.getEmail(), user.getName());\n        return saved;\n    }\n}\n\ninterface UserRepository {\n    User findByEmail(String email);\n    User save(User user);\n}\n\ninterface EmailService {\n    void sendWelcomeEmail(String email, String name);\n}\n\nclass User {\n    private final String email;\n    private final String name;\n\n    public User(String email, String name) {\n        this.email = email;\n        this.name = name;\n    }\n\n    public String getEmail() { return email; }\n    public String getName() { return name; }\n}\n\nclass DuplicateUserException extends RuntimeException {\n    public DuplicateUserException(String message) {\n        super(message);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-injection-strategy-edge-cases",
      children: "2.1 Injection Strategy Edge Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.injection;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.InjectMocks;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\n/**\n * Demonstrates the three injection strategies Mockito tries\n * and how to handle ambiguous injections.\n */\n@ExtendWith(MockitoExtension.class)\nclass InjectionStrategyTest {\n\n    // Constructor injection (tried first)\n    // Mockito takes the constructor with the most parameters\n    // and tries to match mocks by type. If multiple mocks have\n    // the same type, use @Mock(name = \"...\") to differentiate.\n\n    @Mock(name = \"primaryDataSource\")\n    private DataSource dataSource1;\n\n    @Mock(name = \"secondaryDataSource\")\n    private DataSource dataSource2;\n\n    @InjectMocks\n    private MultiDataSourceService multiService;\n\n    @Test\n    void constructorInjection() {\n        assertNotNull(multiService);\n    }\n\n    // Setter injection (tried second, if no constructor)\n    // Setter-based: injectMocks\n    //\n    // public class SetterService {\n    //     private DataSource ds;\n    //\n    //     @Autowired\n    //     public void setDataSource(DataSource ds) { this.ds = ds; }\n    // }\n}\n\nclass MultiDataSourceService {\n\n    private final DataSource primary;\n    private final DataSource secondary;\n\n    public MultiDataSourceService(DataSource primary, DataSource secondary) {\n        this.primary = primary;\n        this.secondary = secondary;\n    }\n\n    public DataSource getPrimary() { return primary; }\n    public DataSource getSecondary() { return secondary; }\n}\n\ninterface DataSource {\n    String getConnection();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-stubbing",
      children: "3. Stubbing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stubbing defines what a mock returns (or does) when a specific method is called."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-whenthenreturn--thenthrow--thenanswer--thencallrealmethod",
      children: "3.1 when().thenReturn / thenThrow / thenAnswer / thenCallRealMethod"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.stubbing;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.Mock;\nimport org.mockito.invocation.InvocationOnMock;\nimport org.mockito.junit.jupiter.MockitoExtension;\nimport org.mockito.stubbing.Answer;\n\nimport java.util.List;\nimport java.util.Map;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.mockito.Mockito.*;\nimport static org.mockito.ArgumentMatchers.*;\n\n@ExtendWith(MockitoExtension.class)\nclass WhenThenStubbingTest {\n\n    @Mock\n    private List<String> list;\n\n    @Mock\n    private InventoryService inventory;\n\n    @Test\n    void thenReturn() {\n        when(list.get(0)).thenReturn(\"first\");\n        when(list.get(1)).thenReturn(\"second\");\n        // Stub void methods differently (see doReturn section below)\n\n        assertEquals(\"first\", list.get(0));\n        assertEquals(\"second\", list.get(1));\n        assertNull(list.get(2)); // unstubbed — returns default\n    }\n\n    @Test\n    void thenReturnMultipleTimes() {\n        when(list.get(0))\n            .thenReturn(\"first\")\n            .thenReturn(\"second\")\n            .thenReturn(\"third\");\n\n        assertEquals(\"first\", list.get(0));\n        assertEquals(\"second\", list.get(0));\n        assertEquals(\"third\", list.get(0));\n        assertEquals(\"third\", list.get(0)); // subsequent calls keep the last value\n    }\n\n    @Test\n    void thenReturnWithThenThrow() {\n        when(list.get(0))\n            .thenReturn(\"ok\")\n            .thenThrow(new RuntimeException(\"fail\"));\n\n        assertEquals(\"ok\", list.get(0));\n        assertThrows(RuntimeException.class, () -> list.get(0));\n    }\n\n    @Test\n    void thenThrow() {\n        when(list.get(anyInt())).thenThrow(IndexOutOfBoundsException.class);\n\n        assertThrows(IndexOutOfBoundsException.class, () -> list.get(0));\n        assertThrows(IndexOutOfBoundsException.class, () -> list.get(99));\n    }\n\n    @Test\n    void thenThrowWithInstance() {\n        when(list.size()).thenThrow(new IllegalStateException(\"corrupted list\"));\n\n        assertThrows(IllegalStateException.class, () -> list.size());\n    }\n\n    @Test\n    void thenAnswer() {\n        when(list.get(anyInt())).thenAnswer(invocation -> {\n            int index = invocation.getArgument(0);\n            return \"element-\" + index;\n        });\n\n        assertEquals(\"element-0\", list.get(0));\n        assertEquals(\"element-5\", list.get(5));\n        assertEquals(\"element-99\", list.get(99));\n    }\n\n    @Test\n    void thenAnswerWithLambda() {\n        when(list.get(anyInt())).thenAnswer(i -> \"value-\" + i.getArgument(0));\n\n        assertEquals(\"value-42\", list.get(42));\n    }\n\n    @Test\n    void thenCallRealMethod() {\n        // Only works if the mocked type is a concrete class\n        ArrayList<String> realList = mock(ArrayList.class, CALLS_REAL_METHODS);\n        // OR use thenCallRealMethod for specific methods:\n        ArrayList<String> partialMock = mock(ArrayList.class);\n        when(partialMock.size()).thenCallRealMethod();\n\n        // size() is delegated to the real ArrayList\n        // All other methods return defaults\n    }\n\n    @Test\n    void inventoryStubbing() {\n        when(inventory.getStock(\"LAPTOP\")).thenReturn(10);\n        when(inventory.getStock(\"PHONE\")).thenReturn(50);\n        when(inventory.getStock(\"TABLET\")).thenReturn(0);\n\n        assertEquals(10, inventory.getStock(\"LAPTOP\"));\n        assertEquals(50, inventory.getStock(\"PHONE\"));\n        assertEquals(0, inventory.getStock(\"TABLET\"));\n\n        // Unstubbed product\n        assertEquals(0, inventory.getStock(\"MONITOR\"));\n    }\n\n    @Test\n    void thenReturnWithNull() {\n        // Returning null for non-primitive returns\n        when(list.get(0)).thenReturn(null);\n        assertNull(list.get(0));\n\n        // For primitive wrappers, autoboxing handles null\n        when(list.size()).thenReturn(null);\n        // This works but is unusual — prefer returning explicit values\n    }\n}\n\ninterface InventoryService {\n    int getStock(String productCode);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-doreturnwhen-dothrowwhen-doanswerwhen",
      children: "3.2 doReturn/when, doThrow/when, doAnswer/when"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "do*"
      }), " family is used when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "when()"
      }), " cannot be used — primarily for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "void methods"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "spies"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.stubbing;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.mockito.Mockito.*;\n\n@ExtendWith(MockitoExtension.class)\nclass DoWhenStubbingTest {\n\n    @Mock\n    private EventBus eventBus;\n\n    @Mock\n    private List<String> list;\n\n    @Test\n    void doThrowOnVoidMethod() {\n        doThrow(new RuntimeException(\"bus error\")).when(eventBus).publish(any());\n\n        assertThrows(RuntimeException.class, () -> eventBus.publish(\"event1\"));\n    }\n\n    @Test\n    void doThrowOnVoidMethodWithClass() {\n        doThrow(RuntimeException.class).when(eventBus).publish(any());\n        assertThrows(RuntimeException.class, () -> eventBus.publish(\"x\"));\n    }\n\n    @Test\n    void doReturnOnSpy() {\n        // When spying, when().thenReturn() would CALL the real method first.\n        // doReturn avoids this:\n        List<String> spyList = spy(ArrayList.class);\n        doReturn(100).when(spyList).size();\n\n        assertEquals(100, spyList.size());\n\n        // If we used when(spyList.size()).thenReturn(100),\n        // the real size() method would be called first.\n    }\n\n    @Test\n    void doAnswer() {\n        doAnswer(invocation -> {\n            String arg = invocation.getArgument(0);\n            System.out.println(\"Published: \" + arg);\n            return null; // void\n        }).when(eventBus).publish(anyString());\n\n        assertDoesNotThrow(() -> eventBus.publish(\"hello\"));\n    }\n\n    @Test\n    void doNothing() {\n        doNothing().when(eventBus).publish(anyString());\n        assertDoesNotThrow(() -> eventBus.publish(\"anything\"));\n    }\n\n    @Test\n    void doCallRealMethod() {\n        // For a mock, call the real implementation of a specific method\n        ArrayList<String> mockList = mock(ArrayList.class);\n        doCallRealMethod().when(mockList).clear();\n        // When clear() is called, the real ArrayList.clear() runs\n\n        doCallRealMethod().when(mockList).size();\n        // When size() is called, the real ArrayList.size() runs\n    }\n\n    @Test\n    void multipleDoCalls() {\n        doNothing()\n            .doThrow(new RuntimeException(\"second call fails\"))\n            .when(eventBus).publish(anyString());\n\n        eventBus.publish(\"first\"); // ok\n        assertThrows(RuntimeException.class, () -> eventBus.publish(\"second\"));\n        assertThrows(RuntimeException.class, () -> eventBus.publish(\"third\")); // last value repeats\n    }\n}\n\ninterface EventBus {\n    void publish(String event);\n    void publish(String event, Object payload);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-stubbing-with-custom-answer",
      children: "3.3 Stubbing with Custom Answer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.stubbing;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.Mock;\nimport org.mockito.invocation.InvocationOnMock;\nimport org.mockito.junit.jupiter.MockitoExtension;\nimport org.mockito.stubbing.Answer;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.mockito.Mockito.*;\n\n/**\n * The Answer interface gives full control over mock behaviour.\n * It receives the invocation and returns whatever you like.\n */\n@ExtendWith(MockitoExtension.class)\nclass CustomAnswerTest {\n\n    @Mock\n    private CalculatorService calculatorService;\n\n    @Test\n    void answerWithMultipleArgs() {\n        when(calculatorService.add(anyInt(), anyInt())).thenAnswer(\n            new Answer<Integer>() {\n                @Override\n                public Integer answer(InvocationOnMock invocation) {\n                    Object[] args = invocation.getArguments();\n                    int a = (int) args[0];\n                    int b = (int) args[1];\n                    System.out.println(\"Adding \" + a + \" + \" + b);\n                    return a + b;\n                }\n            }\n        );\n\n        assertEquals(5, calculatorService.add(2, 3));\n        assertEquals(100, calculatorService.add(40, 60));\n    }\n\n    @Test\n    void answerWithLambda() {\n        when(calculatorService.multiply(anyInt(), anyInt()))\n            .thenAnswer(inv -> inv.getArgument(0) * inv.getArgument(1));\n\n        assertEquals(6, calculatorService.multiply(2, 3));\n        assertEquals(0, calculatorService.multiply(5, 0));\n    }\n\n    @Test\n    void answerThatThrows() {\n        when(calculatorService.divide(anyInt(), eq(0)))\n            .thenAnswer(inv -> { throw new ArithmeticException(\"Division by zero\"); });\n\n        when(calculatorService.divide(anyInt(), intThat(n -> n != 0)))\n            .thenAnswer(inv -> inv.getArgument(0) / inv.getArgument(1));\n\n        assertThrows(ArithmeticException.class, () -> calculatorService.divide(10, 0));\n        assertEquals(5, calculatorService.divide(10, 2));\n    }\n\n    @Test\n    void answerWithSideEffects() {\n        when(calculatorService.add(anyInt(), anyInt())).thenAnswer(invocation -> {\n            int a = invocation.getArgument(0);\n            int b = invocation.getArgument(1);\n            // Side effect: modify a captured data structure\n            return a + b;\n        });\n    }\n}\n\ninterface CalculatorService {\n    int add(int a, int b);\n    int subtract(int a, int b);\n    int multiply(int a, int b);\n    int divide(int a, int b);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\nDo not over-stub. Only stub methods that will actually be called by the code under test → unnecessary stubbing makes tests brittle."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-verification",
      children: "4. Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verification checks that specific interactions happened on the mock."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-verify-with-times",
      children: "4.1 verify with Times"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.verification;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\n\nimport java.util.List;\n\nimport static org.mockito.Mockito.*;\nimport static org.mockito.ArgumentMatchers.*;\n\n@ExtendWith(MockitoExtension.class)\nclass VerificationTest {\n\n    @Mock\n    private List<String> list;\n\n    @Mock\n    private EmailService emailService;\n\n    @Test\n    void verifyTimes() {\n        list.add(\"one\");\n        list.add(\"one\");\n        list.add(\"two\");\n\n        verify(list, times(2)).add(\"one\");\n        verify(list, times(1)).add(\"two\");\n        verify(list, atLeastOnce()).add(\"one\");\n        verify(list, atLeast(1)).add(\"two\");\n        verify(list, atMost(2)).add(\"one\");\n        verify(list, never()).clear();\n    }\n\n    @Test\n    void verifyOnly() {\n        // verifyNoOtherInteractions: checks that ONLY the verified\n        // interaction happened — no other calls on this mock.\n        list.add(\"hello\");\n        verify(list).add(\"hello\");\n        verifyNoMoreInteractions(list); // passes\n\n        // If we add another call:\n        // list.size();\n        // verify(list).add(\"hello\");\n        // verifyNoMoreInteractions(list); // FAILS: size() was not verified\n    }\n\n    @Test\n    void verifyNoInteractions() {\n        // verifyNoInteractions: checks that NO calls happened at all\n        verifyNoInteractions(list); // list has no interactions — passes\n        verifyNoInteractions(emailService);\n    }\n\n    @Test\n    void verifyWithDescription() {\n        list.add(\"hello\");\n        verify(list, description(\"add should have been called with 'hello'\"))\n            .add(\"hello\");\n    }\n\n    @Test\n    void verifyCallRealMethod() {\n        // When a mock is set to CALLS_REAL_METHODS, verify still tracks calls\n        ArrayList<String> realMock = mock(ArrayList.class, CALLS_REAL_METHODS);\n        realMock.add(\"test\");\n        verify(realMock).add(\"test\");\n    }\n}\n\ninterface EmailService {\n    void send(String to, String subject);\n    void sendBulk(List<String> recipients, String subject);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-inorder-verification",
      children: "4.2 InOrder Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.verification;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.InOrder;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\n\nimport java.util.List;\n\nimport static org.mockito.Mockito.*;\n\n/**\n * InOrder verifies that interactions happened in a specific sequence.\n */\n@ExtendWith(MockitoExtension.class)\nclass InOrderTest {\n\n    @Mock\n    private List<String> first;\n\n    @Mock\n    private List<String> second;\n\n    @Test\n    void verifyOrderOnSingleMock() {\n        first.add(\"a\");\n        first.add(\"b\");\n        first.add(\"c\");\n\n        InOrder inOrder = inOrder(first);\n        inOrder.verify(first).add(\"a\");\n        inOrder.verify(first).add(\"b\");\n        inOrder.verify(first).add(\"c\");\n    }\n\n    @Test\n    void verifyOrderAcrossMultipleMocks() {\n        first.add(\"a\");\n        second.add(\"b\");\n        first.add(\"c\");\n\n        InOrder inOrder = inOrder(first, second);\n        inOrder.verify(first).add(\"a\");\n        inOrder.verify(second).add(\"b\");\n        inOrder.verify(first).add(\"c\");\n\n        // The order of verify calls must match the actual interaction order\n    }\n\n    @Test\n    void verifyOrderFailsWhenWrong() {\n        first.add(\"a\");\n\n        InOrder inOrder = inOrder(first);\n        // If we verify a call that hasn't happened yet:\n        // inOrder.verify(first).add(\"b\"); // this would make the next line fail\n        inOrder.verify(first).add(\"a\");\n\n        // Uncommenting the following would fail because add(\"a\") already consumed:\n        // inOrder.verify(first).add(\"a\"); // WRONG ORDER\n    }\n\n    @Test\n    void verifyOrderWithTimes() {\n        first.add(\"a\");\n        first.add(\"a\");\n        second.add(\"b\");\n\n        InOrder inOrder = inOrder(first, second);\n        inOrder.verify(first, times(2)).add(\"a\");\n        inOrder.verify(second).add(\"b\");\n    }\n\n    @Test\n    void verifyNoMoreInteractionsAfterOrder() {\n        first.add(\"a\");\n        second.add(\"b\");\n\n        InOrder inOrder = inOrder(first, second);\n        inOrder.verify(first).add(\"a\");\n        inOrder.verify(second).add(\"b\");\n\n        // After InOrder verification, check no extra interactions\n        // Note: verifyNoMoreInteractions must be called on mocks directly,\n        // not through InOrder\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-timeout-verification",
      children: "4.3 Timeout Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.verification;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\n\nimport java.util.concurrent.Callable;\nimport java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\nimport java.util.concurrent.TimeUnit;\n\nimport static org.mockito.Mockito.*;\n\n/**\n * verify with timeout: waits up to the specified duration for the\n * interaction to happen. Useful for asynchronous code.\n *\n * after(): waits the full duration, then checks.\n * timeout(): checks periodically and returns as soon as satisfied.\n */\n@ExtendWith(MockitoExtension.class)\nclass TimeoutVerificationTest {\n\n    @Mock\n    private AsyncCallback callback;\n\n    @Test\n    void verifyTimeout() throws Exception {\n        ExecutorService executor = Executors.newSingleThreadExecutor();\n        executor.submit(() -> {\n            Thread.sleep(200);\n            callback.onComplete(\"success\");\n            return null;\n        });\n\n        // timeout: polls every 10ms — returns as soon as the interaction happens\n        verify(callback, timeout(1000)).onComplete(\"success\");\n        executor.shutdown();\n    }\n\n    @Test\n    void verifyAfter() {\n        ExecutorService executor = Executors.newSingleThreadExecutor();\n        executor.submit(() -> {\n            Thread.sleep(50);\n            callback.onComplete(\"done\");\n            return null;\n        });\n\n        // after: waits the full 300ms regardless\n        verify(callback, after(300)).onComplete(\"done\");\n        executor.shutdown();\n    }\n\n    @Test\n    void verifyTimeoutWithTimes() {\n        ExecutorService executor = Executors.newSingleThreadExecutor();\n        executor.submit(() -> {\n            Thread.sleep(100);\n            callback.onComplete(\"first\");\n            Thread.sleep(100);\n            callback.onComplete(\"second\");\n            return null;\n        });\n\n        verify(callback, timeout(2000).times(2)).onComplete(anyString());\n        executor.shutdown();\n    }\n}\n\ninterface AsyncCallback {\n    void onComplete(String result);\n    void onError(Throwable t);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!NOTE]\nVerification is optional → only verify interactions when proving a side effect occurred. Testing return values is usually sufficient."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-argument-matchers",
      children: "5. Argument Matchers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Matchers allow flexible stubbing and verification when you don't know the exact argument values at test-writing time."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-built-in-matchers",
      children: "5.1 Built-in Matchers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.matchers;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.ArgumentMatcher;\nimport org.mockito.ArgumentMatchers;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\n\nimport java.util.List;\nimport java.util.Set;\n\nimport static org.mockito.Mockito.*;\nimport static org.mockito.ArgumentMatchers.*;\n\n@ExtendWith(MockitoExtension.class)\nclass BuiltInMatchersTest {\n\n    @Mock\n    private List<String> list;\n\n    @Mock\n    private Set<Integer> set;\n\n    @Test\n    void anyAndEq() {\n        when(list.get(anyInt())).thenReturn(\"found\");\n\n        assertEquals(\"found\", list.get(0));\n        assertEquals(\"found\", list.get(42));\n\n        when(list.contains(eq(\"specific\"))).thenReturn(true);\n        assertTrue(list.contains(\"specific\"));\n        assertFalse(list.contains(\"other\")); // unstubbed\n    }\n\n    @Test\n    void typedMatchers() {\n        when(list.get(anyInt())).thenReturn(\"x\");\n        when(list.indexOf(anyString())).thenReturn(42);\n        when(list.contains(anyString())).thenReturn(true);\n\n        // Type-specific matchers:\n        // anyInt(), anyLong(), anyDouble(), anyFloat(),\n        // anyBoolean(), anyByte(), anyShort(), anyChar()\n        // anyString(), anyList(), anySet(), anyMap(),\n        // anyCollection(), anyIterable()\n    }\n\n    @Test\n    void nullableAndNotNull() {\n        when(list.contains(nullable(String.class))).thenReturn(true);\n        assertTrue(list.contains(\"hello\"));\n        assertTrue(list.contains(null));\n\n        when(list.contains(notNull())).thenReturn(true);\n    }\n\n    @Test\n    void stringMatchers() {\n        when(list.contains(startsWith(\"prefix_\"))).thenReturn(true);\n        when(list.contains(endsWith(\"_suffix\"))).thenReturn(true);\n        when(list.contains(contains(\"substring\"))).thenReturn(true);\n\n        assertTrue(list.contains(\"prefix_value\"));\n        assertTrue(list.contains(\"value_suffix\"));\n        assertTrue(list.contains(\"has_substring_here\"));\n\n        // also: matches(String regex)\n    }\n\n    @Test\n    void intMatchers() {\n        when(list.get(intThat(n -> n >= 0 && n < 10))).thenReturn(\"small\");\n        when(list.get(intThat(n -> n >= 10))).thenReturn(\"large\");\n\n        assertEquals(\"small\", list.get(5));\n        assertEquals(\"large\", list.get(42));\n    }\n\n    @Test\n    void combinableMatchers() {\n        // Matchers can be combined in a stub\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-custom-argumentmatcher-argthat",
      children: "5.2 Custom ArgumentMatcher (argThat)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.matchers;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.ArgumentMatcher;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\n\nimport static org.mockito.Mockito.*;\nimport static org.mockito.ArgumentMatchers.*;\nimport static org.junit.jupiter.api.Assertions.*;\n\n@ExtendWith(MockitoExtension.class)\nclass CustomMatcherTest {\n\n    @Mock\n    private InventoryService inventory;\n\n    private record Product(String id, String category, double price) {}\n\n    @Test\n    void argThatWithLambda() {\n        when(inventory.getStock(argThat(code -> code.startsWith(\"ELEC-\"))))\n            .thenReturn(50);\n        when(inventory.getStock(argThat(code -> code.startsWith(\"FOOD-\"))))\n            .thenReturn(200);\n\n        assertEquals(50, inventory.getStock(\"ELEC-001\"));\n        assertEquals(200, inventory.getStock(\"FOOD-001\"));\n        assertEquals(0, inventory.getStock(\"OTHER-001\")); // unstubbed\n    }\n\n    @Test\n    void argThatWithCustomMatcherClass() {\n        when(inventory.getStock(argThat(new ProductCodeMatcher(\"ELEC\"))))\n            .thenReturn(100);\n\n        assertEquals(100, inventory.getStock(\"ELEC-XYZ\"));\n        assertEquals(0, inventory.getStock(\"BOOK-001\"));\n    }\n\n    @Test\n    void verifyWithCustomMatcher() {\n        inventory.updateStock(\"ELEC-001\", 10);\n\n        verify(inventory).updateStock(\n            argThat(code -> code.startsWith(\"ELEC\")),\n            anyInt()\n        );\n    }\n\n    @Test\n    void multipleCustomMatchers() {\n        when(inventory.updateStock(\n            argThat(c -> c.length() >= 5),\n            argThat(q -> q > 0)\n        )).thenReturn(true);\n\n        assertTrue(inventory.updateStock(\"CODE123\", 5));\n        assertFalse(inventory.updateStock(\"AB\", 0)); // both matchers fail\n    }\n}\n\nclass ProductCodeMatcher implements ArgumentMatcher<String> {\n\n    private final String prefix;\n\n    ProductCodeMatcher(String prefix) {\n        this.prefix = prefix;\n    }\n\n    @Override\n    public boolean matches(String code) {\n        return code != null && code.startsWith(prefix);\n    }\n\n    @Override\n    public String toString() {\n        return \"[code starting with \" + prefix + \"]\";\n    }\n}\n\ninterface InventoryService {\n    int getStock(String productCode);\n    boolean updateStock(String productCode, int quantity);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-argumentcaptor",
      children: "6. ArgumentCaptor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ArgumentCaptor"
      }), " captures arguments passed to mock methods for later inspection. Use it when you need to verify the exact structure, fields, or computed values of an argument."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-basic-captor",
      children: "6.1 Basic Captor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.captor;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.ArgumentCaptor;\nimport org.mockito.Captor;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.mockito.Mockito.*;\n\n@ExtendWith(MockitoExtension.class)\nclass ArgumentCaptorTest {\n\n    @Mock\n    private EmailService emailService;\n\n    @Captor\n    private ArgumentCaptor<Email> emailCaptor;\n\n    @Captor\n    private ArgumentCaptor<String> stringCaptor;\n\n    @Test\n    void captureEmailSent() {\n        Email expected = new Email(\"alice@example.com\", \"Welcome!\", \"<h1>Hi</h1>\");\n        emailService.send(expected);\n\n        verify(emailService).send(emailCaptor.capture());\n\n        Email captured = emailCaptor.getValue();\n        assertEquals(\"alice@example.com\", captured.to());\n        assertEquals(\"Welcome!\", captured.subject());\n        assertTrue(captured.body().contains(\"Hi\"));\n    }\n\n    @Test\n    void captureMultipleValues() {\n        emailService.send(new Email(\"a@x.com\", \"S1\", \"Body1\"));\n        emailService.send(new Email(\"b@x.com\", \"S2\", \"Body2\"));\n\n        verify(emailService, times(2)).send(emailCaptor.capture());\n\n        var allValues = emailCaptor.getAllValues();\n        assertEquals(2, allValues.size());\n        assertEquals(\"S1\", allValues.get(0).subject());\n        assertEquals(\"S2\", allValues.get(1).subject());\n    }\n\n    @Test\n    void captureStringArgument() {\n        emailService.sendWelcome(\"user@example.com\", \"Alice\");\n\n        verify(emailService).sendWelcome(\n            stringCaptor.capture(),\n            stringCaptor.capture()\n        );\n\n        var values = stringCaptor.getAllValues();\n        assertEquals(\"user@example.com\", values.get(0));\n        assertEquals(\"Alice\", values.get(1));\n    }\n}\n\nrecord Email(String to, String subject, String body) {}\n\ninterface EmailService {\n    void send(Email email);\n    void sendWelcome(String email, String name);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-captor-with-complex-verification",
      children: "6.2 Captor with Complex Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.captor;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.ArgumentCaptor;\nimport org.mockito.Captor;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\n\nimport java.time.LocalDate;\nimport java.util.List;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.mockito.Mockito.*;\n\n@ExtendWith(MockitoExtension.class)\nclass ComplexCaptorTest {\n\n    @Mock\n    private OrderRepository orderRepository;\n\n    @Captor\n    private ArgumentCaptor<List<OrderLine>> linesCaptor;\n\n    @Captor\n    private ArgumentCaptor<Order> orderCaptor;\n\n    @Test\n    void captureOrderWithLines() {\n        OrderService orderService = new OrderService(orderRepository);\n        List<OrderLine> lines = List.of(\n            new OrderLine(\"LAPTOP\", 1, 999.99),\n            new OrderLine(\"MOUSE\", 2, 49.99)\n        );\n\n        orderService.placeOrder(\"customer-1\", lines);\n\n        verify(orderRepository).save(orderCaptor.capture());\n        Order saved = orderCaptor.getValue();\n\n        assertNotNull(saved.id());\n        assertEquals(\"customer-1\", saved.customerId());\n        assertEquals(2, saved.lines().size());\n        assertEquals(1099.97, saved.total(), 0.01);\n    }\n\n    @Test\n    void captureWithCaptorCreatedManually() {\n        // Sometimes it's clearer to create the captor inline\n        ArgumentCaptor<String> manualCaptor = ArgumentCaptor.forClass(String.class);\n\n        orderRepository.log(\"order-created\", \"Order 123 created\");\n        verify(orderRepository).log(anyString(), manualCaptor.capture());\n\n        assertEquals(\"Order 123 created\", manualCaptor.getValue());\n    }\n\n    @Test\n    void verifyWithArgumentMatchersAndCaptor() {\n        Order order = new Order(\"id-1\", \"cust-1\", List.of(), 0.0);\n        orderRepository.save(order);\n\n        // Captor captures on a specific matcher\n        verify(orderRepository).save(argThat(o -> o.customerId().equals(\"cust-1\")));\n    }\n}\n\nrecord OrderLine(String productCode, int quantity, double unitPrice) {}\nrecord Order(String id, String customerId, List<OrderLine> lines, double total) {}\n\ninterface OrderRepository {\n    Order save(Order order);\n    Order findById(String id);\n    void log(String event, String message);\n}\n\nclass OrderService {\n\n    private final OrderRepository repository;\n\n    OrderService(OrderRepository repository) {\n        this.repository = repository;\n    }\n\n    Order placeOrder(String customerId, List<OrderLine> lines) {\n        double total = lines.stream()\n            .mapToDouble(l -> l.unitPrice() * l.quantity())\n            .sum();\n        Order order = new Order(\n            \"ord-\" + System.currentTimeMillis(),\n            customerId,\n            lines,\n            total\n        );\n        return repository.save(order);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-bdd-style",
      children: "7. BDD Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BDDMockito provides aliases that match BDD (Behaviour-Driven Development) language: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "given"
      }), " (instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "when"
      }), "), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "willReturn"
      }), " (instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "thenReturn"
      }), "), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "then"
      }), " (instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "verify"
      }), "), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "should"
      }), " (instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "verify"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.bdd;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.BDDMockito;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\n\nimport static org.mockito.BDDMockito.*;\nimport static org.junit.jupiter.api.Assertions.*;\n\n/**\n * BDDMockito uses BDD-style language that reads naturally:\n *\n * // Given — stub configuration\n * given(repository.findById(1L)).willReturn(Optional.of(user));\n *\n * // When — exercise the SUT\n * User result = service.getUser(1L);\n *\n * // Then — verify outcomes\n * then(repository).should(times(1)).findById(1L);\n */\n@ExtendWith(MockitoExtension.class)\nclass BddStyleTest {\n\n    @Mock\n    private UserRepository repository;\n\n    @Mock\n    private NotificationService notificationService;\n\n    @Test\n    void bddStyleStubbing() {\n        // Given\n        User user = new User(1L, \"Alice\", \"alice@example.com\");\n        given(repository.findById(1L)).willReturn(java.util.Optional.of(user));\n\n        // When\n        UserService service = new UserService(repository, notificationService);\n        User result = service.getUser(1L);\n\n        // Then\n        assertNotNull(result);\n        assertEquals(\"Alice\", result.name());\n\n        // Then — verify interactions\n        then(repository).should(times(1)).findById(1L);\n        then(notificationService).should(never()).notify(anyString());\n    }\n\n    @Test\n    void bddWillThrow() {\n        // Given\n        given(repository.findById(anyLong())).willThrow(\n            new RuntimeException(\"Database connection lost\"));\n\n        // When / Then\n        UserService service = new UserService(repository, notificationService);\n        assertThrows(RuntimeException.class, () -> service.getUser(1L));\n    }\n\n    @Test\n    void bddWillAnswer() {\n        // Given\n        given(repository.findById(anyLong())).willAnswer(invocation -> {\n            Long id = invocation.getArgument(0);\n            return java.util.Optional.of(new User(id, \"User-\" + id, \"user\" + id + \"@test.com\"));\n        });\n\n        // When\n        UserService service = new UserService(repository, notificationService);\n        User result = service.getUser(99L);\n\n        // Then\n        assertEquals(\"User-99\", result.name());\n    }\n\n    @Test\n    void bddWillCallRealMethod() {\n        // Use willCallRealMethod for spies in BDD style\n        // given(spy).someMethod().willCallRealMethod();\n    }\n\n    @Test\n    void bddShouldWithTimes() {\n        // Given\n        User user = new User(1L, \"Bob\", \"bob@example.com\");\n        given(repository.findById(1L)).willReturn(java.util.Optional.of(user));\n\n        // When\n        UserService service = new UserService(repository, notificationService);\n        User result1 = service.getUser(1L);\n        User result2 = service.getUser(1L);\n\n        // Then — should verify with exact times\n        then(repository).should(times(2)).findById(1L);\n    }\n\n    @Test\n    void bddShouldInOrder() {\n        // Given\n        User user = new User(1L, \"Carol\", \"carol@example.com\");\n        given(repository.save(any(User.class))).willReturn(user);\n\n        // When\n        UserService service = new UserService(repository, notificationService);\n        service.createUser(\"Carol\", \"carol@example.com\");\n\n        // Then — ordered verification\n        then(repository).should().findByEmail(\"carol@example.com\");\n        then(repository).should().save(any(User.class));\n        then(notificationService).should().notify(\"Welcome Carol!\");\n    }\n\n    // BDDMockito's then() returns BDDMockito.Then — not Mockito.verify directly\n    // but they behave equivalently\n}\n\nrecord User(Long id, String name, String email) {}\n\ninterface UserRepository {\n    java.util.Optional<User> findById(Long id);\n    User save(User user);\n    java.util.Optional<User> findByEmail(String email);\n}\n\ninterface NotificationService {\n    void notify(String message);\n}\n\nclass UserService {\n\n    private final UserRepository repository;\n    private final NotificationService notificationService;\n\n    UserService(UserRepository repository, NotificationService notificationService) {\n        this.repository = repository;\n        this.notificationService = notificationService;\n    }\n\n    User getUser(Long id) {\n        return repository.findById(id)\n            .orElseThrow(() -> new RuntimeException(\"User not found: \" + id));\n    }\n\n    User createUser(String name, String email) {\n        repository.findByEmail(email).ifPresent(u -> {\n            throw new RuntimeException(\"Email already exists\");\n        });\n        User user = new User(null, name, email);\n        User saved = repository.save(user);\n        notificationService.notify(\"Welcome \" + name + \"!\");\n        return saved;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-spying",
      children: "8. Spying"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A spy is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "partial mock"
      }), ": it wraps a real object and by default delegates to real methods, but can be selectively stubbed to override specific behaviour."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-spy-and-spy",
      children: "8.1 spy() and @Spy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.spy;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.Mockito;\nimport org.mockito.Spy;\nimport org.mockito.junit.jupiter.MockitoExtension;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.mockito.Mockito.*;\n\n/**\n * When to use spy vs mock:\n *\n * spy():  You want the real behaviour most of the time,\n *        but need to stub a few specific methods.\n * mock(): You want a completely controlled double — no real\n *        implementation runs unless explicitly stubbed.\n */\n@ExtendWith(MockitoExtension.class)\nclass SpyTest {\n\n    @Spy\n    private List<String> list = new ArrayList<>();\n\n    @Test\n    void spyDelegatesToRealMethods() {\n        list.add(\"hello\");\n        list.add(\"world\");\n\n        assertEquals(2, list.size()); // real size() is called\n        assertEquals(\"hello\", list.get(0)); // real get() is called\n    }\n\n    @Test\n    void spyWithStubbedMethod() {\n        // Stub a specific method — the rest remain real\n        doReturn(100).when(list).size();\n\n        list.add(\"hello\");\n\n        assertEquals(100, list.size()); // stubbed\n        assertEquals(\"hello\", list.get(0)); // real\n    }\n\n    @Test\n    void spyCreatedWithStaticMethod() {\n        List<String> spyList = spy(new ArrayList<>());\n        spyList.add(\"test\");\n\n        assertEquals(1, spyList.size());\n        doReturn(999).when(spyList).size();\n        assertEquals(999, spyList.size());\n    }\n\n    @Test\n    void spyThrowsException() {\n        List<String> spyList = spy(new ArrayList<>());\n        doThrow(new RuntimeException(\"spy exception\")).when(spyList).clear();\n\n        assertThrows(RuntimeException.class, () -> spyList.clear());\n    }\n\n    @Test\n    void spyVerifyInteractions() {\n        list.add(\"real add\");\n        list.size();\n\n        verify(list).add(\"real add\");\n        verify(list).size();\n        verify(list, never()).clear();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-spy-vs-mock--when-to-use-what",
      children: "8.2 Spy vs Mock — When to Use What"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.spy;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.Mock;\nimport org.mockito.Spy;\nimport org.mockito.junit.jupiter.MockitoExtension;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.mockito.Mockito.*;\n\n/**\n * Comparing spy and mock behaviour side by side.\n */\n@ExtendWith(MockitoExtension.class)\nclass SpyVsMockTest {\n\n    @Mock\n    private List<String> mockList;\n\n    @Spy\n    private List<String> spyList = new ArrayList<>();\n\n    @Test\n    void mockReturnsDefaults() {\n        assertNull(mockList.get(0));\n        assertEquals(0, mockList.size());\n        assertFalse(mockList.contains(\"x\"));\n\n        // Adding to a mock does nothing visible\n        mockList.add(\"hello\");\n        assertEquals(0, mockList.size()); // still 0 — mock ignores real behaviour\n    }\n\n    @Test\n    void spyCallsRealMethods() {\n        assertThrows(IndexOutOfBoundsException.class, () -> spyList.get(0));\n\n        spyList.add(\"hello\");\n        assertEquals(1, spyList.size());\n        assertTrue(spyList.contains(\"hello\"));\n    }\n\n    @Test\n    void importantGotchaWithSpy() {\n        // IMPORTANT: When stubbing with when().thenReturn() on a spy,\n        // the real method is still called first!\n        List<String> spy = spy(new ArrayList<>());\n\n        // This calls the real spy.get(0) which throws IndexOutOfBoundsException!\n        // Uncomment to see:\n        // when(spy.get(0)).thenReturn(\"boom\"); // throws!\n\n        // ALWAYS use doReturn for stubbing spies:\n        doReturn(\"safe\").when(spy).get(0);\n        assertEquals(\"safe\", spy.get(0));\n    }\n\n    @Test\n    void whenToUseSpy() {\n        // Use spy when:\n        // 1. Most methods should behave normally\n        // 2. You only need to override a few specific methods\n        // 3. The object has important internal state or side effects\n        // 4. You're testing legacy code that can't be easily refactored\n\n        // Use mock when:\n        // 1. You want complete control over all interactions\n        // 2. The dependency is expensive or has side effects\n        // 3. You're testing the SUT's interaction with the dependency\n        // 4. You need to verify behaviour (calls, arguments, order)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-partial-mocking-with-answer",
      children: "8.3 Partial Mocking with Answer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.spy;\n\nimport org.junit.jupiter.api.Test;\nimport org.mockito.Mockito;\n\nimport java.util.ArrayList;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.mockito.Mockito.*;\n\nclass PartialMockTest {\n\n    @Test\n    void partialMockWithAnswer() {\n        ArrayList<String> list = Mockito.mock(ArrayList.class, withSettings()\n            .useConstructor()\n            .defaultAnswer(CALLS_REAL_METHODS)\n        );\n\n        // Now we have a real ArrayList that delegates to its constructor\n        list.add(\"test\");\n\n        // Override size() to return a fixed value\n        doReturn(42).when(list).size();\n\n        assertEquals(42, list.size());\n\n        // But real behaviour for other methods\n        assertEquals(\"test\", list.get(0));\n    }\n\n    @Test\n    void partialMockWithSpy() {\n        // Alternative: use spy for partial mocking\n        ArrayList<String> list = spy(new ArrayList<>());\n        list.add(\"a\");\n\n        doReturn(100).when(list).size();\n        assertEquals(100, list.size());\n        assertEquals(\"a\", list.get(0));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-advanced-features",
      children: "9. Advanced Features"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-lenient-stubbing",
      children: "9.1 Lenient Stubbing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mockito by default checks that all stubbed methods are actually used during the test. If a stub is never used, it throws ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UnnecessaryStubbingException"
      }), ". Enable lenient mode to suppress this:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.advanced;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.Mock;\nimport org.mockito.Mockito;\nimport org.mockito.junit.jupiter.MockitoExtension;\nimport org.mockito.quality.Strictness;\n\nimport java.util.List;\nimport java.util.Map;\n\nimport static org.mockito.Mockito.*;\nimport static org.junit.jupiter.api.Assertions.*;\n\n/**\n * Lenient stubbing suppresses the \"unnecessary stubbing\" exception\n * that Mockito throws when a stub is never used during a test.\n */\n@ExtendWith(MockitoExtension.class)\nclass LenientStubbingTest {\n\n    @Mock(lenient = true)\n    private List<String> lenientList;\n\n    @Mock\n    private List<String> strictList;\n\n    @Test\n    void lenientStubbingIsNotChecked() {\n        when(lenientList.get(0)).thenReturn(\"a\");\n        when(lenientList.get(1)).thenReturn(\"b\");\n\n        // Only get(0) is used — get(1) stub is unnecessary but\n        // does NOT cause a failure because the mock is lenient\n        lenientList.get(0);\n        verify(lenientList).get(0);\n    }\n\n    @Test\n    void strictStubbingCausesFailure() {\n        // If we add an unused stub, the test fails:\n        // when(strictList.get(0)).thenReturn(\"x\");\n        // The test above would fail because get(0) is never called\n    }\n}\n\n/**\n * Set strictness at the class level.\n */\n@MockitoSettings(strictness = Strictness.LENIENT)\nclass ClassLevelLenientTest {\n\n    @Mock\n    private Map<String, String> map;\n\n    @Test\n    void classLevelLenient() {\n        when(map.get(\"unused\")).thenReturn(\"value\");\n        // Even though map.get(\"unused\") is never called,\n        // no exception is thrown because the whole class is lenient\n        assertNull(map.get(\"other\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-mocksettings",
      children: "9.2 MockSettings"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.advanced;\n\nimport org.junit.jupiter.api.Test;\nimport org.mockito.MockSettings;\nimport org.mockito.Mockito;\n\nimport java.util.List;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.mockito.Mockito.*;\n\nclass MockSettingsTest {\n\n    @Test\n    void customMockSettings() {\n        MockSettings settings = withSettings()\n            .name(\"myCustomMock\")\n            .verboseLogging()             // logs all interactions\n            .defaultAnswer(RETURNS_SMART_NULLS) // more helpful NullPointerException\n            .withoutAnnotations();        // skip annotation processing\n\n        List<String> list = mock(List.class, settings);\n\n        assertNotNull(list);\n    }\n\n    @Test\n    void mockWithDefaultAnswer() {\n        // RETURNS_SMART_NULLS: returns smart objects instead of null\n        List<String> smartList = mock(List.class, RETURNS_SMART_NULLS);\n        // smartList.get(0) returns \"\" (empty string) instead of null\n        // This can make tests fail with clearer errors\n\n        // RETURNS_DEEP_STUBS: for chained calls\n        // RETURNS_MOCKS: returns mocks instead of nulls\n        // RETURNS_DEFAULTS: default behaviour (zeros, nulls, falses)\n    }\n\n    @Test\n    void mockWithSerializable() {\n        MockSettings settings = withSettings().serializable();\n        List<String> serializableList = mock(List.class, settings);\n        // The mock can now be serialized\n        assertNotNull(serializableList);\n    }\n\n    @Test\n    void mockWithConstructor() {\n        // Mock a concrete class through its constructor\n        // Requires mockito-inline\n        // ArrayList<String> list = mock(ArrayList.class, withSettings()\n        //     .useConstructor(\"initial\", \"args\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-mocking-final-classes-and-methods",
      children: "9.3 Mocking Final Classes and Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Since Mockito 2.x, final classes and methods can be mocked without any configuration. Mockito 5.x enables this by default via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mockito-inline"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.advanced;\n\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.mockito.Mockito.*;\n\n/**\n * Mockito 2.1+ can mock final classes and methods.\n * No config needed for Mockito 5.x with mockito-inline on the classpath.\n */\n@ExtendWith(MockitoExtension.class)\nclass FinalMockTest {\n\n    @Mock\n    private FinalClass finalClass;\n\n    @Test\n    void mockFinalClass() {\n        assertNotNull(finalClass);\n    }\n\n    @Test\n    void stubFinalMethod() {\n        FinalService service = mock(FinalService.class);\n        when(service.finalMethod()).thenReturn(\"mocked\");\n        assertEquals(\"mocked\", service.finalMethod());\n    }\n\n    @Test\n    void verifyFinalMethod() {\n        FinalService service = mock(FinalService.class);\n        service.finalMethod();\n\n        verify(service).finalMethod();\n    }\n}\n\nfinal class FinalClass {\n    final String greet() {\n        return \"hello\";\n    }\n}\n\nclass FinalService {\n    final String finalMethod() {\n        return \"original\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-mocking-static-methods",
      children: "9.4 Mocking Static Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Requires ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mockito-inline"
      }), " on the classpath. This feature enables mocking of static utility methods, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.lang.Math"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UUID.randomUUID()"
      }), ", etc."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.advanced;\n\nimport org.junit.jupiter.api.Test;\nimport org.mockito.MockedStatic;\nimport org.mockito.Mockito;\n\nimport java.util.UUID;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.mockito.Mockito.*;\n\n/**\n * Static mocking uses try-with-resources for scoped mocking.\n * The mock is only active within the try block.\n */\nclass StaticMockTest {\n\n    @Test\n    void mockUUID() {\n        UUID fixedUuid = UUID.fromString(\"00000000-0000-0000-0000-000000000001\");\n\n        try (MockedStatic<UUID> mockedUuid = mockStatic(UUID.class)) {\n            mockedUuid.when(UUID::randomUUID).thenReturn(fixedUuid);\n\n            UUID result = UUID.randomUUID();\n            assertEquals(fixedUuid, result);\n        }\n\n        // Outside the try block, UUID.randomUUID() returns real values\n    }\n\n    @Test\n    void mockMathRandom() {\n        try (MockedStatic<Math> mockedMath = mockStatic(Math.class)) {\n            mockedMath.when(() -> Math.random()).thenReturn(0.42);\n\n            assertEquals(0.42, Math.random(), 0.0001);\n        }\n    }\n\n    @Test\n    void mockStaticWithArguments() {\n        try (MockedStatic<String> mockedString = mockStatic(String.class)) {\n            mockedString.when(() -> String.valueOf(anyInt())).thenReturn(\"mocked\");\n\n            assertEquals(\"mocked\", String.valueOf(42));\n        }\n    }\n\n    @Test\n    void verifyStaticCall() {\n        try (MockedStatic<IdGenerator> mocked = mockStatic(IdGenerator.class)) {\n            mocked.when(IdGenerator::nextId).thenReturn(\"fixed-id\");\n\n            String id = IdGenerator.nextId();\n            assertEquals(\"fixed-id\", id);\n\n            mocked.verify(IdGenerator::nextId);\n        }\n    }\n}\n\nclass IdGenerator {\n    static String nextId() {\n        return UUID.randomUUID().toString();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-mocking-constructors",
      children: "9.5 Mocking Constructors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Requires ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mockito-inline"
      }), ". Allows you to control what ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new ClassName(...)"
      }), " returns within a specific scope."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.advanced;\n\nimport org.junit.jupiter.api.Test;\nimport org.mockito.MockedConstruction;\nimport org.mockito.Mockito;\n\nimport java.util.List;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.mockito.Mockito.*;\n\n/**\n * Constructor mocking: control what \"new SomeClass()\" returns.\n */\nclass ConstructorMockTest {\n\n    @Test\n    void mockConstructor() {\n        try (MockedConstruction<HeavyService> mocked = mockConstruction(HeavyService.class)) {\n            // Any call to new HeavyService() returns a mock\n\n            HeavyService service1 = new HeavyService(\"param\");\n            HeavyService service2 = new HeavyService(\"other\");\n\n            // Both service1 and service2 are mocks, not real objects\n            assertNotNull(service1);\n            assertNotNull(service2);\n        }\n    }\n\n    @Test\n    void mockConstructorWithAnswer() {\n        try (MockedConstruction<HeavyService> mocked = mockConstruction(\n                HeavyService.class,\n                (mock, context) -> {\n                    // Custom initialisation for each constructed mock\n                    when(mock.initialize()).thenReturn(true);\n                })) {\n\n            HeavyService service = new HeavyService(\"test\");\n            assertTrue(service.initialize());\n        }\n    }\n\n    @Test\n    void mockConstructorVerification() {\n        try (MockedConstruction<HeavyService> mocked = mockConstruction(HeavyService.class)) {\n            HeavyService s1 = new HeavyService(\"a\");\n            HeavyService s2 = new HeavyService(\"b\");\n\n            // Verify how many times the constructor was called\n            assertEquals(2, mocked.constructed().size());\n\n            List<HeavyService> allConstructed = mocked.constructed();\n            assertEquals(\"a\", allConstructed.get(0).getConfig());\n            assertEquals(\"b\", allConstructed.get(1).getConfig());\n        }\n    }\n}\n\nclass HeavyService {\n\n    private final String config;\n\n    public HeavyService(String config) {\n        this.config = config;\n        // Expensive initialisation — database connection, etc.\n    }\n\n    boolean initialize() {\n        // real implementation\n        return true;\n    }\n\n    String getConfig() {\n        return config;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "96-mock-cleanup-and-reset",
      children: "9.6 Mock Cleanup and Reset"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.advanced;\n\nimport org.junit.jupiter.api.AfterEach;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.Mock;\nimport org.mockito.Mockito;\nimport org.mockito.junit.jupiter.MockitoExtension;\n\nimport java.util.List;\n\nimport static org.mockito.Mockito.*;\n\n/**\n * Mockito automatically resets mocks between tests when using\n * MockitoExtension. In specific cases, you need manual control.\n */\n@ExtendWith(MockitoExtension.class)\nclass MockCleanupTest {\n\n    @Mock\n    private List<String> list;\n\n    @BeforeEach\n    void setUp() {\n        // Mocks are fresh at this point — no interaction history\n    }\n\n    @AfterEach\n    void tearDown() {\n        // Verify no leftover interactions\n        // verifyNoMoreInteractions(list);\n    }\n\n    @Test\n    void firstTest() {\n        when(list.get(0)).thenReturn(\"a\");\n        assertEquals(\"a\", list.get(0));\n    }\n\n    @Test\n    void secondTest() {\n        // Mock is clean — no leftover state from firstTest\n        when(list.size()).thenReturn(10);\n        assertEquals(10, list.size());\n    }\n\n    @Test\n    void clearInvocations() {\n        list.add(\"x\");\n        verify(list).add(\"x\");\n\n        // Clear the invocation data without resetting stubs\n        clearInvocations(list);\n\n        // Now verify fails because invocations were cleared\n        // verify(list).add(\"x\"); // FAILS\n\n        // But stubs still work:\n        when(list.size()).thenReturn(5);\n        assertEquals(5, list.size());\n    }\n\n    @Test\n    void resetMock() {\n        list.add(\"x\");\n        when(list.size()).thenReturn(5);\n\n        // reset clears BOTH invocations AND stubs\n        reset(list);\n\n        // All stubs are gone:\n        assertEquals(0, list.size()); // default\n\n        // All invocations are gone:\n        verifyNoInteractions(list);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This chapter covered the complete Mockito mocking framework, starting with mock creation using both the static ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mock()"
      }), " method and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Mock"
      }), " annotation with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ExtendWith(MockitoExtension.class)"
      }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@InjectMocks"
      }), " annotation was explained with its three injection strategies — constructor, setter, and field — and how mock naming resolves ambiguity when multiple mocks share a type."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stubbing was covered in full detail: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "when().thenReturn"
      }), " for simple return values, chained ", (0,jsx_runtime.jsx)(_components.code, {
        children: "thenReturn"
      }), " for multiple calls, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "thenThrow"
      }), " for exceptions, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "thenAnswer"
      }), " for computed return values, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "thenCallRealMethod"
      }), " for delegating to real implementations. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "doReturn/when"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "doThrow/when"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "doAnswer/when"
      }), " patterns were shown as alternatives necessary for void methods and spies."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Verification techniques included ", (0,jsx_runtime.jsx)(_components.code, {
        children: "verify"
      }), " with exact and flexible times (", (0,jsx_runtime.jsx)(_components.code, {
        children: "times"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "atLeast"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "atMost"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "never"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "only"
      }), "), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InOrder"
      }), " for ordered verification across single and multiple mocks, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "verifyNoMoreInteractions"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "verifyNoInteractions"
      }), " for ensuring no unexpected calls occurred, and timeout-based verification with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "timeout()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "after()"
      }), " for asynchronous code."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Argument matchers were explored from built-in matchers (", (0,jsx_runtime.jsx)(_components.code, {
        children: "any()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "eq()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "anyString"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "anyInt"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "anyList"
      }), ") through custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "argThat"
      }), " with both lambda and class-based ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ArgumentMatcher"
      }), " implementations. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ArgumentCaptor"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Captor"
      }), " provided type-safe capture and inspection of method arguments."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BDDMockito showed the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "given/willReturn/then/should"
      }), " pattern that makes tests read like BDD scenarios. Spies were covered with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spy()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Spy"
      }), ", including the critical ", (0,jsx_runtime.jsx)(_components.code, {
        children: "when().thenReturn"
      }), " gotcha on spies and when to prefer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "doReturn"
      }), ". The spy vs mock decision framework was explained."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Advanced features included lenient stubbing with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@MockitoSettings"
      }), ", the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Answer"
      }), " interface for custom mock behaviour, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MockSettings"
      }), " for configuring mock name, verbosity, default answer, and serializability. Mockito 5.x capabilities were demonstrated for mocking final classes and methods (enabled by default), static methods using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MockedStatic"
      }), " in try-with-resources blocks, and constructor mocking using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MockedConstruction"
      }), ". Finally, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clearInvocations"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "reset()"
      }), " were shown for manual mock lifecycle management."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-mock-creation",
      children: "Exercise 1: Mock Creation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a mock of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "javax.sql.DataSource"
      }), " using each of these methods:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "mock(DataSource.class)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Mock"
        }), " annotation with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MockitoExtension"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "MockitoAnnotations.openMocks(this)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Verify that each mock returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "null"
      }), " from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getConnection()"
      }), " and is not null."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-injectmocks",
      children: "Exercise 2: InjectMocks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ShoppingCartService"
      }), " class that depends on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProductRepository"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PricingService"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InventoryClient"
      }), ". Write a test using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@InjectMocks"
      }), " that verifies:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All three mocks are injected into the service"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "addProduct(productId, quantity)"
        }), " calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "productRepository.findById()"
        }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "inventoryClient.reserve()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the product is out of stock, the item is not added"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-stubbing",
      children: "Exercise 3: Stubbing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write stubs for the following scenarios:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "when().thenReturn()"
        }), " — return a user for a specific ID"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "when().thenThrow()"
        }), " — throw ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IllegalStateException"
        }), " when the database is closed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "when().thenAnswer()"
        }), " — map input IDs to generated usernames: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "findById(1) -> User(\"user-1\")"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "doThrow()"
        }), " — simulate a void method failure on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "auditLogger.log()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple calls: first call returns \"init\", second call throws, third call returns \"recovered\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-verification",
      children: "Exercise 4: Verification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentProcessor"
      }), " that calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fraudDetection.analyze()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bankGateway.charge()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "notificationService.send()"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify all three are called in order"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "charge()"
        }), " is called exactly once with the correct amount"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "send()"
        }), " is called either 0 or 1 times depending on success"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "verifyNoMoreInteractions"
        }), " to ensure no extra calls"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-argument-matchers-and-captors",
      children: "Exercise 5: Argument Matchers and Captors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a test for a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReportGenerator"
      }), " that receives a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReportRequest"
      }), " object and calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "database.query(request.getFilters(), request.getPage(), request.getPageSize())"
      }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ArgumentCaptor"
      }), " to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Capture the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReportRequest"
        }), " passed to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "generate()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assert that filters contain the expected keys"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assert that pagination values are within valid bounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify that the captured query parameters are correct"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6-bdd-style",
      children: "Exercise 6: BDD Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Convert the PaymentProcessor test from Exercise 4 to BDDMockito style with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "given/willReturn/then/should"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7-spy",
      children: "Exercise 7: Spy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a test for a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CacheManager"
      }), " that wraps a real ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HashMap"
      }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Spy"
      }), " to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Test that real ", (0,jsx_runtime.jsx)(_components.code, {
          children: "put()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "get()"
        }), " methods work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Stub ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size()"
        }), " to return a fixed value"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "put()"
        }), " was called for each cache entry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Demonstrate the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "when(spy).method()"
        }), " gotcha and fix it with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "doReturn"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8-static-method-mocking",
      children: "Exercise 8: Static Method Mocking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mock ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LocalDate.now()"
      }), " to return a fixed date. Write a test for a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PromotionService"
      }), " that determines if today is a holiday and should apply a discount. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MockedStatic<LocalDate>"
      }), " in a try-with-resources block."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9-constructor-mocking",
      children: "Exercise 9: Constructor Mocking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mock ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new FileReader(\"config.properties\")"
      }), " in a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConfigurationLoader"
      }), " class. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MockedConstruction<FileReader>"
      }), " to return a mock that reads predefined config values. Verify the constructor was called with the correct filename."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10-complete-mocking-suite",
      children: "Exercise 10: Complete Mocking Suite"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a full test suite for an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OrderProcessingService"
      }), " with these requirements:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mock ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PaymentGateway"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "InventoryService"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EmailService"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AuditLogger"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@InjectMocks"
        }), " for the service under test"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test successful order flow with BDD style"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Test payment failure with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "doThrow"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Test inventory shortage with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "thenAnswer"
        }), " that checks stock"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ArgumentCaptor"
        }), " to capture the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AuditEvent"
        }), " and verify its fields"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "InOrder"
        }), " to verify the complete execution sequence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lenient"
        }), " stubbing for a rarely-used logger method"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Include a test that resets a mock using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clearInvocations"
        }), " mid-test"]
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