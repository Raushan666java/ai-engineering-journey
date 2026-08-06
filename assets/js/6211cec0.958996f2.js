"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3652],{

/***/ 50878
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_07_maven_md_621_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-07-maven-md-621.json
const site_docs_courses_java_07_maven_md_621_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/07-maven","title":"Maven Deep Dive","description":"Previous Gradle Deep Dive","source":"@site/docs/courses/java/07-maven.md","sourceDirName":"courses/java","slug":"/java/07-maven","permalink":"/ai-engineering-journey/java/07-maven","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-maven","slug":"/java/07-maven","title":"Maven Deep Dive","sidebar_label":"Maven Deep Dive","sidebar_position":7},"sidebar":"coursesSidebar","previous":{"title":"Performance Tuning & Profiling","permalink":"/ai-engineering-journey/java/06-performance"},"next":{"title":"Gradle Deep Dive","permalink":"/ai-engineering-journey/java/08-gradle"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/07-maven.md


const frontMatter = {
	id: '07-maven',
	slug: '/java/07-maven',
	title: 'Maven Deep Dive',
	sidebar_label: 'Maven Deep Dive',
	sidebar_position: 7
};
const contentTitle = 'Maven Deep Dive';

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
  "value": "1. POM Structure — The Project Object Model",
  "id": "1-pom-structure--the-project-object-model",
  "level": 2
}, {
  "value": "1.1 Minimal POM",
  "id": "11-minimal-pom",
  "level": 3
}, {
  "value": "1.2 Full POM Structure",
  "id": "12-full-pom-structure",
  "level": 3
}, {
  "value": "1.3 The Parent Element",
  "id": "13-the-parent-element",
  "level": 3
}, {
  "value": "1.4 Properties",
  "id": "14-properties",
  "level": 3
}, {
  "value": "1.5 Packaging Types",
  "id": "15-packaging-types",
  "level": 3
}, {
  "value": "2. The Maven Lifecycle",
  "id": "2-the-maven-lifecycle",
  "level": 2
}, {
  "value": "2.1 The Three Built-in Lifecycles",
  "id": "21-the-three-built-in-lifecycles",
  "level": 3
}, {
  "value": "2.2 Default Lifecycle Phases (In Order)",
  "id": "22-default-lifecycle-phases-in-order",
  "level": 3
}, {
  "value": "2.3 Lifecycle Binding",
  "id": "23-lifecycle-binding",
  "level": 3
}, {
  "value": "2.4 Clean Lifecycle",
  "id": "24-clean-lifecycle",
  "level": 3
}, {
  "value": "2.5 Site Lifecycle",
  "id": "25-site-lifecycle",
  "level": 3
}, {
  "value": "2.6 Phase Execution Order Example",
  "id": "26-phase-execution-order-example",
  "level": 3
}, {
  "value": "2.7 Binding Custom Plugin Goals to Phases",
  "id": "27-binding-custom-plugin-goals-to-phases",
  "level": 3
}, {
  "value": "3. Maven Plugins",
  "id": "3-maven-plugins",
  "level": 2
}, {
  "value": "3.1 Compiler Plugin (<code>maven-compiler-plugin</code>)",
  "id": "31-compiler-plugin-maven-compiler-plugin",
  "level": 3
}, {
  "value": "3.2 Surefire Plugin (<code>maven-surefire-plugin</code>)",
  "id": "32-surefire-plugin-maven-surefire-plugin",
  "level": 3
}, {
  "value": "3.3 Failsafe Plugin (<code>maven-failsafe-plugin</code>)",
  "id": "33-failsafe-plugin-maven-failsafe-plugin",
  "level": 3
}, {
  "value": "3.4 JAR Plugin (maven-jar-plugin)",
  "id": "34-jar-plugin-maven-jar-plugin",
  "level": 3
}, {
  "value": "3.5 WAR Plugin (maven-war-plugin)",
  "id": "35-war-plugin-maven-war-plugin",
  "level": 3
}, {
  "value": "3.6 Shade Plugin (maven-shade-plugin)",
  "id": "36-shade-plugin-maven-shade-plugin",
  "level": 3
}, {
  "value": "3.7 Assembly Plugin (maven-assembly-plugin)",
  "id": "37-assembly-plugin-maven-assembly-plugin",
  "level": 3
}, {
  "value": "3.8 Deploy Plugin (maven-deploy-plugin)",
  "id": "38-deploy-plugin-maven-deploy-plugin",
  "level": 3
}, {
  "value": "3.9 Code Quality Plugins",
  "id": "39-code-quality-plugins",
  "level": 3
}, {
  "value": "Checkstyle Plugin",
  "id": "checkstyle-plugin",
  "level": 4
}, {
  "value": "SpotBugs Plugin",
  "id": "spotbugs-plugin",
  "level": 4
}, {
  "value": "PMD Plugin",
  "id": "pmd-plugin",
  "level": 4
}, {
  "value": "4. Dependency Management",
  "id": "4-dependency-management",
  "level": 2
}, {
  "value": "4.1 Dependency Coordinates",
  "id": "41-dependency-coordinates",
  "level": 3
}, {
  "value": "4.2 Dependency Scopes",
  "id": "42-dependency-scopes",
  "level": 3
}, {
  "value": "4.3 Transitive Dependency Resolution",
  "id": "43-transitive-dependency-resolution",
  "level": 3
}, {
  "value": "4.4 Dependency Mediation (Nearest Wins)",
  "id": "44-dependency-mediation-nearest-wins",
  "level": 3
}, {
  "value": "4.5 Exclusions",
  "id": "45-exclusions",
  "level": 3
}, {
  "value": "4.6 Optional Dependencies",
  "id": "46-optional-dependencies",
  "level": 3
}, {
  "value": "4.7 Dependency Management Section",
  "id": "47-dependency-management-section",
  "level": 3
}, {
  "value": "4.8 BOM (Bill of Materials)",
  "id": "48-bom-bill-of-materials",
  "level": 3
}, {
  "value": "Creating a Custom BOM",
  "id": "creating-a-custom-bom",
  "level": 4
}, {
  "value": "4.9 Dependency Convergence",
  "id": "49-dependency-convergence",
  "level": 3
}, {
  "value": "5. Maven Profiles",
  "id": "5-maven-profiles",
  "level": 2
}, {
  "value": "5.1 Profile Activation",
  "id": "51-profile-activation",
  "level": 3
}, {
  "value": "5.2 Activation Conditions",
  "id": "52-activation-conditions",
  "level": 3
}, {
  "value": "5.3 Explicit Activation",
  "id": "53-explicit-activation",
  "level": 3
}, {
  "value": "5.4 Profile Use Cases",
  "id": "54-profile-use-cases",
  "level": 3
}, {
  "value": "5.5 Profile Inheritance and Conflict Resolution",
  "id": "55-profile-inheritance-and-conflict-resolution",
  "level": 3
}, {
  "value": "6. Multi-Module Projects",
  "id": "6-multi-module-projects",
  "level": 2
}, {
  "value": "6.1 Parent POM",
  "id": "61-parent-pom",
  "level": 3
}, {
  "value": "6.2 Child Module POM",
  "id": "62-child-module-pom",
  "level": 3
}, {
  "value": "6.3 Reactor Build Order",
  "id": "63-reactor-build-order",
  "level": 3
}, {
  "value": "6.4 Reactor Options",
  "id": "64-reactor-options",
  "level": 3
}, {
  "value": "6.5 Module Versioning Strategies",
  "id": "65-module-versioning-strategies",
  "level": 3
}, {
  "value": "7. Custom Plugins",
  "id": "7-custom-plugins",
  "level": 2
}, {
  "value": "7.1 Plugin Project Structure",
  "id": "71-plugin-project-structure",
  "level": 3
}, {
  "value": "7.2 Plugin POM",
  "id": "72-plugin-pom",
  "level": 3
}, {
  "value": "7.3 Mojo Implementation",
  "id": "73-mojo-implementation",
  "level": 3
}, {
  "value": "7.4 Using the Custom Plugin",
  "id": "74-using-the-custom-plugin",
  "level": 3
}, {
  "value": "7.5 Plugin Testing",
  "id": "75-plugin-testing",
  "level": 3
}, {
  "value": "8. Repositories",
  "id": "8-repositories",
  "level": 2
}, {
  "value": "8.1 Repository Types",
  "id": "81-repository-types",
  "level": 3
}, {
  "value": "8.2 Defining Repositories",
  "id": "82-defining-repositories",
  "level": 3
}, {
  "value": "8.3 Plugin Repositories",
  "id": "83-plugin-repositories",
  "level": 3
}, {
  "value": "8.4 Mirror Configuration (<code>settings.xml</code>)",
  "id": "84-mirror-configuration-settingsxml",
  "level": 3
}, {
  "value": "8.5 Authentication",
  "id": "85-authentication",
  "level": 3
}, {
  "value": "8.6 Repository Deployment",
  "id": "86-repository-deployment",
  "level": 3
}, {
  "value": "9. Best Practices",
  "id": "9-best-practices",
  "level": 2
}, {
  "value": "9.1 POM Structure",
  "id": "91-pom-structure",
  "level": 3
}, {
  "value": "9.2 Build Performance",
  "id": "92-build-performance",
  "level": 3
}, {
  "value": "9.3 Dependency Hygiene",
  "id": "93-dependency-hygiene",
  "level": 3
}, {
  "value": "9.4 Reproducible Builds",
  "id": "94-reproducible-builds",
  "level": 3
}, {
  "value": "9.5 CI/CD Integration",
  "id": "95-cicd-integration",
  "level": 3
}, {
  "value": "9.6 POM Conventions",
  "id": "96-pom-conventions",
  "level": 3
}, {
  "value": "9.7 Common Pitfalls",
  "id": "97-common-pitfalls",
  "level": 3
}, {
  "value": "10. Maven Wrapper",
  "id": "10-maven-wrapper",
  "level": 2
}, {
  "value": "10.1 Setup",
  "id": "101-setup",
  "level": 3
}, {
  "value": "10.2 Configuration",
  "id": "102-configuration",
  "level": 3
}, {
  "value": "10.3 Usage",
  "id": "103-usage",
  "level": 3
}, {
  "value": "10.4 Custom JVM Configuration",
  "id": "104-custom-jvm-configuration",
  "level": 3
}, {
  "value": "10.5 Multi-Module Wrapper",
  "id": "105-multi-module-wrapper",
  "level": 3
}, {
  "value": "11. Spring Boot with Maven",
  "id": "11-spring-boot-with-maven",
  "level": 2
}, {
  "value": "11.1 Spring Boot Starter Parent",
  "id": "111-spring-boot-starter-parent",
  "level": 3
}, {
  "value": "11.2 Spring Boot Maven Plugin",
  "id": "112-spring-boot-maven-plugin",
  "level": 3
}, {
  "value": "11.3 Plugin Goals",
  "id": "113-plugin-goals",
  "level": 3
}, {
  "value": "11.4 Docker Image Building",
  "id": "114-docker-image-building",
  "level": 3
}, {
  "value": "11.5 Layered JARs",
  "id": "115-layered-jars",
  "level": 3
}, {
  "value": "11.6 Multi-Module Spring Boot",
  "id": "116-multi-module-spring-boot",
  "level": 3
}, {
  "value": "11.7 Devtools Integration",
  "id": "117-devtools-integration",
  "level": 3
}, {
  "value": "11.8 Common Spring Boot Maven Commands",
  "id": "118-common-spring-boot-maven-commands",
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
        id: "maven-deep-dive",
        children: "Maven Deep Dive"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/06-performance",
          children: "Performance Tuning & Profiling"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/08-gradle",
          children: "Gradle Deep Dive"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maven is the de facto standard build tool for Java enterprise development. It provides declarative build configuration, transitive dependency management, a standardized project lifecycle, and an extensible plugin ecosystem. Understanding Maven deeply is essential for any professional Java developer — not just to build projects, but to understand how Spring Boot, multi-module architectures, and enterprise CI/CD pipelines work under the hood."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers Maven in full depth: the POM structure, the build lifecycle, every major plugin, dependency management mechanics, profiles, multi-module builds, BOMs, custom plugin development, repository management, and production best practices. All XML and Java examples are complete and ready to use."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        href: "../../assets/images/lessons/java/07-maven/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/07-maven/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/07-maven/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/07-maven/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/07-maven/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/07-maven/visual-explanation.png",
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
        children: "Read and write a complete Maven POM from scratch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain every element of the Project Object Model: coordinates, packaging, properties, dependencies, dependency management, build, profiles, modules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the Maven lifecycle phases and their order: validate, compile, test, package, verify, install, deploy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure the compiler plugin with source/target versions, annotation processor paths, and compiler arguments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure Surefire for unit test execution with inclusion/exclusion patterns, parallel execution, and report generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure Failsafe for integration tests separate from unit tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure the JAR, WAR, Shade, Assembly, and Deploy plugins"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand transitive dependency resolution, exclusions, optional dependencies, and dependency scopes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a BOM (Bill of Materials) to centralize dependency versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and activate Maven profiles by JDK, OS, property, file existence, and default activation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build multi-module Maven projects with reactor ordering, aggregator vs parent POMs, and CI-friendly versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a custom Maven plugin using the Mojo API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure local, central, and private repositories with mirrors and authentication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply best practices: dependency convergence, pluginManagement, property-driven versions, reproducible builds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the Maven Wrapper for build reproducibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate Spring Boot with Maven using the Spring Boot parent, plugin, and starters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform code quality analysis with Checkstyle, SpotBugs, and PMD"
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
            children: "POM Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coordinates, packaging, properties, deps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POM is the single source of truth for the project"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate -> compile -> test -> package -> verify -> install -> deploy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plugins bind to lifecycle phases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transitive deps, exclusions, scopes, BOMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use BOMs to centralize version control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Profiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment-specific configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Activate by JDK, OS, property, or file existence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reactor build order, aggregator vs parent POM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent POM defines shared config; aggregator lists modules"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[POM Structure] --> B[Lifecycle]\n    B --> C[Plugins]\n    C --> D[Dependency Management]\n    D --> E[Profiles]\n    E --> F[Multi-Module]\n    F --> G[Custom Plugins]\n    G --> H[Repositories]\n    H --> I[Best Practices]\n    I --> J[Spring Boot Integration]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mvn dependency:tree"
        }), " before adding a new dependency to see what versions are already in your transitive graph and avoid version conflicts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-pom-structure--the-project-object-model",
      children: "1. POM Structure — The Project Object Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/07-maven.png",
        alt: "Maven Build Lifecycle & POM Structure"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pom.xml"
      }), " file is the heart of every Maven project. It is an XML file that describes the project: its identity, dependencies, build configuration, plugins, profiles, and module structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-minimal-pom",
      children: "1.1 Minimal POM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every POM inherits from the Super POM, which defines defaults like the central repository, standard lifecycle bindings, and the JAR packaging type. A minimal project needs only coordinates:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0\n         http://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>hello-world</artifactId>\n    <version>1.0.0</version>\n    <packaging>jar</packaging>\n</project>\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "project"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root element, must include the Maven 4.0.0 schema reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "modelVersion"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Always ", (0,jsx_runtime.jsx)(_components.code, {
              children: "4.0.0"
            }), " for Maven 2+"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "groupId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse domain name identifying the organization or project group"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "artifactId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique name of this project within the group"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "version"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Version identifier; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SNAPSHOT"
            }), " indicates in-development"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packaging"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Output format: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "jar"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "war"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pom"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ear"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "maven-plugin"
            }), ", etc."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-full-pom-structure",
      children: "1.2 Full POM Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production POM contains many additional elements. The sections below cover each in detail."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-the-parent-element",
      children: "1.3 The Parent Element"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A POM can inherit from a parent POM. The parent defines shared configuration that children inherit automatically. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<relativePath>"
      }), " element tells Maven where to find the parent POM locally. If omitted or empty, Maven searches the repository."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<parent>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-parent</artifactId>\n    <version>3.4.0</version>\n    <relativePath/>\n</parent>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can also define a corporate parent POM:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<parent>\n    <groupId>com.mycompany</groupId>\n    <artifactId>mycompany-parent</artifactId>\n    <version>4.2.0</version>\n    <relativePath>../mycompany-parent/pom.xml</relativePath>\n</parent>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The parent provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Java version defaults"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-configured plugin versions (compiler, surefire, failsafe, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency management for curated dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resource filtering configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profile activation for different environments"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-properties",
      children: "1.4 Properties"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Properties allow you to define reusable values in the POM. Maven properties use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "${property.name}"
      }), " syntax. There are four categories:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "POM properties"
        }), " — built-in references like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "${project.version}"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "${project.build.directory}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings properties"
        }), " — from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.m2/settings.xml"
        }), ", referenced as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "${settings.*}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System properties"
        }), " — JVM system properties from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-Dproperty=value"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom properties"
        }), " — defined in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<properties>"
        }), ", referenced as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "${custom.name}"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<properties>\n    <java.version>21</java.version>\n    <maven.compiler.source>${java.version}</maven.compiler.source>\n    <maven.compiler.target>${java.version}</maven.compiler.target>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n    <mapstruct.version>1.6.3</mapstruct.version>\n    <guava.version>33.4.0-jre</guava.version>\n    <lombok.version>1.18.36</lombok.version>\n    <testcontainers.version>1.20.4</testcontainers.version>\n    <checkstyle.version>10.21.2</checkstyle.version>\n    <spotbugs.version>4.9.1</spotbugs.version>\n    <pmd.version>7.10.0</pmd.version>\n</properties>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Properties support value interpolation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<properties>\n    <app.name>My App</app.name>\n    <app.version>1.0.0</app.version>\n    <app.full.name>${app.name} v${app.version}</app.full.name>\n</properties>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-packaging-types",
      children: "1.5 Packaging Types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<packaging>"
      }), " element determines the default lifecycle bindings and the output artifact type:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Packaging"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Extension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "jar"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".jar"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java archive — the default; for libraries and standalone applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "war"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".war"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web application archive — for traditional Java EE web apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pom"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".pom"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POM-only — for parent POMs, aggregators, and BOMs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ear"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".ear"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise archive — for Java EE applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "maven-plugin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".jar"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Maven plugin — uses the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "maven-plugin"
            }), " packaging lifecycle"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-the-maven-lifecycle",
      children: "2. The Maven Lifecycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Maven is built around build lifecycles. A lifecycle is a sequence of phases executed in order. When you run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mvn package"
      }), ", Maven executes all phases up to and including ", (0,jsx_runtime.jsx)(_components.code, {
        children: "package"
      }), " in the default lifecycle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-the-three-built-in-lifecycles",
      children: "2.1 The Three Built-in Lifecycles"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Phases"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "default"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Main deployment lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "validate, compile, test, package, verify, install, deploy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "clean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean the project"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pre-clean, clean, post-clean"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "site"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate project documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pre-site, site, post-site, site-deploy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-default-lifecycle-phases-in-order",
      children: "2.2 Default Lifecycle Phases (In Order)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maven defines 23 phases in the default lifecycle. The most important are:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate the project is correct and all necessary information is available"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "initialize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialize build state, e.g. set properties or create directories"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "generate-sources"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate any source code for inclusion in compilation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "process-sources"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process source code, e.g. filter values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "generate-resources"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate resources for inclusion in the package"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "process-resources"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy and filter resources to the output directory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "compile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile the project source code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "process-classes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-process compiled classes, e.g. bytecode enhancement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "generate-test-sources"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate test source code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "process-test-sources"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process test source code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "generate-test-resources"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate test resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "process-test-resources"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy and filter test resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test-compile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile test source code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "process-test-classes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-process test compiled classes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run tests using a suitable testing framework"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "prepare-package"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perform any operations necessary before packaging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "package"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Package the compiled code into the distributable format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pre-integration-test"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set up the integration test environment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "integration-test"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy and run integration tests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "post-integration-test"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tear down the integration test environment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "verify"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify the package is valid and meets quality criteria"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "install"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install the package into the local repository for use as a dependency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deploy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy the package to a remote repository for sharing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-lifecycle-binding",
      children: "2.3 Lifecycle Binding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each packaging type defines default bindings — which plugin goals are bound to which phases. For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jar"
      }), " packaging:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "process-resources      → resources:resources\ncompile                → compiler:compile\nprocess-test-resources → resources:testResources\ntest-compile           → compiler:testCompile\ntest                   → surefire:test\npackage                → jar:jar\ninstall                → install:install\ndeploy                 → deploy:deploy\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "war"
      }), " packaging, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "war:war"
      }), " is bound to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "package"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jar:jar"
      }), ". For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "maven-plugin"
      }), " packaging, additional goals bind for plugin descriptor generation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-clean-lifecycle",
      children: "2.4 Clean Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "pre-clean → clean (clean:clean) → post-clean\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-site-lifecycle",
      children: "2.5 Site Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "pre-site → site (site:site) → post-site → site-deploy (site:deploy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-phase-execution-order-example",
      children: "2.6 Phase Execution Order Example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mvn clean install"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "clean lifecycle"
        }), ": pre-clean, clean (deletes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "target/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "default lifecycle"
        }), ": validate, initialize, generate-sources, process-sources, generate-resources, process-resources, compile, process-classes, generate-test-sources, process-test-sources, generate-test-resources, process-test-resources, test-compile, process-test-classes, test (run unit tests), prepare-package, package (create JAR), pre-integration-test, integration-test, post-integration-test, verify, install (copy JAR to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.m2/repository"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-binding-custom-plugin-goals-to-phases",
      children: "2.7 Binding Custom Plugin Goals to Phases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can bind any plugin goal to any lifecycle phase using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<executions>"
      }), " element:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-failsafe-plugin</artifactId>\n    <version>3.5.2</version>\n    <executions>\n        <execution>\n            <id>integration-tests</id>\n            <phase>integration-test</phase>\n            <goals>\n                <goal>integration-test</goal>\n            </goals>\n            <configuration>\n                <includes>\n                    <include>**/*IT.java</include>\n                </includes>\n            </configuration>\n        </execution>\n        <execution>\n            <id>integration-verify</id>\n            <phase>verify</phase>\n            <goals>\n                <goal>verify</goal>\n            </goals>\n        </execution>\n    </executions>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiple executions of the same plugin can have different IDs, phases, goals, and configurations."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-maven-plugins",
      children: "3. Maven Plugins"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Plugins are the heart of Maven's functionality. Every build operation — compiling, testing, packaging, deploying — is performed by a plugin. Plugins contain ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "goals"
      }), " (also called mojos), which are atomic build operations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "31-compiler-plugin-maven-compiler-plugin",
      children: ["3.1 Compiler Plugin (", (0,jsx_runtime.jsx)(_components.code, {
        children: "maven-compiler-plugin"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The compiler plugin compiles Java source code. It is bound to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "compile"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "test-compile"
      }), " phases by default."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-compiler-plugin</artifactId>\n    <version>3.13.0</version>\n    <configuration>\n        <source>21</source>\n        <target>21</target>\n        <release>21</release>\n        <encoding>UTF-8</encoding>\n        <verbose>false</verbose>\n        <showWarnings>true</showWarnings>\n        <showDeprecation>true</showDeprecation>\n        <compilerArgs>\n            <arg>-Xlint:all</arg>\n            <arg>-parameters</arg>\n            <arg>-Xlint:-processing</arg>\n        </compilerArgs>\n        <annotationProcessorPaths>\n            <path>\n                <groupId>org.projectlombok</groupId>\n                <artifactId>lombok</artifactId>\n                <version>${lombok.version}</version>\n            </path>\n            <path>\n                <groupId>org.mapstruct</groupId>\n                <artifactId>mapstruct-processor</artifactId>\n                <version>${mapstruct.version}</version>\n            </path>\n            <path>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-configuration-processor</artifactId>\n            </path>\n        </annotationProcessorPaths>\n        <annotationProcessorProcessorOptions>\n            <option>\n                <name>mapstruct.defaultComponentModel</name>\n                <value>spring</value>\n            </option>\n        </annotationProcessorProcessorOptions>\n        <fork>true</fork>\n        <maxmem>1024m</maxmem>\n        <meminitial>256m</meminitial>\n    </configuration>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key configuration options:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "source"
          }), " / ", (0,jsx_runtime.jsx)(_components.code, {
            children: "target"
          }), " / ", (0,jsx_runtime.jsx)(_components.code, {
            children: "release"
          })]
        }), ": Java version for source compatibility and target output. Prefer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release"
        }), " in JDK 9+ as it ensures the compiled code only uses APIs available in that release."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "annotationProcessorPaths"
          })
        }), ": The correct way to configure Lombok, MapStruct, and Spring Boot configuration processor — using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<annotationProcessorPaths>"
        }), " instead of declaring them as compile dependencies."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "compilerArgs"
          })
        }), ": Additional arguments passed to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "javac"
        }), ". Common flags include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-Xlint:all"
        }), " for all warnings and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-parameters"
        }), " to retain parameter names for reflection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fork"
          })
        }), ": Run compilation in a separate JVM. Useful when you need to set specific memory limits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "maxmem"
          }), " / ", (0,jsx_runtime.jsx)(_components.code, {
            children: "meminitial"
          })]
        }), ": JVM heap settings for the forked compiler."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "32-surefire-plugin-maven-surefire-plugin",
      children: ["3.2 Surefire Plugin (", (0,jsx_runtime.jsx)(_components.code, {
        children: "maven-surefire-plugin"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Surefire plugin runs unit tests. It is bound to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "test"
      }), " phase by default. It supports JUnit 5 (Jupiter), JUnit 4, and TestNG."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>3.5.2</version>\n    <configuration>\n        <includes>\n            <include>**/*Test.java</include>\n            <include>**/*Tests.java</include>\n            <include>**/*TestCase.java</include>\n        </includes>\n        <excludes>\n            <exclude>**/*IT.java</exclude>\n            <exclude>**/*IntegrationTest.java</exclude>\n            <exclude>**/*Abstract*.java</exclude>\n        </excludes>\n        <parallel>methods</parallel>\n        <useUnlimitedThreads>true</useUnlimitedThreads>\n        <threadCount>4</threadCount>\n        <perCoreThreadCount>true</perCoreThreadCount>\n        <forkCount>2</forkCount>\n        <reuseForks>true</reuseForks>\n        <argLine>-Xmx512m -XX:+UseG1GC</argLine>\n        <skipTests>false</skipTests>\n        <testFailureIgnore>false</testFailureIgnore>\n        <skip>${skipTests}</skip>\n        <reportFormat>brief</reportFormat>\n        <useFile>false</useFile>\n        <trimStackTrace>false</trimStackTrace>\n        <runOrder>random</runOrder>\n        <properties>\n            <property>\n                <name>junit.jupiter.execution.parallel.enabled</name>\n                <value>true</value>\n            </property>\n            <property>\n                <name>junit.jupiter.execution.parallel.config.strategy</name>\n                <value>dynamic</value>\n            </property>\n        </properties>\n        <systemPropertyVariables>\n            <test.env>unit</test.env>\n            <logging.level>DEBUG</logging.level>\n        </systemPropertyVariables>\n        <environmentVariables>\n            <MY_SECRET>${env.MY_SECRET}</MY_SECRET>\n        </environmentVariables>\n    </configuration>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Include/exclude patterns"
        }), ": Control which test classes are picked up. Convention: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*Test.java"
        }), " for unit tests, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*IT.java"
        }), " for integration tests."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parallel execution"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "parallel=methods"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useUnlimitedThreads"
        }), " maximizes throughput."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fork options"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "forkCount"
        }), " controls how many JVM processes are created. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reuseForks=true"
        }), " avoids the overhead of creating a new JVM for each test class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "argLine"
        }), ": JVM arguments passed to the forked test JVM. Use this to set heap sizes and GC settings."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "skipTests"
        }), ": Global flag to skip test execution. Set via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-DskipTests=true"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "reportFormat"
        }), ": Controls console output — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "brief"
        }), " shows a summary, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "plain"
        }), " shows individual results."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "trimStackTrace"
        }), ": When ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), ", shows full stack traces for failures."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Surefire generates XML and HTML reports in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "${project.build.directory}/surefire-reports/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "33-failsafe-plugin-maven-failsafe-plugin",
      children: ["3.3 Failsafe Plugin (", (0,jsx_runtime.jsx)(_components.code, {
        children: "maven-failsafe-plugin"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Failsafe is designed for integration tests. The key difference from Surefire is that Failsafe allows the build to continue even if tests fail during the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "integration-test"
      }), " phase, and only fails during the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "verify"
      }), " phase. This is important because integration tests often require setup/teardown that must happen regardless of test outcomes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-failsafe-plugin</artifactId>\n    <version>3.5.2</version>\n    <configuration>\n        <includes>\n            <include>**/*IT.java</include>\n            <include>**/*IntegrationTest.java</include>\n            <include>**/*ITCase.java</include>\n        </includes>\n        <excludes>\n            <exclude>**/*Test.java</exclude>\n            <exclude>**/*Tests.java</exclude>\n        </excludes>\n        <forkCount>1</forkCount>\n        <reuseForks>false</reuseForks>\n        <argLine>-Xmx1024m -XX:+UseG1GC -XX:MaxMetaspaceSize=256m</argLine>\n        <skipITs>false</skipITs>\n        <skip>${skipITs}</skip>\n        <failIfNoSpecifiedTests>false</failIfNoSpecifiedTests>\n    </configuration>\n    <executions>\n        <execution>\n            <goals>\n                <goal>integration-test</goal>\n                <goal>verify</goal>\n            </goals>\n        </execution>\n    </executions>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Best practice is to separate unit and integration tests by naming convention:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "*Test.java"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*Tests.java"
        }), " → Surefire (unit tests, fast)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "*IT.java"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*IntegrationTest.java"
        }), " → Failsafe (integration tests, slower)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mvn verify"
      }), " to execute both, or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mvn integration-test"
      }), " to run integration tests after packaging."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-jar-plugin-maven-jar-plugin",
      children: "3.4 JAR Plugin (maven-jar-plugin)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The JAR plugin creates a Java archive. It is bound to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "package"
      }), " phase for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jar"
      }), " packaging."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-jar-plugin</artifactId>\n    <version>3.4.2</version>\n    <configuration>\n        <archive>\n            <manifest>\n                <addClasspath>true</addClasspath>\n                <classpathPrefix>lib/</classpathPrefix>\n                <mainClass>com.example.Application</mainClass>\n                <addDefaultImplementationEntries>true</addDefaultImplementationEntries>\n            </manifest>\n            <manifestEntries>\n                <Implementation-Version>${project.version}</Implementation-Version>\n                <Build-Jdk>21</Build-Jdk>\n            </manifestEntries>\n        </archive>\n        <classifier>dist</classifier>\n        <forceCreation>true</forceCreation>\n    </configuration>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "classifier"
        }), ": Append a classifier to the JAR filename (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "myapp-dist.jar"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "excludes / includes"
        }), ": Fine-grained control over JAR contents."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "mainClass"
        }), ": Set the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Main-Class"
        }), " entry point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sealed"
        }), ": Restrict class loading to within the JAR."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "test-jar"
      }), " goal creates a JAR of test classes: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mvn jar:jar jar:test-jar"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-war-plugin-maven-war-plugin",
      children: "3.5 WAR Plugin (maven-war-plugin)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Builds web application archives for servlet container deployment."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-war-plugin</artifactId>\n    <version>3.4.0</version>\n    <configuration>\n        <warName>${project.artifactId}</warName>\n        <failOnMissingWebXml>false</failOnMissingWebXml>\n        <packagingExcludes>\n            WEB-INF/lib/tomcat-*.jar\n        </packagingExcludes>\n        <overlays>\n            <overlay>\n                <groupId>com.example</groupId>\n                <artifactId>shared-resources</artifactId>\n                <type>war</type>\n            </overlay>\n        </overlays>\n    </configuration>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-shade-plugin-maven-shade-plugin",
      children: "3.6 Shade Plugin (maven-shade-plugin)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Creates an uber-JAR (fat JAR) with all dependencies and supports relocation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-shade-plugin</artifactId>\n    <version>3.6.0</version>\n    <configuration>\n        <filters>\n            <filter>\n                <artifact>*:*</artifact>\n                <excludes>\n                    <exclude>META-INF/*.SF</exclude>\n                    <exclude>META-INF/*.DSA</exclude>\n                    <exclude>META-INF/*.RSA</exclude>\n                </excludes>\n            </filter>\n        </filters>\n        <artifactSet>\n            <excludes>\n                <exclude>org.projectlombok:lombok</exclude>\n            </excludes>\n        </artifactSet>\n        <relocations>\n            <relocation>\n                <pattern>com.google.common</pattern>\n                <shadedPattern>myapp.com.google.common</shadedPattern>\n            </relocation>\n        </relocations>\n        <transformers>\n            <transformer implementation=\"org.apache.maven.plugins.shade.resource.ManifestResourceTransformer\">\n                <mainClass>com.example.Application</mainClass>\n            </transformer>\n            <transformer implementation=\"org.apache.maven.plugins.shade.resource.ServicesResourceTransformer\"/>\n            <transformer implementation=\"org.apache.maven.plugins.shade.resource.AppendingTransformer\">\n                <resource>META-INF/spring.factories</resource>\n            </transformer>\n        </transformers>\n        <minimizeJar>true</minimizeJar>\n        <shadedClassifierName>shaded</shadedClassifierName>\n        <shadedArtifactAttached>true</shadedArtifactAttached>\n    </configuration>\n    <executions>\n        <execution>\n            <phase>package</phase>\n            <goals><goal>shade</goal></goals>\n        </execution>\n    </executions>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key concepts:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Relocation"
        }), ": Moves packages to avoid classpath conflicts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transformers"
        }), ": Merge resources from multiple JARs instead of overwriting."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Filters"
        }), ": Remove signature files (.SF, .DSA, .RSA) that become invalid after shading."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MinimizeJar"
        }), ": Removes unused classes from bundled dependencies."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "37-assembly-plugin-maven-assembly-plugin",
      children: "3.7 Assembly Plugin (maven-assembly-plugin)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Creates custom distribution archives (ZIP, TAR, GZip)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-assembly-plugin</artifactId>\n    <version>3.7.1</version>\n    <configuration>\n        <descriptors>\n            <descriptor>src/assembly/distribution.xml</descriptor>\n        </descriptors>\n        <finalName>${project.artifactId}-${project.version}</finalName>\n        <attach>true</attach>\n        <appendAssemblyId>true</appendAssemblyId>\n    </configuration>\n    <executions>\n        <execution>\n            <id>make-assembly</id>\n            <phase>package</phase>\n            <goals><goal>single</goal></goals>\n        </execution>\n    </executions>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assembly descriptor (src/assembly/distribution.xml):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<assembly xmlns=\"http://maven.apache.org/ASSEMBLY/4.0.0\"\n          xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n          xsi:schemaLocation=\"http://maven.apache.org/ASSEMBLY/4.0.0\n          http://maven.apache.org/xsd/assembly-4.0.0.xsd\">\n    <id>distribution</id>\n    <formats>\n        <format>zip</format>\n        <format>tar.gz</format>\n    </formats>\n    <includeBaseDirectory>true</includeBaseDirectory>\n    <files>\n        <file>\n            <source>README.md</source>\n            <outputDirectory>.</outputDirectory>\n            <filtered>true</filtered>\n        </file>\n    </files>\n    <fileSets>\n        <fileSet>\n            <directory>${project.build.directory}</directory>\n            <outputDirectory>lib</outputDirectory>\n            <includes><include>*.jar</include></includes>\n        </fileSet>\n        <fileSet>\n            <directory>src/main/scripts</directory>\n            <outputDirectory>bin</outputDirectory>\n            <fileMode>755</fileMode>\n        </fileSet>\n    </fileSets>\n    <dependencySets>\n        <dependencySet>\n            <outputDirectory>lib</outputDirectory>\n            <scope>runtime</scope>\n            <useProjectArtifact>true</useProjectArtifact>\n            <useTransitiveDependencies>true</useTransitiveDependencies>\n        </dependencySet>\n    </dependencySets>\n</assembly>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "38-deploy-plugin-maven-deploy-plugin",
      children: "3.8 Deploy Plugin (maven-deploy-plugin)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uploads built artifacts to a remote repository."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-deploy-plugin</artifactId>\n    <version>3.1.4</version>\n    <configuration>\n        <altDeploymentRepository>\n            my-repo::default::https://nexus.mycompany.com/repository/maven-releases/\n        </altDeploymentRepository>\n        <deployAtEnd>true</deployAtEnd>\n        <retryFailedDeploymentAttempts>3</retryFailedDeploymentAttempts>\n    </configuration>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "39-code-quality-plugins",
      children: "3.9 Code Quality Plugins"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "checkstyle-plugin",
      children: "Checkstyle Plugin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enforces coding standards from a configuration file."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-checkstyle-plugin</artifactId>\n    <version>3.6.0</version>\n    <dependencies>\n        <dependency>\n            <groupId>com.puppycrawl.tools</groupId>\n            <artifactId>checkstyle</artifactId>\n            <version>10.21.2</version>\n        </dependency>\n    </dependencies>\n    <configuration>\n        <configLocation>google_checks.xml</configLocation>\n        <consoleOutput>true</consoleOutput>\n        <failsOnError>true</failsOnError>\n        <includeTestSourceDirectory>true</includeTestSourceDirectory>\n    </configuration>\n    <executions>\n        <execution>\n            <id>validate</id>\n            <phase>validate</phase>\n            <goals><goal>check</goal></goals>\n        </execution>\n    </executions>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "spotbugs-plugin",
      children: "SpotBugs Plugin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bytecode analysis to detect bug patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>com.github.spotbugs</groupId>\n    <artifactId>spotbugs-maven-plugin</artifactId>\n    <version>4.9.1</version>\n    <dependencies>\n        <dependency>\n            <groupId>com.github.spotbugs</groupId>\n            <artifactId>spotbugs</artifactId>\n            <version>4.9.1</version>\n        </dependency>\n    </dependencies>\n    <configuration>\n        <effort>Max</effort>\n        <threshold>Low</threshold>\n        <failOnError>true</failOnError>\n        <plugins>\n            <plugin>\n                <groupId>com.h3xstream.findsecbugs</groupId>\n                <artifactId>findsecbugs-plugin</artifactId>\n                <version>1.12.0</version>\n            </plugin>\n        </plugins>\n    </configuration>\n    <executions>\n        <execution>\n            <id>spotbugs-check</id>\n            <phase>verify</phase>\n            <goals><goal>check</goal></goals>\n        </execution>\n    </executions>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pmd-plugin",
      children: "PMD Plugin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Source code analysis for common flaws."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-pmd-plugin</artifactId>\n    <version>3.26.0</version>\n    <dependencies>\n        <dependency>\n            <groupId>net.sourceforge.pmd</groupId>\n            <artifactId>pmd-java</artifactId>\n            <version>7.10.0</version>\n        </dependency>\n    </dependencies>\n    <configuration>\n        <rulesets>\n            <ruleset>/rulesets/java/quickstart.xml</ruleset>\n            <ruleset>${project.basedir}/config/pmd/ruleset.xml</ruleset>\n        </rulesets>\n        <targetJdk>21</targetJdk>\n        <includeTests>true</includeTests>\n        <failOnViolation>true</failOnViolation>\n        <excludes><exclude>**/generated/**</exclude></excludes>\n    </configuration>\n    <executions>\n        <execution>\n            <id>pmd-check</id>\n            <phase>verify</phase>\n            <goals><goal>check</goal><goal>cpd-check</goal></goals>\n        </execution>\n    </executions>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-dependency-management",
      children: "4. Dependency Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dependency management handles transitive resolution, version mediation, and conflict resolution."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-dependency-coordinates",
      children: "4.1 Dependency Coordinates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every dependency is identified by groupId, artifactId, version, plus optional type, scope, classifier."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n    <version>3.4.0</version>\n    <type>jar</type>\n    <scope>compile</scope>\n    <optional>false</optional>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-dependency-scopes",
      children: "4.2 Dependency Scopes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transitive?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "compile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Available everywhere. Default."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "provided"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time only, not packaged."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed at compile time."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test compilation and execution only."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Like provided, explicit path. Avoid."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "import"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only in dependencyManagement. Imports BOM."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-test</artifactId>\n    <scope>test</scope>\n</dependency>\n<dependency>\n    <groupId>org.projectlombok</groupId>\n    <artifactId>lombok</artifactId>\n    <scope>provided</scope>\n</dependency>\n<dependency>\n    <groupId>org.postgresql</groupId>\n    <artifactId>postgresql</artifactId>\n    <scope>runtime</scope>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-transitive-dependency-resolution",
      children: "4.3 Transitive Dependency Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Declaring ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-starter-web"
      }), " pulls in Spring MVC, Tomcat, Jackson, Logback transitively. Maven automatically resolves the full dependency tree."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-dependency-mediation-nearest-wins",
      children: "4.4 Dependency Mediation (Nearest Wins)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When multiple versions of the same dependency exist in the tree, Maven uses the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nearest definition"
      }), ": the version closest to the root wins. Same depth: first declaration wins."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Project A\n  -> B:1.0 -> C:2.0\n  -> D:1.0 -> C:1.0  (wins, same depth, B wins by declaration order)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-exclusions",
      children: "4.5 Exclusions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Remove unwanted transitive dependencies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>com.example</groupId>\n    <artifactId>some-library</artifactId>\n    <version>1.0</version>\n    <exclusions>\n        <exclusion>\n            <groupId>commons-logging</groupId>\n            <artifactId>commons-logging</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-optional-dependencies",
      children: "4.6 Optional Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optional dependencies are not propagated transitively:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>com.example</groupId>\n    <artifactId>optional-feature</artifactId>\n    <version>1.0</version>\n    <optional>true</optional>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-dependency-management-section",
      children: "4.7 Dependency Management Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Declares versions in a parent without adding dependencies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.google.guava</groupId>\n            <artifactId>guava</artifactId>\n            <version>33.4.0-jre</version>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Child modules inherit versions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependencies>\n    <dependency>\n        <groupId>com.google.guava</groupId>\n        <artifactId>guava</artifactId>\n    </dependency>\n</dependencies>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "48-bom-bill-of-materials",
      children: "4.8 BOM (Bill of Materials)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A BOM is a POM with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<packaging>pom</packaging>"
      }), " that centralizes version management via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<dependencyManagement>"
      }), ". Imported with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "import"
      }), " scope:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-dependencies</artifactId>\n            <version>3.4.0</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why import scope?"
      }), " Without it, dependencyManagement only affects the current POM and children. Import scope lets you incorporate an external POM's version management."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "creating-a-custom-bom",
      children: "Creating a Custom BOM"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.mycompany</groupId>\n    <artifactId>mycompany-bom</artifactId>\n    <version>2.0.0</version>\n    <packaging>pom</packaging>\n\n    <properties>\n        <spring.boot.version>3.4.0</spring.boot.version>\n        <guava.version>33.4.0-jre</guava.version>\n        <lombok.version>1.18.36</lombok.version>\n    </properties>\n\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-dependencies</artifactId>\n                <version>${spring.boot.version}</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n            <dependency>\n                <groupId>com.google.guava</groupId>\n                <artifactId>guava</artifactId>\n                <version>${guava.version}</version>\n            </dependency>\n            <dependency>\n                <groupId>org.projectlombok</groupId>\n                <artifactId>lombok</artifactId>\n                <version>${lombok.version}</version>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "49-dependency-convergence",
      children: "4.9 Dependency Convergence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the Enforcer plugin to enforce version consistency:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-enforcer-plugin</artifactId>\n    <version>3.5.0</version>\n    <configuration>\n        <rules>\n            <dependencyConvergence/>\n            <requireReleaseDeps>\n                <onlyWhenRelease>true</onlyWhenRelease>\n            </requireReleaseDeps>\n            <bannedDependencies>\n                <excludes>\n                    <exclude>commons-logging:commons-logging</exclude>\n                    <exclude>log4j:log4j</exclude>\n                </excludes>\n            </bannedDependencies>\n        </rules>\n    </configuration>\n    <executions>\n        <execution>\n            <id>enforce</id>\n            <phase>validate</phase>\n            <goals><goal>enforce</goal></goals>\n        </execution>\n    </executions>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-maven-profiles",
      children: "5. Maven Profiles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Profiles enable build-time configuration changes — different environments, JDK versions, or deployment targets — without modifying POM files."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-profile-activation",
      children: "5.1 Profile Activation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Profiles activate automatically based on conditions or explicitly via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-P"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<profiles>\n    <profile>\n        <id>production</id>\n        <activation>\n            <activeByDefault>false</activeByDefault>\n            <jdk>21</jdk>\n            <os>\n                <name>Linux</name>\n                <arch>amd64</arch>\n            </os>\n            <property>\n                <name>env</name>\n                <value>prod</value>\n            </property>\n            <file>\n                <exists>${project.basedir}/config/prod.properties</exists>\n            </file>\n        </activation>\n        <properties>\n            <db.url>jdbc:postgresql://prod-db:5432/myapp</db.url>\n            <db.username>${env.PROD_DB_USER}</db.username>\n            <logging.level>WARN</logging.level>\n        </properties>\n    </profile>\n</profiles>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-activation-conditions",
      children: "5.2 Activation Conditions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "jdk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "version"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Range: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[1.8,21]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "!"
            }), " negates"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "os"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name/arch/family"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match OS attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name/value"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["System property ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-Dmyprop=value"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exists/missing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File existence check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "activeByDefault"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Activates when no other profile is active"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-explicit-activation",
      children: "5.3 Explicit Activation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Activate a specific profile\nmvn clean install -Pproduction\n\n# Activate multiple profiles\nmvn clean install -Pproduction,coverage,slow-tests\n\n# Deactivate a profile (negation)\nmvn clean install -P!production\n\n# Activate via system property\nmvn clean install -Denv=production\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-profile-use-cases",
      children: "5.4 Profile Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Development profile:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<profile>\n    <id>development</id>\n    <activation>\n        <activeByDefault>true</activeByDefault>\n    </activation>\n    <properties>\n        <db.url>jdbc:h2:mem:testdb</db.url>\n        <logging.level>DEBUG</logging.level>\n        <skipTests>false</skipTests>\n    </properties>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n                <configuration>\n                    <jvmArguments>-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005</jvmArguments>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</profile>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Coverage profile:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<profile>\n    <id>coverage</id>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.jacoco</groupId>\n                <artifactId>jacoco-maven-plugin</artifactId>\n                <version>0.8.12</version>\n                <executions>\n                    <execution>\n                        <id>prepare-agent</id>\n                        <goals><goal>prepare-agent</goal></goals>\n                    </execution>\n                    <execution>\n                        <id>report</id>\n                        <phase>verify</phase>\n                        <goals><goal>report</goal></goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</profile>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-profile-inheritance-and-conflict-resolution",
      children: "5.5 Profile Inheritance and Conflict Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When multiple profiles define the same element, the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "last-activated"
      }), " profile wins. Activation order:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implicit from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "activeProfiles"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "settings.xml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-P"
        }), " flags (rightmost wins on conflict)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Property-based activation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JDK/OS/File activation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<activeProfiles>\n    <activeProfile>development</activeProfile>\n</activeProfiles>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-multi-module-projects",
      children: "6. Multi-Module Projects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-module projects organize related modules under a single parent POM."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-parent-pom",
      children: "6.1 Parent POM"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>myapp-parent</artifactId>\n    <version>1.0.0</version>\n    <packaging>pom</packaging>\n\n    <name>MyApp Parent</name>\n\n    <modules>\n        <module>myapp-common</module>\n        <module>myapp-domain</module>\n        <module>myapp-repository</module>\n        <module>myapp-service</module>\n        <module>myapp-web</module>\n        <module>myapp-boot</module>\n    </modules>\n\n    <properties>\n        <java.version>21</java.version>\n        <maven.compiler.source>${java.version}</maven.compiler.source>\n        <maven.compiler.target>${java.version}</maven.compiler.target>\n        <spring.boot.version>3.4.0</spring.boot.version>\n        <spring.cloud.version>2024.0.0</spring.cloud.version>\n    </properties>\n\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-dependencies</artifactId>\n                <version>${spring.boot.version}</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n\n    <build>\n        <pluginManagement>\n            <plugins>\n                <plugin>\n                    <groupId>org.springframework.boot</groupId>\n                    <artifactId>spring-boot-maven-plugin</artifactId>\n                    <version>${spring.boot.version}</version>\n                </plugin>\n            </plugins>\n        </pluginManagement>\n    </build>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-child-module-pom",
      children: "6.2 Child Module POM"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<project>\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>com.example</groupId>\n        <artifactId>myapp-parent</artifactId>\n        <version>1.0.0</version>\n        <relativePath>../pom.xml</relativePath>\n    </parent>\n\n    <artifactId>myapp-service</artifactId>\n\n    <name>MyApp Service Module</name>\n\n    <dependencies>\n        <dependency>\n            <groupId>${project.groupId}</groupId>\n            <artifactId>myapp-domain</artifactId>\n        </dependency>\n    </dependencies>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-reactor-build-order",
      children: "6.3 Reactor Build Order"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maven determines build order by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency graph"
        }), ": If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "myapp-web"
        }), " depends on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "myapp-service"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "myapp-service"
        }), " builds first."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Declaration order"
        }), ": Listed order in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<modules>"
        }), " is the tiebreaker."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No cycles"
        }), ": A module cannot depend on itself transitively."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Build the entire reactor\nmvn clean install\n\n# Build specific module and its dependencies\nmvn -pl myapp-web -am clean install\n\n# Build specific module only (skip dependencies)\nmvn -pl myapp-web clean install\n\n# Build from a specific module onward\nmvn -rf myapp-service clean install\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "-pl"
      }), " = project list, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-am"
      }), " = also-make (dependencies), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-rf"
      }), " = resume from."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-reactor-options",
      children: "6.4 Reactor Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Exclude specific modules\nmvn clean install -pl '!myapp-integration-tests'\n\n# Build changed modules only (Maven 4)\nmvn -B clean install --changed\n\n# Parallel reactor build\nmvn -T 4 clean install\n\n# Fail-safe mode: continue building other modules on failure\nmvn -fae clean install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-module-versioning-strategies",
      children: "6.5 Module Versioning Strategies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistent versioning"
        }), " (recommended): All modules share the parent version."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Independent versioning"
        }), ": Each module versions independently, BOM coordinates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CI-driven"
        }), ": Versions auto-bumped by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "versions-maven-plugin"
        }), " in CI."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-custom-plugins",
      children: "7. Custom Plugins"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When built-in plugins do not suffice, create a custom Maven plugin."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-plugin-project-structure",
      children: "7.1 Plugin Project Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "my-custom-plugin/\n  pom.xml\n  src/\n    main/\n      java/\n        com/\n          example/\n            MyMojo.java\n            MyOtherMojo.java\n      resources/\n        META-INF/\n          maven/\n            plugin.xml (auto-generated)\n  src/it/  (integration tests)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-plugin-pom",
      children: "7.2 Plugin POM"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>my-custom-plugin</artifactId>\n    <version>1.0.0</version>\n    <packaging>maven-plugin</packaging>\n\n    <name>My Custom Maven Plugin</name>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.apache.maven</groupId>\n            <artifactId>maven-plugin-api</artifactId>\n            <version>3.9.9</version>\n            <scope>provided</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.maven.plugin-tools</groupId>\n            <artifactId>maven-plugin-annotations</artifactId>\n            <version>3.15.1</version>\n            <scope>provided</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.maven</groupId>\n            <artifactId>maven-project</artifactId>\n            <version>2.2.1</version>\n            <scope>provided</scope>\n        </dependency>\n    </dependencies>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-mojo-implementation",
      children: "7.3 Mojo Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example;\n\nimport org.apache.maven.plugin.AbstractMojo;\nimport org.apache.maven.plugin.MojoExecutionException;\nimport org.apache.maven.plugin.MojoFailureException;\nimport org.apache.maven.plugins.annotations.LifecyclePhase;\nimport org.apache.maven.plugins.annotations.Mojo;\nimport org.apache.maven.plugins.annotations.Parameter;\nimport org.apache.maven.project.MavenProject;\n\nimport java.io.File;\nimport java.io.IOException;\nimport java.nio.file.*;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\n@Mojo(\n    name = \"count-lines\",\n    defaultPhase = LifecyclePhase.VERIFY,\n    requiresProject = true,\n    threadSafe = true,\n    requiresDependencyResolution = ResolutionScope.COMPILE\n)\npublic class CountLinesMojo extends AbstractMojo {\n\n    @Parameter(\n        defaultValue = \"${project.basedir}\",\n        property = \"sourceDir\",\n        required = true\n    )\n    private File sourceDir;\n\n    @Parameter(\n        defaultValue = \"*.java\",\n        property = \"includePattern\"\n    )\n    private String includePattern;\n\n    @Parameter(\n        defaultValue = \"false\",\n        property = \"failOnThreshold\"\n    )\n    private boolean failOnThreshold;\n\n    @Parameter(\n        defaultValue = \"10000\"\n    )\n    private int maxLines;\n\n    @Parameter(\n        defaultValue = \"${project.build.directory}\",\n        readonly = true\n    )\n    private File outputDirectory;\n\n    @Parameter(defaultValue = \"${project}\", readonly = true)\n    private MavenProject project;\n\n    @Override\n    public void execute() throws MojoExecutionException, MojoFailureException {\n        getLog().info(\"Counting lines in: \" + sourceDir.getAbsolutePath());\n        getLog().info(\"Pattern: \" + includePattern);\n\n        try {\n            PathMatcher matcher = FileSystems.getDefault()\n                .getPathMatcher(\"glob:\" + includePattern);\n            int totalLines = 0;\n            int totalFiles = 0;\n\n            List<Path> files = Files.walk(sourceDir.toPath())\n                .filter(Files::isRegularFile)\n                .filter(p -> matcher.matches(p.getFileName()))\n                .collect(Collectors.toList());\n\n            for (Path file : files) {\n                long lines = Files.lines(file).count();\n                totalLines += lines;\n                totalFiles++;\n                getLog().debug(file + \": \" + lines + \" lines\");\n            }\n\n            getLog().info(\"Total files: \" + totalFiles);\n            getLog().info(\"Total lines: \" + totalLines);\n\n            project.getProperties().setProperty(\"totalLines\",\n                String.valueOf(totalLines));\n\n            if (failOnThreshold && totalLines > maxLines) {\n                throw new MojoFailureException(\n                    \"Line count \" + totalLines + \" exceeds threshold \"\n                    + maxLines);\n            }\n        } catch (IOException e) {\n            throw new MojoExecutionException(\n                \"Failed to count lines\", e);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-using-the-custom-plugin",
      children: "7.4 Using the Custom Plugin"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>com.example</groupId>\n    <artifactId>my-custom-plugin</artifactId>\n    <version>1.0.0</version>\n    <configuration>\n        <sourceDir>${project.basedir}/src</sourceDir>\n        <includePattern>*.{java,xml,properties}</includePattern>\n        <failOnThreshold>true</failOnThreshold>\n        <maxLines>15000</maxLines>\n    </configuration>\n    <executions>\n        <execution>\n            <id>line-count</id>\n            <phase>verify</phase>\n            <goals><goal>count-lines</goal></goals>\n        </execution>\n    </executions>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Invoke directly: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mvn com.example:my-custom-plugin:1.0.0:count-lines -DsourceDir=src -DmaxLines=20000"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-plugin-testing",
      children: "7.5 Plugin Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.apache.maven.plugin-testing</groupId>\n    <artifactId>maven-plugin-testing-harness</artifactId>\n    <version>3.3.0</version>\n    <scope>test</scope>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@org.junit.jupiter.api.Test\nvoid testCountLines() throws Exception {\n    CountLinesMojo mojo = new CountLinesMojo();\n    mojo.setSourceDir(new File(\"src/test/resources/sample-project\"));\n    mojo.setIncludePattern(\"*.java\");\n    mojo.execute();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-repositories",
      children: "8. Repositories"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maven resolves dependencies from repositories defined in POMs, settings.xml, or super POM."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-repository-types",
      children: "8.1 Repository Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contains"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution Priority"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Central (Maven Central)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public artifacts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fallback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Local (", (0,jsx_runtime.jsx)(_components.code, {
              children: "~/.m2/repository"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Downloaded caches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remote (Nexus/Artifactory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private or mirrored"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before Central"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-defining-repositories",
      children: "8.2 Defining Repositories"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<repositories>\n    <repository>\n        <id>central</id>\n        <url>https://repo.maven.apache.org/maven2</url>\n        <releases><enabled>true</enabled></releases>\n        <snapshots><enabled>false</enabled></snapshots>\n    </repository>\n    <repository>\n        <id>my-private-repo</id>\n        <url>https://nexus.mycompany.com/repository/maven-releases/</url>\n        <releases>\n            <enabled>true</enabled>\n            <checksumPolicy>fail</checksumPolicy>\n        </releases>\n        <snapshots>\n            <enabled>true</enabled>\n            <updatePolicy>always</updatePolicy>\n        </snapshots>\n    </repository>\n</repositories>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-plugin-repositories",
      children: "8.3 Plugin Repositories"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plugin artifacts use a separate resolution path:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<pluginRepositories>\n    <pluginRepository>\n        <id>my-plugin-repo</id>\n        <url>https://nexus.mycompany.com/repository/maven-plugins/</url>\n    </pluginRepository>\n</pluginRepositories>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "84-mirror-configuration-settingsxml",
      children: ["8.4 Mirror Configuration (", (0,jsx_runtime.jsx)(_components.code, {
        children: "settings.xml"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<mirrors>\n    <mirror>\n        <id>nexus-mirror</id>\n        <mirrorOf>*</mirrorOf>\n        <url>https://nexus.mycompany.com/repository/maven-proxy/</url>\n        <blocked>false</blocked>\n    </mirror>\n    <mirror>\n        <id>internal-mirror</id>\n        <mirrorOf>internal-repo</mirrorOf>\n        <url>https://nexus.mycompany.com/repository/maven-releases/</url>\n    </mirror>\n</mirrors>\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "mirrorOf"
            }), " value"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All repositories"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "external:*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All except local"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "repo1,repo2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specific repo IDs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "!central"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All except central"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "central"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-authentication",
      children: "8.5 Authentication"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<servers>\n    <server>\n        <id>my-private-repo</id>\n        <username>${env.NEXUS_USERNAME}</username>\n        <password>${env.NEXUS_PASSWORD}</password>\n        <filePermissions>664</filePermissions>\n        <directoryPermissions>775</directoryPermissions>\n        <configuration>\n            <https>true</https>\n        </configuration>\n    </server>\n</servers>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-repository-deployment",
      children: "8.6 Repository Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<distributionManagement>\n    <repository>\n        <id>releases</id>\n        <name>Internal Releases</name>\n        <url>https://nexus.mycompany.com/repository/maven-releases/</url>\n    </repository>\n    <snapshotRepository>\n        <id>snapshots</id>\n        <name>Internal Snapshots</name>\n        <url>https://nexus.mycompany.com/repository/maven-snapshots/</url>\n        <uniqueVersion>true</uniqueVersion>\n    </snapshotRepository>\n    <site>\n        <id>site</id>\n        <url>scp://server/path/to/site</url>\n    </site>\n</distributionManagement>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-best-practices",
      children: "9. Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-pom-structure",
      children: "9.1 POM Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use properties"
        }), ": Centralize versions in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<properties>"
        }), " for consistency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BOM for large projects"
        }), ": Import a BOM rather than repeating dependencies."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parent POM for common config"
        }), ": Share compiler settings, plugin configs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Avoid optional dependencies"
        }), ": Prefer separate modules over optional deps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pin plugin versions"
        }), ": Do not rely on super POM defaults."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-build-performance",
      children: "9.2 Build Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-compiler-plugin</artifactId>\n    <version>3.13.0</version>\n    <configuration>\n        <parameters>true</parameters>\n        <enablePreview>true</enablePreview>\n    </configuration>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Parallel builds\nmvn -T 4 clean install\n\n# Skip tests for fast iteration\nmvn install -DskipTests\n\n# Compile only\nmvn compile -o --offline\n\n# Pre-resolve dependencies\nmvn dependency:resolve\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-dependency-hygiene",
      children: "9.3 Dependency Hygiene"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Analyze unused/explicitly declared dependencies\nmvn dependency:analyze\n\n# Display the dependency tree\nmvn dependency:tree\n\n# Check for updates\nmvn versions:display-dependency-updates\n\n# Resolve and copy to directory\nmvn dependency:copy-dependencies -DoutputDirectory=dist/lib\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-reproducible-builds",
      children: "9.4 Reproducible Builds"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-jar-plugin</artifactId>\n    <version>3.4.2</version>\n    <configuration>\n        <archive>\n            <manifestEntries>\n                <Created-By>Maven 3.9.9</Created-By>\n                <Build-Jdk-Spec>21</Build-Jdk-Spec>\n            </manifestEntries>\n        </archive>\n    </configuration>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-cicd-integration",
      children: "9.5 CI/CD Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/build.yml\nname: Maven Build\non: [push, pull_request]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-java@v4\n        with:\n          java-version: '21'\n          distribution: 'temurin'\n          cache: maven\n      - run: mvn -B verify -Pcoverage\n      - uses: actions/upload-artifact@v4\n        with:\n          name: test-results\n          path: '**/target/surefire-reports/*.xml'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "96-pom-conventions",
      children: "9.6 POM Conventions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "groupId"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "com.{company}.{project}"
        }), " (reverse domain)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "artifactId"
        }), ": Lowercase, hyphen-separated (", (0,jsx_runtime.jsx)(_components.code, {
          children: "myapp-service"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "version"
        }), ": Semantic (", (0,jsx_runtime.jsx)(_components.code, {
          children: "1.2.0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.0.0-SNAPSHOT"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "POM filename"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pom.xml"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{artifactId}-{version}.pom"
        }), " in repository"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parent reference"
        }), ": Always use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<relativePath>"
        }), " for clarity"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "97-common-pitfalls",
      children: "9.7 Common Pitfalls"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stale local cache"
        }), ": Delete ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.m2/repository"
        }), " for a clean build."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing BOM"
        }), ": Duplicate plugin versions across modules."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overly broad exclusion"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<exclude>*:*</exclude>"
        }), " removes everything."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-reproducible builds"
        }), ": Timestamps, absolute paths in output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Large JARs"
        }), ": Shade plugin includes unnecessary transitive deps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Slow builds"
        }), ": No parallel execution, excessive test classes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-maven-wrapper",
      children: "10. Maven Wrapper"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ensures the correct Maven version is used without installation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-setup",
      children: "10.1 Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate wrapper files in the project root\nmvn wrapper:wrapper -Dmaven=3.9.9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Creates:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mvnw (Unix shell script)\nmvnw.cmd (Windows batch script)\n.mvn/\n  wrapper/\n    maven-wrapper.jar\n    maven-wrapper.properties\n  jvm.config\n  maven.config\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-configuration",
      children: "10.2 Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# .mvn/wrapper/maven-wrapper.properties\ndistributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.9/apache-maven-3.9.9-bin.zip\nwrapperUrl=https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.3.2/maven-wrapper-3.3.2.jar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-usage",
      children: "10.3 Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Unix\n./mvnw clean install\n\n# Windows\nmvnw.cmd clean install\n\n# All standard Maven commands work identically\n./mvnw -Pproduction package\n./mvnw --version\n./mvnw dependency:tree\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-custom-jvm-configuration",
      children: "10.4 Custom JVM Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# .mvn/jvm.config\n-Xmx2g\n-XX:+UseZGC\n-XX:+ZGenerational\n-Djava.security.egd=file:/dev/./urandom\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-multi-module-wrapper",
      children: "10.5 Multi-Module Wrapper"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Place wrapper at the reactor root. All modules inherit it. The wrapper auto-downloads the specified Maven version on first run and caches it in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.m2/wrapper/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-spring-boot-with-maven",
      children: "11. Spring Boot with Maven"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot integrates deeply with Maven via its parent POM and dedicated plugin."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-spring-boot-starter-parent",
      children: "11.1 Spring Boot Starter Parent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<parent>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-parent</artifactId>\n    <version>3.4.0</version>\n    <relativePath/>\n</parent>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-configured dependency management for hundreds of Spring libraries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plugin management (spring-boot-maven-plugin, compiler, surefire)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Resource filtering with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@profile@"
        }), " placeholders"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "java.version"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "resource.delimiter"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maven.compiler.source"
        }), ", etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<pluginManagement>"
        }), " for Spring Boot plugin"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-spring-boot-maven-plugin",
      children: "11.2 Spring Boot Maven Plugin"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<build>\n    <plugins>\n        <plugin>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-maven-plugin</artifactId>\n            <configuration>\n                <mainClass>com.example.Application</mainClass>\n                <excludes>\n                    <exclude>\n                        <groupId>org.projectlombok</groupId>\n                        <artifactId>lombok</artifactId>\n                    </exclude>\n                </excludes>\n                <layers>\n                    <enabled>true</enabled>\n                    <configuration>${project.basedir}/layers.xml</configuration>\n                </layers>\n                <image>\n                    <name>${project.artifactId}:${project.version}</name>\n                    <env>\n                        <JAVA_OPTS>-XX:+UseZGC</JAVA_OPTS>\n                    </env>\n                </image>\n                <docker>\n                    <publishRegistry>\n                        <username>${env.DOCKER_USERNAME}</username>\n                        <password>${env.DOCKER_PASSWORD}</password>\n                    </publishRegistry>\n                </docker>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-plugin-goals",
      children: "11.3 Plugin Goals"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Package as executable JAR\nmvn package\n\n# Run the application\nmvn spring-boot:run\n\n# Run with custom arguments\nmvn spring-boot:run -Dspring-boot.run.arguments=\"--server.port=9090,--spring.profiles.active=dev\"\n\n# Run with debug\nmvn spring-boot:run -Dspring-boot.run.jvmArguments=\"-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=5005\"\n\n# Build a Docker image\nmvn spring-boot:build-image -Dspring-boot.build-image.imageName=myapp:latest\n\n# Start/stop for integration tests\nmvn spring-boot:start\n# ... run integration tests ...\nmvn spring-boot:stop\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-docker-image-building",
      children: "11.4 Docker Image Building"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot 3.x uses Cloud Native Buildpacks via Paketo:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Build OCI-compliant container image\nmvn spring-boot:build-image\n\n# Customize builder and run images\nmvn spring-boot:build-image \\\n    -Dspring-boot.build-image.builder=paketobuildpacks/builder:base\n\n# Publish to registry\nmvn spring-boot:build-image \\\n    -Dspring-boot.build-image.imageName=docker.io/myorg/myapp:latest \\\n    -Dspring-boot.build-image.publish=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-layered-jars",
      children: "11.5 Layered JARs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-maven-plugin</artifactId>\n    <configuration>\n        <layers>\n            <enabled>true</enabled>\n        </layers>\n    </configuration>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Custom layer configuration (layers.xml):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<layers xmlns=\"http://www.springframework.org/schema/boot/layers\"\n        xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n        xsi:schemaLocation=\"http://www.springframework.org/schema/boot/layers\n        https://www.springframework.org/schema/boot/layers/layers-3.xsd\">\n    <application>\n        <into layer=\"application\">\n            <include>**/**</include>\n        </into>\n    </application>\n    <dependencies>\n        <into layer=\"spring-boot-loader\">\n            <include>org/springframework/boot/loader/**</include>\n        </into>\n        <into layer=\"dependencies\"/>\n    </dependencies>\n    <layerOrder>\n        <layer>dependencies</layer>\n        <layer>spring-boot-loader</layer>\n        <layer>application</layer>\n    </layerOrder>\n</layers>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "116-multi-module-spring-boot",
      children: "11.6 Multi-Module Spring Boot"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<project>\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>com.example</groupId>\n        <artifactId>myapp-parent</artifactId>\n        <version>1.0.0</version>\n    </parent>\n\n    <artifactId>myapp-boot</artifactId>\n    <packaging>jar</packaging>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.example</groupId>\n            <artifactId>myapp-service</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "117-devtools-integration",
      children: "11.7 Devtools Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-devtools</artifactId>\n    <optional>true</optional>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Automatic restart on classpath changes\nmvn compile\n# Devtools detects compiled changes and restarts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "118-common-spring-boot-maven-commands",
      children: "11.8 Common Spring Boot Maven Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Full development cycle\n./mvnw spring-boot:run -Pdevelopment\n\n# Package for production\n./mvnw clean package -Pproduction -DskipTests\n\n# Package with tests\n./mvnw clean verify\n\n# Build container image\n./mvnw spring-boot:build-image\n\n# Run integration tests against running app\n./mvnw failsafe:integration-test\n\n# Generate dependency tree for troubleshooting\n./mvnw dependency:tree -Dincludes=org.springframework.boot\n"
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
            children: "POM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Object Model XML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coordinates + dependencies + build config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized project descriptor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered phases: validate through deploy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standardized build process across projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD pipeline stages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plugin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mojo-based build extension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binds to lifecycle phase or runs standalone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code quality, packaging, deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bill of Materials POM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized version management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent versions across modules"
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
            children: "Key Elements"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Coordinates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "groupId, artifactId, version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maven coordinates uniquely identify every artifact"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phases"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "validate, compile, test, package, verify, install, deploy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Plugins bind to phases via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<executions>"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scopes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "compile, provided, runtime, test, system, import"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "import scope only works with BOMs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Plugins"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "maven-compiler-plugin, maven-surefire-plugin, maven-jar-plugin"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Configure via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<configuration>"
            }), " in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<plugin>"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Profiles"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Activation by JDK, OS, property, file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for environment-specific config"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Libraries"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Web Apps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Multi-Module"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CI/CD"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Module Build"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microservice decomposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared domain model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Profile Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regional variations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dev/QA/Prod stages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shade Plugin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fat JAR distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standalone deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wrapper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build reproducibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Team standardization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-install builds"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the default scope for a Maven dependency?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) provided"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) compile"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) runtime"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) test"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) compile.** The compile scope is the default and makes the dependency available in all classpaths.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which command shows the Maven effective POM after all inheritance and interpolation?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) mvn pom"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) mvn help:effective-pom"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) mvn dependency:tree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) mvn install"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) mvn help:effective-pom.** This shows the merged POM including inheritance from parent, profiles, and property interpolation.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dependencyManagement"
        }), " section?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) To declare dependencies for the current project"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) To centralize version and scope for transitive dependencies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) To exclude all transitive dependencies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) To define plugin versions"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) To centralize version and scope for transitive dependencies.** dependencyManagement declares versions that child modules inherit without repeating the version.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between parent POM and aggregator POM?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) They are the same thing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Parent defines shared config children inherit; aggregator lists modules to build together"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Aggregator defines shared config; parent lists modules"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Parent runs first; aggregator runs after"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Parent defines shared config children inherit; aggregator lists modules to build together.** A POM can serve both roles simultaneously.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered Maven in depth, from POM structure through advanced build configurations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "POM is the fundamental unit of configuration, defining identity, dependencies, plugins, and lifecycle bindings."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The lifecycle (clean, default, site) organizes build phases into predictable sequences."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plugins provide actual build capabilities; goals bind to lifecycle phases."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key techniques:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency management via scopes, exclusions, optional dependencies, and BOM imports."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiles for environment-specific configuration activated by conditions or flags."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-module projects using reactor builds with parent-child POM relationships."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom Mojo plugins for specialized build automation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repository management with mirrors, authentication, and distribution management."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Boot integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spring Boot Maven Plugin for executable JARs, Docker images, and development lifecycle."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layered JARs optimize container builds by separating dependencies from application code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Buildpacks eliminate Dockerfile maintenance for standard container deployments."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Centralize versions in properties and BOMs for consistency."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the Maven Wrapper to lock build tool version in CI."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply code quality plugins (Checkstyle, SpotBugs, PMD) early in the lifecycle."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prefer parallel builds and offline mode for performance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain dependency hygiene with regular tree analysis and convergence enforcement."
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
          children: "What is the default lifecycle phase in Maven when no phase is specified?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does Maven resolve dependency version conflicts? What does nearest-wins mean?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<dependencies>"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<dependencyManagement>"
          }), "?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When would you use a profile activation based on JDK version rather than activeByDefault?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "import"
          }), " scope in dependencyManagement?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does the Reactor determine multi-module build order?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What problem does the Maven Wrapper solve?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between Surefire and Failsafe plugins?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Parent POM Setup"
          }), ": Create a parent POM for a multi-module Spring Boot project with modules: common, domain, repository, service, web, and application. Configure Spring Boot BOM, plugin management for spring-boot-maven-plugin and compiler plugin, and shared properties for Java 21."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Shade Plugin"
          }), ": Configure the shade plugin to create a fat JAR with:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Exclusion of signature files"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Relocation of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "com.google.common"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "myapp.com.google.common"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Manifest with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "com.example.Main"
            }), " as main class"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minimized JAR enabled"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Profile Configuration"
          }), ": Create Maven profiles for:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "development: H2 in-memory database, DEBUG logging, debug JVM arguments"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "staging: PostgreSQL, INFO logging, integration tests enabled"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "production: PostgreSQL, WARN logging, remote debugging disabled"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Plugin"
          }), ": Write a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "report-classpath"
          }), " Mojo that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Resolves all project dependencies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Writes them to a text file in the build directory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generates a summary of total JAR count and total size"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BOM Creation"
          }), ": Create BOM POMs for two organizations (Acme and BetaCorp) with different library versions, then create a project that imports the Acme BOM but overrides one dependency version."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Efficient Docker Builds"
          }), ": Set up Spring Boot layered JARs with custom layering, then write a multi-stage Dockerfile that uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "spring-boot-loader"
          }), " as a base layer and copies only the application layer."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CI/CD Pipeline"
          }), ": Design a GitHub Actions workflow that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Builds with Maven Wrapper"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Runs full test suite with coverage profile"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Deploys SNAPSHOT artifacts to Nexus"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Builds and publishes Docker images for release branches"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uploads test reports as artifacts"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Module Inheritance Debug"
          }), ": Given a broken multi-module project where child modules fail to resolve parent dependencies, identify and fix the issue. The parent POM has ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<relativePath>"
          }), " pointing to the wrong directory."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Plugin Optimization"
          }), ": Profile a Maven build that takes 15 minutes and identify bottlenecks. Suggest optimization strategies including parallel builds, incremental compilation, test parallelization, and dependency optimization."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify your setup\nmvn --version\nmvn validate\nmvn compile\nmvn test\nmvn package\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next Chapter:"
        }), " Spring Boot in Depth — building production-grade applications with auto-configuration, starters, and embedded servers."]
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