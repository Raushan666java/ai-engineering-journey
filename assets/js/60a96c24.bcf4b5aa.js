"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[82288],{

/***/ 15566
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_10_di_container_md_60a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-10-di-container-md-60a.json
const site_docs_courses_java_10_di_container_md_60a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/10-di-container","title":"Dependency Injection & IoC Container","description":"Previous Auto-Configuration & Starters","source":"@site/docs/courses/java/10-di-container.md","sourceDirName":"courses/java","slug":"/java/10-di-container","permalink":"/ai-engineering-journey/java/10-di-container","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"10-di-container","slug":"/java/10-di-container","title":"Dependency Injection & IoC Container","sidebar_label":"Dependency Injection & IoC Container","sidebar_position":10},"sidebar":"course-java","previous":{"title":"Introduction to Spring & Spring Boot","permalink":"/ai-engineering-journey/java/09-spring-intro"},"next":{"title":"Auto-Configuration & Starters","permalink":"/ai-engineering-journey/java/11-auto-configuration"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/10-di-container.md


const frontMatter = {
	id: '10-di-container',
	slug: '/java/10-di-container',
	title: 'Dependency Injection & IoC Container',
	sidebar_label: 'Dependency Injection & IoC Container',
	sidebar_position: 10
};
const contentTitle = 'Dependency Injection & IoC Container';

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
  "value": "ApplicationContext — The Container Itself",
  "id": "applicationcontext--the-container-itself",
  "level": 2
}, {
  "value": "ClassPathXmlApplicationContext (XML Metadata)",
  "id": "classpathxmlapplicationcontext-xml-metadata",
  "level": 3
}, {
  "value": "AnnotationConfigApplicationContext",
  "id": "annotationconfigapplicationcontext",
  "level": 3
}, {
  "value": "GenericApplicationContext",
  "id": "genericapplicationcontext",
  "level": 3
}, {
  "value": "ConfigurableApplicationContext",
  "id": "configurableapplicationcontext",
  "level": 3
}, {
  "value": "Summary of ApplicationContext Implementations",
  "id": "summary-of-applicationcontext-implementations",
  "level": 3
}, {
  "value": "@Component &amp; Stereotype Annotations",
  "id": "component--stereotype-annotations",
  "level": 2
}, {
  "value": "The Annotation Hierarchy",
  "id": "the-annotation-hierarchy",
  "level": 3
}, {
  "value": "Basic @Component",
  "id": "basic-component",
  "level": 3
}, {
  "value": "@Service",
  "id": "service",
  "level": 3
}, {
  "value": "@Repository",
  "id": "repository",
  "level": 3
}, {
  "value": "@Controller and @RestController",
  "id": "controller-and-restcontroller",
  "level": 3
}, {
  "value": "What Gets Scanned?",
  "id": "what-gets-scanned",
  "level": 3
}, {
  "value": "Excluding and Filtering Components",
  "id": "excluding-and-filtering-components",
  "level": 3
}, {
  "value": "@Bean — Factory Methods",
  "id": "bean--factory-methods",
  "level": 2
}, {
  "value": "Basic @Bean Declaration",
  "id": "basic-bean-declaration",
  "level": 3
}, {
  "value": "Bean Names",
  "id": "bean-names",
  "level": 3
}, {
  "value": "initMethod and destroyMethod",
  "id": "initmethod-and-destroymethod",
  "level": 3
}, {
  "value": "@Bean(autowire = ...)",
  "id": "beanautowire--",
  "level": 3
}, {
  "value": "@Bean with Scopes",
  "id": "bean-with-scopes",
  "level": 3
}, {
  "value": "Conditional @Bean",
  "id": "conditional-bean",
  "level": 3
}, {
  "value": "@Autowired — Wiring Dependencies",
  "id": "autowired--wiring-dependencies",
  "level": 2
}, {
  "value": "Field Injection",
  "id": "field-injection",
  "level": 3
}, {
  "value": "Setter Injection",
  "id": "setter-injection",
  "level": 3
}, {
  "value": "Constructor Injection (Recommended)",
  "id": "constructor-injection-recommended",
  "level": 3
}, {
  "value": "Optional Injection",
  "id": "optional-injection",
  "level": 3
}, {
  "value": "@Autowired on Methods (Arbitrary Configuration)",
  "id": "autowired-on-methods-arbitrary-configuration",
  "level": 3
}, {
  "value": "@Autowired with Collections",
  "id": "autowired-with-collections",
  "level": 3
}, {
  "value": "@Qualifier — Disambiguating Beans",
  "id": "qualifier--disambiguating-beans",
  "level": 2
}, {
  "value": "Basic @Qualifier",
  "id": "basic-qualifier",
  "level": 3
}, {
  "value": "@Qualifier with @Bean",
  "id": "qualifier-with-bean",
  "level": 3
}, {
  "value": "Custom Qualifier Annotations",
  "id": "custom-qualifier-annotations",
  "level": 3
}, {
  "value": "@Primary — Primary Bean Selection",
  "id": "primary--primary-bean-selection",
  "level": 2
}, {
  "value": "@Primary on @Bean",
  "id": "primary-on-bean",
  "level": 3
}, {
  "value": "@Primary vs @Qualifier Precedence",
  "id": "primary-vs-qualifier-precedence",
  "level": 3
}, {
  "value": "Scope — Bean Lifecycle Boundaries",
  "id": "scope--bean-lifecycle-boundaries",
  "level": 2
}, {
  "value": "Singleton (Default)",
  "id": "singleton-default",
  "level": 3
}, {
  "value": "Prototype",
  "id": "prototype",
  "level": 3
}, {
  "value": "Request, Session, Application, WebSocket",
  "id": "request-session-application-websocket",
  "level": 3
}, {
  "value": "Why proxyMode is Required",
  "id": "why-proxymode-is-required",
  "level": 3
}, {
  "value": "WebSocket Scope",
  "id": "websocket-scope",
  "level": 3
}, {
  "value": "Scope Summary",
  "id": "scope-summary",
  "level": 3
}, {
  "value": "Lifecycle Callbacks",
  "id": "lifecycle-callbacks",
  "level": 2
}, {
  "value": "@PostConstruct and @PreDestroy",
  "id": "postconstruct-and-predestroy",
  "level": 3
}, {
  "value": "InitializingBean and DisposableBean",
  "id": "initializingbean-and-disposablebean",
  "level": 3
}, {
  "value": "Execution Order for a Single Bean",
  "id": "execution-order-for-a-single-bean",
  "level": 3
}, {
  "value": "Custom @Bean initMethod and destroyMethod",
  "id": "custom-bean-initmethod-and-destroymethod",
  "level": 3
}, {
  "value": "SmartLifecycle — Fine-Grained Lifecycle Control",
  "id": "smartlifecycle--fine-grained-lifecycle-control",
  "level": 3
}, {
  "value": "@Profile — Environment-Specific Beans",
  "id": "profile--environment-specific-beans",
  "level": 2
}, {
  "value": "@Profile on @Configuration",
  "id": "profile-on-configuration",
  "level": 3
}, {
  "value": "@Profile on @Bean",
  "id": "profile-on-bean",
  "level": 3
}, {
  "value": "Activating Profiles",
  "id": "activating-profiles",
  "level": 3
}, {
  "value": "Programmatic Profile Checking",
  "id": "programmatic-profile-checking",
  "level": 3
}, {
  "value": "Profile Expressions",
  "id": "profile-expressions",
  "level": 3
}, {
  "value": "Default Profile",
  "id": "default-profile",
  "level": 3
}, {
  "value": "Conditional Beans",
  "id": "conditional-beans",
  "level": 2
}, {
  "value": "@Conditional with the Condition Interface",
  "id": "conditional-with-the-condition-interface",
  "level": 3
}, {
  "value": "Spring Boot&#39;s @ConditionalOn* Family",
  "id": "spring-boots-conditionalon-family",
  "level": 3
}, {
  "value": "@ConditionalOnProperty",
  "id": "conditionalonproperty",
  "level": 4
}, {
  "value": "@ConditionalOnClass",
  "id": "conditionalonclass",
  "level": 4
}, {
  "value": "@ConditionalOnMissingBean",
  "id": "conditionalonmissingbean",
  "level": 4
}, {
  "value": "@ConditionalOnExpression",
  "id": "conditionalonexpression",
  "level": 4
}, {
  "value": "@ConditionalOnBean vs @ConditionalOnMissingBean",
  "id": "conditionalonbean-vs-conditionalonmissingbean",
  "level": 4
}, {
  "value": "Custom @Conditional Annotation",
  "id": "custom-conditional-annotation",
  "level": 3
}, {
  "value": "Combining Conditions (Logical AND)",
  "id": "combining-conditions-logical-and",
  "level": 3
}, {
  "value": "Lookup Method Injection",
  "id": "lookup-method-injection",
  "level": 2
}, {
  "value": "@Lookup",
  "id": "lookup",
  "level": 3
}, {
  "value": "@Lookup with Parameters (Spring 4.1+)",
  "id": "lookup-with-parameters-spring-41",
  "level": 3
}, {
  "value": "Provider (Alternative to @Lookup)",
  "id": "provider-alternative-to-lookup",
  "level": 3
}, {
  "value": "ObjectFactory (Spring&#39;s Own Provider)",
  "id": "objectfactory-springs-own-provider",
  "level": 3
}, {
  "value": "ApplicationEventPublisher — Event-Driven Beans",
  "id": "applicationeventpublisher--event-driven-beans",
  "level": 2
}, {
  "value": "Custom Event",
  "id": "custom-event",
  "level": 3
}, {
  "value": "Publishing Events",
  "id": "publishing-events",
  "level": 3
}, {
  "value": "@EventListener",
  "id": "eventlistener",
  "level": 3
}, {
  "value": "Listener Ordering",
  "id": "listener-ordering",
  "level": 3
}, {
  "value": "Conditional Event Handling with SpEL",
  "id": "conditional-event-handling-with-spel",
  "level": 3
}, {
  "value": "@TransactionalEventListener",
  "id": "transactionaleventlistener",
  "level": 3
}, {
  "value": "Listening to Multiple Event Types",
  "id": "listening-to-multiple-event-types",
  "level": 3
}, {
  "value": "Generic Events — Using ResolvableType",
  "id": "generic-events--using-resolvabletype",
  "level": 3
}, {
  "value": "Testing with Containers",
  "id": "testing-with-containers",
  "level": 2
}, {
  "value": "@SpringBootTest — Full Application Context",
  "id": "springboottest--full-application-context",
  "level": 3
}, {
  "value": "Test Slices",
  "id": "test-slices",
  "level": 3
}, {
  "value": "@MockBean — Mocking in Context",
  "id": "mockbean--mocking-in-context",
  "level": 3
}, {
  "value": "@SpyBean",
  "id": "spybean",
  "level": 3
}, {
  "value": "@Import for Focused Context",
  "id": "import-for-focused-context",
  "level": 3
}, {
  "value": "Dynamic Property Sources",
  "id": "dynamic-property-sources",
  "level": 3
}, {
  "value": "TestConfiguration — Local Overrides",
  "id": "testconfiguration--local-overrides",
  "level": 3
}, {
  "value": "Testing with Active Profiles",
  "id": "testing-with-active-profiles",
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
}, {
  "value": "Summary",
  "id": "summary",
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
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "dependency-injection--ioc-container",
        children: "Dependency Injection & IoC Container"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/09-spring-intro",
          children: "Introduction to Spring & Spring Boot"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/11-auto-configuration",
          children: "Auto-Configuration & Starters"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Inversion of Control (IoC) container is Spring's beating heart. Every Spring application — no matter how small — starts by bootstrapping an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationContext"
      }), ", which then manages the entire object graph of the application. This chapter covers every aspect of that container: how beans are declared, wired, scoped, and configured; how the container discovers components; how profiles and conditionals gate bean definitions; and how to test with the container in play."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every example in this chapter is complete and compilable. The recommended way to follow along is to create a Maven project with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-starter"
      }), " (or add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-context"
      }), " to a plain project). When a listing uses Spring Boot annotations such as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootTest"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@MockBean"
      }), ", the example assumes a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootApplication"
      }), " class exists in the default package."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter you should be able to:"
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
        href: "../../assets/images/lessons/java/10-di-container/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/10-di-container/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/10-di-container/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/10-di-container/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/10-di-container/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/10-di-container/visual-explanation.png",
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
        children: ["Bootstrap and configure all major ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ApplicationContext"
        }), " implementations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Distinguish stereotype annotations (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Component"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Service"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Repository"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Controller"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RestController"
        }), ") and explain their inclusion rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Declare beans via both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Component"
        }), " scanning and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Bean"
        }), " factory methods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Wire dependencies with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Autowired"
        }), " using field, setter, and constructor injection — and explain why constructor injection is preferred"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Resolve ambiguous dependencies using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Primary"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Qualifier"
        }), ", including custom qualifier annotations"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scope beans as singleton, prototype, request, session, application, or websocket and use proxy mode for narrower scopes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hook into the bean lifecycle with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PostConstruct"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PreDestroy"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "InitializingBean"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DisposableBean"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SmartLifecycle"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Activate and combine ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Profile"
        }), " conditions, including profile expressions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Gate bean definitions with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Conditional"
        }), " and the family of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConditionalOn*"
        }), " annotations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Inject prototype-scoped beans into singletons using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Lookup"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Publish and listen to application events with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ApplicationEventPublisher"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@EventListener"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@TransactionalEventListener"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Test application contexts with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@SpringBootTest"
        }), ", test slices, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@MockBean"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ApplicationContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central IoC container interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML -> AnnotationConfig -> SpringBoot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stereotypes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Component, @Service, @Repository, @Controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Service is a specialization of @Component"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Injection Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Field, setter, constructor injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor injection is preferred for required deps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bean Scopes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "singleton, prototype, request, session, application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singleton is default; prototype for stateful beans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifecycle Hooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@PostConstruct, @PreDestroy, SmartLifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SmartLifecycle for ordered startup/shutdown"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[ApplicationContext] --> B[Bean Declaration]\n    B --> C[Injection Types]\n    C --> D[Qualifiers & Primary]\n    D --> E[Bean Scopes]\n    E --> F[Lifecycle Hooks]\n    F --> G[Profiles & Conditionals]\n    G --> H[Event Publishing]\n    H --> I[Testing]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use constructor injection exclusively for required dependencies. Field injection makes unit testing harder and hides missing dependencies at construction time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applicationcontext--the-container-itself",
      children: "ApplicationContext — The Container Itself"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/10-di-container.png",
        alt: "Dependency Injection & IoC Container"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationContext"
      }), " is the central interface to the Spring IoC container. It extends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BeanFactory"
      }), " (the actual bean factory) and adds enterprise features: internationalization (", (0,jsx_runtime.jsx)(_components.code, {
        children: "MessageSource"
      }), "), event publication (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationEventPublisher"
      }), "), resource loading (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceLoader"
      }), "), and environment abstraction (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Environment"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "classpathxmlapplicationcontext-xml-metadata",
      children: "ClassPathXmlApplicationContext (XML Metadata)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before annotation-driven configuration became dominant, all Spring applications were wired via XML. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ClassPathXmlApplicationContext"
      }), " loads XML configuration files from the classpath."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.appctx;\n\n// resources/beans.xml:\n// <beans xmlns=\"http://www.springframework.org/schema/beans\"\n//        xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n//        xsi:schemaLocation=\"http://www.springframework.org/schema/beans\n//            https://www.springframework.org/schema/beans/spring-beans.xsd\">\n//     <bean id=\"greeter\" class=\"di.appctx.Greeter\">\n//         <property name=\"message\" value=\"Hello from XML!\"/>\n//     </bean>\n// </beans>\n\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\n\npublic class ClassPathXmlDemo {\n\n    public static void main(String[] args) {\n        try (ApplicationContext ctx = new ClassPathXmlApplicationContext(\"beans.xml\")) {\n            Greeter g = ctx.getBean(\"greeter\", Greeter.class);\n            g.sayHello();\n            System.out.println(\"Bean count: \" + ctx.getBeanDefinitionCount());\n        }\n    }\n}\n\nclass Greeter {\n\n    private String message;\n\n    public void setMessage(String message) {\n        this.message = message;\n    }\n\n    public void sayHello() {\n        System.out.println(message);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "annotationconfigapplicationcontext",
      children: "AnnotationConfigApplicationContext"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The modern replacement for XML. It accepts ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Configuration"
      }), " classes and component-scan packages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.appctx;\n\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.context.annotation.AnnotationConfigApplicationContext;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.ComponentScan;\nimport org.springframework.context.annotation.Configuration;\n\npublic class AnnotationConfigDemo {\n\n    public static void main(String[] args) {\n        // Option A: register @Configuration classes directly\n        try (AnnotationConfigApplicationContext ctx =\n                 new AnnotationConfigApplicationContext(AppConfig.class)) {\n            HelloService service = ctx.getBean(HelloService.class);\n            System.out.println(service.greet(\"Alice\"));\n        }\n\n        // Option B: scan a package\n        try (AnnotationConfigApplicationContext ctx =\n                 new AnnotationConfigApplicationContext()) {\n            ctx.scan(\"di.appctx\");\n            ctx.refresh();\n            HelloService service = ctx.getBean(HelloService.class);\n            System.out.println(service.greet(\"Bob\"));\n        }\n    }\n}\n\n@Configuration\n@ComponentScan(basePackages = \"di.appctx\")\nclass AppConfig {\n\n    @Bean\n    String appName() {\n        return \"AnnotationConfigDemo\";\n    }\n}\n\n@Service\nclass HelloService {\n\n    public String greet(String name) {\n        return \"Hello, \" + name + \"!\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "genericapplicationcontext",
      children: "GenericApplicationContext"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The most flexible implementation. You register bean definitions programmatically and then call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "refresh()"
      }), " to initialise the container."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.appctx;\n\nimport org.springframework.beans.factory.support.BeanDefinitionBuilder;\nimport org.springframework.beans.factory.support.DefaultListableBeanFactory;\nimport org.springframework.context.support.GenericApplicationContext;\n\npublic class GenericAppCtxDemo {\n\n    public static void main(String[] args) {\n        try (GenericApplicationContext ctx = new GenericApplicationContext()) {\n\n            // Register a bean definition programmatically\n            BeanDefinitionBuilder builder =\n                BeanDefinitionBuilder.rootBeanDefinition(Calculator.class)\n                    .addPropertyValue(\"factor\", 2);\n            ctx.registerBeanDefinition(\"calculator\", builder.getBeanDefinition());\n\n            // Register a singleton instance directly\n            ctx.registerBean(\"reporter\", Reporter.class, () -> new Reporter(\"Programmatic\"));\n\n            ctx.refresh();\n\n            Calculator calc = ctx.getBean(Calculator.class);\n            System.out.println(\"42 * 2 = \" + calc.multiply(42));\n\n            Reporter rep = ctx.getBean(Reporter.class);\n            System.out.println(rep.report());\n        }\n    }\n}\n\nclass Calculator {\n\n    private int factor;\n\n    public void setFactor(int factor) {\n        this.factor = factor;\n    }\n\n    public int multiply(int value) {\n        return value * factor;\n    }\n}\n\nclass Reporter {\n\n    private final String source;\n\n    public Reporter(String source) {\n        this.source = source;\n    }\n\n    public String report() {\n        return \"Created from: \" + source;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurableapplicationcontext",
      children: "ConfigurableApplicationContext"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Most ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationContext"
      }), " implementations also implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConfigurableApplicationContext"
      }), ", which exposes lifecycle methods: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "refresh()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "close()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "registerShutdownHook()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getEnvironment()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "addBeanFactoryPostProcessor()"
      }), ", and more."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.appctx;\n\nimport org.springframework.context.ConfigurableApplicationContext;\nimport org.springframework.context.annotation.AnnotationConfigApplicationContext;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\npublic class ConfigurableCtxDemo {\n\n    public static void main(String[] args) {\n        // registerShutdownHook ensures close() is called on JVM exit\n        try (ConfigurableApplicationContext ctx =\n                 new AnnotationConfigApplicationContext(SimpleConfig.class)) {\n            ctx.registerShutdownHook();\n            Runner r = ctx.getBean(Runner.class);\n            r.run();\n        }\n    }\n}\n\n@Configuration\nclass SimpleConfig {\n\n    @Bean\n    String greeting() {\n        return \"ConfigurableApplicationContext at work\";\n    }\n\n    @Bean\n    Runner runner(String greeting) {\n        return new Runner(greeting);\n    }\n}\n\nclass Runner {\n\n    private final String msg;\n\n    Runner(String msg) {\n        this.msg = msg;\n    }\n\n    void run() {\n        System.out.println(msg);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "summary-of-applicationcontext-implementations",
      children: "Summary of ApplicationContext Implementations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Config Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Refreshable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ClassPathXmlApplicationContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML on classpath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy projects, XML-based config"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "AnnotationConfigApplicationContext"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@Configuration"
            }), " classes, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@ComponentScan"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern Spring, default choice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GenericApplicationContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmatic bean definitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing, dynamic bean registration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ConfigurableApplicationContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interface (not concrete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lifecycle control, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "registerShutdownHook"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FileSystemXmlApplicationContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML on filesystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loading config from absolute paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WebApplicationContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Servlet-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web applications (Spring MVC)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "component--stereotype-annotations",
      children: "@Component & Stereotype Annotations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stereotype annotations mark classes as Spring-managed beans. The container discovers them through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "component scanning"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentScan"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootApplication"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-annotation-hierarchy",
      children: "The Annotation Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\n ├── @Service          (business logic / service layer)\n ├── @Repository        (data access / DAO layer — adds persistence exception translation)\n ├── @Controller        (MVC controller)\n └── @RestController    (@Controller + @ResponseBody)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every stereotype is meta-annotated with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component"
      }), ". Spring's component scanner treats any annotation that is itself annotated with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component"
      }), " as a candidate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-component",
      children: "Basic @Component"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.stereotypes;\n\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class Engine {\n\n    private final String type = \"V8\";\n\n    public String getType() {\n        return type;\n    }\n\n    public void start() {\n        System.out.println(type + \" engine started\");\n    }\n}\n\n@Component\npublic class Transmission {\n\n    private final String model = \"ZF-8HP\";\n\n    public String getModel() {\n        return model;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implicit bean name: the class name with a lower-case first letter — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "engine"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transmission"
      }), ". Override with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component(\"myEngine\")"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service",
      children: "@Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.stereotypes;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class VehicleService {\n\n    private final Engine engine;\n    private final Transmission transmission;\n\n    @Autowired\n    public VehicleService(Engine engine, Transmission transmission) {\n        this.engine = engine;\n        this.transmission = transmission;\n    }\n\n    public void describe() {\n        System.out.println(\"Vehicle with \" + engine.getType()\n            + \" engine and \" + transmission.getModel() + \" transmission\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Service"
      }), " is a pure specialization of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component"
      }), ". It adds no additional behaviour beyond what ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component"
      }), " provides. Its value is primarily convention and the ability to target AOP pointcuts at the service layer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "repository",
      children: "@Repository"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.stereotypes;\n\nimport org.springframework.dao.DataAccessException;\nimport org.springframework.stereotype.Repository;\n\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.Optional;\n\n@Repository\npublic class ProductRepository {\n\n    private final Map<Long, String> store = new HashMap<>();\n\n    public ProductRepository() {\n        store.put(1L, \"Laptop\");\n        store.put(2L, \"Monitor\");\n        store.put(3L, \"Keyboard\");\n    }\n\n    public Optional<String> findById(Long id) {\n        return Optional.ofNullable(store.get(id));\n    }\n\n    public void save(Long id, String name) {\n        store.put(id, name);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Repository"
      }), " is more than a marker. It triggers ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "persistence exception translation"
      }), ": Spring will wrap any platform-specific exception (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SQLException"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HibernateException"
      }), ") into a Spring ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataAccessException"
      }), " hierarchy. This is done by a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BeanPostProcessor"
      }), " that detects ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Repository"
      }), " annotations and registers the appropriate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PersistenceExceptionTranslator"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.stereotypes;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class ProductService {\n\n    private final ProductRepository repository;\n\n    @Autowired\n    public ProductService(ProductRepository repository) {\n        this.repository = repository;\n    }\n\n    public String getProductName(Long id) {\n        return repository.findById(id)\n            .orElseThrow(() -> new RuntimeException(\"Product not found\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "controller-and-restcontroller",
      children: "@Controller and @RestController"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.stereotypes;\n\nimport org.springframework.stereotype.Controller;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.ResponseBody;\nimport org.springframework.web.bind.annotation.RestController;\n\n// Traditional MVC controller — returns view names\n@Controller\npublic class PageController {\n\n    @GetMapping(\"/welcome\")\n    public String welcome() {\n        return \"welcome\"; // resolves to a view template (e.g. welcome.html)\n    }\n}\n\n// REST controller — returns data (includes @ResponseBody on every method)\n@RestController\npublic class HealthController {\n\n    @GetMapping(\"/health\")\n    public String health() {\n        return \"OK\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Internally, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RestController"
      }), " is defined as:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Target(ElementType.TYPE)\n@Retention(RetentionPolicy.RUNTIME)\n@Controller\n@ResponseBody\npublic @interface RestController {\n    String value() default \"\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-gets-scanned",
      children: "What Gets Scanned?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring's component scanner recognises:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Any class annotated with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Component"
        }), " (including meta-annotations)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Any class annotated with an annotation that itself carries ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Component"
        }), " — this includes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Service"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Repository"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Controller"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RestController"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Configuration"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ManagedBean"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Named"
        }), " (Jakarta), and others."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Classes are scanned only if they are in a package listed in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentScan"
      }), " or covered by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootApplication"
      }), " (which itself enables scanning from the declaring class's package)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.stereotypes;\n\nimport org.springframework.context.annotation.ComponentScan;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\n// Only scan this specific package; exclude filters\n@ComponentScan(\n    basePackages = \"di.stereotypes\",\n    excludeFilters = @ComponentScan.Filter(classes = {Deprecated.class})\n)\npublic class ScanConfig {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "excluding-and-filtering-components",
      children: "Excluding and Filtering Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.stereotypes;\n\nimport org.springframework.context.annotation.ComponentScan;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.FilterType;\nimport org.springframework.stereotype.Controller;\n\n@Configuration\n@ComponentScan(\n    basePackages = \"com.example\",\n    includeFilters = {\n        @ComponentScan.Filter(type = FilterType.ANNOTATION, classes = Controller.class)\n    },\n    excludeFilters = {\n        @ComponentScan.Filter(type = FilterType.REGEX, pattern = \"com\\\\.example\\\\.legacy\\\\..*\")\n    }\n)\nclass FilterConfig {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "FilterType"
      }), " supports: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ANNOTATION"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ASSIGNABLE_TYPE"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ASPECTJ"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "REGEX"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CUSTOM"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bean--factory-methods",
      children: "@Bean — Factory Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you cannot — or should not — annotate the target class with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component"
      }), " (third-party libraries, objects that need custom construction logic, or instances that require external configuration), declare a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Bean"
      }), " factory method inside a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Configuration"
      }), " class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-bean-declaration",
      children: "Basic @Bean Declaration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.bean;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\nimport java.time.Clock;\nimport java.time.ZoneId;\n\n@Configuration\npublic class BeanConfig {\n\n    @Bean\n    Clock systemUtcClock() {\n        return Clock.systemUTC();\n    }\n\n    @Bean\n    Clock systemDefaultZoneClock() {\n        return Clock.systemDefaultZone();\n    }\n\n    @Bean\n    TimerService timerService(Clock systemUtcClock) {\n        return new TimerService(systemUtcClock);\n    }\n}\n\nclass TimerService {\n\n    private final Clock clock;\n\n    TimerService(Clock clock) {\n        this.clock = clock;\n    }\n\n    long currentTimeMillis() {\n        return clock.millis();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring intercepts calls to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Bean"
      }), " methods inside ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Configuration"
      }), " classes and returns the same singleton instance (not a new one per call). This is achieved via a CGLIB proxy. For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Bean"
      }), " methods in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component"
      }), " classes this interception does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " happen — each call produces a new instance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bean-names",
      children: "Bean Names"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default the method name is the bean name. Override with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), " attribute:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.bean;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\nclass NamedBeanConfig {\n\n    @Bean(name = \"primaryDataSource\")\n    DataSource dataSource1() {\n        return new DataSource(\"jdbc:mysql://localhost:3306/db1\");\n    }\n\n    // Multiple aliases\n    @Bean(name = {\"secondaryDataSource\", \"fallbackDataSource\", \"ds2\"})\n    DataSource dataSource2() {\n        return new DataSource(\"jdbc:mysql://localhost:3306/db2\");\n    }\n}\n\nclass DataSource {\n\n    private final String url;\n\n    DataSource(String url) {\n        this.url = url;\n    }\n\n    String getUrl() {\n        return url;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "initmethod-and-destroymethod",
      children: "initMethod and destroyMethod"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.bean;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\nclass LifecycleConfig {\n\n    @Bean(initMethod = \"connect\", destroyMethod = \"disconnect\")\n    DatabaseConnection dbConnection() {\n        return new DatabaseConnection(\"jdbc:h2:mem:testdb\");\n    }\n}\n\nclass DatabaseConnection {\n\n    private final String url;\n    private boolean connected;\n\n    DatabaseConnection(String url) {\n        this.url = url;\n    }\n\n    public void connect() {\n        this.connected = true;\n        System.out.println(\"Connected to: \" + url);\n    }\n\n    public void disconnect() {\n        this.connected = false;\n        System.out.println(\"Disconnected from: \" + url);\n    }\n\n    boolean isConnected() {\n        return connected;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring infers a default ", (0,jsx_runtime.jsx)(_components.code, {
        children: "destroyMethod"
      }), " called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "close"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shutdown"
      }), " if they exist (to automatically invoke ", (0,jsx_runtime.jsx)(_components.code, {
        children: "close()"
      }), " on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ExecutorService"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataSource"
      }), ", etc.). Disable this inference with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Bean(destroyMethod = \"\")"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "beanautowire--",
      children: "@Bean(autowire = ...)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "autowire"
      }), " attribute on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Bean"
      }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deprecated"
      }), " since Spring 5.1. Prefer method parameters instead. For completeness, the old way:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean(autowire = Autowire.BY_TYPE)\npublic MyService myService() {\n    return new MyService(); // dependencies injected via setter by type\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This exists only for backwards compatibility. Modern Spring uses constructor injection through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Bean"
      }), " method parameters, as shown in every other example."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bean-with-scopes",
      children: "@Bean with Scopes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.bean;\n\nimport org.springframework.beans.factory.config.ConfigurableBeanFactory;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Scope;\n\n@Configuration\nclass ScopedBeanConfig {\n\n    @Bean\n    @Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)\n    WorkflowStep workflowStep() {\n        return new WorkflowStep();\n    }\n\n    @Bean\n    @Scope(\"prototype\")\n    Notification notification() {\n        return new Notification();\n    }\n}\n\nclass WorkflowStep {\n    // new instance every time\n}\n\nclass Notification {\n    // new instance every time\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conditional-bean",
      children: "Conditional @Bean"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.bean;\n\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\nclass ConditionalBeanConfig {\n\n    @Bean\n    @ConditionalOnProperty(name = \"feature.new-payment.enabled\", havingValue = \"true\")\n    PaymentGateway newPaymentGateway() {\n        return new PaymentGateway(\"New\");\n    }\n\n    @Bean\n    @ConditionalOnProperty(name = \"feature.new-payment.enabled\", havingValue = \"false\", matchIfMissing = true)\n    PaymentGateway legacyPaymentGateway() {\n        return new PaymentGateway(\"Legacy\");\n    }\n}\n\nclass PaymentGateway {\n\n    private final String version;\n\n    PaymentGateway(String version) {\n        this.version = version;\n    }\n\n    String getVersion() {\n        return version;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "autowired--wiring-dependencies",
      children: "@Autowired — Wiring Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Autowired"
      }), " tells Spring to inject a dependency. It can be applied to fields, constructors, setter methods, and arbitrary configuration methods."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "field-injection",
      children: "Field Injection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.autowired;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class FieldInjectionExample {\n\n    @Autowired\n    private GreetingService greetingService;\n\n    public void run() {\n        System.out.println(greetingService.greet(\"Field Injection\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Downsides:"
      }), " hard to unit-test (cannot inject mocks without reflection), hides dependencies, breaks final-field immutability, tightly couples the class to the container."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setter-injection",
      children: "Setter Injection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.autowired;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class SetterInjectionExample {\n\n    private GreetingService greetingService;\n\n    @Autowired\n    public void setGreetingService(GreetingService greetingService) {\n        this.greetingService = greetingService;\n    }\n\n    public void run() {\n        System.out.println(greetingService.greet(\"Setter Injection\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Better than field injection — swapping implementations in tests is possible via the setter. Still allows mutation after construction."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor-injection-recommended",
      children: "Constructor Injection (Recommended)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.autowired;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class ConstructorInjectionExample {\n\n    private final GreetingService greetingService;\n\n    @Autowired\n    public ConstructorInjectionExample(GreetingService greetingService) {\n        this.greetingService = greetingService;\n    }\n\n    public void run() {\n        System.out.println(greetingService.greet(\"Constructor Injection\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Since Spring 4.3, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Autowired"
      }), " on a constructor is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "optional"
      }), " if the class has only one constructor. The single-constructor rule means Spring will use it automatically:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.autowired;\n\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class SimplifiedConstructorInjection {\n\n    private final GreetingService greetingService;\n    private final FarewellService farewellService;\n\n    // No @Autowired needed — single constructor\n    public SimplifiedConstructorInjection(GreetingService greetingService,\n                                          FarewellService farewellService) {\n        this.greetingService = greetingService;\n        this.farewellService = farewellService;\n    }\n\n    public void run() {\n        System.out.println(greetingService.greet(\"Simplified\"));\n        System.out.println(farewellService.farewell());\n    }\n}\n\n@Service\nclass GreetingService {\n    String greet(String name) { return \"Hello, \" + name; }\n}\n\n@Service\nclass FarewellService {\n    String farewell() { return \"Goodbye!\"; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why constructor injection wins:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Constructor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Setter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Immutability"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "final"
            }), " fields"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor args"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setter call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reflection needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Required deps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional culture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional culture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circular dep detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate at startup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delayed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delayed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container coupling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boilerplate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "optional-injection",
      children: "Optional Injection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a dependency is not required, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Optional"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Autowired(required = false)"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Nullable"
      }), " (from Spring or JetBrains):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.autowired;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.lang.Nullable;\nimport org.springframework.stereotype.Component;\n\nimport java.util.Optional;\n\n@Component\npublic class OptionalDependencyDemo {\n\n    // Option 1: required = false\n    @Autowired(required = false)\n    private AuditService auditService;\n\n    // Option 2: Java Optional\n    private final CacheManager cacheManager;\n\n    public OptionalDependencyDemo(Optional<CacheManager> cacheManager) {\n        this.cacheManager = cacheManager.orElse(new NoOpCacheManager());\n    }\n\n    // Option 3: @Nullable\n    private final MetricsCollector metricsCollector;\n\n    public OptionalDependencyDemo(@Nullable MetricsCollector metricsCollector) {\n        this.metricsCollector = metricsCollector;\n    }\n\n    public void run() {\n        if (auditService != null) {\n            auditService.record(\"Operation performed\");\n        }\n        cacheManager.put(\"key\", \"value\");\n        if (metricsCollector != null) {\n            metricsCollector.increment(\"requests\");\n        }\n    }\n}\n\nclass AuditService {\n    void record(String event) { System.out.println(\"Audit: \" + event); }\n}\n\ninterface CacheManager {\n    void put(String key, String value);\n}\n\nclass NoOpCacheManager implements CacheManager {\n    public void put(String key, String value) { /* no-op */ }\n}\n\nclass MetricsCollector {\n    void increment(String name) { System.out.println(\"Metric: \" + name); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "autowired-on-methods-arbitrary-configuration",
      children: "@Autowired on Methods (Arbitrary Configuration)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.autowired;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class MethodInjectionDemo {\n\n    private Engine engine;\n    private Transmission transmission;\n\n    // Method injection — Spring calls this with matching beans\n    @Autowired\n    public void configureDrivetrain(Engine engine, Transmission transmission) {\n        this.engine = engine;\n        this.transmission = transmission;\n    }\n\n    public void run() {\n        engine.start();\n        System.out.println(\"Transmission: \" + transmission.getModel());\n    }\n}\n\n@Component\nclass Engine {\n    void start() { System.out.println(\"Engine started\"); }\n}\n\n@Component\nclass Transmission {\n    String getModel() { return \"8-Speed Automatic\"; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "autowired-with-collections",
      children: "@Autowired with Collections"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring can inject all beans of a compatible type into a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Map"
      }), ", or array:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.autowired;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Component;\nimport org.springframework.stereotype.Service;\n\nimport java.util.List;\nimport java.util.Map;\n\n@Component\npublic class CollectionInjectionDemo {\n\n    private final List<PaymentHandler> handlers;\n    private final Map<String, PaymentHandler> handlerMap;\n\n    @Autowired\n    public CollectionInjectionDemo(List<PaymentHandler> handlers,\n                                   Map<String, PaymentHandler> handlerMap) {\n        this.handlers = handlers;\n        this.handlerMap = handlerMap;\n    }\n\n    public void processAll() {\n        handlers.forEach(PaymentHandler::handle);\n        handlerMap.forEach((name, handler) ->\n            System.out.println(name + \" -> \" + handler.getClass().getSimpleName()));\n    }\n}\n\ninterface PaymentHandler {\n    void handle();\n}\n\n@Service\nclass CreditCardHandler implements PaymentHandler {\n    public void handle() { System.out.println(\"Processing credit card\"); }\n}\n\n@Service\nclass PayPalHandler implements PaymentHandler {\n    public void handle() { System.out.println(\"Processing PayPal\"); }\n}\n\n@Service\nclass CryptoHandler implements PaymentHandler {\n    public void handle() { System.out.println(\"Processing cryptocurrency\"); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List"
      }), " is ordered by the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Order"
      }), " annotation or the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Ordered"
      }), " interface. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Map"
      }), " key is the bean name."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "qualifier--disambiguating-beans",
      children: "@Qualifier — Disambiguating Beans"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When multiple beans of the same type exist, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Qualifier"
      }), " selects the specific one by name."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-qualifier",
      children: "Basic @Qualifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.qualifier;\n\nimport org.springframework.beans.factory.annotation.Qualifier;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class QualifierDemo {\n\n    private final MessageSender emailSender;\n    private final MessageSender smsSender;\n\n    public QualifierDemo(@Qualifier(\"emailSender\") MessageSender emailSender,\n                         @Qualifier(\"smsSender\") MessageSender smsSender) {\n        this.emailSender = emailSender;\n        this.smsSender = smsSender;\n    }\n\n    public void run() {\n        emailSender.send(\"Hello via email\");\n        smsSender.send(\"Hello via SMS\");\n    }\n}\n\ninterface MessageSender {\n    void send(String message);\n}\n\n@Component\n@Qualifier(\"emailSender\")\nclass EmailSender implements MessageSender {\n    public void send(String message) {\n        System.out.println(\"[Email] \" + message);\n    }\n}\n\n@Component\n@Qualifier(\"smsSender\")\nclass SmsSender implements MessageSender {\n    public void send(String message) {\n        System.out.println(\"[SMS] \" + message);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qualifier-with-bean",
      children: "@Qualifier with @Bean"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.qualifier;\n\nimport org.springframework.beans.factory.annotation.Qualifier;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\nclass QualifierBeanConfig {\n\n    @Bean\n    @Qualifier(\"primaryDb\")\n    DatabaseConfig primaryDb() {\n        return new DatabaseConfig(\"jdbc:mysql://primary:3306/db\");\n    }\n\n    @Bean\n    @Qualifier(\"reportingDb\")\n    DatabaseConfig reportingDb() {\n        return new DatabaseConfig(\"jdbc:mysql://reporting:3306/dw\");\n    }\n}\n\nclass DatabaseConfig {\n\n    private final String url;\n\n    DatabaseConfig(String url) {\n        this.url = url;\n    }\n\n    String getUrl() {\n        return url;\n    }\n}\n\n@Component\nclass ReportingService {\n\n    private final DatabaseConfig dbConfig;\n\n    public ReportingService(@Qualifier(\"reportingDb\") DatabaseConfig dbConfig) {\n        this.dbConfig = dbConfig;\n    }\n\n    String getDbUrl() {\n        return dbConfig.getUrl();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-qualifier-annotations",
      children: "Custom Qualifier Annotations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Creating a custom annotation avoids string literals scattered across the codebase:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.qualifier;\n\nimport org.springframework.beans.factory.annotation.Qualifier;\n\nimport java.lang.annotation.ElementType;\nimport java.lang.annotation.Retention;\nimport java.lang.annotation.RetentionPolicy;\nimport java.lang.annotation.Target;\n\n@Target({ElementType.FIELD, ElementType.PARAMETER, ElementType.METHOD,\n         ElementType.TYPE, ElementType.ANNOTATION_TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Qualifier\npublic @interface MessageType {\n    Channel value();\n\n    enum Channel {\n        EMAIL, SMS, PUSH\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using the custom qualifier:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.qualifier;\n\nimport org.springframework.stereotype.Component;\n\n@Component\n@MessageType(MessageType.Channel.EMAIL)\nclass CustomQualifierEmailSender implements MessageSender {\n    public void send(String message) {\n        System.out.println(\"[Custom-Email] \" + message);\n    }\n}\n\n@Component\n@MessageType(MessageType.Channel.SMS)\nclass CustomQualifierSmsSender implements MessageSender {\n    public void send(String message) {\n        System.out.println(\"[Custom-SMS] \" + message);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Injecting:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\nclass NotificationService {\n\n    private final MessageSender emailSender;\n    private final MessageSender smsSender;\n\n    public NotificationService(@MessageType(MessageType.Channel.EMAIL) MessageSender emailSender,\n                               @MessageType(MessageType.Channel.SMS) MessageSender smsSender) {\n        this.emailSender = emailSender;\n        this.smsSender = smsSender;\n    }\n\n    public void sendEmail(String msg) { emailSender.send(msg); }\n    public void sendSms(String msg) { smsSender.send(msg); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "primary--primary-bean-selection",
      children: "@Primary — Primary Bean Selection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When multiple beans of the same type exist and you want one to be the default (injected when no ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Qualifier"
      }), " is specified), mark it with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Primary"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.primary;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Primary;\nimport org.springframework.stereotype.Component;\n\n@Component\n@Primary\nclass DefaultCacheManager implements CacheManager {\n    public void put(String key, String value) {\n        System.out.println(\"[DefaultCache] \" + key + \" = \" + value);\n    }\n}\n\n@Component\nclass RedisCacheManager implements CacheManager {\n    public void put(String key, String value) {\n        System.out.println(\"[RedisCache] \" + key + \" = \" + value);\n    }\n}\n\n@Component\nclass PrimaryDemo {\n\n    private final CacheManager cacheManager;\n\n    // Injects DefaultCacheManager (the @Primary one)\n    public PrimaryDemo(CacheManager cacheManager) {\n        this.cacheManager = cacheManager;\n    }\n\n    public void run() {\n        cacheManager.put(\"key\", \"value\");\n    }\n}\n\ninterface CacheManager {\n    void put(String key, String value);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primary-on-bean",
      children: "@Primary on @Bean"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.primary;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Primary;\n\n@Configuration\nclass PrimaryBeanConfig {\n\n    @Bean\n    Serializer jsonSerializer() {\n        return new Serializer(\"JSON\");\n    }\n\n    @Bean\n    @Primary\n    Serializer xmlSerializer() {\n        return new Serializer(\"XML\");\n    }\n}\n\nclass Serializer {\n\n    private final String format;\n\n    Serializer(String format) {\n        this.format = format;\n    }\n\n    String getFormat() {\n        return format;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primary-vs-qualifier-precedence",
      children: "@Primary vs @Qualifier Precedence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Qualifier"
      }), " always wins over ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Primary"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Primary"
      }), " is a fallback default; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Qualifier"
      }), " is an explicit override."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.beans.factory.annotation.Qualifier;\nimport org.springframework.stereotype.Component;\n\n@Component\nclass PrecedenceDemo {\n\n    private final Serializer serializer;\n\n    // Explicit overrides @Primary — injects jsonSerializer\n    public PrecedenceDemo(@Qualifier(\"jsonSerializer\") Serializer serializer) {\n        this.serializer = serializer;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope--bean-lifecycle-boundaries",
      children: "Scope — Bean Lifecycle Boundaries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A bean's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "scope"
      }), " determines how many instances the container creates and how they are shared."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "singleton-default",
      children: "Singleton (Default)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.scope;\n\nimport org.springframework.context.annotation.Scope;\nimport org.springframework.stereotype.Component;\n\n@Component\n@Scope(\"singleton\")\npublic class SingletonCounter {\n\n    private int count = 0;\n\n    public int increment() {\n        return ++count;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Autowired"
      }), " injection point receives the same instance. The container creates the singleton eagerly (by default; use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Lazy"
      }), " to defer)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\nclass SingletonConsumer {\n\n    private final SingletonCounter counter1;\n    private final SingletonCounter counter2;\n\n    public SingletonConsumer(SingletonCounter counter1, SingletonCounter counter2) {\n        this.counter1 = counter1;\n        this.counter2 = counter2;\n    }\n\n    public void demo() {\n        System.out.println(\"Same instance? \" + (counter1 == counter2)); // true\n        counter1.increment();\n        counter2.increment();\n        System.out.println(\"Count = \" + counter1.increment()); // 3\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prototype",
      children: "Prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.scope;\n\nimport org.springframework.beans.factory.config.ConfigurableBeanFactory;\nimport org.springframework.context.annotation.Scope;\nimport org.springframework.stereotype.Component;\n\n@Component\n@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)\npublic class WorkflowTask {\n\n    private final String id = java.util.UUID.randomUUID().toString().substring(0, 8);\n\n    public String getId() {\n        return id;\n    }\n\n    public void execute() {\n        System.out.println(\"Task \" + id + \" executing\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every injection or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getBean()"
      }), " call returns a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "new instance"
      }), ". Spring does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PreDestroy"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DisposableBean.destroy()"
      }), " on prototype beans — the container hands them out and forgets them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "request-session-application-websocket",
      children: "Request, Session, Application, WebSocket"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These scopes are only available in a web-aware ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationContext"
      }), " (e.g. Spring MVC or Spring WebFlux)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.scope;\n\nimport org.springframework.context.annotation.Scope;\nimport org.springframework.context.annotation.ScopedProxyMode;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.context.WebApplicationContext;\n\n@Component\n@Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.TARGET_CLASS)\npublic class RequestId {\n\n    private final String id = java.util.UUID.randomUUID().toString();\n\n    public String getId() {\n        return id;\n    }\n}\n\n@Component\n@Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)\npublic class UserSession {\n\n    private String username;\n    private String accessToken;\n\n    public String getUsername() {\n        return username;\n    }\n\n    public void setUsername(String username) {\n        this.username = username;\n    }\n\n    public String getAccessToken() {\n        return accessToken;\n    }\n\n    public void setAccessToken(String accessToken) {\n        this.accessToken = accessToken;\n    }\n}\n\n@Component\n@Scope(value = WebApplicationContext.SCOPE_APPLICATION, proxyMode = ScopedProxyMode.TARGET_CLASS)\npublic class AppVisitorCounter {\n\n    private int visitorCount = 0;\n\n    public int increment() {\n        return ++visitorCount;\n    }\n\n    public int getCount() {\n        return visitorCount;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-proxymode-is-required",
      children: "Why proxyMode is Required"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a singleton bean depends on a request-scoped bean, the singleton is created once but the request-scoped bean must vary per request. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "scoped proxy"
      }), " is a CGLIB (or JDK) proxy that Spring injects in place of the actual bean. Every method call on the proxy is forwarded to the real request-scoped instance bound to the current thread."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.scope;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class RequestScopedConsumer {\n\n    // This is a proxy — each call to getId() goes through\n    // the proxy to the real RequestId for this HTTP request\n    private final RequestId requestId;\n\n    @Autowired\n    public RequestScopedConsumer(RequestId requestId) {\n        this.requestId = requestId;\n    }\n\n    public String getCurrentRequestId() {\n        return requestId.getId();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Proxy modes:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ScopedProxyMode.TARGET_CLASS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CGLIB"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Concrete class; no-arg constructor or use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Autowired"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ScopedProxyMode.INTERFACES"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JDK dynamic proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bean must implement an interface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ScopedProxyMode.NO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singleton depending on narrower scope will break"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "websocket-scope",
      children: "WebSocket Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.scope;\n\nimport org.springframework.context.annotation.Scope;\nimport org.springframework.context.annotation.ScopedProxyMode;\nimport org.springframework.stereotype.Component;\n\n@Component\n@Scope(value = \"websocket\", proxyMode = ScopedProxyMode.TARGET_CLASS)\npublic class WebSocketSessionState {\n\n    private String roomId;\n    private String userId;\n\n    public String getRoomId() {\n        return roomId;\n    }\n\n    public void setRoomId(String roomId) {\n        this.roomId = roomId;\n    }\n\n    public String getUserId() {\n        return userId;\n    }\n\n    public void setUserId(String userId) {\n        this.userId = userId;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scope-summary",
      children: "Scope Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Instances per"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lifetime"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "singleton"
            }), " (default)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One per container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container lifetime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "prototype"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One per injection/request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until injected, then container forgets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "request"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One per HTTP request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request duration (web only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "session"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One per HTTP session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session duration (web only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "application"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["One per ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ServletContext"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Servlet context lifetime (web only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "websocket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One per WebSocket session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket session duration (web only)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lifecycle-callbacks",
      children: "Lifecycle Callbacks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring provides multiple hooks to run initialisation and cleanup logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "postconstruct-and-predestroy",
      children: "@PostConstruct and @PreDestroy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.lifecycle;\n\nimport jakarta.annotation.PostConstruct;\nimport jakarta.annotation.PreDestroy;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class LifecycleDemo {\n\n    private boolean initialized = false;\n\n    @PostConstruct\n    public void init() {\n        this.initialized = true;\n        System.out.println(\"LifecycleDemo: @PostConstruct — initialized = \" + initialized);\n    }\n\n    @PreDestroy\n    public void destroy() {\n        this.initialized = false;\n        System.out.println(\"LifecycleDemo: @PreDestroy — cleanup complete\");\n    }\n\n    public boolean isInitialized() {\n        return initialized;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@PostConstruct"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PreDestroy"
      }), " are part of Jakarta EE (the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jakarta.annotation"
      }), " package). They are the simplest and most portable lifecycle mechanism."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "initializingbean-and-disposablebean",
      children: "InitializingBean and DisposableBean"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.lifecycle;\n\nimport org.springframework.beans.factory.DisposableBean;\nimport org.springframework.beans.factory.InitializingBean;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class LifecycleInterfaceDemo implements InitializingBean, DisposableBean {\n\n    private String status = \"CREATED\";\n\n    @Override\n    public void afterPropertiesSet() {\n        this.status = \"INITIALIZED\";\n        System.out.println(\"InitializingBean.afterPropertiesSet() — status = \" + status);\n    }\n\n    @Override\n    public void destroy() {\n        this.status = \"DESTROYED\";\n        System.out.println(\"DisposableBean.destroy() — status = \" + status);\n    }\n\n    public String getStatus() {\n        return status;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These interfaces are Spring-specific (tight coupling). Prefer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PostConstruct"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PreDestroy"
      }), " unless you need the specific ordering guarantees."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "execution-order-for-a-single-bean",
      children: "Execution Order for a Single Bean"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Constructor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Property population (setter injection)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "*Aware"
        }), " interfaces called (", (0,jsx_runtime.jsx)(_components.code, {
          children: "BeanNameAware"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BeanFactoryAware"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ApplicationContextAware"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "BeanPostProcessor.postProcessBeforeInitialization"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "@PostConstruct"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "InitializingBean.afterPropertiesSet()"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "@Bean(initMethod = \"...\")"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "BeanPostProcessor.postProcessAfterInitialization"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bean is ready"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Container shutdown — reverse order for destruction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-bean-initmethod-and-destroymethod",
      children: "Custom @Bean initMethod and destroyMethod"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Already covered in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Bean"
      }), " section. Reiterated here for lifecycle completeness:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.lifecycle;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\nclass InitDestroyConfig {\n\n    @Bean(initMethod = \"start\", destroyMethod = \"stop\")\n    Server server() {\n        return new Server();\n    }\n}\n\nclass Server {\n\n    public void start() {\n        System.out.println(\"Server started\");\n    }\n\n    public void stop() {\n        System.out.println(\"Server stopped\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "smartlifecycle--fine-grained-lifecycle-control",
      children: "SmartLifecycle — Fine-Grained Lifecycle Control"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "SmartLifecycle"
      }), " extends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Lifecycle"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Phased"
      }), " to give ordered, auto-startup behaviour. Beans that need to start in a specific order or participate in container-level lifecycle (e.g. a database migration runner) implement this interface."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.lifecycle;\n\nimport org.springframework.context.SmartLifecycle;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class CacheWarmer implements SmartLifecycle {\n\n    private volatile boolean running = false;\n\n    @Override\n    public void start() {\n        running = true;\n        System.out.println(\"CacheWarmer: warming cache...\");\n        // simulate warming\n        try { Thread.sleep(100); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }\n        System.out.println(\"CacheWarmer: cache ready\");\n    }\n\n    @Override\n    public void stop() {\n        running = false;\n        System.out.println(\"CacheWarmer: cache cleared\");\n    }\n\n    @Override\n    public boolean isRunning() {\n        return running;\n    }\n\n    @Override\n    public boolean isAutoStartup() {\n        return true; // automatically started when the context is refreshed\n    }\n\n    @Override\n    public int getPhase() {\n        return Integer.MAX_VALUE; // run last (lowest priority)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Multiple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SmartLifecycle"
      }), " beans are ordered by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getPhase()"
      }), " — lower values start first, stop last. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isAutoStartup() = false"
      }), " allows manual control via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ctx.start()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.lifecycle;\n\nimport org.springframework.context.SmartLifecycle;\nimport org.springframework.stereotype.Component;\n\n@Component\nclass DatabaseMigrationRunner implements SmartLifecycle {\n\n    private volatile boolean running = false;\n\n    @Override\n    public void start() {\n        running = true;\n        System.out.println(\"DatabaseMigrationRunner: running migrations...\");\n    }\n\n    @Override\n    public void stop() {\n        running = false;\n        System.out.println(\"DatabaseMigrationRunner: done\");\n    }\n\n    @Override\n    public boolean isRunning() {\n        return running;\n    }\n\n    @Override\n    public boolean isAutoStartup() {\n        return true;\n    }\n\n    @Override\n    public int getPhase() {\n        return 0; // runs before CacheWarmer (phase = MAX_VALUE)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "profile--environment-specific-beans",
      children: "@Profile — Environment-Specific Beans"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Profile"
      }), " allows beans to be registered only when a specific set of profiles is active."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "profile-on-configuration",
      children: "@Profile on @Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.profile;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Profile;\n\n@Configuration\n@Profile(\"dev\")\nclass DevDataSourceConfig {\n\n    @Bean\n    DataSource dataSource() {\n        return new DataSource(\"jdbc:h2:mem:devdb\");\n    }\n}\n\n@Configuration\n@Profile(\"prod\")\nclass ProdDataSourceConfig {\n\n    @Bean\n    DataSource dataSource() {\n        return new DataSource(\"jdbc:postgresql://prod-server:5432/db\");\n    }\n}\n\n@Configuration\n@Profile(\"test\")\nclass TestDataSourceConfig {\n\n    @Bean\n    DataSource dataSource() {\n        return new DataSource(\"jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1\");\n    }\n}\n\nclass DataSource {\n\n    private final String url;\n\n    DataSource(String url) {\n        this.url = url;\n    }\n\n    String getUrl() {\n        return url;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "profile-on-bean",
      children: "@Profile on @Bean"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.profile;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Profile;\n\n@Configuration\nclass AppConfig {\n\n    @Bean\n    @Profile(\"dev\")\n    ConsoleLogger logger() {\n        return new ConsoleLogger();\n    }\n\n    @Bean\n    @Profile(\"prod\")\n    CloudLogger logger() {\n        return new CloudLogger();\n    }\n\n    @Bean\n    @Profile(\"default\")\n    FileLogger logger() {\n        return new FileLogger();\n    }\n}\n\ninterface Logger {\n    void log(String message);\n}\n\nclass ConsoleLogger implements Logger {\n    public void log(String message) { System.out.println(\"[Console] \" + message); }\n}\n\nclass CloudLogger implements Logger {\n    public void log(String message) { System.out.println(\"[CloudWatch] \" + message); }\n}\n\nclass FileLogger implements Logger {\n    public void log(String message) { System.out.println(\"[File] \" + message); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "activating-profiles",
      children: "Activating Profiles"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties\nspring.profiles.active=dev,local\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application.yml\nspring:\n  profiles:\n    active: dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Command line\njava -jar app.jar --spring.profiles.active=prod\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Programmatic — before refresh\nimport org.springframework.context.annotation.AnnotationConfigApplicationContext;\n\nAnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();\nctx.getEnvironment().setActiveProfiles(\"prod\", \"us-east\");\nctx.register(AppConfig.class);\nctx.refresh();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "programmatic-profile-checking",
      children: "Programmatic Profile Checking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.profile;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.core.env.Environment;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class ProfileAwareService {\n\n    private final Environment env;\n\n    @Autowired\n    public ProfileAwareService(Environment env) {\n        this.env = env;\n    }\n\n    public boolean isDev() {\n        return env.acceptsProfiles(org.springframework.core.env.Profiles.of(\"dev\"));\n    }\n\n    public boolean isProd() {\n        return env.acceptsProfiles(org.springframework.core.env.Profiles.of(\"prod\"));\n    }\n\n    public boolean isLocalOrDev() {\n        return env.acceptsProfiles(org.springframework.core.env.Profiles.of(\"local\", \"dev\"));\n    }\n\n    public String[] getActiveProfiles() {\n        return env.getActiveProfiles();\n    }\n\n    public void report() {\n        System.out.println(\"Active profiles: \" + String.join(\", \", getActiveProfiles()));\n        System.out.println(\"Is dev? \" + isDev());\n        System.out.println(\"Is prod? \" + isProd());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "profile-expressions",
      children: "Profile Expressions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring 5.1+ supports logical operators in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Profile"
      }), " values:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Active When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"dev\""
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Profile ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), " is active"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), " is active"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"!dev\""
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Profile ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), " is NOT active"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), " is not active"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"dev & cloud\""
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Both ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), " AND ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cloud"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both active"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"dev | prod\""
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Either ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), " OR ", (0,jsx_runtime.jsx)(_components.code, {
              children: "prod"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At least one active"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"(dev | qa) & !east\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex expression"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "qa"
            }), ", but not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "east"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.profile;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Profile;\n\n@Configuration\nclass ProfileExpressionConfig {\n\n    @Bean\n    @Profile(\"!test\")\n    Service nonTestService() {\n        return new Service(\"not-test\");\n    }\n\n    @Bean\n    @Profile(\"dev | staging\")\n    Service devOrStagingService() {\n        return new Service(\"dev-or-staging\");\n    }\n\n    @Bean\n    @Profile(\"prod & cloud\")\n    Service prodWithCloudService() {\n        return new Service(\"prod-and-cloud\");\n    }\n\n    @Bean\n    @Profile(\"(dev | qa) & !east-region\")\n    Service notEastService() {\n        return new Service(\"not-east\");\n    }\n}\n\nclass Service {\n    private final String label;\n    Service(String label) { this.label = label; }\n    String getLabel() { return label; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "default-profile",
      children: "Default Profile"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The profile named ", (0,jsx_runtime.jsx)(_components.code, {
        children: "default"
      }), " is active when no other profile is explicitly set. It is a fallback — not a catch-all. If you set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring.profiles.active=dev"
      }), ", the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "default"
      }), " profile is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " active."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Profile;\n\n@Configuration\nclass DefaultProfileConfig {\n\n    @Bean\n    @Profile(\"default\")\n    Greeter defaultGreeter() {\n        return new Greeter(\"Default profile active — no explicit profiles set\");\n    }\n\n    @Bean\n    @Profile(\"dev\")\n    Greeter devGreeter() {\n        return new Greeter(\"Dev profile active\");\n    }\n}\n\nclass Greeter {\n    private final String message;\n    Greeter(String message) { this.message = message; }\n    void greet() { System.out.println(message); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "conditional-beans",
      children: "Conditional Beans"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Conditional"
      }), " and its annotation family gate bean definitions on arbitrary conditions evaluated at container refresh time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conditional-with-the-condition-interface",
      children: "@Conditional with the Condition Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.conditional;\n\nimport org.springframework.context.annotation.Condition;\nimport org.springframework.context.annotation.ConditionContext;\nimport org.springframework.context.annotation.Conditional;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.core.type.AnnotatedTypeMetadata;\n\npublic class OnWindowsCondition implements Condition {\n\n    @Override\n    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {\n        String os = context.getEnvironment().getProperty(\"os.name\", \"\").toLowerCase();\n        return os.contains(\"win\");\n    }\n}\n\nclass OnLinuxCondition implements Condition {\n\n    @Override\n    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {\n        String os = context.getEnvironment().getProperty(\"os.name\", \"\").toLowerCase();\n        return os.contains(\"nix\") || os.contains(\"nux\") || os.contains(\"aix\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using the conditions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\nclass OsConditionalConfig {\n\n    @Bean\n    @Conditional(OnWindowsCondition.class)\n    FileSystemManager windowsFileManager() {\n        return new FileSystemManager(\"NTFS\");\n    }\n\n    @Bean\n    @Conditional(OnLinuxCondition.class)\n    FileSystemManager linuxFileManager() {\n        return new FileSystemManager(\"EXT4\");\n    }\n}\n\nclass FileSystemManager {\n    private final String fsType;\n    FileSystemManager(String fsType) { this.fsType = fsType; }\n    String getFsType() { return fsType; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "spring-boots-conditionalon-family",
      children: "Spring Boot's @ConditionalOn* Family"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These are part of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-autoconfigure"
      }), ". They are the building blocks of Spring Boot's auto-configuration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "conditionalonproperty",
      children: "@ConditionalOnProperty"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.conditional;\n\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\nclass ConditionalOnPropertyConfig {\n\n    @Bean\n    @ConditionalOnProperty(\n        name = \"app.feature.analytics\",\n        havingValue = \"true\",\n        matchIfMissing = false\n    )\n    AnalyticsService analyticsService() {\n        return new AnalyticsService();\n    }\n\n    @Bean\n    @ConditionalOnProperty(\n        name = \"app.cache.type\",\n        havingValue = \"redis\",\n        matchIfMissing = true\n    )\n    CacheService cacheService() {\n        return new CacheService();\n    }\n}\n\nclass AnalyticsService {\n    String status() { return \"Analytics enabled\"; }\n}\n\nclass CacheService {\n    String status() { return \"Cache service ready\"; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "conditionalonclass",
      children: "@ConditionalOnClass"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.conditional;\n\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnClass;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\n@ConditionalOnClass(name = \"com.redis.lettuce.core.RedisClient\")\nclass RedisAutoConfiguration {\n\n    @Bean\n    RedisConnectionManager redisConnectionManager() {\n        return new RedisConnectionManager();\n    }\n}\n\nclass RedisConnectionManager {\n    String status() { return \"Redis client available\"; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "conditionalonmissingbean",
      children: "@ConditionalOnMissingBean"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.conditional;\n\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\nclass ConditionalOnMissingBeanConfig {\n\n    @Bean\n    @ConditionalOnMissingBean\n    ObjectMapper objectMapper() {\n        return new ObjectMapper(\"default\");\n    }\n\n    @Bean\n    @ConditionalOnMissingBean(name = \"customSerializer\")\n    Serializer defaultSerializer() {\n        return new Serializer(\"default\");\n    }\n}\n\nclass ObjectMapper {\n    private final String type;\n    ObjectMapper(String type) { this.type = type; }\n    String getType() { return type; }\n}\n\nclass Serializer {\n    private final String name;\n    Serializer(String name) { this.name = name; }\n    String getName() { return name; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If a bean of type ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ObjectMapper"
      }), " already exists (registered by user code or another auto-configuration), Spring skips the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnMissingBean"
      }), " method. This is how Spring Boot auto-configuration allows user-defined beans to override defaults."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "conditionalonexpression",
      children: "@ConditionalOnExpression"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.conditional;\n\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\nclass ConditionalOnExpressionConfig {\n\n    @Bean\n    @ConditionalOnExpression(\n        \"${app.rate-limiting.enabled:true} and \"\n        + \"${app.rate-limiting.provider:in-memory} != 'none'\"\n    )\n    RateLimiter rateLimiter() {\n        return new RateLimiter(\"active\");\n    }\n}\n\nclass RateLimiter {\n    private final String status;\n    RateLimiter(String status) { this.status = status; }\n    String getStatus() { return status; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "conditionalonbean-vs-conditionalonmissingbean",
      children: "@ConditionalOnBean vs @ConditionalOnMissingBean"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.conditional;\n\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnBean;\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\nclass ConditionalOnBeanConfig {\n\n    @Bean\n    @ConditionalOnBean(name = \"transactionManager\")\n    JdbcTemplate jdbcTemplate() {\n        return new JdbcTemplate(\"configured\");\n    }\n\n    @Bean\n    @ConditionalOnMissingBean(name = \"customHealthIndicator\")\n    HealthIndicator defaultHealthIndicator() {\n        return new HealthIndicator(\"default-ok\");\n    }\n}\n\nclass JdbcTemplate {\n    private final String config;\n    JdbcTemplate(String config) { this.config = config; }\n    String getConfig() { return config; }\n}\n\nclass HealthIndicator {\n    private final String status;\n    HealthIndicator(String status) { this.status = status; }\n    String getStatus() { return status; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-conditional-annotation",
      children: "Custom @Conditional Annotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.conditional;\n\nimport org.springframework.context.annotation.Conditional;\n\nimport java.lang.annotation.ElementType;\nimport java.lang.annotation.Retention;\nimport java.lang.annotation.RetentionPolicy;\nimport java.lang.annotation.Target;\n\n@Target({ElementType.TYPE, ElementType.METHOD})\n@Retention(RetentionPolicy.RUNTIME)\n@Conditional(OnEnvironmentCondition.class)\npublic @interface ConditionalOnEnvironment {\n    String value();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implementation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.conditional;\n\nimport org.springframework.context.annotation.Condition;\nimport org.springframework.context.annotation.ConditionContext;\nimport org.springframework.core.type.AnnotatedTypeMetadata;\n\nimport java.util.Map;\n\npublic class OnEnvironmentCondition implements Condition {\n\n    @Override\n    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {\n        Map<String, Object> attrs =\n            metadata.getAnnotationAttributes(ConditionalOnEnvironment.class.getName());\n        if (attrs == null) return false;\n\n        String targetEnv = (String) attrs.get(\"value\");\n        String currentEnv = context.getEnvironment().getProperty(\"app.environment\", \"dev\");\n        return targetEnv.equals(currentEnv);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\nclass CustomConditionalConfig {\n\n    @Bean\n    @ConditionalOnEnvironment(\"staging\")\n    StagingConfig stagingConfig() {\n        return new StagingConfig();\n    }\n\n    @Bean\n    @ConditionalOnEnvironment(\"prod\")\n    ProdConfig prodConfig() {\n        return new ProdConfig();\n    }\n}\n\nclass StagingConfig {\n    String label() { return \"staging\"; }\n}\n\nclass ProdConfig {\n    String label() { return \"prod\"; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "combining-conditions-logical-and",
      children: "Combining Conditions (Logical AND)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.conditional;\n\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnClass;\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\nclass CombinedConditionsConfig {\n\n    @Bean\n    @ConditionalOnProperty(name = \"app.analytics.enabled\", havingValue = \"true\")\n    @ConditionalOnClass(name = \"com.fasterxml.jackson.databind.ObjectMapper\")\n    AnalyticsEngine analyticsEngine() {\n        return new AnalyticsEngine(\"Jackson + enabled\");\n    }\n\n    @Bean\n    @ConditionalOnProperty(name = \"app.analytics.enabled\", havingValue = \"true\")\n    @ConditionalOnClass(name = \"com.google.gson.Gson\")\n    AnalyticsEngine gsonAnalyticsEngine() {\n        return new AnalyticsEngine(\"Gson + enabled\");\n    }\n}\n\nclass AnalyticsEngine {\n    private final String source;\n    AnalyticsEngine(String source) { this.source = source; }\n    String report() { return \"Analytics from: \" + source; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Multiple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Conditional"
      }), " annotations on the same ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Bean"
      }), " or class are AND-combined — all must match."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lookup-method-injection",
      children: "Lookup Method Injection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a singleton-scoped bean needs a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "new instance"
      }), " of a prototype-scoped bean every time a method is called, field injection won't work (the singleton is created once, so the prototype field is set once). Three solutions exist: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Lookup"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Provider"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ObjectFactory"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lookup",
      children: "@Lookup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.lookup;\n\nimport org.springframework.beans.factory.annotation.Lookup;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic abstract class SingletonProcessor {\n\n    // Every call returns a NEW PrototypeWorker instance\n    @Lookup\n    protected abstract PrototypeWorker createWorker();\n\n    public void process(String task) {\n        PrototypeWorker worker = createWorker();\n        worker.execute(task);\n    }\n}\n\n@Component\n@org.springframework.context.annotation.Scope(\"prototype\")\nclass PrototypeWorker {\n\n    private final String instanceId =\n        java.util.UUID.randomUUID().toString().substring(0, 8);\n\n    public void execute(String task) {\n        System.out.println(\"Worker \" + instanceId + \" processing: \" + task);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring generates a concrete subclass of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SingletonProcessor"
      }), " at runtime (via CGLIB) that implements ", (0,jsx_runtime.jsx)(_components.code, {
        children: "createWorker()"
      }), " by calling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "applicationContext.getBean(PrototypeWorker.class)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lookup-with-parameters-spring-41",
      children: "@Lookup with Parameters (Spring 4.1+)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.lookup;\n\nimport org.springframework.beans.factory.annotation.Lookup;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic abstract class ParametricLookupDemo {\n\n    @Lookup\n    public abstract Report createReport(String title);\n\n    public void run() {\n        Report r1 = createReport(\"Q1 Earnings\");\n        Report r2 = createReport(\"Q2 Earnings\");\n        System.out.println(r1.describe());\n        System.out.println(r2.describe());\n        System.out.println(\"Same instance? \" + (r1 == r2));\n    }\n}\n\n@Component\n@org.springframework.context.annotation.Scope(\"prototype\")\nclass Report {\n\n    private final String id = java.util.UUID.randomUUID().toString().substring(0, 8);\n    private final String title;\n\n    // Spring will call this constructor with the arguments passed to createWorker\n    public Report(String title) {\n        this.title = title;\n    }\n\n    public String describe() {\n        return \"Report[\" + id + \"] title=\" + title;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "provider-alternative-to-lookup",
      children: "Provider (Alternative to @Lookup)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "jakarta.inject.Provider"
      }), " is a cleaner alternative that avoids abstract classes and CGLIB:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.lookup;\n\nimport jakarta.inject.Provider;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class ProviderDemo {\n\n    private final Provider<PrototypeWorker> workerProvider;\n\n    @Autowired\n    public ProviderDemo(Provider<PrototypeWorker> workerProvider) {\n        this.workerProvider = workerProvider;\n    }\n\n    public void process(String task) {\n        PrototypeWorker worker = workerProvider.get();\n        worker.execute(task);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every call to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "workerProvider.get()"
      }), " returns a new prototype instance. This is the recommended approach — no abstract class, no CGLIB, no Spring-specific annotation at the injection point."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "objectfactory-springs-own-provider",
      children: "ObjectFactory (Spring's Own Provider)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.lookup;\n\nimport org.springframework.beans.factory.ObjectFactory;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class ObjectFactoryDemo {\n\n    private final ObjectFactory<PrototypeWorker> workerFactory;\n\n    @Autowired\n    public ObjectFactoryDemo(ObjectFactory<PrototypeWorker> workerFactory) {\n        this.workerFactory = workerFactory;\n    }\n\n    public void process(String task) {\n        PrototypeWorker worker = workerFactory.getObject();\n        worker.execute(task);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ObjectFactory"
      }), " is Spring's built-in equivalent of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jakarta.inject.Provider"
      }), ". Both work identically in practice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applicationeventpublisher--event-driven-beans",
      children: "ApplicationEventPublisher — Event-Driven Beans"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring's event infrastructure allows beans to publish and listen to application events without coupling publishers to listeners."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-event",
      children: "Custom Event"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.event;\n\nimport org.springframework.context.ApplicationEvent;\n\n// Extending ApplicationEvent (legacy approach, still works)\npublic class OrderPlacedEvent extends ApplicationEvent {\n\n    private final String orderId;\n    private final String customerEmail;\n    private final double total;\n\n    public OrderPlacedEvent(Object source, String orderId, String customerEmail, double total) {\n        super(source);\n        this.orderId = orderId;\n        this.customerEmail = customerEmail;\n        this.total = total;\n    }\n\n    public String getOrderId() { return orderId; }\n    public String getCustomerEmail() { return customerEmail; }\n    public double getTotal() { return total; }\n}\n\n// POJO event — does NOT need to extend ApplicationEvent (preferred)\npublic class InventoryUpdatedEvent {\n\n    private final String sku;\n    private final int quantityChange;\n\n    public InventoryUpdatedEvent(String sku, int quantityChange) {\n        this.sku = sku;\n        this.quantityChange = quantityChange;\n    }\n\n    public String getSku() { return sku; }\n    public int getQuantityChange() { return quantityChange; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "publishing-events",
      children: "Publishing Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.event;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.context.ApplicationEventPublisher;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class OrderService {\n\n    private final ApplicationEventPublisher publisher;\n\n    @Autowired\n    public OrderService(ApplicationEventPublisher publisher) {\n        this.publisher = publisher;\n    }\n\n    public void placeOrder(String orderId, String email, double total) {\n        // Business logic...\n        System.out.println(\"Order \" + orderId + \" placed\");\n\n        // Publish event\n        publisher.publishEvent(new OrderPlacedEvent(this, orderId, email, total));\n        publisher.publishEvent(new InventoryUpdatedEvent(\"SKU-123\", -1));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eventlistener",
      children: "@EventListener"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.event;\n\nimport org.springframework.context.event.EventListener;\nimport org.springframework.scheduling.annotation.Async;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class OrderEventListeners {\n\n    @EventListener\n    public void handleOrderPlaced(OrderPlacedEvent event) {\n        System.out.println(\"Sending confirmation email to \" + event.getCustomerEmail()\n            + \" for order \" + event.getOrderId());\n    }\n\n    @EventListener\n    public void handleInventoryUpdate(InventoryUpdatedEvent event) {\n        System.out.println(\"Updating inventory for SKU \" + event.getSku()\n            + \" by \" + event.getQuantityChange());\n    }\n\n    // Async listener — does not block the publisher's thread\n    @EventListener\n    @Async\n    public void sendPushNotification(OrderPlacedEvent event) {\n        System.out.println(\"[Async] Sending push notification for order \" + event.getOrderId());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "listener-ordering",
      children: "Listener Ordering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.event;\n\nimport org.springframework.context.event.EventListener;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class OrderedListeners {\n\n    @EventListener\n    @Order(1)\n    public void first(OrderPlacedEvent event) {\n        System.out.println(\"1st listener: validate order \" + event.getOrderId());\n    }\n\n    @EventListener\n    @Order(2)\n    public void second(OrderPlacedEvent event) {\n        System.out.println(\"2nd listener: send email for \" + event.getOrderId());\n    }\n\n    @EventListener\n    @Order(3)\n    public void third(OrderPlacedEvent event) {\n        System.out.println(\"3rd listener: update warehouse for \" + event.getOrderId());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conditional-event-handling-with-spel",
      children: "Conditional Event Handling with SpEL"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.event;\n\nimport org.springframework.context.event.EventListener;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class ConditionalEventListener {\n\n    @EventListener(condition = \"#event.total > 1000\")\n    public void handleHighValueOrder(OrderPlacedEvent event) {\n        System.out.println(\"High-value order detected: \" + event.getOrderId()\n            + \" for $\" + event.getTotal());\n    }\n\n    @EventListener(condition = \"#event.customerEmail.contains('@vip.com')\")\n    public void handleVipOrder(OrderPlacedEvent event) {\n        System.out.println(\"VIP customer order: \" + event.getOrderId());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transactionaleventlistener",
      children: "@TransactionalEventListener"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Binds the listener to a transaction phase, ensuring the event is processed only after the transaction commits, rolls back, etc."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.event;\n\nimport org.springframework.stereotype.Component;\nimport org.springframework.transaction.event.TransactionPhase;\nimport org.springframework.transaction.event.TransactionalEventListener;\n\n@Component\npublic class TransactionalOrderListeners {\n\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)\n    public void onOrderCommitted(OrderPlacedEvent event) {\n        System.out.println(\"Transaction committed for order \" + event.getOrderId()\n            + \" — sending email (guaranteed)\");\n    }\n\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_ROLLBACK)\n    public void onOrderRolledBack(OrderPlacedEvent event) {\n        System.out.println(\"Transaction rolled back for order \" + event.getOrderId()\n            + \" — no email sent, updating failure counter\");\n    }\n\n    @TransactionalEventListener(phase = TransactionPhase.BEFORE_COMMIT)\n    public void preCommitValidation(OrderPlacedEvent event) {\n        System.out.println(\"Pre-commit validation for order \" + event.getOrderId());\n    }\n\n    // fallBack = true means the listener also fires even if there is no transaction\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT, fallbackExecution = true)\n    public void logOrder(OrderPlacedEvent event) {\n        System.out.println(\"Logging order \" + event.getOrderId() + \" (works with or without tx)\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "listening-to-multiple-event-types",
      children: "Listening to Multiple Event Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.event;\n\nimport org.springframework.context.event.EventListener;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class MultiEventListener {\n\n    @EventListener\n    public void handleAnyOrderEvent(Object event) {\n        if (event instanceof OrderPlacedEvent o) {\n            System.out.println(\"Order placed: \" + o.getOrderId());\n        } else if (event instanceof InventoryUpdatedEvent i) {\n            System.out.println(\"Inventory update: \" + i.getSku() + \" x \" + i.getQuantityChange());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generic-events--using-resolvabletype",
      children: "Generic Events — Using ResolvableType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.event;\n\nimport org.springframework.context.event.EventListener;\nimport org.springframework.core.ResolvableType;\nimport org.springframework.stereotype.Component;\n\npublic class GenericEvent<T> {\n\n    private final T payload;\n    private final long timestamp;\n\n    public GenericEvent(T payload) {\n        this.payload = payload;\n        this.timestamp = System.currentTimeMillis();\n    }\n\n    public T getPayload() { return payload; }\n    public long getTimestamp() { return timestamp; }\n}\n\n@Component\nclass GenericEventListener {\n\n    @EventListener\n    public void onStringEvent(GenericEvent<String> event) {\n        System.out.println(\"String event: \" + event.getPayload());\n    }\n\n    @EventListener\n    public void onIntegerEvent(GenericEvent<Integer> event) {\n        System.out.println(\"Integer event: \" + event.getPayload());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring resolves the generic type parameter via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResolvableType"
      }), " to route events correctly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "testing-with-containers",
      children: "Testing with Containers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "springboottest--full-application-context",
      children: "@SpringBootTest — Full Application Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.test;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\n@SpringBootTest\nclass ApplicationContextTest {\n\n    @Autowired\n    private GreetingService greetingService;\n\n    @Test\n    void contextLoads() {\n        assertNotNull(greetingService);\n    }\n\n    @Test\n    void greetingServiceWorks() {\n        assertEquals(\"Hello, World!\", greetingService.greet(\"World\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-slices",
      children: "Test Slices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot provides focused annotations that load only the beans needed for a specific layer:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.test;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;\n\nimport java.util.Optional;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\n@DataJpaTest\nclass ProductRepositoryTest {\n\n    @Autowired\n    private ProductRepository productRepository;\n\n    @Test\n    void findById() {\n        Optional<String> result = productRepository.findById(1L);\n        assertTrue(result.isPresent());\n        assertEquals(\"Laptop\", result.get());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Other test slice annotations:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Annotation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loads"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@DataJpaTest"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["JPA repositories, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EntityManager"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DataSource"
            }), " (in-memory)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@WebMvcTest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only MVC controllers, not services/repos"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@JsonTest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON serialization/deserialization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@RestClientTest"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["REST client (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RestTemplate"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WebClient"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@DataMongoTest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB repositories"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mockbean--mocking-in-context",
      children: "@MockBean — Mocking in Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.test;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.boot.test.mock.mockito.MockBean;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.mockito.ArgumentMatchers.any;\nimport static org.mockito.Mockito.*;\n\n@SpringBootTest\nclass OrderServiceTest {\n\n    @MockBean\n    private InventoryService inventoryService;\n\n    @Autowired\n    private OrderService orderService;\n\n    @Test\n    void placeOrderReservesInventory() {\n        when(inventoryService.reserve(anyString(), anyInt())).thenReturn(true);\n\n        orderService.placeOrder(\"ORD-001\", \"test@example.com\", 99.99);\n\n        verify(inventoryService, times(1)).reserve(\"SKU-123\", 1);\n    }\n\n    @Test\n    void placeOrderFailsWhenInventoryShort() {\n        when(inventoryService.reserve(anyString(), anyInt())).thenReturn(false);\n\n        assertThrows(IllegalStateException.class, () ->\n            orderService.placeOrder(\"ORD-002\", \"test@example.com\", 99.99));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@MockBean"
      }), " creates a Mockito mock and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "replaces"
      }), " any existing bean of the same type in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationContext"
      }), ". It is ideal for isolating the layer under test."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "spybean",
      children: "@SpyBean"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.test;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.boot.test.mock.mockito.SpyBean;\n\nimport static org.mockito.Mockito.*;\n\n@SpringBootTest\nclass AuditServiceSpyTest {\n\n    @SpyBean\n    private AuditService auditService;\n\n    @Autowired\n    private OrderService orderService;\n\n    @Test\n    void orderTriggersAudit() {\n        orderService.placeOrder(\"ORD-100\", \"user@test.com\", 50.0);\n\n        verify(auditService).record(\"Order placed: ORD-100\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@SpyBean"
      }), " creates a Mockito spy around a real bean — the bean's real methods are called unless explicitly stubbed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "import-for-focused-context",
      children: "@Import for Focused Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.test;\n\nimport di.autowired.GreetingService;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.context.annotation.Import;\nimport org.springframework.test.context.junit.jupiter.SpringJUnitConfig;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\n@SpringJUnitConfig\n@Import(GreetingService.class)\nclass FocusedContextTest {\n\n    private final GreetingService greetingService;\n\n    FocusedContextTest(GreetingService greetingService) {\n        this.greetingService = greetingService;\n    }\n\n    @Test\n    void focusedContext() {\n        assertEquals(\"Hello, Test!\", greetingService.greet(\"Test\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dynamic-property-sources",
      children: "Dynamic Property Sources"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.test;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.test.context.DynamicPropertyRegistry;\nimport org.springframework.test.context.DynamicPropertySource;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\n@SpringBootTest\nclass DynamicPropertyTest {\n\n    @Value(\"${app.feature.analytics}\")\n    private String analyticsSetting;\n\n    @DynamicPropertySource\n    static void configureProperties(DynamicPropertyRegistry registry) {\n        registry.add(\"app.feature.analytics\", () -> \"true\");\n        registry.add(\"app.cache.type\", () -> \"redis\");\n    }\n\n    @Test\n    void propertiesAreSet() {\n        assertEquals(\"true\", analyticsSetting);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testconfiguration--local-overrides",
      children: "TestConfiguration — Local Overrides"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.test;\n\nimport di.primary.Serializer;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Qualifier;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.boot.test.context.TestConfiguration;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Primary;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\n@SpringBootTest\nclass TestConfigurationDemo {\n\n    @Autowired\n    @Qualifier(\"testSerializer\")\n    private Serializer serializer;\n\n    @Test\n    void testSerializerInjected() {\n        assertEquals(\"test\", serializer.getFormat());\n    }\n\n    @TestConfiguration\n    static class TestConfig {\n\n        @Bean\n        @Primary\n        Serializer testSerializer() {\n            return new Serializer(\"test\");\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TestConfiguration"
      }), " inner class adds beans to the context ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "without"
      }), " replacing the main configuration — unless a bean is marked ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Primary"
      }), ", in which case it takes precedence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testing-with-active-profiles",
      children: "Testing with Active Profiles"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package di.test;\n\nimport di.profile.ProfileAwareService;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.test.context.ActiveProfiles;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\n@SpringBootTest\n@ActiveProfiles(\"dev\")\nclass ProfileTest {\n\n    @Autowired\n    private ProfileAwareService profileService;\n\n    @Test\n    void devProfileActive() {\n        assertTrue(profileService.isDev());\n        assertFalse(profileService.isProd());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "@Component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic Spring-managed bean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base stereotype for all components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any Spring-managed class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service layer stereotype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Component specialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business logic classes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Repository"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data access stereotype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Component + persistence exception translation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAO/Repository classes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web controller stereotype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Component + request mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVC controllers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Bean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factory method bean declaration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit bean creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Third-party class integration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Annotations"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Declaration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Component, @Service, @Repository, @Controller, @Bean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Bean goes inside @Configuration class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Injection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Autowired, @Inject, @Resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor injection preferred"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Qualification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Primary, @Qualifier, @CustomQualifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Primary for default, @Qualifier for specific"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scopes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Scope(\"singleton\"), @Scope(\"prototype\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request/session/application for web contexts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifecycle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@PostConstruct, @PreDestroy, InitializingBean, DisposableBean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SmartLifecycle for ordered startup/shutdown"
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
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Web Apps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Batch"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Messaging"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Testing"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor Injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controllers, Services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Job components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Listeners"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to mock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dev/test/prod config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch profiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@ActiveProfiles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event Publishing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Job completion events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event test observers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is constructor injection preferred over field injection?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It is faster at runtime"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) It makes dependencies explicit and enables immutable fields"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Field injection is deprecated"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) It requires less code"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) It makes dependencies explicit and enables immutable fields.** Constructor injection ensures all required dependencies are available at construction time and supports final fields.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the default bean scope in Spring?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) prototype"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) singleton"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) request"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) session"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) singleton.** By default, Spring creates a single instance per IoC container for each bean definition.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which annotation resolves ambiguous dependencies?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) @Autowired"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) @Component"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) @Qualifier"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) @Scope"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) @Qualifier.** @Qualifier narrows the candidate beans to those with matching qualifier value.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered every facet of Spring's IoC container — from bootstrapping to wiring to lifecycle to testing."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ApplicationContext"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ClassPathXmlApplicationContext"
            }), " (XML), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AnnotationConfigApplicationContext"
            }), " (annotations), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "GenericApplicationContext"
            }), " (programmatic), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ConfigurableApplicationContext"
            }), " (lifecycle control)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stereotypes"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@Component"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Service"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Repository"
            }), " (exception translation), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Controller"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@RestController"
            }), ". All meta-annotated with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Component"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "@Bean"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Factory methods in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Configuration"
            }), " classes. Supports ", (0,jsx_runtime.jsx)(_components.code, {
              children: "initMethod"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "destroyMethod"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            }), " (including aliases). ", (0,jsx_runtime.jsx)(_components.code, {
              children: "autowire"
            }), " is deprecated."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "@Autowired"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Field, setter, constructor. Constructor injection is recommended (immutability, testability, required deps). Single-constructor rule since Spring 4.3."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "@Qualifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disambiguates beans by name. Custom qualifier annotations eliminate string literals."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "@Primary"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Default bean when multiple candidates exist. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Qualifier"
            }), " always overrides ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Primary"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Singleton (default), prototype, request, session, application, websocket. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "proxyMode"
            }), " required when a wider-scoped bean depends on a narrower one."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifecycle"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@PostConstruct"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@PreDestroy"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "InitializingBean"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DisposableBean"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Bean(initMethod/destroyMethod)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SmartLifecycle"
            }), " (ordered auto-startup)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "@Profile"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Gating beans by environment. Profile expressions (", (0,jsx_runtime.jsx)(_components.code, {
              children: "!"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            }), ", `"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conditional"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@Conditional(Condition)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@ConditionalOnProperty"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@ConditionalOnClass"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@ConditionalOnMissingBean"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@ConditionalOnExpression"
            }), ". Multiple conditions are AND-combined."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "@Lookup"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inject prototype beans into singletons. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Lookup"
            }), " on abstract method; Spring generates CGLIB subclass. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Provider"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ObjectFactory"
            }), " are cleaner alternatives."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Events"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ApplicationEventPublisher.publishEvent()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@EventListener"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@TransactionalEventListener"
            }), " (AFTER_COMMIT, AFTER_ROLLBACK, BEFORE_COMMIT). SpEL condition filtering."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Testing"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@SpringBootTest"
            }), " (full context), test slices (", (0,jsx_runtime.jsx)(_components.code, {
              children: "@DataJpaTest"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@WebMvcTest"
            }), "), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@MockBean"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@SpyBean"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@TestConfiguration"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@DynamicPropertySource"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@ActiveProfiles"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "BeanFactory"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ApplicationContext"
          }), "? Why do most applications use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ApplicationContext"
          }), "?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Explain how Spring discovers classes annotated with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Service"
          }), ". What mechanism ensures that ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Repository"
          }), " triggers exception translation?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why is constructor injection preferred over field or setter injection? List at least four reasons."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Primary"
          }), " interact with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Qualifier"
          }), "? Which takes precedence and why?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What problem does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "scopedProxyMode"
          }), " solve? Describe a scenario where injecting a request-scoped bean into a singleton would fail without a proxy."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the execution order of initialisation callbacks for a single bean? List at least five steps in order."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How do ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Profile"
          }), " expressions work? Write an expression that activates a bean when ", (0,jsx_runtime.jsx)(_components.code, {
            children: "prod"
          }), " is active but ", (0,jsx_runtime.jsx)(_components.code, {
            children: "east-region"
          }), " is not."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Compare ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Lookup"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "jakarta.inject.Provider"
          }), ". Which approach avoids CGLIB subclassing?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@EventListener"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@TransactionalEventListener"
          }), "? When would you use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fallbackExecution = true"
          }), "?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@MockBean"
          }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@SpyBean"
          }), " in a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@SpringBootTest"
          }), "?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Profile-Based DataSource Configuration."
          }), " Create three ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Configuration"
          }), " classes (", (0,jsx_runtime.jsx)(_components.code, {
            children: "DevConfig"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TestConfig"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ProdConfig"
          }), ") each defining a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DataSource"
          }), " bean. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Profile"
          }), " to activate the correct one. Write a service that reports the current data source URL."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Qualifier for Senders."
          }), " Define a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@MessageSender"
          }), " custom qualifier annotation with a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Type"
          }), " enum (", (0,jsx_runtime.jsx)(_components.code, {
            children: "EMAIL"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SMS"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PUSH"
          }), "). Create three sender implementations and a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "NotificationManager"
          }), " that receives all three via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@MessageSender"
          }), " and a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Map<String, MessageSender>"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scoped Proxy Demo."
          }), " Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@RequestScope"
          }), " bean ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RequestContext"
          }), " that holds a UUID and a timestamp. Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Singleton"
          }), " controller that injects ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RequestContext"
          }), ". Write a test that simulates two requests (hint: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MockHttpServletRequest"
          }), ") and verifies each request gets a different ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RequestContext"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Conditional on Environment Variable."
          }), " Implement a custom ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@ConditionalOnOs"
          }), " annotation that accepts ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OS.WINDOWS"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OS.LINUX"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OS.MAC"
          }), ". Create two ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FileSystemManager"
          }), " beans and verify that the correct one is loaded based on the host OS."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Event-Driven Order Pipeline."
          }), " Define ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OrderCreatedEvent"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PaymentProcessedEvent"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ShipmentInitiatedEvent"
          }), ". Create an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OrderService"
          }), " that publishes ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OrderCreatedEvent"
          }), ", a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PaymentProcessor"
          }), " that listens for it and publishes ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PaymentProcessedEvent"
          }), ", and a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ShipmentService"
          }), " that listens for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PaymentProcessedEvent"
          }), " and prints shipping details. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@TransactionalEventListener"
          }), " for the payment step."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Lifecycle Ordered Beans."
          }), " Create three ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SmartLifecycle"
          }), " beans: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DatabaseMigrator"
          }), " (phase 0), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CacheWarmer"
          }), " (phase 10), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "HealthCheckServer"
          }), " (phase 20). Each prints a startup message. Verify the startup order in the console logs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Lookup Method vs Provider."
          }), " Implement the same use case (a singleton ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TaskManager"
          }), " that needs a new ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Worker"
          }), " for each task) twice: once with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Lookup"
          }), " and once with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "jakarta.inject.Provider"
          }), ". Compare the approaches."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "18",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Scope Implementation."
          }), " Implement a custom ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ThreadScope"
          }), " that returns the same bean instance within a single thread but different instances across threads. You will need to implement the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Scope"
          }), " interface and register it with the container. Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@ThreadScoped"
          }), " annotation and verify that two threads executing the same code get different instances."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Runtime Bean Registration."
          }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GenericApplicationContext"
          }), " to dynamically register beans at runtime based on a configuration file or database table. Load a list of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Plugin"
          }), " definitions from a JSON file and register each as a bean. Inject the list of plugins into a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PluginRunner"
          }), " and execute them."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Conditional Auto-Configuration Starter."
          }), " Create a minimal Spring Boot starter ", (0,jsx_runtime.jsx)(_components.code, {
            children: "greeting-spring-boot-starter"
          }), " that auto-configures a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GreetingService"
          }), " bean only when:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "spring.application.greeting.enabled"
            }), " is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), " (default ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A class ", (0,jsx_runtime.jsx)(_components.code, {
              children: "com.example.Greeter"
            }), " is on the classpath"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
              children: "GreetingService"
            }), " bean already exists"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The profile is not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Package this as a JAR and use it in a test application."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Event Sourcing with Application Events."
          }), " Build a simple event sourcing framework: an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EventStore"
          }), " bean that persists every published application event to an in-memory list. Use a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "BeanPostProcessor"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ApplicationListener"
          }), " to automatically capture all events. Provide a controller endpoint ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/events"
          }), " that returns the event history. Ensure ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@TransactionalEventListener"
          }), " events are only stored after the transaction commits."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dependency Injection in a Non-Spring Environment."
          }), " Use the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GenericApplicationContext"
          }), " and manual bean definitions to bootstrap a minimal Spring DI container ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "without"
          }), " component scanning or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Configuration"
          }), " classes. Define five beans with interdependencies entirely through ", (0,jsx_runtime.jsx)(_components.code, {
            children: "BeanDefinitionBuilder"
          }), ". This exercise demonstrates that Spring's DI works independently of its annotation infrastructure."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Circular Dependency Detection and Resolution."
          }), " Create a deliberate circular dependency (", (0,jsx_runtime.jsx)(_components.code, {
            children: "A -> B -> C -> A"
          }), ") and observe the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "BeanCurrentlyInCreationException"
          }), ". Then refactor one of the dependencies to use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Lazy"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Autowired"
          }), " on a setter to break the cycle. Explain which bean gets a proxy and why this resolves the issue."]
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