"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7897],{

/***/ 6785
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
const site_docs_courses_java_30_mockito_md_366_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/30-mockito","title":"Mockito & Mocking Frameworks","description":"Previous Spring Boot Testing","source":"@site/docs/courses/java/30-mockito.md","sourceDirName":"courses/java","slug":"/java/30-mockito","permalink":"/ai-engineering-journey/java/30-mockito","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"id":"30-mockito","slug":"/java/30-mockito","title":"Mockito & Mocking Frameworks","sidebar_label":"Mockito & Mocking Frameworks","sidebar_position":30},"sidebar":"course-java","previous":{"title":"JUnit 5 Deep Dive","permalink":"/ai-engineering-journey/java/29-junit5"},"next":{"title":"Spring Boot Testing","permalink":"/ai-engineering-journey/java/31-spring-boot-test"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
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
        children: "<dependency>\r\n    <groupId>org.mockito</groupId>\r\n    <artifactId>mockito-core</artifactId>\r\n    <version>5.12.0</version>\r\n    <scope>test</scope>\r\n</dependency>\r\n\r\n<!-- For mocking static methods and constructors -->\r\n<dependency>\r\n    <groupId>org.mockito</groupId>\r\n    <artifactId>mockito-inline</artifactId>\r\n    <version>5.2.0</version>\r\n    <scope>test</scope>\r\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Mockito] --> B[Mock Creation]\r\n    A --> C[Stubbing]\r\n    A --> D[Verification]\r\n    A --> E[Argument Matchers]\r\n    B --> B1[\"@Mock / @Spy\"]\r\n    B --> B2[\"@InjectMocks\"]\r\n    C --> C1[when / thenReturn]\r\n    C --> C2[doThrow / doAnswer]\r\n    D --> D1[verify / verifyNoInteractions]\r\n    E --> E1[any / eq / argThat]"
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
        children: "package mockito.creation;\r\n\r\nimport org.junit.jupiter.api.Test;\r\n\r\nimport java.util.List;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.mockito.Mockito.*;\r\n\r\n/**\r\n * The simplest way to create a mock: call Mockito.mock().\r\n * The mock implements the same interface or extends the same class,\r\n * but all methods return default values (0, false, null, empty collections).\r\n */\r\nclass MockCreationTest {\r\n\r\n    @Test\r\n    void createMockWithStaticMethod() {\r\n        List<String> list = mock(List.class);\r\n        assertNotNull(list);\r\n\r\n        // Default behaviour: returns default values for unstubbed methods\r\n        assertNull(list.get(0));         // null for object return\r\n        assertEquals(0, list.size());    // 0 for primitive int\r\n        assertFalse(list.contains(\"x\")); // false for boolean\r\n\r\n        // The mock does NOT delegate to the real implementation\r\n        list.add(\"hello\");\r\n        verify(list).add(\"hello\");       // records the interaction\r\n    }\r\n\r\n    @Test\r\n    void createMockWithCustomSettings() {\r\n        List<String> list = mock(List.class, withSettings()\r\n            .name(\"customMock\")\r\n            .verboseLogging()\r\n            .defaultAnswer(CALLS_REAL_METHODS) // careful: only works with concrete classes\r\n        );\r\n        // withSettings() returns MockSettings for advanced configuration\r\n    }\r\n\r\n    @Test\r\n    void mockConcreteClass() {\r\n        ArrayList<String> arrayList = mock(ArrayList.class);\r\n        // ArrayList is a concrete class — Mockito can mock it\r\n        assertNull(arrayList.get(0)); // default behaviour, not the real ArrayList\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-mock-annotation-with-mockitoextension",
      children: "1.2 @Mock Annotation with MockitoExtension"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.creation;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.Mock;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\n\r\nimport java.util.Map;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.mockito.Mockito.*;\r\n\r\n/**\r\n * @ExtendWith(MockitoExtension.class) initialises all @Mock fields\r\n * before each test method. This is the preferred approach — it\r\n * reduces boilerplate, provides better error messages, and integrates\r\n * with JUnit 5's lifecycle.\r\n */\r\n@ExtendWith(MockitoExtension.class)\r\nclass MockAnnotationTest {\r\n\r\n    @Mock\r\n    private Map<String, String> cache;\r\n\r\n    @Mock(strict = true)\r\n    private PaymentGateway paymentGateway;\r\n\r\n    @Mock(lenient = true)\r\n    private Logger logger;   // lenient = skip unnecessary-stubbing checks\r\n\r\n    @Mock(answer = Answers.RETURNS_DEEP_STUBS)\r\n    private DeepService deepService;\r\n\r\n    @Test\r\n    void mockIsCreated() {\r\n        assertNotNull(cache);\r\n        assertNull(cache.get(\"any-key\"));\r\n    }\r\n\r\n    @Test\r\n    void deepStubs() {\r\n        // With RETURNS_DEEP_STUBS, chained calls return mocks automatically\r\n        // deepService.getConfig().getTimeout() — both getConfig() and getTimeout()\r\n        // return mocks without explicit stubbing\r\n        int timeout = deepService.getConfig().getTimeout();\r\n        assertEquals(0, timeout); // default int value\r\n    }\r\n}\r\n\r\ninterface PaymentGateway {\r\n    boolean charge(String cardNumber, double amount);\r\n    boolean refund(String transactionId);\r\n}\r\n\r\ninterface Logger {\r\n    void log(String message);\r\n    void error(String message);\r\n}\r\n\r\ninterface DeepService {\r\n    Config getConfig();\r\n}\r\n\r\ninterface Config {\r\n    int getTimeout();\r\n    String getUrl();\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-manual-initialisation-with-mockitoannotationsopenmocks",
      children: "1.3 Manual Initialisation with MockitoAnnotations.openMocks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.creation;\r\n\r\nimport org.junit.jupiter.api.BeforeEach;\r\nimport org.junit.jupiter.api.Test;\r\nimport org.mockito.ArgumentCaptor;\r\nimport org.mockito.Captor;\r\nimport org.mockito.Mock;\r\nimport org.mockito.MockitoAnnotations;\r\n\r\nimport java.util.List;\r\n\r\nimport static org.mockito.Mockito.*;\r\n\r\n/**\r\n * When you cannot use MockitoExtension (e.g., in a custom test base class,\r\n * Android, or a DI framework), you can initialise mocks manually.\r\n */\r\nclass ManualInitTest {\r\n\r\n    private AutoCloseable mocks;\r\n\r\n    @Mock\r\n    private List<String> list;\r\n\r\n    @Captor\r\n    private ArgumentCaptor<String> captor;\r\n\r\n    @BeforeEach\r\n    void setUp() {\r\n        // Opens all @Mock, @Spy, @Captor, @InjectMocks fields\r\n        mocks = MockitoAnnotations.openMocks(this);\r\n    }\r\n\r\n    @AfterEach\r\n    void tearDown() throws Exception {\r\n        // Clean up the mocks after each test\r\n        mocks.close();\r\n    }\r\n\r\n    @Test\r\n    void usesMock() {\r\n        list.add(\"hello\");\r\n        verify(list).add(\"hello\");\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\r\nUse ", (0,jsx_runtime.jsx)(_components.code, {
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
        children: "package mockito.injection;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.InjectMocks;\r\nimport org.mockito.Mock;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.mockito.Mockito.*;\r\n\r\n/**\r\n * @InjectMocks creates the SUT (System Under Test) and injects\r\n * matching @Mock or @Spy beans into it.\r\n */\r\n@ExtendWith(MockitoExtension.class)\r\nclass InjectMocksTest {\r\n\r\n    @Mock\r\n    private UserRepository userRepository;\r\n\r\n    @Mock\r\n    private EmailService emailService;\r\n\r\n    @InjectMocks\r\n    private UserRegistrationService registrationService;\r\n\r\n    @Test\r\n    void registrationSuccess() {\r\n        User user = new User(\"alice@example.com\", \"Alice\");\r\n        when(userRepository.save(any(User.class))).thenReturn(user);\r\n\r\n        User result = registrationService.register(user);\r\n\r\n        assertNotNull(result);\r\n        verify(emailService).sendWelcomeEmail(user.getEmail(), user.getName());\r\n    }\r\n}\r\n\r\n// ---- Production Code ----\r\n\r\nclass UserRegistrationService {\r\n\r\n    private final UserRepository userRepository;\r\n    private final EmailService emailService;\r\n\r\n    // Constructor injection — Mockito uses this\r\n    public UserRegistrationService(UserRepository userRepository, EmailService emailService) {\r\n        this.userRepository = userRepository;\r\n        this.emailService = emailService;\r\n    }\r\n\r\n    public User register(User user) {\r\n        if (userRepository.findByEmail(user.getEmail()) != null) {\r\n            throw new DuplicateUserException(\"User already exists: \" + user.getEmail());\r\n        }\r\n        User saved = userRepository.save(user);\r\n        emailService.sendWelcomeEmail(user.getEmail(), user.getName());\r\n        return saved;\r\n    }\r\n}\r\n\r\ninterface UserRepository {\r\n    User findByEmail(String email);\r\n    User save(User user);\r\n}\r\n\r\ninterface EmailService {\r\n    void sendWelcomeEmail(String email, String name);\r\n}\r\n\r\nclass User {\r\n    private final String email;\r\n    private final String name;\r\n\r\n    public User(String email, String name) {\r\n        this.email = email;\r\n        this.name = name;\r\n    }\r\n\r\n    public String getEmail() { return email; }\r\n    public String getName() { return name; }\r\n}\r\n\r\nclass DuplicateUserException extends RuntimeException {\r\n    public DuplicateUserException(String message) {\r\n        super(message);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-injection-strategy-edge-cases",
      children: "2.1 Injection Strategy Edge Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.injection;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.InjectMocks;\r\nimport org.mockito.Mock;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\n/**\r\n * Demonstrates the three injection strategies Mockito tries\r\n * and how to handle ambiguous injections.\r\n */\r\n@ExtendWith(MockitoExtension.class)\r\nclass InjectionStrategyTest {\r\n\r\n    // Constructor injection (tried first)\r\n    // Mockito takes the constructor with the most parameters\r\n    // and tries to match mocks by type. If multiple mocks have\r\n    // the same type, use @Mock(name = \"...\") to differentiate.\r\n\r\n    @Mock(name = \"primaryDataSource\")\r\n    private DataSource dataSource1;\r\n\r\n    @Mock(name = \"secondaryDataSource\")\r\n    private DataSource dataSource2;\r\n\r\n    @InjectMocks\r\n    private MultiDataSourceService multiService;\r\n\r\n    @Test\r\n    void constructorInjection() {\r\n        assertNotNull(multiService);\r\n    }\r\n\r\n    // Setter injection (tried second, if no constructor)\r\n    // Setter-based: injectMocks\r\n    //\r\n    // public class SetterService {\r\n    //     private DataSource ds;\r\n    //\r\n    //     @Autowired\r\n    //     public void setDataSource(DataSource ds) { this.ds = ds; }\r\n    // }\r\n}\r\n\r\nclass MultiDataSourceService {\r\n\r\n    private final DataSource primary;\r\n    private final DataSource secondary;\r\n\r\n    public MultiDataSourceService(DataSource primary, DataSource secondary) {\r\n        this.primary = primary;\r\n        this.secondary = secondary;\r\n    }\r\n\r\n    public DataSource getPrimary() { return primary; }\r\n    public DataSource getSecondary() { return secondary; }\r\n}\r\n\r\ninterface DataSource {\r\n    String getConnection();\r\n}\n"
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
        children: "package mockito.stubbing;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.Mock;\r\nimport org.mockito.invocation.InvocationOnMock;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\nimport org.mockito.stubbing.Answer;\r\n\r\nimport java.util.List;\r\nimport java.util.Map;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.mockito.Mockito.*;\r\nimport static org.mockito.ArgumentMatchers.*;\r\n\r\n@ExtendWith(MockitoExtension.class)\r\nclass WhenThenStubbingTest {\r\n\r\n    @Mock\r\n    private List<String> list;\r\n\r\n    @Mock\r\n    private InventoryService inventory;\r\n\r\n    @Test\r\n    void thenReturn() {\r\n        when(list.get(0)).thenReturn(\"first\");\r\n        when(list.get(1)).thenReturn(\"second\");\r\n        // Stub void methods differently (see doReturn section below)\r\n\r\n        assertEquals(\"first\", list.get(0));\r\n        assertEquals(\"second\", list.get(1));\r\n        assertNull(list.get(2)); // unstubbed — returns default\r\n    }\r\n\r\n    @Test\r\n    void thenReturnMultipleTimes() {\r\n        when(list.get(0))\r\n            .thenReturn(\"first\")\r\n            .thenReturn(\"second\")\r\n            .thenReturn(\"third\");\r\n\r\n        assertEquals(\"first\", list.get(0));\r\n        assertEquals(\"second\", list.get(0));\r\n        assertEquals(\"third\", list.get(0));\r\n        assertEquals(\"third\", list.get(0)); // subsequent calls keep the last value\r\n    }\r\n\r\n    @Test\r\n    void thenReturnWithThenThrow() {\r\n        when(list.get(0))\r\n            .thenReturn(\"ok\")\r\n            .thenThrow(new RuntimeException(\"fail\"));\r\n\r\n        assertEquals(\"ok\", list.get(0));\r\n        assertThrows(RuntimeException.class, () -> list.get(0));\r\n    }\r\n\r\n    @Test\r\n    void thenThrow() {\r\n        when(list.get(anyInt())).thenThrow(IndexOutOfBoundsException.class);\r\n\r\n        assertThrows(IndexOutOfBoundsException.class, () -> list.get(0));\r\n        assertThrows(IndexOutOfBoundsException.class, () -> list.get(99));\r\n    }\r\n\r\n    @Test\r\n    void thenThrowWithInstance() {\r\n        when(list.size()).thenThrow(new IllegalStateException(\"corrupted list\"));\r\n\r\n        assertThrows(IllegalStateException.class, () -> list.size());\r\n    }\r\n\r\n    @Test\r\n    void thenAnswer() {\r\n        when(list.get(anyInt())).thenAnswer(invocation -> {\r\n            int index = invocation.getArgument(0);\r\n            return \"element-\" + index;\r\n        });\r\n\r\n        assertEquals(\"element-0\", list.get(0));\r\n        assertEquals(\"element-5\", list.get(5));\r\n        assertEquals(\"element-99\", list.get(99));\r\n    }\r\n\r\n    @Test\r\n    void thenAnswerWithLambda() {\r\n        when(list.get(anyInt())).thenAnswer(i -> \"value-\" + i.getArgument(0));\r\n\r\n        assertEquals(\"value-42\", list.get(42));\r\n    }\r\n\r\n    @Test\r\n    void thenCallRealMethod() {\r\n        // Only works if the mocked type is a concrete class\r\n        ArrayList<String> realList = mock(ArrayList.class, CALLS_REAL_METHODS);\r\n        // OR use thenCallRealMethod for specific methods:\r\n        ArrayList<String> partialMock = mock(ArrayList.class);\r\n        when(partialMock.size()).thenCallRealMethod();\r\n\r\n        // size() is delegated to the real ArrayList\r\n        // All other methods return defaults\r\n    }\r\n\r\n    @Test\r\n    void inventoryStubbing() {\r\n        when(inventory.getStock(\"LAPTOP\")).thenReturn(10);\r\n        when(inventory.getStock(\"PHONE\")).thenReturn(50);\r\n        when(inventory.getStock(\"TABLET\")).thenReturn(0);\r\n\r\n        assertEquals(10, inventory.getStock(\"LAPTOP\"));\r\n        assertEquals(50, inventory.getStock(\"PHONE\"));\r\n        assertEquals(0, inventory.getStock(\"TABLET\"));\r\n\r\n        // Unstubbed product\r\n        assertEquals(0, inventory.getStock(\"MONITOR\"));\r\n    }\r\n\r\n    @Test\r\n    void thenReturnWithNull() {\r\n        // Returning null for non-primitive returns\r\n        when(list.get(0)).thenReturn(null);\r\n        assertNull(list.get(0));\r\n\r\n        // For primitive wrappers, autoboxing handles null\r\n        when(list.size()).thenReturn(null);\r\n        // This works but is unusual — prefer returning explicit values\r\n    }\r\n}\r\n\r\ninterface InventoryService {\r\n    int getStock(String productCode);\r\n}\n"
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
        children: "package mockito.stubbing;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.Mock;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.mockito.Mockito.*;\r\n\r\n@ExtendWith(MockitoExtension.class)\r\nclass DoWhenStubbingTest {\r\n\r\n    @Mock\r\n    private EventBus eventBus;\r\n\r\n    @Mock\r\n    private List<String> list;\r\n\r\n    @Test\r\n    void doThrowOnVoidMethod() {\r\n        doThrow(new RuntimeException(\"bus error\")).when(eventBus).publish(any());\r\n\r\n        assertThrows(RuntimeException.class, () -> eventBus.publish(\"event1\"));\r\n    }\r\n\r\n    @Test\r\n    void doThrowOnVoidMethodWithClass() {\r\n        doThrow(RuntimeException.class).when(eventBus).publish(any());\r\n        assertThrows(RuntimeException.class, () -> eventBus.publish(\"x\"));\r\n    }\r\n\r\n    @Test\r\n    void doReturnOnSpy() {\r\n        // When spying, when().thenReturn() would CALL the real method first.\r\n        // doReturn avoids this:\r\n        List<String> spyList = spy(ArrayList.class);\r\n        doReturn(100).when(spyList).size();\r\n\r\n        assertEquals(100, spyList.size());\r\n\r\n        // If we used when(spyList.size()).thenReturn(100),\r\n        // the real size() method would be called first.\r\n    }\r\n\r\n    @Test\r\n    void doAnswer() {\r\n        doAnswer(invocation -> {\r\n            String arg = invocation.getArgument(0);\r\n            System.out.println(\"Published: \" + arg);\r\n            return null; // void\r\n        }).when(eventBus).publish(anyString());\r\n\r\n        assertDoesNotThrow(() -> eventBus.publish(\"hello\"));\r\n    }\r\n\r\n    @Test\r\n    void doNothing() {\r\n        doNothing().when(eventBus).publish(anyString());\r\n        assertDoesNotThrow(() -> eventBus.publish(\"anything\"));\r\n    }\r\n\r\n    @Test\r\n    void doCallRealMethod() {\r\n        // For a mock, call the real implementation of a specific method\r\n        ArrayList<String> mockList = mock(ArrayList.class);\r\n        doCallRealMethod().when(mockList).clear();\r\n        // When clear() is called, the real ArrayList.clear() runs\r\n\r\n        doCallRealMethod().when(mockList).size();\r\n        // When size() is called, the real ArrayList.size() runs\r\n    }\r\n\r\n    @Test\r\n    void multipleDoCalls() {\r\n        doNothing()\r\n            .doThrow(new RuntimeException(\"second call fails\"))\r\n            .when(eventBus).publish(anyString());\r\n\r\n        eventBus.publish(\"first\"); // ok\r\n        assertThrows(RuntimeException.class, () -> eventBus.publish(\"second\"));\r\n        assertThrows(RuntimeException.class, () -> eventBus.publish(\"third\")); // last value repeats\r\n    }\r\n}\r\n\r\ninterface EventBus {\r\n    void publish(String event);\r\n    void publish(String event, Object payload);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-stubbing-with-custom-answer",
      children: "3.3 Stubbing with Custom Answer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.stubbing;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.Mock;\r\nimport org.mockito.invocation.InvocationOnMock;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\nimport org.mockito.stubbing.Answer;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.mockito.Mockito.*;\r\n\r\n/**\r\n * The Answer interface gives full control over mock behaviour.\r\n * It receives the invocation and returns whatever you like.\r\n */\r\n@ExtendWith(MockitoExtension.class)\r\nclass CustomAnswerTest {\r\n\r\n    @Mock\r\n    private CalculatorService calculatorService;\r\n\r\n    @Test\r\n    void answerWithMultipleArgs() {\r\n        when(calculatorService.add(anyInt(), anyInt())).thenAnswer(\r\n            new Answer<Integer>() {\r\n                @Override\r\n                public Integer answer(InvocationOnMock invocation) {\r\n                    Object[] args = invocation.getArguments();\r\n                    int a = (int) args[0];\r\n                    int b = (int) args[1];\r\n                    System.out.println(\"Adding \" + a + \" + \" + b);\r\n                    return a + b;\r\n                }\r\n            }\r\n        );\r\n\r\n        assertEquals(5, calculatorService.add(2, 3));\r\n        assertEquals(100, calculatorService.add(40, 60));\r\n    }\r\n\r\n    @Test\r\n    void answerWithLambda() {\r\n        when(calculatorService.multiply(anyInt(), anyInt()))\r\n            .thenAnswer(inv -> inv.getArgument(0) * inv.getArgument(1));\r\n\r\n        assertEquals(6, calculatorService.multiply(2, 3));\r\n        assertEquals(0, calculatorService.multiply(5, 0));\r\n    }\r\n\r\n    @Test\r\n    void answerThatThrows() {\r\n        when(calculatorService.divide(anyInt(), eq(0)))\r\n            .thenAnswer(inv -> { throw new ArithmeticException(\"Division by zero\"); });\r\n\r\n        when(calculatorService.divide(anyInt(), intThat(n -> n != 0)))\r\n            .thenAnswer(inv -> inv.getArgument(0) / inv.getArgument(1));\r\n\r\n        assertThrows(ArithmeticException.class, () -> calculatorService.divide(10, 0));\r\n        assertEquals(5, calculatorService.divide(10, 2));\r\n    }\r\n\r\n    @Test\r\n    void answerWithSideEffects() {\r\n        when(calculatorService.add(anyInt(), anyInt())).thenAnswer(invocation -> {\r\n            int a = invocation.getArgument(0);\r\n            int b = invocation.getArgument(1);\r\n            // Side effect: modify a captured data structure\r\n            return a + b;\r\n        });\r\n    }\r\n}\r\n\r\ninterface CalculatorService {\r\n    int add(int a, int b);\r\n    int subtract(int a, int b);\r\n    int multiply(int a, int b);\r\n    int divide(int a, int b);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\r\nDo not over-stub. Only stub methods that will actually be called by the code under test → unnecessary stubbing makes tests brittle."
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
        children: "package mockito.verification;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.Mock;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\n\r\nimport java.util.List;\r\n\r\nimport static org.mockito.Mockito.*;\r\nimport static org.mockito.ArgumentMatchers.*;\r\n\r\n@ExtendWith(MockitoExtension.class)\r\nclass VerificationTest {\r\n\r\n    @Mock\r\n    private List<String> list;\r\n\r\n    @Mock\r\n    private EmailService emailService;\r\n\r\n    @Test\r\n    void verifyTimes() {\r\n        list.add(\"one\");\r\n        list.add(\"one\");\r\n        list.add(\"two\");\r\n\r\n        verify(list, times(2)).add(\"one\");\r\n        verify(list, times(1)).add(\"two\");\r\n        verify(list, atLeastOnce()).add(\"one\");\r\n        verify(list, atLeast(1)).add(\"two\");\r\n        verify(list, atMost(2)).add(\"one\");\r\n        verify(list, never()).clear();\r\n    }\r\n\r\n    @Test\r\n    void verifyOnly() {\r\n        // verifyNoOtherInteractions: checks that ONLY the verified\r\n        // interaction happened — no other calls on this mock.\r\n        list.add(\"hello\");\r\n        verify(list).add(\"hello\");\r\n        verifyNoMoreInteractions(list); // passes\r\n\r\n        // If we add another call:\r\n        // list.size();\r\n        // verify(list).add(\"hello\");\r\n        // verifyNoMoreInteractions(list); // FAILS: size() was not verified\r\n    }\r\n\r\n    @Test\r\n    void verifyNoInteractions() {\r\n        // verifyNoInteractions: checks that NO calls happened at all\r\n        verifyNoInteractions(list); // list has no interactions — passes\r\n        verifyNoInteractions(emailService);\r\n    }\r\n\r\n    @Test\r\n    void verifyWithDescription() {\r\n        list.add(\"hello\");\r\n        verify(list, description(\"add should have been called with 'hello'\"))\r\n            .add(\"hello\");\r\n    }\r\n\r\n    @Test\r\n    void verifyCallRealMethod() {\r\n        // When a mock is set to CALLS_REAL_METHODS, verify still tracks calls\r\n        ArrayList<String> realMock = mock(ArrayList.class, CALLS_REAL_METHODS);\r\n        realMock.add(\"test\");\r\n        verify(realMock).add(\"test\");\r\n    }\r\n}\r\n\r\ninterface EmailService {\r\n    void send(String to, String subject);\r\n    void sendBulk(List<String> recipients, String subject);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-inorder-verification",
      children: "4.2 InOrder Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.verification;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.InOrder;\r\nimport org.mockito.Mock;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\n\r\nimport java.util.List;\r\n\r\nimport static org.mockito.Mockito.*;\r\n\r\n/**\r\n * InOrder verifies that interactions happened in a specific sequence.\r\n */\r\n@ExtendWith(MockitoExtension.class)\r\nclass InOrderTest {\r\n\r\n    @Mock\r\n    private List<String> first;\r\n\r\n    @Mock\r\n    private List<String> second;\r\n\r\n    @Test\r\n    void verifyOrderOnSingleMock() {\r\n        first.add(\"a\");\r\n        first.add(\"b\");\r\n        first.add(\"c\");\r\n\r\n        InOrder inOrder = inOrder(first);\r\n        inOrder.verify(first).add(\"a\");\r\n        inOrder.verify(first).add(\"b\");\r\n        inOrder.verify(first).add(\"c\");\r\n    }\r\n\r\n    @Test\r\n    void verifyOrderAcrossMultipleMocks() {\r\n        first.add(\"a\");\r\n        second.add(\"b\");\r\n        first.add(\"c\");\r\n\r\n        InOrder inOrder = inOrder(first, second);\r\n        inOrder.verify(first).add(\"a\");\r\n        inOrder.verify(second).add(\"b\");\r\n        inOrder.verify(first).add(\"c\");\r\n\r\n        // The order of verify calls must match the actual interaction order\r\n    }\r\n\r\n    @Test\r\n    void verifyOrderFailsWhenWrong() {\r\n        first.add(\"a\");\r\n\r\n        InOrder inOrder = inOrder(first);\r\n        // If we verify a call that hasn't happened yet:\r\n        // inOrder.verify(first).add(\"b\"); // this would make the next line fail\r\n        inOrder.verify(first).add(\"a\");\r\n\r\n        // Uncommenting the following would fail because add(\"a\") already consumed:\r\n        // inOrder.verify(first).add(\"a\"); // WRONG ORDER\r\n    }\r\n\r\n    @Test\r\n    void verifyOrderWithTimes() {\r\n        first.add(\"a\");\r\n        first.add(\"a\");\r\n        second.add(\"b\");\r\n\r\n        InOrder inOrder = inOrder(first, second);\r\n        inOrder.verify(first, times(2)).add(\"a\");\r\n        inOrder.verify(second).add(\"b\");\r\n    }\r\n\r\n    @Test\r\n    void verifyNoMoreInteractionsAfterOrder() {\r\n        first.add(\"a\");\r\n        second.add(\"b\");\r\n\r\n        InOrder inOrder = inOrder(first, second);\r\n        inOrder.verify(first).add(\"a\");\r\n        inOrder.verify(second).add(\"b\");\r\n\r\n        // After InOrder verification, check no extra interactions\r\n        // Note: verifyNoMoreInteractions must be called on mocks directly,\r\n        // not through InOrder\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-timeout-verification",
      children: "4.3 Timeout Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.verification;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.Mock;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\n\r\nimport java.util.concurrent.Callable;\r\nimport java.util.concurrent.ExecutorService;\r\nimport java.util.concurrent.Executors;\r\nimport java.util.concurrent.TimeUnit;\r\n\r\nimport static org.mockito.Mockito.*;\r\n\r\n/**\r\n * verify with timeout: waits up to the specified duration for the\r\n * interaction to happen. Useful for asynchronous code.\r\n *\r\n * after(): waits the full duration, then checks.\r\n * timeout(): checks periodically and returns as soon as satisfied.\r\n */\r\n@ExtendWith(MockitoExtension.class)\r\nclass TimeoutVerificationTest {\r\n\r\n    @Mock\r\n    private AsyncCallback callback;\r\n\r\n    @Test\r\n    void verifyTimeout() throws Exception {\r\n        ExecutorService executor = Executors.newSingleThreadExecutor();\r\n        executor.submit(() -> {\r\n            Thread.sleep(200);\r\n            callback.onComplete(\"success\");\r\n            return null;\r\n        });\r\n\r\n        // timeout: polls every 10ms — returns as soon as the interaction happens\r\n        verify(callback, timeout(1000)).onComplete(\"success\");\r\n        executor.shutdown();\r\n    }\r\n\r\n    @Test\r\n    void verifyAfter() {\r\n        ExecutorService executor = Executors.newSingleThreadExecutor();\r\n        executor.submit(() -> {\r\n            Thread.sleep(50);\r\n            callback.onComplete(\"done\");\r\n            return null;\r\n        });\r\n\r\n        // after: waits the full 300ms regardless\r\n        verify(callback, after(300)).onComplete(\"done\");\r\n        executor.shutdown();\r\n    }\r\n\r\n    @Test\r\n    void verifyTimeoutWithTimes() {\r\n        ExecutorService executor = Executors.newSingleThreadExecutor();\r\n        executor.submit(() -> {\r\n            Thread.sleep(100);\r\n            callback.onComplete(\"first\");\r\n            Thread.sleep(100);\r\n            callback.onComplete(\"second\");\r\n            return null;\r\n        });\r\n\r\n        verify(callback, timeout(2000).times(2)).onComplete(anyString());\r\n        executor.shutdown();\r\n    }\r\n}\r\n\r\ninterface AsyncCallback {\r\n    void onComplete(String result);\r\n    void onError(Throwable t);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!NOTE]\r\nVerification is optional → only verify interactions when proving a side effect occurred. Testing return values is usually sufficient."
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
        children: "package mockito.matchers;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.ArgumentMatcher;\r\nimport org.mockito.ArgumentMatchers;\r\nimport org.mockito.Mock;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\n\r\nimport java.util.List;\r\nimport java.util.Set;\r\n\r\nimport static org.mockito.Mockito.*;\r\nimport static org.mockito.ArgumentMatchers.*;\r\n\r\n@ExtendWith(MockitoExtension.class)\r\nclass BuiltInMatchersTest {\r\n\r\n    @Mock\r\n    private List<String> list;\r\n\r\n    @Mock\r\n    private Set<Integer> set;\r\n\r\n    @Test\r\n    void anyAndEq() {\r\n        when(list.get(anyInt())).thenReturn(\"found\");\r\n\r\n        assertEquals(\"found\", list.get(0));\r\n        assertEquals(\"found\", list.get(42));\r\n\r\n        when(list.contains(eq(\"specific\"))).thenReturn(true);\r\n        assertTrue(list.contains(\"specific\"));\r\n        assertFalse(list.contains(\"other\")); // unstubbed\r\n    }\r\n\r\n    @Test\r\n    void typedMatchers() {\r\n        when(list.get(anyInt())).thenReturn(\"x\");\r\n        when(list.indexOf(anyString())).thenReturn(42);\r\n        when(list.contains(anyString())).thenReturn(true);\r\n\r\n        // Type-specific matchers:\r\n        // anyInt(), anyLong(), anyDouble(), anyFloat(),\r\n        // anyBoolean(), anyByte(), anyShort(), anyChar()\r\n        // anyString(), anyList(), anySet(), anyMap(),\r\n        // anyCollection(), anyIterable()\r\n    }\r\n\r\n    @Test\r\n    void nullableAndNotNull() {\r\n        when(list.contains(nullable(String.class))).thenReturn(true);\r\n        assertTrue(list.contains(\"hello\"));\r\n        assertTrue(list.contains(null));\r\n\r\n        when(list.contains(notNull())).thenReturn(true);\r\n    }\r\n\r\n    @Test\r\n    void stringMatchers() {\r\n        when(list.contains(startsWith(\"prefix_\"))).thenReturn(true);\r\n        when(list.contains(endsWith(\"_suffix\"))).thenReturn(true);\r\n        when(list.contains(contains(\"substring\"))).thenReturn(true);\r\n\r\n        assertTrue(list.contains(\"prefix_value\"));\r\n        assertTrue(list.contains(\"value_suffix\"));\r\n        assertTrue(list.contains(\"has_substring_here\"));\r\n\r\n        // also: matches(String regex)\r\n    }\r\n\r\n    @Test\r\n    void intMatchers() {\r\n        when(list.get(intThat(n -> n >= 0 && n < 10))).thenReturn(\"small\");\r\n        when(list.get(intThat(n -> n >= 10))).thenReturn(\"large\");\r\n\r\n        assertEquals(\"small\", list.get(5));\r\n        assertEquals(\"large\", list.get(42));\r\n    }\r\n\r\n    @Test\r\n    void combinableMatchers() {\r\n        // Matchers can be combined in a stub\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-custom-argumentmatcher-argthat",
      children: "5.2 Custom ArgumentMatcher (argThat)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.matchers;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.ArgumentMatcher;\r\nimport org.mockito.Mock;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\n\r\nimport static org.mockito.Mockito.*;\r\nimport static org.mockito.ArgumentMatchers.*;\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\n@ExtendWith(MockitoExtension.class)\r\nclass CustomMatcherTest {\r\n\r\n    @Mock\r\n    private InventoryService inventory;\r\n\r\n    private record Product(String id, String category, double price) {}\r\n\r\n    @Test\r\n    void argThatWithLambda() {\r\n        when(inventory.getStock(argThat(code -> code.startsWith(\"ELEC-\"))))\r\n            .thenReturn(50);\r\n        when(inventory.getStock(argThat(code -> code.startsWith(\"FOOD-\"))))\r\n            .thenReturn(200);\r\n\r\n        assertEquals(50, inventory.getStock(\"ELEC-001\"));\r\n        assertEquals(200, inventory.getStock(\"FOOD-001\"));\r\n        assertEquals(0, inventory.getStock(\"OTHER-001\")); // unstubbed\r\n    }\r\n\r\n    @Test\r\n    void argThatWithCustomMatcherClass() {\r\n        when(inventory.getStock(argThat(new ProductCodeMatcher(\"ELEC\"))))\r\n            .thenReturn(100);\r\n\r\n        assertEquals(100, inventory.getStock(\"ELEC-XYZ\"));\r\n        assertEquals(0, inventory.getStock(\"BOOK-001\"));\r\n    }\r\n\r\n    @Test\r\n    void verifyWithCustomMatcher() {\r\n        inventory.updateStock(\"ELEC-001\", 10);\r\n\r\n        verify(inventory).updateStock(\r\n            argThat(code -> code.startsWith(\"ELEC\")),\r\n            anyInt()\r\n        );\r\n    }\r\n\r\n    @Test\r\n    void multipleCustomMatchers() {\r\n        when(inventory.updateStock(\r\n            argThat(c -> c.length() >= 5),\r\n            argThat(q -> q > 0)\r\n        )).thenReturn(true);\r\n\r\n        assertTrue(inventory.updateStock(\"CODE123\", 5));\r\n        assertFalse(inventory.updateStock(\"AB\", 0)); // both matchers fail\r\n    }\r\n}\r\n\r\nclass ProductCodeMatcher implements ArgumentMatcher<String> {\r\n\r\n    private final String prefix;\r\n\r\n    ProductCodeMatcher(String prefix) {\r\n        this.prefix = prefix;\r\n    }\r\n\r\n    @Override\r\n    public boolean matches(String code) {\r\n        return code != null && code.startsWith(prefix);\r\n    }\r\n\r\n    @Override\r\n    public String toString() {\r\n        return \"[code starting with \" + prefix + \"]\";\r\n    }\r\n}\r\n\r\ninterface InventoryService {\r\n    int getStock(String productCode);\r\n    boolean updateStock(String productCode, int quantity);\r\n}\n"
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
        children: "package mockito.captor;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.ArgumentCaptor;\r\nimport org.mockito.Captor;\r\nimport org.mockito.Mock;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.mockito.Mockito.*;\r\n\r\n@ExtendWith(MockitoExtension.class)\r\nclass ArgumentCaptorTest {\r\n\r\n    @Mock\r\n    private EmailService emailService;\r\n\r\n    @Captor\r\n    private ArgumentCaptor<Email> emailCaptor;\r\n\r\n    @Captor\r\n    private ArgumentCaptor<String> stringCaptor;\r\n\r\n    @Test\r\n    void captureEmailSent() {\r\n        Email expected = new Email(\"alice@example.com\", \"Welcome!\", \"<h1>Hi</h1>\");\r\n        emailService.send(expected);\r\n\r\n        verify(emailService).send(emailCaptor.capture());\r\n\r\n        Email captured = emailCaptor.getValue();\r\n        assertEquals(\"alice@example.com\", captured.to());\r\n        assertEquals(\"Welcome!\", captured.subject());\r\n        assertTrue(captured.body().contains(\"Hi\"));\r\n    }\r\n\r\n    @Test\r\n    void captureMultipleValues() {\r\n        emailService.send(new Email(\"a@x.com\", \"S1\", \"Body1\"));\r\n        emailService.send(new Email(\"b@x.com\", \"S2\", \"Body2\"));\r\n\r\n        verify(emailService, times(2)).send(emailCaptor.capture());\r\n\r\n        var allValues = emailCaptor.getAllValues();\r\n        assertEquals(2, allValues.size());\r\n        assertEquals(\"S1\", allValues.get(0).subject());\r\n        assertEquals(\"S2\", allValues.get(1).subject());\r\n    }\r\n\r\n    @Test\r\n    void captureStringArgument() {\r\n        emailService.sendWelcome(\"user@example.com\", \"Alice\");\r\n\r\n        verify(emailService).sendWelcome(\r\n            stringCaptor.capture(),\r\n            stringCaptor.capture()\r\n        );\r\n\r\n        var values = stringCaptor.getAllValues();\r\n        assertEquals(\"user@example.com\", values.get(0));\r\n        assertEquals(\"Alice\", values.get(1));\r\n    }\r\n}\r\n\r\nrecord Email(String to, String subject, String body) {}\r\n\r\ninterface EmailService {\r\n    void send(Email email);\r\n    void sendWelcome(String email, String name);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-captor-with-complex-verification",
      children: "6.2 Captor with Complex Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.captor;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.ArgumentCaptor;\r\nimport org.mockito.Captor;\r\nimport org.mockito.Mock;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\n\r\nimport java.time.LocalDate;\r\nimport java.util.List;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.mockito.Mockito.*;\r\n\r\n@ExtendWith(MockitoExtension.class)\r\nclass ComplexCaptorTest {\r\n\r\n    @Mock\r\n    private OrderRepository orderRepository;\r\n\r\n    @Captor\r\n    private ArgumentCaptor<List<OrderLine>> linesCaptor;\r\n\r\n    @Captor\r\n    private ArgumentCaptor<Order> orderCaptor;\r\n\r\n    @Test\r\n    void captureOrderWithLines() {\r\n        OrderService orderService = new OrderService(orderRepository);\r\n        List<OrderLine> lines = List.of(\r\n            new OrderLine(\"LAPTOP\", 1, 999.99),\r\n            new OrderLine(\"MOUSE\", 2, 49.99)\r\n        );\r\n\r\n        orderService.placeOrder(\"customer-1\", lines);\r\n\r\n        verify(orderRepository).save(orderCaptor.capture());\r\n        Order saved = orderCaptor.getValue();\r\n\r\n        assertNotNull(saved.id());\r\n        assertEquals(\"customer-1\", saved.customerId());\r\n        assertEquals(2, saved.lines().size());\r\n        assertEquals(1099.97, saved.total(), 0.01);\r\n    }\r\n\r\n    @Test\r\n    void captureWithCaptorCreatedManually() {\r\n        // Sometimes it's clearer to create the captor inline\r\n        ArgumentCaptor<String> manualCaptor = ArgumentCaptor.forClass(String.class);\r\n\r\n        orderRepository.log(\"order-created\", \"Order 123 created\");\r\n        verify(orderRepository).log(anyString(), manualCaptor.capture());\r\n\r\n        assertEquals(\"Order 123 created\", manualCaptor.getValue());\r\n    }\r\n\r\n    @Test\r\n    void verifyWithArgumentMatchersAndCaptor() {\r\n        Order order = new Order(\"id-1\", \"cust-1\", List.of(), 0.0);\r\n        orderRepository.save(order);\r\n\r\n        // Captor captures on a specific matcher\r\n        verify(orderRepository).save(argThat(o -> o.customerId().equals(\"cust-1\")));\r\n    }\r\n}\r\n\r\nrecord OrderLine(String productCode, int quantity, double unitPrice) {}\r\nrecord Order(String id, String customerId, List<OrderLine> lines, double total) {}\r\n\r\ninterface OrderRepository {\r\n    Order save(Order order);\r\n    Order findById(String id);\r\n    void log(String event, String message);\r\n}\r\n\r\nclass OrderService {\r\n\r\n    private final OrderRepository repository;\r\n\r\n    OrderService(OrderRepository repository) {\r\n        this.repository = repository;\r\n    }\r\n\r\n    Order placeOrder(String customerId, List<OrderLine> lines) {\r\n        double total = lines.stream()\r\n            .mapToDouble(l -> l.unitPrice() * l.quantity())\r\n            .sum();\r\n        Order order = new Order(\r\n            \"ord-\" + System.currentTimeMillis(),\r\n            customerId,\r\n            lines,\r\n            total\r\n        );\r\n        return repository.save(order);\r\n    }\r\n}\n"
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
        children: "package mockito.bdd;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.BDDMockito;\r\nimport org.mockito.Mock;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\n\r\nimport static org.mockito.BDDMockito.*;\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\n/**\r\n * BDDMockito uses BDD-style language that reads naturally:\r\n *\r\n * // Given — stub configuration\r\n * given(repository.findById(1L)).willReturn(Optional.of(user));\r\n *\r\n * // When — exercise the SUT\r\n * User result = service.getUser(1L);\r\n *\r\n * // Then — verify outcomes\r\n * then(repository).should(times(1)).findById(1L);\r\n */\r\n@ExtendWith(MockitoExtension.class)\r\nclass BddStyleTest {\r\n\r\n    @Mock\r\n    private UserRepository repository;\r\n\r\n    @Mock\r\n    private NotificationService notificationService;\r\n\r\n    @Test\r\n    void bddStyleStubbing() {\r\n        // Given\r\n        User user = new User(1L, \"Alice\", \"alice@example.com\");\r\n        given(repository.findById(1L)).willReturn(java.util.Optional.of(user));\r\n\r\n        // When\r\n        UserService service = new UserService(repository, notificationService);\r\n        User result = service.getUser(1L);\r\n\r\n        // Then\r\n        assertNotNull(result);\r\n        assertEquals(\"Alice\", result.name());\r\n\r\n        // Then — verify interactions\r\n        then(repository).should(times(1)).findById(1L);\r\n        then(notificationService).should(never()).notify(anyString());\r\n    }\r\n\r\n    @Test\r\n    void bddWillThrow() {\r\n        // Given\r\n        given(repository.findById(anyLong())).willThrow(\r\n            new RuntimeException(\"Database connection lost\"));\r\n\r\n        // When / Then\r\n        UserService service = new UserService(repository, notificationService);\r\n        assertThrows(RuntimeException.class, () -> service.getUser(1L));\r\n    }\r\n\r\n    @Test\r\n    void bddWillAnswer() {\r\n        // Given\r\n        given(repository.findById(anyLong())).willAnswer(invocation -> {\r\n            Long id = invocation.getArgument(0);\r\n            return java.util.Optional.of(new User(id, \"User-\" + id, \"user\" + id + \"@test.com\"));\r\n        });\r\n\r\n        // When\r\n        UserService service = new UserService(repository, notificationService);\r\n        User result = service.getUser(99L);\r\n\r\n        // Then\r\n        assertEquals(\"User-99\", result.name());\r\n    }\r\n\r\n    @Test\r\n    void bddWillCallRealMethod() {\r\n        // Use willCallRealMethod for spies in BDD style\r\n        // given(spy).someMethod().willCallRealMethod();\r\n    }\r\n\r\n    @Test\r\n    void bddShouldWithTimes() {\r\n        // Given\r\n        User user = new User(1L, \"Bob\", \"bob@example.com\");\r\n        given(repository.findById(1L)).willReturn(java.util.Optional.of(user));\r\n\r\n        // When\r\n        UserService service = new UserService(repository, notificationService);\r\n        User result1 = service.getUser(1L);\r\n        User result2 = service.getUser(1L);\r\n\r\n        // Then — should verify with exact times\r\n        then(repository).should(times(2)).findById(1L);\r\n    }\r\n\r\n    @Test\r\n    void bddShouldInOrder() {\r\n        // Given\r\n        User user = new User(1L, \"Carol\", \"carol@example.com\");\r\n        given(repository.save(any(User.class))).willReturn(user);\r\n\r\n        // When\r\n        UserService service = new UserService(repository, notificationService);\r\n        service.createUser(\"Carol\", \"carol@example.com\");\r\n\r\n        // Then — ordered verification\r\n        then(repository).should().findByEmail(\"carol@example.com\");\r\n        then(repository).should().save(any(User.class));\r\n        then(notificationService).should().notify(\"Welcome Carol!\");\r\n    }\r\n\r\n    // BDDMockito's then() returns BDDMockito.Then — not Mockito.verify directly\r\n    // but they behave equivalently\r\n}\r\n\r\nrecord User(Long id, String name, String email) {}\r\n\r\ninterface UserRepository {\r\n    java.util.Optional<User> findById(Long id);\r\n    User save(User user);\r\n    java.util.Optional<User> findByEmail(String email);\r\n}\r\n\r\ninterface NotificationService {\r\n    void notify(String message);\r\n}\r\n\r\nclass UserService {\r\n\r\n    private final UserRepository repository;\r\n    private final NotificationService notificationService;\r\n\r\n    UserService(UserRepository repository, NotificationService notificationService) {\r\n        this.repository = repository;\r\n        this.notificationService = notificationService;\r\n    }\r\n\r\n    User getUser(Long id) {\r\n        return repository.findById(id)\r\n            .orElseThrow(() -> new RuntimeException(\"User not found: \" + id));\r\n    }\r\n\r\n    User createUser(String name, String email) {\r\n        repository.findByEmail(email).ifPresent(u -> {\r\n            throw new RuntimeException(\"Email already exists\");\r\n        });\r\n        User user = new User(null, name, email);\r\n        User saved = repository.save(user);\r\n        notificationService.notify(\"Welcome \" + name + \"!\");\r\n        return saved;\r\n    }\r\n}\n"
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
        children: "package mockito.spy;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.Mockito;\r\nimport org.mockito.Spy;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\n\r\nimport java.util.ArrayList;\r\nimport java.util.List;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.mockito.Mockito.*;\r\n\r\n/**\r\n * When to use spy vs mock:\r\n *\r\n * spy():  You want the real behaviour most of the time,\r\n *        but need to stub a few specific methods.\r\n * mock(): You want a completely controlled double — no real\r\n *        implementation runs unless explicitly stubbed.\r\n */\r\n@ExtendWith(MockitoExtension.class)\r\nclass SpyTest {\r\n\r\n    @Spy\r\n    private List<String> list = new ArrayList<>();\r\n\r\n    @Test\r\n    void spyDelegatesToRealMethods() {\r\n        list.add(\"hello\");\r\n        list.add(\"world\");\r\n\r\n        assertEquals(2, list.size()); // real size() is called\r\n        assertEquals(\"hello\", list.get(0)); // real get() is called\r\n    }\r\n\r\n    @Test\r\n    void spyWithStubbedMethod() {\r\n        // Stub a specific method — the rest remain real\r\n        doReturn(100).when(list).size();\r\n\r\n        list.add(\"hello\");\r\n\r\n        assertEquals(100, list.size()); // stubbed\r\n        assertEquals(\"hello\", list.get(0)); // real\r\n    }\r\n\r\n    @Test\r\n    void spyCreatedWithStaticMethod() {\r\n        List<String> spyList = spy(new ArrayList<>());\r\n        spyList.add(\"test\");\r\n\r\n        assertEquals(1, spyList.size());\r\n        doReturn(999).when(spyList).size();\r\n        assertEquals(999, spyList.size());\r\n    }\r\n\r\n    @Test\r\n    void spyThrowsException() {\r\n        List<String> spyList = spy(new ArrayList<>());\r\n        doThrow(new RuntimeException(\"spy exception\")).when(spyList).clear();\r\n\r\n        assertThrows(RuntimeException.class, () -> spyList.clear());\r\n    }\r\n\r\n    @Test\r\n    void spyVerifyInteractions() {\r\n        list.add(\"real add\");\r\n        list.size();\r\n\r\n        verify(list).add(\"real add\");\r\n        verify(list).size();\r\n        verify(list, never()).clear();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-spy-vs-mock--when-to-use-what",
      children: "8.2 Spy vs Mock — When to Use What"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.spy;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.Mock;\r\nimport org.mockito.Spy;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\n\r\nimport java.util.ArrayList;\r\nimport java.util.List;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.mockito.Mockito.*;\r\n\r\n/**\r\n * Comparing spy and mock behaviour side by side.\r\n */\r\n@ExtendWith(MockitoExtension.class)\r\nclass SpyVsMockTest {\r\n\r\n    @Mock\r\n    private List<String> mockList;\r\n\r\n    @Spy\r\n    private List<String> spyList = new ArrayList<>();\r\n\r\n    @Test\r\n    void mockReturnsDefaults() {\r\n        assertNull(mockList.get(0));\r\n        assertEquals(0, mockList.size());\r\n        assertFalse(mockList.contains(\"x\"));\r\n\r\n        // Adding to a mock does nothing visible\r\n        mockList.add(\"hello\");\r\n        assertEquals(0, mockList.size()); // still 0 — mock ignores real behaviour\r\n    }\r\n\r\n    @Test\r\n    void spyCallsRealMethods() {\r\n        assertThrows(IndexOutOfBoundsException.class, () -> spyList.get(0));\r\n\r\n        spyList.add(\"hello\");\r\n        assertEquals(1, spyList.size());\r\n        assertTrue(spyList.contains(\"hello\"));\r\n    }\r\n\r\n    @Test\r\n    void importantGotchaWithSpy() {\r\n        // IMPORTANT: When stubbing with when().thenReturn() on a spy,\r\n        // the real method is still called first!\r\n        List<String> spy = spy(new ArrayList<>());\r\n\r\n        // This calls the real spy.get(0) which throws IndexOutOfBoundsException!\r\n        // Uncomment to see:\r\n        // when(spy.get(0)).thenReturn(\"boom\"); // throws!\r\n\r\n        // ALWAYS use doReturn for stubbing spies:\r\n        doReturn(\"safe\").when(spy).get(0);\r\n        assertEquals(\"safe\", spy.get(0));\r\n    }\r\n\r\n    @Test\r\n    void whenToUseSpy() {\r\n        // Use spy when:\r\n        // 1. Most methods should behave normally\r\n        // 2. You only need to override a few specific methods\r\n        // 3. The object has important internal state or side effects\r\n        // 4. You're testing legacy code that can't be easily refactored\r\n\r\n        // Use mock when:\r\n        // 1. You want complete control over all interactions\r\n        // 2. The dependency is expensive or has side effects\r\n        // 3. You're testing the SUT's interaction with the dependency\r\n        // 4. You need to verify behaviour (calls, arguments, order)\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-partial-mocking-with-answer",
      children: "8.3 Partial Mocking with Answer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.spy;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.mockito.Mockito;\r\n\r\nimport java.util.ArrayList;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.mockito.Mockito.*;\r\n\r\nclass PartialMockTest {\r\n\r\n    @Test\r\n    void partialMockWithAnswer() {\r\n        ArrayList<String> list = Mockito.mock(ArrayList.class, withSettings()\r\n            .useConstructor()\r\n            .defaultAnswer(CALLS_REAL_METHODS)\r\n        );\r\n\r\n        // Now we have a real ArrayList that delegates to its constructor\r\n        list.add(\"test\");\r\n\r\n        // Override size() to return a fixed value\r\n        doReturn(42).when(list).size();\r\n\r\n        assertEquals(42, list.size());\r\n\r\n        // But real behaviour for other methods\r\n        assertEquals(\"test\", list.get(0));\r\n    }\r\n\r\n    @Test\r\n    void partialMockWithSpy() {\r\n        // Alternative: use spy for partial mocking\r\n        ArrayList<String> list = spy(new ArrayList<>());\r\n        list.add(\"a\");\r\n\r\n        doReturn(100).when(list).size();\r\n        assertEquals(100, list.size());\r\n        assertEquals(\"a\", list.get(0));\r\n    }\r\n}\n"
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
        children: "package mockito.advanced;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.Mock;\r\nimport org.mockito.Mockito;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\nimport org.mockito.quality.Strictness;\r\n\r\nimport java.util.List;\r\nimport java.util.Map;\r\n\r\nimport static org.mockito.Mockito.*;\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\n/**\r\n * Lenient stubbing suppresses the \"unnecessary stubbing\" exception\r\n * that Mockito throws when a stub is never used during a test.\r\n */\r\n@ExtendWith(MockitoExtension.class)\r\nclass LenientStubbingTest {\r\n\r\n    @Mock(lenient = true)\r\n    private List<String> lenientList;\r\n\r\n    @Mock\r\n    private List<String> strictList;\r\n\r\n    @Test\r\n    void lenientStubbingIsNotChecked() {\r\n        when(lenientList.get(0)).thenReturn(\"a\");\r\n        when(lenientList.get(1)).thenReturn(\"b\");\r\n\r\n        // Only get(0) is used — get(1) stub is unnecessary but\r\n        // does NOT cause a failure because the mock is lenient\r\n        lenientList.get(0);\r\n        verify(lenientList).get(0);\r\n    }\r\n\r\n    @Test\r\n    void strictStubbingCausesFailure() {\r\n        // If we add an unused stub, the test fails:\r\n        // when(strictList.get(0)).thenReturn(\"x\");\r\n        // The test above would fail because get(0) is never called\r\n    }\r\n}\r\n\r\n/**\r\n * Set strictness at the class level.\r\n */\r\n@MockitoSettings(strictness = Strictness.LENIENT)\r\nclass ClassLevelLenientTest {\r\n\r\n    @Mock\r\n    private Map<String, String> map;\r\n\r\n    @Test\r\n    void classLevelLenient() {\r\n        when(map.get(\"unused\")).thenReturn(\"value\");\r\n        // Even though map.get(\"unused\") is never called,\r\n        // no exception is thrown because the whole class is lenient\r\n        assertNull(map.get(\"other\"));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-mocksettings",
      children: "9.2 MockSettings"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.advanced;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.mockito.MockSettings;\r\nimport org.mockito.Mockito;\r\n\r\nimport java.util.List;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.mockito.Mockito.*;\r\n\r\nclass MockSettingsTest {\r\n\r\n    @Test\r\n    void customMockSettings() {\r\n        MockSettings settings = withSettings()\r\n            .name(\"myCustomMock\")\r\n            .verboseLogging()             // logs all interactions\r\n            .defaultAnswer(RETURNS_SMART_NULLS) // more helpful NullPointerException\r\n            .withoutAnnotations();        // skip annotation processing\r\n\r\n        List<String> list = mock(List.class, settings);\r\n\r\n        assertNotNull(list);\r\n    }\r\n\r\n    @Test\r\n    void mockWithDefaultAnswer() {\r\n        // RETURNS_SMART_NULLS: returns smart objects instead of null\r\n        List<String> smartList = mock(List.class, RETURNS_SMART_NULLS);\r\n        // smartList.get(0) returns \"\" (empty string) instead of null\r\n        // This can make tests fail with clearer errors\r\n\r\n        // RETURNS_DEEP_STUBS: for chained calls\r\n        // RETURNS_MOCKS: returns mocks instead of nulls\r\n        // RETURNS_DEFAULTS: default behaviour (zeros, nulls, falses)\r\n    }\r\n\r\n    @Test\r\n    void mockWithSerializable() {\r\n        MockSettings settings = withSettings().serializable();\r\n        List<String> serializableList = mock(List.class, settings);\r\n        // The mock can now be serialized\r\n        assertNotNull(serializableList);\r\n    }\r\n\r\n    @Test\r\n    void mockWithConstructor() {\r\n        // Mock a concrete class through its constructor\r\n        // Requires mockito-inline\r\n        // ArrayList<String> list = mock(ArrayList.class, withSettings()\r\n        //     .useConstructor(\"initial\", \"args\"));\r\n    }\r\n}\n"
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
        children: "package mockito.advanced;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.Mock;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.mockito.Mockito.*;\r\n\r\n/**\r\n * Mockito 2.1+ can mock final classes and methods.\r\n * No config needed for Mockito 5.x with mockito-inline on the classpath.\r\n */\r\n@ExtendWith(MockitoExtension.class)\r\nclass FinalMockTest {\r\n\r\n    @Mock\r\n    private FinalClass finalClass;\r\n\r\n    @Test\r\n    void mockFinalClass() {\r\n        assertNotNull(finalClass);\r\n    }\r\n\r\n    @Test\r\n    void stubFinalMethod() {\r\n        FinalService service = mock(FinalService.class);\r\n        when(service.finalMethod()).thenReturn(\"mocked\");\r\n        assertEquals(\"mocked\", service.finalMethod());\r\n    }\r\n\r\n    @Test\r\n    void verifyFinalMethod() {\r\n        FinalService service = mock(FinalService.class);\r\n        service.finalMethod();\r\n\r\n        verify(service).finalMethod();\r\n    }\r\n}\r\n\r\nfinal class FinalClass {\r\n    final String greet() {\r\n        return \"hello\";\r\n    }\r\n}\r\n\r\nclass FinalService {\r\n    final String finalMethod() {\r\n        return \"original\";\r\n    }\r\n}\n"
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
        children: "package mockito.advanced;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.mockito.MockedStatic;\r\nimport org.mockito.Mockito;\r\n\r\nimport java.util.UUID;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.mockito.Mockito.*;\r\n\r\n/**\r\n * Static mocking uses try-with-resources for scoped mocking.\r\n * The mock is only active within the try block.\r\n */\r\nclass StaticMockTest {\r\n\r\n    @Test\r\n    void mockUUID() {\r\n        UUID fixedUuid = UUID.fromString(\"00000000-0000-0000-0000-000000000001\");\r\n\r\n        try (MockedStatic<UUID> mockedUuid = mockStatic(UUID.class)) {\r\n            mockedUuid.when(UUID::randomUUID).thenReturn(fixedUuid);\r\n\r\n            UUID result = UUID.randomUUID();\r\n            assertEquals(fixedUuid, result);\r\n        }\r\n\r\n        // Outside the try block, UUID.randomUUID() returns real values\r\n    }\r\n\r\n    @Test\r\n    void mockMathRandom() {\r\n        try (MockedStatic<Math> mockedMath = mockStatic(Math.class)) {\r\n            mockedMath.when(() -> Math.random()).thenReturn(0.42);\r\n\r\n            assertEquals(0.42, Math.random(), 0.0001);\r\n        }\r\n    }\r\n\r\n    @Test\r\n    void mockStaticWithArguments() {\r\n        try (MockedStatic<String> mockedString = mockStatic(String.class)) {\r\n            mockedString.when(() -> String.valueOf(anyInt())).thenReturn(\"mocked\");\r\n\r\n            assertEquals(\"mocked\", String.valueOf(42));\r\n        }\r\n    }\r\n\r\n    @Test\r\n    void verifyStaticCall() {\r\n        try (MockedStatic<IdGenerator> mocked = mockStatic(IdGenerator.class)) {\r\n            mocked.when(IdGenerator::nextId).thenReturn(\"fixed-id\");\r\n\r\n            String id = IdGenerator.nextId();\r\n            assertEquals(\"fixed-id\", id);\r\n\r\n            mocked.verify(IdGenerator::nextId);\r\n        }\r\n    }\r\n}\r\n\r\nclass IdGenerator {\r\n    static String nextId() {\r\n        return UUID.randomUUID().toString();\r\n    }\r\n}\n"
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
        children: "package mockito.advanced;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.mockito.MockedConstruction;\r\nimport org.mockito.Mockito;\r\n\r\nimport java.util.List;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\nimport static org.mockito.Mockito.*;\r\n\r\n/**\r\n * Constructor mocking: control what \"new SomeClass()\" returns.\r\n */\r\nclass ConstructorMockTest {\r\n\r\n    @Test\r\n    void mockConstructor() {\r\n        try (MockedConstruction<HeavyService> mocked = mockConstruction(HeavyService.class)) {\r\n            // Any call to new HeavyService() returns a mock\r\n\r\n            HeavyService service1 = new HeavyService(\"param\");\r\n            HeavyService service2 = new HeavyService(\"other\");\r\n\r\n            // Both service1 and service2 are mocks, not real objects\r\n            assertNotNull(service1);\r\n            assertNotNull(service2);\r\n        }\r\n    }\r\n\r\n    @Test\r\n    void mockConstructorWithAnswer() {\r\n        try (MockedConstruction<HeavyService> mocked = mockConstruction(\r\n                HeavyService.class,\r\n                (mock, context) -> {\r\n                    // Custom initialisation for each constructed mock\r\n                    when(mock.initialize()).thenReturn(true);\r\n                })) {\r\n\r\n            HeavyService service = new HeavyService(\"test\");\r\n            assertTrue(service.initialize());\r\n        }\r\n    }\r\n\r\n    @Test\r\n    void mockConstructorVerification() {\r\n        try (MockedConstruction<HeavyService> mocked = mockConstruction(HeavyService.class)) {\r\n            HeavyService s1 = new HeavyService(\"a\");\r\n            HeavyService s2 = new HeavyService(\"b\");\r\n\r\n            // Verify how many times the constructor was called\r\n            assertEquals(2, mocked.constructed().size());\r\n\r\n            List<HeavyService> allConstructed = mocked.constructed();\r\n            assertEquals(\"a\", allConstructed.get(0).getConfig());\r\n            assertEquals(\"b\", allConstructed.get(1).getConfig());\r\n        }\r\n    }\r\n}\r\n\r\nclass HeavyService {\r\n\r\n    private final String config;\r\n\r\n    public HeavyService(String config) {\r\n        this.config = config;\r\n        // Expensive initialisation — database connection, etc.\r\n    }\r\n\r\n    boolean initialize() {\r\n        // real implementation\r\n        return true;\r\n    }\r\n\r\n    String getConfig() {\r\n        return config;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "96-mock-cleanup-and-reset",
      children: "9.6 Mock Cleanup and Reset"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package mockito.advanced;\r\n\r\nimport org.junit.jupiter.api.AfterEach;\r\nimport org.junit.jupiter.api.BeforeEach;\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.mockito.Mock;\r\nimport org.mockito.Mockito;\r\nimport org.mockito.junit.jupiter.MockitoExtension;\r\n\r\nimport java.util.List;\r\n\r\nimport static org.mockito.Mockito.*;\r\n\r\n/**\r\n * Mockito automatically resets mocks between tests when using\r\n * MockitoExtension. In specific cases, you need manual control.\r\n */\r\n@ExtendWith(MockitoExtension.class)\r\nclass MockCleanupTest {\r\n\r\n    @Mock\r\n    private List<String> list;\r\n\r\n    @BeforeEach\r\n    void setUp() {\r\n        // Mocks are fresh at this point — no interaction history\r\n    }\r\n\r\n    @AfterEach\r\n    void tearDown() {\r\n        // Verify no leftover interactions\r\n        // verifyNoMoreInteractions(list);\r\n    }\r\n\r\n    @Test\r\n    void firstTest() {\r\n        when(list.get(0)).thenReturn(\"a\");\r\n        assertEquals(\"a\", list.get(0));\r\n    }\r\n\r\n    @Test\r\n    void secondTest() {\r\n        // Mock is clean — no leftover state from firstTest\r\n        when(list.size()).thenReturn(10);\r\n        assertEquals(10, list.size());\r\n    }\r\n\r\n    @Test\r\n    void clearInvocations() {\r\n        list.add(\"x\");\r\n        verify(list).add(\"x\");\r\n\r\n        // Clear the invocation data without resetting stubs\r\n        clearInvocations(list);\r\n\r\n        // Now verify fails because invocations were cleared\r\n        // verify(list).add(\"x\"); // FAILS\r\n\r\n        // But stubs still work:\r\n        when(list.size()).thenReturn(5);\r\n        assertEquals(5, list.size());\r\n    }\r\n\r\n    @Test\r\n    void resetMock() {\r\n        list.add(\"x\");\r\n        when(list.size()).thenReturn(5);\r\n\r\n        // reset clears BOTH invocations AND stubs\r\n        reset(list);\r\n\r\n        // All stubs are gone:\r\n        assertEquals(0, list.size()); // default\r\n\r\n        // All invocations are gone:\r\n        verifyNoInteractions(list);\r\n    }\r\n}\n"
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