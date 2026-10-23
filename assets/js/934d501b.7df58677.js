"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1913],{

/***/ 8506
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_31_spring_boot_test_md_934_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-31-spring-boot-test-md-934.json
const site_docs_courses_java_31_spring_boot_test_md_934_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/31-spring-boot-test","title":"Spring Boot Testing","description":"Previous Testcontainers","source":"@site/docs/courses/java/31-spring-boot-test.md","sourceDirName":"courses/java","slug":"/java/31-spring-boot-test","permalink":"/ai-engineering-journey/java/31-spring-boot-test","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":31,"frontMatter":{"id":"31-spring-boot-test","slug":"/java/31-spring-boot-test","title":"Spring Boot Testing","sidebar_label":"Spring Boot Testing","sidebar_position":31},"sidebar":"course-java","previous":{"title":"Mockito & Mocking Frameworks","permalink":"/ai-engineering-journey/java/30-mockito"},"next":{"title":"Testcontainers & Integration Testing","permalink":"/ai-engineering-journey/java/32-testcontainers"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/java/31-spring-boot-test.md


const frontMatter = {
	id: '31-spring-boot-test',
	slug: '/java/31-spring-boot-test',
	title: 'Spring Boot Testing',
	sidebar_label: 'Spring Boot Testing',
	sidebar_position: 31
};
const contentTitle = 'Spring Boot Testing';

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
  "value": "1. @SpringBootTest — Full Context Testing",
  "id": "1-springboottest--full-context-testing",
  "level": 2
}, {
  "value": "1.1 Custom Context Configuration",
  "id": "11-custom-context-configuration",
  "level": 3
}, {
  "value": "1.2 Context Caching",
  "id": "12-context-caching",
  "level": 3
}, {
  "value": "2. Web Environment Modes",
  "id": "2-web-environment-modes",
  "level": 2
}, {
  "value": "2.1 LocalServerPort",
  "id": "21-localserverport",
  "level": 3
}, {
  "value": "3. TestRestTemplate",
  "id": "3-testresttemplate",
  "level": 2
}, {
  "value": "3.1 Basic REST Template Operations",
  "id": "31-basic-rest-template-operations",
  "level": 3
}, {
  "value": "3.2 TestRestTemplate with Basic Auth",
  "id": "32-testresttemplate-with-basic-auth",
  "level": 3
}, {
  "value": "4. WebTestClient",
  "id": "4-webtestclient",
  "level": 2
}, {
  "value": "4.1 Basic WebTestClient Usage",
  "id": "41-basic-webtestclient-usage",
  "level": 3
}, {
  "value": "4.2 WebTestClient with JSON Path",
  "id": "42-webtestclient-with-json-path",
  "level": 3
}, {
  "value": "4.3 WebTestClient for WebFlux",
  "id": "43-webtestclient-for-webflux",
  "level": 3
}, {
  "value": "5. Slicing Tests",
  "id": "5-slicing-tests",
  "level": 2
}, {
  "value": "5.1 @WebMvcTest — Testing Controllers Only",
  "id": "51-webmvctest--testing-controllers-only",
  "level": 3
}, {
  "value": "5.2 @DataJpaTest — Testing Repositories Only",
  "id": "52-datajpatest--testing-repositories-only",
  "level": 3
}, {
  "value": "5.3 @JsonTest — Testing Serialization",
  "id": "53-jsontest--testing-serialization",
  "level": 3
}, {
  "value": "5.4 @RestClientTest — Testing REST Clients",
  "id": "54-restclienttest--testing-rest-clients",
  "level": 3
}, {
  "value": "5.5 @DataMongoTest",
  "id": "55-datamongotest",
  "level": 3
}, {
  "value": "5.6 @DataRedisTest",
  "id": "56-dataredistest",
  "level": 3
}, {
  "value": "5.7 @DataLdapTest",
  "id": "57-dataldaptest",
  "level": 3
}, {
  "value": "5.8 @DataNeo4jTest",
  "id": "58-dataneo4jtest",
  "level": 3
}, {
  "value": "6. MockBean and SpyBean",
  "id": "6-mockbean-and-spybean",
  "level": 2
}, {
  "value": "6.1 @MockBean",
  "id": "61-mockbean",
  "level": 3
}, {
  "value": "6.2 @SpyBean",
  "id": "62-spybean",
  "level": 3
}, {
  "value": "6.3 DirtiesContext — Resetting Between Tests",
  "id": "63-dirtiescontext--resetting-between-tests",
  "level": 3
}, {
  "value": "7. Test Configuration",
  "id": "7-test-configuration",
  "level": 2
}, {
  "value": "7.1 @TestConfiguration",
  "id": "71-testconfiguration",
  "level": 3
}, {
  "value": "7.2 @TestPropertySource",
  "id": "72-testpropertysource",
  "level": 3
}, {
  "value": "7.3 @DynamicPropertySource",
  "id": "73-dynamicpropertysource",
  "level": 3
}, {
  "value": "7.4 @ActiveProfiles",
  "id": "74-activeprofiles",
  "level": 3
}, {
  "value": "7.5 Test Slice Auto-Configuration",
  "id": "75-test-slice-auto-configuration",
  "level": 3
}, {
  "value": "8. Output Capture",
  "id": "8-output-capture",
  "level": 2
}, {
  "value": "8.1 @OutputCaptureExtension",
  "id": "81-outputcaptureextension",
  "level": 3
}, {
  "value": "8.2 Using OutputCapture in @SpringBootTest",
  "id": "82-using-outputcapture-in-springboottest",
  "level": 3
}, {
  "value": "9. Summary",
  "id": "9-summary",
  "level": 2
}, {
  "value": "10. Exercises",
  "id": "10-exercises",
  "level": 2
}, {
  "value": "Exercise 1: Full Context Test",
  "id": "exercise-1-full-context-test",
  "level": 3
}, {
  "value": "Exercise 2: MockMvc Controller Test",
  "id": "exercise-2-mockmvc-controller-test",
  "level": 3
}, {
  "value": "Exercise 3: DataJpa Repository Test",
  "id": "exercise-3-datajpa-repository-test",
  "level": 3
}, {
  "value": "Exercise 4: JSON Test",
  "id": "exercise-4-json-test",
  "level": 3
}, {
  "value": "Exercise 5: RestClientTest",
  "id": "exercise-5-restclienttest",
  "level": 3
}, {
  "value": "Exercise 6: DynamicPropertySource with Testcontainers",
  "id": "exercise-6-dynamicpropertysource-with-testcontainers",
  "level": 3
}, {
  "value": "Exercise 7: ActiveProfiles",
  "id": "exercise-7-activeprofiles",
  "level": 3
}, {
  "value": "Exercise 8: Output Capture",
  "id": "exercise-8-output-capture",
  "level": 3
}, {
  "value": "Exercise 9: DataMongoTest",
  "id": "exercise-9-datamongotest",
  "level": 3
}, {
  "value": "Exercise 10: Complete Integration Test Suite",
  "id": "exercise-10-complete-integration-test-suite",
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
        id: "spring-boot-testing",
        children: "Spring Boot Testing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/30-mockito",
          children: "Mockito"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/32-testcontainers",
          children: "Testcontainers"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot provides first-class support for testing at every level of the application: unit tests with mocked slices, integration tests with the full application context, and end-to-end tests via HTTP clients. The testing layer builds on JUnit 5 and Mockito, adding Spring-specific annotations, test slices, and utilities that simplify wiring, configuration, and verification of Spring-managed components."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add this dependency:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\r\n    <groupId>org.springframework.boot</groupId>\r\n    <artifactId>spring-boot-starter-test</artifactId>\r\n    <scope>test</scope>\r\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This single starter pulls in JUnit 5, Mockito, AssertJ, Hamcrest, JSON Assert, and the Spring Test framework."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/ch31-spring-boot-test.png",
        alt: "Spring Boot Testing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bootstrap a full Spring application context for integration testing using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@SpringBootTest"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure the web environment (", (0,jsx_runtime.jsx)(_components.code, {
          children: "MOCK"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RANDOM_PORT"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DEFINED_PORT"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NONE"
        }), ") and choose the appropriate mode for each test scenario"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write integration tests using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TestRestTemplate"
        }), " for REST endpoints and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WebTestClient"
        }), " for WebFlux"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply test slices (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WebMvcTest"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@DataJpaTest"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@JsonTest"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RestClientTest"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WebFluxTest"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@DataMongoTest"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@DataRedisTest"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@DataLdapTest"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@DataNeo4jTest"
        }), ") to load only the necessary Spring configuration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Replace real Spring beans with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@MockBean"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@SpyBean"
        }), " for focused slice tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure test-specific properties using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@TestPropertySource"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@DynamicPropertySource"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ActiveProfiles"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Capture application output with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@OutputCaptureExtension"
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
            children: "Spring Boot Testing → full integration test support"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@SpringBootTest"
            }), " loads the full application context"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Test Slices → focused test contexts for specific layers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@WebMvcTest"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@DataJpaTest"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@JsonTest"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TestConfiguration → override beans for testing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@TestConfiguration"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Bean"
            }), " for test-specific wiring"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Spring Boot Testing] --> B[\"@SpringBootTest\"]\r\n    A --> C[Test Slices]\r\n    A --> D[Utilities]\r\n    B --> B1[Full context]\r\n    B --> B2[WebEnvironment modes]\r\n    C --> C1[\"@WebMvcTest\"]\r\n    C --> C2[\"@DataJpaTest\"]\r\n    C --> C3[\"@JsonTest\"]\r\n    D --> D1[TestRestTemplate]\r\n    D --> D2[TestPropertyValues]"
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
              children: "@SpringBootTest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full application context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slowest, most comprehensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@WebMvcTest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web layer only (controllers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, mocks services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@DataJpaTest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JPA/DB layer only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, in-memory DB, rolls back transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@JsonTest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON serialization only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest slice, auto-configures Jackson/Gson"
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
              children: "@SpringBootTest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full integration test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@SpringBootTest(webEnvironment = RANDOM_PORT)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@AutoConfigureMockMvc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-configures MockMvc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mockMvc.perform(get(\"/api\"))"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TestRestTemplate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integration test HTTP client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "restTemplate.getForEntity(url, String.class)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Sql"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loads SQL scripts before/after test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Sql(\"/test-data.sql\")"
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
            children: "REST API Testing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@SpringBootTest"
            }), " + TestRestTemplate"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full HTTP integration test with random port"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repository Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@DataJpaTest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate JPA queries against embedded database"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controller Security"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@WebMvcTest"
            }), " + Security"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test authorization rules in isolation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which annotation loads the full application context for integration tests? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@SpringBootTest"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the fastest Spring Boot test slice? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@JsonTest"
        }), " → only tests JSON serialization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How do you make ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MockMvc"
        }), " available in a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WebMvcTest"
        }), "? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " It is auto-configured; inject via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Autowired"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "table-of-contents",
      children: "Table of Contents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#1-springboottest--full-context-testing",
          children: "@SpringBootTest — Full Context Testing"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#2-web-environment-modes",
          children: "Web Environment Modes"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#3-testresttemplate",
          children: "TestRestTemplate"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#4-webtestclient",
          children: "WebTestClient"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#5-slicing-tests",
          children: "Slicing Tests"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#6-mockbean-and-spybean",
          children: "MockBean and SpyBean"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#7-test-configuration",
          children: "Test Configuration"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#8-output-capture",
          children: "Output Capture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#9-summary",
          children: "Summary"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#10-exercises",
          children: "Exercises"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-springboottest--full-context-testing",
      children: "1. @SpringBootTest — Full Context Testing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootTest"
      }), " starts the full Spring application context — all beans, auto-configuration, and external configuration — just as if the application were running normally."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.fullcontext;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.context.ApplicationContext;\r\n\r\nimport javax.sql.DataSource;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n/**\r\n * @SpringBootTest loads the complete application context.\r\n * By default it searches for a @SpringBootApplication class\r\n * in the current package and its ancestors.\r\n */\r\n@SpringBootTest\r\nclass ApplicationContextTest {\r\n\r\n    @Autowired\r\n    private ApplicationContext applicationContext;\r\n\r\n    @Test\r\n    void contextLoads() {\r\n        assertThat(applicationContext).isNotNull();\r\n    }\r\n\r\n    @Test\r\n    void allExpectedBeansArePresent() {\r\n        assertThat(applicationContext.containsBean(\"dataSource\")).isTrue();\r\n        assertThat(applicationContext.containsBean(\"entityManagerFactory\")).isTrue();\r\n        assertThat(applicationContext.containsBean(\"transactionManager\")).isTrue();\r\n    }\r\n\r\n    @Test\r\n    void customBeansAreRegistered() {\r\n        assertThat(applicationContext.getBeanNamesForType(GreetingService.class))\r\n            .containsExactly(\"greetingService\");\r\n    }\r\n}\r\n\r\n// ---- Production Code ----\r\n\r\n@Service\r\nclass GreetingService {\r\n\r\n    private final GreetingRepository repository;\r\n\r\n    GreetingService(GreetingRepository repository) {\r\n        this.repository = repository;\r\n    }\r\n\r\n    String greet(String name) {\r\n        return \"Hello, \" + name + \"!\" + (repository.isSpecial(name) ? \" You're special!\" : \"\");\r\n    }\r\n}\r\n\r\ninterface GreetingRepository {\r\n    boolean isSpecial(String name);\r\n}\r\n\r\n@SpringBootApplication\r\nclass TestApplication {\r\n    public static void main(String[] args) {\r\n        SpringApplication.run(TestApplication.class, args);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-custom-context-configuration",
      children: "1.1 Custom Context Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.fullcontext;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.boot.test.context.SpringBootTest.WebEnvironment;\r\nimport org.springframework.test.context.ContextConfiguration;\r\n\r\n/**\r\n * Use @ContextConfiguration to specify explicit configuration classes\r\n * instead of relying on automatic @SpringBootApplication discovery.\r\n */\r\n@SpringBootTest(webEnvironment = WebEnvironment.NONE)\r\n@ContextConfiguration(classes = {TestDatabaseConfig.class, GreetingService.class})\r\nclass CustomContextTest {\r\n\r\n    @Autowired\r\n    private GreetingService greetingService;\r\n\r\n    @Test\r\n    void customContext() {\r\n        assertThat(greetingService).isNotNull();\r\n    }\r\n}\r\n\r\n@Configuration\r\nclass TestDatabaseConfig {\r\n\r\n    @Bean\r\n    DataSource dataSource() {\r\n        return new org.springframework.jdbc.datasource.DriverManagerDataSource(\r\n            \"jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1\");\r\n    }\r\n\r\n    @Bean\r\n    GreetingRepository greetingRepository() {\r\n        return name -> name.equals(\"admin\");\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-context-caching",
      children: "1.2 Context Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.fullcontext;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.context.ApplicationContext;\r\n\r\n/**\r\n * Spring caches the application context between tests.\r\n * If two tests use the same configuration, the context is reused.\r\n * A context is identified by its @SpringBootTest properties,\r\n * @ActiveProfiles, @ContextConfiguration classes, and command-line args.\r\n *\r\n * Context caching dramatically reduces test execution time\r\n * in large test suites. Contexts are evicted by:\r\n * - @DirtiesContext\r\n * - Different @ActiveProfiles\r\n * - Different property values\r\n * - Different test slice annotations\r\n */\r\n@SpringBootTest\r\nclass ContextCachingTest {\r\n\r\n    @Autowired\r\n    private ApplicationContext ctx;\r\n\r\n    @Test\r\n    void testA() {\r\n        // Uses the same context as testB\r\n    }\r\n\r\n    @Test\r\n    void testB() {\r\n        // Shares context with testA\r\n    }\r\n}\r\n\r\n@SpringBootTest\r\n@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)\r\nclass DirtyContextTest {\r\n\r\n    @Autowired\r\n    private ApplicationContext ctx;\r\n\r\n    @Test\r\n    void eachTestGetsFreshContext() {\r\n        // Every test method gets a brand-new ApplicationContext\r\n    }\r\n\r\n    @Test\r\n    void freshContextAgain() {\r\n        // Seed data, mocks, etc. are reset\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\r\nUse test slices like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WebMvcTest"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@DataJpaTest"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@SpringBootTest"
        }), " for faster, more focused tests."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\r\nAvoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@SpringBootTest"
        }), " in unit tests → it starts the full context and dramatically slows down your test suite."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-web-environment-modes",
      children: "2. Web Environment Modes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootTest(webEnvironment = ...)"
      }), " controls how the web server is started:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MOCK"
        }), " — loads a mock web environment (MockMvc), no real server"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RANDOM_PORT"
        }), " — starts the real server on a random available port"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "DEFINED_PORT"
        }), " — starts the real server on the configured port"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "NONE"
        }), " — loads the context without any web environment"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.webenv;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.boot.test.web.client.TestRestTemplate;\r\nimport org.springframework.boot.test.web.server.LocalServerPort;\r\nimport org.springframework.boot.test.mock.mockito.MockBean;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\nimport static org.mockito.Mockito.when;\r\n\r\n/**\r\n * MOCK — starts a mock Servlet environment without a real server.\r\n * This is the default. Use @AutoConfigureMockMvc to inject MockMvc.\r\n */\r\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)\r\nclass MockWebEnvironmentTest {\r\n\r\n    @Autowired\r\n    private org.springframework.test.web.servlet.MockMvc mockMvc;\r\n\r\n    @MockBean\r\n    private GreetingService greetingService;\r\n\r\n    @Test\r\n    void mockMvcWorks() throws Exception {\r\n        when(greetingService.greet(\"Alice\")).thenReturn(\"Hello, Alice!\");\r\n\r\n        var request = org.springframework.test.web.servlet.request.MockMvcRequestBuilders\r\n            .get(\"/greet?name=Alice\");\r\n        mockMvc.perform(request)\r\n            .andExpect(org.springframework.test.web.servlet.result.MockMvcResultMatchers\r\n                .status().isOk())\r\n            .andExpect(org.springframework.test.web.servlet.result.MockMvcResultMatchers\r\n                .content().string(\"Hello, Alice!\"));\r\n    }\r\n}\r\n\r\n/**\r\n * RANDOM_PORT — real server on a random port. Use TestRestTemplate\r\n * or WebTestClient as the HTTP client.\r\n */\r\n@SpringBootTest(\r\n    webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT\r\n)\r\nclass RandomPortTest {\r\n\r\n    @LocalServerPort\r\n    private int port;\r\n\r\n    @Autowired\r\n    private TestRestTemplate restTemplate;\r\n\r\n    @MockBean\r\n    private GreetingService greetingService;\r\n\r\n    @Test\r\n    void realServerResponds() {\r\n        when(greetingService.greet(\"Bob\")).thenReturn(\"Hi, Bob!\");\r\n\r\n        String response = restTemplate.getForObject(\r\n            \"http://localhost:\" + port + \"/greet?name=Bob\",\r\n            String.class\r\n        );\r\n\r\n        assertThat(response).isEqualTo(\"Hi, Bob!\");\r\n    }\r\n\r\n    @Test\r\n    void testRestTemplateInjectsPortAutomatically() {\r\n        when(greetingService.greet(\"Carol\")).thenReturn(\"Hello Carol\");\r\n\r\n        // TestRestTemplate configured with RANDOM_PORT auto-resolves\r\n        // relative URLs without needing LocalServerPort\r\n        String response = restTemplate.getForObject(\r\n            \"/greet?name=Carol\", String.class);\r\n        assertThat(response).isEqualTo(\"Hello Carol\");\r\n    }\r\n}\r\n\r\n/**\r\n * DEFINED_PORT — real server on the configured port (e.g., server.port=8080).\r\n * Use caution in CI — port conflicts cause failures.\r\n */\r\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)\r\nclass DefinedPortTest {\r\n\r\n    @Autowired\r\n    private TestRestTemplate restTemplate;\r\n\r\n    @Test\r\n    void usesConfiguredPort() {\r\n        // Uses server.port from application.properties (or 8080 default)\r\n        String response = restTemplate.getForObject(\r\n            \"/greet?name=Dave\", String.class);\r\n        assertThat(response).contains(\"Dave\");\r\n    }\r\n}\r\n\r\n/**\r\n * NONE — no web environment at all. Use for testing services,\r\n * repositories, and non-web components in a full context.\r\n */\r\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)\r\nclass NoWebEnvironmentTest {\r\n\r\n    @Autowired\r\n    private GreetingService greetingService;\r\n\r\n    @MockBean\r\n    private GreetingRepository greetingRepository;\r\n\r\n    @Test\r\n    void serviceLayerOnly() {\r\n        when(greetingRepository.isSpecial(\"Eve\")).thenReturn(true);\r\n\r\n        String result = greetingService.greet(\"Eve\");\r\n\r\n        assertThat(result).contains(\"special\");\r\n    }\r\n}\r\n\r\n@RestController\r\nclass GreetingController {\r\n\r\n    private final GreetingService greetingService;\r\n\r\n    GreetingController(GreetingService greetingService) {\r\n        this.greetingService = greetingService;\r\n    }\r\n\r\n    @GetMapping(\"/greet\")\r\n    String greet(@RequestParam String name) {\r\n        return greetingService.greet(name);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-localserverport",
      children: "2.1 LocalServerPort"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.webenv;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.boot.test.web.server.LocalServerPort;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n/**\r\n * @LocalServerPort injects the actual port the server started on.\r\n * Essential when using RANDOM_PORT mode.\r\n */\r\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\r\nclass LocalServerPortTest {\r\n\r\n    @LocalServerPort\r\n    private int port;\r\n\r\n    @Test\r\n    void portIsInjected() {\r\n        assertThat(port).isGreaterThan(0);\r\n        System.out.println(\"Server running on port: \" + port);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-testresttemplate",
      children: "3. TestRestTemplate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TestRestTemplate"
      }), " is a convenience wrapper around Spring's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RestTemplate"
      }), ", pre-configured for integration testing. It is automatically available when using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootTest"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RANDOM_PORT"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DEFINED_PORT"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-basic-rest-template-operations",
      children: "3.1 Basic REST Template Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.testresttemplate;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.boot.test.web.client.TestRestTemplate;\r\nimport org.springframework.http.*;\r\n\r\nimport java.util.Map;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\r\nclass TestRestTemplateTest {\r\n\r\n    @Autowired\r\n    private TestRestTemplate restTemplate;\r\n\r\n    @Test\r\n    void getForEntity() {\r\n        ResponseEntity<String> response = restTemplate.getForEntity(\r\n            \"/greet?name=Alice\", String.class);\r\n\r\n        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);\r\n        assertThat(response.getBody()).contains(\"Alice\");\r\n    }\r\n\r\n    @Test\r\n    void getForEntityWithHeaders() {\r\n        HttpHeaders headers = new HttpHeaders();\r\n        headers.set(\"Accept\", \"application/json\");\r\n        HttpEntity<Void> entity = new HttpEntity<>(headers);\r\n\r\n        ResponseEntity<String> response = restTemplate.exchange(\r\n            \"/greet?name=Bob\",\r\n            HttpMethod.GET,\r\n            entity,\r\n            String.class\r\n        );\r\n\r\n        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);\r\n    }\r\n\r\n    @Test\r\n    void postForEntity() {\r\n        var newGreeting = new GreetingRequest(\"Carol\", \"formal\");\r\n\r\n        ResponseEntity<GreetingResponse> response = restTemplate.postForEntity(\r\n            \"/greet/custom\",\r\n            newGreeting,\r\n            GreetingResponse.class\r\n        );\r\n\r\n        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);\r\n        assertThat(response.getBody().message()).contains(\"Carol\");\r\n    }\r\n\r\n    @Test\r\n    void exchangeWithCustomHeaders() {\r\n        HttpHeaders headers = new HttpHeaders();\r\n        headers.setContentType(MediaType.APPLICATION_JSON);\r\n        headers.setBearerAuth(\"test-token\");\r\n\r\n        var body = new GreetingRequest(\"Dave\", \"casual\");\r\n        HttpEntity<GreetingRequest> request = new HttpEntity<>(body, headers);\r\n\r\n        ResponseEntity<GreetingResponse> response = restTemplate.exchange(\r\n            \"/greet/custom\",\r\n            HttpMethod.POST,\r\n            request,\r\n            GreetingResponse.class\r\n        );\r\n\r\n        assertThat(response.getStatusCode().is2xxSuccessful()).isTrue();\r\n    }\r\n\r\n    @Test\r\n    void getForObject() {\r\n        String response = restTemplate.getForObject(\r\n            \"/greet?name=Eve\", String.class);\r\n        assertThat(response).contains(\"Eve\");\r\n    }\r\n\r\n    @Test\r\n    void postForObject() {\r\n        var request = new GreetingRequest(\"Frank\", \"polite\");\r\n        GreetingResponse response = restTemplate.postForObject(\r\n            \"/greet/custom\", request, GreetingResponse.class);\r\n        assertThat(response.message()).contains(\"Frank\");\r\n    }\r\n\r\n    @Test\r\n    void deleteRequest() {\r\n        restTemplate.delete(\"/greet/42\");\r\n        // No body expected — verify via subsequent GET or service mock\r\n    }\r\n\r\n    @Test\r\n    void putRequest() {\r\n        var update = new GreetingRequest(\"Grace\", \"updated\");\r\n        restTemplate.put(\"/greet/42\", update);\r\n    }\r\n\r\n    @Test\r\n    void errorHandling() {\r\n        ResponseEntity<String> response = restTemplate.getForEntity(\r\n            \"/greet?name=\", String.class);\r\n        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);\r\n    }\r\n}\r\n\r\nrecord GreetingRequest(String name, String style) {}\r\nrecord GreetingResponse(String message) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-testresttemplate-with-basic-auth",
      children: "3.2 TestRestTemplate with Basic Auth"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.testresttemplate;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.boot.test.web.client.TestRestTemplate;\r\nimport org.springframework.http.*;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\r\nclass AuthenticatedRestTemplateTest {\r\n\r\n    @Test\r\n    void withBasicAuth() {\r\n        // TestRestTemplate supports basic auth out of the box\r\n        TestRestTemplate authTemplate = new TestRestTemplate(\r\n            \"admin\", \"password\");\r\n\r\n        ResponseEntity<String> response = authTemplate.getForEntity(\r\n            \"/admin/dashboard\", String.class);\r\n\r\n        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);\r\n    }\r\n\r\n    @Test\r\n    void withoutAuth() {\r\n        var restTemplate = new TestRestTemplate();\r\n\r\n        ResponseEntity<String> response = restTemplate.getForEntity(\r\n            \"/admin/dashboard\", String.class);\r\n\r\n        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.UNAUTHORIZED);\r\n    }\r\n\r\n    @Test\r\n    void customHttpClient() {\r\n        // TestRestTemplate can be configured with a custom HttpClient\r\n        // for advanced scenarios (SSL, proxies, connection pooling)\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-webtestclient",
      children: "4. WebTestClient"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "WebTestClient"
      }), " is a reactive HTTP client designed for testing WebFlux endpoints. It also works with MVC endpoints when used with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@AutoConfigureWebTestClient"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-basic-webtestclient-usage",
      children: "4.1 Basic WebTestClient Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.webtestclient;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.test.web.reactive.server.WebTestClient;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n/**\r\n * WebTestClient works with both WebFlux and MVC applications.\r\n * It provides a fluent DSL for defining requests and assertions.\r\n */\r\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\r\n@AutoConfigureWebTestClient\r\nclass WebTestClientTest {\r\n\r\n    @Autowired\r\n    private WebTestClient webTestClient;\r\n\r\n    @Test\r\n    void getRequest() {\r\n        webTestClient.get()\r\n            .uri(\"/greet?name=Alice\")\r\n            .exchange()\r\n            .expectStatus().isOk()\r\n            .expectBody(String.class)\r\n            .value(body -> assertThat(body).contains(\"Alice\"));\r\n    }\r\n\r\n    @Test\r\n    void postRequest() {\r\n        var request = new GreetingRequest(\"Bob\", \"formal\");\r\n\r\n        webTestClient.post()\r\n            .uri(\"/greet/custom\")\r\n            .bodyValue(request)\r\n            .exchange()\r\n            .expectStatus().isCreated()\r\n            .expectBody(GreetingResponse.class)\r\n            .value(response -> assertThat(response.message()).contains(\"Bob\"));\r\n    }\r\n\r\n    @Test\r\n    void getWithQueryParams() {\r\n        webTestClient.get()\r\n            .uri(uriBuilder -> uriBuilder\r\n                .path(\"/greet\")\r\n                .queryParam(\"name\", \"Carol\")\r\n                .queryParam(\"style\", \"polite\")\r\n                .build())\r\n            .exchange()\r\n            .expectStatus().isOk();\r\n    }\r\n\r\n    @Test\r\n    void getWithHeaders() {\r\n        webTestClient.get()\r\n            .uri(\"/greet?name=Dave\")\r\n            .header(\"Accept-Language\", \"fr-FR\")\r\n            .exchange()\r\n            .expectStatus().isOk();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-webtestclient-with-json-path",
      children: "4.2 WebTestClient with JSON Path"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.webtestclient;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.test.web.reactive.server.WebTestClient;\r\n\r\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\r\n@AutoConfigureWebTestClient\r\nclass WebTestClientJsonTest {\r\n\r\n    @Autowired\r\n    private WebTestClient webTestClient;\r\n\r\n    @Test\r\n    void jsonPathAssertions() {\r\n        webTestClient.get()\r\n            .uri(\"/api/users/1\")\r\n            .exchange()\r\n            .expectStatus().isOk()\r\n            .expectBody()\r\n            .jsonPath(\"$.id\").isEqualTo(1)\r\n            .jsonPath(\"$.name\").isEqualTo(\"Alice\")\r\n            .jsonPath(\"$.email\").isEqualTo(\"alice@example.com\")\r\n            .jsonPath(\"$.roles\").isArray()\r\n            .jsonPath(\"$.roles.length()\").isEqualTo(2);\r\n    }\r\n\r\n    @Test\r\n    void jsonPathListAssertions() {\r\n        webTestClient.get()\r\n            .uri(\"/api/users\")\r\n            .exchange()\r\n            .expectStatus().isOk()\r\n            .expectBody()\r\n            .jsonPath(\"$\").isArray()\r\n            .jsonPath(\"$[0].name\").isEqualTo(\"Alice\")\r\n            .jsonPath(\"$[1].name\").isEqualTo(\"Bob\");\r\n    }\r\n\r\n    @Test\r\n    void postWithJsonPath() {\r\n        var newUser = new CreateUserRequest(\"Charlie\", \"charlie@example.com\");\r\n\r\n        webTestClient.post()\r\n            .uri(\"/api/users\")\r\n            .bodyValue(newUser)\r\n            .exchange()\r\n            .expectStatus().isCreated()\r\n            .expectBody()\r\n            .jsonPath(\"$.name\").isEqualTo(\"Charlie\")\r\n            .jsonPath(\"$.id\").isNumber();\r\n    }\r\n}\r\n\r\nrecord CreateUserRequest(String name, String email) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-webtestclient-for-webflux",
      children: "4.3 WebTestClient for WebFlux"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.webtestclient;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest;\r\nimport org.springframework.test.web.reactive.server.WebTestClient;\r\n\r\n/**\r\n * @WebFluxTest is the reactive equivalent of @WebMvcTest.\r\n * It loads only WebFlux controllers and related infrastructure.\r\n */\r\n@WebFluxTest(controllers = ReactiveGreetingController.class)\r\nclass WebFluxTestClientTest {\r\n\r\n    @Autowired\r\n    private WebTestClient webTestClient;\r\n\r\n    @Test\r\n    void reactiveEndpoint() {\r\n        webTestClient.get()\r\n            .uri(\"/reactive/greet?name=Dave\")\r\n            .exchange()\r\n            .expectStatus().isOk()\r\n            .expectBody(String.class)\r\n            .isEqualTo(\"Hello, Dave!\");\r\n    }\r\n}\r\n\r\n@RestController\r\nclass ReactiveGreetingController {\r\n\r\n    @GetMapping(\"/reactive/greet\")\r\n    String greet(@RequestParam String name) {\r\n        return \"Hello, \" + name + \"!\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-slicing-tests",
      children: "5. Slicing Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Test slices load only a subset of the application context — just the beans needed for a specific layer. This makes slice tests faster and more focused than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootTest"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-webmvctest--testing-controllers-only",
      children: "5.1 @WebMvcTest — Testing Controllers Only"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.slices;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;\r\nimport org.springframework.boot.test.mock.mockito.MockBean;\r\nimport org.springframework.test.web.servlet.MockMvc;\r\n\r\nimport static org.mockito.ArgumentMatchers.anyString;\r\nimport static org.mockito.BDDMockito.given;\r\nimport static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;\r\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;\r\n\r\n/**\r\n * @WebMvcTest auto-configures MockMvc and only scans\r\n * @Controller, @ControllerAdvice, and WebMvc-related beans.\r\n * Services, repositories, and other beans are NOT loaded.\r\n */\r\n@WebMvcTest(UserController.class)\r\nclass WebMvcSliceTest {\r\n\r\n    @Autowired\r\n    private MockMvc mockMvc;\r\n\r\n    @MockBean\r\n    private UserService userService;\r\n\r\n    @Test\r\n    void getUserReturnsOk() throws Exception {\r\n        User user = new User(1L, \"Alice\", \"alice@example.com\");\r\n        given(userService.findById(1L)).willReturn(java.util.Optional.of(user));\r\n\r\n        mockMvc.perform(get(\"/api/users/1\"))\r\n            .andExpect(status().isOk())\r\n            .andExpect(jsonPath(\"$.name\").value(\"Alice\"))\r\n            .andExpect(jsonPath(\"$.email\").value(\"alice@example.com\"));\r\n    }\r\n\r\n    @Test\r\n    void getUserReturns404() throws Exception {\r\n        given(userService.findById(99L)).willReturn(java.util.Optional.empty());\r\n\r\n        mockMvc.perform(get(\"/api/users/99\"))\r\n            .andExpect(status().isNotFound());\r\n    }\r\n\r\n    @Test\r\n    void createUser() throws Exception {\r\n        given(userService.create(anyString(), anyString()))\r\n            .willReturn(new User(2L, \"Bob\", \"bob@example.com\"));\r\n\r\n        String json = \"\"\"\r\n            {\"name\": \"Bob\", \"email\": \"bob@example.com\"}\r\n            \"\"\";\r\n\r\n        mockMvc.perform(post(\"/api/users\")\r\n                .contentType(\"application/json\")\r\n                .content(json))\r\n            .andExpect(status().isCreated())\r\n            .andExpect(jsonPath(\"$.name\").value(\"Bob\"));\r\n    }\r\n\r\n    @Test\r\n    void validationFailure() throws Exception {\r\n        String json = \"\"\"\r\n            {\"name\": \"\", \"email\": \"invalid\"}\r\n            \"\"\";\r\n\r\n        mockMvc.perform(post(\"/api/users\")\r\n                .contentType(\"application/json\")\r\n                .content(json))\r\n            .andExpect(status().isBadRequest())\r\n            .andExpect(jsonPath(\"$.errors\").exists());\r\n    }\r\n}\r\n\r\n@RestController\r\n@RequestMapping(\"/api/users\")\r\nclass UserController {\r\n\r\n    private final UserService userService;\r\n\r\n    UserController(UserService userService) {\r\n        this.userService = userService;\r\n    }\r\n\r\n    @GetMapping(\"/{id}\")\r\n    ResponseEntity<User> getUser(@PathVariable Long id) {\r\n        return userService.findById(id)\r\n            .map(ResponseEntity::ok)\r\n            .orElse(ResponseEntity.notFound().build());\r\n    }\r\n\r\n    @PostMapping\r\n    ResponseEntity<User> createUser(@Valid @RequestBody CreateUserDto dto) {\r\n        User user = userService.create(dto.name(), dto.email());\r\n        return ResponseEntity.status(HttpStatus.CREATED).body(user);\r\n    }\r\n}\r\n\r\nrecord User(Long id, String name, String email) {}\r\nrecord CreateUserDto(String name, @Email String email) {}\r\n\r\ninterface UserService {\r\n    java.util.Optional<User> findById(Long id);\r\n    User create(String name, String email);\r\n}\r\n\r\n@ControllerAdvice\r\nclass GlobalExceptionHandler {\r\n\r\n    @ExceptionHandler(MethodArgumentNotValidException.class)\r\n    ResponseEntity<Map<String, Object>> handleValidation(\r\n            MethodArgumentNotValidException ex) {\r\n        Map<String, Object> errors = new java.util.HashMap<>();\r\n        errors.put(\"errors\", ex.getBindingResult().getFieldErrors()\r\n            .stream().map(fe -> Map.of(fe.getField(), fe.getDefaultMessage()))\r\n            .toList());\r\n        return ResponseEntity.badRequest().body(errors);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-datajpatest--testing-repositories-only",
      children: "5.2 @DataJpaTest — Testing Repositories Only"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.slices;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;\r\nimport org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;\r\nimport org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;\r\n\r\nimport java.util.List;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n/**\r\n * @DataJpaTest configures an in-memory database (H2 by default),\r\n * scans @Entity classes, and configures JPA repositories.\r\n * It does NOT load services, controllers, or other beans.\r\n *\r\n * Transactions are rolled back after each test by default.\r\n */\r\n@DataJpaTest\r\n@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)\r\nclass DataJpaSliceTest {\r\n\r\n    @Autowired\r\n    private TestEntityManager entityManager;\r\n\r\n    @Autowired\r\n    private UserRepository userRepository;\r\n\r\n    @Test\r\n    void findByName() {\r\n        UserEntity saved = entityManager.persistAndFlush(\r\n            new UserEntity(null, \"Alice\", \"alice@example.com\"));\r\n\r\n        java.util.Optional<UserEntity> found = userRepository.findByEmail(\"alice@example.com\");\r\n\r\n        assertThat(found).isPresent();\r\n        assertThat(found.get().getName()).isEqualTo(\"Alice\");\r\n    }\r\n\r\n    @Test\r\n    void findAllByActive() {\r\n        entityManager.persist(new UserEntity(null, \"User1\", \"u1@x.com\"));\r\n        entityManager.persist(new UserEntity(null, \"User2\", \"u2@x.com\"));\r\n        entityManager.flush();\r\n\r\n        List<UserEntity> all = userRepository.findAll();\r\n        assertThat(all).hasSize(2);\r\n    }\r\n\r\n    @Test\r\n    void customQuery() {\r\n        entityManager.persistAndFlush(new UserEntity(null, \"Bob\", \"bob@x.com\"));\r\n\r\n        List<UserEntity> results = userRepository.searchByName(\"Bob\");\r\n        assertThat(results).hasSize(1);\r\n    }\r\n\r\n    @Test\r\n    void transactionRollback() {\r\n        // Each test is rolled back — no data leaks between tests\r\n        userRepository.save(new UserEntity(null, \"Temp\", \"temp@x.com\"));\r\n        assertThat(userRepository.count()).isEqualTo(1);\r\n    }\r\n\r\n    @Test\r\n    void testEntityManager() {\r\n        UserEntity user = new UserEntity(null, \"Carol\", \"carol@x.com\");\r\n        UserEntity managed = entityManager.persistFlushFind(user);\r\n\r\n        assertThat(managed.getId()).isNotNull();\r\n        assertThat(managed.getEmail()).isEqualTo(\"carol@x.com\");\r\n    }\r\n}\r\n\r\n@Entity\r\n@Table(name = \"users\")\r\nclass UserEntity {\r\n\r\n    @Id\r\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\r\n    private Long id;\r\n    private String name;\r\n    private String email;\r\n\r\n    public UserEntity() {}\r\n\r\n    public UserEntity(Long id, String name, String email) {\r\n        this.id = id;\r\n        this.name = name;\r\n        this.email = email;\r\n    }\r\n\r\n    public Long getId() { return id; }\r\n    public void setId(Long id) { this.id = id; }\r\n    public String getName() { return name; }\r\n    public void setName(String name) { this.name = name; }\r\n    public String getEmail() { return email; }\r\n    public void setEmail(String email) { this.email = email; }\r\n}\r\n\r\ninterface UserRepository extends JpaRepository<UserEntity, Long> {\r\n    java.util.Optional<UserEntity> findByEmail(String email);\r\n\r\n    @Query(\"SELECT u FROM UserEntity u WHERE u.name LIKE %:name%\")\r\n    List<UserEntity> searchByName(@Param(\"name\") String name);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-jsontest--testing-serialization",
      children: "5.3 @JsonTest — Testing Serialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.slices;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.autoconfigure.json.JsonTest;\r\nimport org.springframework.boot.test.json.JacksonTester;\r\nimport org.springframework.boot.test.json.JsonContent;\r\n\r\nimport java.time.LocalDate;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n/**\r\n * @JsonTest auto-configures Jackson (or Gson) and provides\r\n * JacksonTester for testing JSON serialization/deserialization.\r\n * It does NOT load any other beans.\r\n */\r\n@JsonTest\r\nclass JsonSliceTest {\r\n\r\n    @Autowired\r\n    private JacksonTester<UserDto> json;\r\n\r\n    @Test\r\n    void serializeUserDto() throws Exception {\r\n        UserDto user = new UserDto(\r\n            1L,\r\n            \"Alice\",\r\n            \"alice@example.com\",\r\n            LocalDate.of(2024, 1, 15)\r\n        );\r\n\r\n        JsonContent<UserDto> content = json.write(user);\r\n\r\n        assertThat(content).hasJsonPathNumberValue(\"$.id\");\r\n        assertThat(content).hasJsonPathStringValue(\"$.name\");\r\n        assertThat(content).extractingJsonPathStringValue(\"$.name\")\r\n            .isEqualTo(\"Alice\");\r\n        assertThat(content).extractingJsonPathStringValue(\"$.email\")\r\n            .isEqualTo(\"alice@example.com\");\r\n        assertThat(content).hasJsonPathStringValue(\"$.createdAt\");\r\n    }\r\n\r\n    @Test\r\n    void deserializeUserDto() throws Exception {\r\n        String jsonContent = \"\"\"\r\n            {\r\n                \"id\": 2,\r\n                \"name\": \"Bob\",\r\n                \"email\": \"bob@example.com\",\r\n                \"createdAt\": \"2024-06-01\"\r\n            }\r\n            \"\"\";\r\n\r\n        UserDto user = json.parseObject(jsonContent);\r\n\r\n        assertThat(user.id()).isEqualTo(2L);\r\n        assertThat(user.name()).isEqualTo(\"Bob\");\r\n        assertThat(user.email()).isEqualTo(\"bob@example.com\");\r\n        assertThat(user.createdAt()).isEqualTo(LocalDate.of(2024, 6, 1));\r\n    }\r\n\r\n    @Test\r\n    void nullFieldsAreOmitted() throws Exception {\r\n        UserDto user = new UserDto(null, null, \"test@x.com\", null);\r\n\r\n        JsonContent<UserDto> content = json.write(user);\r\n\r\n        assertThat(content).doesNotHaveJsonPath(\"$.id\");\r\n        assertThat(content).hasJsonPathStringValue(\"$.email\");\r\n    }\r\n}\r\n\r\nrecord UserDto(Long id, String name, String email, LocalDate createdAt) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-restclienttest--testing-rest-clients",
      children: "5.4 @RestClientTest — Testing REST Clients"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.slices;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.autoconfigure.web.client.RestClientTest;\r\nimport org.springframework.http.MediaType;\r\nimport org.springframework.test.web.client.MockRestServiceServer;\r\n\r\nimport static org.springframework.test.web.client.match.MockRestRequestMatchers.*;\r\nimport static org.springframework.test.web.client.response.MockRestResponseCreators.*;\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n/**\r\n * @RestClientTest auto-configures a MockRestServiceServer bound to\r\n * the specified REST client bean. It is used for testing classes\r\n * that use RestTemplate to call external APIs.\r\n */\r\n@RestClientTest(UserApiClient.class)\r\nclass RestClientSliceTest {\r\n\r\n    @Autowired\r\n    private UserApiClient client;\r\n\r\n    @Autowired\r\n    private MockRestServiceServer server;\r\n\r\n    @Test\r\n    void getUserById() {\r\n        server.expect(requestTo(\"/api/users/1\"))\r\n            .andExpect(method(org.springframework.http.HttpMethod.GET))\r\n            .andRespond(withSuccess(\"\"\"\r\n                {\"id\":1,\"name\":\"Alice\",\"email\":\"alice@example.com\"}\r\n                \"\"\", MediaType.APPLICATION_JSON));\r\n\r\n        UserDto user = client.findById(1L);\r\n\r\n        assertThat(user.name()).isEqualTo(\"Alice\");\r\n        server.verify();\r\n    }\r\n\r\n    @Test\r\n    void getUsers() {\r\n        server.expect(requestTo(\"/api/users\"))\r\n            .andExpect(method(org.springframework.http.HttpMethod.GET))\r\n            .andRespond(withSuccess(\"\"\"\r\n                [{\"id\":1,\"name\":\"Alice\",\"email\":\"a@x.com\"},\r\n                  {\"id\":2,\"name\":\"Bob\",\"email\":\"b@x.com\"}]\r\n                \"\"\", MediaType.APPLICATION_JSON));\r\n\r\n        var users = client.findAll();\r\n\r\n        assertThat(users).hasSize(2);\r\n        server.verify();\r\n    }\r\n\r\n    @Test\r\n    void serverError() {\r\n        server.expect(requestTo(\"/api/users/999\"))\r\n            .andRespond(withServerError());\r\n\r\n        java.util.Optional<UserDto> result = client.findByIdOptional(999L);\r\n        assertThat(result).isEmpty();\r\n    }\r\n\r\n    @Test\r\n    void createUser() {\r\n        server.expect(requestTo(\"/api/users\"))\r\n            .andExpect(method(org.springframework.http.HttpMethod.POST))\r\n            .andRespond(withCreatedEntity(\r\n                org.springframework.web.util.UriComponentsBuilder\r\n                    .fromUriString(\"/api/users/3\").build().toUri()));\r\n\r\n        Long id = client.create(\"Carol\", \"carol@x.com\");\r\n        assertThat(id).isEqualTo(3L);\r\n        server.verify();\r\n    }\r\n}\r\n\r\nclass UserApiClient {\r\n\r\n    private final RestTemplate restTemplate;\r\n    private final String baseUrl = \"https://api.example.com\";\r\n\r\n    UserApiClient(RestTemplateBuilder builder) {\r\n        this.restTemplate = builder.rootUri(baseUrl).build();\r\n    }\r\n\r\n    UserDto findById(Long id) {\r\n        return restTemplate.getForObject(\"/api/users/{id}\", UserDto.class, id);\r\n    }\r\n\r\n    List<UserDto> findAll() {\r\n        return java.util.Arrays.asList(\r\n            restTemplate.getForObject(\"/api/users\", UserDto[].class));\r\n    }\r\n\r\n    java.util.Optional<UserDto> findByIdOptional(Long id) {\r\n        try {\r\n            return java.util.Optional.ofNullable(findById(id));\r\n        } catch (Exception e) {\r\n            return java.util.Optional.empty();\r\n        }\r\n    }\r\n\r\n    Long create(String name, String email) {\r\n        var response = restTemplate.postForEntity(\r\n            \"/api/users\",\r\n            new CreateUserDto(name, email),\r\n            Void.class\r\n        );\r\n        String location = response.getHeaders().getLocation().toString();\r\n        return Long.parseLong(location.substring(location.lastIndexOf('/') + 1));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-datamongotest",
      children: "5.5 @DataMongoTest"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.slices;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;\r\nimport org.springframework.data.mongodb.core.MongoTemplate;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n/**\r\n * @DataMongoTest configures an embedded MongoDB instance,\r\n * scans @Document classes, and auto-configures MongoRepository beans.\r\n */\r\n@DataMongoTest\r\nclass MongoSliceTest {\r\n\r\n    @Autowired\r\n    private MongoTemplate mongoTemplate;\r\n\r\n    @Autowired\r\n    private ProductRepository productRepository;\r\n\r\n    @Test\r\n    void saveAndFind() {\r\n        ProductEntity product = new ProductEntity(\"Laptop\", \"Electronics\", 999.99);\r\n        ProductEntity saved = productRepository.save(product);\r\n\r\n        assertThat(saved.getId()).isNotNull();\r\n\r\n        ProductEntity found = productRepository.findById(saved.getId()).orElseThrow();\r\n        assertThat(found.getName()).isEqualTo(\"Laptop\");\r\n    }\r\n\r\n    @Test\r\n    void findByCategory() {\r\n        mongoTemplate.save(new ProductEntity(\"Phone\", \"Electronics\", 699.99));\r\n        mongoTemplate.save(new ProductEntity(\"Book\", \"Education\", 14.99));\r\n\r\n        var results = productRepository.findByCategory(\"Electronics\");\r\n        assertThat(results).hasSize(1);\r\n    }\r\n}\r\n\r\n@Document(collection = \"products\")\r\nclass ProductEntity {\r\n\r\n    @Id\r\n    private String id;\r\n    private String name;\r\n    private String category;\r\n    private double price;\r\n\r\n    public ProductEntity() {}\r\n\r\n    public ProductEntity(String name, String category, double price) {\r\n        this.name = name;\r\n        this.category = category;\r\n        this.price = price;\r\n    }\r\n\r\n    public String getId() { return id; }\r\n    public void setId(String id) { this.id = id; }\r\n    public String getName() { return name; }\r\n    public String getCategory() { return category; }\r\n    public double getPrice() { return price; }\r\n}\r\n\r\ninterface ProductRepository extends MongoRepository<ProductEntity, String> {\r\n    List<ProductEntity> findByCategory(String category);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-dataredistest",
      children: "5.6 @DataRedisTest"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.slices;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.autoconfigure.data.redis.DataRedisTest;\r\nimport org.springframework.data.redis.core.RedisTemplate;\r\n\r\n/**\r\n * @DataRedisTest configures an embedded Redis server,\r\n * scans @RedisHash classes, and auto-configures Redis repositories.\r\n */\r\n@DataRedisTest\r\nclass RedisSliceTest {\r\n\r\n    @Autowired\r\n    private RedisTemplate<String, String> redisTemplate;\r\n\r\n    @Autowired\r\n    private SessionRepository sessionRepository;\r\n\r\n    @Test\r\n    void saveAndRetrieve() {\r\n        Session session = new Session(\"sess-1\", \"alice\", java.time.Instant.now());\r\n        sessionRepository.save(session);\r\n\r\n        Session found = sessionRepository.findById(\"sess-1\").orElseThrow();\r\n        assertThat(found.getUserId()).isEqualTo(\"alice\");\r\n    }\r\n\r\n    @Test\r\n    void deleteSession() {\r\n        Session session = new Session(\"sess-2\", \"bob\", java.time.Instant.now());\r\n        sessionRepository.save(session);\r\n\r\n        sessionRepository.deleteById(\"sess-2\");\r\n        assertThat(sessionRepository.findById(\"sess-2\")).isEmpty();\r\n    }\r\n}\r\n\r\n@RedisHash(\"sessions\")\r\nclass Session {\r\n\r\n    @Id\r\n    private String id;\r\n    private String userId;\r\n    private java.time.Instant createdAt;\r\n\r\n    public Session() {}\r\n\r\n    public Session(String id, String userId, java.time.Instant createdAt) {\r\n        this.id = id;\r\n        this.userId = userId;\r\n        this.createdAt = createdAt;\r\n    }\r\n\r\n    public String getId() { return id; }\r\n    public String getUserId() { return userId; }\r\n    public java.time.Instant getCreatedAt() { return createdAt; }\r\n}\r\n\r\ninterface SessionRepository extends org.springframework.data.repository.CrudRepository<Session, String> {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "57-dataldaptest",
      children: "5.7 @DataLdapTest"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.slices;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.autoconfigure.data.ldap.DataLdapTest;\r\nimport org.springframework.ldap.core.LdapTemplate;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n/**\r\n * @DataLdapTest configures an embedded LDAP server,\r\n * scans @Entry classes, and configures LDAP repositories.\r\n */\r\n@DataLdapTest\r\nclass LdapSliceTest {\r\n\r\n    @Autowired\r\n    private LdapTemplate ldapTemplate;\r\n\r\n    @Test\r\n    void ldapContextLoads() {\r\n        assertThat(ldapTemplate).isNotNull();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "58-dataneo4jtest",
      children: "5.8 @DataNeo4jTest"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.slices;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.autoconfigure.data.neo4j.DataNeo4jTest;\r\n\r\n/**\r\n * @DataNeo4jTest configures an embedded Neo4j instance and\r\n * scans @Node classes and Neo4j repositories.\r\n */\r\n@DataNeo4jTest\r\nclass Neo4jSliceTest {\r\n\r\n    @Autowired\r\n    private PersonRepository personRepository;\r\n\r\n    @Test\r\n    void contextLoads() {\r\n        assertThat(personRepository).isNotNull();\r\n    }\r\n}\r\n\r\n@Node(\"Person\")\r\nclass PersonNode {\r\n\r\n    @Id\r\n    private Long id;\r\n    private String name;\r\n\r\n    public PersonNode() {}\r\n\r\n    public PersonNode(Long id, String name) {\r\n        this.id = id;\r\n        this.name = name;\r\n    }\r\n\r\n    public String getName() { return name; }\r\n}\r\n\r\ninterface PersonRepository extends org.springframework.data.neo4j.repository.Neo4jRepository<PersonNode, Long> {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-mockbean-and-spybean",
      children: "6. MockBean and SpyBean"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@MockBean"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SpyBean"
      }), " add mocks or spies to the Spring ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationContext"
      }), ". Any bean of the matching type in the context is replaced by the mock."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-mockbean",
      children: "6.1 @MockBean"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.mockbean;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.boot.test.mock.mockito.MockBean;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\nimport static org.mockito.ArgumentMatchers.*;\r\nimport static org.mockito.Mockito.*;\r\n\r\n/**\r\n * @MockBean creates a Mockito mock and registers it in the\r\n * Spring ApplicationContext, replacing any existing bean of\r\n * the same type.\r\n *\r\n * The mock is RESET after each test method — stubs and\r\n * interaction data are cleared automatically.\r\n */\r\n@SpringBootTest\r\nclass MockBeanTest {\r\n\r\n    @Autowired\r\n    private OrderService orderService;\r\n\r\n    @MockBean\r\n    private PaymentGateway paymentGateway;\r\n\r\n    @MockBean\r\n    private InventoryClient inventoryClient;\r\n\r\n    @MockBean\r\n    private NotificationService notificationService;\r\n\r\n    @Test\r\n    void successfulOrder() {\r\n        // Given\r\n        when(inventoryClient.checkStock(\"LAPTOP\", 1)).thenReturn(true);\r\n        when(paymentGateway.charge(anyString(), eq(999.99))).thenReturn(true);\r\n\r\n        // When\r\n        OrderResult result = orderService.placeOrder(\r\n            new OrderRequest(\"LAPTOP\", 1, \"card-123\"));\r\n\r\n        // Then\r\n        assertThat(result.success()).isTrue();\r\n        verify(paymentGateway).charge(\"card-123\", 999.99);\r\n        verify(inventoryClient).reserve(\"LAPTOP\", 1);\r\n        verify(notificationService).sendOrderConfirmation(anyString());\r\n    }\r\n\r\n    @Test\r\n    void outOfStock() {\r\n        // Given\r\n        when(inventoryClient.checkStock(\"LAPTOP\", 1)).thenReturn(false);\r\n\r\n        // When\r\n        OrderResult result = orderService.placeOrder(\r\n            new OrderRequest(\"LAPTOP\", 1, \"card-123\"));\r\n\r\n        // Then\r\n        assertThat(result.success()).isFalse();\r\n        assertThat(result.error()).contains(\"Out of stock\");\r\n\r\n        verify(paymentGateway, never()).charge(anyString(), anyDouble());\r\n        verify(notificationService, never()).sendOrderConfirmation(anyString());\r\n    }\r\n\r\n    @Test\r\n    void paymentDeclined() {\r\n        // Given\r\n        when(inventoryClient.checkStock(\"LAPTOP\", 1)).thenReturn(true);\r\n        when(paymentGateway.charge(anyString(), eq(999.99))).thenReturn(false);\r\n\r\n        // When\r\n        OrderResult result = orderService.placeOrder(\r\n            new OrderRequest(\"LAPTOP\", 1, \"card-123\"));\r\n\r\n        // Then\r\n        assertThat(result.success()).isFalse();\r\n        assertThat(result.error()).contains(\"Payment declined\");\r\n\r\n        // Verify inventory was reserved but rolled back\r\n        verify(inventoryClient).reserve(\"LAPTOP\", 1);\r\n        verify(notificationService).sendPaymentFailed(\"card-123\");\r\n    }\r\n}\r\n\r\n@Service\r\nclass OrderService {\r\n\r\n    private final PaymentGateway paymentGateway;\r\n    private final InventoryClient inventoryClient;\r\n    private final NotificationService notificationService;\r\n\r\n    OrderService(PaymentGateway paymentGateway, InventoryClient inventoryClient,\r\n                 NotificationService notificationService) {\r\n        this.paymentGateway = paymentGateway;\r\n        this.inventoryClient = inventoryClient;\r\n        this.notificationService = notificationService;\r\n    }\r\n\r\n    OrderResult placeOrder(OrderRequest request) {\r\n        if (!inventoryClient.checkStock(request.productCode(), request.quantity())) {\r\n            return new OrderResult(false, \"Out of stock: \" + request.productCode());\r\n        }\r\n\r\n        double total = 999.99; // simplified\r\n        inventoryClient.reserve(request.productCode(), request.quantity());\r\n\r\n        if (!paymentGateway.charge(request.paymentToken(), total)) {\r\n            notificationService.sendPaymentFailed(request.paymentToken());\r\n            return new OrderResult(false, \"Payment declined\");\r\n        }\r\n\r\n        notificationService.sendOrderConfirmation(\"order-\" + System.currentTimeMillis());\r\n        return new OrderResult(true, null);\r\n    }\r\n}\r\n\r\nrecord OrderRequest(String productCode, int quantity, String paymentToken) {}\r\nrecord OrderResult(boolean success, String error) {}\r\n\r\ninterface PaymentGateway {\r\n    boolean charge(String token, double amount);\r\n}\r\n\r\ninterface InventoryClient {\r\n    boolean checkStock(String productCode, int quantity);\r\n    void reserve(String productCode, int quantity);\r\n}\r\n\r\ninterface NotificationService {\r\n    void sendOrderConfirmation(String orderId);\r\n    void sendPaymentFailed(String token);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-spybean",
      children: "6.2 @SpyBean"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.mockbean;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.boot.test.mock.mockito.SpyBean;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\nimport static org.mockito.Mockito.*;\r\n\r\n/**\r\n * @SpyBean wraps a real bean in a Mockito spy.\r\n * Real methods are called by default, but specific methods\r\n * can be stubbed using doReturn/when.\r\n */\r\n@SpringBootTest\r\nclass SpyBeanTest {\r\n\r\n    @Autowired\r\n    private AuditService auditService;\r\n\r\n    @SpyBean\r\n    private AuditLogger auditLogger;\r\n\r\n    @Test\r\n    void spyPreservesRealBehaviour() {\r\n        // The real auditLogger.log() is called\r\n        auditService.recordEvent(\"user-login\", \"alice\");\r\n\r\n        verify(auditLogger).log(anyString());\r\n    }\r\n\r\n    @Test\r\n    void spyWithStubbedMethod() {\r\n        doThrow(new RuntimeException(\"Audit system unavailable\"))\r\n            .when(auditLogger).log(contains(\"CRITICAL\"));\r\n\r\n        // Non-critical logs still work through the real method\r\n        auditService.recordEvent(\"INFO\", \"normal event\");\r\n\r\n        // Critical logs throw because we stubbed log()\r\n        org.junit.jupiter.api.Assertions.assertThrows(RuntimeException.class,\r\n            () -> auditService.recordEvent(\"CRITICAL\", \"server error\"));\r\n    }\r\n\r\n    @Test\r\n    void spyVerifyInteractions() {\r\n        auditService.recordEvent(\"login\", \"bob\");\r\n        auditService.recordEvent(\"logout\", \"bob\");\r\n\r\n        verify(auditLogger, times(2)).log(anyString());\r\n    }\r\n}\r\n\r\n@Service\r\nclass AuditService {\r\n\r\n    private final AuditLogger auditLogger;\r\n\r\n    AuditService(AuditLogger auditLogger) {\r\n        this.auditLogger = auditLogger;\r\n    }\r\n\r\n    void recordEvent(String level, String message) {\r\n        auditLogger.log(\"[\" + level + \"] \" + message);\r\n    }\r\n}\r\n\r\n@Component\r\nclass AuditLogger {\r\n\r\n    void log(String message) {\r\n        // Real implementation writes to a database or file\r\n        System.out.println(\"AUDIT: \" + message);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-dirtiescontext--resetting-between-tests",
      children: "6.3 DirtiesContext — Resetting Between Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.mockbean;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.boot.test.mock.mockito.MockBean;\r\nimport org.springframework.test.annotation.DirtiesContext;\r\n\r\nimport static org.mockito.Mockito.when;\r\n\r\n/**\r\n * Normally, @MockBean mocks are reset after each test method.\r\n * However, if a test modifies the context in ways that affect\r\n * other beans (e.g., replacing a bean entirely, or using\r\n * a different configuration), use @DirtiesContext to force\r\n * context recreation.\r\n */\r\n@SpringBootTest\r\n@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)\r\nclass DirtiesContextTest {\r\n\r\n    @MockBean\r\n    private ConfigService configService;\r\n\r\n    @Test\r\n    void testOne() {\r\n        when(configService.get(\"feature-flag\")).thenReturn(\"enabled\");\r\n    }\r\n\r\n    @Test\r\n    void testTwo() {\r\n        // configService mock is fresh — no leftover stubs\r\n        // Even without @DirtiesContext, @MockBean is reset automatically\r\n        // This annotation is only needed for edge cases involving\r\n        // bean definitions or singleton bean state\r\n    }\r\n}\r\n\r\ninterface ConfigService {\r\n    String get(String key);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-test-configuration",
      children: "7. Test Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-testconfiguration",
      children: "7.1 @TestConfiguration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.testconfig;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.boot.test.context.TestConfiguration;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Primary;\r\nimport org.springframework.test.context.ContextConfiguration;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n/**\r\n * @TestConfiguration defines additional beans or overrides\r\n * for the test context. Unlike @Configuration, it is NOT\r\n * picked up by component scanning — it must be imported\r\n * explicitly or defined as an inner class.\r\n */\r\n@SpringBootTest\r\n@ContextConfiguration(classes = TestConfig.class)\r\nclass TestConfigurationTest {\r\n\r\n    @Autowired\r\n    private RateLimiter rateLimiter;\r\n\r\n    @Autowired\r\n    private CacheManager cacheManager;\r\n\r\n    @Test\r\n    void testBeansAreLoaded() {\r\n        assertThat(rateLimiter).isNotNull();\r\n        assertThat(cacheManager).isNotNull();\r\n    }\r\n}\r\n\r\n@TestConfiguration\r\nclass TestConfig {\r\n\r\n    @Bean\r\n    @Primary\r\n    RateLimiter testRateLimiter() {\r\n        return new RateLimiter(1000); // high limit for tests\r\n    }\r\n\r\n    @Bean\r\n    CacheManager testCacheManager() {\r\n        return new CacheManager(50); // small cache for tests\r\n    }\r\n}\r\n\r\nclass RateLimiter {\r\n\r\n    private final int maxRequests;\r\n\r\n    RateLimiter(int maxRequests) {\r\n        this.maxRequests = maxRequests;\r\n    }\r\n\r\n    boolean allowRequest() {\r\n        return maxRequests > 0;\r\n    }\r\n\r\n    int getMaxRequests() { return maxRequests; }\r\n}\r\n\r\nclass CacheManager {\r\n\r\n    private final int maxSize;\r\n\r\n    CacheManager(int maxSize) {\r\n        this.maxSize = maxSize;\r\n    }\r\n\r\n    int getMaxSize() { return maxSize; }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-testpropertysource",
      children: "7.2 @TestPropertySource"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.testconfig;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Value;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.test.context.TestPropertySource;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n/**\r\n * @TestPropertySource adds specific property values to the test\r\n * Environment. These take precedence over application.properties\r\n * and can be overridden by @DynamicPropertySource.\r\n */\r\n@SpringBootTest\r\n@TestPropertySource(properties = {\r\n    \"app.feature.payments=true\",\r\n    \"app.feature.notifications=false\",\r\n    \"app.limit=100\"\r\n})\r\nclass TestPropertySourceTest {\r\n\r\n    @Value(\"${app.feature.payments}\")\r\n    private boolean paymentsEnabled;\r\n\r\n    @Value(\"${app.feature.notifications}\")\r\n    private boolean notificationsEnabled;\r\n\r\n    @Value(\"${app.limit}\")\r\n    private int limit;\r\n\r\n    @Test\r\n    void propertiesAreSet() {\r\n        assertThat(paymentsEnabled).isTrue();\r\n        assertThat(notificationsEnabled).isFalse();\r\n        assertThat(limit).isEqualTo(100);\r\n    }\r\n}\r\n\r\n/**\r\n * Properties from @TestPropertySource can be loaded from files.\r\n */\r\n@SpringBootTest\r\n@TestPropertySource(locations = \"/test-config.properties\")\r\nclass FileBasedPropertyTest {\r\n\r\n    @Value(\"${test.server.url}\")\r\n    private String serverUrl;\r\n\r\n    @Test\r\n    void propertyFromFile() {\r\n        assertThat(serverUrl).isEqualTo(\"http://localhost:9999\");\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-dynamicpropertysource",
      children: "7.3 @DynamicPropertySource"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.testconfig;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Value;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.test.context.DynamicPropertyRegistry;\r\nimport org.springframework.test.context.DynamicPropertySource;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n/**\r\n * @DynamicPropertySource is used when property values must be\r\n * determined at runtime — for example, the port of a test\r\n * container (Testcontainers), or the URL of a random resource.\r\n *\r\n * The method must be static and accept a DynamicPropertyRegistry.\r\n */\r\n@SpringBootTest\r\nclass DynamicPropertySourceTest {\r\n\r\n    private static int redisPort = 6379; // In real usage, from Testcontainers\r\n\r\n    @Value(\"${redis.host}\")\r\n    private String redisHost;\r\n\r\n    @Value(\"${redis.port}\")\r\n    private int port;\r\n\r\n    @DynamicPropertySource\r\n    static void configureProperties(DynamicPropertyRegistry registry) {\r\n        registry.add(\"redis.host\", () -> \"localhost\");\r\n        registry.add(\"redis.port\", () -> String.valueOf(redisPort));\r\n        registry.add(\"app.test-timeout\", () -> \"5000\");\r\n    }\r\n\r\n    @Test\r\n    void dynamicPropertiesAreSet() {\r\n        assertThat(redisHost).isEqualTo(\"localhost\");\r\n        assertThat(port).isEqualTo(6379);\r\n    }\r\n}\r\n\r\n/**\r\n * Realistic example with Testcontainers integration.\r\n *\r\n * @DynamicPropertySource is the standard way to inject\r\n * Testcontainers connection parameters into the Spring context.\r\n */\r\n@SpringBootTest\r\n@Testcontainers\r\nclass PostgresDynamicPropertyTest {\r\n\r\n    @Container\r\n    static PostgreSQLContainer<?> postgres =\r\n        new PostgreSQLContainer<>(\"postgres:15-alpine\");\r\n\r\n    @DynamicPropertySource\r\n    static void configureDatabase(DynamicPropertyRegistry registry) {\r\n        registry.add(\"spring.datasource.url\", postgres::getJdbcUrl);\r\n        registry.add(\"spring.datasource.username\", postgres::getUsername);\r\n        registry.add(\"spring.datasource.password\", postgres::getPassword);\r\n    }\r\n\r\n    @Autowired\r\n    private javax.sql.DataSource dataSource;\r\n\r\n    @Test\r\n    void connectsToTestcontainersDb() throws Exception {\r\n        try (var conn = dataSource.getConnection()) {\r\n            assertThat(conn.isValid(2)).isTrue();\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-activeprofiles",
      children: "7.4 @ActiveProfiles"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.testconfig;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.core.env.Environment;\r\nimport org.springframework.test.context.ActiveProfiles;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n/**\r\n * @ActiveProfiles activates the specified bean definition profiles\r\n * for the test context. Beans annotated with @Profile(\"test\")\r\n * are loaded; those with @Profile(\"!test\") are excluded.\r\n */\r\n@SpringBootTest\r\n@ActiveProfiles(\"test\")\r\nclass ActiveProfilesTest {\r\n\r\n    @Autowired\r\n    private Environment env;\r\n\r\n    @Autowired\r\n    private DataInitializer dataInitializer;\r\n\r\n    @Test\r\n    void testProfileIsActive() {\r\n        assertThat(env.getActiveProfiles()).contains(\"test\");\r\n    }\r\n\r\n    @Test\r\n    void testBeansAreLoaded() {\r\n        assertThat(dataInitializer).isNotNull();\r\n    }\r\n}\r\n\r\n@Profile(\"test\")\r\n@Component\r\nclass DataInitializer {\r\n\r\n    private final DataSource dataSource;\r\n\r\n    DataInitializer(DataSource dataSource) {\r\n        this.dataSource = dataSource;\r\n    }\r\n\r\n    @PostConstruct\r\n    void init() {\r\n        System.out.println(\"Loading test data...\");\r\n    }\r\n}\r\n\r\n@Profile(\"!test\")\r\n@Component\r\nclass ProductionInitializer {\r\n    // Only loaded when \"test\" is NOT active\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-test-slice-auto-configuration",
      children: "7.5 Test Slice Auto-Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.testconfig;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.boot.autoconfigure.ImportAutoConfiguration;\r\nimport org.springframework.boot.test.autoconfigure.OverrideAutoConfiguration;\r\nimport org.springframework.boot.test.autoconfigure.core.AutoConfigureCache;\r\nimport org.springframework.boot.test.autoconfigure.filter.TypeExcludeFilters;\r\nimport org.springframework.boot.test.context.SpringBootTestContextBootstrapper;\r\nimport org.springframework.test.context.BootstrapWith;\r\n\r\n/**\r\n * Each test slice annotation is itself composed of meta-annotations\r\n * that configure auto-configuration, filtering, and type exclusion.\r\n *\r\n * For example, @WebMvcTest is composed of:\r\n *\r\n * @BootstrapWith(SpringBootTestContextBootstrapper.class)\r\n * @OverrideAutoConfiguration(enabled = false)\r\n * @TypeExcludeFilters(WebMvcTypeExcludeFilter.class)\r\n * @AutoConfigureCache\r\n * @AutoConfigureMockMvc\r\n * @AutoConfigureWebClient\r\n * @ImportAutoConfiguration\r\n *\r\n * Understanding the composition helps when creating custom\r\n * test slices or combining multiple slices.\r\n */\r\nclass SliceCompositionTest {\r\n\r\n    @Test\r\n    void sliceAnnotationsAreMetaAnnotated() {\r\n        // This test documents that slice annotations are\r\n        // composed of smaller building blocks\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!NOTE]\r\nInner ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@TestConfiguration"
        }), " classes override beans from the main config; use them to replace real services with mocks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-output-capture",
      children: "8. Output Capture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-outputcaptureextension",
      children: "8.1 @OutputCaptureExtension"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.output;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.junit.jupiter.api.extension.ExtendWith;\r\nimport org.springframework.boot.test.system.CapturedOutput;\r\nimport org.springframework.boot.test.system.OutputCaptureExtension;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n/**\r\n * @OutputCaptureExtension captures all System.out and System.err\r\n * output during the test. Injected via CapturedOutput parameter.\r\n */\r\n@ExtendWith(OutputCaptureExtension.class)\r\nclass OutputCaptureTest {\r\n\r\n    @Test\r\n    void captureStdout(CapturedOutput output) {\r\n        System.out.println(\"Hello, test!\");\r\n\r\n        assertThat(output).contains(\"Hello\");\r\n        assertThat(output).contains(\"test\");\r\n    }\r\n\r\n    @Test\r\n    void captureStderr(CapturedOutput output) {\r\n        System.err.println(\"ERROR: something went wrong\");\r\n\r\n        assertThat(output).contains(\"ERROR\");\r\n        assertThat(output).contains(\"went wrong\");\r\n    }\r\n\r\n    @Test\r\n    void captureLoggedOutput(CapturedOutput output) {\r\n        // If SLF4J is configured to log to console,\r\n        // log messages are also captured\r\n        org.slf4j.LoggerFactory.getLogger(\"test\").info(\"Log message\");\r\n\r\n        assertThat(output).contains(\"Log message\");\r\n    }\r\n\r\n    @Test\r\n    void outputIsIsolated(CapturedOutput output) {\r\n        // Output from previous tests does NOT leak into this one\r\n        assertThat(output).doesNotContain(\"Hello, test!\");\r\n    }\r\n\r\n    @Test\r\n    void multipleLines(CapturedOutput output) {\r\n        System.out.println(\"Line 1\");\r\n        System.out.println(\"Line 2\");\r\n        System.out.println(\"Line 3\");\r\n\r\n        String all = output.getAll();\r\n        assertThat(all).contains(\"Line 1\\nLine 2\\nLine 3\");\r\n    }\r\n\r\n    @Test\r\n    void outputWithoutAnnotation(CapturedOutput output) {\r\n        // Without @ExtendWith(OutputCaptureExtension.class),\r\n        // CapturedOutput parameter injection would fail.\r\n        // The annotation must be present at the class or method level.\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-using-outputcapture-in-springboottest",
      children: "8.2 Using OutputCapture in @SpringBootTest"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package springboot.output;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.boot.test.system.CapturedOutput;\r\nimport org.springframework.boot.test.system.OutputCaptureExtension;\r\nimport org.springframework.boot.test.mock.mockito.MockBean;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n/**\r\n * OutputCapture works with Spring Boot integration tests too.\r\n */\r\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)\r\nclass SpringBootOutputCaptureTest {\r\n\r\n    @Autowired\r\n    private GreetingService greetingService;\r\n\r\n    @Test\r\n    void serviceLogsOutput(CapturedOutput output) {\r\n        greetingService.greet(\"Alice\");\r\n\r\n        assertThat(output).contains(\"Greeting Alice\");\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-summary",
      children: "9. Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This chapter covered the complete Spring Boot testing framework, from full-context integration tests with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootTest"
      }), " to focused slice tests that load only the beans needed for a specific layer."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootTest"
      }), " was introduced as the primary annotation for loading the full application context. The four web environment modes — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MOCK"
      }), " (simulated web environment with MockMvc), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RANDOM_PORT"
      }), " (real server on a dynamic port), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DEFINED_PORT"
      }), " (real server on a fixed port), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NONE"
      }), " (no web environment) — were demonstrated with concrete examples. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@LocalServerPort"
      }), " annotation was shown for accessing the dynamically assigned port."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TestRestTemplate"
      }), " was covered in detail with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getForEntity"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "postForEntity"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "exchange"
      }), " with custom headers and request bodies, and basic authentication support. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WebTestClient"
      }), " provided a reactive alternative with its fluent DSL, JSON Path assertions, and compatibility with both WebFlux and MVC applications."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Test slices were the major focus: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@WebMvcTest"
      }), " for controllers with MockMvc, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@DataJpaTest"
      }), " for JPA repositories with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TestEntityManager"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@JsonTest"
      }), " for JSON serialization with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JacksonTester"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RestClientTest"
      }), " for REST clients with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MockRestServiceServer"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@WebFluxTest"
      }), " for reactive controllers, and the full family of data slices (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@DataMongoTest"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@DataRedisTest"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@DataLdapTest"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@DataNeo4jTest"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@MockBean"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SpyBean"
      }), " were shown for introducing mock objects into the Spring context, replacing real beans with controlled doubles. The automatic reset of mocks between tests and the use of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@DirtiesContext"
      }), " for managing context state were explained."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Test configuration options included ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TestConfiguration"
      }), " for defining test-specific beans, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TestPropertySource"
      }), " for inline and file-based property overrides, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@DynamicPropertySource"
      }), " for runtime-determined properties (with a Testcontainers example), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ActiveProfiles"
      }), " for activating Spring profiles in tests."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Finally, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@OutputCaptureExtension"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CapturedOutput"
      }), " was demonstrated for capturing and asserting on stdout, stderr, and logged output during test execution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-exercises",
      children: "10. Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-full-context-test",
      children: "Exercise 1: Full Context Test"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentService"
      }), " that coordinates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FraudDetection"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BankGateway"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReceiptService"
      }), ". Write a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootTest"
      }), " that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RANDOM_PORT"
        }), " web environment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TestRestTemplate"
        }), " to verify the REST endpoint"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@MockBean"
        }), " for all three dependencies"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests successful payment, fraud rejection, and bank failure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-mockmvc-controller-test",
      children: "Exercise 2: MockMvc Controller Test"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProductController"
      }), " with CRUD endpoints. Write ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@WebMvcTest"
      }), " tests that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Test ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET /api/products/{id}"
        }), " returns 200 and 404"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Test ", (0,jsx_runtime.jsx)(_components.code, {
          children: "POST /api/products"
        }), " with valid and invalid JSON bodies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Test ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DELETE /api/products/{id}"
        }), " returns 204"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify that validation errors return structured error responses"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@MockBean"
        }), " for the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ProductService"
        }), " dependency"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-datajpa-repository-test",
      children: "Exercise 3: DataJpa Repository Test"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CustomerRepository"
      }), " extending ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JpaRepository"
      }), " with custom queries:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "findByLastName(String lastName)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "findByEmail(String email)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Query"
        }), " that finds customers by the first letter of their last name"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Modifying"
        }), " query to activate a customer"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@DataJpaTest"
      }), " tests that verify each query."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-json-test",
      children: "Exercise 4: JSON Test"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Transaction"
      }), " record with fields: id, amount, currency, timestamp, status, description. Write ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@JsonTest"
      }), " tests that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serialise a Transaction and assert JSON Path values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deserialise a JSON string and assert record fields"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test null field handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test date/time format consistency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test currency enum serialisation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-restclienttest",
      children: "Exercise 5: RestClientTest"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WeatherApiClient"
      }), " that calls an external weather API using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RestTemplate"
      }), ". Write ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RestClientTest"
      }), " tests that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mock a successful response and verify the client parses it correctly"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mock a 404 and verify the client returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Optional.empty()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mock a timeout and verify the client handles it gracefully"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify the correct URL and HTTP method are used"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify request headers (e.g., API key, Accept header)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6-dynamicpropertysource-with-testcontainers",
      children: "Exercise 6: DynamicPropertySource with Testcontainers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set up a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootTest"
      }), " that uses Testcontainers to start a PostgreSQL container. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@DynamicPropertySource"
      }), " to inject the datasource URL, username, and password. Write a test that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verifies the database connection works"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Saves and retrieves an entity using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JpaRepository"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verifies the correct PostgreSQL version is running"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7-activeprofiles",
      children: "Exercise 7: ActiveProfiles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create three profile-specific configurations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Profile(\"dev\")"
        }), " — uses H2 in-memory database, verbose logging"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Profile(\"test\")"
        }), " — uses H2, minimal logging, mock mail server"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Profile(\"prod\")"
        }), " — uses PostgreSQL, WARN logging, real mail server"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootTest"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ActiveProfiles(\"test\")"
      }), " that verifies the correct beans are injected."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8-output-capture",
      children: "Exercise 8: Output Capture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LoggingService"
      }), " that logs messages at INFO, WARN, and ERROR levels. Test with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@OutputCaptureExtension"
      }), " that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "INFO messages appear in the captured output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ERROR messages appear in both the output and the error stream"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The log message format matches a regex pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log output is isolated between test methods"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9-datamongotest",
      children: "Exercise 9: DataMongoTest"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MovieRepository"
      }), " extending ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MongoRepository"
      }), " with methods:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "findByDirector(String director)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "findByReleaseYearBetween(int from, int to)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "findByTitleContainingIgnoreCase(String keyword)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@DataMongoTest"
      }), " tests that verify each method. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MongoTemplate"
      }), " for direct document operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10-complete-integration-test-suite",
      children: "Exercise 10: Complete Integration Test Suite"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a complete test suite for a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BlogController"
      }), " with the following test types:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@WebMvcTest"
        }), " — test controller validation, error handling, response format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@DataJpaTest"
        }), " — test ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PostRepository"
        }), " queries, pagination, and sorting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@JsonTest"
        }), " — test ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PostDto"
        }), " serialization with comments, tags, and timestamps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@RestClientTest"
        }), " — test ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ExternalCommentClient"
        }), " that fetches comments from an external service"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@SpringBootTest(RANDOM_PORT)"
        }), " — end-to-end test with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TestRestTemplate"
        }), " using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@MockBean"
        }), " for external dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@SpringBootTest"
        }), " with Testcontainers — test the full stack with a real PostgreSQL database"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@OutputCaptureExtension"
        }), " — verify that blog operations log the correct audit trail"]
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