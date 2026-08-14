"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[43140],{

/***/ 23059
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_09_spring_intro_md_03a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-09-spring-intro-md-03a.json
const site_docs_courses_java_09_spring_intro_md_03a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/09-spring-intro","title":"Introduction to Spring & Spring Boot","description":"Previous Dependency Injection & IoC Container","source":"@site/docs/courses/java/09-spring-intro.md","sourceDirName":"courses/java","slug":"/java/09-spring-intro","permalink":"/ai-engineering-journey/java/09-spring-intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-spring-intro","slug":"/java/09-spring-intro","title":"Introduction to Spring & Spring Boot","sidebar_label":"Introduction to Spring & Spring Boot","sidebar_position":9},"sidebar":"course-java","previous":{"title":"Gradle Deep Dive","permalink":"/ai-engineering-journey/java/08-gradle"},"next":{"title":"Dependency Injection & IoC Container","permalink":"/ai-engineering-journey/java/10-di-container"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/09-spring-intro.md


const frontMatter = {
	id: '09-spring-intro',
	slug: '/java/09-spring-intro',
	title: 'Introduction to Spring & Spring Boot',
	sidebar_label: 'Introduction to Spring & Spring Boot',
	sidebar_position: 9
};
const contentTitle = 'Introduction to Spring & Spring Boot';

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
  "value": "Table of Contents(#1-the-spring-ecosystem)",
  "id": "table-of-contents1-the-spring-ecosystem",
  "level": 2
}, {
  "value": "1. The Spring Ecosystem",
  "id": "1-the-spring-ecosystem",
  "level": 2
}, {
  "value": "1.1 The Problem Spring Solved",
  "id": "11-the-problem-spring-solved",
  "level": 3
}, {
  "value": "1.2 Spring Framework Release History",
  "id": "12-spring-framework-release-history",
  "level": 3
}, {
  "value": "1.3 The Spring Projects → A Modular Ecosystem",
  "id": "13-the-spring-projects--a-modular-ecosystem",
  "level": 3
}, {
  "value": "1.4 Detailed Project Descriptions",
  "id": "14-detailed-project-descriptions",
  "level": 3
}, {
  "value": "1.5 When to Use What",
  "id": "15-when-to-use-what",
  "level": 3
}, {
  "value": "1.6 Spring Community &amp; Governance",
  "id": "16-spring-community--governance",
  "level": 3
}, {
  "value": "2. Inversion of Control &amp; Dependency Injection",
  "id": "2-inversion-of-control--dependency-injection",
  "level": 2
}, {
  "value": "2.1 The Hollywood Principle",
  "id": "21-the-hollywood-principle",
  "level": 3
}, {
  "value": "2.2 Traditional (Tightly Coupled) Approach",
  "id": "22-traditional-tightly-coupled-approach",
  "level": 3
}, {
  "value": "2.3 Dependency Injection (the IoC Implementation)",
  "id": "23-dependency-injection-the-ioc-implementation",
  "level": 3
}, {
  "value": "2.4 The Three Forms of Injection",
  "id": "24-the-three-forms-of-injection",
  "level": 3
}, {
  "value": "2.5 Spring IoC Container → Inside Out",
  "id": "25-spring-ioc-container--inside-out",
  "level": 3
}, {
  "value": "2.6 XML-Based Configuration (Legacy)",
  "id": "26-xml-based-configuration-legacy",
  "level": 3
}, {
  "value": "2.7 Java-Based Configuration (Modern)",
  "id": "27-java-based-configuration-modern",
  "level": 3
}, {
  "value": "2.8 Benefits of IoC/DI → Detailed",
  "id": "28-benefits-of-iocdi--detailed",
  "level": 3
}, {
  "value": "2.9 Spring IoC Container Internals → Simplified",
  "id": "29-spring-ioc-container-internals--simplified",
  "level": 3
}, {
  "value": "3. Spring Boot Philosophy",
  "id": "3-spring-boot-philosophy",
  "level": 2
}, {
  "value": "3.1 The Problem Spring Boot Solves",
  "id": "31-the-problem-spring-boot-solves",
  "level": 3
}, {
  "value": "3.2 Core Tenets of Spring Boot",
  "id": "32-core-tenets-of-spring-boot",
  "level": 3
}, {
  "value": "3.3 Production-Ready Features",
  "id": "33-production-ready-features",
  "level": 3
}, {
  "value": "3.4 Spring Boot Versus Spring Framework",
  "id": "34-spring-boot-versus-spring-framework",
  "level": 3
}, {
  "value": "4. Project Initialization",
  "id": "4-project-initialization",
  "level": 2
}, {
  "value": "4.1 Spring Initializr (start.spring.io)",
  "id": "41-spring-initializr-startspringio",
  "level": 3
}, {
  "value": "4.2 IntelliJ IDEA Ultimate",
  "id": "42-intellij-idea-ultimate",
  "level": 3
}, {
  "value": "4.3 VS Code with Spring Boot Extension Pack",
  "id": "43-vs-code-with-spring-boot-extension-pack",
  "level": 3
}, {
  "value": "4.4 Spring Boot CLI",
  "id": "44-spring-boot-cli",
  "level": 3
}, {
  "value": "4.5 Manual Maven Project Setup",
  "id": "45-manual-maven-project-setup",
  "level": 3
}, {
  "value": "5. Directory Structure",
  "id": "5-directory-structure",
  "level": 2
}, {
  "value": "5.1 Standard Maven/Gradle Layout",
  "id": "51-standard-mavengradle-layout",
  "level": 3
}, {
  "value": "5.2 The main/java Directory",
  "id": "52-the-mainjava-directory",
  "level": 3
}, {
  "value": "5.3 The main/resources Directory",
  "id": "53-the-mainresources-directory",
  "level": 3
}, {
  "value": "5.4 The static/ Directory",
  "id": "54-the-static-directory",
  "level": 3
}, {
  "value": "5.5 The templates/ Directory",
  "id": "55-the-templates-directory",
  "level": 3
}, {
  "value": "5.6 The test/java Directory",
  "id": "56-the-testjava-directory",
  "level": 3
}, {
  "value": "5.7 The Maven Wrapper (mvnw/mvnw.cmd)",
  "id": "57-the-maven-wrapper-mvnwmvnwcmd",
  "level": 3
}, {
  "value": "6. Spring Boot Starters",
  "id": "6-spring-boot-starters",
  "level": 2
}, {
  "value": "6.1 What Is a Starter?",
  "id": "61-what-is-a-starter",
  "level": 3
}, {
  "value": "6.2 Essential Starters",
  "id": "62-essential-starters",
  "level": 3
}, {
  "value": "6.3 The spring-boot-starter (Meta-Starter)",
  "id": "63-the-spring-boot-starter-meta-starter",
  "level": 3
}, {
  "value": "6.4 DevTools → Developer Experience Starter",
  "id": "64-devtools--developer-experience-starter",
  "level": 3
}, {
  "value": "7. Parent POM &amp; Dependency Management",
  "id": "7-parent-pom--dependency-management",
  "level": 2
}, {
  "value": "7.1 The spring-boot-starter-parent",
  "id": "71-the-spring-boot-starter-parent",
  "level": 3
}, {
  "value": "7.2 What the Parent Provides",
  "id": "72-what-the-parent-provides",
  "level": 3
}, {
  "value": "7.3 Overriding a Managed Version",
  "id": "73-overriding-a-managed-version",
  "level": 3
}, {
  "value": "7.4 Without the Parent (Corporate POM)",
  "id": "74-without-the-parent-corporate-pom",
  "level": 3
}, {
  "value": "7.5 Spring Boot Maven Plugin",
  "id": "75-spring-boot-maven-plugin",
  "level": 3
}, {
  "value": "7.7 Gradle Equivalent",
  "id": "77-gradle-equivalent",
  "level": 3
}, {
  "value": "8. The @SpringBootApplication Annotation",
  "id": "8-the-springbootapplication-annotation",
  "level": 2
}, {
  "value": "8.1 One Annotation to Rule Them All",
  "id": "81-one-annotation-to-rule-them-all",
  "level": 3
}, {
  "value": "8.2 The Three Constituent Annotations",
  "id": "82-the-three-constituent-annotations",
  "level": 3
}, {
  "value": "8.3 Putting It All Together",
  "id": "83-putting-it-all-together",
  "level": 3
}, {
  "value": "8.4 Customizing the Application",
  "id": "84-customizing-the-application",
  "level": 3
}, {
  "value": "8.5 The SpringApplication.run() Method",
  "id": "85-the-springapplicationrun-method",
  "level": 3
}, {
  "value": "8.6 Using a Builder",
  "id": "86-using-a-builder",
  "level": 3
}, {
  "value": "9. Embedded Servers",
  "id": "9-embedded-servers",
  "level": 2
}, {
  "value": "9.1 The Embedded Server Concept",
  "id": "91-the-embedded-server-concept",
  "level": 3
}, {
  "value": "9.2 Supported Embedded Servers",
  "id": "92-supported-embedded-servers",
  "level": 3
}, {
  "value": "9.3 Switching to Jetty",
  "id": "93-switching-to-jetty",
  "level": 3
}, {
  "value": "9.4 Switching to Undertow",
  "id": "94-switching-to-undertow",
  "level": 3
}, {
  "value": "9.5 Server Configuration via Properties",
  "id": "95-server-configuration-via-properties",
  "level": 3
}, {
  "value": "9.6 Programmatic Server Configuration",
  "id": "96-programmatic-server-configuration",
  "level": 3
}, {
  "value": "9.7 HTTP/2 Support",
  "id": "97-http2-support",
  "level": 3
}, {
  "value": "9.8 Embedded Server Comparison",
  "id": "98-embedded-server-comparison",
  "level": 3
}, {
  "value": "10. Spring Boot CLI",
  "id": "10-spring-boot-cli",
  "level": 2
}, {
  "value": "10.1 What Is the Spring Boot CLI?",
  "id": "101-what-is-the-spring-boot-cli",
  "level": 3
}, {
  "value": "10.2 Installation",
  "id": "102-installation",
  "level": 3
}, {
  "value": "10.3 Groovy Magic → The Grab Annotations",
  "id": "103-groovy-magic--the-grab-annotations",
  "level": 3
}, {
  "value": "10.4 Complete CLI Application Example",
  "id": "104-complete-cli-application-example",
  "level": 3
}, {
  "value": "10.5 CLI with Profiles and Properties",
  "id": "105-cli-with-profiles-and-properties",
  "level": 3
}, {
  "value": "10.6 Multi-File Applications",
  "id": "106-multi-file-applications",
  "level": 3
}, {
  "value": "10.7 Testing with the CLI",
  "id": "107-testing-with-the-cli",
  "level": 3
}, {
  "value": "10.8 Creating Executable JARs with the CLI",
  "id": "108-creating-executable-jars-with-the-cli",
  "level": 3
}, {
  "value": "10.9 When to Use the CLI",
  "id": "109-when-to-use-the-cli",
  "level": 3
}, {
  "value": "11. Hello World Application",
  "id": "11-hello-world-application",
  "level": 2
}, {
  "value": "11.1 Step 1: Create the Project",
  "id": "111-step-1-create-the-project",
  "level": 3
}, {
  "value": "11.2 Step 2: Examine the Generated Files",
  "id": "112-step-2-examine-the-generated-files",
  "level": 3
}, {
  "value": "11.3 Step 3: Create the REST Controller",
  "id": "113-step-3-create-the-rest-controller",
  "level": 3
}, {
  "value": "11.4 Step 4: Add Application Properties",
  "id": "114-step-4-add-application-properties",
  "level": 3
}, {
  "value": "11.5 Step 5: Add a Custom Banner",
  "id": "115-step-5-add-a-custom-banner",
  "level": 3
}, {
  "value": "11.6 Step 6: Build and Run",
  "id": "116-step-6-build-and-run",
  "level": 3
}, {
  "value": "11.7 Step 7: Verify",
  "id": "117-step-7-verify",
  "level": 3
}, {
  "value": "11.8 Full Application Structure",
  "id": "118-full-application-structure",
  "level": 3
}, {
  "value": "11.9 Adding a Static Welcome Page",
  "id": "119-adding-a-static-welcome-page",
  "level": 3
}, {
  "value": "11.10 Adding a Service Layer",
  "id": "1110-adding-a-service-layer",
  "level": 3
}, {
  "value": "11.11 Unit Testing",
  "id": "1111-unit-testing",
  "level": 3
}, {
  "value": "11.12 Integration Test",
  "id": "1112-integration-test",
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
        id: "introduction-to-spring--spring-boot",
        children: "Introduction to Spring & Spring Boot"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/08-gradle",
          children: "Gradle Deep Dive"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/10-di-container",
          children: "Dependency Injection & IoC Container"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
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
        href: "../../assets/images/lessons/java/09-spring-intro/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/09-spring-intro/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/09-spring-intro/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/09-spring-intro/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/09-spring-intro/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/09-spring-intro/visual-explanation.png",
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
        children: "Trace the history of the Spring ecosystem from 2004 to the present, explaining the role of Spring Framework, Spring Boot, Spring Cloud, Spring Data, Spring Security, and related projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Articulate the Inversion of Control principle, distinguish it from Dependency Injection, and explain the benefits of loose coupling, testability, and lifecycle management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the Spring Boot philosophy of opinionated defaults, auto-configuration, standalone production-grade applications, and embedded servers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize a Spring Boot project using Spring Initializr (start.spring.io), IntelliJ IDEA Ultimate, VS Code with the Spring Boot Extension Pack, and the Spring Boot CLI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Navigate and explain the standard Maven/Gradle project directory structure and the role of each directory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select and configure Spring Boot starters including spring-boot-starter-web, -data-jpa, -security, -test, and -actuator"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure the spring-boot-starter-parent POM, manage dependency versions via properties, and understand the plugin configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the @SpringBootApplication annotation and its constituent meta-annotations: @EnableAutoConfiguration, @ComponentScan, and @Configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Swap the embedded servlet container (Tomcat, Jetty, Undertow) and configure it through application properties"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the Spring Boot CLI to run Groovy-based Spring applications with grab annotations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build and run a complete Hello World REST application step by step"
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
            children: "Spring History"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2004-2024: XML config -> Java config -> auto-configuration -> AOT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring evolved to reduce boilerplate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IoC Principle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container manages object lifecycle and dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loose coupling through DI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Boot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opinionated defaults + embedded server + auto-configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production app in minutes, not days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Starters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curated dependency sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One dependency instead of ten"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Project Setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initializr, CLI, IDE wizards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standardized project structure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Spring History] --> B[IoC & DI]\n    B --> C[Spring Boot Philosophy]\n    C --> D[Project Setup]\n    D --> E[Starters & Dependencies]\n    E --> F[Project Structure]\n    F --> G[Container Configuration]\n    G --> H[Hello World App]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " For any new project, start at start.spring.io. Manually adding Spring dependencies to a bare Maven project is error-prone and wastes time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "table-of-contents1-the-spring-ecosystem",
      children: "Table of Contents(#1-the-spring-ecosystem)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#2-inversion-of-control--dependency-injection",
          children: "Inversion of Control & Dependency Injection"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#3-spring-boot-philosophy",
          children: "Spring Boot Philosophy"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#4-project-initialization",
          children: "Project Initialization"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#5-directory-structure",
          children: "Directory Structure"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#6-spring-boot-starters",
          children: "Spring Boot Starters"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#7-parent-pom--dependency-management",
          children: "Parent POM & Dependency Management"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#8-the-springbootapplication-annotation",
          children: "The @SpringBootApplication Annotation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#9-embedded-servers",
          children: "Embedded Servers"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#10-spring-boot-cli",
          children: "Spring Boot CLI"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#11-hello-world-application",
          children: "Hello World Application"
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
      id: "1-the-spring-ecosystem",
      children: "1. The Spring Ecosystem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/09-spring-intro.png",
        alt: "Spring Ecosystem Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring began in 2004 as a response to the complexity of Enterprise JavaBeans (EJB) 2.x. Rod Johnson's book ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Expert One-on-One J2EE Design and Development\""
      }), " (2002) included 30,000+ lines of example code that became the foundation of the Spring Framework. The first production release, Spring Framework 1.0, shipped in March 2004."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-the-problem-spring-solved",
      children: "1.1 The Problem Spring Solved"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before Spring, J2EE development required:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// EJB 2.x → the pain Spring eliminated\npublic class UserManagerEJB implements SessionBean {\n    private SessionContext ctx;\n\n    // Mandatory EJB lifecycle methods → even if you don't need them\n    public void ejbCreate() {}\n    public void ejbRemove() {}\n    public void ejbActivate() {}\n    public void ejbPassivate() {}\n    public void setSessionContext(SessionContext ctx) {\n        this.ctx = ctx;\n    }\n\n    // Business logic buried under boilerplate\n    public User findUser(Long id) {\n        try {\n            // JNDI lookup → tightly coupled to the container\n            InitialContext ic = new InitialContext();\n            DataSource ds = (DataSource) ic.lookup(\"java:comp/env/jdbc/MyDB\");\n            Connection conn = ds.getConnection();\n            PreparedStatement ps = conn.prepareStatement(\"SELECT * FROM users WHERE id = ?\");\n            ps.setLong(1, id);\n            ResultSet rs = ps.executeQuery();\n            // ... mapping code ...\n            rs.close(); ps.close(); conn.close();\n            return user;\n        } catch (NamingException | SQLException e) {\n            throw new EJBException(e); // Checked-to-runtime wrapper required\n        }\n    }\n}\n// Deployment: XML descriptors, EAR packaging, container restart\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring replaced this with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "plain Java objects (POJOs)"
      }), ", no mandatory interfaces, no container-dictated lifecycle:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Spring → just a POJO\npublic class UserManager {\n    private final DataSource dataSource;\n\n    // Constructor injection → no container dependency\n    public UserManager(DataSource dataSource) {\n        this.dataSource = dataSource;\n    }\n\n    public User findUser(Long id) {\n        // Simple JDBC → or use JdbcTemplate for cleaner code\n        try (Connection conn = dataSource.getConnection();\n             PreparedStatement ps = conn.prepareStatement(\"SELECT * FROM users WHERE id = ?\")) {\n            ps.setLong(1, id);\n            try (ResultSet rs = ps.executeQuery()) {\n                return rs.next() ? mapUser(rs) : null;\n            }\n        } catch (SQLException e) {\n            throw new RuntimeException(e);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-spring-framework-release-history",
      children: "1.2 Spring Framework Release History"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Features"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IoC container, AOP, JDBC abstraction, MVC web framework"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML namespaces, AspectJ integration, JPA support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Annotation-based configuration (@Component, @Autowired)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java-based @Configuration, REST support, Expression Language (SpEL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment profiles, @PropertySource, Cache abstraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java 8 support, WebSocket, JMS 2.0, JPA 2.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2015"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@EventListener, @CrossOrigin, streaming response body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reactive stack (Spring WebFlux), Kotlin support, Java 9 modularity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSocket, observability, data buffers, Java 17 baseline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java 17+ baseline, AOT (Ahead-of-Time) compilation, virtual threads support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual threads, JVM-checkpoint restore (CRaC), SSL hot reload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2025+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continued AOT enhancements, GraalVM native-image improvements"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-the-spring-projects--a-modular-ecosystem",
      children: "1.3 The Spring Projects → A Modular Ecosystem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring is not a single framework. It is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "family of projects"
      }), " built on top of the core Spring Framework:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Spring Ecosystem Map (simplified)\n======================================\nSpring Framework (core: IoC, AOP, MVC, Data Access)\n│\n├── Spring Boot        → Opinionated auto-configuration, embedded servers, starters\n├── Spring Cloud       → Distributed systems (discovery, gateway, config, circuit breakers)\n├── Spring Data        → Unified data access (JPA, MongoDB, Redis, Elasticsearch, etc.)\n├── Spring Security    → Authentication, authorization, OAuth2/OIDC, LDAP\n├── Spring Batch       → High-volume batch processing, job orchestration\n├── Spring Integration → Enterprise Integration Patterns (EIP), messaging adapters\n├── Spring Kafka       → Apache Kafka native support\n├── Spring Modulith    → Modular monoliths, structured module boundaries\n├── Spring AI          → AI SDK integration, vector stores, LLM agents, RAG\n├── Spring GraphQL     → GraphQL server, DataLoader, subscription support\n├── Spring Session     → Distributed session management (Redis, JDBC, Hazelcast)\n├── Spring HATEOAS     → Hypermedia-driven REST APIs\n├── Spring Shell       → Interactive CLI applications\n└── Spring Mobile      → Device detection, mobile views (maintenance mode)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each project follows the same philosophy: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "POJO-centric, annotation-driven, convention over configuration"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-detailed-project-descriptions",
      children: "1.4 Detailed Project Descriptions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Framework"
      }), " → The foundation. Provides the IoC container, AOP framework, MVC web framework (Servlets), WebFlux (reactive), transaction management, and data access support. Every other Spring project depends on it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Boot"
      }), " → Bootstraps Spring applications with minimal configuration. Auto-configures beans based on classpath dependencies, provides embedded servers (Tomcat, Jetty, Undertow), externalized configuration, health checks, and production-ready features. The de facto way to build Spring applications since 2014."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Cloud"
      }), " → Tools for distributed systems: service discovery (Eureka, Consul), API gateways (Spring Cloud Gateway), distributed configuration (Config Server), circuit breakers (Resilience4j integration), distributed tracing (Micrometer + Zipkin), and load balancing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Data"
      }), " → A consistent data access programming model across relational and NoSQL databases. Provides repository abstractions: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JpaRepository"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MongoRepository"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ElasticsearchRepository"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RedisRepository"
      }), ". Key modules: Spring Data JPA, MongoDB, Redis, Elasticsearch, JDBC, REST, Neo4j, Gemfire."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Security"
      }), " → Comprehensive authentication and authorization. Supports form-based login, HTTP Basic, Digest, LDAP, OAuth2 (authorization server and resource server), OpenID Connect (OIDC), SAML 2.0, ACL-based, method security, and reactive security."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Batch"
      }), " → Batch processing: read-process-write chunks, partitioning, job restart, skip/retry, multi-threaded steps, job repository, scheduling integration."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Integration"
      }), " → Enterprise Integration Patterns (EIP): channels, routers, transformers, filters, gateways, service activators. Connects systems via JMS, AMQP, Kafka, MQTT, FTP/SFTP, file system, TCP/UDP, mail."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring AI"
      }), " → Latest addition (2024+). Integrates AI SDKs (OpenAI, Anthropic, Ollama, Hugging Face), vector stores (pgvector, Pinecone, Chroma), embeddings, and RAG patterns into the Spring programming model."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Modulith"
      }), " → Modular monolith architecture. Enforces module boundaries, verifies package dependencies, generates C4 diagrams, supports event-driven communication between modules, and provides a migration path to microservices."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring GraalVM Native"
      }), " → Compiles Spring applications to native executables via GraalVM native-image. Reduces startup time to milliseconds and memory footprint significantly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-when-to-use-what",
      children: "1.5 When to Use What"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Project Type                          | Recommended Stack\n--------------------------------------|---------------------------------------------\nMonolithic web app (CRUD)            | Spring Boot + Spring Data JPA + Thymeleaf/React\nREST API (microservice)              | Spring Boot + Spring Data JPA + Spring Security\nDistributed microservices            | Spring Boot + Spring Cloud + Spring Cloud Gateway\nEvent-driven system                  | Spring Boot + Spring Kafka + Spring Integration\nReactive, high-concurrency          | Spring Boot + WebFlux + R2DBC + Spring Data MongoDB\nBatch processing (ETL, reports)      | Spring Boot + Spring Batch + Spring Data JPA\nModular monolith (scalable)          | Spring Boot + Spring Modulith + Spring Data JPA\nAI-augmented application             | Spring Boot + Spring AI + pgvector + Spring Data\nGraphQL API                          | Spring Boot + Spring GraphQL + Spring Data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-spring-community--governance",
      children: "1.6 Spring Community & Governance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring is developed under the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apache 2.0 license"
      }), " and governed by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VMware (Broadcom)"
      }), " since the Pivotal acquisition in 2019. The core team includes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rod Johnson"
        }), " → Founder, created Spring Framework 1.0 (left 2012)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Juergen Hoeller"
        }), " → Core committer since 2003, lead of Spring Framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "StÃ©phane Nicoll"
        }), " → Spring Boot lead"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Andy Wilkinson"
        }), " → Spring Boot build and release"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rossen Stoyanchev"
        }), " → Reactive/WebFlux lead"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rob Winch"
        }), " → Spring Security lead"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The community is vast: 900+ contributors, 40,000+ stars on GitHub, and the largest annual conference (SpringOne) draws thousands of developers. The ecosystem has been the most popular Java framework for over a decade, used by startups and Fortune 500 companies alike."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-inversion-of-control--dependency-injection",
      children: "2. Inversion of Control & Dependency Injection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-the-hollywood-principle",
      children: "2.1 The Hollywood Principle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inversion of Control (IoC) is captured by the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hollywood Principle"
      }), ": ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Don't call us, we'll call you.\""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In traditional procedural programming, your code calls into library functions. In an IoC container, the framework controls the flow and calls your code:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Traditional programming:\n  main() → calls library functions → returns → done\n\nIoC container:\n  Container starts → scans for beans → resolves dependencies →\n  calls your code (callbacks) → manages lifecycle → done\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-traditional-tightly-coupled-approach",
      children: "2.2 Traditional (Tightly Coupled) Approach"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Tight coupling → Service creates its own dependencies\npublic class EmailService {\n    private SmtpServer smtpServer;\n\n    public EmailService() {\n        // The service is responsible for creating its transport layer\n        this.smtpServer = new SmtpServer(\"smtp.gmail.com\", 587);\n    }\n\n    public void send(String to, String body) {\n        smtpServer.send(to, body);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Problems with this approach:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hard to test"
        }), " → You cannot replace ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SmtpServer"
        }), " with a mock in unit tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hard to change"
        }), " → Switching from SMTP to an API-based email provider requires changing the service code"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hidden dependencies"
        }), " → The constructor signature does not reveal what the class needs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No lifecycle management"
        }), " → Connection pooling, retry logic, and resource cleanup become scattered"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-dependency-injection-the-ioc-implementation",
      children: "2.3 Dependency Injection (the IoC Implementation)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dependency Injection (DI) is the primary way Spring implements IoC. Instead of the class creating its own dependencies, the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "container injects them"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Loose coupling → dependencies are injected, not created\npublic class EmailService {\n    private final MailSender mailSender;\n\n    // Constructor Injection → dependencies passed by the container\n    public EmailService(MailSender mailSender) {\n        this.mailSender = mailSender;\n    }\n\n    public void send(String to, String body) {\n        mailSender.send(to, body);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-the-three-forms-of-injection",
      children: "2.4 The Three Forms of Injection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring supports three injection styles:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constructor Injection (preferred):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class OrderService {\n    private final PaymentGateway paymentGateway;\n    private final InventoryService inventoryService;\n\n    // The container calls this constructor with resolved dependencies\n    public OrderService(PaymentGateway paymentGateway,\n                       InventoryService inventoryService) {\n        this.paymentGateway = paymentGateway;\n        this.inventoryService = inventoryService;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Benefits: immutable fields, mandatory dependencies, easier testing with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new"
      }), ", no reflection-based injection at runtime."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Setter Injection (optional dependencies):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class NotificationService {\n    private MailSender mailSender;\n    private SmsSender smsSender;  // optional\n\n    @Autowired  // tells Spring to inject this dependency via the setter\n    public void setMailSender(MailSender mailSender) {\n        this.mailSender = mailSender;\n    }\n\n    @Autowired(required = false)  // if no SmsSender bean exists, skip\n    public void setSmsSender(SmsSender smsSender) {\n        this.smsSender = smsSender;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Suitable for optional dependencies that can be reconfigured at runtime."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Field Injection (not recommended):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class ReportService {\n    @Autowired  // injects directly into the private field via reflection\n    private ReportRepository repository;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Problems: no way to create the object without the container, violates encapsulation, hides dependencies, impossible to unit test without reflection support."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-spring-ioc-container--inside-out",
      children: "2.5 Spring IoC Container → Inside Out"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The IoC container is represented by two main interfaces:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// BeanFactory → the simplest container (lazy initialization)\norg.springframework.beans.factory.BeanFactory\n\n// ApplicationContext → the full container (eager initialization, events, AOP)\norg.springframework.context.ApplicationContext\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationContext"
      }), " (the most commonly used) provides:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bean instantiation and wiring"
        }), " → Creates and assembles beans"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lifecycle management"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PostConstruct"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PreDestroy"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "InitializingBean"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DisposableBean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AOP integration"
        }), " → Aspect-oriented weaving"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internationalization"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MessageSource"
        }), " for i18n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Event publishing"
        }), " → Application events with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@EventListener"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Environment abstraction"
        }), " → Profiles and property sources"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource loading"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ResourceLoader"
        }), " for file, URL, classpath resources"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-xml-based-configuration-legacy",
      children: "2.6 XML-Based Configuration (Legacy)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before annotations, all Spring configuration was XML. You still encounter this in legacy projects:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<beans xmlns=\"http://www.springframework.org/schema/beans\"\n       xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n       xsi:schemaLocation=\"\n           http://www.springframework.org/schema/beans\n           http://www.springframework.org/schema/beans/spring-beans.xsd\">\n\n    <!-- Bean declaration with constructor injection -->\n    <bean id=\"emailService\" class=\"com.example.EmailService\">\n        <constructor-arg ref=\"smtpServer\"/>\n    </bean>\n\n    <!-- Bean declaration with property values -->\n    <bean id=\"smtpServer\" class=\"com.example.SmtpServer\">\n        <constructor-arg name=\"host\" value=\"smtp.gmail.com\"/>\n        <constructor-arg name=\"port\" value=\"587\"/>\n    </bean>\n\n    <!-- Inner bean and factory method -->\n    <bean id=\"connectionPool\" class=\"com.zaxxer.hikari.HikariDataSource\"\n          factory-method=\"forConnection\">\n        <property name=\"jdbcUrl\" value=\"jdbc:postgresql://localhost:5432/mydb\"/>\n        <property name=\"username\" value=\"app\"/>\n        <property name=\"password\" value=\"secret\"/>\n    </bean>\n</beans>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Loading the XML context:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "ApplicationContext ctx = new ClassPathXmlApplicationContext(\"applicationContext.xml\");\nEmailService service = ctx.getBean(EmailService.class);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-java-based-configuration-modern",
      children: "2.7 Java-Based Configuration (Modern)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern Spring Boot uses Java-based configuration almost exclusively:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Equivalent to the XML above\n@Configuration\npublic class AppConfig {\n\n    @Bean\n    public SmtpServer smtpServer() {\n        return new SmtpServer(\"smtp.gmail.com\", 587);\n    }\n\n    @Bean\n    public EmailService emailService(SmtpServer smtpServer) {\n        return new EmailService(smtpServer);\n    }\n\n    @Bean\n    public DataSource dataSource() {\n        HikariDataSource ds = new HikariDataSource();\n        ds.setJdbcUrl(\"jdbc:postgresql://localhost:5432/mydb\");\n        ds.setUsername(\"app\");\n        ds.setPassword(\"secret\");\n        return ds;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "28-benefits-of-iocdi--detailed",
      children: "2.8 Benefits of IoC/DI → Detailed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Loose Coupling:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Using interfaces, the consumer depends on abstraction, not implementation\npublic interface PaymentGateway {\n    PaymentResult charge(Long orderId, BigDecimal amount);\n}\n\n@Component\npublic class PaymentService {\n    private final PaymentGateway gateway;     // depends on interface\n\n    public PaymentService(PaymentGateway gateway) { // any implementation\n        this.gateway = gateway;\n    }\n}\n\n@Component\npublic class StripePaymentGateway implements PaymentGateway { ... }\n\n@Component\npublic class PayPalPaymentGateway implements PaymentGateway { ... }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testability:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Unit test without Spring\nclass PaymentServiceTest {\n    @Test\n    void testSuccessfulPayment() {\n        PaymentGateway mock = mock(PaymentGateway.class);\n        when(mock.charge(anyLong(), any())).thenReturn(PaymentResult.success());\n\n        PaymentService service = new PaymentService(mock);  // manual DI\n\n        var result = service.processOrder(42L, new BigDecimal(\"19.99\"));\n\n        assertThat(result.isSuccess()).isTrue();\n        verify(mock).charge(42L, new BigDecimal(\"19.99\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle Management:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class DatabaseConnectionManager {\n    private ConnectionPool pool;\n\n    @PostConstruct\n    public void init() {\n        // Called after all dependencies are injected and bean is fully configured\n        pool = new ConnectionPool(\"jdbc:postgresql://...\", 10, 50);\n        pool.initialize();\n        logger.info(\"Connection pool initialized with {} connections\", pool.getSize());\n    }\n\n    @PreDestroy\n    public void cleanup() {\n        // Called before the bean is destroyed by the container\n        pool.shutdown();\n        logger.info(\"Connection pool shut down\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope Management:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\n@Scope(\"singleton\")  // default → one instance per container\npublic class AppCache { ... }\n\n@Component\n@Scope(\"prototype\")  // new instance for every injection point\npublic class RequestBuilder { ... }\n\n@Component\n@Scope(\"request\")    // one instance per HTTP request (web-aware context)\n@Scope(\"session\")    // one instance per HTTP session\n@Scope(\"application\")// one instance per ServletContext\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "29-spring-ioc-container-internals--simplified",
      children: "2.9 Spring IoC Container Internals → Simplified"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "                         SpringApplication.run()\n                                  │\n                                  ▼\n                     ┌─────────────────────┐\n                     │   ClassPathScanner   │\n                     │   (@ComponentScan)   │\n                     └─────────┬───────────┘\n                               │\n                 Scanned classes found\n                               │\n                               ▼\n                     ┌─────────────────────┐\n                     │   BeanDefinition     │\n                     │   Registry           │\n                     │   (all @Component,   │\n                     │    @Bean methods,    │\n                     │    XML <bean>)       │\n                     └─────────┬───────────┘\n                               │\n                     dependency graph built\n                               │\n                               ▼\n                     ┌─────────────────────┐\n                     │   BeanFactory        │\n                     │   (instantiation &   │\n                     │    injection)        │\n                     └─────────┬───────────┘\n                               │\n                    Singletons created, \n                    @PostConstruct called\n                               │\n                               ▼\n                     ┌─────────────────────┐\n                     │ Ready Application    │\n                     │ Context              │\n                     │ (all beans wired,    │\n                     │  embedded server up) │\n                     └─────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-spring-boot-philosophy",
      children: "3. Spring Boot Philosophy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-the-problem-spring-boot-solves",
      children: "3.1 The Problem Spring Boot Solves"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before Spring Boot, setting up a Spring application involved:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- Typical pom.xml circa 2013 → dozens of manual version matches -->\n<properties>\n    <spring.version>4.0.5.RELEASE</spring.version>\n    <spring-security.version>3.2.5.RELEASE</spring-security.version>\n    <hibernate.version>4.3.6.Final</hibernate.version>\n    <jackson.version>2.4.3</jackson.version>\n    <slf4j.version>1.7.12</slf4j.version>\n    <logback.version>1.1.2</logback.version>\n</properties>\n\n<dependencies>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-webmvc</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-orm</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.security</groupId>\n        <artifactId>spring-security-web</artifactId>\n        <version>${spring-security.version}</version>\n    </dependency>\n    <!-- ... 20+ more dependencies, managing versions manually ... -->\n</dependencies>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plus XML configuration for component scanning, annotation-driven MVC, view resolvers, data source, transaction manager, Jackson, message converters, and more."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Boot reduced this to:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<parent>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-parent</artifactId>\n    <version>3.4.0</version>\n</parent>\n\n<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n</dependencies>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-core-tenets-of-spring-boot",
      children: "3.2 Core Tenets of Spring Boot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Opinionated Defaults:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot makes decisions for you based on what it finds on the classpath. If you have ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-starter-web"
      }), " on the classpath, Spring Boot assumes you want:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "An embedded Tomcat server on port 8080"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spring MVC with Jackson for JSON serialization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logback for logging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A standard error page"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "And dozens of other sensible defaults"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All of these can be overridden, but the defaults work for 80% of use cases."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Auto-Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@EnableAutoConfiguration"
      }), " (included in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootApplication"
      }), ") triggers hundreds of auto-configuration classes. Each class checks conditions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Simplified example → Spring Boot's actual DataSourceAutoConfiguration\n@AutoConfiguration\n@ConditionalOnClass(DataSource.class)         // is H2/PostgreSQL on the classpath?\n@ConditionalOnMissingBean(DataSource.class)   // did the user define their own?\n@EnableConfigurationProperties(DataSourceProperties.class)\npublic class DataSourceAutoConfiguration {\n\n    @Bean\n    @ConditionalOnMissingBean\n    public DataSource dataSource(DataSourceProperties properties) {\n        // Creates an HikariCP DataSource with sensible defaults\n        return properties.initializeDataSourceBuilder()\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Conditional*"
      }), " annotations make auto-configuration smart:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Annotation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Triggers When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ConditionalOnClass"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A class is on the classpath"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ConditionalOnMissingBean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No bean of this type exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ConditionalOnProperty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A property has a specific value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ConditionalOnExpression"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A SpEL expression evaluates to true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ConditionalOnResource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A resource file exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ConditionalOnWebApplication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application is a web app"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ConditionalOnNotWebApplication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application is not a web app"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ConditionalOnJava"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A specific Java version is detected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ConditionalOnEnabledHealthIndicator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An Actuator health indicator is enabled"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standalone Production-Grade:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot apps are run with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java -jar myapp.jar"
      }), ". No application server installation is needed. The JAR bundles everything → class files, dependencies, and the embedded server → in a single executable archive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reduced Boilerplate:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compare a pre-Boot Spring MVC application setup with Spring Boot:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Pre-Boot: Manual configuration\n@Configuration\n@EnableWebMvc\n@ComponentScan(\"com.example\")\npublic class WebConfig implements WebMvcConfigurer {\n    @Bean\n    public ViewResolver viewResolver() {\n        InternalResourceViewResolver resolver = new InternalResourceViewResolver();\n        resolver.setPrefix(\"/WEB-INF/jsp/\");\n        resolver.setSuffix(\".jsp\");\n        return resolver;\n    }\n\n    @Bean\n    public MessageSource messageSource() {\n        ReloadableResourceBundleMessageSource ms = new ReloadableResourceBundleMessageSource();\n        ms.setBasename(\"classpath:messages\");\n        ms.setDefaultEncoding(\"UTF-8\");\n        return ms;\n    }\n\n    @Override\n    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {\n        configurer.enable();\n    }\n}\n\n// Boot: Zero configuration\n// Just add spring-boot-starter-web and Thymeleaf/Freemarker on classpath\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-production-ready-features",
      children: "3.3 Production-Ready Features"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot Actuator adds production monitoring with zero code:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties\nmanagement.endpoints.web.exposure.include=health,info,metrics,env,beans\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Production health check\ncurl http://localhost:8080/actuator/health\n{\"status\":\"UP\"}\n\n# Detailed metrics\ncurl http://localhost:8080/actuator/metrics\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-spring-boot-versus-spring-framework",
      children: "3.4 Spring Boot Versus Spring Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Aspect              | Spring Framework        | Spring Boot\n--------------------|------------------------|-----------------------------\nConfiguration       | Manual XML/Java config  | Auto-configuration + starters\nServer              | External (Tomcat/Jetty) | Embedded (Tomcat default)\nPackaging           | WAR file                | Executable JAR\nDeployment          | Application server      | java -jar\nDependency Mgmt     | Manual versions         | Starter POM managed versions\nProduction Features | None built-in           | Actuator (health, metrics)\nStartup Time        | Slower (deploy + start) | Faster (embedded, auto-config)\nFlexibility         | Maximum control         | Opinionated (configurable)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-project-initialization",
      children: "4. Project Initialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-spring-initializr-startspringio",
      children: "4.1 Spring Initializr (start.spring.io)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The easiest way to create a Spring Boot project. Visit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://start.spring.io"
      }), " in any browser:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Spring Initializr Web UI → Fields\n==================================\nProject:          Gradle (Kotlin)  |  Gradle (Groovy)  |  Maven\nLanguage:         Java  |  Kotlin  |  Groovy\nSpring Boot:      3.4.0 (latest stable)  |  3.3.x  |  3.2.x\nGroup:            com.example\nArtifact:         my-app\nName:             my-app\nDescription:      Demo project for Spring Boot\nPackage name:     com.example.myapp\nPackaging:        Jar  |  War\nJava:             21  |  17  |  11\n\nDependencies:\n  ┌─ Spring Web         (spring-boot-starter-web)\n  ├─ Spring Data JPA    (spring-boot-starter-data-jpa)\n  ├─ Spring Security    (spring-boot-starter-security)\n  ├─ Spring Boot Actuator (spring-boot-starter-actuator)\n  ├─ PostgreSQL Driver  (postgresql)\n  ├─ Lombok             (lombok)\n  ├─ Spring Boot DevTools (spring-boot-devtools)\n  └─ Validation         (spring-boot-starter-validation)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generate"
      }), " to download a ZIP with the full project skeleton."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-intellij-idea-ultimate",
      children: "4.2 IntelliJ IDEA Ultimate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IntelliJ IDEA Ultimate has built-in Spring Initializr integration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "File → New → Project...\n  ├── New Project → Spring Boot\n  │   ├── Language: Java\n  │   ├── Type: Maven  |  Gradle\n  │   ├── JDK: 21\n  │   ├── Java: 21\n  │   └── Spring Boot: 3.4.0\n  │\n  ├── Project Metadata\n  │   ├── Group: com.example\n  │   ├── Artifact: my-app\n  │   ├── Package: com.example.myapp\n  │   └── Dependencies → Add: Spring Web, Spring Data JPA, etc.\n  │\n  └── Finish\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IntelliJ downloads the same Initializr template and opens it as a ready-to-run project. Community Edition does NOT have Spring Boot Initializr → use start.spring.io."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-vs-code-with-spring-boot-extension-pack",
      children: "4.3 VS Code with Spring Boot Extension Pack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install the Spring Boot Extension Pack:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# VS Code extensions marketplace\ncode --install-extension vmware.vscode-spring-boot\ncode --install-extension vscjava.vscode-spring-initializr\ncode --install-extension vscjava.vscode-spring-boot-dashboard\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Ctrl+Shift+P → Spring Initializr → Create a Maven/Gradle Project\n  → Specify Spring Boot version (3.4.0)\n  → Specify language (Java)\n  → Specify Group Id, Artifact Id\n  → Select dependencies (Web, JPA, etc.)\n  → Choose output location\n  → Open the generated project\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-spring-boot-cli",
      children: "4.4 Spring Boot CLI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Spring Boot CLI provides the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring init"
      }), " command for terminal-based project creation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install Spring Boot CLI via SDKMAN\nsdk install springboot\n\n# Verify installation\nspring --version\n# Spring CLI v3.4.0\n\n# Create a project from the command line\nspring init \\\n  --build=maven \\\n  --java-version=21 \\\n  --group-id=com.example \\\n  --artifact-id=my-app \\\n  --name=my-app \\\n  --dependencies=web,data-jpa,postgresql,lombok,actuator \\\n  my-app.zip\n\n# Unzip and explore\nunzip my-app.zip -d my-app\ncd my-app\n\n# Create a simpler project in a directory\nmkdir hello-world\ncd hello-world\nspring init --build=maven --java-version=21 --dependencies=web .\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Available Spring CLI commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "spring init          # Create a new project (uses start.spring.io)\nspring run           # Run a Groovy script without compilation\nspring test          # Run tests\nspring jar           # Create an executable JAR\nspring war           # Create an executable WAR\nspring install       # Install Spring Boot CLI shell completions\nspring shell         # Interactive shell\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-manual-maven-project-setup",
      children: "4.5 Manual Maven Project Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can also create a Spring Boot project entirely from scratch:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "mkdir my-app\ncd my-app\nmkdir -p src/main/java/com/example/myapp\nmkdir -p src/main/resources\nmkdir -p src/test/java/com/example/myapp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- pom.xml -->\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"\n             http://maven.apache.org/POM/4.0.0\n             https://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.4.0</version>\n        <relativePath/>\n    </parent>\n\n    <groupId>com.example</groupId>\n    <artifactId>my-app</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <name>my-app</name>\n    <description>Demo project for Spring Boot</description>\n\n    <properties>\n        <java.version>21</java.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// src/main/java/com/example/myapp/MyAppApplication.java\npackage com.example.myapp;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class MyAppApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(MyAppApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-directory-structure",
      children: "5. Directory Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-standard-mavengradle-layout",
      children: "5.1 Standard Maven/Gradle Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every Spring Boot project follows a standard layout:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "my-app/\n│\n├── pom.xml                              # Maven build file (or build.gradle for Gradle)\n│\n├── src/\n│   ├── main/\n│   │   ├── java/                        # Java source files\n│   │   │   └── com/example/myapp/\n│   │   │       ├── MyAppApplication.java       # Main class (@SpringBootApplication)\n│   │   │       ├── controller/                 # REST controllers\n│   │   │       ├── service/                    # Business logic\n│   │   │       ├── repository/                 # Data access (JPA repositories)\n│   │   │       ├── model/                      # Entities / DTOs\n│   │   │       ├── config/                     # @Configuration classes\n│   │   │       ├── dto/                        # Data Transfer Objects\n│   │   │       ├── exception/                  # Custom exceptions / handlers\n│   │   │       └── util/                       # Utility classes\n│   │   │\n│   │   └── resources/                   # Application resources\n│   │       ├── application.properties   # Primary configuration (or application.yml)\n│   │       ├── application-dev.yml      # Profile-specific config (development)\n│   │       ├── application-prod.yml     # Profile-specific config (production)\n│   │       ├── static/                  # Static resources (CSS, JS, images)\n│   │       │   ├── css/\n│   │       │   ├── js/\n│   │       │   └── images/\n│   │       ├── templates/               # Server-side templates (Thymeleaf, Freemarker)\n│   │       ├── messages.properties      # i18n message bundles\n│   │       ├── messages_es.properties\n│   │       ├── messages_fr.properties\n│   │       ├── banner.txt               # Custom ASCII art banner\n│   │       ├── logback-spring.xml       # Logging configuration (optional)\n│   │       └── db/migration/            # Flyway/Liquibase migration scripts\n│   │           ├── V1__init_schema.sql\n│   │           └── V2__add_indexes.sql\n│   │\n│   └── test/\n│       └── java/                        # Test source files\n│           └── com/example/myapp/\n│               ├── MyAppApplicationTests.java       # Context load test\n│               ├── controller/\n│               │   └── HelloControllerTest.java\n│               └── service/\n│                   └── UserServiceTest.java\n│\n├── .gitignore\n├── README.md\n├── HELP.md                              # Spring Initializr-generated help\n├── mvnw                                 # Maven Wrapper (Unix)\n├── mvnw.cmd                             # Maven Wrapper (Windows)\n└── .mvn/\n    └── wrapper/\n        └── maven-wrapper.properties\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-the-mainjava-directory",
      children: "5.2 The main/java Directory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is where all application source code lives. Package structure typically follows a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "layered architecture"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "com.example.myapp/\n  ├── MyAppApplication.java          # Application entry point\n  ├── controller/                    # REST API endpoints\n  │   ├── GreetingController.java\n  │   └── UserController.java\n  ├── service/                       # Business logic\n  │   ├── GreetingService.java\n  │   └── UserService.java\n  ├── repository/                    # Database access\n  │   └── UserRepository.java\n  ├── model/                         # JPA entities\n  │   └── User.java\n  └── config/                        # Configuration classes\n      ├── SecurityConfig.java\n      └── AppConfig.java\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-the-mainresources-directory",
      children: "5.3 The main/resources Directory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Contains configuration files, static assets, and templates:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application.yml → Primary configuration\nserver:\n  port: 8080\n  servlet:\n    context-path: /api\n\nspring:\n  datasource:\n    url: jdbc:postgresql://localhost:5432/mydb\n    username: app_user\n    password: ${DB_PASSWORD}  # environment variable resolution\n  jpa:\n    hibernate:\n      ddl-auto: validate\n    show-sql: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties → Alternative to YAML\nserver.port=8080\nserver.servlet.context-path=/api\nspring.datasource.url=jdbc:postgresql://localhost:5432/mydb\nspring.datasource.username=app_user\nspring.datasource.password=${DB_PASSWORD}\nspring.jpa.hibernate.ddl-auto=validate\nspring.jpa.show-sql=false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Profile-specific files:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application-dev.yml → Development profile\nserver:\n  port: 8080\n\nspring:\n  datasource:\n    url: jdbc:h2:mem:testdb\n  jpa:\n    hibernate:\n      ddl-auto: create-drop\n    show-sql: true\n\nlogging:\n  level:\n    com.example: DEBUG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application-prod.yml → Production profile\nserver:\n  port: 80\n\nspring:\n  datasource:\n    url: jdbc:postgresql://prod-db:5432/mydb\n    hikari:\n      maximum-pool-size: 20\n      minimum-idle: 5\n  jpa:\n    hibernate:\n      ddl-auto: validate\n\nlogging:\n  level:\n    com.example: WARN\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-the-static-directory",
      children: "5.4 The static/ Directory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For non-dynamic web resources served without server-side processing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "static/\n  ├── index.html              # Served at /\n  ├── css/\n  │   └── styles.css\n  ├── js/\n  │   └── app.js\n  ├── images/\n  │   ├── logo.png\n  │   └── banner.jpg\n  └── favicon.ico             # Auto-detected by Spring Boot\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-the-templates-directory",
      children: "5.5 The templates/ Directory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For server-side template engines (Thymeleaf, Freemarker, Mustache, Groovy Templates):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!-- src/main/resources/templates/greeting.html (Thymeleaf) -->\n<!DOCTYPE html>\n<html xmlns:th=\"http://www.thymeleaf.org\">\n<head>\n    <title>Greeting</title>\n</head>\n<body>\n    <h1 th:text=\"${message}\">Default Message</h1>\n    <p>Current time: <span th:text=\"${#dates.createNow()}\">time</span></p>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Controller\npublic class GreetingWebController {\n\n    @GetMapping(\"/greet\")\n    public String greet(Model model) {\n        model.addAttribute(\"message\", \"Hello from Spring Boot!\");\n        return \"greeting\";  // resolves to templates/greeting.html\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-the-testjava-directory",
      children: "5.6 The test/java Directory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mirrors the main source structure. Spring Boot pre-configures a test that verifies the application context loads:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.myapp;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.boot.test.context.SpringBootTest;\n\n@SpringBootTest  // loads the full application context\nclass MyAppApplicationTests {\n\n    @Test\n    void contextLoads() {\n        // This test fails if the application context cannot start\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "57-the-maven-wrapper-mvnwmvnwcmd",
      children: "5.7 The Maven Wrapper (mvnw/mvnw.cmd)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ensures the correct Maven version is used without requiring Maven to be installed globally:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# On Unix/macOS\n./mvnw clean package\n\n# On Windows\nmvnw.cmd clean package\n\n# The first run downloads the Maven version specified in .mvn/wrapper/maven-wrapper.properties\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-spring-boot-starters",
      children: "6. Spring Boot Starters"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-what-is-a-starter",
      children: "6.1 What Is a Starter?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "starter"
      }), " is a curated set of dependencies that provides everything needed for a specific feature. Instead of listing 15 individual JARs for a web application, you add one dependency:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- One starter instead of 15+ manual dependencies -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The starter's own ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pom.xml"
      }), " (the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "starter POM"
      }), ") bundles all required transitive dependencies:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- spring-boot-starter-web (conceptual dependency tree) -->\n<dependencies>\n    <!-- Core Spring Framework -->\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter</artifactId>\n    </dependency>\n\n    <!-- Spring MVC -->\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-webmvc</artifactId>\n    </dependency>\n\n    <!-- Embedded Tomcat -->\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-tomcat</artifactId>\n    </dependency>\n\n    <!-- Jackson for JSON -->\n    <dependency>\n        <groupId>com.fasterxml.jackson.core</groupId>\n        <artifactId>jackson-databind</artifactId>\n    </dependency>\n\n    <!-- Hibernate Validator -->\n    <dependency>\n        <groupId>org.hibernate.validator</groupId>\n        <artifactId>hibernate-validator</artifactId>\n    </dependency>\n\n    <!-- Embedded logging (Logback) -->\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-logging</artifactId>\n    </dependency>\n\n    <!-- Spring Boot testing (JUnit, Mockito, etc.) -->\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-test</artifactId>\n        <scope>test</scope>\n    </dependency>\n</dependencies>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-essential-starters",
      children: "6.2 Essential Starters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Starters:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- Core → minimal Spring Boot application (auto-config, logging, YAML) -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter</artifactId>\n</dependency>\n\n<!-- Web → REST APIs, MVC, embedded Tomcat, Jackson -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n</dependency>\n\n<!-- WebFlux → reactive web applications -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-webflux</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Starters:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- JPA + Hibernate + HikariCP + Auto-configured DataSource -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-jpa</artifactId>\n</dependency>\n\n<!-- Spring Data MongoDB -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-mongodb</artifactId>\n</dependency>\n\n<!-- Spring Data Redis -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-redis</artifactId>\n</dependency>\n\n<!-- Spring Data Elasticsearch -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-elasticsearch</artifactId>\n</dependency>\n\n<!-- JDBC with HikariCP (no JPA) -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-jdbc</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Starters:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- Spring Security + auto-configuration -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-security</artifactId>\n</dependency>\n\n<!-- OAuth2 Client (social login: Google, GitHub, Facebook) -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-oauth2-client</artifactId>\n</dependency>\n\n<!-- OAuth2 Resource Server (JWT validation) -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing Starter:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- JUnit 5, Mockito, AssertJ, Hamcrest, JSONassert, JsonPath -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-test</artifactId>\n    <scope>test</scope>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This single starter includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JUnit 5"
        }), " (junit-jupiter) → Test framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mockito"
        }), " → Mocking framework (5.x)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AssertJ"
        }), " → Fluent assertions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hamcrest"
        }), " → Matcher library"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JSONassert"
        }), " → JSON comparison"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JsonPath"
        }), " → JSON path queries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spring Test"
        }), " → Test utilities and TestContext framework"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Production Starters:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- Actuator → health, metrics, env, beans, loggers, etc. -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n\n<!-- Validation → Bean Validation (Hibernate Validator) -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-validation</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Starters:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- Thymeleaf → server-side HTML templates -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-thymeleaf</artifactId>\n</dependency>\n\n<!-- Mustache → logic-less templates -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-mustache</artifactId>\n</dependency>\n\n<!-- Apache Freemarker -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-freemarker</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Messaging Starters:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- Apache Kafka -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-kafka</artifactId>\n</dependency>\n\n<!-- RabbitMQ / AMQP -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-amqp</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Other Notable Starters:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- Batch processing -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-batch</artifactId>\n</dependency>\n\n<!-- Hazelcast (caching / distributed computing) -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-hazelcast</artifactId>\n</dependency>\n\n<!-- Mail (JavaMail) -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-mail</artifactId>\n</dependency>\n\n<!-- Quartz Scheduler -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-quartz</artifactId>\n</dependency>\n\n<!-- WebSocket -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-websocket</artifactId>\n</dependency>\n\n<!-- JTA transactions (Atomikos) -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-jta-atomikos</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-the-spring-boot-starter-meta-starter",
      children: "6.3 The spring-boot-starter (Meta-Starter)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "core starter"
      }), " that all other starters include transitively:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter</artifactId>\n    <version>3.4.0</version>\n    <scope>compile</scope>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It brings in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "spring-boot"
        }), " → Spring Boot core"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "spring-boot-autoconfigure"
        }), " → Auto-configuration support"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "spring-boot-starter-logging"
        }), " → Logback + SLF4J + Log4j-to-SLF4J bridge"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "spring-core"
        }), " → Spring Framework core"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "spring-context"
        }), " → Application context, event system"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "snakeyaml"
        }), " → YAML parsing for application.yml"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "jakarta.annotation-api"
        }), " → @PostConstruct, @PreDestroy, @Resource"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-devtools--developer-experience-starter",
      children: "6.4 DevTools → Developer Experience Starter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Not a starter per se, but a special dependency:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-devtools</artifactId>\n    <scope>runtime</scope>\n    <optional>true</optional>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatic restart"
        }), " → Restarts the application when files change (classpath)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LiveReload"
        }), " → Built-in LiveReload server for browser auto-refresh"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Property defaults"
        }), " → Template caching disabled, debug logging enabled"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remote development"
        }), " → Remote application restart over HTTP"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-parent-pom--dependency-management",
      children: "7. Parent POM & Dependency Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-the-spring-boot-starter-parent",
      children: "7.1 The spring-boot-starter-parent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-starter-parent"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maven parent POM"
      }), " that provides:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Managed dependency versions"
        }), " → All Spring dependency versions are pre-configured"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plugin configuration"
        }), " → Maven plugins pre-configured (compiler, surefire, failsafe, jar)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Property placeholders"
        }), " → Resource filtering with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@...@"
        }), " delimiters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Java version"
        }), " → Default Java version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource filtering"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.properties"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.yml"
        }), " are filtered"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- Declare the parent -->\n<parent>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-parent</artifactId>\n    <version>3.4.0</version>\n    <relativePath/> <!-- look up from local repository first -->\n</parent>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-what-the-parent-provides",
      children: "7.2 What the Parent Provides"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependency Version Management:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The parent POM's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<dependencyManagement>"
      }), " section declares versions for hundreds of dependencies:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- Inside spring-boot-starter-parent (conceptual) -->\n<properties>\n    <!-- Spring Framework -->\n    <spring-framework.version>6.2.0</spring-framework.version>\n\n    <!-- Third-party libraries -->\n    <hibernate.version>6.6.1.Final</hibernate.version>\n    <jackson-bom.version>2.18.2</jackson-bom.version>\n    <h2.version>2.3.232</h2.version>\n    <postgresql.version>42.7.4</postgresql.version>\n    <lombok.version>1.18.36</lombok.version>\n    <mockito.version>5.14.2</mockito.version>\n    <junit-jupiter.version>5.11.4</junit-jupiter.version>\n    <slf4j.version>2.0.16</slf4j.version>\n    <logback.version>1.5.13</logback.version>\n    <thymeleaf.version>3.1.3.RELEASE</thymeleaf.version>\n    <tomcat.version>10.1.34</tomcat.version>\n    <jetty.version>12.0.14</jetty.version>\n    <undertow.version>2.3.18.Final</undertow.version>\n</properties>\n\n<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-core</artifactId>\n            <version>${spring-framework.version}</version>\n        </dependency>\n        <!-- ... hundreds more ... -->\n    </dependencies>\n</dependencyManagement>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Plugin Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- Maven plugins pre-configured in the parent -->\n<build>\n    <plugins>\n        <!-- Compiler plugin → Java version set automatically -->\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <configuration>\n                <source>${java.version}</source>\n                <target>${java.version}</target>\n            </configuration>\n        </plugin>\n\n        <!-- Surefire plugin → JUnit 5 configured -->\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-surefire-plugin</artifactId>\n            <configuration>\n                <includes>\n                    <include>**/*Tests.java</include>\n                    <include>**/*Test.java</include>\n                </includes>\n            </configuration>\n        </plugin>\n\n        <!-- JAR plugin → executable JAR support via spring-boot-maven-plugin -->\n    </plugins>\n</build>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-overriding-a-managed-version",
      children: "7.3 Overriding a Managed Version"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You only specify versions when you need something different from the parent:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<properties>\n    <!-- Override the PostgreSQL driver version managed by the parent -->\n    <postgresql.version>42.7.5</postgresql.version>\n\n    <!-- Keep Java 21 as the source/target -->\n    <java.version>21</java.version>\n</properties>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-without-the-parent-corporate-pom",
      children: "7.4 Without the Parent (Corporate POM)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If your organization has its own parent POM, use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dependency management import"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- You cannot have two parents. Use scope=import instead -->\n<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-dependencies</artifactId>\n            <version>3.4.0</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-spring-boot-maven-plugin",
      children: "7.5 Spring Boot Maven Plugin"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-maven-plugin"
      }), " repackages your JAR into an executable fat JAR:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<build>\n    <plugins>\n        <plugin>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-maven-plugin</artifactId>\n        </plugin>\n    </plugins>\n</build>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What it does:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Standard Maven package (without the plugin) → plain JAR\nmvn package\n# target/my-app-0.0.1-SNAPSHOT.jar          → ~100 KB (dependencies not included)\n\n# Standard Maven package (with the plugin) → executable fat JAR\nmvn package\n# target/my-app-0.0.1-SNAPSHOT.jar          → ~18 MB (all dependencies included)\n# target/my-app-0.0.1-SNAPSHOT.jar.original → original JAR before repackaging\n\n# Run the executable JAR\njava -jar target/my-app-0.0.1-SNAPSHOT.jar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The repackaged JAR structure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "my-app-0.0.1-SNAPSHOT.jar\n├── META-INF/\n│   └── MANIFEST.MF         # Main-Class: org.springframework.boot.loader.JarLauncher\n├── org/springframework/boot/loader/\n│   ├── JarLauncher.class   # Spring Boot custom class loader\n│   ├── Launcher.class\n│   └── ...\n├── BOOT-INF/\n│   ├── classes/            # Your compiled classes\n│   │   └── com/example/myapp/\n│   ├── lib/                # All dependency JARs\n│   │   ├── spring-core-6.2.0.jar\n│   │   ├── spring-webmvc-6.2.0.jar\n│   │   └── ...\n│   └── classpath.idx       # Classpath index for fast startup\n└── ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "77-gradle-equivalent",
      children: "7.7 Gradle Equivalent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// build.gradle (Groovy)\nplugins {\n    id 'java'\n    id 'org.springframework.boot' version '3.4.0'\n    id 'io.spring.dependency-management' version '1.1.6'\n}\n\ngroup = 'com.example'\nversion = '0.0.1-SNAPSHOT'\n\njava {\n    sourceCompatibility = JavaVersion.VERSION_21\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation 'org.springframework.boot:spring-boot-starter-web'\n    testImplementation 'org.springframework.boot:spring-boot-starter-test'\n}\n\ntasks.named('test') {\n    useJUnitPlatform()\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts (Kotlin DSL)\nplugins {\n    java\n    id(\"org.springframework.boot\") version \"3.4.0\"\n    id(\"io.spring.dependency-management\") version \"1.1.6\"\n}\n\ngroup = \"com.example\"\nversion = \"0.0.1-SNAPSHOT\"\n\njava {\n    sourceCompatibility = JavaVersion.VERSION_21\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation(\"org.springframework.boot:spring-boot-starter-web\")\n    testImplementation(\"org.springframework.boot:spring-boot-starter-test\")\n}\n\ntasks.withType<Test> {\n    useJUnitPlatform()\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-the-springbootapplication-annotation",
      children: "8. The @SpringBootApplication Annotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-one-annotation-to-rule-them-all",
      children: "8.1 One Annotation to Rule Them All"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootApplication"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "composed annotation"
      }), " that combines three annotations:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// The actual definition (simplified)\n@Target(ElementType.TYPE)\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Inherited\n@SpringBootConfiguration   // includes @Configuration\n@EnableAutoConfiguration   // Spring Boot auto-configuration\n@ComponentScan             // component scanning\npublic @interface SpringBootApplication {\n\n    @AliasFor(annotation = ComponentScan.class, attribute = \"basePackages\")\n    String[] scanBasePackages() default {};\n\n    @AliasFor(annotation = ComponentScan.class, attribute = \"basePackageClasses\")\n    Class<?>[] scanBasePackageClasses() default {};\n\n    @AliasFor(annotation = EnableAutoConfiguration.class, attribute = \"exclude\")\n    Class<?>[] exclude() default {};\n\n    @AliasFor(annotation = EnableAutoConfiguration.class, attribute = \"excludeName\")\n    String[] excludeName() default {};\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-the-three-constituent-annotations",
      children: "8.2 The Three Constituent Annotations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "@SpringBootConfiguration"
      }), " (meta-annotated with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Configuration"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Marks the class as a source of bean definitions. Equivalent to declaring a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Configuration"
      }), " class:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootApplication\npublic class MyAppApplication {\n\n    // This class can define @Bean methods directly\n    @Bean\n    public MyService myService() {\n        return new MyService();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "@EnableAutoConfiguration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tells Spring Boot to automatically configure beans based on:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Classpath dependencies"
        }), " → If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spring-boot-starter-web"
        }), " is on the classpath, configure Spring MVC and embedded Tomcat"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Existing beans"
        }), " → If the user has already defined a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataSource"
        }), ", skip the auto-configured one"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Properties"
        }), " → Read ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.properties"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.yml"
        }), " and adjust behavior"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The auto-configuration process:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "@EnableAutoConfiguration\n        │\n        ▼\nMETA-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports\n        │\n        ├── org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration\n        ├── org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration\n        ├── org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration\n        ├── org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration\n        ├── org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration\n        └── (130+ auto-configuration class names listed)\n        │\n        ▼\nEach class is evaluated against its @Conditional annotations\n        │\n        ▼\nApplicable auto-configurations are applied in order\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "@ComponentScan:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tells Spring to scan the specified package (and all sub-packages) for annotated beans:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Scans the package of the annotated class (com.example.myapp) and all sub-packages\n@ComponentScan\n// Equivalent to: @ComponentScan(\"com.example.myapp\")\n\n// Scans specific packages\n@ComponentScan(\"com.example.myapp.controller\")\n\n// Scans multiple packages\n@ComponentScan({\"com.example.myapp.service\", \"com.example.myapp.repository\"})\n\n// Excludes certain types from scanning\n@ComponentScan(excludeFilters = {\n    @ComponentScan.Filter(type = FilterType.REGEX, pattern = \"com\\\\.example\\\\.legacy\\\\..*\")\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Beans discovered:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Annotation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Component"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic Spring-managed component"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business logic layer (specialized @Component)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Repository"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data access layer (specialized @Component, adds persistence exception translation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Controller"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVC controller (specialized @Component, handles web requests)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@RestController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Controller + @ResponseBody (REST API endpoints)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Configuration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bean definition source"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Bean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(on a method) Declares a single bean"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-putting-it-all-together",
      children: "8.3 Putting It All Together"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// This single annotation does three things\n@SpringBootApplication\npublic class MyAppApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(MyAppApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Is equivalent to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableAutoConfiguration\n@ComponentScan\npublic class MyAppApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(MyAppApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-customizing-the-application",
      children: "8.4 Customizing the Application"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Excluding auto-configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootApplication(exclude = {\n    DataSourceAutoConfiguration.class,     // No database needed\n    SecurityAutoConfiguration.class         // Custom security setup\n})\npublic class MyAppApplication { ... }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Via properties:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# Equivalent exclusions via properties\nspring.autoconfigure.exclude=\\\n  org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration,\\\n  org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom scan packages:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Scan from a different base package\n@SpringBootApplication(scanBasePackages = \"com.example.shared\")\npublic class MyAppApplication { ... }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-the-springapplicationrun-method",
      children: "8.5 The SpringApplication.run() Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootApplication\npublic class MyAppApplication {\n\n    public static void main(String[] args) {\n        // Returns the fully-configured ApplicationContext\n        ConfigurableApplicationContext ctx = SpringApplication.run(MyAppApplication.class, args);\n\n        // You can access the context programmatically\n        String[] beans = ctx.getBeanDefinitionNames();\n        System.out.println(\"Total beans: \" + beans.length);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Customizing the SpringApplication:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootApplication\npublic class MyAppApplication {\n\n    public static void main(String[] args) {\n        SpringApplication app = new SpringApplication(MyAppApplication.class);\n\n        // Disable the banner\n        app.setBannerMode(Banner.Mode.OFF);\n\n        // Set additional profiles\n        app.setAdditionalProfiles(\"dev\");\n\n        // Set default properties\n        app.setDefaultProperties(Map.of(\n            \"server.port\", \"9090\"\n        ));\n\n        // Add listeners\n        app.addListeners(new ApplicationReadyEventCustomizer());\n\n        // Run!\n        app.run(args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-using-a-builder",
      children: "8.6 Using a Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootApplication\npublic class MyAppApplication {\n\n    public static void main(String[] args) {\n        new SpringApplicationBuilder()\n            .sources(MyAppApplication.class)\n            .bannerMode(Banner.Mode.OFF)\n            .profiles(\"dev\")\n            .properties(\"server.port=9090\")\n            .listeners(new ApplicationReadyEventCustomizer())\n            .run(args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-embedded-servers",
      children: "9. Embedded Servers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-the-embedded-server-concept",
      children: "9.1 The Embedded Server Concept"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Traditional Java web applications are packaged as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WAR"
      }), " files and deployed to an external servlet container (Tomcat, Jetty, WildFly). Spring Boot embeds the servlet container directly into the executable JAR. This means:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No Tomcat/Jetty installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No WAR files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No deployment step"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Just ", (0,jsx_runtime.jsx)(_components.code, {
          children: "java -jar myapp.jar"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each microservice runs in its own process with its own server"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-supported-embedded-servers",
      children: "9.2 Supported Embedded Servers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Server"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Servlet API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reactive"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tomcat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (spring-boot-starter-web)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jakarta Servlet 6.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Jetty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jakarta Servlet 6.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undertow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jakarta Servlet 6.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Netty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (spring-boot-starter-webflux)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-switching-to-jetty",
      children: "9.3 Switching to Jetty"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependencies>\n    <!-- Exclude Tomcat -->\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n        <exclusions>\n            <exclusion>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-tomcat</artifactId>\n            </exclusion>\n        </exclusions>\n    </dependency>\n\n    <!-- Add Jetty -->\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-jetty</artifactId>\n    </dependency>\n</dependencies>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-switching-to-undertow",
      children: "9.4 Switching to Undertow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n        <exclusions>\n            <exclusion>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-tomcat</artifactId>\n            </exclusion>\n        </exclusions>\n    </dependency>\n\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-undertow</artifactId>\n    </dependency>\n</dependencies>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-server-configuration-via-properties",
      children: "9.5 Server Configuration via Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# ============================================\n# GENERAL SERVER CONFIGURATION\n# ============================================\n\n# Port (default: 8080)\nserver.port=8443\n\n# Context path (default: /)\nserver.servlet.context-path=/api\n\n# Bind address (default: 0.0.0.0)\nserver.address=127.0.0.1\n\n# ============================================\n# TOMCAT-SPECIFIC CONFIGURATION\n# ============================================\n\n# Maximum number of connections the server accepts and processes at any given time\nserver.tomcat.max-connections=10000\n\n# Maximum number of request processing threads\nserver.tomcat.threads.max=200\n\n# Minimum number of request processing idle threads\nserver.tomcat.threads.min-spare=10\n\n# Maximum size of the HTTP request body\nserver.tomcat.max-swallow-size=2MB\n\n# Connection timeout (milliseconds)\nserver.tomcat.connection-timeout=20000\n\n# Maximum size of the HTTP post content\nserver.tomcat.max-http-form-post-size=2MB\n\n# Enable access log\nserver.tomcat.accesslog.enabled=true\nserver.tomcat.accesslog.directory=logs\nserver.tomcat.accesslog.pattern=%h %l %u %t \"%r\" %s %b %D\n\n# Remote IP valve → trust the proxy\nserver.tomcat.remoteip.remote-ip-header=x-forwarded-for\nserver.tomcat.remoteip.protocol-header=x-forwarded-proto\n\n# ============================================\n# JETTY-SPECIFIC CONFIGURATION\n# ============================================\n\nserver.jetty.threads.max=200\nserver.jetty.threads.min=10\nserver.jetty.threads.idle-timeout=30000\nserver.jetty.threads.acceptors=2\nserver.jetty.threads.selectors=4\n\n# ============================================\n# UNDERTOW-SPECIFIC CONFIGURATION\n# ============================================\n\nserver.undertow.threads.io=4\nserver.undertow.threads.worker=128\nserver.undertow.direct-buffers=true\nserver.undertow.max-http-post-size=2MB\nserver.undertow.accesslog.enabled=true\nserver.undertow.accesslog.pattern=%h %l %u %t \"%r\" %s %b %D\nserver.undertow.accesslog.dir=logs\n\n# ============================================\n# SSL / HTTPS CONFIGURATION\n# ============================================\n\nserver.ssl.enabled=true\nserver.ssl.key-store=classpath:keystore.p12\nserver.ssl.key-store-password=${SSL_KEY_PASSWORD}\nserver.ssl.key-store-type=PKCS12\nserver.ssl.key-alias=myapp\n\n# HTTP/2 support\nserver.http2.enabled=true\n\n# ============================================\n# SHUTDOWN CONFIGURATION\n# ============================================\n\n# Graceful shutdown (default: immediate)\nserver.shutdown=graceful\n\n# Grace period for graceful shutdown\nspring.lifecycle.timeout-per-shutdown-phase=30s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "96-programmatic-server-configuration",
      children: "9.6 Programmatic Server Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class ServerConfig {\n\n    @Bean\n    public WebServerFactoryCustomizer<TomcatServletWebServerFactory> tomcatCustomizer() {\n        return factory -> {\n            factory.setPort(9090);\n            factory.setContextPath(\"/api\");\n            factory.addConnectorCustomizers(connector -> {\n                connector.setMaxSwallowSize(-1); // allow unlimited body size\n                connector.setProperty(\"compression\", \"on\");\n                connector.setProperty(\"compressableMimeType\",\n                    \"text/html,text/xml,text/plain,application/json\");\n            });\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class JettyConfig {\n\n    @Bean\n    public WebServerFactoryCustomizer<JettyServletWebServerFactory> jettyCustomizer() {\n        return factory -> {\n            factory.setPort(9090);\n            factory.addServerCustomizers(server -> {\n                // Customize the Jetty Server instance\n                QueuedThreadPool threadPool = server.getBean(QueuedThreadPool.class);\n                threadPool.setMaxThreads(300);\n            });\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class UndertowConfig {\n\n    @Bean\n    public WebServerFactoryCustomizer<UndertowServletWebServerFactory> undertowCustomizer() {\n        return factory -> {\n            factory.setPort(9090);\n            factory.addBuilderCustomizers(builder -> {\n                builder.setWorkerThreads(256);\n                builder.setIoThreads(8);\n                builder.setDirectBuffers(true);\n            });\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "97-http2-support",
      children: "9.7 HTTP/2 Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# Enable HTTP/2 (requires SSL)\nserver.http2.enabled=true\nserver.ssl.enabled=true\nserver.ssl.key-store=classpath:keystore.p12\nserver.ssl.key-store-password=changeit\nserver.ssl.key-store-type=PKCS12\nserver.ssl.key-alias=myapp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For HTTP/2 without SSL (h2c → cleartext HTTP/2):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# Tomcat: h2c requires special connector\nserver.http2.enabled=true\n\n# Or programmatically\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic WebServerFactoryCustomizer<TomcatServletWebServerFactory> h2cCustomizer() {\n    return factory -> {\n        factory.addAdditionalTomcatConnectors(connector -> {\n            connector.setPort(8080);\n            connector.setProperty(\"protocol\", \"org.apache.coyote.http11.Http11NioProtocol\");\n            // Enable h2c\n            connector.addUpgradeProtocol(new Http2Protocol());\n        });\n    };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "98-embedded-server-comparison",
      children: "9.8 Embedded Server Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tomcat"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Jetty"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Undertow"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Startup time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.5s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory footprint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~40MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~35MB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Servlet spec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connection pooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (NIO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (NIO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (XNIO)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maturity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration granularity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-grained"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-grained"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plugin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For most applications, the default ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tomcat"
      }), " is perfectly adequate. Choose Jetty for embedded environments (low memory), and Undertow for high throughput / low latency requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-spring-boot-cli",
      children: "10. Spring Boot CLI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-what-is-the-spring-boot-cli",
      children: "10.1 What Is the Spring Boot CLI?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Boot CLI"
      }), " (Command-Line Interface) is a development tool that lets you write Spring applications in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Groovy"
      }), " scripts and run them with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring run"
      }), " → no compilation, no build file, no project structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// hello.groovy\n@RestController\nclass HelloController {\n\n    @RequestMapping(\"/\")\n    String home() {\n        \"Hello from Spring Boot CLI!\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run it directly → no Maven, no Gradle, no compilation step\nspring run hello.groovy\n\n# Output:\n#   Resolving dependencies...\n#   Downloading...\n#   Starting application...\n#   Tomcat started on port(s): 8080 (http)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-installation",
      children: "10.2 Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Via SDKMAN (recommended for Unix/macOS)\nsdk install springboot\n\n# Via Homebrew (macOS)\nbrew install springboot\n\n# Via Chocolatey (Windows)\nchoco install springboot\n\n# Manual: download from spring.io and add to PATH\n# https://spring.io/projects/spring-boot#learn\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-groovy-magic--the-grab-annotations",
      children: "10.3 Groovy Magic → The Grab Annotations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The CLI uses Groovy's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Grab"
      }), " annotation to resolve dependencies automatically:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// No pom.xml needed → Grabs replace Maven coordinates\n@Grab(\"org.springframework.boot:spring-boot-starter-web\")\n@Grab(\"org.springframework.boot:spring-boot-starter-data-jpa\")\n@Grab(\"org.postgresql:postgresql:42.7.4\")\n@Grab(\"com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.18.2\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot CLI's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Groovy auto-import"
      }), " means you don't even need import statements:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// No imports needed → Spring Boot CLI auto-imports:\n//   org.springframework.*\n//   org.springframework.boot.*\n//   org.springframework.web.bind.annotation.*\n//   org.junit.*, groovy.util.*, java.util.*\n\n@RestController\nclass DemoController {\n\n    @GetMapping(\"/hello\")\n    String hello() {\n        \"Auto-imports included!\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-complete-cli-application-example",
      children: "10.4 Complete CLI Application Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// app.groovy\n@Grab(\"spring-boot-starter-web\")\n@Grab(\"spring-boot-starter-actuator\")\n\n@SpringBootApplication\n@RestController\nclass App {\n\n    @GetMapping(\"/\")\n    String home() {\n        \"Spring Boot CLI is running\"\n    }\n\n    @GetMapping(\"/time\")\n    String time() {\n        \"Current time: ${new Date()}\"\n    }\n\n    static void main(String[] args) {\n        SpringApplication.run(App, args)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "spring run app.groovy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-cli-with-profiles-and-properties",
      children: "10.5 CLI with Profiles and Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Activate a profile\nspring run app.groovy -- --spring.profiles.active=dev\n\n# Pass custom properties\nspring run app.groovy -- --server.port=9090 --myapp.greeting=\"Hello World\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// app.groovy\n@Grab(\"spring-boot-starter-web\")\n@SpringBootApplication\n@RestController\nclass App {\n\n    @Value('${myapp.greeting:Hello}')\n    String greeting\n\n    @GetMapping(\"/\")\n    String home() {\n        \"$greeting from Spring Boot CLI\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "106-multi-file-applications",
      children: "10.6 Multi-File Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run multiple Groovy files\nspring run *.groovy\n\n# Or specify files explicitly\nspring run config.groovy services.groovy controllers.groovy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "107-testing-with-the-cli",
      children: "10.7 Testing with the CLI"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run tests in Groovy\nspring test *.groovy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// test.groovy\n@Grab(\"spring-boot-starter-test\")\nclass AppTests {\n\n    @Test\n    void testHome() {\n        def app = new App()\n        assert app.home() == \"Hello from Spring Boot CLI\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "108-creating-executable-jars-with-the-cli",
      children: "10.8 Creating Executable JARs with the CLI"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create an executable JAR from Groovy sources\nspring jar app.jar *.groovy\n\n# Create an executable WAR for traditional deployment\nspring war app.war *.groovy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "109-when-to-use-the-cli",
      children: "10.9 When to Use the CLI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Spring Boot CLI is ideal for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prototyping"
        }), " → Quickly test ideas without project setup"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Demonstrations"
        }), " → Live coding demos that start fast"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Learning"
        }), " → Minimal friction for new developers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Small internal tools"
        }), " → API wrappers, webhooks, etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scripting"
        }), " → Spring-powered automation scripts"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For production applications, use a proper Maven/Gradle project with a build file and standard directory structure."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-hello-world-application",
      children: "11. Hello World Application"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Let's build a complete ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hello World"
      }), " REST application step by step. This is the canonical Spring Boot starting point."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-step-1-create-the-project",
      children: "11.1 Step 1: Create the Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Navigate to start.spring.io or use the CLI:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create project with CLI\nspring init \\\n  --build=maven \\\n  --java-version=21 \\\n  --group-id=com.example \\\n  --artifact-id=hello-world \\\n  --name=hello-world \\\n  --dependencies=web,actuator,devtools \\\n  hello-world.zip\n\n# Extract\nunzip hello-world.zip\ncd hello-world\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-step-2-examine-the-generated-files",
      children: "11.2 Step 2: Examine the Generated Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# The directory tree\ntree /F\n\n# Output:\n# hello-world/\n# ├── HELP.md\n# ├── mvnw\n# ├── mvnw.cmd\n# ├── pom.xml\n# └── src/\n#     ├── main/\n#     │   ├── java/\n#     │   │   └── com/example/helloworld/\n#     │   │       └── HelloWorldApplication.java\n#     │   └── resources/\n#     │       ├── application.properties\n#     │       ├── static/\n#     │       └── templates/\n#     └── test/\n#         └── java/\n#             └── com/example/helloworld/\n#                 └── HelloWorldApplicationTests.java\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "pom.xml:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"\n             http://maven.apache.org/POM/4.0.0\n             https://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.4.0</version>\n        <relativePath/>\n    </parent>\n\n    <groupId>com.example</groupId>\n    <artifactId>hello-world</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <name>hello-world</name>\n    <description>Hello World Spring Boot Application</description>\n\n    <properties>\n        <java.version>21</java.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-actuator</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-devtools</artifactId>\n            <scope>runtime</scope>\n            <optional>true</optional>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HelloWorldApplication.java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.helloworld;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class HelloWorldApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(HelloWorldApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HelloWorldApplicationTests.java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.helloworld;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.boot.test.context.SpringBootTest;\n\n@SpringBootTest\nclass HelloWorldApplicationTests {\n\n    @Test\n    void contextLoads() {\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-step-3-create-the-rest-controller",
      children: "11.3 Step 3: Create the REST Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a new file:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// src/main/java/com/example/helloworld/controller/GreetingController.java\npackage com.example.helloworld.controller;\n\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RestController;\n\nimport java.time.LocalDateTime;\nimport java.util.Map;\n\n@RestController\npublic class GreetingController {\n\n    @GetMapping(\"/\")\n    public Map<String, String> home() {\n        return Map.of(\n            \"message\", \"Hello, Spring Boot!\",\n            \"timestamp\", LocalDateTime.now().toString(),\n            \"version\", \"3.4.0\"\n        );\n    }\n\n    @GetMapping(\"/hello\")\n    public Map<String, String> hello(\n            @RequestParam(name = \"name\", defaultValue = \"World\") String name) {\n\n        return Map.of(\n            \"greeting\", \"Hello, \" + name + \"!\",\n            \"language\", \"Java \" + Runtime.version().toString()\n        );\n    }\n\n    @GetMapping(\"/hello/{name}\")\n    public Map<String, String> helloPath(\n            @PathVariable String name) {\n\n        return Map.of(\n            \"greeting\", \"Hello, \" + name + \"!\",\n            \"method\", \"path-variable\"\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-step-4-add-application-properties",
      children: "11.4 Step 4: Add Application Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# src/main/resources/application.properties\n\n# Server configuration\nserver.port=8080\nserver.servlet.context-path=/\n\n# Application info\nspring.application.name=hello-world\n\n# Actuator endpoints\nmanagement.endpoints.web.exposure.include=health,info,metrics\nmanagement.info.env.enabled=true\n\n# DevTools\nspring.devtools.livereload.enabled=true\nspring.devtools.restart.enabled=true\n\n# Banner\nspring.banner.location=classpath:banner.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or using YAML:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# src/main/resources/application.yml\nserver:\n  port: 8080\n  servlet:\n    context-path: /\n\nspring:\n  application:\n    name: hello-world\n  devtools:\n    livereload:\n      enabled: true\n    restart:\n      enabled: true\n  banner:\n    location: classpath:banner.txt\n\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: health,info,metrics\n  info:\n    env:\n      enabled: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-step-5-add-a-custom-banner",
      children: "11.5 Step 5: Add a Custom Banner"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# src/main/resources/banner.txt\n\n${AnsiColor.BRIGHT_YELLOW}\n  _________ _ _        _   ____              _\n |__  / ___| | |      | | | __ ) _   _  ___| | ___   _\n   / /\\___ \\| | |   _ | | |  _ \\| | | |/ __| |/ / | | |\n  / /_ ___) | | |__| |_| | | |_) | |_| | (__|   <| |_| |\n /____|____/|_|\\____\\__, | |____/ \\__,_|\\___|_|\\_\\\\\\\\__,_|\n                     |___/\n\n${AnsiColor.BRIGHT_CYAN} :: Spring Boot ${spring-boot.version} :: ${application.formatted-version}\n${AnsiColor.DEFAULT}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "116-step-6-build-and-run",
      children: "11.6 Step 6: Build and Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Option A: Maven Wrapper\n./mvnw clean package\njava -jar target/hello-world-0.0.1-SNAPSHOT.jar\n\n# Option B: Maven Wrapper (Windows)\nmvnw.cmd clean package\njava -jar target/hello-world-0.0.1-SNAPSHOT.jar\n\n# Option C: Maven Plugin (run directly)\n./mvnw spring-boot:run\n\n# Option D: Maven Plugin (Windows)\nmvnw.cmd spring-boot:run\n\n# Option E: IDE → Click the green arrow in your IDE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "117-step-7-verify",
      children: "11.7 Step 7: Verify"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test the home endpoint\ncurl http://localhost:8080/\n# {\"message\":\"Hello, Spring Boot!\",\"timestamp\":\"2025-06-12T10:30:00.123\",\"version\":\"3.4.0\"}\n\n# Test the hello endpoint with query parameter\ncurl \"http://localhost:8080/hello?name=Java\"\n# {\"greeting\":\"Hello, Java!\",\"language\":\"Java 21+35-2513\"}\n\n# Test the hello endpoint with path variable\ncurl http://localhost:8080/hello/Spring\n# {\"greeting\":\"Hello, Spring!\",\"method\":\"path-variable\"}\n\n# Test with default parameter\ncurl http://localhost:8080/hello\n# {\"greeting\":\"Hello, World!\",\"language\":\"Java 21+35-2513\"}\n\n# Health check via Actuator\ncurl http://localhost:8080/actuator/health\n# {\"status\":\"UP\"}\n\n# Application info\ncurl http://localhost:8080/actuator/info\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "118-full-application-structure",
      children: "11.8 Full Application Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "hello-world/\n├── pom.xml\n├── src/\n│   ├── main/\n│   │   ├── java/\n│   │   │   └── com/example/helloworld/\n│   │   │       ├── HelloWorldApplication.java\n│   │   │       └── controller/\n│   │   │           └── GreetingController.java\n│   │   └── resources/\n│   │       ├── application.yml\n│   │       ├── banner.txt\n│   │       ├── static/\n│   │       │   └── index.html\n│   │       └── templates/\n│   └── test/\n│       └── java/\n│           └── com/example/helloworld/\n│               └── HelloWorldApplicationTests.java\n├── .gitignore\n├── HELP.md\n├── mvnw\n└── mvnw.cmd\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "119-adding-a-static-welcome-page",
      children: "11.9 Adding a Static Welcome Page"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!-- src/main/resources/static/index.html -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Spring Boot Hello World</title>\n    <style>\n        * { margin: 0; padding: 0; box-sizing: border-box; }\n        body {\n            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n            height: 100vh;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n        .card {\n            background: white;\n            border-radius: 12px;\n            padding: 40px;\n            box-shadow: 0 20px 60px rgba(0,0,0,0.15);\n            text-align: center;\n            max-width: 500px;\n        }\n        .card h1 {\n            color: #333;\n            margin-bottom: 10px;\n        }\n        .card p {\n            color: #666;\n            font-size: 18px;\n            line-height: 1.6;\n        }\n        .card .badge {\n            display: inline-block;\n            background: #667eea;\n            color: white;\n            padding: 4px 12px;\n            border-radius: 20px;\n            font-size: 14px;\n            margin-top: 20px;\n        }\n        .endpoints {\n            margin-top: 25px;\n            text-align: left;\n        }\n        .endpoints h3 {\n            margin-bottom: 10px;\n        }\n        .endpoints code {\n            display: block;\n            background: #f5f5f5;\n            padding: 8px 12px;\n            border-radius: 6px;\n            margin: 5px 0;\n            font-size: 14px;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"card\">\n        <h1>Hello, Spring Boot!</h1>\n        <p>Your application is up and running with Spring Boot 3.4.0</p>\n        <div class=\"badge\">Java 21</div>\n\n        <div class=\"endpoints\">\n            <h3>Available REST Endpoints</h3>\n            <code>GET / → Welcome message</code>\n            <code>GET /hello → Greeting with query param</code>\n            <code>GET /hello/{name} → Greeting with path variable</code>\n            <code>GET /actuator/health → Health check</code>\n        </div>\n    </div>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1110-adding-a-service-layer",
      children: "11.10 Adding a Service Layer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extend the application with proper layered architecture:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// src/main/java/com/example/helloworld/service/GreetingService.java\npackage com.example.helloworld.service;\n\nimport org.springframework.stereotype.Service;\n\nimport java.time.LocalDateTime;\nimport java.util.HashMap;\nimport java.util.Map;\n\n@Service\npublic class GreetingService {\n\n    private final Map<String, Integer> greetingCount = new HashMap<>();\n\n    public Map<String, Object> createGreeting(String name) {\n        greetingCount.merge(name, 1, Integer::sum);\n\n        return Map.of(\n            \"greeting\", \"Hello, \" + name + \"!\",\n            \"count\", greetingCount.get(name),\n            \"timestamp\", LocalDateTime.now().toString()\n        );\n    }\n\n    public long getTotalGreetings() {\n        return greetingCount.values().stream().mapToInt(Integer::intValue).sum();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Updated controller with service injection\npackage com.example.helloworld.controller;\n\nimport com.example.helloworld.service.GreetingService;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.time.LocalDateTime;\nimport java.util.Map;\n\n@RestController\npublic class GreetingController {\n\n    private final GreetingService greetingService;\n\n    // Constructor injection\n    public GreetingController(GreetingService greetingService) {\n        this.greetingService = greetingService;\n    }\n\n    @GetMapping(\"/\")\n    public Map<String, String> home() {\n        return Map.of(\n            \"message\", \"Hello, Spring Boot!\",\n            \"timestamp\", LocalDateTime.now().toString(),\n            \"version\", \"3.4.0\"\n        );\n    }\n\n    @GetMapping(\"/hello\")\n    public Map<String, Object> hello(\n            @RequestParam(name = \"name\", defaultValue = \"World\") String name) {\n\n        Map<String, Object> greeting = greetingService.createGreeting(name);\n        greeting.put(\"language\", \"Java \" + Runtime.version().toString());\n        return greeting;\n    }\n\n    @GetMapping(\"/hello/{name}\")\n    public Map<String, Object> helloPath(@PathVariable String name) {\n        Map<String, Object> greeting = greetingService.createGreeting(name);\n        greeting.put(\"method\", \"path-variable\");\n        return greeting;\n    }\n\n    @GetMapping(\"/stats\")\n    public Map<String, Object> stats() {\n        return Map.of(\n            \"totalGreetings\", greetingService.getTotalGreetings(),\n            \"timestamp\", LocalDateTime.now().toString()\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1111-unit-testing",
      children: "11.11 Unit Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// src/test/java/com/example/helloworld/service/GreetingServiceTest.java\npackage com.example.helloworld.service;\n\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\n\nimport java.util.Map;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass GreetingServiceTest {\n\n    private GreetingService greetingService;\n\n    @BeforeEach\n    void setUp() {\n        greetingService = new GreetingService();\n    }\n\n    @Test\n    void createGreeting_returnsCorrectMessage() {\n        Map<String, Object> result = greetingService.createGreeting(\"Alice\");\n\n        assertEquals(\"Hello, Alice!\", result.get(\"greeting\"));\n        assertNotNull(result.get(\"timestamp\"));\n    }\n\n    @Test\n    void createGreeting_incrementsCount() {\n        greetingService.createGreeting(\"Bob\");\n        greetingService.createGreeting(\"Bob\");\n        Map<String, Object> result = greetingService.createGreeting(\"Bob\");\n\n        assertEquals(3, result.get(\"count\"));\n    }\n\n    @Test\n    void getTotalGreetings_returnsZeroInitially() {\n        assertEquals(0, greetingService.getTotalGreetings());\n    }\n\n    @Test\n    void getTotalGreetings_returnsCorrectTotal() {\n        greetingService.createGreeting(\"Alice\");\n        greetingService.createGreeting(\"Bob\");\n        greetingService.createGreeting(\"Charlie\");\n\n        assertEquals(3, greetingService.getTotalGreetings());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// src/test/java/com/example/helloworld/controller/GreetingControllerTest.java\npackage com.example.helloworld.controller;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;\nimport org.springframework.boot.test.mock.bean.MockBean;\nimport org.springframework.test.web.servlet.MockMvc;\n\nimport com.example.helloworld.service.GreetingService;\n\nimport java.util.Map;\n\nimport static org.mockito.ArgumentMatchers.anyString;\nimport static org.mockito.Mockito.when;\nimport static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;\n\n@WebMvcTest(GreetingController.class)\nclass GreetingControllerTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @MockBean\n    private GreetingService greetingService;\n\n    @Test\n    void home_returnsWelcomeMessage() throws Exception {\n        mockMvc.perform(get(\"/\"))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath(\"$.message\").value(\"Hello, Spring Boot!\"))\n            .andExpect(jsonPath(\"$.version\").value(\"3.4.0\"));\n    }\n\n    @Test\n    void hello_returnsGreetingWithDefaultName() throws Exception {\n        when(greetingService.createGreeting(\"World\"))\n            .thenReturn(Map.of(\"greeting\", \"Hello, World!\", \"count\", 1));\n\n        mockMvc.perform(get(\"/hello\"))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath(\"$.greeting\").value(\"Hello, World!\"));\n    }\n\n    @Test\n    void hello_returnsGreetingWithCustomName() throws Exception {\n        when(greetingService.createGreeting(\"Spring\"))\n            .thenReturn(Map.of(\"greeting\", \"Hello, Spring!\", \"count\", 1));\n\n        mockMvc.perform(get(\"/hello\").param(\"name\", \"Spring\"))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath(\"$.greeting\").value(\"Hello, Spring!\"));\n    }\n\n    @Test\n    void helloPath_returnsGreeting() throws Exception {\n        when(greetingService.createGreeting(\"PathVar\"))\n            .thenReturn(Map.of(\"greeting\", \"Hello, PathVar!\", \"count\", 1));\n\n        mockMvc.perform(get(\"/hello/PathVar\"))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath(\"$.greeting\").value(\"Hello, PathVar!\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1112-integration-test",
      children: "11.12 Integration Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// src/test/java/com/example/helloworld/HelloWorldApplicationTests.java\npackage com.example.helloworld;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.boot.test.web.client.TestRestTemplate;\nimport org.springframework.boot.test.web.server.LocalServerPort;\n\nimport java.util.Map;\n\nimport static org.assertj.core.api.Assertions.assertThat;\n\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\nclass HelloWorldApplicationTests {\n\n    @LocalServerPort\n    private int port;\n\n    @Autowired\n    private TestRestTemplate restTemplate;\n\n    @Test\n    void contextLoads() {\n        // This test passes if the application context starts successfully\n    }\n\n    @Test\n    void homeEndpointReturnsExpectedResponse() {\n        @SuppressWarnings(\"unchecked\")\n        Map<String, String> response = restTemplate.getForObject(\n            \"http://localhost:\" + port + \"/\", Map.class);\n\n        assertThat(response)\n            .containsKey(\"message\")\n            .containsKey(\"timestamp\")\n            .containsKey(\"version\");\n\n        assertThat(response.get(\"message\")).isEqualTo(\"Hello, Spring Boot!\");\n    }\n\n    @Test\n    void helloEndpointWithQueryParam() {\n        @SuppressWarnings(\"unchecked\")\n        Map<String, Object> response = restTemplate.getForObject(\n            \"http://localhost:\" + port + \"/hello?name=Integration\", Map.class);\n\n        assertThat(response.get(\"greeting\")).isEqualTo(\"Hello, Integration!\");\n    }\n\n    @Test\n    void healthEndpointIsUp() {\n        @SuppressWarnings(\"unchecked\")\n        Map<String, String> health = restTemplate.getForObject(\n            \"http://localhost:\" + port + \"/actuator/health\", Map.class);\n\n        assertThat(health.get(\"status\")).isEqualTo(\"UP\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Spring Framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core DI, AOP, MVC, Data Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control, XML or Java config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise apps needing flexibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Boot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opinionated auto-configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded server, starters, production-ready"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rapid development, microservices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed systems patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service discovery, config server, circuit breakers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microservice orchestration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent data access across stores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repository abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JPA, MongoDB, Redis integration"
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
            children: "Key Components"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Core"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IoC Container, AOP, SpEL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ApplicationContext is the central interface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Web"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring MVC, WebFlux, REST APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@RestController for REST services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Boot"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-configuration, Starters, Actuator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@SpringBootApplication = @Config + @EnableAutoConfig + @ComponentScan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JPA, JDBC, MongoDB, Redis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Data repositories reduce boilerplate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication, Authorization, OAuth2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@EnableWebSecurity for custom config"
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
            children: "Monolith"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Microservices"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reactive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Batch"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Boot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard choice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebFlux for reactive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Batch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent config across services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional on reactive deps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch auto-config"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Starters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spring-boot-starter-web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spring-boot-starter-webflux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spring-boot-starter-webflux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spring-boot-starter-batch"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does @SpringBootApplication combine?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) @Configuration, @ComponentScan, @EnableAutoConfiguration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) @SpringBootConfiguration, @EnableAspectJAutoProxy, @ComponentScan"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) @Configuration, @EnableWebMvc, @EnableAutoConfiguration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) @SpringBootConfiguration, @ComponentScan, @EnableAutoConfiguration"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**D) @SpringBootConfiguration, @ComponentScan, @EnableAutoConfiguration.** @SpringBootApplication is a convenience annotation that composes these three.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which embedded servlet container is the default in Spring Boot?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Jetty"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Undertow"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Tomcat"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Netty"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Tomcat.** Spring Boot defaults to Tomcat but can be swapped to Jetty or Undertow by excluding Tomcat and including the desired starter.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Where is the best place to start a new Spring Boot project?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Clone a random GitHub repo"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Spring Initializr (start.spring.io)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Copy an old project"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Write all files from scratch"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Spring Initializr (start.spring.io).** Initializr generates a correct project structure with the right dependencies, build configuration, and main class.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter introduced the Spring ecosystem and Spring Boot, the dominant framework for building production-grade Java applications:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Spring Ecosystem"
          }), ": Spring began in 2004 with Rod Johnson's vision of POJO-centric enterprise development. It has grown into a family of projects including Spring Framework, Spring Boot, Spring Cloud, Spring Data, Spring Security, Spring Batch, Spring Integration, and Spring AI. Each project follows the principles of convention over configuration and dependency injection."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Inversion of Control & Dependency Injection"
          }), ": The Hollywood Principle (\"don't call us, we'll call you\") shifts control from application code to the container. DI is the primary IoC implementation, with constructor injection (preferred), setter injection (optional dependencies), and field injection (discouraged). Benefits include loose coupling, testability, lifecycle management, and explicit dependencies."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Spring Boot Philosophy"
          }), ": Opinionated defaults reduce configuration decisions. Auto-configuration inspects the classpath and intelligently configures beans. Standalone production-grade applications run with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "java -jar"
          }), " and include embedded servers. Boilerplate is eliminated through starter dependencies and sensible defaults."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Project Initialization"
          }), ": Spring Initializr (start.spring.io), IntelliJ IDEA Ultimate, VS Code with Spring Boot Extension Pack, and the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "spring init"
          }), " CLI all generate the same standard project structure. The Maven Wrapper ensures consistent builds across environments."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Directory Structure"
          }), ": The standard layout separates main source (", (0,jsx_runtime.jsx)(_components.code, {
            children: "src/main/java"
          }), "), resources (", (0,jsx_runtime.jsx)(_components.code, {
            children: "src/main/resources"
          }), " with static assets, templates, and configuration), and test source (", (0,jsx_runtime.jsx)(_components.code, {
            children: "src/test/java"
          }), "). Profile-specific configuration files follow the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "application-{profile}.yml"
          }), " naming convention."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Starters"
          }), ": Curated dependency sets that bundle everything needed for a specific feature. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "spring-boot-starter-web"
          }), " alone brings in Spring MVC, embedded Tomcat, Jackson, and validation. The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "spring-boot-starter-parent"
          }), " POM manages versions for hundreds of dependencies, eliminating version mismatch problems."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "@SpringBootApplication"
          }), ": A composed annotation that simultaneously enables auto-configuration, component scanning, and bean definition. The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SpringApplication.run()"
          }), " method bootstraps the entire application, creating and refreshing the ApplicationContext."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Embedded Servers"
          }), ": Tomcat (default), Jetty, and Undertow are all configurable via properties or programmatic customizers. HTTP/2, SSL, graceful shutdown, and compression are supported out of the box."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Spring Boot CLI"
          }), ": A rapid prototyping tool that runs Groovy scripts without compilation or build files. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "spring run"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "spring test"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "spring jar"
          }), " provide a fast development feedback loop."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What problem did Spring Framework 1.0 solve in the J2EE ecosystem of 2004? What specific EJB pain points did it eliminate?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the difference between Inversion of Control (IoC) and Dependency Injection (DI). Is one a subset of the other?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What are the three forms of dependency injection in Spring? Which is preferred and why?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe the Spring Boot auto-configuration mechanism. How does @EnableAutoConfiguration decide which beans to configure?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is a Spring Boot starter? Name five starters and describe what each one provides to the application."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does spring-boot-starter-parent simplify dependency management? What happens if your organization already has a corporate parent POM?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What three annotations does @SpringBootApplication compose? What does each one do?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How do you switch from the default embedded Tomcat to Jetty or Undertow? Provide complete Maven configuration."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the Spring Boot CLI and what problem does it solve? When would you use it instead of a full Maven/Gradle project?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the three types of @Conditional annotations used in auto-configuration. Give a concrete example of each."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure Embedded Server"
          }), ": Create a Spring Boot project with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "spring-boot-starter-web"
          }), ". Configure it to:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run on port 8443 with HTTPS (generate a self-signed certificate)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enable HTTP/2"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set the context path to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/api"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configure graceful shutdown with a 45s timeout"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Enable Tomcat access logging to the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "logs/"
            }), " directory"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Limit maximum threads to 100"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Provide the complete ", (0,jsx_runtime.jsx)(_components.code, {
              children: "application.properties"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "application.yml"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Starter Analysis"
          }), ": For each of the following, list all transitive dependencies included by the starter and explain what each dependency provides:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot-starter-data-jpa"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot-starter-security"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot-starter-actuator"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot-starter-test"
            }), "\nUse ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mvn dependency:tree"
            }), " to verify your analysis."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Profile Configuration"
          }), ": Create an application with three profiles:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "dev"
            }), ": H2 in-memory database, DEBUG logging, verbose JSON, DevTools enabled"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "staging"
            }), ": PostgreSQL, INFO logging, Actuator endpoints exposed"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "prod"
            }), ": PostgreSQL with HikariCP pool (maximum 20), WARN logging, Actuator secured, HTTPS enforced\nDemonstrate activating each profile at startup."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Banner"
          }), ": Create a Spring Boot application with:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A custom ASCII art banner in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "banner.txt"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot-devtools"
            }), " dependency with LiveReload enabled"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot-starter-actuator"
            }), " dependency"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Info endpoint populated with custom properties (app name, version, author)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Access the info endpoint and verify the custom properties appear"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hello World with Layered Architecture"
          }), ": Build a complete REST API with:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@RestController"
            }), " with endpoints for greeting, user CRUD (stubs), and health check"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Service"
            }), " layer with greeting logic and user business rules"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Constructor injection throughout"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Unit tests with Mockito for the service layer"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Integration tests with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@SpringBootTest"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TestRestTemplate"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A static ", (0,jsx_runtime.jsx)(_components.code, {
              children: "index.html"
            }), " welcome page"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All endpoints documented in a README-style comment block"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Mini Spring Boot Initializr Clone"
          }), ": Build a command-line tool (pure Java, no framework) that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Asks the user for groupId, artifactId, Spring Boot version, Java version, and dependencies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generates a complete Maven project directory structure"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Creates ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pom.xml"
            }), " with the correct starter dependencies and parent POM"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Creates the main application class with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@SpringBootApplication"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Creates a sample ", (0,jsx_runtime.jsx)(_components.code, {
              children: "GreetingController"
            }), " with three endpoints (root, hello, and health)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Creates ", (0,jsx_runtime.jsx)(_components.code, {
              children: "application.properties"
            }), " with configurable port"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Creates the Maven Wrapper files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Packages everything into a ZIP archive"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The output must be a buildable, runnable Spring Boot application"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Auto-Configuration Deep Dive"
          }), ": Create a minimal Spring Boot application (only ", (0,jsx_runtime.jsx)(_components.code, {
            children: "spring-boot-starter"
          }), "). Then:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mvn dependency:tree"
            }), " to list all dependencies"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Read the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AutoConfiguration.imports"
            }), " file from the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot-autoconfigure"
            }), " JAR"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Write a Java program that loads the JAR and lists all auto-configuration classes"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each auto-configuration class, extract its ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Conditional*"
            }), " annotations via reflection"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Categorize which auto-configurations would apply to your empty application"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document three specific auto-configuration classes and their exact condition chains"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Submit a report with your findings"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CLI to Boot Migration"
          }), ": Start with this Spring Boot CLI Groovy application:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-groovy",
            children: "@Grab(\"spring-boot-starter-web\")\n@Grab(\"spring-boot-starter-data-jpa\")\n@Grab(\"com.h2database:h2\")\n\n@SpringBootApplication\n@RestController\nclass TaskManager {\n    private List<String> tasks = []\n\n    @GetMapping(\"/tasks\")\n    List<String> getTasks() {\n        tasks\n    }\n\n    @PostMapping(\"/tasks\")\n    Map<String, String> addTask(@RequestBody Map<String, String> body) {\n        tasks << body.task\n        [status: \"created\", task: body.task]\n    }\n\n    @GetMapping(\"/tasks/{index}\")\n    String getTask(@PathVariable int index) {\n        tasks[index]\n    }\n    static void main(String[] args) {\n        SpringApplication.run(TaskManager, args)\n    }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Migrate this to a proper Maven project with:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Standard Maven directory structure"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@SpringBootApplication"
            }), " in a separate main class"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@RestController"
            }), " in the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "controller/"
            }), " package"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Service"
            }), " in the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "service/"
            }), " package (extract business logic)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A JPA entity in the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "model/"
            }), " package for persistent task storage"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "JpaRepository"
            }), " in the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "repository/"
            }), " package"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Database migration with Flyway"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Unit tests with Mockito"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integration tests with TestContainers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Profile-specific configuration: H2 for dev, PostgreSQL for prod"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The final application must run with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "java -jar"
            }), " and persist tasks across restarts"]
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