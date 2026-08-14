"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[85682],{

/***/ 99373
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_52_docker_md_dc0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-52-docker-md-dc0.json
const site_docs_courses_java_52_docker_md_dc0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/52-docker","title":"Docker & Containerization","description":"Previous Kubernetes","source":"@site/docs/courses/java/52-docker.md","sourceDirName":"courses/java","slug":"/java/52-docker","permalink":"/ai-engineering-journey/java/52-docker","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":52,"frontMatter":{"id":"52-docker","slug":"/java/52-docker","title":"Docker & Containerization","sidebar_label":"Docker & Containerization","sidebar_position":52},"sidebar":"course-java","previous":{"title":"Spring Modulith","permalink":"/ai-engineering-journey/java/51-modulith"},"next":{"title":"Kubernetes Deployment","permalink":"/ai-engineering-journey/java/53-kubernetes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/52-docker.md


const frontMatter = {
	id: '52-docker',
	slug: '/java/52-docker',
	title: 'Docker & Containerization',
	sidebar_label: 'Docker & Containerization',
	sidebar_position: 52
};
const contentTitle = 'Docker & Containerization';

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
  "value": "1. Why Containerize Spring Boot?",
  "id": "1-why-containerize-spring-boot",
  "level": 2
}, {
  "value": "2. Dockerfile Fundamentals",
  "id": "2-dockerfile-fundamentals",
  "level": 2
}, {
  "value": "2.1 Naive Dockerfile (Don&#39;t Do This)",
  "id": "21-naive-dockerfile-dont-do-this",
  "level": 3
}, {
  "value": "2.2 Improved Dockerfile",
  "id": "22-improved-dockerfile",
  "level": 3
}, {
  "value": "3. Base Image Comparison",
  "id": "3-base-image-comparison",
  "level": 2
}, {
  "value": "3.1 Alpine Linux",
  "id": "31-alpine-linux",
  "level": 3
}, {
  "value": "3.2 Distroless",
  "id": "32-distroless",
  "level": 3
}, {
  "value": "3.3 Full JDK (For Development)",
  "id": "33-full-jdk-for-development",
  "level": 3
}, {
  "value": "3.4 Choosing the Right Base",
  "id": "34-choosing-the-right-base",
  "level": 3
}, {
  "value": "4. .dockerignore",
  "id": "4-dockerignore",
  "level": 2
}, {
  "value": "5. Multi-Stage Builds",
  "id": "5-multi-stage-builds",
  "level": 2
}, {
  "value": "5.1 Maven Multi-Stage",
  "id": "51-maven-multi-stage",
  "level": 3
}, {
  "value": "5.2 Gradle Multi-Stage",
  "id": "52-gradle-multi-stage",
  "level": 3
}, {
  "value": "6. Layer Optimization",
  "id": "6-layer-optimization",
  "level": 2
}, {
  "value": "6.1 Docker Layer Caching Principles",
  "id": "61-docker-layer-caching-principles",
  "level": 3
}, {
  "value": "6.2 Spring Boot Layered JARs",
  "id": "62-spring-boot-layered-jars",
  "level": 3
}, {
  "value": "Maven Configuration",
  "id": "maven-configuration",
  "level": 4
}, {
  "value": "Gradle Configuration",
  "id": "gradle-configuration",
  "level": 4
}, {
  "value": "Extracting Layers",
  "id": "extracting-layers",
  "level": 4
}, {
  "value": "6.3 Custom Layer Configuration",
  "id": "63-custom-layer-configuration",
  "level": 3
}, {
  "value": "6.4 Optimized Dockerfile with Layered JAR",
  "id": "64-optimized-dockerfile-with-layered-jar",
  "level": 3
}, {
  "value": "7. Docker Compose",
  "id": "7-docker-compose",
  "level": 2
}, {
  "value": "7.1 Basic docker-compose.yml",
  "id": "71-basic-docker-composeyml",
  "level": 3
}, {
  "value": "7.2 Docker Compose with Multiple Profiles",
  "id": "72-docker-compose-with-multiple-profiles",
  "level": 3
}, {
  "value": "7.3 Spring Boot Configuration for Docker",
  "id": "73-spring-boot-configuration-for-docker",
  "level": 3
}, {
  "value": "8. Health Checks",
  "id": "8-health-checks",
  "level": 2
}, {
  "value": "8.1 Dockerfile HEALTHCHECK",
  "id": "81-dockerfile-healthcheck",
  "level": 3
}, {
  "value": "8.2 Spring Boot Actuator Health",
  "id": "82-spring-boot-actuator-health",
  "level": 3
}, {
  "value": "8.3 Liveness and Readiness Probes",
  "id": "83-liveness-and-readiness-probes",
  "level": 3
}, {
  "value": "8.4 Custom Liveness and Readiness Indicators",
  "id": "84-custom-liveness-and-readiness-indicators",
  "level": 3
}, {
  "value": "9. JVM Performance in Containers",
  "id": "9-jvm-performance-in-containers",
  "level": 2
}, {
  "value": "9.1 Container-Aware JVM Flags",
  "id": "91-container-aware-jvm-flags",
  "level": 3
}, {
  "value": "9.2 CPU Limits",
  "id": "92-cpu-limits",
  "level": 3
}, {
  "value": "9.3 Memory Limits",
  "id": "93-memory-limits",
  "level": 3
}, {
  "value": "9.4 GC Tuning for Containers",
  "id": "94-gc-tuning-for-containers",
  "level": 3
}, {
  "value": "9.5 CDS (Class Data Sharing) for Faster Startup",
  "id": "95-cds-class-data-sharing-for-faster-startup",
  "level": 3
}, {
  "value": "9.6 Spring AOT and GraalVM Native Image",
  "id": "96-spring-aot-and-graalvm-native-image",
  "level": 3
}, {
  "value": "10. Docker Compose Production Patterns",
  "id": "10-docker-compose-production-patterns",
  "level": 2
}, {
  "value": "10.1 Full Production Compose File",
  "id": "101-full-production-compose-file",
  "level": 3
}, {
  "value": "10.2 Environment File",
  "id": "102-environment-file",
  "level": 3
}, {
  "value": "11. Container Orchestration Concepts",
  "id": "11-container-orchestration-concepts",
  "level": 2
}, {
  "value": "11.1 Why Orchestration?",
  "id": "111-why-orchestration",
  "level": 3
}, {
  "value": "11.2 Orchestration Options",
  "id": "112-orchestration-options",
  "level": 3
}, {
  "value": "11.3 Kubernetes in One Slide",
  "id": "113-kubernetes-in-one-slide",
  "level": 3
}, {
  "value": "11.4 Docker Compose vs Kubernetes Mapping",
  "id": "114-docker-compose-vs-kubernetes-mapping",
  "level": 3
}, {
  "value": "11.5 Migrating from Docker Compose to Kubernetes",
  "id": "115-migrating-from-docker-compose-to-kubernetes",
  "level": 3
}, {
  "value": "12. Building and Tagging Images",
  "id": "12-building-and-tagging-images",
  "level": 2
}, {
  "value": "12.1 Build Script",
  "id": "121-build-script",
  "level": 3
}, {
  "value": "12.2 Dockerfile with Build Args",
  "id": "122-dockerfile-with-build-args",
  "level": 3
}, {
  "value": "13. Security Best Practices",
  "id": "13-security-best-practices",
  "level": 2
}, {
  "value": "14. Image Size Optimization Summary",
  "id": "14-image-size-optimization-summary",
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
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
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
        id: "docker--containerization",
        children: "Docker & Containerization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/51-modulith",
          children: "Spring Modulith"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/53-kubernetes",
          children: "Kubernetes"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
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
        href: "../../assets/images/lessons/java/52-docker/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/52-docker/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/52-docker/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/52-docker/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/52-docker/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/52-docker/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Foundational understanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-world application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code-first approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Working examples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid common pitfalls"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Concepts] --> B[Setup/Configuration]\n    B --> C[Implementation]\n    C --> D[Testing]\n    D --> E[Best Practices]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build optimized Docker images for Spring Boot applications using multi-stage builds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between Alpine-based and distroless base images and choose appropriately"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optimize Docker image layer caching with proper instruction ordering and ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".dockerignore"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leverage Spring Boot's layered JAR feature for faster container builds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure Docker Compose for multi-service Spring Boot environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement health checks, liveness probes, and readiness probes in containers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tune JVM flags for optimal performance inside container constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand container orchestration fundamentals and when to use them"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-why-containerize-spring-boot",
      children: "1. Why Containerize Spring Boot?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Test with production-like configurations → dev setups often hide issues that surface under real load."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Start simple. Add complexity only when proven necessary. Premature abstraction creates maintenance burden."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/52-docker.png",
        alt: "Docker & Containerization Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Containers provide consistent, isolated environments for running applications. For Spring Boot developers, containerization solves:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Environment parity"
        }), " → same image runs identically on a dev laptop, CI server, and production"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency encapsulation"
        }), " → JDK version, OS libraries, and application code ship as one unit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource isolation"
        }), " → CPU and memory limits prevent noisy-neighbor problems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scaling"
        }), " → containers are the unit of scaling in Kubernetes, Nomad, and other orchestrators"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A typical Spring Boot Docker workflow:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Developer → Build JAR → Build Image → Push to Registry → Deploy to Orchestrator\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-dockerfile-fundamentals",
      children: "2. Dockerfile Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-naive-dockerfile-dont-do-this",
      children: "2.1 Naive Dockerfile (Don't Do This)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "FROM openjdk:17-jdk-slim\nCOPY target/app.jar app.jar\nEXPOSE 8080\nENTRYPOINT [\"java\", \"-jar\", \"/app.jar\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single stage, no build separation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".dockerignore"
        }), ", so ", (0,jsx_runtime.jsx)(_components.code, {
          children: "target/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".git/"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "node_modules/"
        }), " may be sent to the Docker daemon"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache invalidation on every code change because the COPY layer changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No JVM tuning for containers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-improved-dockerfile",
      children: "2.2 Improved Dockerfile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "FROM eclipse-temurin:17-jre-alpine AS builder\nWORKDIR /build\nCOPY mvnw pom.xml ./\nCOPY .mvn .mvn\nRUN ./mvnw dependency:go-offline -B\nCOPY src src\nRUN ./mvnw package -DskipTests -B\n\nFROM eclipse-temurin:17-jre-alpine\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\nWORKDIR /app\nCOPY --from=builder /build/target/*.jar app.jar\nEXPOSE 8080\nUSER appuser\nENTRYPOINT [\"java\", \\\n  \"-XX:+UseContainerSupport\", \\\n  \"-XX:InitialRAMPercentage=40.0\", \\\n  \"-XX:MaxRAMPercentage=70.0\", \\\n  \"-XX:+UseZGC\", \\\n  \"-jar\", \"/app/app.jar\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Improvements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-stage: Maven builds in the builder stage, only the JAR is copied to the runtime stage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alpine-based JRE: smaller footprint (~50 MB vs ~200 MB for full JDK)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-root user: security best practice"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Container-aware JVM flags"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-base-image-comparison",
      children: "3. Base Image Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-alpine-linux",
      children: "3.1 Alpine Linux"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "FROM eclipse-temurin:17-jre-alpine\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50 MB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Package manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "apk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "libc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "musl (not glibc)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/bin/sh (busybox)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Smallest footprint, fast pulls.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " musl libc can cause rare compatibility issues with native libraries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-distroless",
      children: "3.2 Distroless"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "FROM gcr.io/distroless/java17-debian12\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~60 MB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Package manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "libc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "glibc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Minimal attack surface → no shell, no package manager, no utilities.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Debugging requires ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kubectl exec"
      }), " or ephermeral debug containers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-full-jdk-for-development",
      children: "3.3 Full JDK (For Development)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "FROM eclipse-temurin:17-jdk-alpine\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Only use for development images where you need ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jmap"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jstack"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jcmd"
      }), ", etc."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-choosing-the-right-base",
      children: "3.4 Choosing the Right Base"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Decision matrix:\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n# Production runtime   → eclipse-temurin:17-jre-alpine or distroless/java17\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n# CI/CD builder stage  → eclipse-temurin:17-jdk-alpine\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n# Dev/debug image      → eclipse-temurin:17-jdk\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n# Native image (Graal) → ubuntu:22.04 or distroless/java-base\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-dockerignore",
      children: "4. .dockerignore"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Always exclude unnecessary files from the Docker build context:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerignore",
        children: ".git\n.gitignore\nREADME.md\nLICENSE\ntarget/\nbuild/\nnode_modules/\n*.log\n*.md\n!README.md\n.idea/\n*.iml\n.DS_Store\ndocker-compose*.yml\n*.db\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each excluded file means a smaller build context, faster sends to the Docker daemon, and fewer cache invalidations."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-multi-stage-builds",
      children: "5. Multi-Stage Builds"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-maven-multi-stage",
      children: "5.1 Maven Multi-Stage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# ---- Stage 1: Build ----\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nFROM eclipse-temurin:17-jdk-alpine AS builder\nWORKDIR /build\n\n# Copy only dependency descriptors first → maximizes cache reuse\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nCOPY pom.xml .\nCOPY mvnw .\nCOPY .mvn .mvn\nRUN ./mvnw dependency:go-offline -B\n\n# Copy source and build\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nCOPY src src\nRUN ./mvnw package -DskipTests -B\n\n# ---- Stage 2: Extract Layers ----\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nFROM builder AS layer-extractor\nRUN java -Djarmode=layertools -jar /build/target/*.jar extract --destination /extracted\n\n# ---- Stage 3: Runtime ----\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nFROM eclipse-temurin:17-jre-alpine\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\nWORKDIR /app\n\n# Copy layers in dependency order for cache efficiency\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nCOPY --from=layer-extractor /extracted/dependencies/ ./\nCOPY --from=layer-extractor /extracted/spring-boot-loader/ ./\nCOPY --from=layer-extractor /extracted/snapshot-dependencies/ ./\nCOPY --from=layer-extractor /extracted/application/ ./\n\nEXPOSE 8080\nUSER appuser\nENTRYPOINT [\"java\", \\\n  \"-XX:+UseContainerSupport\", \\\n  \"-XX:InitialRAMPercentage=40.0\", \\\n  \"-XX:MaxRAMPercentage=70.0\", \\\n  \"-jar\", \"/app/app.jar\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-gradle-multi-stage",
      children: "5.2 Gradle Multi-Stage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# ---- Stage 1: Build ----\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nFROM gradle:7.6-jdk17 AS builder\nWORKDIR /build\nCOPY build.gradle settings.gradle gradle.properties ./\nCOPY gradle gradle\nRUN gradle dependencies --no-daemon\nCOPY src src\nRUN gradle bootJar --no-daemon\n\n# ---- Stage 2: Runtime ----\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nFROM eclipse-temurin:17-jre-alpine\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\nWORKDIR /app\nCOPY --from=builder /build/build/libs/*.jar app.jar\nEXPOSE 8080\nUSER appuser\nENTRYPOINT [\"java\", \"-jar\", \"/app/app.jar\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-layer-optimization",
      children: "6. Layer Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-docker-layer-caching-principles",
      children: "6.1 Docker Layer Caching Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each Dockerfile instruction creates a layer. Docker caches each layer and reuses it if nothing changed:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# Layer 1: Base image → cached unless base changes\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nFROM eclipse-temurin:17-jre-alpine\n\n# Layer 2: OS packages → cached unless this line changes\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nRUN apk add --no-cache curl\n\n# Layer 3: Dependencies → cached unless pom.xml changes\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nCOPY pom.xml .\nRUN ./mvnw dependency:go-offline\n\n# Layer 4: Application → INVALIDATED on every src change\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nCOPY src src\nRUN ./mvnw package\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Order instructions from least-frequently-changing to most-frequently-changing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-spring-boot-layered-jars",
      children: "6.2 Spring Boot Layered JARs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-maven-plugin"
      }), " can produce a \"layered\" JAR that separates dependencies, framework classes, and application classes into distinct archive layers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "maven-configuration",
      children: "Maven Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-maven-plugin</artifactId>\n    <configuration>\n        <layers>\n            <enabled>true</enabled>\n        </layers>\n    </configuration>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "gradle-configuration",
      children: "Gradle Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-gradle",
        children: "bootJar {\n    layered {\n        enabled = true\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "extracting-layers",
      children: "Extracting Layers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "java -Djarmode=layertools -jar app.jar list\njava -Djarmode=layertools -jar app.jar extract\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output directory structure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "extracted/\n├── application/           # Your classes and resources\n├── dependencies/          # Third-party JARs\n├── snapshot-dependencies/ # Snapshot dependencies\n└── spring-boot-loader/    # Spring Boot loader classes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-custom-layer-configuration",
      children: "6.3 Custom Layer Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "layers.xml"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/main/resources/"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<layers xmlns=\"http://www.springframework.org/schema/boot/layers\"\n        xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n        xsi:schemaLocation=\"http://www.springframework.org/schema/boot/layers\n                          https://www.springframework.org/schema/boot/layers/layers-3.xsd\">\n    <application>\n        <into layer=\"application\">\n            <include>**/application/**</include>\n        </into>\n        <into layer=\"myapp-config\">\n            <include>**/config/**</include>\n        </into>\n    </application>\n    <dependencies>\n        <into layer=\"dependencies\"/>\n        <into layer=\"snapshot-dependencies\">\n            <include>*:*:SNAPSHOT</include>\n        </into>\n    </dependencies>\n    <layerOrder>\n        <layer>dependencies</layer>\n        <layer>spring-boot-loader</layer>\n        <layer>snapshot-dependencies</layer>\n        <layer>myapp-config</layer>\n        <layer>application</layer>\n    </layerOrder>\n</layers>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-optimized-dockerfile-with-layered-jar",
      children: "6.4 Optimized Dockerfile with Layered JAR"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "FROM eclipse-temurin:17-jdk-alpine AS builder\nWORKDIR /build\nCOPY pom.xml mvnw ./\nCOPY .mvn .mvn\nRUN ./mvnw dependency:go-offline -B\nCOPY src src\nRUN ./mvnw package -DskipTests -B\nRUN java -Djarmode=layertools -jar /build/target/*.jar extract --destination /extracted\n\nFROM eclipse-temurin:17-jre-alpine\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\nWORKDIR /app\n\n# Copy layers in dependency order → maximizes cache reuse\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nCOPY --from=builder /extracted/dependencies/ ./\nCOPY --from=builder /extracted/spring-boot-loader/ ./\nCOPY --from=builder /extracted/snapshot-dependencies/ ./\nCOPY --from=builder /extracted/application/ ./\n\nEXPOSE 8080\nUSER appuser\nENTRYPOINT [\"java\", \"-jar\", \"/app/app.jar\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache behavior:"
      }), " If only application classes change, only the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "application/"
      }), " layer is rebuilt. Dependencies are reused from cache."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-docker-compose",
      children: "7. Docker Compose"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-basic-docker-composeyml",
      children: "7.1 Basic docker-compose.yml"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"3.9\"\n\nservices:\n  app:\n    image: myapp:latest\n    build:\n      context: .\n      dockerfile: Dockerfile\n    ports:\n      - \"8080:8080\"\n    environment:\n      - SPRING_PROFILES_ACTIVE=docker\n      - SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/myapp\n      - SPRING_DATASOURCE_USERNAME=myapp\n      - SPRING_DATASOURCE_PASSWORD=secret\n      - SPRING_REDIS_HOST=redis\n      - SPRING_KAFKA_BOOTSTRAP_SERVERS=kafka:9092\n    depends_on:\n      db:\n        condition: service_healthy\n      redis:\n        condition: service_started\n    healthcheck:\n      test: [\"CMD\", \"curl\", \"-f\", \"http://localhost:8080/actuator/health\"]\n      interval: 15s\n      timeout: 5s\n      retries: 3\n      start_period: 30s\n    deploy:\n      resources:\n        limits:\n          cpus: \"1.0\"\n          memory: \"512M\"\n        reservations:\n          cpus: \"0.5\"\n          memory: \"256M\"\n\n  db:\n    image: postgres:15-alpine\n    environment:\n      - POSTGRES_DB=myapp\n      - POSTGRES_USER=myapp\n      - POSTGRES_PASSWORD=secret\n    ports:\n      - \"5432:5432\"\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U myapp\"]\n      interval: 10s\n      timeout: 5s\n      retries: 5\n    deploy:\n      resources:\n        limits:\n          memory: \"256M\"\n\n  redis:\n    image: redis:7-alpine\n    ports:\n      - \"6379:6379\"\n    healthcheck:\n      test: [\"CMD\", \"redis-cli\", \"ping\"]\n      interval: 10s\n      timeout: 3s\n      retries: 5\n\n  kafka:\n    image: confluentinc/cp-kafka:7.5.0\n    depends_on:\n      - zookeeper\n    environment:\n      KAFKA_BROKER_ID: 1\n      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181\n      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092\n      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1\n    ports:\n      - \"9092:9092\"\n    deploy:\n      resources:\n        limits:\n          memory: \"512M\"\n\n  zookeeper:\n    image: confluentinc/cp-zookeeper:7.5.0\n    environment:\n      ZOOKEEPER_CLIENT_PORT: 2181\n      ZOOKEEPER_TICK_TIME: 2000\n    deploy:\n      resources:\n        limits:\n          memory: \"256M\"\n\nvolumes:\n  pgdata:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-docker-compose-with-multiple-profiles",
      children: "7.2 Docker Compose with Multiple Profiles"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# docker-compose.override.yml → loaded automatically for dev overrides\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nversion: \"3.9\"\nservices:\n  app:\n    ports:\n      - \"5005:5005\"  # JMX debug port\n    environment:\n      - JAVA_TOOL_OPTIONS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005\n      - SPRING_PROFILES_ACTIVE=dev,docker\n    volumes:\n      - ./target/app.jar:/app/app.jar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# docker-compose.prod.yml → for production-like environments\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nversion: \"3.9\"\nservices:\n  app:\n    restart: always\n    logging:\n      driver: \"json-file\"\n      options:\n        max-size: \"10m\"\n        max-file: \"3\"\n    deploy:\n      replicas: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Dev\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\ndocker compose up -d\n\n# Production-like\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\ndocker compose -f docker-compose.yml -f docker-compose.prod.yml up -d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-spring-boot-configuration-for-docker",
      children: "7.3 Spring Boot Configuration for Docker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application-docker.yml\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nserver:\n  port: 8080\n\nspring:\n  datasource:\n    hikari:\n      maximum-pool-size: 5\n      minimum-idle: 2\n      connection-timeout: 30000\n      idle-timeout: 600000\n\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: health,prometheus,info,metrics\n  endpoint:\n    health:\n      probes:\n        enabled: true\n      show-details: always\n  health:\n    livenessstate:\n      enabled: true\n    readinessstate:\n      enabled: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-health-checks",
      children: "8. Health Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-dockerfile-healthcheck",
      children: "8.1 Dockerfile HEALTHCHECK"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "FROM eclipse-temurin:17-jre-alpine\nRUN apk add --no-cache curl\nCOPY target/app.jar app.jar\nHEALTHCHECK --interval=15s --timeout=5s --start-period=40s --retries=3 \\\n  CMD curl -f http://localhost:8080/actuator/health || exit 1\nENTRYPOINT [\"java\", \"-jar\", \"/app/app.jar\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-spring-boot-actuator-health",
      children: "8.2 Spring Boot Actuator Health"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoint:\n    health:\n      probes:\n        enabled: true\n      show-details: when-authorized\n  health:\n    livenessstate:\n      enabled: true\n    readinessstate:\n      enabled: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.health;\n\nimport org.springframework.boot.actuate.health.Health;\nimport org.springframework.boot.actuate.health.HealthIndicator;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class DatabaseHealthIndicator implements HealthIndicator {\n\n    private final DataSource dataSource;\n\n    public DatabaseHealthIndicator(DataSource dataSource) {\n        this.dataSource = dataSource;\n    }\n\n    @Override\n    public Health health() {\n        try (var connection = dataSource.getConnection()) {\n            if (connection.isValid(1000)) {\n                return Health.up()\n                    .withDetail(\"database\", \"PostgreSQL\")\n                    .withDetail(\"validationQuery\", \"SELECT 1\")\n                    .build();\n            }\n            return Health.down()\n                .withDetail(\"reason\", \"Connection validation returned false\")\n                .build();\n        } catch (Exception e) {\n            return Health.down(e)\n                .withDetail(\"reason\", e.getMessage())\n                .build();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-liveness-and-readiness-probes",
      children: "8.3 Liveness and Readiness Probes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot maps the Kubernetes probe endpoints automatically when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "probes.enabled=true"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Actuator Endpoint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Maps To"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/health/liveness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Liveness probe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/health/readiness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Readiness probe"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.health;\n\nimport org.springframework.boot.actuate.availability.LivenessStateHealthIndicator;\nimport org.springframework.boot.actuate.availability.ReadinessStateHealthIndicator;\nimport org.springframework.boot.availability.ApplicationAvailability;\nimport org.springframework.boot.availability.AvailabilityChangeEvent;\nimport org.springframework.boot.availability.LivenessState;\nimport org.springframework.boot.availability.ReadinessState;\nimport org.springframework.context.event.EventListener;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class CustomAvailabilityManager {\n\n    private final ApplicationAvailability availability;\n\n    public CustomAvailabilityManager(ApplicationAvailability availability) {\n        this.availability = availability;\n    }\n\n    @EventListener\n    public void onLivenessEvent(AvailabilityChangeEvent<LivenessState> event) {\n        System.out.println(\"Liveness state changed to: \" + event.getState());\n    }\n\n    @EventListener\n    public void onReadinessEvent(AvailabilityChangeEvent<ReadinessState> event) {\n        System.out.println(\"Readiness state changed to: \" + event.getState());\n    }\n\n    public void reportLivenessBroken() {\n        AvailabilityChangeEvent.publish(\n            new AvailabilityChangeEvent<>(this, LivenessState.BROKEN)\n        );\n    }\n\n    public void reportReady() {\n        AvailabilityChangeEvent.publish(\n            new AvailabilityChangeEvent<>(this, ReadinessState.ACCEPTING_TRAFFIC)\n        );\n    }\n\n    public void reportNotReady() {\n        AvailabilityChangeEvent.publish(\n            new AvailabilityChangeEvent<>(this, ReadinessState.REFUSING_TRAFFIC)\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-custom-liveness-and-readiness-indicators",
      children: "8.4 Custom Liveness and Readiness Indicators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo.health;\n\nimport org.springframework.boot.actuate.health.Health;\nimport org.springframework.boot.actuate.health.HealthIndicator;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class ExternalServiceHealthIndicator implements HealthIndicator {\n\n    private final RestTemplate restTemplate;\n\n    public ExternalServiceHealthIndicator(RestTemplate restTemplate) {\n        this.restTemplate = restTemplate;\n    }\n\n    @Override\n    public Health health() {\n        try {\n            var response = restTemplate.getForEntity(\n                \"https://api.external.com/health\",\n                String.class\n            );\n            if (response.getStatusCode().is2xxSuccessful()) {\n                return Health.up()\n                    .withDetail(\"service\", \"External API\")\n                    .withDetail(\"statusCode\", response.getStatusCodeValue())\n                    .build();\n            }\n            return Health.down()\n                .withDetail(\"service\", \"External API\")\n                .withDetail(\"statusCode\", response.getStatusCodeValue())\n                .build();\n        } catch (Exception e) {\n            return Health.down(e)\n                .withDetail(\"service\", \"External API\")\n                .build();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-jvm-performance-in-containers",
      children: "9. JVM Performance in Containers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-container-aware-jvm-flags",
      children: "9.1 Container-Aware JVM Flags"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "ENTRYPOINT [\"java\", \\\n  \"-XX:+UseContainerSupport\", \\\n  \"-XX:InitialRAMPercentage=40.0\", \\\n  \"-XX:MaxRAMPercentage=70.0\", \\\n  \"-XX:+UseZGC\", \\\n  \"-XX:MaxMetaspaceSize=128m\", \\\n  \"-XX:+ExitOnOutOfMemoryError\", \\\n  \"-XX:+HeapDumpOnOutOfMemoryError\", \\\n  \"-XX:HeapDumpPath=/tmp/heapdump.hprof\", \\\n  \"-XX:ErrorFile=/tmp/jvm_error.log\", \\\n  \"-Djava.security.egd=file:/dev/./urandom\", \\\n  \"-jar\", \"/app/app.jar\"]\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-XX:+UseContainerSupport"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables container-aware memory detection (default in JDK 10+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-XX:InitialRAMPercentage=40.0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with 40% of container memory as heap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-XX:MaxRAMPercentage=70.0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cap heap at 70% of container memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-XX:+UseZGC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ultra-low-latency garbage collector (JDK 15+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-XX:+ExitOnOutOfMemoryError"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit JVM on OOM for container restart"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-XX:+HeapDumpOnOutOfMemoryError"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture heap dump for analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-Djava.security.egd=file:/dev/./urandom"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster secure random (non-blocking)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-cpu-limits",
      children: "9.2 CPU Limits"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Docker Compose\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\ndeploy:\n  resources:\n    limits:\n      cpus: \"2.0\"\n    reservations:\n      cpus: \"1.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Docker run\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\ndocker run --cpus=2 --memory=512m myapp:latest\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The JVM detects CPU limits via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/sys/fs/cgroup/cpu"
      }), " and adjusts the parallel GC thread count automatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-memory-limits",
      children: "9.3 Memory Limits"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "deploy:\n  resources:\n    limits:\n      memory: \"512M\"\n    reservations:\n      memory: \"256M\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory budgeting guide for Spring Boot:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Container Memory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heap (70%)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Metaspace"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Off-Heap"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OS/Other"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "256 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~180 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~32 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~24 MB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "512 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~358 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~64 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~40 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50 MB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~716 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~128 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~80 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100 MB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.4 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~128 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~160 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~300 MB"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-gc-tuning-for-containers",
      children: "9.4 GC Tuning for Containers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# Low-latency workloads (p95 < 10ms)\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nENTRYPOINT [\"java\", \\\n  \"-XX:+UseZGC\", \\\n  \"-XX:MaxRAMPercentage=70.0\", \\\n  \"-XX:ConcGCThreads=2\", \\\n  \"-jar\", \"/app/app.jar\"]\n\n# Throughput workloads\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nENTRYPOINT [\"java\", \\\n  \"-XX:+UseParallelGC\", \\\n  \"-XX:MaxRAMPercentage=70.0\", \\\n  \"-XX:ParallelGCThreads=2\", \\\n  \"-jar\", \"/app/app.jar\"]\n\n# Small containers (< 256 MB)\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nENTRYPOINT [\"java\", \\\n  \"-XX:+UseSerialGC\", \\\n  \"-XX:MaxRAMPercentage=70.0\", \\\n  \"-jar\", \"/app/app.jar\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-cds-class-data-sharing-for-faster-startup",
      children: "9.5 CDS (Class Data Sharing) for Faster Startup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "FROM eclipse-temurin:17-jdk-alpine AS builder\nWORKDIR /build\nCOPY pom.xml mvnw ./\nCOPY .mvn .mvn\nRUN ./mvnw dependency:go-offline -B\nCOPY src src\nRUN ./mvnw package -DskipTests -B\n\nRUN java -XX:DumpLoadedClassList=/build/classes.lst -jar /build/target/*.jar --list-classes\nRUN java -Xshare:dump -XX:SharedArchiveFile=/build/application.jsa \\\n    -XX:SharedClassListFile=/build/classes.lst \\\n    --class-path /build/target/*.jar\n\nFROM eclipse-temurin:17-jre-alpine\nWORKDIR /app\nCOPY --from=builder /build/target/*.jar app.jar\nCOPY --from=builder /build/application.jsa application.jsa\nEXPOSE 8080\nENTRYPOINT [\"java\", \\\n  \"-XX:SharedArchiveFile=/app/application.jsa\", \\\n  \"-Xshare:auto\", \\\n  \"-jar\", \"/app/app.jar\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "96-spring-aot-and-graalvm-native-image",
      children: "9.6 Spring AOT and GraalVM Native Image"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# ---- Stage 1: Build native image ----\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nFROM ghcr.io/graalvm/graalvm-ce:latest AS native-build\nWORKDIR /build\nCOPY pom.xml mvnw ./\nCOPY .mvn .mvn\nRUN ./mvnw dependency:go-offline -B\n\n# Add Spring AOT plugin\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nCOPY pom.xml .\nCOPY src src\nRUN ./mvnw -Pnative native:compile -DskipTests -B\n\n# ---- Stage 2: Runtime for native image ----\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nFROM ubuntu:22.04\nRUN apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/*\nRUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser\nWORKDIR /app\nCOPY --from=native-build /build/target/myapp app\nUSER appuser\nEXPOSE 8080\nENTRYPOINT [\"/app/myapp\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-docker-compose-production-patterns",
      children: "10. Docker Compose Production Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-full-production-compose-file",
      children: "10.1 Full Production Compose File"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"3.9\"\n\nx-logging: &logging\n  driver: \"json-file\"\n  options:\n    max-size: \"10m\"\n    max-file: \"3\"\n\nx-healthcheck: &healthcheck\n  interval: 15s\n  timeout: 5s\n  retries: 3\n  start_period: 30s\n\nservices:\n  app:\n    image: ${REGISTRY:-localhost}/myapp:${TAG:-latest}\n    build:\n      context: .\n      dockerfile: Dockerfile\n    ports:\n      - \"${PORT:-8080}:8080\"\n    env_file:\n      - .env.${ENVIRONMENT:-dev}\n    environment:\n      - SPRING_PROFILES_ACTIVE=${ENVIRONMENT:-dev},docker\n      - SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/myapp\n      - SPRING_DATASOURCE_PASSWORD=${DB_PASSWORD}\n      - SPRING_REDIS_HOST=redis\n      - SPRING_KAFKA_BOOTSTRAP_SERVERS=kafka:9092\n      - SPRING_KAFKA_PROPERTIES_SASL_JAAS_CONFIG=${KAFKA_JAAS_CONFIG}\n    depends_on:\n      db:\n        condition: service_healthy\n      redis:\n        condition: service_healthy\n      kafka:\n        condition: service_started\n    healthcheck:\n      <<: *healthcheck\n      test: [\"CMD\", \"curl\", \"-f\", \"http://localhost:8080/actuator/health/liveness\"]\n    logging: *logging\n    restart: unless-stopped\n    deploy:\n      resources:\n        limits:\n          cpus: \"${CPU_LIMIT:-2}\"\n          memory: \"${MEM_LIMIT:-512M}\"\n\n  db:\n    image: postgres:15-alpine\n    environment:\n      - POSTGRES_DB=myapp\n      - POSTGRES_USER=myapp\n      - POSTGRES_PASSWORD=${DB_PASSWORD}\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n      - ./init-db:/docker-entrypoint-initdb.d\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U myapp -d myapp\"]\n      interval: 10s\n      timeout: 3s\n      retries: 5\n    logging: *logging\n    restart: unless-stopped\n    deploy:\n      resources:\n        limits:\n          memory: \"256M\"\n\n  redis:\n    image: redis:7-alpine\n    volumes:\n      - redis-data:/data\n    healthcheck:\n      test: [\"CMD\", \"redis-cli\", \"ping\"]\n      interval: 10s\n      timeout: 3s\n      retries: 5\n    logging: *logging\n    restart: unless-stopped\n\n  kafka:\n    image: confluentinc/cp-kafka:7.5.0\n    depends_on:\n      - zookeeper\n    environment:\n      KAFKA_BROKER_ID: 1\n      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181\n      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092\n      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT\n      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT\n      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1\n      KAFKA_LOG_RETENTION_HOURS: 168\n      KAFKA_AUTO_CREATE_TOPICS_ENABLE: \"true\"\n    volumes:\n      - kafka-data:/var/lib/kafka/data\n    healthcheck:\n      test: [\"CMD\", \"kafka-topics\", \"--bootstrap-server\", \"localhost:9092\", \"--list\"]\n      interval: 30s\n      timeout: 10s\n      retries: 3\n    logging: *logging\n    restart: unless-stopped\n\n  zookeeper:\n    image: confluentinc/cp-zookeeper:7.5.0\n    environment:\n      ZOOKEEPER_CLIENT_PORT: 2181\n      ZOOKEEPER_TICK_TIME: 2000\n      ZOOKEEPER_SYNC_LIMIT: 2\n    volumes:\n      - zookeeper-data:/var/lib/zookeeper/data\n    logging: *logging\n\n  prometheus:\n    image: prom/prometheus:v2.48.0\n    volumes:\n      - ./monitoring/prometheus.yml:/etc/prometheus/prometheus.yml\n      - prometheus-data:/prometheus\n    command:\n      - \"--config.file=/etc/prometheus/prometheus.yml\"\n      - \"--storage.tsdb.path=/prometheus\"\n      - \"--web.console.libraries=/etc/prometheus/console_libraries\"\n      - \"--web.console.templates=/etc/prometheus/consoles\"\n      - \"--web.enable-lifecycle\"\n    ports:\n      - \"9090:9090\"\n    logging: *logging\n    restart: unless-stopped\n\n  grafana:\n    image: grafana/grafana:10.2.0\n    volumes:\n      - ./monitoring/grafana-datasources.yml:/etc/grafana/provisioning/datasources/datasources.yml\n      - ./monitoring/grafana-dashboards:/etc/grafana/provisioning/dashboards\n      - grafana-data:/var/lib/grafana\n    environment:\n      - GF_SECURITY_ADMIN_PASSWORD=${GRAFANA_PASSWORD:-admin}\n      - GF_INSTALL_PLUGINS=grafana-piechart-panel\n    ports:\n      - \"3000:3000\"\n    logging: *logging\n    restart: unless-stopped\n\nvolumes:\n  pgdata:\n  redis-data:\n  kafka-data:\n  zookeeper-data:\n  prometheus-data:\n  grafana-data:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-environment-file",
      children: "10.2 Environment File"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# .env.dev\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nENVIRONMENT=dev\nPORT=8080\nDB_PASSWORD=devpassword\nCPU_LIMIT=2\nMEM_LIMIT=512M\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# .env.prod\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nENVIRONMENT=prod\nPORT=8080\nDB_PASSWORD=secure-password-here\nCPU_LIMIT=4\nMEM_LIMIT=2G\nGRAFANA_PASSWORD=grafana-admin-password\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-container-orchestration-concepts",
      children: "11. Container Orchestration Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-why-orchestration",
      children: "11.1 Why Orchestration?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Running ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker compose up"
      }), " works for a single host, but production needs:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Docker Alone"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Orchestrator"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-host networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic overlay networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual port mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in DNS-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load balancing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service mesh / proxy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HPA / metrics server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-healing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--restart"
            }), " only"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Health checks + rescheduling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rolling updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controlled rollouts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Env vars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted secrets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Config management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Env files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ConfigMaps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage orchestration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volume mounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSI / persistent volumes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-orchestration-options",
      children: "11.2 Orchestration Options"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Docker Swarm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in Docker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple deployments, small teams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kubernetes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full orchestrator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex microservices, enterprise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nomad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed workloads, simplicity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AWS ECS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS-native, easy setup"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-kubernetes-in-one-slide",
      children: "11.3 Kubernetes in One Slide"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────┐\n│                    Cluster                        │\n│  ┌──────────┐  ┌──────────┐  ┌──────────┐       │\n│  │  Node 1  │  │  Node 2  │  │  Node 3  │       │\n│  │ ┌──────┐ │  │ ┌──────┐ │  │ ┌──────┐ │       │\n│  │ │ Pod  │ │  │ │ Pod  │ │  │ │ Pod  │ │       │\n│  │ │ App  │ │  │ │ App  │ │  │ │ App  │ │       │\n│  │ └──────┘ │  │ └──────┘ │  │ └──────┘ │       │\n│  └──────────┘  └──────────┘  └──────────┘       │\n└─────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-docker-compose-vs-kubernetes-mapping",
      children: "11.4 Docker Compose vs Kubernetes Mapping"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Docker Compose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kubernetes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service + Deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pod"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ConfigMap + Secret"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Volume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PersistentVolumeClaim"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service + Ingress"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Healthcheck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probes (liveness, readiness, startup)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "depends_on"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Init containers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deploy.resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resource requests/limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "restart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReplicaSet controller"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "docker-compose.yml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Helm chart / Kustomize"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-migrating-from-docker-compose-to-kubernetes",
      children: "11.5 Migrating from Docker Compose to Kubernetes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# 1. Start with Compose\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\ndocker compose up -d\n\n# 2. Convert using kompose\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nkompose convert -f docker-compose.yml -o k8s-manifests/\n\n# 3. Manually refine the generated manifests\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n#    - Add liveness/readiness probes\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n#    - Configure resource requests/limits\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n#    - Set up ConfigMaps and Secrets\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n#    - Add HorizontalPodAutoscaler\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n\n# 4. Deploy to Kubernetes\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nkubectl apply -f k8s-manifests/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-building-and-tagging-images",
      children: "12. Building and Tagging Images"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-build-script",
      children: "12.1 Build Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# build.sh → Build Docker images with proper tags\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n\nset -euo pipefail\n\nAPP_NAME=\"myapp\"\nREGISTRY=\"${REGISTRY:-ghcr.io/myorg}\"\nCOMMIT_SHA=\"${GITHUB_SHA:-$(git rev-parse --short HEAD)}\"\nBUILD_DATE=$(date -u +\"%Y-%m-%dT%H:%M:%SZ\")\nVERSION=\"${VERSION:-1.0.0}\"\n\necho \"Building ${APP_NAME}:${VERSION} (sha: ${COMMIT_SHA})\"\n\ndocker build \\\n  --build-arg BUILD_DATE=\"${BUILD_DATE}\" \\\n  --build-arg VERSION=\"${VERSION}\" \\\n  --build-arg COMMIT_SHA=\"${COMMIT_SHA}\" \\\n  -t \"${APP_NAME}:${VERSION}\" \\\n  -t \"${APP_NAME}:latest\" \\\n  -t \"${REGISTRY}/${APP_NAME}:${VERSION}\" \\\n  -t \"${REGISTRY}/${APP_NAME}:${COMMIT_SHA}\" \\\n  -t \"${REGISTRY}/${APP_NAME}:latest\" \\\n  -f Dockerfile \\\n  .\n\necho \"Build complete. Pushing...\"\n\ndocker push \"${REGISTRY}/${APP_NAME}:${VERSION}\"\ndocker push \"${REGISTRY}/${APP_NAME}:${COMMIT_SHA}\"\ndocker push \"${REGISTRY}/${APP_NAME}:latest\"\n\necho \"Done.\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-dockerfile-with-build-args",
      children: "12.2 Dockerfile with Build Args"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "FROM eclipse-temurin:17-jre-alpine\n\nARG BUILD_DATE\nARG VERSION\nARG COMMIT_SHA\n\nLABEL org.opencontainers.image.created=\"${BUILD_DATE}\"\nLABEL org.opencontainers.image.version=\"${VERSION}\"\nLABEL org.opencontainers.image.revision=\"${COMMIT_SHA}\"\nLABEL org.opencontainers.image.title=\"My Spring Boot Application\"\nLABEL org.opencontainers.image.description=\"Production Spring Boot service\"\nLABEL org.opencontainers.image.vendor=\"My Organization\"\n\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\n\nWORKDIR /app\nCOPY target/app.jar app.jar\n\nEXPOSE 8080\nUSER appuser\n\nENTRYPOINT [\"java\", \\\n  \"-XX:+UseContainerSupport\", \\\n  \"-XX:InitialRAMPercentage=40.0\", \\\n  \"-XX:MaxRAMPercentage=70.0\", \\\n  \"-XX:+UseZGC\", \\\n  \"-jar\", \"/app/app.jar\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-security-best-practices",
      children: "13. Security Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# 1. Use a non-root user\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\nUSER appuser\n\n# 2. Remove unnecessary tools\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n# (Alpine is already minimal, distroless has no shell)\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n\n# 3. Don't run as PID 1 → use tini for signal handling\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\nRUN apk add --no-cache tini\nENTRYPOINT [\"/sbin/tini\", \"--\"]\nCMD [\"java\", \"-jar\", \"/app/app.jar\"]\n\n# 4. Read-only root filesystem\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n# In Kubernetes: securityContext.readOnlyRootFilesystem: true\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n\n# 5. Drop capabilities\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n# In Kubernetes: securityContext.capabilities.drop: [\"ALL\"]\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n\n# 6. Use secrets, not environment variables\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n# In Docker Compose: secrets:\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n# In Kubernetes: secrets:\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n\n# 7. Scan images for vulnerabilities\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n# Trivy: trivy image myapp:latest\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n# Snyk: snyk container test myapp:latest\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n# Grype: grype myapp:latest\n\n> **Previous:** [Spring Modulith](./51-modulith.md) | **Next:** [Kubernetes](./53-kubernetes.md)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-image-size-optimization-summary",
      children: "14. Image Size Optimization Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size Reduction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use JRE instead of JDK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~150 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Alpine instead of Debian"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use distroless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~40 MB (plus no shell)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-stage build"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~200 MB (avoids JDK in runtime)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Layer optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build speed (not size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Boot layered JAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build speed (not size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GraalVM native image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~200-300 MB → ~50 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDS archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Startup speed (not size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Approach A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
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
            children: "Key Commands/APIs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Setup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required dependencies and configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify versions match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core code patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test edge cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Testing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cover success and failure paths"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern C"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Small application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-throughput API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary benefit of this chapter's main topic?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Improved performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Better developer productivity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Enhanced reliability"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) All of the above"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Enhanced reliability.** While all are benefits, the core value proposition is reliability.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which approach is recommended for production deployments?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The simplest solution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The most feature-rich option"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The one with best operational characteristics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Whatever the team knows best"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) The one with best operational characteristics.** Production choices should prioritize observability, maintainability, and operability.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When should you consider this pattern?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) For every project regardless of size"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) When complexity justifies the overhead"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Only in legacy systems"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Never → it is outdated"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) When complexity justifies the overhead.** Apply patterns when the problem complexity warrants the additional abstraction.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker containers provide consistent, isolated environments for Spring Boot applications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-stage builds separate build dependencies from runtime artifacts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alpine and distroless base images minimize attack surface and image size"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".dockerignore"
        }), " prevents unnecessary files from reaching the Docker daemon"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spring Boot layered JARs enable efficient Docker layer caching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker Compose orchestrates multi-service environments with health checks"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["JVM flags (", (0,jsx_runtime.jsx)(_components.code, {
          children: "UseContainerSupport"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "InitialRAMPercentage"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MaxRAMPercentage"
        }), ") must be tuned for containers"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Container orchestration (Kubernetes, Swarm, Nomad) adds self-healing, scaling, and advanced deployment strategies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Basic Dockerfile:"
          }), " Write a Dockerfile for a Spring Boot app using a single-stage build with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "eclipse-temurin:17-jre-alpine"
          }), ". Build and run it."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-stage optimization:"
          }), " Convert the Dockerfile to a multi-stage build. Verify the runtime image contains only the JRE and the application JAR."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Layered JAR:"
          }), " Enable layered JAR packaging in your ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pom.xml"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "build.gradle"
          }), ". Extract and inspect the layers. Write a Dockerfile that copies each layer separately."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Docker Compose:"
          }), " Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docker-compose.yml"
          }), " with your Spring Boot app, PostgreSQL, and Redis. Add health checks for all services."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Health checks:"
          }), " Implement a custom ", (0,jsx_runtime.jsx)(_components.code, {
            children: "HealthIndicator"
          }), " that checks an external API dependency. Add liveness and readiness probe endpoints."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "JVM tuning:"
          }), " Run your container with 256 MB, 512 MB, and 1 GB memory limits. Observe heap usage with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-Xlog:gc*"
          }), " and adjust ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MaxRAMPercentage"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Security audit:"
          }), " Run ", (0,jsx_runtime.jsx)(_components.code, {
            children: "trivy"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "grype"
          }), " on your production image. Fix any CRITICAL or HIGH vulnerabilities."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "GraalVM native:"
          }), " If you have GraalVM installed, build a native image of your Spring Boot app. Compare startup time and image size with the JVM version."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Docker Compose secrets:"
          }), " Implement a secret for your database password using Docker Compose secrets instead of environment variables."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Full pipeline:"
          }), " Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "build.sh"
          }), " script that builds, tags, and pushes your image to a registry. Incorporate all best practices from this chapter."]
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