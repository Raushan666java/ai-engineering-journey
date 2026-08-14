"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[87310],{

/***/ 28563
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_08_gradle_md_44e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-08-gradle-md-44e.json
const site_docs_courses_java_08_gradle_md_44e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/08-gradle","title":"Gradle Deep Dive","description":"Previous Spring Framework Introduction","source":"@site/docs/courses/java/08-gradle.md","sourceDirName":"courses/java","slug":"/java/08-gradle","permalink":"/ai-engineering-journey/java/08-gradle","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-gradle","slug":"/java/08-gradle","title":"Gradle Deep Dive","sidebar_label":"Gradle Deep Dive","sidebar_position":8},"sidebar":"course-java","previous":{"title":"Maven Deep Dive","permalink":"/ai-engineering-journey/java/07-maven"},"next":{"title":"Introduction to Spring & Spring Boot","permalink":"/ai-engineering-journey/java/09-spring-intro"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/08-gradle.md


const frontMatter = {
	id: '08-gradle',
	slug: '/java/08-gradle',
	title: 'Gradle Deep Dive',
	sidebar_label: 'Gradle Deep Dive',
	sidebar_position: 8
};
const contentTitle = 'Gradle Deep Dive';

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
  "value": "1. Build Scripts",
  "id": "1-build-scripts",
  "level": 2
}, {
  "value": "1.1 Groovy DSL vs Kotlin DSL",
  "id": "11-groovy-dsl-vs-kotlin-dsl",
  "level": 3
}, {
  "value": "1.2 settings.gradle.kts",
  "id": "12-settingsgradlekts",
  "level": 3
}, {
  "value": "1.3 gradle.properties",
  "id": "13-gradleproperties",
  "level": 3
}, {
  "value": "1.4 Gradle Wrapper",
  "id": "14-gradle-wrapper",
  "level": 3
}, {
  "value": "2. Tasks",
  "id": "2-tasks",
  "level": 2
}, {
  "value": "2.1 Task Lifecycle Phase",
  "id": "21-task-lifecycle-phase",
  "level": 3
}, {
  "value": "2.2 Ad Hoc Tasks with doLast and doFirst",
  "id": "22-ad-hoc-tasks-with-dolast-and-dofirst",
  "level": 3
}, {
  "value": "2.3 dependsOn — Task Dependencies",
  "id": "23-dependson--task-dependencies",
  "level": 3
}, {
  "value": "2.4 Task Graph Hooks",
  "id": "24-task-graph-hooks",
  "level": 3
}, {
  "value": "2.5 Built-in Task Types",
  "id": "25-built-in-task-types",
  "level": 3
}, {
  "value": "Copy",
  "id": "copy",
  "level": 4
}, {
  "value": "Exec",
  "id": "exec",
  "level": 4
}, {
  "value": "Jar",
  "id": "jar",
  "level": 4
}, {
  "value": "Zip",
  "id": "zip",
  "level": 4
}, {
  "value": "Delete",
  "id": "delete",
  "level": 4
}, {
  "value": "JavaExec",
  "id": "javaexec",
  "level": 4
}, {
  "value": "2.6 Custom Task Type",
  "id": "26-custom-task-type",
  "level": 3
}, {
  "value": "3. Plugins",
  "id": "3-plugins",
  "level": 2
}, {
  "value": "3.1 The plugins Block",
  "id": "31-the-plugins-block",
  "level": 3
}, {
  "value": "3.2 Essential Plugins",
  "id": "32-essential-plugins",
  "level": 3
}, {
  "value": "java Plugin",
  "id": "java-plugin",
  "level": 4
}, {
  "value": "application Plugin",
  "id": "application-plugin",
  "level": 4
}, {
  "value": "java-library Plugin",
  "id": "java-library-plugin",
  "level": 4
}, {
  "value": "maven-publish Plugin",
  "id": "maven-publish-plugin",
  "level": 4
}, {
  "value": "signing Plugin",
  "id": "signing-plugin",
  "level": 4
}, {
  "value": "checkstyle Plugin",
  "id": "checkstyle-plugin",
  "level": 4
}, {
  "value": "jacoco Plugin",
  "id": "jacoco-plugin",
  "level": 4
}, {
  "value": "spotbugs Plugin",
  "id": "spotbugs-plugin",
  "level": 4
}, {
  "value": "3.3 Applying Plugins Conditionally",
  "id": "33-applying-plugins-conditionally",
  "level": 3
}, {
  "value": "4. Dependency Configuration",
  "id": "4-dependency-configuration",
  "level": 2
}, {
  "value": "4.1 Configuration Hierarchy",
  "id": "41-configuration-hierarchy",
  "level": 3
}, {
  "value": "4.2 Configuration Matrix",
  "id": "42-configuration-matrix",
  "level": 3
}, {
  "value": "4.3 Dependency Constraints",
  "id": "43-dependency-constraints",
  "level": 3
}, {
  "value": "4.4 Enforced Platforms (Spring Boot BOM)",
  "id": "44-enforced-platforms-spring-boot-bom",
  "level": 3
}, {
  "value": "4.5 Version Catalogs (libs.versions.toml)",
  "id": "45-version-catalogs-libsversionstoml",
  "level": 3
}, {
  "value": "4.6 Dependency Locking",
  "id": "46-dependency-locking",
  "level": 3
}, {
  "value": "4.7 Centralized Dependency Resolution",
  "id": "47-centralized-dependency-resolution",
  "level": 3
}, {
  "value": "5. Multi-Project Builds",
  "id": "5-multi-project-builds",
  "level": 2
}, {
  "value": "5.1 Project Structure",
  "id": "51-project-structure",
  "level": 3
}, {
  "value": "5.2 settings.gradle.kts — includes",
  "id": "52-settingsgradlekts--includes",
  "level": 3
}, {
  "value": "5.3 Subprojects and Allprojects",
  "id": "53-subprojects-and-allprojects",
  "level": 3
}, {
  "value": "5.4 Cross-Project Dependencies",
  "id": "54-cross-project-dependencies",
  "level": 3
}, {
  "value": "5.5 Composite Builds",
  "id": "55-composite-builds",
  "level": 3
}, {
  "value": "6. Build Cache",
  "id": "6-build-cache",
  "level": 2
}, {
  "value": "6.1 Local Build Cache",
  "id": "61-local-build-cache",
  "level": 3
}, {
  "value": "6.2 Remote Build Cache (HTTP)",
  "id": "62-remote-build-cache-http",
  "level": 3
}, {
  "value": "6.3 Cacheable Tasks",
  "id": "63-cacheable-tasks",
  "level": 3
}, {
  "value": "6.4 Cache Hit Verification",
  "id": "64-cache-hit-verification",
  "level": 3
}, {
  "value": "7. Daemon",
  "id": "7-daemon",
  "level": 2
}, {
  "value": "7.1 Daemon Lifecycle",
  "id": "71-daemon-lifecycle",
  "level": 3
}, {
  "value": "7.2 Daemon Configuration",
  "id": "72-daemon-configuration",
  "level": 3
}, {
  "value": "7.3 Stopping the Daemon",
  "id": "73-stopping-the-daemon",
  "level": 3
}, {
  "value": "8. Performance",
  "id": "8-performance",
  "level": 2
}, {
  "value": "8.1 Configuration Avoidance",
  "id": "81-configuration-avoidance",
  "level": 3
}, {
  "value": "8.2 Lazy Task Configuration with Providers",
  "id": "82-lazy-task-configuration-with-providers",
  "level": 3
}, {
  "value": "8.3 Parallel Execution",
  "id": "83-parallel-execution",
  "level": 3
}, {
  "value": "8.4 Worker API",
  "id": "84-worker-api",
  "level": 3
}, {
  "value": "8.5 Configuration Cache",
  "id": "85-configuration-cache",
  "level": 3
}, {
  "value": "8.6 Incremental Builds",
  "id": "86-incremental-builds",
  "level": 3
}, {
  "value": "9. Publishing",
  "id": "9-publishing",
  "level": 2
}, {
  "value": "9.1 Publishing with Artifacts",
  "id": "91-publishing-with-artifacts",
  "level": 3
}, {
  "value": "9.2 Conditional Publishing",
  "id": "92-conditional-publishing",
  "level": 3
}, {
  "value": "10. Spring Boot with Gradle",
  "id": "10-spring-boot-with-gradle",
  "level": 2
}, {
  "value": "10.1 Plugin Application",
  "id": "101-plugin-application",
  "level": 3
}, {
  "value": "10.2 bootJar",
  "id": "102-bootjar",
  "level": 3
}, {
  "value": "10.3 bootRun",
  "id": "103-bootrun",
  "level": 3
}, {
  "value": "10.4 bootBuildImage",
  "id": "104-bootbuildimage",
  "level": 3
}, {
  "value": "10.5 Dependency Management Plugin",
  "id": "105-dependency-management-plugin",
  "level": 3
}, {
  "value": "10.6 Spring Boot Starters Resolution",
  "id": "106-spring-boot-starters-resolution",
  "level": 3
}, {
  "value": "11. Version Catalogs (Deep Dive)",
  "id": "11-version-catalogs-deep-dive",
  "level": 2
}, {
  "value": "11.1 TOML Structure",
  "id": "111-toml-structure",
  "level": 3
}, {
  "value": "11.2 Type-Safe Accessor Generation",
  "id": "112-type-safe-accessor-generation",
  "level": 3
}, {
  "value": "11.3 Consuming in Build Scripts",
  "id": "113-consuming-in-build-scripts",
  "level": 3
}, {
  "value": "11.4 Multi-Project Catalog",
  "id": "114-multi-project-catalog",
  "level": 3
}, {
  "value": "11.5 Custom Catalog Declaration",
  "id": "115-custom-catalog-declaration",
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
  "value": "12. Summary",
  "id": "12-summary",
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
        id: "gradle-deep-dive",
        children: "Gradle Deep Dive"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/07-maven",
          children: "Maven Deep Dive"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/09-spring-intro",
          children: "Spring Framework Introduction"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Gradle is the de facto build tool for modern Java and Kotlin projects. Unlike Maven's rigid XML-driven lifecycle, Gradle combines a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "flexible, programmable build model"
      }), " with a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "directed acyclic graph (DAG) task engine"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "incremental builds"
      }), ", and a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "powerful dependency cache"
      }), ". It powers virtually every Spring Boot project in production today, and its Kotlin DSL has become the standard for JVM builds."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This chapter covers Gradle from first principles through advanced production patterns. All examples are presented in ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["both Groovy DSL (", (0,jsx_runtime.jsx)(_components.code, {
          children: "build.gradle"
        }), ") and Kotlin DSL (", (0,jsx_runtime.jsx)(_components.code, {
          children: "build.gradle.kts"
        }), ")"]
      }), " so you can read and write either dialect."]
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
        href: "../../assets/images/lessons/java/08-gradle/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/08-gradle/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/08-gradle/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/08-gradle/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/08-gradle/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/08-gradle/visual-explanation.png",
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
        children: "Explain the Gradle build lifecycle: initialization, configuration, and execution phases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write and run builds using both Groovy DSL and Kotlin DSL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define tasks with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "doLast"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "doFirst"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@TaskAction"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dependsOn"
        }), ", and Gradle's built-in task types (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Copy"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exec"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Jar"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Zip"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Delete"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JavaExec"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create custom task types with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@TaskAction"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Input"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Output"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@CacheableTask"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply essential plugins: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "java"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "java-library"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maven-publish"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "org.springframework.boot"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "io.spring.dependency-management"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "checkstyle"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "jacoco"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spotbugs"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure dependencies using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "implementation"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "api"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compileOnly"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "runtimeOnly"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "testImplementation"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "annotationProcessor"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "constraints"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enforcedPlatform"
        }), ", and version catalogs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build multi-project applications with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "settings.gradle.kts"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "subprojects"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "allprojects"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "include"
        }), ", cross-project configuration, and composite builds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure and leverage the local and remote build cache with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@CacheableTask"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tune the Gradle Daemon for memory, parallel execution, and configuration caching"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply performance techniques: configuration avoidance (", (0,jsx_runtime.jsx)(_components.code, {
          children: "register"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "create"
        }), "), lazy task creation, Worker API, and incremental builds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Publish artifacts to Maven repositories with the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maven-publish"
        }), " plugin, including signing and metadata"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build, run, and containerize Spring Boot applications with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bootJar"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bootRun"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bootBuildImage"
        }), ", and the dependency management plugin"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define and consume version catalogs with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "libs.versions.toml"
        }), " and type-safe accessors"]
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
            children: "Build Scripts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Groovy DSL vs Kotlin DSL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kotlin DSL is preferred for modern projects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAG-based, incremental, cacheable"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "register"
            }), " (lazy) over ", (0,jsx_runtime.jsx)(_components.code, {
              children: "create"
            }), " for performance"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plugins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "java, application, spring-boot, maven-publish"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plugins extend the build with pre-built task types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "implementation, api, compileOnly, runtimeOnly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "api leaks transitive deps; implementation does not"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Project"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "settings.gradle.kts, subprojects, composite builds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composite builds enable cross-project development"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Build Scripts] --> B[Tasks]\n    B --> C[Plugins]\n    C --> D[Dependency Config]\n    D --> E[Multi-Project]\n    E --> F[Build Cache]\n    F --> G[Daemon & Performance]\n    G --> H[Publishing]\n    H --> I[Spring Boot Integration]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "register"
        }), " (lazy task creation) instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "create"
        }), " → it avoids configuring tasks that may never execute, which significantly improves build time in large projects."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-build-scripts",
      children: "1. Build Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/08-gradle.png",
        alt: "Gradle Build System & Lifecycle"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Gradle build is defined by three key files in the project root:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "build.gradle"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "build.gradle.kts"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build logic — tasks, plugins, dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "settings.gradle"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "settings.gradle.kts"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project name, included subprojects, plugin management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gradle.properties"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JVM args, system properties, project properties"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-groovy-dsl-vs-kotlin-dsl",
      children: "1.1 Groovy DSL vs Kotlin DSL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Gradle supports two DSLs. Groovy DSL (", (0,jsx_runtime.jsx)(_components.code, {
        children: "build.gradle"
      }), ") was the original and uses Apache Groovy. Kotlin DSL (", (0,jsx_runtime.jsx)(_components.code, {
        children: "build.gradle.kts"
      }), ") is now the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recommended"
      }), " choice because it offers type-safe accessors, IDE autocompletion, and better error messages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// build.gradle — Groovy DSL\nplugins {\n    id 'java'\n    id 'org.springframework.boot' version '3.4.1'\n    id 'io.spring.dependency-management' version '1.1.7'\n}\n\ngroup = 'com.example'\nversion = '1.0.0'\n\njava {\n    toolchain {\n        languageVersion = JavaLanguageVersion.of(21)\n    }\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation 'org.springframework.boot:spring-boot-starter-web'\n    testImplementation 'org.springframework.boot:spring-boot-starter-test'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — Kotlin DSL (recommended)\nplugins {\n    java\n    id(\"org.springframework.boot\") version \"3.4.1\"\n    id(\"io.spring.dependency-management\") version \"1.1.7\"\n}\n\ngroup = \"com.example\"\nversion = \"1.0.0\"\n\njava {\n    toolchain {\n        languageVersion = JavaLanguageVersion.of(21)\n    }\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation(\"org.springframework.boot:spring-boot-starter-web\")\n    testImplementation(\"org.springframework.boot:spring-boot-starter-test\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key differences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kotlin DSL uses parentheses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "()"
        }), " for method calls and typed strings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kotlin DSL allows ", (0,jsx_runtime.jsx)(_components.code, {
          children: "plugins { java }"
        }), " (type-safe accessor) without quotes for built-in plugins"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kotlin DSL gives full IDE autocompletion — the preferred choice for all new projects"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Groovy DSL uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "'single quotes'"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"double quotes\""
        }), " interchangeably"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-settingsgradlekts",
      children: "1.2 settings.gradle.kts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The settings file defines the project name and which subprojects are included. It is evaluated ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "before"
      }), " any ", (0,jsx_runtime.jsx)(_components.code, {
        children: "build.gradle.kts"
      }), " file, during the initialization phase."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// settings.gradle.kts — single project\nrootProject.name = \"hello-gradle\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// settings.gradle.kts — multi-project\nrootProject.name = \"my-application\"\n\ninclude(\"core\", \"web\", \"api\", \"integration-test\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// settings.gradle.kts — with plugin management and repositories\npluginManagement {\n    repositories {\n        mavenCentral()\n        gradlePluginPortal()\n    }\n}\n\ndependencyResolutionManagement {\n    repositories {\n        mavenCentral()\n    }\n}\n\nrootProject.name = \"enterprise-app\"\ninclude(\"domain\", \"application\", \"infrastructure\", \"presentation\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-gradleproperties",
      children: "1.3 gradle.properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Properties files set JVM arguments for the Gradle Daemon, system properties, and project values."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# gradle.properties\n\n# Daemon JVM settings\norg.gradle.jvmargs=-Xmx2g -XX:MaxMetaspaceSize=512m -XX:+HeapDumpOnOutOfMemoryError\n\n# Enable parallel execution and build cache\norg.gradle.parallel=true\norg.gradle.caching=true\norg.gradle.configureondemand=true\n\n# Enable configuration cache (experimental in Gradle 8.x, stable in 9.x)\norg.gradle.configuration-cache=true\n\n# Project-specific properties\nspringBootVersion=3.4.1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# gradle.properties — proxy settings for corporate environments\nsystemProp.http.proxyHost=proxy.company.com\nsystemProp.http.proxyPort=8080\nsystemProp.https.proxyHost=proxy.company.com\nsystemProp.https.proxyPort=8080\nsystemProp.http.nonProxyHosts=*.local|localhost|10.*\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-gradle-wrapper",
      children: "1.4 Gradle Wrapper"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The wrapper (", (0,jsx_runtime.jsx)(_components.code, {
        children: "gradlew"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gradlew.bat"
      }), ") is a script that downloads and runs a specific Gradle version. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Every project should use the wrapper"
      }), " — it eliminates version mismatches across CI and developer machines."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate the wrapper in your project\ngradle wrapper --gradle-version 8.12\n\n# Output:\n#   gradlew          (Unix shell script)\n#   gradlew.bat      (Windows batch script)\n#   gradle/wrapper/gradle-wrapper.jar\n#   gradle/wrapper/gradle-wrapper.properties\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The generated ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gradle-wrapper.properties"
      }), " pins the version:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# gradle/wrapper/gradle-wrapper.properties\ndistributionBase=GRADLE_USER_HOME\ndistributionPath=wrapper/dists\ndistributionUrl=https\\://services.gradle.org/distributions/gradle-8.12-bin.zip\nnetworkTimeout=10000\nvalidateDistributionUrl=true\nzipStoreBase=GRADLE_USER_HOME\nzipStorePath=wrapper/dists\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All team members and CI pipelines then run:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Unix / macOS / WSL\n./gradlew build\n\n# Windows\ngradlew build\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The wrapper JAR can be verified against a known checksum. To upgrade:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Upgrade to a new Gradle version\n./gradlew wrapper --gradle-version 8.12\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — wrapper task customization\ntasks.named<Wrapper>(\"wrapper\") {\n    distributionType = Wrapper.DistributionType.ALL\n    gradleVersion = \"8.12\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-tasks",
      children: "2. Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Gradle build is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "directed acyclic graph (DAG) of tasks"
      }), ". Every action — compiling, testing, packaging, deploying — is a task. Tasks can be defined ad hoc in the build script or as reusable types in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "buildSrc"
      }), " or published plugins."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-task-lifecycle-phase",
      children: "2.1 Task Lifecycle Phase"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gradle runs in three phases:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialization"
        }), " — determines which projects participate in the build (reads ", (0,jsx_runtime.jsx)(_components.code, {
          children: "settings.gradle.kts"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration"
        }), " — evaluates build scripts, creates and configures task objects (but does NOT execute them)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execution"
        }), " — runs the subset of tasks selected by the requested task names and their dependencies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — demonstrating all three phases\nprintln(\"Configuration phase: this runs for EVERY build, even ./gradlew help\")\n\ntasks.register(\"hello\") {\n    println(\"Configuration phase: 'hello' task is being configured\")\n    doLast {\n        println(\"Execution phase: hello task is running\")\n    }\n}\n\ntasks.register(\"goodbye\") {\n    doLast {\n        println(\"Execution phase: goodbye task is running\")\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ ./gradlew hello\n\n> Configure project :\nConfiguration phase: this runs for EVERY build, even ./gradlew help\nConfiguration phase: 'hello' task is being configured\n\n> Task :hello\nExecution phase: hello task is running\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-ad-hoc-tasks-with-dolast-and-dofirst",
      children: "2.2 Ad Hoc Tasks with doLast and doFirst"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The simplest way to create a task is to add actions to the task's action list."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts\ntasks.register(\"printVersion\") {\n    doLast {\n        println(\"Project version: ${project.version}\")\n    }\n}\n\ntasks.register(\"prepare\") {\n    doFirst {\n        println(\"Creating directories...\")\n        file(\"build/output\").mkdirs()\n    }\n    doLast {\n        println(\"Preparation complete\")\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// build.gradle\ntasks.register('printVersion') {\n    doLast {\n        println \"Project version: ${project.version}\"\n    }\n}\n\ntasks.register('prepare') {\n    doFirst {\n        println 'Creating directories...'\n        file('build/output').mkdirs()\n    }\n    doLast {\n        println 'Preparation complete'\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "doFirst"
      }), " actions run ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "before"
      }), " any existing actions; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "doLast"
      }), " actions run ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "after"
      }), ". Multiple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "doLast"
      }), " closures stack in order. This is useful for adding cross-cutting behavior without modifying the original task."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-dependson--task-dependencies",
      children: "2.3 dependsOn — Task Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tasks declare dependencies so Gradle can resolve the correct execution order from the DAG."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts\ntasks.register(\"cleanOutput\") {\n    doLast {\n        file(\"build\").deleteRecursively()\n    }\n}\n\ntasks.register(\"compile\") {\n    dependsOn(\"cleanOutput\")\n    doLast {\n        println(\"Compiling sources...\")\n        file(\"build/classes\").mkdirs()\n    }\n}\n\ntasks.register(\"package\") {\n    dependsOn(\"compile\")\n    doLast {\n        println(\"Creating JAR...\")\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ ./gradlew package\n> Task :cleanOutput\n> Task :compile\n> Task :package\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Gradle guarantees that a task runs at most once per build, even if multiple tasks depend on it. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dependsOn"
      }), " method accepts strings, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Task"
      }), " references, or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TaskProvider"
      }), " references:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "tasks.register(\"fullBuild\") {\n    dependsOn(tasks.named(\"clean\"), tasks.named(\"build\"))\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ordering"
      }), " can also be expressed with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mustRunAfter"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shouldRunAfter"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "tasks.named(\"compile\") {\n    mustRunAfter(\"clean\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-task-graph-hooks",
      children: "2.4 Task Graph Hooks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can register callbacks that execute after the task graph is fully resolved but before execution begins. This is useful for conditional logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — gradle.taskGraph.beforeTask and afterTask\ngradle.taskGraph.whenReady {\n    println(\"Task graph ready. Tasks to execute:\")\n    allTasks.forEach { println(\"  - ${it.path}\") }\n}\n\ngradle.taskGraph.beforeTask {\n    println(\"Starting: ${this.path}\")\n}\n\ngradle.taskGraph.afterTask {\n    if (state.failure != null) {\n        println(\"FAILED: ${this.path}\")\n    } else {\n        println(\"SUCCESS: ${this.path}\")\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-built-in-task-types",
      children: "2.5 Built-in Task Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gradle ships with many reusable task types. These are the most important for JVM projects:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "copy",
      children: "Copy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts\ntasks.register<Copy>(\"copyConfig\") {\n    from(\"src/main/resources/config\")\n    into(\"$buildDir/config\")\n    include(\"**/*.yaml\", \"**/*.properties\")\n    exclude(\"**/secret*\")\n    filter { line -> line.replace(\"\\${env}\", \"production\") }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// build.gradle\ntasks.register('copyConfig', Copy) {\n    from 'src/main/resources/config'\n    into \"$buildDir/config\"\n    include '**/*.yaml', '**/*.properties'\n    exclude '**/secret*'\n    filter { line -> line.replace('${env}', 'production') }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "exec",
      children: "Exec"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts\ntasks.register<Exec>(\"runLinter\") {\n    commandLine(\"npx\", \"eslint\", \"src/\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// build.gradle\ntasks.register('runLinter', Exec) {\n    commandLine 'npx', 'eslint', 'src/'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "jar",
      children: "Jar"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts\ntasks.named<Jar>(\"jar\") {\n    archiveBaseName.set(\"my-library\")\n    archiveVersion.set(\"1.0.0\")\n    manifest {\n        attributes(\n            \"Implementation-Title\" to \"My Library\",\n            \"Implementation-Version\" to archiveVersion,\n            \"Built-By\" to System.getProperty(\"user.name\")\n        )\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "zip",
      children: "Zip"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts\ntasks.register<Zip>(\"distribution\") {\n    archiveFileName.set(\"my-app-${project.version}.zip\")\n    destinationDirectory.set(layout.buildDirectory.dir(\"dist\"))\n\n    into(\"bin\") {\n        from(\"scripts\")\n        fileMode = 0b111101101 // 755\n    }\n    into(\"lib\") {\n        from(tasks.named(\"jar\"))\n    }\n    into(\"config\") {\n        from(\"src/main/config\")\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "delete",
      children: "Delete"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts\ntasks.register<Delete>(\"cleanReports\") {\n    delete(\"build/reports\", \"build/coverage\")\n}\n\n// Prefer configuration-avoidance API:\ntasks.register<Delete>(\"deepClean\") {\n    delete(rootProject.layout.buildDirectory)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "javaexec",
      children: "JavaExec"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts\ntasks.register<JavaExec>(\"runBatchJob\") {\n    classpath = sourceSets.main.get().runtimeClasspath\n    mainClass = \"com.example.BatchJobRunner\"\n    args(\"--input=data.csv\", \"--output=results/\")\n    jvmArgs(\"-Xmx1g\", \"-Dspring.profiles.active=batch\")\n    systemProperty(\"app.temp.dir\", layout.buildDirectory.dir(\"tmp\").get().asFile.path)\n    workingDir = layout.buildDirectory.dir(\"work\").get().asFile\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// build.gradle\ntasks.register('runBatchJob', JavaExec) {\n    classpath = sourceSets.main.runtimeClasspath\n    mainClass = 'com.example.BatchJobRunner'\n    args '--input=data.csv', '--output=results/'\n    jvmArgs '-Xmx1g', '-Dspring.profiles.active=batch'\n    systemProperty 'app.temp.dir', layout.buildDirectory.dir('tmp').get().asFile.path\n    workingDir = layout.buildDirectory.dir('work').get().asFile\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-custom-task-type",
      children: "2.6 Custom Task Type"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For reusable task logic, create a class that extends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DefaultTask"
      }), " and annotate methods with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TaskAction"
      }), ". Declare inputs and outputs with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Input"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@InputFile"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@InputDirectory"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@OutputFile"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@OutputDirectory"
      }), " — these enable ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "incremental builds"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "build cache"
      }), " support."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// buildSrc/src/main/kotlin/com/example/gradle/CodeGeneratorTask.kt\npackage com.example.gradle\n\nimport org.gradle.api.DefaultTask\nimport org.gradle.api.file.DirectoryProperty\nimport org.gradle.api.file.RegularFileProperty\nimport org.gradle.api.provider.ListProperty\nimport org.gradle.api.provider.Property\nimport org.gradle.api.tasks.*\n\nabstract class CodeGeneratorTask : DefaultTask() {\n\n    @get:Input\n    abstract val className: Property<String>\n\n    @get:Input\n    abstract val packageName: Property<String>\n\n    @get:Input\n    abstract val imports: ListProperty<String>\n\n    @get:OutputDirectory\n    abstract val outputDir: DirectoryProperty\n\n    @TaskAction\n    fun generate() {\n        val dir = outputDir.get().asFile\n        dir.mkdirs()\n\n        val file = File(dir, \"${className.get()}.java\")\n        file.writeText(buildSource())\n        logger.lifecycle(\"Generated: ${file.absolutePath}\")\n    }\n\n    private fun buildSource(): String {\n        val sb = StringBuilder()\n        sb.appendLine(\"package ${packageName.get()};\")\n        sb.appendLine()\n        imports.get().forEach { sb.appendLine(\"import $it;\") }\n        sb.appendLine()\n        sb.appendLine(\"public class ${className.get()} {\")\n        sb.appendLine(\"    public static void main(String[] args) {\")\n        sb.appendLine(\"        System.out.println(\\\"Hello from generated ${className.get()}!\\\");\")\n        sb.appendLine(\"    }\")\n        sb.appendLine(\"}\")\n        return sb.toString()\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — consuming the custom task\ntasks.register<com.example.gradle.CodeGeneratorTask>(\"generateHello\") {\n    className.set(\"HelloWorld\")\n    packageName.set(\"com.example.gen\")\n    imports.set(listOf(\"java.util.*\", \"java.time.LocalDate\"))\n    outputDir.set(layout.buildDirectory.dir(\"generated-sources\"))\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// build.gradle — same task in Groovy\ntasks.register('generateHello', com.example.gradle.CodeGeneratorTask) {\n    className = 'HelloWorld'\n    packageName = 'com.example.gen'\n    imports = ['java.util.*', 'java.time.LocalDate']\n    outputDir = layout.buildDirectory.dir('generated-sources')\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Important annotations for task types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Annotation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Applies to"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@TaskAction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The method that runs when the task executes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Input"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A string, number, or serializable input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@InputFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RegularFileProperty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An input file — tracked by path and content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@InputDirectory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DirectoryProperty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An input directory — tracked by contents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@InputFiles"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FileCollection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A collection of input files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@OutputFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RegularFileProperty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A single output file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@OutputDirectory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DirectoryProperty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An output directory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@OutputFiles"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@OutputDirectories"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Map<String, ...>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple outputs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Optional"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marks an input/output as optional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Incremental"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FileCollection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supports incremental input processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@CacheableTask"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Makes the task eligible for build cache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@UntrackedTask"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opts out of incremental build"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-plugins",
      children: "3. Plugins"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Plugins package reusable build logic. Gradle has two kinds: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "binary plugins"
      }), " (identified by a plugin ID, applied via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "plugins"
      }), " block) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "script plugins"
      }), " (applied via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "apply from:"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-the-plugins-block",
      children: "3.1 The plugins Block"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "plugins"
      }), " block is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "preferred"
      }), " way to apply plugins. It must appear at the top of the build script."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts\nplugins {\n    java\n    jacoco\n    checkstyle\n    id(\"org.springframework.boot\") version \"3.4.1\"\n    id(\"io.spring.dependency-management\") version \"1.1.7\"\n    id(\"com.github.spotbugs\") version \"6.1.0\"\n    id(\"maven-publish\")\n    id(\"signing\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// build.gradle\nplugins {\n    id 'java'\n    id 'jacoco'\n    id 'checkstyle'\n    id 'org.springframework.boot' version '3.4.1'\n    id 'io.spring.dependency-management' version '1.1.7'\n    id 'com.github.spotbugs' version '6.1.0'\n    id 'maven-publish'\n    id 'signing'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-essential-plugins",
      children: "3.2 Essential Plugins"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-plugin",
      children: "java Plugin"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java"
      }), " plugin adds compilation, testing, and JAR packaging to a project."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "plugins {\n    java\n}\n\njava {\n    sourceCompatibility = JavaVersion.VERSION_21\n    targetCompatibility = JavaVersion.VERSION_21\n\n    toolchain {\n        languageVersion = JavaLanguageVersion.of(21)\n    }\n\n    // Consistent source set layout\n    sourceSets {\n        main {\n            java.setSrcDirs(listOf(\"src/main/java\"))\n            resources.setSrcDirs(listOf(\"src/main/resources\"))\n        }\n        test {\n            java.setSrcDirs(listOf(\"src/test/java\"))\n            resources.setSrcDirs(listOf(\"src/test/resources\"))\n        }\n    }\n\n    // JAR manifest\n    withJavadocJar()\n    withSourcesJar()\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Key tasks added by the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java"
      }), " plugin:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "compileJava"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "JavaCompile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiles production Java sources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "processResources"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Copy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies production resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "classes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Task"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Aggregate of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "compileJava"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "processResources"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "compileTestJava"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "JavaCompile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiles test Java sources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "processTestResources"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Copy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies test resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "testClasses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Task"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Aggregate of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "compileTestJava"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "processTestResources"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "jar"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Jar"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates the JAR archive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Test"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs unit tests (JUnit / TestNG)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "build"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Task"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Aggregate: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "assemble"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "check"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "application-plugin",
      children: "application Plugin"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "application"
      }), " plugin packages and runs a Java application."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "plugins {\n    application\n    java\n}\n\napplication {\n    mainClass = \"com.example.Application\"\n    applicationName = \"my-app\"\n\n    // Distribution configuration\n    applicationDistribution.from(\"scripts\") {\n        into(\"bin\")\n        fileMode = 0b111101101\n    }\n}\n\n// Run the app\n// $ ./gradlew run\n// $ ./gradlew run --args=\"--server.port=9090\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "plugins {\n    id 'application'\n    id 'java'\n}\n\napplication {\n    mainClass = 'com.example.Application'\n    applicationName = 'my-app'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-library-plugin",
      children: "java-library Plugin"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java-library"
      }), " plugin extends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java"
      }), " and introduces the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "api"
      }), " configuration. Libraries ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "export"
      }), " dependencies to consumers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "plugins {\n    `java-library`\n}\n\ndependencies {\n    // api — exposed to consumers' compile classpath\n    api(\"com.google.guava:guava:33.4.0-jre\")\n\n    // implementation — hidden from consumers\n    implementation(\"org.apache.commons:commons-lang3:3.17.0\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "plugins {\n    id 'java-library'\n}\n\ndependencies {\n    api 'com.google.guava:guava:33.4.0-jre'\n    implementation 'org.apache.commons:commons-lang3:3.17.0'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "api"
      }), " sparingly. Every ", (0,jsx_runtime.jsx)(_components.code, {
        children: "api"
      }), " dependency becomes part of your public contract. Prefer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "implementation"
      }), " unless downstream consumers need the type on their compile classpath."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "maven-publish-plugin",
      children: "maven-publish Plugin"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "maven-publish"
      }), " plugin publishes artifacts to Maven repositories."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "plugins {\n    `maven-publish`\n    `java-library`\n}\n\npublishing {\n    publications {\n        create<MavenPublication>(\"mavenJava\") {\n            from(components[\"java\"])\n\n            pom {\n                name = \"My Library\"\n                description = \"A useful library for doing things\"\n                url = \"https://github.com/example/my-library\"\n                licenses {\n                    license {\n                        name = \"Apache-2.0\"\n                        url = \"https://www.apache.org/licenses/LICENSE-2.0\"\n                    }\n                }\n                developers {\n                    developer {\n                        id = \"jdoe\"\n                        name = \"Jane Doe\"\n                        email = \"jane@example.com\"\n                    }\n                }\n                scm {\n                    connection = \"scm:git:git://github.com/example/my-library.git\"\n                    developerConnection = \"scm:git:ssh://github.com/example/my-library.git\"\n                    url = \"https://github.com/example/my-library\"\n                }\n            }\n        }\n    }\n\n    repositories {\n        maven {\n            name = \"internal\"\n            url = uri(\"https://maven.internal.example.com/releases\")\n            credentials {\n                username = System.getenv(\"MAVEN_USER\") ?: \"\"\n                password = System.getenv(\"MAVEN_PASS\") ?: \"\"\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "plugins {\n    id 'maven-publish'\n    id 'java-library'\n}\n\npublishing {\n    publications {\n        mavenJava(MavenPublication) {\n            from components.java\n            pom {\n                name = 'My Library'\n                description = 'A useful library for doing things'\n            }\n        }\n    }\n    repositories {\n        maven {\n            name = 'internal'\n            url = 'https://maven.internal.example.com/releases'\n            credentials {\n                username = System.getenv('MAVEN_USER')\n                password = System.getenv('MAVEN_PASS')\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "signing-plugin",
      children: "signing Plugin"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "signing"
      }), " plugin signs artifacts for publication."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "plugins {\n    `maven-publish`\n    `signing`\n    `java-library`\n}\n\nsigning {\n    sign(publishing.publications[\"mavenJava\"])\n\n    // Use in-memory keys from environment (CI-safe)\n    val signingKey: String? = System.getenv(\"GPG_PRIVATE_KEY\")\n    val signingPassphrase: String? = System.getenv(\"GPG_PASSPHRASE\")\n    if (signingKey != null && signingPassphrase != null) {\n        useInMemoryPgpKeys(signingKey, signingPassphrase)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "checkstyle-plugin",
      children: "checkstyle Plugin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Checkstyle enforces coding standards."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "plugins {\n    checkstyle\n}\n\ncheckstyle {\n    toolVersion = \"10.21.4\"\n    configFile = rootProject.file(\"config/checkstyle/checkstyle.xml\")\n    isIgnoreFailures = false\n    maxWarnings = 0\n}\n\ntasks.withType<Checkstyle>().configureEach {\n    reports {\n        xml.required = true\n        html.required = true\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example configuration file at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/checkstyle/checkstyle.xml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\"?>\n<!DOCTYPE module PUBLIC\n    \"-//Checkstyle//DTD Checkstyle Configuration 1.3//EN\"\n    \"https://checkstyle.org/dtds/configuration_1_3.dtd\">\n<module name=\"Checker\">\n    <module name=\"TreeWalker\">\n        <module name=\"UnusedImports\"/>\n        <module name=\"RedundantImport\"/>\n        <module name=\"ConstantName\"/>\n        <module name=\"LocalFinalVariableName\"/>\n        <module name=\"LocalVariableName\"/>\n        <module name=\"MemberName\"/>\n        <module name=\"MethodName\"/>\n        <module name=\"PackageName\"/>\n        <module name=\"ParameterName\"/>\n        <module name=\"StaticVariableName\"/>\n        <module name=\"TypeName\"/>\n        <module name=\"AvoidStarImport\"/>\n        <module name=\"IllegalImport\"/>\n        <module name=\"EmptyBlock\"/>\n        <module name=\"EmptyCatchBlock\"/>\n        <module name=\"LeftCurly\"/>\n        <module name=\"RightCurly\"/>\n        <module name=\"NeedBraces\"/>\n        <module name=\"WhitespaceAround\"/>\n        <module name=\"ModifierOrder\"/>\n    </module>\n    <module name=\"LineLength\">\n        <property name=\"max\" value=\"120\"/>\n    </module>\n</module>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "jacoco-plugin",
      children: "jacoco Plugin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JaCoCo measures test coverage."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "plugins {\n    jacoco\n}\n\njacoco {\n    toolVersion = \"0.8.12\"\n}\n\ntasks.jacocoTestReport {\n    dependsOn(tasks.test)\n    reports {\n        xml.required = true\n        csv.required = false\n        html.required = true\n        html.outputLocation = layout.buildDirectory.dir(\"reports/jacoco\")\n    }\n}\n\ntasks.jacocoTestCoverageVerification {\n    violationRules {\n        rule {\n            limit {\n                minimum = \"0.80\".toBigDecimal()\n            }\n        }\n        rule {\n            enabled = true\n            element = \"CLASS\"\n            excludes = listOf(\n                \"com.example.Application\",\n                \"com.example.config.*\",\n                \"com.example.dto.*\"\n            )\n            limit {\n                counter = \"LINE\"\n                value = \"COVEREDRATIO\"\n                minimum = \"0.90\".toBigDecimal()\n            }\n        }\n    }\n}\n\n// Integrate into build lifecycle\ntasks.check {\n    dependsOn(tasks.jacocoTestCoverageVerification)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate and view coverage\n./gradlew test jacocoTestReport\n# Open build/reports/jacoco/html/index.html\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "spotbugs-plugin",
      children: "spotbugs Plugin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SpotBugs performs static analysis for bug patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "plugins {\n    id(\"com.github.spotbugs\") version \"6.1.0\"\n}\n\nspotbugs {\n    toolVersion = \"4.9.2\"\n    ignoreFailures = false\n    showProgress = true\n    effort = com.github.spotbugs.snom.Effort.MAX\n    reportLevel = com.github.spotbugs.snom.Confidence.LOW\n    excludeFilter = rootProject.file(\"config/spotbugs/exclude.xml\")\n}\n\ntasks.withType<com.github.spotbugs.snom.SpotBugsTask>().configureEach {\n    reports {\n        html.required = true\n        xml.required = false\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-applying-plugins-conditionally",
      children: "3.3 Applying Plugins Conditionally"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use Gradle's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "with"
      }), " API or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onlyIf"
      }), " to apply plugins under specific conditions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — conditional plugin application\nif (project.hasProperty(\"enableProfiling\")) {\n    apply(plugin = \"jfr-profiling\")\n    // or in the plugins block:\n    // plugins { id(\"com.example.profiling\") }\n}\n\ntasks.named(\"test\") {\n    onlyIf {\n        !project.hasProperty(\"skipTests\")\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-dependency-configuration",
      children: "4. Dependency Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Gradle's dependency management is richer than Maven's. The key concept is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "configurations"
      }), " — named sets of dependencies with specific visibility and scope."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-configuration-hierarchy",
      children: "4.1 Configuration Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "implementation  →  compileClasspath, runtimeClasspath\n    ↑\napi             →  compileClasspath, runtimeClasspath (exposed to consumers)\ncompileOnly     →  compileClasspath only\nruntimeOnly     →  runtimeClasspath only\nannotationProcessor → annotation processor classpath\ntestImplementation  →  testCompileClasspath, testRuntimeClasspath\ntestCompileOnly     →  testCompileClasspath only\ntestRuntimeOnly     →  testRuntimeClasspath only\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-configuration-matrix",
      children: "4.2 Configuration Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compile"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Runtime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transitive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visible to Consumers"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "api"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exported API dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "compileOnly"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lombok, annotation processors (non-transitive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "runtimeOnly"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JDBC drivers, logging implementations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "annotationProcessor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Annotation processors (Lombok, MapStruct)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "compileOnlyApi"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API that's compile-only (rare)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "testImplementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test frameworks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "testCompileOnly"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test-only compile-time deps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "testRuntimeOnly"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test runtime engines"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — complete dependency example for a Spring Boot library\nplugins {\n    `java-library`\n    id(\"org.springframework.boot\") version \"3.4.1\"\n    id(\"io.spring.dependency-management\") version \"1.1.7\"\n}\n\ndependencies {\n    // API — exposed to consumers\n    api(\"org.springframework.boot:spring-boot-starter-web\")\n\n    // Implementation — hidden from consumers\n    implementation(\"org.springframework.boot:spring-boot-starter-validation\")\n    implementation(\"com.fasterxml.jackson.datatype:jackson-datatype-jsr310\")\n\n    // Compile only\n    compileOnly(\"org.projectlombok:lombok\")\n    annotationProcessor(\"org.projectlombok:lombok\")\n    compileOnly(\"org.mapstruct:mapstruct:1.6.3\")\n    annotationProcessor(\"org.mapstruct:mapstruct-processor:1.6.3\")\n\n    // Runtime only\n    runtimeOnly(\"org.postgresql:postgresql\")\n    runtimeOnly(\"net.logstash.logback:logstash-logback-encoder:8.0\")\n\n    // Test dependencies\n    testImplementation(\"org.springframework.boot:spring-boot-starter-test\")\n    testImplementation(\"org.testcontainers:postgresql:1.20.4\")\n    testRuntimeOnly(\"org.junit.platform:junit-platform-launcher\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-dependency-constraints",
      children: "4.3 Dependency Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "constraints"
      }), " to define ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "version requirements"
      }), " that apply transitively without adding a direct dependency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "dependencies {\n    constraints {\n        implementation(\"org.apache.commons:commons-text:1.13.0\") {\n            because(\"Version 1.13.0 fixes CVE-2024-XXXX\")\n        }\n        implementation(\"com.fasterxml.jackson.core:jackson-databind:2.18.2\") {\n            because(\"Align all Jackson versions\")\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-enforced-platforms-spring-boot-bom",
      children: "4.4 Enforced Platforms (Spring Boot BOM)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot's dependency management is typically applied via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "io.spring.dependency-management"
      }), " plugin, which imports the Spring Boot BOM. You can also import other BOMs:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "dependencies {\n    // Spring Cloud BOM via platform constraint\n    implementation(platform(\"org.springframework.cloud:spring-cloud-dependencies:2024.0.0\"))\n\n    // AWS SDK BOM\n    implementation(platform(\"software.amazon.awssdk:bom:2.29.48\"))\n\n    // Individual dependencies from the BOM (version resolved by BOM)\n    implementation(\"org.springframework.cloud:spring-cloud-starter-gateway\")\n    implementation(\"software.amazon.awssdk:s3\")\n    implementation(\"software.amazon.awssdk:sqs\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "enforcedPlatform"
      }), " applies a platform ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "with override semantics"
      }), " — any version specified in the platform takes precedence:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "dependencies {\n    // Override all transitive versions with the platform's versions\n    implementation(enforcedPlatform(\"org.springframework.boot:spring-boot-dependencies:3.4.1\"))\n    implementation(\"org.springframework.boot:spring-boot-starter-web\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-version-catalogs-libsversionstoml",
      children: "4.5 Version Catalogs (libs.versions.toml)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Version catalogs centralize dependency versions in a single TOML file at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gradle/libs.versions.toml"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-toml",
        children: "# gradle/libs.versions.toml\n\n[versions]\nspring-boot = \"3.4.1\"\nspring-cloud = \"2024.0.0\"\nlombok = \"1.18.36\"\nmapstruct = \"1.6.3\"\ntestcontainers = \"1.20.4\"\nkotlin = \"2.1.0\"\njackson = \"2.18.2\"\nguava = \"33.4.0-jre\"\n\n[libraries]\nspring-boot-starter-web = { module = \"org.springframework.boot:spring-boot-starter-web\" }\nspring-boot-starter-validation = { module = \"org.springframework.boot:spring-boot-starter-validation\" }\nspring-boot-starter-test = { module = \"org.springframework.boot:spring-boot-starter-test\" }\nspring-cloud-starter-gateway = { module = \"org.springframework.cloud:spring-cloud-starter-gateway\" }\nlombok = { module = \"org.projectlombok:lombok\", version.ref = \"lombok\" }\nmapstruct = { module = \"org.mapstruct:mapstruct\", version.ref = \"mapstruct\" }\nmapstruct-processor = { module = \"org.mapstruct:mapstruct-processor\", version.ref = \"mapstruct\" }\njackson-jsr310 = { module = \"com.fasterxml.jackson.datatype:jackson-datatype-jsr310\", version.ref = \"jackson\" }\ntestcontainers-postgresql = { module = \"org.testcontainers:postgresql\", version.ref = \"testcontainers\" }\nguava = { module = \"com.google.guava:guava\", version.ref = \"guava\" }\n\n[bundles]\ntestcontainers = [\"testcontainers-postgresql\", \"testcontainers-kafka\"]\nspring-web = [\"spring-boot-starter-web\", \"spring-boot-starter-validation\"]\n\n[plugins]\nspring-boot = { id = \"org.springframework.boot\", version.ref = \"spring-boot\" }\nspring-dependency-management = { id = \"io.spring.dependency-management\", version.ref = \"spring-boot\" }\nkotlin-jvm = { id = \"org.jetbrains.kotlin.jvm\", version.ref = \"kotlin\" }\nspotbugs = { id = \"com.github.spotbugs\", version = \"6.1.0\" }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — consuming the version catalog\nplugins {\n    alias(libs.plugins.spring.boot)\n    alias(libs.plugins.spring.dependency.management)\n    java\n}\n\ndependencies {\n    implementation(libs.spring.boot.starter.web)\n    implementation(libs.jackson.jsr310)\n    compileOnly(libs.lombok)\n    annotationProcessor(libs.lombok)\n    testImplementation(libs.bundles.testcontainers)\n    testImplementation(libs.spring.boot.starter.test)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// build.gradle — Groovy alternative\nplugins {\n    alias libs.plugins.spring.boot\n    alias libs.plugins.spring.dependency.management\n    id 'java'\n}\n\ndependencies {\n    implementation libs.spring.boot.starter.web\n    implementation libs.jackson.jsr310\n    compileOnly libs.lombok\n    annotationProcessor libs.lombok\n    testImplementation libs.bundles.testcontainers\n    testImplementation libs.spring.boot.starter.test\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The type-safe accessors are generated automatically. The convention maps dots to accessor calls: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "libs.spring.boot.starter.web"
      }), " corresponds to the TOML key ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-starter-web"
      }), ". Plugins use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "libs.plugins.spring.boot"
      }), " for key ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-dependency-locking",
      children: "4.6 Dependency Locking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lock files capture exact transitive dependency versions for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reproducible builds"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — enable dependency locking\ndependencyLocking {\n    lockAllConfigurations()\n}\n\n// Run to generate/update lock files:\n// $ ./gradlew dependencies --update-locks *\n// Lock files written to: gradle/dependency-locks/*.lockfile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate locked dependency files\n./gradlew dependencies --update-locks '*'\n\n# Verify build uses only locked versions\n./gradlew build --locked\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The lock file (", (0,jsx_runtime.jsx)(_components.code, {
        children: "gradle/dependency-locks/compileClasspath.lockfile"
      }), ") records exact versions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# gradle/dependency-locks/compileClasspath.lockfile\ncom.fasterxml.jackson.core:jackson-annotations:2.18.2\ncom.fasterxml.jackson.core:jackson-core:2.18.2\ncom.fasterxml.jackson.core:jackson-databind:2.18.2\njakarta.annotation:jakarta.annotation-api:2.1.1\norg.springframework.boot:spring-boot:3.4.1\norg.springframework:spring-core:6.2.1\norg.springframework:spring-web:6.2.1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-centralized-dependency-resolution",
      children: "4.7 Centralized Dependency Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In a multi-project build, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dependencyResolutionManagement"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "settings.gradle.kts"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// settings.gradle.kts\ndependencyResolutionManagement {\n    // FAIL_ON_PROJECT_REPOS — requires repositories defined only here\n    // PREFER_PROJECT — allows project-level repo declarations\n    // PREFER_SETTINGS — prefers settings-level repos\n    repositoriesMode = RepositoriesMode.PREFER_SETTINGS\n    repositories {\n        mavenCentral()\n        maven { url = uri(\"https://repo.spring.io/milestone\") }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-multi-project-builds",
      children: "5. Multi-Project Builds"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real-world applications are organized as multi-project builds. Gradle handles them through composite project graphs with inheritance and cross-project configuration."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-project-structure",
      children: "5.1 Project Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "my-app/\n├── settings.gradle.kts\n├── build.gradle.kts          # Root project (shared config)\n├── gradle.properties\n├── gradle/\n│   └── libs.versions.toml\n├── domain/\n│   ├── build.gradle.kts\n│   └── src/main/java/...\n├── application/\n│   ├── build.gradle.kts\n│   └── src/main/java/...\n├── infrastructure/\n│   ├── build.gradle.kts\n│   └── src/main/java/...\n└── presentation/\n    ├── build.gradle.kts\n    └── src/main/java/...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-settingsgradlekts--includes",
      children: "5.2 settings.gradle.kts — includes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// settings.gradle.kts\nrootProject.name = \"my-app\"\ninclude(\"domain\", \"application\", \"infrastructure\", \"presentation\")\n\n// Optionally rename subproject directories\nproject(\":domain\").projectDir = file(\"modules/domain\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-subprojects-and-allprojects",
      children: "5.3 Subprojects and Allprojects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The root ", (0,jsx_runtime.jsx)(_components.code, {
        children: "build.gradle.kts"
      }), " shares common configuration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — root project (common for all subprojects)\nplugins {\n    java\n    jacoco\n    id(\"org.springframework.boot\") version \"3.4.1\" apply false\n    id(\"io.spring.dependency-management\") version \"1.1.7\" apply false\n}\n\ngroup = \"com.example\"\nversion = \"1.0.0\"\n\n// Configure all projects (including root)\nallprojects {\n    repositories {\n        mavenCentral()\n    }\n}\n\n// Configure subprojects only\nsubprojects {\n    apply(plugin = \"java\")\n    apply(plugin = \"jacoco\")\n    apply(plugin = \"io.spring.dependency-management\")\n\n    java {\n        toolchain {\n            languageVersion = JavaLanguageVersion.of(21)\n        }\n    }\n\n    dependencyManagement {\n        imports {\n            mavenBom(\"org.springframework.boot:spring-boot-dependencies:3.4.1\")\n        }\n    }\n\n    tasks.withType<Test>().configureEach {\n        useJUnitPlatform()\n    }\n\n    tasks.withType<JacocoCoverageVerification>().configureEach {\n        violationRules {\n            rule {\n                limit { minimum = \"0.80\".toBigDecimal() }\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-cross-project-dependencies",
      children: "5.4 Cross-Project Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// domain/build.gradle.kts\nplugins {\n    `java-library`\n}\n\ndependencies {\n    // No internal dependencies — pure domain logic\n    api(\"jakarta.validation:jakarta.validation-api\")\n}\n\n// application/build.gradle.kts\nplugins {\n    `java-library`\n}\n\ndependencies {\n    implementation(project(\":domain\"))\n    implementation(\"org.springframework:spring-tx\")\n}\n\n// infrastructure/build.gradle.kts\nplugins {\n    `java-library`\n}\n\ndependencies {\n    implementation(project(\":domain\"))\n    implementation(project(\":application\"))\n    implementation(\"org.springframework.boot:spring-boot-starter-data-jpa\")\n    runtimeOnly(\"org.postgresql:postgresql\")\n}\n\n// presentation/build.gradle.kts\nplugins {\n    id(\"org.springframework.boot\")\n    id(\"io.spring.dependency-management\")\n}\n\ndependencies {\n    implementation(project(\":application\"))\n    implementation(project(\":infrastructure\"))\n    implementation(\"org.springframework.boot:spring-boot-starter-web\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-composite-builds",
      children: "5.5 Composite Builds"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Composite builds let you include an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "external project"
      }), " as if it were a subproject — without publishing it first."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// settings.gradle.kts — composite build\nrootProject.name = \"my-app\"\n\ninclude(\":domain\", \":application\", \":infrastructure\", \":presentation\")\n\n// Include an external library project as a composite\nincludeBuild(\"../my-shared-lib\") {\n    dependencySubstitution {\n        substitute(module(\"com.example:shared-lib\"))\n            .using(project(\":\"))\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now any project that depends on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "com.example:shared-lib"
      }), " resolves to the local composite build instead, making development of the library and application simultaneous."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-build-cache",
      children: "6. Build Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The build cache stores task outputs so that identical inputs produce instant results across machines and CI runs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-local-build-cache",
      children: "6.1 Local Build Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# gradle.properties\norg.gradle.caching=true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, the local cache is at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.gradle/caches/build-cache-1"
      }), ". It is a content-addressed store keyed by all declared inputs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-remote-build-cache-http",
      children: "6.2 Remote Build Cache (HTTP)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// settings.gradle.kts — remote cache configuration\nbuildCache {\n    local {\n        isEnabled = true\n        directory = File(System.getProperty(\"user.home\"), \".gradle/caches/build-cache-1\")\n        removeUnusedEntriesAfterDays = 7\n    }\n    remote<HttpBuildCache>(\"gradleEnterprise\") {\n        url = uri(\"https://build-cache.internal.example.com/cache/\")\n        isEnabled = System.getenv(\"CI\") != null   // only in CI\n        isPush = System.getenv(\"CI\") != null\n        credentials {\n            username = System.getenv(\"CACHE_USER\") ?: \"\"\n            password = System.getenv(\"CACHE_PASS\") ?: \"\"\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-cacheable-tasks",
      children: "6.3 Cacheable Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A task is cacheable when it is annotated with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@CacheableTask"
      }), " and all inputs/outputs are declared."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "import org.gradle.api.DefaultTask\nimport org.gradle.api.file.RegularFileProperty\nimport org.gradle.api.property.Property\nimport org.gradle.api.tasks.*\n\n@CacheableTask\nabstract class DocumentRenderer : DefaultTask() {\n\n    @get:Input\n    abstract val title: Property<String>\n\n    @get:InputFile\n    abstract val template: RegularFileProperty\n\n    @get:OutputFile\n    abstract val output: RegularFileProperty\n\n    @TaskAction\n    fun render() {\n        val content = template.get().asFile.readText()\n            .replace(\"{{TITLE}}\", title.get())\n        output.get().asFile.writeText(content)\n        logger.lifecycle(\"Rendered: ${output.get().asFile.name}\")\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — consuming the cacheable task\ntasks.register<DocumentRenderer>(\"renderDocs\") {\n    title.set(\"Gradle Deep Dive\")\n    template.set(layout.projectDirectory.file(\"src/templates/doc.html\"))\n    output.set(layout.buildDirectory.file(\"docs/index.html\"))\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cache keys include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The task class and its ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Input"
        }), " values"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The content hashes of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@InputFile"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@InputDirectory"
        }), " paths"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The task's implementation classpath"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gradle version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-cache-hit-verification",
      children: "6.4 Cache Hit Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Build with cache statistics\n./gradlew build --build-cache\n\n# To see cache hit/miss details, use --info or --debug\n./gradlew compileJava --build-cache --info | grep \"Build cache\"\n\n# For cache debugging — disable cache temporarily\n./gradlew clean build --no-build-cache\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-daemon",
      children: "7. Daemon"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Gradle Daemon is a long-lived JVM process that keeps build data in memory, dramatically reducing startup time for subsequent builds."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-daemon-lifecycle",
      children: "7.1 Daemon Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant User as User\n    participant Client as gradlew\n    participant Daemon as Daemon JVM\n    User->>Client: ./gradlew build\n    Client->>Daemon: Check socket port\n    Daemon-->>Client: Port 63342 (idle)\n    Client->>Daemon: Send build request\n    Daemon->>Daemon: Build execution\n    Daemon-->>Client: Results\n    Daemon->>Daemon: Idle (3hr timeout)\n    Note over Daemon: Stops after 3 hours idle\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-daemon-configuration",
      children: "7.2 Daemon Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# gradle.properties — daemon JVM tuning\n\n# Heap size for the daemon (not your application!)\n# 2 GB is a good starting point for most projects\norg.gradle.jvmargs=-Xmx2g -XX:MaxMetaspaceSize=512m\n\n# Enable the daemon by default (it is enabled by default in Gradle 8+)\norg.gradle.daemon=true\n\n# Maximum daemon lifetime in seconds (4 hours)\norg.gradle.daemon.idletimeout=14400\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-stopping-the-daemon",
      children: "7.3 Stopping the Daemon"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Stop all running daemons\n./gradlew --stop\n\n# Check daemon status\n./gradlew --status\n\n# Multiple daemons (one per Java version / Gradle version)\n# You can have: daemon-jdk21-gradle8.12 and daemon-jdk17-gradle8.10 running concurrently\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-performance",
      children: "8. Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gradle is fast when configured correctly. The following techniques combine for dramatic speed improvements."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-configuration-avoidance",
      children: "8.1 Configuration Avoidance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The single most important optimization: use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "register"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "create"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "register"
      }), " creates a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lazy provider"
      }), " — the task is instantiated only if it is actually executed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// BAD — task is always configured (even for ./gradlew help)\ntasks.create(\"heavyTask\") {\n    doLast {\n        // expensive work\n    }\n}\n\n// GOOD — task is configured only when executed\ntasks.register(\"heavyTask\") {\n    doLast {\n        // expensive work\n    }\n}\n\n// For typed tasks:\ntasks.register<Copy>(\"copyAssets\") {\n    from(\"src/assets\")\n    into(\"$buildDir/assets\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-lazy-task-configuration-with-providers",
      children: "8.2 Lazy Task Configuration with Providers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Gradle's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Provider"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Property"
      }), " APIs defer value resolution until execution time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts\nval outputDir = layout.buildDirectory.dir(\"generated\")\n\ntasks.register(\"createOutputDir\") {\n    doLast {\n        outputDir.get().asFile.mkdirs()\n    }\n}\n\n// Lazy file resolution\nval inputFile = layout.projectDirectory.file(\"data/input.csv\")\nval outputFile = outputDir.map { it.file(\"output.json\") }\n\ntasks.register<Copy>(\"transformData\") {\n    from(inputFile)\n    into(outputDir)\n    // inputFile and outputDir are resolved lazily\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-parallel-execution",
      children: "8.3 Parallel Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# gradle.properties\norg.gradle.parallel=true\n\n# Maximum number of parallel workers (default = CPU cores)\norg.gradle.workers.max=4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — fine-tune parallel execution\ntasks.withType<JavaCompile>().configureEach {\n    options.isFork = true\n    options.forkOptions.memoryMaximumSize = \"512m\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-worker-api",
      children: "8.4 Worker API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For CPU-intensive custom tasks, use the Worker API to parallelize work inside a single task:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// buildSrc/src/main/kotlin/com/example/ParallelProcessorTask.kt\npackage com.example\n\nimport org.gradle.api.DefaultTask\nimport org.gradle.api.file.DirectoryProperty\nimport org.gradle.api.file.RegularFileProperty\nimport org.gradle.api.tasks.*\nimport org.gradle.workers.*\n\nabstract class FileProcessor : WorkAction<FileProcessorParams> {\n    override fun execute() {\n        parameters.inputFile.get().asFile.readLines()\n            .filter { it.isNotBlank() }\n            .forEach { line ->\n                // process each line\n            }\n    }\n}\n\ninterface FileProcessorParams : WorkParameters {\n    val inputFile: RegularFileProperty\n}\n\nabstract class ParallelProcessorTask : DefaultTask() {\n\n    @get:InputDirectory\n    abstract val inputDir: DirectoryProperty\n\n    @get:OutputDirectory\n    abstract val outputDir: DirectoryProperty\n\n    @get:Inject\n    abstract val workerExecutor: WorkerExecutor\n\n    @TaskAction\n    fun processFiles() {\n        val workQueue = workerExecutor.noIsolation()\n        inputDir.get().asFile.listFiles()?.forEach { file ->\n            workQueue.submit(FileProcessor::class) {\n                inputFile.set(file)\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-configuration-cache",
      children: "8.5 Configuration Cache"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The configuration cache caches the output of the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "configuration phase"
      }), ", so subsequent builds skip script evaluation entirely."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# gradle.properties\norg.gradle.configuration-cache=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# First build — configuration phase runs (slower)\n./gradlew build\n\n# Second build — configuration phase is loaded from cache (much faster)\n./gradlew build\n\n# If configuration cache problems arise, disable temporarily:\n./gradlew build --no-configuration-cache\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitations:"
      }), " the configuration cache serializes the entire project object graph. Tasks that use non-serializable objects, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gradle.ext"
      }), ", or dynamic file operations in configuration may fail. Gradle reports these with actionable error messages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-incremental-builds",
      children: "8.6 Incremental Builds"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gradle's incremental build support means that if all inputs and outputs are declared, unchanged tasks are skipped automatically."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "@CacheableTask\nabstract class IncrementalReportTask : DefaultTask() {\n\n    @get:InputFiles\n    @get:PathSensitive(PathSensitivity.RELATIVE)\n    abstract val sourceFiles: ConfigurableFileCollection\n\n    @get:OutputFile\n    abstract val reportFile: RegularFileProperty\n\n    @TaskAction\n    fun generate() {\n        val report = sourceFiles.files.joinToString(\"\\n\") { file ->\n            \"${file.name}: ${file.readText().length} chars\"\n        }\n        reportFile.get().asFile.writeText(report)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Gradle knows to skip this task when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sourceFiles"
      }), " contents haven't changed, because both inputs and outputs are declared."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-publishing",
      children: "9. Publishing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Beyond the basics in §3.2, here are advanced publishing patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-publishing-with-artifacts",
      children: "9.1 Publishing with Artifacts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "plugins {\n    `maven-publish`\n    `java-library`\n    signing\n}\n\nval customJar by tasks.registering(Jar::class) {\n    archiveBaseName = \"my-lib-sources\"\n    from(sourceSets.main.get().allJava)\n}\n\npublishing {\n    publications {\n        create<MavenPublication>(\"mavenJava\") {\n            from(components[\"java\"])\n            artifact(customJar) {\n                classifier = \"sources\"\n            }\n\n            versionMapping {\n                usage(\"java-api\") {\n                    fromResolutionOf(\"runtimeClasspath\")\n                }\n                usage(\"java-runtime\") {\n                    fromResolutionResult()\n                }\n            }\n\n            pom {\n                name = \"My Library\"\n                description = \"Enterprise-grade library\"\n                url = \"https://github.com/example/my-lib\"\n\n                licenses {\n                    license {\n                        name = \"Apache-2.0\"\n                        url = \"https://apache.org/licenses/LICENSE-2.0\"\n                    }\n                }\n\n                developers {\n                    developer {\n                        id = \"jdoe\"\n                        name = \"Jane Doe\"\n                        email = \"jane@example.com\"\n                    }\n                }\n\n                scm {\n                    connection = \"scm:git:git@github.com:example/my-lib.git\"\n                    url = \"https://github.com/example/my-lib\"\n                }\n\n                // Exclude test-scoped dependencies from the POM\n                withXml {\n                    val dependencies = asNode().get(\"dependencies\") as groovy.util.NodeList\n                    dependencies.forEach { dep ->\n                        val scope = dep.node?.get(\"scope\")?.text()\n                        if (scope == \"test\") {\n                            dep.parent?.remove(dep)\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n    repositories {\n        maven {\n            name = \"ossrh\"\n            url = uri(\"https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/\")\n            credentials {\n                username = System.getenv(\"OSSRH_USER\")\n                password = System.getenv(\"OSSRH_PASS\")\n            }\n        }\n    }\n}\n\nsigning {\n    sign(publishing.publications[\"mavenJava\"])\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-conditional-publishing",
      children: "9.2 Conditional Publishing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// Only publish from CI on the main branch\ntasks.withType<PublishToMavenRepository>().configureEach {\n    onlyIf {\n        System.getenv(\"CI\") != null && System.getenv(\"CI_COMMIT_BRANCH\") == \"main\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-spring-boot-with-gradle",
      children: "10. Spring Boot with Gradle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Spring Boot Gradle plugin provides first-class support for building, running, and containerizing Spring Boot applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-plugin-application",
      children: "10.1 Plugin Application"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts\nplugins {\n    java\n    id(\"org.springframework.boot\") version \"3.4.1\"\n    id(\"io.spring.dependency-management\") version \"1.1.7\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "io.spring.dependency-management"
      }), " automatically imports the Spring Boot BOM, so you omit versions from Spring Boot dependencies:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "dependencies {\n    implementation(\"org.springframework.boot:spring-boot-starter-web\")\n    implementation(\"org.springframework.boot:spring-boot-starter-data-jpa\")\n    implementation(\"org.springframework.boot:spring-boot-starter-validation\")\n    testImplementation(\"org.springframework.boot:spring-boot-starter-test\")\n    testRuntimeOnly(\"org.junit.platform:junit-platform-launcher\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-bootjar",
      children: "10.2 bootJar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bootJar"
      }), " task creates an executable fat JAR. It is automatically wired to replace the standard ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jar"
      }), " task."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — bootJar customization\ntasks.named<org.springframework.boot.gradle.tasks.bundling.BootJar>(\"bootJar\") {\n    archiveBaseName.set(\"my-app\")\n    archiveVersion.set(project.version.toString())\n    archiveFileName.set(\"${archiveBaseName.get()}-${archiveVersion.get()}.jar\")\n    mainClass = \"com.example.Application\"\n\n    // Exclude specific dependencies from the fat JAR\n    excludes = setOf(\"META-INF/*.SF\", \"META-INF/*.DSA\", \"META-INF/*.RSA\")\n\n    // Enable layered JARs for Docker optimization (Spring Boot 3.0+)\n    layered {\n        enabled = true\n        application {\n            intoLayer(\"spring-boot-loader\") {\n                include(\"org/springframework/boot/loader/**\")\n            }\n            intoLayer(\"application\")\n        }\n        dependencies {\n            intoLayer(\"snapshot-dependencies\") {\n                include(\"*:*:*SNAPSHOT\")\n            }\n            intoLayer(\"dependencies\")\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Build the executable JAR\n./gradlew bootJar\n\n# Run it\njava -jar build/libs/my-app-1.0.0.jar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-bootrun",
      children: "10.3 bootRun"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bootRun"
      }), " task runs the application from source without building a JAR."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — bootRun customization\ntasks.named<org.springframework.boot.gradle.tasks.run.BootRun>(\"bootRun\") {\n    // Command-line arguments\n    args(\"--spring.profiles.active=dev\")\n\n    // JVM arguments\n    jvmArgs(\n        \"-Xmx512m\",\n        \"-Duser.timezone=UTC\",\n        \"-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005\"\n    )\n\n    // Enable HotSwap or Spring DevTools reload\n    environment(\"SPRING_DEVTOOLS_RESTART_TRIGGER_FILE\", \"build/reload.tmp\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run the application\n./gradlew bootRun\n\n# With remote debugging\n./gradlew bootRun --debug-jvm\n\n# With a specific profile\nSPRING_PROFILES_ACTIVE=production ./gradlew bootRun\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-bootbuildimage",
      children: "10.4 bootBuildImage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot 3.x integrates Cloud Native Buildpacks to produce OCI-compliant Docker images ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "without a Dockerfile"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — bootBuildImage customization\ntasks.named<org.springframework.boot.gradle.tasks.bundling.BootBuildImage>(\"bootBuildImage\") {\n    imageName = \"registry.example.com/my-app:${project.version}\"\n    builder = \"paketobuildpacks/builder-jammy-tiny:latest\"\n    runImage = \"paketobuildpacks/run:jammy-tiny\"\n\n    environment = mapOf(\n        \"BP_JVM_VERSION\" to \"21\",\n        \"BPE_SPRING_PROFILES_ACTIVE\" to \"production\",\n        \"BPE_JAVA_TOOL_OPTIONS\" to \"-XX:MaxRAMPercentage=75\"\n    )\n\n    publish = System.getenv(\"CI\") != null\n    docker {\n        publishRegistry {\n            username = System.getenv(\"DOCKER_USER\")\n            password = System.getenv(\"DOCKER_PASS\")\n        }\n    }\n\n    // Spring Boot 3.4+ optimizations\n    bindings = listOf(\n        \"/tmp/cache:/cache\"\n    )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Build the Docker image (no Dockerfile needed)\n./gradlew bootBuildImage\n\n# Tag and push\ndocker tag registry.example.com/my-app:1.0.0 registry.example.com/my-app:latest\ndocker push registry.example.com/my-app:1.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-dependency-management-plugin",
      children: "10.5 Dependency Management Plugin"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "io.spring.dependency-management"
      }), " plugin applies Maven-style BOM import behavior to Gradle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — importing additional BOMs\ndependencyManagement {\n    imports {\n        mavenBom(\"org.springframework.cloud:spring-cloud-dependencies:2024.0.0\")\n        mavenBom(\"software.amazon.awssdk:bom:2.29.48\")\n    }\n\n    // Override a specific version from a BOM\n    overriddenByDependencies = false // (default) BOM versions take precedence\n}\n\ndependencies {\n    implementation(\"org.springframework.cloud:spring-cloud-starter-gateway\")\n    implementation(\"software.amazon.awssdk:s3\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "106-spring-boot-starters-resolution",
      children: "10.6 Spring Boot Starters Resolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot starters are pre-configured dependency descriptors. The dependency management plugin ensures all transitive dependencies use compatible versions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "dependencies {\n    // Core starters\n    implementation(\"org.springframework.boot:spring-boot-starter-web\")\n    implementation(\"org.springframework.boot:spring-boot-starter-actuator\")\n    implementation(\"org.springframework.boot:spring-boot-starter-data-jpa\")\n    implementation(\"org.springframework.boot:spring-boot-starter-validation\")\n    implementation(\"org.springframework.boot:spring-boot-starter-security\")\n\n    // Optional starters — conditionally active\n    implementation(\"org.springframework.boot:spring-boot-starter-mail\")\n    implementation(\"org.springframework.boot:spring-boot-starter-cache\")\n    implementation(\"org.springframework.boot:spring-boot-starter-quartz\")\n\n    // Devtools — excluded from production JAR\n    developmentOnly(\"org.springframework.boot:spring-boot-devtools\")\n\n    // Production monitoring\n    runtimeOnly(\"io.micrometer:micrometer-registry-prometheus\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// Complete Spring Boot multi-project example\n\n// settings.gradle.kts\nrootProject.name = \"order-management\"\ninclude(\"order-domain\", \"order-application\", \"order-infrastructure\", \"order-presentation\")\n\n// root build.gradle.kts\nplugins {\n    java\n    id(\"org.springframework.boot\") version \"3.4.1\" apply false\n    id(\"io.spring.dependency-management\") version \"1.1.7\" apply false\n}\n\nsubprojects {\n    apply(plugin = \"java\")\n    apply(plugin = \"io.spring.dependency-management\")\n\n    group = \"com.example.orders\"\n    version = \"1.0.0\"\n\n    java {\n        toolchain {\n            languageVersion = JavaLanguageVersion.of(21)\n        }\n    }\n\n    repositories {\n        mavenCentral()\n    }\n\n    dependencyManagement {\n        imports {\n            mavenBom(\"org.springframework.boot:spring-boot-dependencies:3.4.1\")\n            mavenBom(\"org.springframework.cloud:spring-cloud-dependencies:2024.0.0\")\n        }\n    }\n\n    tasks.withType<Test>().configureEach {\n        useJUnitPlatform()\n    }\n}\n\n// order-domain/build.gradle.kts\nplugins {\n    `java-library`\n}\n\ndependencies {\n    api(\"org.springframework.boot:spring-boot-starter-validation\")\n    compileOnly(\"org.projectlombok:lombok\")\n    annotationProcessor(\"org.projectlombok:lombok\")\n}\n\n// order-application/build.gradle.kts\nplugins {\n    `java-library`\n}\n\ndependencies {\n    implementation(project(\":order-domain\"))\n    implementation(\"org.springframework.boot:spring-boot-starter\")\n    implementation(\"org.springframework:spring-tx\")\n}\n\n// order-infrastructure/build.gradle.kts\nplugins {\n    `java-library`\n}\n\ndependencies {\n    implementation(project(\":order-domain\"))\n    implementation(project(\":order-application\"))\n    implementation(\"org.springframework.boot:spring-boot-starter-data-jpa\")\n    runtimeOnly(\"org.postgresql:postgresql\")\n}\n\n// order-presentation/build.gradle.kts\nplugins {\n    id(\"org.springframework.boot\")\n}\n\ndependencies {\n    implementation(project(\":order-application\"))\n    implementation(project(\":order-infrastructure\"))\n    implementation(\"org.springframework.boot:spring-boot-starter-web\")\n    implementation(\"org.springframework.boot:spring-boot-starter-actuator\")\n    testImplementation(\"org.springframework.boot:spring-boot-starter-test\")\n    testImplementation(\"org.testcontainers:postgresql:1.20.4\")\n    testRuntimeOnly(\"org.junit.platform:junit-platform-launcher\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-version-catalogs-deep-dive",
      children: "11. Version Catalogs (Deep Dive)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Version catalogs are the modern, scalable dependency management approach for Gradle."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-toml-structure",
      children: "11.1 TOML Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-toml",
        children: "# gradle/libs.versions.toml\n\n[versions]\n# Versions are plain strings\njava = \"21\"\nspring-boot = \"3.4.1\"\nspring-cloud = \"2024.0.0\"\nlombok = \"1.18.36\"\nmapstruct = \"1.6.3\"\ntestcontainers = \"1.20.4\"\nkotlin = \"2.1.0\"\n\n[libraries]\n# Simple library — no version reference, uses default\nspring-boot-starter-web = { module = \"org.springframework.boot:spring-boot-starter-web\" }\n\n# Library with version reference\nlombok = { module = \"org.projectlombok:lombok\", version.ref = \"lombok\" }\nmapstruct-core = { module = \"org.mapstruct:mapstruct\", version.ref = \"mapstruct\" }\nmapstruct-processor = { module = \"org.mapstruct:mapstruct-processor\", version.ref = \"mapstruct\" }\n\n# Library with inline version (not recommended — use version.ref)\njackson-core = { module = \"com.fasterxml.jackson.core:jackson-core\", version = \"2.18.2\" }\n\n# Library with version constraint\nhibernate = { module = \"org.hibernate.orm:hibernate-core\", version = \"6.6.4.Final\" }\n\n# Strict version\nguava-strict = { module = \"com.google.guava:guava\", version = { strictly = \"33.4.0-jre\", require = \"33.4.0-jre\" } }\n\n# Maven BOM import\nspring-cloud-bom = { module = \"org.springframework.cloud:spring-cloud-dependencies\", version.ref = \"spring-cloud\" }\n\n[bundles]\n# Dependency bundles group related libraries\ntesting = [\n    \"spring-boot-starter-test\",\n    \"testcontainers\",\n    \"testcontainers-postgresql\"\n]\nstarter-web = [\n    \"spring-boot-starter-web\",\n    \"spring-boot-starter-validation\"\n]\n\n[plugins]\nspring-boot = { id = \"org.springframework.boot\", version.ref = \"spring-boot\" }\nspring-dependency-management = { id = \"io.spring.dependency-management\", version.ref = \"spring-boot\" }\nkotlin-jvm = { id = \"org.jetbrains.kotlin.jvm\", version.ref = \"kotlin\" }\nspotbugs = { id = \"com.github.spotbugs\", version = \"6.1.0\" }\ncheckstyle = { id = \"checkstyle\" } # no version — Gradle built-in\njacoco = { id = \"jacoco\" }        # no version — Gradle built-in\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-type-safe-accessor-generation",
      children: "11.2 Type-Safe Accessor Generation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For each TOML entry, Gradle generates type-safe Kotlin accessors in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "libs"
      }), " extension:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "TOML key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Accessor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "libs.spring.boot"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "libs.spring.boot.starter.web"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot-starter-web"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "libs.spring.boot.starter.web"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "implementation(libs.spring.boot.starter.web)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mapstruct-core"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "libs.mapstruct.core"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "implementation(libs.mapstruct.core)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "starter-web"
            }), " (bundle)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "libs.bundles.starter.web"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "implementation(libs.bundles.starter.web)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot"
            }), " (plugin)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "libs.plugins.spring.boot"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "alias(libs.plugins.spring.boot)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dashes in TOML keys become dots in accessors. The accessors are generated at build time and visible in IDE autocompletion."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-consuming-in-build-scripts",
      children: "11.3 Consuming in Build Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// build.gradle.kts — complete version catalog example\nplugins {\n    alias(libs.plugins.spring.boot)\n    alias(libs.plugins.spring.dependency.management)\n    alias(libs.plugins.checkstyle)\n    alias(libs.plugins.jacoco)\n    id(\"java\")\n}\n\ndependencies {\n    // Simple library\n    implementation(libs.spring.boot.starter.web)\n\n    // Library with version reference\n    compileOnly(libs.lombok)\n    annotationProcessor(libs.lombok)\n\n    mapstruct {\n        compileOnly(libs.mapstruct.core)\n        annotationProcessor(libs.mapstruct.processor)\n    }\n\n    // Bundle\n    testImplementation(libs.bundles.testing)\n\n    // Platform BOM\n    implementation(platform(libs.spring.cloud.bom))\n    implementation(\"org.springframework.cloud:spring-cloud-starter-config\")\n}\n\n// Plugin configuration\ntasks.withType<Test>().configureEach {\n    useJUnitPlatform()\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-multi-project-catalog",
      children: "11.4 Multi-Project Catalog"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Version catalogs are shared across all subprojects automatically when defined in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gradle/libs.versions.toml"
      }), " in the root project. Subproject build scripts reference the same ", (0,jsx_runtime.jsx)(_components.code, {
        children: "libs"
      }), " object."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// subproject/build.gradle.kts\nplugins {\n    java\n}\n\ndependencies {\n    implementation(libs.spring.boot.starter.web)\n    testImplementation(libs.bundles.testing)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-custom-catalog-declaration",
      children: "11.5 Custom Catalog Declaration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For advanced setups, you can declare multiple catalogs:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// settings.gradle.kts — custom catalog from a file\ndependencyResolutionManagement {\n    versionCatalogs {\n        create(\"testLibs\") {\n            from(files(\"gradle/testlibs.versions.toml\"))\n        }\n    }\n}\n\n// In build scripts: testLibs.jupiter.api\n"
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
            children: "Groovy DSL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic scripting build"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concise, flexible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy Gradle projects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kotlin DSL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe, statically typed build"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDE autocomplete, compile-time validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern Gradle projects (preferred)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit of work in DAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incremental, cacheable, dependsOn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every build operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reuses configuration across builds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster builds after first run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD pipeline acceleration"
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
            children: "Key Concepts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifecycle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialization, Configuration, Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration phase builds the DAG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task Types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy, Exec, Jar, Zip, Delete, JavaExec"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@CacheableTask"
            }), " for build avoidance"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Configurations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "implementation, api, compileOnly, runtimeOnly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "api leaks to consumers; implementation does not"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Version Catalogs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "libs.versions.toml with type-safe accessors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized version management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Daemon"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-lived JVM for builds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory: -Xmx2048m for large projects"
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
            children: "Multi-Project"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CI/CD"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version Catalogs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified dependency versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Boot starter management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-module version alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reproducible builds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast CI builds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared cache in CI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local + remote caching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Startup time reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First build after config change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kotlin DSL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe plugin config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reactive spec flows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe module config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BuildSrc convention plugins"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "implementation"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "api"
        }), " in Gradle?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) They are identical"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) api leaks transitive dependencies to consumers; implementation does not"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) implementation is for tests only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) api is deprecated"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) api leaks transitive dependencies to consumers; implementation does not.** Use api only when the dependency appears in the public API of your library.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "register"
        }), " do differently from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "create"
        }), " in Gradle?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) register creates tasks lazily — they are configured only when needed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) register creates tasks eagerly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) register is faster for execution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) There is no difference"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**A) register creates tasks lazily — they are configured only when needed.** This is configuration avoidance, which reduces build time by not configuring tasks that may never execute.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of the Gradle Build Cache?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) To store compiled dependencies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) To cache task outputs so unchanged tasks are not re-executed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) To store downloaded plugins"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) To cache test results only"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) To cache task outputs so unchanged tasks are not re-executed.** The build cache stores outputs keyed by task inputs, enabling build avoidance across machines.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Where is the version catalog defined?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) build.gradle.kts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) gradle/libs.versions.toml"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) settings.gradle.kts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) gradle.properties"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) gradle/libs.versions.toml.** The TOML file defines versions, libraries, and plugins with type-safe accessors generated by Gradle.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-summary",
      children: "12. Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This chapter covered Gradle comprehensively across three dimensions: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "script configuration"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "build mechanics"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "performance optimization"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Build scripts:"
      }), " Gradle supports both Groovy DSL and Kotlin DSL, with Kotlin DSL being the recommended choice. Every project should use the Gradle Wrapper (", (0,jsx_runtime.jsx)(_components.code, {
        children: "gradlew"
      }), ") to pin the Gradle version. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "settings.gradle.kts"
      }), " file defines project structure, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gradle.properties"
      }), " tunes the Daemon and enables caching."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tasks:"
      }), " Gradle's build model is a directed acyclic graph of tasks. Tasks can be defined ad hoc with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "doLast"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "doFirst"
      }), ", or as reusable types with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TaskAction"
      }), " and input/output annotations for incrementality and caching. Built-in types like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Copy"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Exec"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Jar"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JavaExec"
      }), " cover most needs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Plugins:"
      }), " Essential plugins include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java-library"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "application"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "maven-publish"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "checkstyle"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jacoco"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spotbugs"
      }), ", and the Spring Boot plugins (", (0,jsx_runtime.jsx)(_components.code, {
        children: "org.springframework.boot"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "io.spring.dependency-management"
      }), "). Plugins should be applied via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "plugins"
      }), " block."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependencies:"
      }), " Gradle's configuration hierarchy (", (0,jsx_runtime.jsx)(_components.code, {
        children: "implementation"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "api"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "compileOnly"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "runtimeOnly"
      }), ", etc.) gives precise control over dependency visibility. Version catalogs (", (0,jsx_runtime.jsx)(_components.code, {
        children: "gradle/libs.versions.toml"
      }), ") provide centralized, type-safe dependency management. Dependency locking ensures reproducibility."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-project builds:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "include"
      }), " statement in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "settings.gradle.kts"
      }), " composes subprojects. Shared configuration uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "allprojects"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "subprojects"
      }), ". Cross-project dependencies use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "project(\":path\")"
      }), ". Composite builds integrate external projects without publishing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Build cache:"
      }), " The local cache speeds up repeated builds; the remote cache enables team-wide and CI sharing. Cacheable tasks must declare all inputs and outputs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Daemon and performance:"
      }), " The Gradle Daemon keeps build state in memory. Key performance techniques include configuration avoidance (", (0,jsx_runtime.jsx)(_components.code, {
        children: "register"
      }), " over ", (0,jsx_runtime.jsx)(_components.code, {
        children: "create"
      }), "), lazy providers, parallel execution, the Worker API for intra-task parallelism, and the configuration cache for skipping script evaluation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Boot:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "org.springframework.boot"
      }), " plugin provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bootJar"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bootRun"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bootBuildImage"
      }), ". The dependency management plugin imports the Spring Boot BOM, eliminating version declarations for managed dependencies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What are the three phases of the Gradle build lifecycle? What happens in each phase?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tasks.register"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tasks.create"
          }), "? Why is the former preferred?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Explain the difference between the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "implementation"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "api"
          }), " dependency configurations. When would you use each one?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the purpose of the Gradle Wrapper? How do you generate it and upgrade the Gradle version?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does the build cache determine whether a task's output can be reused from a previous run?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What annotations must be present on a custom task type to make it cacheable and incremental?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the Gradle Daemon and how does it improve build performance? How can you stop it?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How do you share dependencies across multiple subprojects in a multi-project Gradle build?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the purpose of a version catalog (", (0,jsx_runtime.jsx)(_components.code, {
            children: "libs.versions.toml"
          }), ")? What three sections does it contain?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "io.spring.dependency-management"
          }), " plugin interact with the Spring Boot BOM?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migrate a Maven project to Gradle."
        }), " Given the following Maven ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pom.xml"
        }), ", write the equivalent ", (0,jsx_runtime.jsx)(_components.code, {
          children: "build.gradle.kts"
        }), " using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "java"
        }), " plugin and version catalog:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<project>\n    <groupId>com.example</groupId>\n    <artifactId>hello-world</artifactId>\n    <version>1.0.0</version>\n    <dependencies>\n        <dependency>\n            <groupId>org.apache.commons</groupId>\n            <artifactId>commons-lang3</artifactId>\n            <version>3.17.0</version>\n        </dependency>\n        <dependency>\n            <groupId>org.junit.jupiter</groupId>\n            <artifactId>junit-jupiter</artifactId>\n            <version>5.11.4</version>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a Gradle wrapper."
          }), " Write the command to generate a Gradle wrapper for version 8.12 in an existing project. What files are created?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Define a custom task."
          }), " Write a custom task type called ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PropertiesReportTask"
          }), " that reads a ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".properties"
          }), " file and writes a report with the number of keys and the total character length of all values. The input file and output file must be annotated for incremental build support."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure JaCoCo."
          }), " Add JaCoCo coverage to a Gradle project with the following requirements:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minimum line coverage of 80%"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Exclude the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "config"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dto"
            }), " packages from verification"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generate both XML and HTML reports"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Make ", (0,jsx_runtime.jsx)(_components.code, {
              children: "check"
            }), " depend on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "jacocoTestCoverageVerification"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Set up a version catalog."
          }), " Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "libs.versions.toml"
          }), " that defines:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Spring Boot 3.4.1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Spring Cloud 2024.0.0"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Lombok 1.18.36"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "MapStruct 1.6.3"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A bundle called ", (0,jsx_runtime.jsx)(_components.code, {
              children: "spring-web"
            }), " containing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot-starter-web"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot-starter-validation"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Write the consuming ", (0,jsx_runtime.jsx)(_components.code, {
              children: "build.gradle.kts"
            }), " that applies the Spring Boot plugin from the catalog and uses these libraries."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable the build cache."
          }), " Write the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "gradle.properties"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "settings.gradle.kts"
          }), " configuration to:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enable local build cache (keep entries for 14 days)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Configure a remote HTTP build cache at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://cache.internal.example.com/"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enable the remote cache only in CI, with push enabled"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enable parallel execution with 4 workers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enable configuration caching"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement a Spring Boot multi-project build."
          }), " Create a three-module Gradle project structure:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "api"
            }), " — Spring Boot web application with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@RestController"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "service"
            }), " — Business logic, depends on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "api"
            }), " ??? (inverted — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "api"
            }), " depends on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "service"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "persistence"
            }), " — JPA entities and repositories, depends on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "service"
            }), " ??? (inverted — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "service"
            }), " depends on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "persistence"
            }), ")"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "settings.gradle.kts"
          }), ", root ", (0,jsx_runtime.jsx)(_components.code, {
            children: "build.gradle.kts"
          }), " (shared config), and each module's build script. Use version catalogs. Ensure the final executable bootJar is produced from the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "api"
          }), " module."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Publish a library."
          }), " Write the Gradle configuration to publish a Java library to Sonatype OSSRH (Maven Central staging) with:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "maven-publish"
            }), " plugin"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sources and Javadoc JARs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A complete POM with license, developer, and SCM information"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Signing with GPG"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Conditional publishing (only on the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " branch in CI)"]
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
            children: "Composite build for library development."
          }), " You have two repositories: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "my-shared-lib"
          }), " (a published library) and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "my-app"
          }), " (a Spring Boot application that depends on it). Without publishing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "my-shared-lib"
          }), ", configure a composite build in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "my-app"
          }), " so that changes to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "my-shared-lib"
          }), " are picked up immediately. Write both the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "settings.gradle.kts"
          }), " and the necessary dependency substitution rules. Then, add a task to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "my-app"
          }), " that runs the tests of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "my-shared-lib"
          }), " as part of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "my-app"
          }), "'s build."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom plugin with extension DSL."
          }), " Create a Gradle plugin (in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "buildSrc"
          }), ") that provides a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "greeting"
          }), " extension with properties ", (0,jsx_runtime.jsx)(_components.code, {
            children: "message"
          }), " (String) and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "recipients"
          }), " (List<String>). The plugin should create a task ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sayHello"
          }), " that prints the message to each recipient. The extension should be configurable in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "build.gradle.kts"
          }), " as:"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "greeting {\n    message = \"Welcome\"\n    recipients = listOf(\"Alice\", \"Bob\", \"Charlie\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Incremental task with Worker API."
          }), " Write a custom task ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ImageOptimizer"
          }), " that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Takes an input directory of PNG files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Outputs optimized versions to an output directory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses the Worker API to process files in parallel"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@CacheableTask"
            }), " with proper ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@InputFiles"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "@OutputDirectory"
            }), " annotations"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implements ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Incremental"
            }), " to process only changed files on subsequent runs"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Produces a summary report as an additional output"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dependency locking with CI verification."
          }), " Set up dependency locking for a multi-project Spring Boot application. Write a CI pipeline step (in Gradle, using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "build.gradle.kts"
          }), " tasks) that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Checks if any dependency has changed compared to the committed lock files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If changed, fails the build and prints the diff"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Automatically updates lock files when a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-PupdateLocks"
            }), " flag is passed"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Integrates with the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "check"
            }), " lifecycle"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configuration cache audit."
          }), " For an existing Gradle project, enable the configuration cache and resolve all reported problems. Write a diagnostic task ", (0,jsx_runtime.jsx)(_components.code, {
            children: "configCacheAudit"
          }), " that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reports which tasks are incompatible with configuration caching"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Suggests fixes for each incompatibility"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Measures the time savings (cache hit vs cold build) and prints them"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fails the build if any caching incompatibility would silently produce wrong results"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Advanced publication pipeline."
          }), " Build a complete publication pipeline for an open-source library:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Publish SNAPSHOT versions to a private Nexus on every push to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "develop"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Publish releases to Maven Central on tags matching ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v*"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Automatically generate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gradle/libs.versions.toml"
            }), " from the published POM ??? (or the reverse — generate POM from the catalog)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Publish a Gradle plugin that wraps the library (using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "java-gradle-plugin"
            }), " plugin)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sign all publications with GPG using in-memory keys from environment variables"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Include a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "buildScan"
            }), " publication that sends build metrics to a Gradle Enterprise instance"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom dependency resolution."
          }), " Write a Gradle plugin that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Intercepts all ", (0,jsx_runtime.jsx)(_components.code, {
              children: "compileClasspath"
            }), " resolution"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Scans for known vulnerable dependencies (matches against a local CSV of CVEs)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fails the build with a detailed report when a vulnerable version is found"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Automatically upgrades to the nearest non-vulnerable patch version when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-PautoFixVulnerabilities"
            }), " is set"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Generates a JSON report at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "build/reports/dependency-audit.json"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build cache partitioning."
          }), " For a very large multi-project build (50+ subprojects), design and implement:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A remote build cache with distinct namespaces for CI branches"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gradle.properties"
            }), " setup that uses the remote cache for CI but local cache for developers"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Custom cache key computation that includes the CI build number as an input (forcing a full rebuild when desired)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A Gradle build scan plugin configuration that visualizes cache hit rates per subproject"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Write a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "settings.gradle.kts"
            }), " that configures this with environment variable fallbacks"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "This chapter is part of the Java & Spring Boot Complete University Textbook. All examples are compatible with Gradle 8.12+ and Spring Boot 3.4.x."
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