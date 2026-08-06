"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[49176],{

/***/ 64277
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_12_configuration_md_ae1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-12-configuration-md-ae1.json
const site_docs_courses_java_12_configuration_md_ae1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/12-configuration","title":"Application Properties & Configuration","description":"Previous Actuator, DevTools & Monitoring","source":"@site/docs/courses/java/12-configuration.md","sourceDirName":"courses/java","slug":"/java/12-configuration","permalink":"/ai-engineering-journey/java/12-configuration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-configuration","slug":"/java/12-configuration","title":"Application Properties & Configuration","sidebar_label":"Application Properties & Configuration","sidebar_position":12},"sidebar":"coursesSidebar","previous":{"title":"Auto-Configuration & Starters","permalink":"/ai-engineering-journey/java/11-auto-configuration"},"next":{"title":"Actuator, DevTools & Monitoring","permalink":"/ai-engineering-journey/java/13-actuator-devtools"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/12-configuration.md


const frontMatter = {
	id: '12-configuration',
	slug: '/java/12-configuration',
	title: 'Application Properties & Configuration',
	sidebar_label: 'Application Properties & Configuration',
	sidebar_position: 12
};
const contentTitle = 'Application Properties & Configuration';

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
  "value": "1. Theory",
  "id": "1-theory",
  "level": 2
}, {
  "value": "1.1 The Philosophy of Externalized Configuration",
  "id": "11-the-philosophy-of-externalized-configuration",
  "level": 3
}, {
  "value": "1.2 Configuration Priority Order",
  "id": "12-configuration-priority-order",
  "level": 3
}, {
  "value": "1.3 application.properties vs application.yml",
  "id": "13-applicationproperties-vs-applicationyml",
  "level": 3
}, {
  "value": "1.4 Type-Safe Configuration with @ConfigurationProperties",
  "id": "14-type-safe-configuration-with-configurationproperties",
  "level": 3
}, {
  "value": "1.4.1 Basic Binding",
  "id": "141-basic-binding",
  "level": 4
}, {
  "value": "1.4.2 Enabling @ConfigurationProperties with @EnableConfigurationProperties",
  "id": "142-enabling-configurationproperties-with-enableconfigurationproperties",
  "level": 4
}, {
  "value": "1.4.3 Constructor Binding (Immutable Properties)",
  "id": "143-constructor-binding-immutable-properties",
  "level": 4
}, {
  "value": "1.4.4 Nested Properties",
  "id": "144-nested-properties",
  "level": 4
}, {
  "value": "1.4.5 Lists and Maps in @ConfigurationProperties",
  "id": "145-lists-and-maps-in-configurationproperties",
  "level": 4
}, {
  "value": "1.5 @Value Annotation",
  "id": "15-value-annotation",
  "level": 3
}, {
  "value": "1.6 @PropertySource",
  "id": "16-propertysource",
  "level": 3
}, {
  "value": "1.7 Profiles",
  "id": "17-profiles",
  "level": 3
}, {
  "value": "1.7.1 Profile-Specific Files",
  "id": "171-profile-specific-files",
  "level": 4
}, {
  "value": "1.7.2 YAML Multi-Document Profiles",
  "id": "172-yaml-multi-document-profiles",
  "level": 4
}, {
  "value": "1.7.3 Including and Excluding Profiles",
  "id": "173-including-and-excluding-profiles",
  "level": 4
}, {
  "value": "1.7.4 Programmatic Profile Configuration",
  "id": "174-programmatic-profile-configuration",
  "level": 4
}, {
  "value": "1.7.5 @Profile Annotation",
  "id": "175-profile-annotation",
  "level": 4
}, {
  "value": "1.8 Relaxed Binding",
  "id": "18-relaxed-binding",
  "level": 3
}, {
  "value": "Binding to Enums",
  "id": "binding-to-enums",
  "level": 4
}, {
  "value": "1.9 Random Values",
  "id": "19-random-values",
  "level": 3
}, {
  "value": "1.10 External Configuration Sources",
  "id": "110-external-configuration-sources",
  "level": 3
}, {
  "value": "1.10.1 Command-Line Arguments",
  "id": "1101-command-line-arguments",
  "level": 4
}, {
  "value": "1.10.2 Environment Variables",
  "id": "1102-environment-variables",
  "level": 4
}, {
  "value": "1.10.3 JNDI Properties",
  "id": "1103-jndi-properties",
  "level": 4
}, {
  "value": "1.10.4 SPRING_APPLICATION_JSON",
  "id": "1104-spring_application_json",
  "level": 4
}, {
  "value": "1.11 Config Data Locations and Ordering",
  "id": "111-config-data-locations-and-ordering",
  "level": 3
}, {
  "value": "1.11.1 Standard Search Locations",
  "id": "1111-standard-search-locations",
  "level": 4
}, {
  "value": "1.11.2 spring.config.name",
  "id": "1112-springconfigname",
  "level": 4
}, {
  "value": "1.11.3 spring.config.location",
  "id": "1113-springconfiglocation",
  "level": 4
}, {
  "value": "1.11.4 spring.config.additional-location",
  "id": "1114-springconfigadditional-location",
  "level": 4
}, {
  "value": "1.11.5 spring.config.import",
  "id": "1115-springconfigimport",
  "level": 4
}, {
  "value": "1.11.6 Import Ordering",
  "id": "1116-import-ordering",
  "level": 4
}, {
  "value": "1.12 Config Tree (Kubernetes)",
  "id": "112-config-tree-kubernetes",
  "level": 3
}, {
  "value": "1.13 Validation of Configuration Properties",
  "id": "113-validation-of-configuration-properties",
  "level": 3
}, {
  "value": "1.14 Duration and DataSize Conversion",
  "id": "114-duration-and-datasize-conversion",
  "level": 3
}, {
  "value": "Duration Conversion",
  "id": "duration-conversion",
  "level": 4
}, {
  "value": "DataSize Conversion",
  "id": "datasize-conversion",
  "level": 4
}, {
  "value": "1.15 Configuration Metadata",
  "id": "115-configuration-metadata",
  "level": 3
}, {
  "value": "1.16 Complete Application Configuration Example",
  "id": "116-complete-application-configuration-example",
  "level": 3
}, {
  "value": "1.17 Programmatic Environment Access",
  "id": "117-programmatic-environment-access",
  "level": 3
}, {
  "value": "1.18 Property Placeholders",
  "id": "118-property-placeholders",
  "level": 3
}, {
  "value": "1.19 Encryption of Configuration Values",
  "id": "119-encryption-of-configuration-values",
  "level": 3
}, {
  "value": "1.20 Lazy Binding with @ConfigurationPropertiesScan",
  "id": "120-lazy-binding-with-configurationpropertiesscan",
  "level": 3
}, {
  "value": "1.21 Custom PropertySource",
  "id": "121-custom-propertysource",
  "level": 3
}, {
  "value": "1.22 Testing with Custom Configuration",
  "id": "122-testing-with-custom-configuration",
  "level": 3
}, {
  "value": "1.23 Building Config Hierarchy in Large Projects",
  "id": "123-building-config-hierarchy-in-large-projects",
  "level": 3
}, {
  "value": "1.24 Spring Cloud Config Integration",
  "id": "124-spring-cloud-config-integration",
  "level": 3
}, {
  "value": "1.25 Best Practices Summary",
  "id": "125-best-practices-summary",
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
  "value": "Exercise 1: Type-Safe Properties",
  "id": "exercise-1-type-safe-properties",
  "level": 3
}, {
  "value": "Exercise 2: Profile-Based Configuration",
  "id": "exercise-2-profile-based-configuration",
  "level": 3
}, {
  "value": "Exercise 3: Config Tree for Kubernetes",
  "id": "exercise-3-config-tree-for-kubernetes",
  "level": 3
}, {
  "value": "Exercise 4: Property Validation",
  "id": "exercise-4-property-validation",
  "level": 3
}, {
  "value": "Exercise 5: Multi-Source Configuration",
  "id": "exercise-5-multi-source-configuration",
  "level": 3
}, {
  "value": "Exercise 6: Duration and DataSize",
  "id": "exercise-6-duration-and-datasize",
  "level": 3
}, {
  "value": "Exercise 7: Random Values",
  "id": "exercise-7-random-values",
  "level": 3
}, {
  "value": "Exercise 8: Config Location Ordering",
  "id": "exercise-8-config-location-ordering",
  "level": 3
}, {
  "value": "Exercise 9: External Configuration",
  "id": "exercise-9-external-configuration",
  "level": 3
}, {
  "value": "Exercise 10: Spring Config Import",
  "id": "exercise-10-spring-config-import",
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
        id: "application-properties--configuration",
        children: "Application Properties & Configuration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/11-auto-configuration",
          children: "Auto-Configuration & Starters"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/13-actuator-devtools",
          children: "Actuator, DevTools & Monitoring"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
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
        href: "../../assets/images/lessons/java/12-configuration/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/12-configuration/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/12-configuration/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/12-configuration/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/12-configuration/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/12-configuration/visual-explanation.png",
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
        children: ["Configure Spring Boot applications using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.properties"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.yml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bind configuration properties to type-safe Java beans using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConfigurationProperties"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Inject individual property values with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Value"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Load custom property files with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PropertySource"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use YAML profiles and multi-document YAML for environment-specific configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Externalize configuration via command-line arguments, environment variables, JNDI, and config data locations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leverage relaxed binding for property name flexibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Kubernetes ConfigMaps via the config tree mount approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate random property values for testing and seeding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate configuration properties at startup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert Duration and DataSize properties automatically"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Import additional configuration with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spring.config.import"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand config location ordering and override precedence"
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
            children: "Property Sources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Properties vs YAML, loading order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YAML supports hierarchical structure and multi-doc profiles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ConfigurationProperties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe property binding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use @ConstructorBinding for immutable config beans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SpEL-powered single property injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for simple values; prefer @ConfigurationProperties for groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Externalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI args, env vars, JNDI, config trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLI args override env vars, which override files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Profiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment-specific property files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "application-{profile}.properties loaded after base"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Property Files] --> B[@ConfigurationProperties]\n    B --> C[@Value & SpEL]\n    C --> D[Externalized Config]\n    D --> E[Profiles]\n    E --> F[Relaxed Binding]\n    F --> G[Validation & Conversion]\n    G --> H[Config Import]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always externalize environment-specific configuration. Database URLs, credentials, and API keys should never be hardcoded — use environment variables or a secrets manager."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-theory",
      children: "1. Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/12-configuration.png",
        alt: "Externalized Configuration Flow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-the-philosophy-of-externalized-configuration",
      children: "1.1 The Philosophy of Externalized Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["One of the twelve-factor app principles states that configuration should be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "strictly separated from code"
      }), ". A twelve-factor app stores config in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "environment variables"
      }), ", not in the codebase. Spring Boot embraces this by allowing configuration from many sources with a well-defined precedence order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The fundamental idea is that the same deployable artifact (a JAR or WAR) should work across development, staging, production, and every other environment without recompilation. You change behaviour by changing configuration, not code."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-configuration-priority-order",
      children: "1.2 Configuration Priority Order"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot loads configuration from many sources in a specific order. Later sources override earlier ones:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Priority"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 (highest)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Devtools global settings (", (0,jsx_runtime.jsx)(_components.code, {
              children: "~/.spring-boot-devtools.properties"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@TestPropertySource"
            }), " annotations on test classes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@SpringBootTest"
            }), " properties"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Command-line arguments (", (0,jsx_runtime.jsx)(_components.code, {
              children: "--server.port=9090"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Properties from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SPRING_APPLICATION_JSON"
            }), " (inline JSON)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Servlet ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ServletConfig"
            }), " init parameters"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Servlet ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ServletContext"
            }), " init parameters"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["JNDI attributes from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "java:comp/env"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Java system properties (", (0,jsx_runtime.jsx)(_components.code, {
              children: "System.getProperties()"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS environment variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "application.properties"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "application.yml"
            }), " (outside packaged JAR)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "application.properties"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "application.yml"
            }), " (inside packaged JAR)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@PropertySource"
            }), " on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Configuration"
            }), " classes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Default properties (specified via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SpringApplication.setDefaultProperties"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding this order is crucial for debugging \"why isn't my property being picked up?\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-applicationproperties-vs-applicationyml",
      children: "1.3 application.properties vs application.yml"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot supports two primary configuration file formats:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "application.properties"
      }), " → A flat, key-value format inherited from standard Java properties:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "server.port=8080\nspring.datasource.url=jdbc:postgresql://localhost:5432/mydb\nspring.datasource.username=appuser\nspring.datasource.password=${DB_PASSWORD}\napp.theme.color=blue\napp.theme.font-size=14px\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "application.yml"
      }), " → A hierarchical YAML format that reduces repetition:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "server:\n  port: 8080\n\nspring:\n  datasource:\n    url: jdbc:postgresql://localhost:5432/mydb\n    username: appuser\n    password: ${DB_PASSWORD}\n\napp:\n  theme:\n    color: blue\n    font-size: 14px\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YAML uses indentation to represent structure. Do not use tabs; Spring Boot's YAML parser (SnakeYAML) expects spaces. Two-space indentation is the convention."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YAML supports richer types than properties files:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Lists\napp:\n  allowed-origins:\n    - https://example.com\n    - https://api.example.com\n\n# Inline list\napp:\n  allowed-origins: [https://example.com, https://api.example.com]\n\n# Maps\napp:\n  database:\n    host: localhost\n    port: 5432\n    credentials:\n      user: admin\n      password: secret\n\n# Multi-line strings\napp:\n  description: >\n    This is a single paragraph that\n    will be folded into one line.\n\napp:\n  banner: |\n    This is a block\n    that preserves\n    line breaks.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Warning about YAML lists and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Value"
        })]
      }), ": You cannot inject a YAML list directly with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Value"
      }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConfigurationProperties"
      }), " instead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-type-safe-configuration-with-configurationproperties",
      children: "1.4 Type-Safe Configuration with @ConfigurationProperties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most robust way to work with configuration is to bind properties to strongly-typed Java beans."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "141-basic-binding",
      children: "1.4.1 Basic Binding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.config;\n\nimport org.springframework.boot.context.properties.ConfigurationProperties;\nimport org.springframework.stereotype.Component;\n\n@Component\n@ConfigurationProperties(prefix = \"app.theme\")\npublic class ThemeProperties {\n\n    private String color;\n    private int fontSize;\n\n    public String getColor() {\n        return color;\n    }\n\n    public void setColor(String color) {\n        this.color = color;\n    }\n\n    public int getFontSize() {\n        return fontSize;\n    }\n\n    public void setFontSize(int fontSize) {\n        this.fontSize = fontSize;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "app:\n  theme:\n    color: blue\n    font-size: 14\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Note: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "font-size"
      }), " in YAML maps to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fontSize"
      }), " in Java via ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relaxed binding"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "142-enabling-configurationproperties-with-enableconfigurationproperties",
      children: "1.4.2 Enabling @ConfigurationProperties with @EnableConfigurationProperties"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component"
      }), ", you can register the class explicitly:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.config;\n\nimport org.springframework.boot.context.properties.ConfigurationProperties;\n\n@ConfigurationProperties(prefix = \"app.datasource\")\npublic class DataSourceProperties {\n\n    private String url;\n    private String username;\n    private String password;\n    private int maxPoolSize = 10;\n\n    // getters and setters\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then in a configuration class:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.config;\n\nimport org.springframework.boot.context.properties.EnableConfigurationProperties;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\n@EnableConfigurationProperties(DataSourceProperties.class)\npublic class AppConfig {\n    // configuration\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "143-constructor-binding-immutable-properties",
      children: "1.4.3 Constructor Binding (Immutable Properties)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With Spring Boot 2.2+, you can use constructor binding for immutable beans:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.config;\n\nimport org.springframework.boot.context.properties.ConfigurationProperties;\nimport org.springframework.boot.context.properties.ConstructorBinding;\n\n@ConstructorBinding\n@ConfigurationProperties(prefix = \"app.mail\")\npublic class MailProperties {\n\n    private final String host;\n    private final int port;\n    private final String from;\n\n    public MailProperties(String host, int port, String from) {\n        this.host = host;\n        this.port = port;\n        this.from = from;\n    }\n\n    public String getHost() {\n        return host;\n    }\n\n    public int getPort() {\n        return port;\n    }\n\n    public String getFrom() {\n        return from;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Constructor binding eliminates setters, making the properties immutable and thus thread-safe."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "144-nested-properties",
      children: "1.4.4 Nested Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.config;\n\nimport org.springframework.boot.context.properties.ConfigurationProperties;\nimport org.springframework.stereotype.Component;\n\n@Component\n@ConfigurationProperties(prefix = \"app\")\npublic class AppProperties {\n\n    private final Theme theme = new Theme();\n    private final Database database = new Database();\n    private final Security security = new Security();\n\n    public Theme getTheme() {\n        return theme;\n    }\n\n    public Database getDatabase() {\n        return database;\n    }\n\n    public Security getSecurity() {\n        return security;\n    }\n\n    public static class Theme {\n        private String color;\n        private int fontSize;\n        private boolean darkMode;\n\n        public String getColor() {\n            return color;\n        }\n\n        public void setColor(String color) {\n            this.color = color;\n        }\n\n        public int getFontSize() {\n            return fontSize;\n        }\n\n        public void setFontSize(int fontSize) {\n            this.fontSize = fontSize;\n        }\n\n        public boolean isDarkMode() {\n            return darkMode;\n        }\n\n        public void setDarkMode(boolean darkMode) {\n            this.darkMode = darkMode;\n        }\n    }\n\n    public static class Database {\n        private String url;\n        private String username;\n        private String password;\n        private int maxPoolSize;\n\n        public String getUrl() {\n            return url;\n        }\n\n        public void setUrl(String url) {\n            this.url = url;\n        }\n\n        public String getUsername() {\n            return username;\n        }\n\n        public void setUsername(String username) {\n            this.username = username;\n        }\n\n        public String getPassword() {\n            return password;\n        }\n\n        public void setPassword(String password) {\n            this.password = password;\n        }\n\n        public int getMaxPoolSize() {\n            return maxPoolSize;\n        }\n\n        public void setMaxPoolSize(int maxPoolSize) {\n            this.maxPoolSize = maxPoolSize;\n        }\n    }\n\n    public static class Security {\n        private boolean enabled;\n        private List<String> allowedOrigins = new ArrayList<>();\n        private Jwt jwt = new Jwt();\n\n        public boolean isEnabled() {\n            return enabled;\n        }\n\n        public void setEnabled(boolean enabled) {\n            this.enabled = enabled;\n        }\n\n        public List<String> getAllowedOrigins() {\n            return allowedOrigins;\n        }\n\n        public void setAllowedOrigins(List<String> allowedOrigins) {\n            this.allowedOrigins = allowedOrigins;\n        }\n\n        public Jwt getJwt() {\n            return jwt;\n        }\n\n        public void setJwt(Jwt jwt) {\n            this.jwt = jwt;\n        }\n\n        public static class Jwt {\n            private String secret;\n            private long expirationMs;\n\n            public String getSecret() {\n                return secret;\n            }\n\n            public void setSecret(String secret) {\n                this.secret = secret;\n            }\n\n            public long getExpirationMs() {\n                return expirationMs;\n            }\n\n            public void setExpirationMs(long expirationMs) {\n                this.expirationMs = expirationMs;\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Corresponding YAML:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "app:\n  theme:\n    color: blue\n    font-size: 14\n    dark-mode: true\n  database:\n    url: jdbc:postgresql://localhost:5432/mydb\n    username: ${DB_USER}\n    password: ${DB_PASS}\n    max-pool-size: 20\n  security:\n    enabled: true\n    allowed-origins:\n      - https://app.example.com\n      - https://admin.example.com\n    jwt:\n      secret: ${JWT_SECRET}\n      expiration-ms: 3600000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "145-lists-and-maps-in-configurationproperties",
      children: "1.4.5 Lists and Maps in @ConfigurationProperties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\n@ConfigurationProperties(prefix = \"app.cache\")\npublic class CacheProperties {\n\n    private List<String> evictionPolicies = new ArrayList<>();\n    private Map<String, Integer> ttlSeconds = new HashMap<>();\n    private List<Server> servers = new ArrayList<>();\n\n    // getters and setters\n\n    public static class Server {\n        private String host;\n        private int port;\n\n        public String getHost() {\n            return host;\n        }\n\n        public void setHost(String host) {\n            this.host = host;\n        }\n\n        public int getPort() {\n            return port;\n        }\n\n        public void setPort(int port) {\n            this.port = port;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YAML:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "app:\n  cache:\n    eviction-policies:\n      - LRU\n      - LFU\n      - TTL\n    ttl-seconds:\n      users: 3600\n      sessions: 1800\n      products: 300\n    servers:\n      - host: cache-01.example.com\n        port: 6379\n      - host: cache-02.example.com\n        port: 6380\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-value-annotation",
      children: "1.5 @Value Annotation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For simple, one-off property values, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Value"
      }), " is convenient:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class EmailService {\n\n    @Value(\"${app.mail.host}\")\n    private String host;\n\n    @Value(\"${app.mail.port:587}\")\n    private int port;\n\n    @Value(\"${app.mail.from}\")\n    private String from;\n\n    @Value(\"${app.mail.reply-to:noreply@example.com}\")\n    private String replyTo;\n\n    @Value(\"#{${app.mail.retry.count} * 2}\")\n    private int calculatedRetryCount;\n\n    @Value(\"${app.mail.templates}\")\n    private String[] templates;\n\n    public void send() {\n        System.out.printf(\"Sending mail via %s:%d from %s%n\", host, port, from);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key differences between @Value and @ConfigurationProperties"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@ConfigurationProperties"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SpEL evaluation, loose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relaxed binding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["JSR-303 / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Validated"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complex types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Difficult (lists, maps)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Immutability"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "final"
            }), " + constructor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor binding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDE support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Boot metadata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully supported"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation"
      }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConfigurationProperties"
      }), " for groups of related properties and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Value"
      }), " only for simple, standalone injections."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-propertysource",
      children: "1.6 @PropertySource"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Load custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".properties"
      }), " files (not YAML):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@PropertySource({\n    \"classpath:mail.properties\",\n    \"classpath:custom.properties\",\n    \"file:${external.config.path}/override.properties\"\n})\npublic class CustomConfig {\n    // configuration\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "mail.properties"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "mail.host=smtp.example.com\nmail.port=587\nmail.from=app@example.com\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These properties are then accessible via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Value"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Environment"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important limitations of @PropertySource"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Does ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " support YAML files (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "YamlPropertySourceLoader"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.yml"
        }), " instead)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Properties from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PropertySource"
        }), " are added to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Environment"
        }), " but have ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "lower priority"
        }), " than ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.properties"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In Spring Boot 3.1+, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PropertySource"
        }), " can be made repeatable; simply add multiple annotations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For YAML support with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PropertySource"
      }), ", you need a custom factory:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.config;\n\nimport org.springframework.boot.env.YamlPropertySourceLoader;\nimport org.springframework.core.env.PropertySource;\nimport org.springframework.core.io.support.DefaultPropertySourceFactory;\nimport org.springframework.core.io.support.EncodedResource;\n\nimport java.io.IOException;\n\npublic class YamlPropertySourceFactory extends DefaultPropertySourceFactory {\n\n    @Override\n    public PropertySource<?> createPropertySource(String name, EncodedResource resource) throws IOException {\n        YamlPropertySourceLoader loader = new YamlPropertySourceLoader();\n        String filename = resource.getResource().getFilename();\n        return loader.load(filename != null ? filename : name, resource.getResource())\n                .get(0);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@PropertySource(value = \"classpath:app-config.yml\", factory = YamlPropertySourceFactory.class)\npublic class YamlConfig {\n    // properties from app-config.yml available via @Value\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-profiles",
      children: "1.7 Profiles"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "171-profile-specific-files",
      children: "1.7.1 Profile-Specific Files"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot loads ", (0,jsx_runtime.jsx)(_components.code, {
        children: "application-{profile}.properties"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "application-{profile}.yml"
      }), " automatically:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "application.yml           # base configuration\napplication-dev.yml       # development overrides\napplication-staging.yml   # staging overrides\napplication-prod.yml      # production overrides\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Active profiles can be set in:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties\nspring.profiles.active=dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or via command line:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "java -jar app.jar --spring.profiles.active=prod\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or as an environment variable:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "export SPRING_PROFILES_ACTIVE=staging\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "172-yaml-multi-document-profiles",
      children: "1.7.2 YAML Multi-Document Profiles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A single YAML file can contain multiple profile-specific sections separated by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "---"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Default profile (applies when no active profile matches)\nserver:\n  port: 8080\n\nspring:\n  application:\n    name: myapp\n\napp:\n  cache:\n    enabled: true\n    provider: local\n\n---\nspring:\n  config:\n    activate:\n      on-profile: dev\n\nserver:\n  port: 8081\n\napp:\n  cache:\n    provider: embedded-redis\n\n---\nspring:\n  config:\n    activate:\n      on-profile: prod\n\nserver:\n  port: 80\n\napp:\n  cache:\n    provider: redis-cluster\n\n---\nspring:\n  config:\n    activate:\n      on-profile: test\n\nserver:\n  port: 0  # random port\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important"
      }), ": In Spring Boot 2.4+, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring.config.activate.on-profile"
      }), " instead of the legacy ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring.profiles"
      }), ". The legacy approach still works but triggers a deprecation warning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "173-including-and-excluding-profiles",
      children: "1.7.3 Including and Excluding Profiles"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  profiles:\n    active: dev,eu-west\n    include: common,monitoring\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring.profiles.include"
      }), " to always include certain profiles:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application-dev.yml\nspring:\n  profiles:\n    include: dev-db,dev-logging\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "174-programmatic-profile-configuration",
      children: "1.7.4 Programmatic Profile Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootApplication\npublic class MyApplication {\n\n    public static void main(String[] args) {\n        SpringApplication app = new SpringApplication(MyApplication.class);\n        app.setAdditionalProfiles(\"dev\", \"eu-west\");\n        app.run(args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Or using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SpringApplicationBuilder"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootApplication\npublic class MyApplication {\n\n    public static void main(String[] args) {\n        new SpringApplicationBuilder(MyApplication.class)\n            .profiles(\"dev\")\n            .properties(\"spring.config.additional-location=optional:config/\")\n            .run(args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "175-profile-annotation",
      children: "1.7.5 @Profile Annotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conditionally activate beans based on profile:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\n@Profile(\"dev\")\npublic class DevNotificationService implements NotificationService {\n    @Override\n    public void send(String message) {\n        System.out.println(\"[DEV] Notification: \" + message);\n    }\n}\n\n@Service\n@Profile(\"prod\")\npublic class ProdNotificationService implements NotificationService {\n    @Override\n    public void send(String message) {\n        // Send via real SMS/email provider\n    }\n}\n\n@Service\n@Profile(\"!test\")  // Active for all profiles EXCEPT 'test'\npublic class ProductionReadyService {\n    // not available during tests\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-relaxed-binding",
      children: "1.8 Relaxed Binding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot's relaxed binding allows flexible property name matching. The following are all equivalent when binding to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app.theme.backgroundColor"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "app:\n  theme:\n    backgroundColor: red         # camelCase\n    background-color: red        # kebab-case (recommended for .properties and YAML)\n    background_color: red        # snake_case\n    BACKGROUND_COLOR: red        # UPPER_CASE (common for env vars)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The recommended convention:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "YAML/properties files"
        }), ": kebab-case (", (0,jsx_runtime.jsx)(_components.code, {
          children: "background-color"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "max-pool-size"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Environment variables"
        }), ": UPPER_SNAKE_CASE (", (0,jsx_runtime.jsx)(_components.code, {
          children: "APP_THEME_BACKGROUND_COLOR"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "binding-to-enums",
      children: "Binding to Enums"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public enum DatabaseProvider {\n    POSTGRESQL, MYSQL, H2, ORACLE\n}\n\n@Component\n@ConfigurationProperties(prefix = \"app.database\")\npublic class DatabaseProperties {\n    private DatabaseProvider provider;\n\n    public DatabaseProvider getProvider() {\n        return provider;\n    }\n\n    public void setProvider(DatabaseProvider provider) {\n        this.provider = provider;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YAML:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "app:\n  database:\n    provider: postgresql   # case-insensitive matching\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19-random-values",
      children: "1.9 Random Values"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot provides a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RandomValuePropertySource"
      }), " for generating random values:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# Random integer\napp.secret.id=${random.int}\napp.secret.range=${random.int(1000,9999)}\napp.secret.max=${random.int(10000)}\napp.secret.long=${random.long}\n\n# Random UUID\napp.secret.uuid=${random.uuid}\n\n# Random string\napp.secret.token=${random.value}\napp.secret.alphanumeric=${random.value(32)}  # 32 characters\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\n@ConfigurationProperties(prefix = \"app.secret\")\npublic class SecretProperties {\n    private int id;\n    private int range;\n    private int max;\n    private long longValue;\n    private UUID uuid;\n    private String token;\n    private String alphanumeric;\n\n    // getters and setters\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "110-external-configuration-sources",
      children: "1.10 External Configuration Sources"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1101-command-line-arguments",
      children: "1.10.1 Command-Line Arguments"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "java -jar app.jar --server.port=9090 --app.theme.color=red --logging.level.com.example=DEBUG\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, Spring Boot converts ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--server.port=9090"
      }), " into a property. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SpringApplication.setAddCommandLineProperties(false)"
      }), " to disable this."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1102-environment-variables",
      children: "1.10.2 Environment Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "On Unix-like systems:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "export SERVER_PORT=9090\nexport APP_THEME_COLOR=red\nexport SPRING_DATASOURCE_URL=jdbc:postgresql://prod-db:5432/mydb\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "On Windows:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cmd",
        children: "set SERVER_PORT=9090\nset APP_THEME_COLOR=red\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot's relaxed binding maps ", (0,jsx_runtime.jsx)(_components.code, {
        children: "APP_THEME_COLOR"
      }), " to property ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app.theme.color"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1103-jndi-properties",
      children: "1.10.3 JNDI Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- In web.xml or embedded container config -->\n<env-entry>\n    <env-entry-name>java:comp/env/app/database/maxPoolSize</env-entry-name>\n    <env-entry-type>java.lang.Integer</env-entry-type>\n    <env-entry-value>20</env-entry-value>\n</env-entry>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JNDI properties can be accessed via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Environment"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class JndiConfigReader {\n\n    @Autowired\n    private Environment env;\n\n    public void printConfig() {\n        Integer maxPoolSize = env.getProperty(\"app.database.maxPoolSize\", Integer.class, 10);\n        System.out.println(\"Max pool size from JNDI/ENV: \" + maxPoolSize);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1104-spring_application_json",
      children: "1.10.4 SPRING_APPLICATION_JSON"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pass configuration as a JSON string:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "java -jar app.jar -Dspring.application.json='{\"server\":{\"port\":9090},\"app\":{\"theme\":{\"color\":\"red\"}}}'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or as environment variable:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "SPRING_APPLICATION_JSON='{\"server\":{\"port\":9090}}' java -jar app.jar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-config-data-locations-and-ordering",
      children: "1.11 Config Data Locations and Ordering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot 2.4+ introduced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring.config.import"
      }), " for explicitly importing configuration files."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1111-standard-search-locations",
      children: "1.11.1 Standard Search Locations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot searches for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "application.properties"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "application.yml"
      }), " in these locations (in order):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "file:./config/"
        }), "  (classpath root's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "config/"
        }), " subdirectory)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "file:./config/*/"
        }), " (subdirectories of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "config/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "file:./"
        }), " (classpath root)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "classpath:config/"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "classpath:/"
        }), " (classpath root)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This ordering means an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "application.yml"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "./config/"
      }), " (file system) overrides one in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "classpath:/"
      }), " (JAR)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1112-springconfigname",
      children: "1.11.2 spring.config.name"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Change the config file name:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "spring.config.name=myapp-config\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This will look for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "myapp-config.properties"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "application.properties"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1113-springconfiglocation",
      children: "1.11.3 spring.config.location"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Override the search path entirely:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "java -jar app.jar --spring.config.location=/etc/myapp/config.yml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiple locations:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "java -jar app.jar --spring.config.location=optional:/etc/myapp/,classpath:/config/\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "optional:"
      }), " prefix means Spring Boot won't fail if the file doesn't exist."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1114-springconfigadditional-location",
      children: "1.11.4 spring.config.additional-location"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add locations to the default search path:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "java -jar app.jar --spring.config.additional-location=/etc/external/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Files in additional locations override files in standard locations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1115-springconfigimport",
      children: "1.11.5 spring.config.import"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In Spring Boot 2.4+, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring.config.import"
      }), " provides fine-grained control:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application.yml\nspring:\n  application:\n    name: myapp\n  config:\n    import:\n      - classpath:common.yml\n      - classpath:db-config.yml\n      - optional:file:./override.yml\n      - configtree:/etc/myapp/config/\n      - classpath:${app.environment:-dev}-config.yml\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Import types"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Prefix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(none)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Import from classpath or filesystem; fail if missing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "optional:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Do not fail if file is missing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "configtree:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Import from a Kubernetes-style config tree directory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "classpath:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load from classpath"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "file:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load from filesystem"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1116-import-ordering",
      children: "1.11.6 Import Ordering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imports are processed in declaration order. Properties from later imports override earlier ones:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  config:\n    import:\n      - classpath:base.yml           # Lowest priority among imports\n      - classpath:environment.yml    # Overrides base.yml\n      - file:./local-override.yml    # Overrides all above\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The overall ordering from lowest to highest priority:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Default properties"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "@PropertySource"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Imported config data (", (0,jsx_runtime.jsx)(_components.code, {
          children: "spring.config.import"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "application.yml"
        }), " (inside JAR)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "application.yml"
        }), " (outside JAR)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profile-specific files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "spring.config.additional-location"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "spring.config.location"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Command-line arguments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Environment variables"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-config-tree-kubernetes",
      children: "1.12 Config Tree (Kubernetes)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kubernetes ConfigMaps can be mounted as volumes where each key becomes a file:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/etc/config/\n├── app.cache.enabled\n├── app.cache.provider\n├── app.database.max-pool-size\n└── app.database.url\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot's config tree support reads these files and maps the file path to property keys:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  config:\n    import: \"configtree:/etc/config/\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each file's content becomes the value of the property implied by its filename path. The file ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app.database.url"
      }), " with content ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jdbc:postgresql://prod:5432/db"
      }), " sets property ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app.database.url"
      }), " to that value."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic reloading in Kubernetes"
      }), ": When the ConfigMap is updated, Kubernetes updates the files. Spring Boot can be configured to reload on file changes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  config:\n    import: \"configtree:/etc/config/\"\n  cloud:\n    kubernetes:\n      reload:\n        enabled: true\n        mode: polling\n        period: 5000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-validation-of-configuration-properties",
      children: "1.13 Validation of Configuration Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apply JSR-303/Jakarta Bean Validation annotations:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.constraints.*;\n\n@Component\n@Validated\n@ConfigurationProperties(prefix = \"app.mail\")\npublic class ValidatedMailProperties {\n\n    @NotBlank(message = \"SMTP host must not be blank\")\n    private String host;\n\n    @Min(value = 1, message = \"Port must be positive\")\n    @Max(value = 65535, message = \"Port must be <= 65535\")\n    private int port = 25;\n\n    @Email(message = \"From address must be valid email\")\n    @NotBlank\n    private String from;\n\n    @NotEmpty\n    private List<@Email String> bccRecipients;\n\n    @Pattern(regexp = \"^(STARTTLS|SSL|NONE)$\")\n    private String encryption = \"STARTTLS\";\n\n    @Positive\n    private long timeoutMs = 5000;\n\n    @NotNull\n    private Credentials credentials;\n\n    // getters and setters\n\n    public static class Credentials {\n        @NotBlank\n        private String username;\n\n        @NotBlank\n        private String password;\n\n        // getters and setters\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot will fail to start with a descriptive error if validation fails:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Binding to target org.springframework.boot.context.properties.bind.BindException:\n  Failed to bind properties under 'app.mail' to com.example.config.ValidatedMailProperties:\n\n    Property: app.mail.host\n    Value: null\n    Reason: SMTP host must not be blank\n\n    Property: app.mail.port\n    Value: 0\n    Reason: Port must be positive\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-duration-and-datasize-conversion",
      children: "1.14 Duration and DataSize Conversion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot automatically converts properties to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.time.Duration"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "org.springframework.util.unit.DataSize"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "duration-conversion",
      children: "Duration Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\n@ConfigurationProperties(prefix = \"app.timeout\")\npublic class TimeoutProperties {\n\n    private Duration connect;\n    private Duration read;\n    private Duration write;\n    private Duration cacheTtl;\n\n    // getters and setters\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "app:\n  timeout:\n    connect: 5s          # 5 seconds\n    read: 30s             # 30 seconds\n    write: 2m             # 2 minutes\n    cache-ttl: 1h         # 1 hour\n\n    # Other valid formats:\n    # 10ns   → 10 nanoseconds\n    # 5ms    → 5 milliseconds\n    # 5000ms → 5000 milliseconds\n    # 10s    → 10 seconds\n    # 5m     → 5 minutes\n    # 2h     → 2 hours\n    # 1d     → 1 day\n    # PT5S   → ISO-8601 format (5 seconds)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can also use long values with a default unit:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@DurationUnit(ChronoUnit.SECONDS)\nprivate Duration connect;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "connect: 30"
      }), " would be interpreted as 30 seconds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "datasize-conversion",
      children: "DataSize Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\n@ConfigurationProperties(prefix = \"app.buffer\")\npublic class BufferProperties {\n\n    private DataSize maxSize;\n    private DataSize chunkSize;\n    private DataSize memoryLimit;\n\n    // getters and setters\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "app:\n  buffer:\n    max-size: 100MB      # 100 megabytes\n    chunk-size: 64KB     # 64 kilobytes\n    memory-limit: 2GB    # 2 gigabytes\n\n    # Valid suffixes:\n    # B     → bytes\n    # KB    → kilobytes (1000-based)\n    # MB    → megabytes (1000-based)\n    # GB    → gigabytes (1000-based)\n    # TB    → terabytes (1000-based)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-configuration-metadata",
      children: "1.15 Configuration Metadata"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Generate IDE autocompletion for custom properties. Add the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-configuration-processor"
      }), " dependency:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-configuration-processor</artifactId>\n    <optional>true</optional>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you compile, the annotation processor generates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "META-INF/spring-configuration-metadata.json"
      }), " with property descriptions, types, and default values. For additional documentation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\n@ConfigurationProperties(prefix = \"app.mail\")\npublic class DocumentedMailProperties {\n\n    /**\n     * SMTP server hostname.\n     */\n    private String host;\n\n    /**\n     * SMTP server port. Defaults to 587 for STARTTLS.\n     */\n    private int port = 587;\n\n    /**\n     * Email address used as the \"From\" field.\n     */\n    private String from;\n\n    /**\n     * Whether to use STARTTLS encryption.\n     */\n    private boolean starttls = true;\n\n    /**\n     * Maximum number of retry attempts on failure.\n     */\n    private int maxRetries = 3;\n\n    // getters and setters\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Javadoc comments become descriptions in the generated metadata."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "116-complete-application-configuration-example",
      children: "1.16 Complete Application Configuration Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let's build a complete, real-world example tying together all the concepts."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "application.yml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  application:\n    name: order-service\n  profiles:\n    active: ${ACTIVE_PROFILES:default}\n\n  config:\n    import:\n      - optional:classpath:build-info.yml\n      - optional:file:./secrets.yml\n\n  datasource:\n    url: ${DATABASE_URL}\n    username: ${DATABASE_USER}\n    password: ${DATABASE_PASSWORD}\n    hikari:\n      maximum-pool-size: ${HIKARI_MAX_POOL:20}\n      minimum-idle: 5\n      idle-timeout: 300000\n      connection-timeout: 20000\n\n  jpa:\n    hibernate:\n      ddl-auto: validate\n    show-sql: false\n    properties:\n      hibernate:\n        format_sql: true\n        jdbc:\n          batch_size: 50\n\n  jackson:\n    serialization:\n      write-dates-as-timestamps: false\n    deserialization:\n      fail-on-unknown-properties: false\n\nserver:\n  port: ${PORT:8080}\n  compression:\n    enabled: true\n    mime-types: text/html,text/css,application/json\n    min-response-size: 2048\n  tomcat:\n    max-connections: 10000\n    threads:\n      max: 200\n      min-spare: 20\n\napp:\n  order:\n    processing-timeout: 30s\n    max-items-per-order: 50\n    payment-grace-period: 5m\n    statuses:\n      - PENDING\n      - CONFIRMED\n      - PROCESSING\n      - SHIPPED\n      - DELIVERED\n      - CANCELLED\n    notification:\n      enabled: true\n      channels: [EMAIL, SMS, PUSH]\n\n  cache:\n    provider: redis\n    default-ttl: 10m\n    max-size: 500MB\n    redis:\n      host: ${REDIS_HOST:localhost}\n      port: ${REDIS_PORT:6379}\n      password: ${REDIS_PASSWORD:}\n\n  monitoring:\n    enabled: true\n    alert-email: ops@example.com\n    thresholds:\n      error-rate: 0.05\n      latency-p99: 500ms\n      cpu-warning: 80\n      memory-warning: 85\n\n  features:\n    new-checkout: ${FEATURE_NEW_CHECKOUT:false}\n    dark-mode: true\n    beta-users: ${BETA_USERS:}\n\n---\nspring:\n  config:\n    activate:\n      on-profile: dev\n\nserver:\n  port: 8081\n\napp:\n  order:\n    processing-timeout: 5s\n    max-items-per-order: 100\n    notification:\n      enabled: false\n\nlogging:\n  level:\n    com.example: DEBUG\n    org.springframework.web: DEBUG\n\n---\nspring:\n  config:\n    activate:\n      on-profile: prod\n\nserver:\n  port: 80\n\napp:\n  order:\n    processing-timeout: 60s\n    max-items-per-order: 30\n\nlogging:\n  level:\n    com.example: WARN\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OrderProperties.java"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.orderservice.config;\n\nimport jakarta.validation.Valid;\nimport jakarta.validation.constraints.Max;\nimport jakarta.validation.constraints.NotBlank;\nimport jakarta.validation.constraints.NotNull;\nimport jakarta.validation.constraints.Positive;\nimport org.springframework.boot.context.properties.ConfigurationProperties;\nimport org.springframework.stereotype.Component;\nimport org.springframework.validation.annotation.Validated;\n\nimport java.time.Duration;\nimport java.util.ArrayList;\nimport java.util.List;\n\n@Validated\n@Component\n@ConfigurationProperties(prefix = \"app.order\")\npublic class OrderProperties {\n\n    @Positive\n    private Duration processingTimeout;\n\n    @Max(100)\n    private int maxItemsPerOrder;\n\n    @Positive\n    private Duration paymentGracePeriod;\n\n    @NotEmpty\n    private List<@NotBlank String> statuses = new ArrayList<>();\n\n    @Valid\n    @NotNull\n    private Notification notification = new Notification();\n\n    public Duration getProcessingTimeout() {\n        return processingTimeout;\n    }\n\n    public void setProcessingTimeout(Duration processingTimeout) {\n        this.processingTimeout = processingTimeout;\n    }\n\n    public int getMaxItemsPerOrder() {\n        return maxItemsPerOrder;\n    }\n\n    public void setMaxItemsPerOrder(int maxItemsPerOrder) {\n        this.maxItemsPerOrder = maxItemsPerOrder;\n    }\n\n    public Duration getPaymentGracePeriod() {\n        return paymentGracePeriod;\n    }\n\n    public void setPaymentGracePeriod(Duration paymentGracePeriod) {\n        this.paymentGracePeriod = paymentGracePeriod;\n    }\n\n    public List<String> getStatuses() {\n        return statuses;\n    }\n\n    public void setStatuses(List<String> statuses) {\n        this.statuses = statuses;\n    }\n\n    public Notification getNotification() {\n        return notification;\n    }\n\n    public void setNotification(Notification notification) {\n        this.notification = notification;\n    }\n\n    public static class Notification {\n        private boolean enabled;\n        private List<String> channels = new ArrayList<>();\n\n        public boolean isEnabled() {\n            return enabled;\n        }\n\n        public void setEnabled(boolean enabled) {\n            this.enabled = enabled;\n        }\n\n        public List<String> getChannels() {\n            return channels;\n        }\n\n        public void setChannels(List<String> channels) {\n            this.channels = channels;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ConfigValidationRunner.java"
      }), " → a component that validates configuration at startup:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.orderservice.config;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.boot.CommandLineRunner;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class ConfigValidationRunner implements CommandLineRunner {\n\n    private static final Logger log = LoggerFactory.getLogger(ConfigValidationRunner.class);\n\n    private final AppProperties appProperties;\n    private final OrderProperties orderProperties;\n\n    public ConfigValidationRunner(AppProperties appProperties, OrderProperties orderProperties) {\n        this.appProperties = appProperties;\n        this.orderProperties = orderProperties;\n    }\n\n    @Override\n    public void run(String... args) {\n        log.info(\"=== Configuration Report ===\");\n        log.info(\"Application Name: {}\", appProperties.getAppName());\n        log.info(\"Active Profiles: {}\", String.join(\", \", appProperties.getActiveProfiles()));\n        log.info(\"Order timeout: {}\", orderProperties.getProcessingTimeout());\n        log.info(\"Max items per order: {}\", orderProperties.getMaxItemsPerOrder());\n        log.info(\"Payment grace period: {}\", orderProperties.getPaymentGracePeriod());\n        log.info(\"Notification enabled: {}\", orderProperties.getNotification().isEnabled());\n        log.info(\"Notification channels: {}\", orderProperties.getNotification().getChannels());\n        log.info(\"Cache TTL: {}\", appProperties.getCache().getDefaultTtl());\n        log.info(\"Cache max size: {}\", appProperties.getCache().getMaxSize());\n        log.info(\"==============================\");\n\n        if (orderProperties.getProcessingTimeout().compareTo(Duration.ofSeconds(5)) < 0) {\n            log.warn(\"Processing timeout is very low: {}\", orderProperties.getProcessingTimeout());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "117-programmatic-environment-access",
      children: "1.17 Programmatic Environment Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sometimes you need to access configuration programmatically:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class EnvironmentInspector {\n\n    @Autowired\n    private Environment env;\n\n    public void inspect() {\n        // Get with default\n        String themeColor = env.getProperty(\"app.theme.color\", \"blue\");\n\n        // Get with type conversion\n        int port = env.getProperty(\"server.port\", Integer.class, 8080);\n\n        // Get required (throws IllegalStateException if missing)\n        String dbUrl = env.getRequiredProperty(\"spring.datasource.url\");\n\n        // Check if property exists\n        boolean hasJwt = env.containsProperty(\"app.security.jwt.secret\");\n\n        // Profile checks\n        boolean isDev = env.acceptsProfiles(Profiles.of(\"dev\"));\n        boolean isProdOrStaging = env.acceptsProfiles(Profiles.of(\"prod\", \"staging\"));\n\n        // Get array of active profiles\n        String[] activeProfiles = env.getActiveProfiles();\n        String[] defaultProfiles = env.getDefaultProfiles();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "118-property-placeholders",
      children: "1.18 Property Placeholders"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Properties can reference other properties:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "app.name=My Application\napp.description=Welcome to ${app.name}\napp.homepage=https://${app.domain}/\napp.domain=example.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With default values:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "app.database.name=${DB_NAME:mydb}\napp.port=${PORT:8080}\napp.host=${HOST:localhost}\napp.url=jdbc:postgresql://${app.host}:${app.port}/${app.database.name}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nested placeholders are resolved recursively."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "119-encryption-of-configuration-values",
      children: "1.19 Encryption of Configuration Values"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For sensitive data, use Jasypt with Spring Boot:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>com.github.ulisesbocchio</groupId>\n    <artifactId>jasypt-spring-boot-starter</artifactId>\n    <version>3.0.5</version>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.yml (with Jasypt)\napp:\n  database:\n    password: ENC(encryptedPasswordHere)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The password is decrypted at runtime."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "120-lazy-binding-with-configurationpropertiesscan",
      children: "1.20 Lazy Binding with @ConfigurationPropertiesScan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instead of using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component"
      }), " on every properties class, scan packages:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootApplication\n@ConfigurationPropertiesScan(\"com.example.orderservice.config\")\npublic class OrderServiceApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(OrderServiceApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now properties classes only need ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConfigurationProperties"
      }), " with the prefix:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@ConfigurationProperties(prefix = \"app.cache\")\npublic class CacheProperties {\n    // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-custom-propertysource",
      children: "1.21 Custom PropertySource"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a custom property source for loading from a custom source (e.g., a database):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.orderservice.config;\n\nimport org.springframework.core.env.PropertySource;\n\npublic class DatabasePropertySource extends PropertySource<String> {\n\n    private final DatabaseConfigRepository repository;\n\n    public DatabasePropertySource(String name, DatabaseConfigRepository repository) {\n        super(name);\n        this.repository = repository;\n    }\n\n    @Override\n    public Object getProperty(String name) {\n        // Look up the property from a database table\n        return repository.findValueByName(name)\n                .orElse(null);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Register it in a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConfigurableEnvironment"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class DatabasePropertySourceConfig implements ApplicationContextInitializer<ConfigurableApplicationContext> {\n\n    @Override\n    public void initialize(ConfigurableApplicationContext context) {\n        ConfigurableEnvironment environment = context.getEnvironment();\n        DatabaseConfigRepository repository = context.getBean(DatabaseConfigRepository.class);\n        DatabasePropertySource propertySource = new DatabasePropertySource(\"database\", repository);\n        environment.getPropertySources().addLast(propertySource);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-testing-with-custom-configuration",
      children: "1.22 Testing with Custom Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@ActiveProfiles(\"test\")\nclass OrderPropertiesTest {\n\n    @Autowired\n    private OrderProperties orderProperties;\n\n    @Test\n    void shouldLoadProperties() {\n        assertThat(orderProperties.getProcessingTimeout()).isEqualTo(Duration.ofSeconds(5));\n        assertThat(orderProperties.getMaxItemsPerOrder()).isEqualTo(100);\n        assertThat(orderProperties.getNotification().isEnabled()).isFalse();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TestPropertySource"
      }), " for test-specific overrides:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@TestPropertySource(properties = {\n    \"app.order.processing-timeout=10s\",\n    \"app.order.notification.enabled=true\"\n})\nclass OrderServiceTest {\n\n    @Autowired\n    private OrderProperties orderProperties;\n\n    @Test\n    void shouldUseTestOverrides() {\n        assertThat(orderProperties.getProcessingTimeout()).isEqualTo(Duration.ofSeconds(10));\n        assertThat(orderProperties.getNotification().isEnabled()).isTrue();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-building-config-hierarchy-in-large-projects",
      children: "1.23 Building Config Hierarchy in Large Projects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For microservices or multi-module projects, organize configuration as:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "config/\n├── application.yml                  # shared base config\n├── application-dev.yml              # shared dev overrides\n├── application-prod.yml             # shared prod overrides\n├── service-order/\n│   ├── application.yml              # order-service defaults\n│   └── application-prod.yml         # order-service prod overrides\n└── service-payment/\n    ├── application.yml              # payment-service defaults\n    └── application-prod.yml         # payment-service prod overrides\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Launch with:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "java -jar order-service.jar \\\n  --spring.config.additional-location=config/ \\\n  --spring.config.location=config/service-order/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-spring-cloud-config-integration",
      children: "1.24 Spring Cloud Config Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For centralized configuration in microservices, integrate with Spring Cloud Config:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# bootstrap.yml (or spring.config.import in 2020+)\nspring:\n  application:\n    name: order-service\n  cloud:\n    config:\n      uri: http://config-server:8888\n      fail-fast: true\n      retry:\n        initial-interval: 1000\n        max-attempts: 5\n        multiplier: 1.5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Using spring.config.import in 2024+\nspring:\n  config:\n    import: configserver:http://config-server:8888\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "125-best-practices-summary",
      children: "1.25 Best Practices Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Prefer ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@ConfigurationProperties"
          }), " over ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Value"
          })]
        }), " for groups of related properties."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use constructor binding"
        }), " for immutable configuration objects."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always validate"
        }), " configuration at startup with Bean Validation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use kebab-case"
        }), " in YAML and properties files for consistency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Externalize secrets"
        }), " via environment variables, never hardcode them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "optional:"
          })]
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spring.config.import"
        }), " when the file might not exist."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep profile-specific files minimal"
        }), " → only the values that differ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use relaxed binding"
        }), " to maintain clean env var names."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate metadata"
        }), " with the configuration processor for IDE support."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document properties"
        }), " with meaningful Javadoc for generated metadata."]
      }), "\n"]
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
            children: "application.properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flat key=value format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, familiar to Java devs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple apps, basic configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "application.yml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical YAML format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supports structured data, multi-doc profiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex config with nesting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ConfigurationProperties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe binding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDE support, metadata generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration POJOs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct property injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SpEL support for expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple single-value injection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Environment Abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified property source access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profile-aware, ordered resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime environment information"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Order"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Override Mechanism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Command line args"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--server.port=9090"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JNDI attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2nd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment properties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3rd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-Dserver.port=9090"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OS environment variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4th"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SERVER_PORT=9090"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "application-{profile}.properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5th"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profile-specific overrides"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "application.properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6th"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base application config"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@PropertySource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7th"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class-level source annotation"
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
            children: "Configuration Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Development"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "QA/Staging"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Production"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H2 in-memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDS connection pool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEBUG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INFO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WARN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server Port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8080"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8080"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80/443"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All exposed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restricted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which property binding form has the highest precedence?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) application.properties"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) OS environment variables"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Command line arguments"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) application-{profile}.properties"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Command line arguments.** CLI args override all other property sources except those with explicitly higher priority.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What annotation enables type-safe configuration properties?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) @Value"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) @PropertySource"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) @ConfigurationProperties"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) @EnableAutoConfiguration"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) @ConfigurationProperties.** This annotation binds external properties to a POJO with full IDE support.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does Spring Boot handle relaxed binding for property names?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Exact case-sensitive match"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Case-insensitive, hyphens/camelCase/underscores match"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Only exact camelCase matches"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Regular expression matching"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Case-insensitive, hyphens/camelCase/underscores match.** Relaxed binding allows `my-property`, `myProperty`, `my_property` to bind to the same field.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot's externalized configuration is one of its most powerful features. You learned the complete configuration landscape:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File formats"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.properties"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.yml"
        }), " with different trade-offs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type-safe binding"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConfigurationProperties"
        }), " with constructor binding, nested objects, lists, and maps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Property injection"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Value"
        }), " for simple values, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PropertySource"
        }), " for custom files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Profiles"
        }), ": Profile-specific files, multi-document YAML, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Profile"
        }), " annotation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "External sources"
        }), ": Command-line arguments, environment variables, JNDI"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced features"
        }), ": Relaxed binding, random values, validation, Duration/DataSize conversion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config data API"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spring.config.import"
        }), ", location ordering, config tree for Kubernetes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Best practices"
        }), ": Metadata generation, encryption, testing patterns"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key takeaway: externalized configuration keeps your code environment-agnostic. A single deployable artifact can behave differently in dev, staging, and production with zero code changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-type-safe-properties",
      children: "Exercise 1: Type-Safe Properties"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConfigurationProperties"
      }), " class called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationProperties"
      }), " with prefix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app"
      }), " that binds:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "app.name"
        }), " → String"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "app.version"
        }), " → String"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "app.description"
        }), " → String with default \"No description\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "app.contact.email"
        }), " → String with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Email"
        }), " validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "app.features"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Map<String, Boolean>"
        }), " with default for \"analytics\" = true, \"reporting\" = true"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "app.allowed-origins"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "List<String>"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a YAML file with sample values and a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CommandLineRunner"
      }), " that prints all properties at startup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-profile-based-configuration",
      children: "Exercise 2: Profile-Based Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create three YAML profiles → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "staging"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prod"
      }), " → with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), ": Server port 8081, logging level DEBUG, mock database enabled"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "staging"
        }), ": Server port 8082, logging level INFO, staging database URL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "prod"
        }), ": Server port 80, logging level WARN, production database URL with encrypted password"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use both multi-document YAML (single file) and separate files. Write a REST controller that exposes the current profile and port."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-config-tree-for-kubernetes",
      children: "Exercise 3: Config Tree for Kubernetes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConfigTreeApplication"
      }), " that imports config from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/etc/app-config/"
      }), ". The config tree has files:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "app.theme.color"
        }), " containing \"dark-amber\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "app.theme.font-size"
        }), " containing \"16\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "app.features.new-dashboard"
        }), " containing \"true\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "app.features.experimental"
        }), " containing \"false\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ThemeProperties"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FeatureProperties"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConfigurationProperties"
      }), " and verify binding with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PostConstruct"
      }), " method."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-property-validation",
      children: "Exercise 4: Property Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a properties class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DatabaseProperties"
      }), " with prefix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app.database"
      }), " and these validation rules:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "url"
        }), ": must not be blank, must start with \"jdbc:\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "username"
        }), ": must not be blank"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "password"
        }), ": must not be blank"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pool-size"
        }), ": must be between 5 and 100 (default 10)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "connection-timeout"
        }), ": must be positive Duration (default 30s)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "max-lifetime"
        }), ": must be positive Duration (default 30m)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cache-prepared-statements"
        }), ": boolean (default true)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "prepared-statement-cache-size"
        }), ": must be between 1 and 100 (default 25)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a test that verifies startup fails with invalid configuration."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-multi-source-configuration",
      children: "Exercise 5: Multi-Source Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a Spring Boot application that loads configuration from these sources:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A file ", (0,jsx_runtime.jsx)(_components.code, {
          children: "config/database.properties"
        }), " on the filesystem (containing JDBC URL, username, password)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Environment variable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CACHE_TTL"
        }), " mapped to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app.cache.ttl-seconds"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Command-line argument ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--app.server.node-id"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PropertySource"
        }), " loading ", (0,jsx_runtime.jsx)(_components.code, {
          children: "labels.properties"
        }), " from classpath"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create an endpoint ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/api/config/report"
      }), " that returns a JSON object showing which value came from which source."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6-duration-and-datasize",
      children: "Exercise 6: Duration and DataSize"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a properties class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MultimediaProperties"
      }), " with prefix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app.media"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "max-upload-size"
        }), ": DataSize"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "max-video-duration"
        }), ": Duration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "thumbnail-size"
        }), ": DataSize with default 150KB"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "compression-timeout"
        }), ": Duration with default 30s"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "allowed-formats"
        }), ": List<String> with default [\"jpg\", \"png\", \"mp4\"]"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bind and print all values. Ensure invalid values cause startup failure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7-random-values",
      children: "Exercise 7: Random Values"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SecretProperties"
      }), " class using random values for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A unique installation ID (random long)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "An API key (32-character random alphanumeric)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A port number between 8000 and 8999"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A UUID"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Print these at startup. Verify they change on each restart."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8-config-location-ordering",
      children: "Exercise 8: Config Location Ordering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a project with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Default property ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app.message=from-jar"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.yml"
        }), " inside the JAR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["An ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.yml"
        }), " outside the JAR in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "./config/"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app.message=from-config-dir"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A profile ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), " override ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app.message=from-dev-profile"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Launch three ways and verify the message value:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Without any flags (should be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "from-config-dir"
        }), " if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "./config/"
        }), " exists)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--spring.config.location=classpath:/"
        }), " (should be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "from-jar"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--spring.profiles.active=dev"
        }), " (should be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "from-dev-profile"
        }), " if that's highest priority)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Document the precedence chain."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9-external-configuration",
      children: "Exercise 9: External Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConfigReportEndpoint"
      }), " using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConfigurationProperties"
      }), " that reads ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app.config.file"
      }), " (a path to a properties file), loads that file at runtime using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Properties.load()"
      }), ", and returns all key-value pairs as a JSON map at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/api/config/external"
      }), ". Handle the case where the file doesn't exist gracefully."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10-spring-config-import",
      children: "Exercise 10: Spring Config Import"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create three configuration files:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "base-app.yml"
        }), " → defines ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app.name"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app.cache.enabled=true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "extended-app.yml"
        }), " → imports ", (0,jsx_runtime.jsx)(_components.code, {
          children: "base-app.yml"
        }), ", defines ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app.version"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app.cache.provider=redis"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Main ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.yml"
        }), " → imports ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extended-app.yml"
        }), ", defines ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app.description"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring.config.import"
      }), " to chain them. Create a properties class that reads all these values and verify they're properly merged."]
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