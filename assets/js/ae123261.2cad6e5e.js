"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[9176],{

/***/ 4277
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
const site_docs_courses_java_12_configuration_md_ae1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/12-configuration","title":"Application Properties & Configuration","description":"Previous Actuator, DevTools & Monitoring","source":"@site/docs/courses/java/12-configuration.md","sourceDirName":"courses/java","slug":"/java/12-configuration","permalink":"/ai-engineering-journey/java/12-configuration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-configuration","slug":"/java/12-configuration","title":"Application Properties & Configuration","sidebar_label":"Application Properties & Configuration","sidebar_position":12},"sidebar":"course-java","previous":{"title":"Auto-Configuration & Starters","permalink":"/ai-engineering-journey/java/11-auto-configuration"},"next":{"title":"Actuator, DevTools & Monitoring","permalink":"/ai-engineering-journey/java/13-actuator-devtools"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
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
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Property Files] --> B[\"@ConfigurationProperties\"]\r\n    B --> C[\"@Value & SpEL\"]\r\n    C --> D[Externalized Config]\r\n    D --> E[Profiles]\r\n    E --> F[Relaxed Binding]\r\n    F --> G[Validation & Conversion]\r\n    G --> H[Config Import]"
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
        children: "server.port=8080\r\nspring.datasource.url=jdbc:postgresql://localhost:5432/mydb\r\nspring.datasource.username=appuser\r\nspring.datasource.password=${DB_PASSWORD}\r\napp.theme.color=blue\r\napp.theme.font-size=14px\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "application.yml"
      }), " → A hierarchical YAML format that reduces repetition:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "server:\r\n  port: 8080\r\n\r\nspring:\r\n  datasource:\r\n    url: jdbc:postgresql://localhost:5432/mydb\r\n    username: appuser\r\n    password: ${DB_PASSWORD}\r\n\r\napp:\r\n  theme:\r\n    color: blue\r\n    font-size: 14px\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YAML uses indentation to represent structure. Do not use tabs; Spring Boot's YAML parser (SnakeYAML) expects spaces. Two-space indentation is the convention."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YAML supports richer types than properties files:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Lists\r\napp:\r\n  allowed-origins:\r\n    - https://example.com\r\n    - https://api.example.com\r\n\r\n# Inline list\r\napp:\r\n  allowed-origins: [https://example.com, https://api.example.com]\r\n\r\n# Maps\r\napp:\r\n  database:\r\n    host: localhost\r\n    port: 5432\r\n    credentials:\r\n      user: admin\r\n      password: secret\r\n\r\n# Multi-line strings\r\napp:\r\n  description: >\r\n    This is a single paragraph that\r\n    will be folded into one line.\r\n\r\napp:\r\n  banner: |\r\n    This is a block\r\n    that preserves\r\n    line breaks.\n"
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
        children: "package com.example.config;\r\n\r\nimport org.springframework.boot.context.properties.ConfigurationProperties;\r\nimport org.springframework.stereotype.Component;\r\n\r\n@Component\r\n@ConfigurationProperties(prefix = \"app.theme\")\r\npublic class ThemeProperties {\r\n\r\n    private String color;\r\n    private int fontSize;\r\n\r\n    public String getColor() {\r\n        return color;\r\n    }\r\n\r\n    public void setColor(String color) {\r\n        this.color = color;\r\n    }\r\n\r\n    public int getFontSize() {\r\n        return fontSize;\r\n    }\r\n\r\n    public void setFontSize(int fontSize) {\r\n        this.fontSize = fontSize;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "app:\r\n  theme:\r\n    color: blue\r\n    font-size: 14\n"
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
        children: "package com.example.config;\r\n\r\nimport org.springframework.boot.context.properties.ConfigurationProperties;\r\n\r\n@ConfigurationProperties(prefix = \"app.datasource\")\r\npublic class DataSourceProperties {\r\n\r\n    private String url;\r\n    private String username;\r\n    private String password;\r\n    private int maxPoolSize = 10;\r\n\r\n    // getters and setters\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then in a configuration class:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.config;\r\n\r\nimport org.springframework.boot.context.properties.EnableConfigurationProperties;\r\nimport org.springframework.context.annotation.Configuration;\r\n\r\n@Configuration\r\n@EnableConfigurationProperties(DataSourceProperties.class)\r\npublic class AppConfig {\r\n    // configuration\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "143-constructor-binding-immutable-properties",
      children: "1.4.3 Constructor Binding (Immutable Properties)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With Spring Boot 2.2+, you can use constructor binding for immutable beans:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.config;\r\n\r\nimport org.springframework.boot.context.properties.ConfigurationProperties;\r\nimport org.springframework.boot.context.properties.ConstructorBinding;\r\n\r\n@ConstructorBinding\r\n@ConfigurationProperties(prefix = \"app.mail\")\r\npublic class MailProperties {\r\n\r\n    private final String host;\r\n    private final int port;\r\n    private final String from;\r\n\r\n    public MailProperties(String host, int port, String from) {\r\n        this.host = host;\r\n        this.port = port;\r\n        this.from = from;\r\n    }\r\n\r\n    public String getHost() {\r\n        return host;\r\n    }\r\n\r\n    public int getPort() {\r\n        return port;\r\n    }\r\n\r\n    public String getFrom() {\r\n        return from;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Constructor binding eliminates setters, making the properties immutable and thus thread-safe."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "144-nested-properties",
      children: "1.4.4 Nested Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.config;\r\n\r\nimport org.springframework.boot.context.properties.ConfigurationProperties;\r\nimport org.springframework.stereotype.Component;\r\n\r\n@Component\r\n@ConfigurationProperties(prefix = \"app\")\r\npublic class AppProperties {\r\n\r\n    private final Theme theme = new Theme();\r\n    private final Database database = new Database();\r\n    private final Security security = new Security();\r\n\r\n    public Theme getTheme() {\r\n        return theme;\r\n    }\r\n\r\n    public Database getDatabase() {\r\n        return database;\r\n    }\r\n\r\n    public Security getSecurity() {\r\n        return security;\r\n    }\r\n\r\n    public static class Theme {\r\n        private String color;\r\n        private int fontSize;\r\n        private boolean darkMode;\r\n\r\n        public String getColor() {\r\n            return color;\r\n        }\r\n\r\n        public void setColor(String color) {\r\n            this.color = color;\r\n        }\r\n\r\n        public int getFontSize() {\r\n            return fontSize;\r\n        }\r\n\r\n        public void setFontSize(int fontSize) {\r\n            this.fontSize = fontSize;\r\n        }\r\n\r\n        public boolean isDarkMode() {\r\n            return darkMode;\r\n        }\r\n\r\n        public void setDarkMode(boolean darkMode) {\r\n            this.darkMode = darkMode;\r\n        }\r\n    }\r\n\r\n    public static class Database {\r\n        private String url;\r\n        private String username;\r\n        private String password;\r\n        private int maxPoolSize;\r\n\r\n        public String getUrl() {\r\n            return url;\r\n        }\r\n\r\n        public void setUrl(String url) {\r\n            this.url = url;\r\n        }\r\n\r\n        public String getUsername() {\r\n            return username;\r\n        }\r\n\r\n        public void setUsername(String username) {\r\n            this.username = username;\r\n        }\r\n\r\n        public String getPassword() {\r\n            return password;\r\n        }\r\n\r\n        public void setPassword(String password) {\r\n            this.password = password;\r\n        }\r\n\r\n        public int getMaxPoolSize() {\r\n            return maxPoolSize;\r\n        }\r\n\r\n        public void setMaxPoolSize(int maxPoolSize) {\r\n            this.maxPoolSize = maxPoolSize;\r\n        }\r\n    }\r\n\r\n    public static class Security {\r\n        private boolean enabled;\r\n        private List<String> allowedOrigins = new ArrayList<>();\r\n        private Jwt jwt = new Jwt();\r\n\r\n        public boolean isEnabled() {\r\n            return enabled;\r\n        }\r\n\r\n        public void setEnabled(boolean enabled) {\r\n            this.enabled = enabled;\r\n        }\r\n\r\n        public List<String> getAllowedOrigins() {\r\n            return allowedOrigins;\r\n        }\r\n\r\n        public void setAllowedOrigins(List<String> allowedOrigins) {\r\n            this.allowedOrigins = allowedOrigins;\r\n        }\r\n\r\n        public Jwt getJwt() {\r\n            return jwt;\r\n        }\r\n\r\n        public void setJwt(Jwt jwt) {\r\n            this.jwt = jwt;\r\n        }\r\n\r\n        public static class Jwt {\r\n            private String secret;\r\n            private long expirationMs;\r\n\r\n            public String getSecret() {\r\n                return secret;\r\n            }\r\n\r\n            public void setSecret(String secret) {\r\n                this.secret = secret;\r\n            }\r\n\r\n            public long getExpirationMs() {\r\n                return expirationMs;\r\n            }\r\n\r\n            public void setExpirationMs(long expirationMs) {\r\n                this.expirationMs = expirationMs;\r\n            }\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Corresponding YAML:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "app:\r\n  theme:\r\n    color: blue\r\n    font-size: 14\r\n    dark-mode: true\r\n  database:\r\n    url: jdbc:postgresql://localhost:5432/mydb\r\n    username: ${DB_USER}\r\n    password: ${DB_PASS}\r\n    max-pool-size: 20\r\n  security:\r\n    enabled: true\r\n    allowed-origins:\r\n      - https://app.example.com\r\n      - https://admin.example.com\r\n    jwt:\r\n      secret: ${JWT_SECRET}\r\n      expiration-ms: 3600000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "145-lists-and-maps-in-configurationproperties",
      children: "1.4.5 Lists and Maps in @ConfigurationProperties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\n@ConfigurationProperties(prefix = \"app.cache\")\r\npublic class CacheProperties {\r\n\r\n    private List<String> evictionPolicies = new ArrayList<>();\r\n    private Map<String, Integer> ttlSeconds = new HashMap<>();\r\n    private List<Server> servers = new ArrayList<>();\r\n\r\n    // getters and setters\r\n\r\n    public static class Server {\r\n        private String host;\r\n        private int port;\r\n\r\n        public String getHost() {\r\n            return host;\r\n        }\r\n\r\n        public void setHost(String host) {\r\n            this.host = host;\r\n        }\r\n\r\n        public int getPort() {\r\n            return port;\r\n        }\r\n\r\n        public void setPort(int port) {\r\n            this.port = port;\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YAML:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "app:\r\n  cache:\r\n    eviction-policies:\r\n      - LRU\r\n      - LFU\r\n      - TTL\r\n    ttl-seconds:\r\n      users: 3600\r\n      sessions: 1800\r\n      products: 300\r\n    servers:\r\n      - host: cache-01.example.com\r\n        port: 6379\r\n      - host: cache-02.example.com\r\n        port: 6380\n"
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
        children: "@Service\r\npublic class EmailService {\r\n\r\n    @Value(\"${app.mail.host}\")\r\n    private String host;\r\n\r\n    @Value(\"${app.mail.port:587}\")\r\n    private int port;\r\n\r\n    @Value(\"${app.mail.from}\")\r\n    private String from;\r\n\r\n    @Value(\"${app.mail.reply-to:noreply@example.com}\")\r\n    private String replyTo;\r\n\r\n    @Value(\"#{${app.mail.retry.count} * 2}\")\r\n    private int calculatedRetryCount;\r\n\r\n    @Value(\"${app.mail.templates}\")\r\n    private String[] templates;\r\n\r\n    public void send() {\r\n        System.out.printf(\"Sending mail via %s:%d from %s%n\", host, port, from);\r\n    }\r\n}\n"
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
        children: "@Configuration\r\n@PropertySource({\r\n    \"classpath:mail.properties\",\r\n    \"classpath:custom.properties\",\r\n    \"file:${external.config.path}/override.properties\"\r\n})\r\npublic class CustomConfig {\r\n    // configuration\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "mail.properties"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "mail.host=smtp.example.com\r\nmail.port=587\r\nmail.from=app@example.com\n"
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
        children: "package com.example.config;\r\n\r\nimport org.springframework.boot.env.YamlPropertySourceLoader;\r\nimport org.springframework.core.env.PropertySource;\r\nimport org.springframework.core.io.support.DefaultPropertySourceFactory;\r\nimport org.springframework.core.io.support.EncodedResource;\r\n\r\nimport java.io.IOException;\r\n\r\npublic class YamlPropertySourceFactory extends DefaultPropertySourceFactory {\r\n\r\n    @Override\r\n    public PropertySource<?> createPropertySource(String name, EncodedResource resource) throws IOException {\r\n        YamlPropertySourceLoader loader = new YamlPropertySourceLoader();\r\n        String filename = resource.getResource().getFilename();\r\n        return loader.load(filename != null ? filename : name, resource.getResource())\r\n                .get(0);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@PropertySource(value = \"classpath:app-config.yml\", factory = YamlPropertySourceFactory.class)\r\npublic class YamlConfig {\r\n    // properties from app-config.yml available via @Value\r\n}\n"
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
        children: "application.yml           # base configuration\r\napplication-dev.yml       # development overrides\r\napplication-staging.yml   # staging overrides\r\napplication-prod.yml      # production overrides\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Active profiles can be set in:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties\r\nspring.profiles.active=dev\n"
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
        children: "# Default profile (applies when no active profile matches)\r\nserver:\r\n  port: 8080\r\n\r\nspring:\r\n  application:\r\n    name: myapp\r\n\r\napp:\r\n  cache:\r\n    enabled: true\r\n    provider: local\r\n\r\n---\r\nspring:\r\n  config:\r\n    activate:\r\n      on-profile: dev\r\n\r\nserver:\r\n  port: 8081\r\n\r\napp:\r\n  cache:\r\n    provider: embedded-redis\r\n\r\n---\r\nspring:\r\n  config:\r\n    activate:\r\n      on-profile: prod\r\n\r\nserver:\r\n  port: 80\r\n\r\napp:\r\n  cache:\r\n    provider: redis-cluster\r\n\r\n---\r\nspring:\r\n  config:\r\n    activate:\r\n      on-profile: test\r\n\r\nserver:\r\n  port: 0  # random port\n"
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
        children: "spring:\r\n  profiles:\r\n    active: dev,eu-west\r\n    include: common,monitoring\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring.profiles.include"
      }), " to always include certain profiles:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application-dev.yml\r\nspring:\r\n  profiles:\r\n    include: dev-db,dev-logging\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "174-programmatic-profile-configuration",
      children: "1.7.4 Programmatic Profile Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootApplication\r\npublic class MyApplication {\r\n\r\n    public static void main(String[] args) {\r\n        SpringApplication app = new SpringApplication(MyApplication.class);\r\n        app.setAdditionalProfiles(\"dev\", \"eu-west\");\r\n        app.run(args);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Or using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SpringApplicationBuilder"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootApplication\r\npublic class MyApplication {\r\n\r\n    public static void main(String[] args) {\r\n        new SpringApplicationBuilder(MyApplication.class)\r\n            .profiles(\"dev\")\r\n            .properties(\"spring.config.additional-location=optional:config/\")\r\n            .run(args);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "175-profile-annotation",
      children: "1.7.5 @Profile Annotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conditionally activate beans based on profile:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\n@Profile(\"dev\")\r\npublic class DevNotificationService implements NotificationService {\r\n    @Override\r\n    public void send(String message) {\r\n        System.out.println(\"[DEV] Notification: \" + message);\r\n    }\r\n}\r\n\r\n@Service\r\n@Profile(\"prod\")\r\npublic class ProdNotificationService implements NotificationService {\r\n    @Override\r\n    public void send(String message) {\r\n        // Send via real SMS/email provider\r\n    }\r\n}\r\n\r\n@Service\r\n@Profile(\"!test\")  // Active for all profiles EXCEPT 'test'\r\npublic class ProductionReadyService {\r\n    // not available during tests\r\n}\n"
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
        children: "app:\r\n  theme:\r\n    backgroundColor: red         # camelCase\r\n    background-color: red        # kebab-case (recommended for .properties and YAML)\r\n    background_color: red        # snake_case\r\n    BACKGROUND_COLOR: red        # UPPER_CASE (common for env vars)\n"
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
        children: "public enum DatabaseProvider {\r\n    POSTGRESQL, MYSQL, H2, ORACLE\r\n}\r\n\r\n@Component\r\n@ConfigurationProperties(prefix = \"app.database\")\r\npublic class DatabaseProperties {\r\n    private DatabaseProvider provider;\r\n\r\n    public DatabaseProvider getProvider() {\r\n        return provider;\r\n    }\r\n\r\n    public void setProvider(DatabaseProvider provider) {\r\n        this.provider = provider;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YAML:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "app:\r\n  database:\r\n    provider: postgresql   # case-insensitive matching\n"
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
        children: "# Random integer\r\napp.secret.id=${random.int}\r\napp.secret.range=${random.int(1000,9999)}\r\napp.secret.max=${random.int(10000)}\r\napp.secret.long=${random.long}\r\n\r\n# Random UUID\r\napp.secret.uuid=${random.uuid}\r\n\r\n# Random string\r\napp.secret.token=${random.value}\r\napp.secret.alphanumeric=${random.value(32)}  # 32 characters\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\n@ConfigurationProperties(prefix = \"app.secret\")\r\npublic class SecretProperties {\r\n    private int id;\r\n    private int range;\r\n    private int max;\r\n    private long longValue;\r\n    private UUID uuid;\r\n    private String token;\r\n    private String alphanumeric;\r\n\r\n    // getters and setters\r\n}\n"
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
        children: "export SERVER_PORT=9090\r\nexport APP_THEME_COLOR=red\r\nexport SPRING_DATASOURCE_URL=jdbc:postgresql://prod-db:5432/mydb\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "On Windows:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cmd",
        children: "set SERVER_PORT=9090\r\nset APP_THEME_COLOR=red\n"
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
        children: "<!-- In web.xml or embedded container config -->\r\n<env-entry>\r\n    <env-entry-name>java:comp/env/app/database/maxPoolSize</env-entry-name>\r\n    <env-entry-type>java.lang.Integer</env-entry-type>\r\n    <env-entry-value>20</env-entry-value>\r\n</env-entry>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JNDI properties can be accessed via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Environment"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class JndiConfigReader {\r\n\r\n    @Autowired\r\n    private Environment env;\r\n\r\n    public void printConfig() {\r\n        Integer maxPoolSize = env.getProperty(\"app.database.maxPoolSize\", Integer.class, 10);\r\n        System.out.println(\"Max pool size from JNDI/ENV: \" + maxPoolSize);\r\n    }\r\n}\n"
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
        children: "# application.yml\r\nspring:\r\n  application:\r\n    name: myapp\r\n  config:\r\n    import:\r\n      - classpath:common.yml\r\n      - classpath:db-config.yml\r\n      - optional:file:./override.yml\r\n      - configtree:/etc/myapp/config/\r\n      - classpath:${app.environment:-dev}-config.yml\n"
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
        children: "spring:\r\n  config:\r\n    import:\r\n      - classpath:base.yml           # Lowest priority among imports\r\n      - classpath:environment.yml    # Overrides base.yml\r\n      - file:./local-override.yml    # Overrides all above\n"
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
        children: "/etc/config/\r\n├── app.cache.enabled\r\n├── app.cache.provider\r\n├── app.database.max-pool-size\r\n└── app.database.url\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot's config tree support reads these files and maps the file path to property keys:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\r\n  config:\r\n    import: \"configtree:/etc/config/\"\n"
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
        children: "spring:\r\n  config:\r\n    import: \"configtree:/etc/config/\"\r\n  cloud:\r\n    kubernetes:\r\n      reload:\r\n        enabled: true\r\n        mode: polling\r\n        period: 5000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-validation-of-configuration-properties",
      children: "1.13 Validation of Configuration Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apply JSR-303/Jakarta Bean Validation annotations:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.constraints.*;\r\n\r\n@Component\r\n@Validated\r\n@ConfigurationProperties(prefix = \"app.mail\")\r\npublic class ValidatedMailProperties {\r\n\r\n    @NotBlank(message = \"SMTP host must not be blank\")\r\n    private String host;\r\n\r\n    @Min(value = 1, message = \"Port must be positive\")\r\n    @Max(value = 65535, message = \"Port must be <= 65535\")\r\n    private int port = 25;\r\n\r\n    @Email(message = \"From address must be valid email\")\r\n    @NotBlank\r\n    private String from;\r\n\r\n    @NotEmpty\r\n    private List<@Email String> bccRecipients;\r\n\r\n    @Pattern(regexp = \"^(STARTTLS|SSL|NONE)$\")\r\n    private String encryption = \"STARTTLS\";\r\n\r\n    @Positive\r\n    private long timeoutMs = 5000;\r\n\r\n    @NotNull\r\n    private Credentials credentials;\r\n\r\n    // getters and setters\r\n\r\n    public static class Credentials {\r\n        @NotBlank\r\n        private String username;\r\n\r\n        @NotBlank\r\n        private String password;\r\n\r\n        // getters and setters\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot will fail to start with a descriptive error if validation fails:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Binding to target org.springframework.boot.context.properties.bind.BindException:\r\n  Failed to bind properties under 'app.mail' to com.example.config.ValidatedMailProperties:\r\n\r\n    Property: app.mail.host\r\n    Value: null\r\n    Reason: SMTP host must not be blank\r\n\r\n    Property: app.mail.port\r\n    Value: 0\r\n    Reason: Port must be positive\n"
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
        children: "@Component\r\n@ConfigurationProperties(prefix = \"app.timeout\")\r\npublic class TimeoutProperties {\r\n\r\n    private Duration connect;\r\n    private Duration read;\r\n    private Duration write;\r\n    private Duration cacheTtl;\r\n\r\n    // getters and setters\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "app:\r\n  timeout:\r\n    connect: 5s          # 5 seconds\r\n    read: 30s             # 30 seconds\r\n    write: 2m             # 2 minutes\r\n    cache-ttl: 1h         # 1 hour\r\n\r\n    # Other valid formats:\r\n    # 10ns   → 10 nanoseconds\r\n    # 5ms    → 5 milliseconds\r\n    # 5000ms → 5000 milliseconds\r\n    # 10s    → 10 seconds\r\n    # 5m     → 5 minutes\r\n    # 2h     → 2 hours\r\n    # 1d     → 1 day\r\n    # PT5S   → ISO-8601 format (5 seconds)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can also use long values with a default unit:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@DurationUnit(ChronoUnit.SECONDS)\r\nprivate Duration connect;\n"
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
        children: "@Component\r\n@ConfigurationProperties(prefix = \"app.buffer\")\r\npublic class BufferProperties {\r\n\r\n    private DataSize maxSize;\r\n    private DataSize chunkSize;\r\n    private DataSize memoryLimit;\r\n\r\n    // getters and setters\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "app:\r\n  buffer:\r\n    max-size: 100MB      # 100 megabytes\r\n    chunk-size: 64KB     # 64 kilobytes\r\n    memory-limit: 2GB    # 2 gigabytes\r\n\r\n    # Valid suffixes:\r\n    # B     → bytes\r\n    # KB    → kilobytes (1000-based)\r\n    # MB    → megabytes (1000-based)\r\n    # GB    → gigabytes (1000-based)\r\n    # TB    → terabytes (1000-based)\n"
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
        children: "<dependency>\r\n    <groupId>org.springframework.boot</groupId>\r\n    <artifactId>spring-boot-configuration-processor</artifactId>\r\n    <optional>true</optional>\r\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you compile, the annotation processor generates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "META-INF/spring-configuration-metadata.json"
      }), " with property descriptions, types, and default values. For additional documentation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\n@ConfigurationProperties(prefix = \"app.mail\")\r\npublic class DocumentedMailProperties {\r\n\r\n    /**\r\n     * SMTP server hostname.\r\n     */\r\n    private String host;\r\n\r\n    /**\r\n     * SMTP server port. Defaults to 587 for STARTTLS.\r\n     */\r\n    private int port = 587;\r\n\r\n    /**\r\n     * Email address used as the \"From\" field.\r\n     */\r\n    private String from;\r\n\r\n    /**\r\n     * Whether to use STARTTLS encryption.\r\n     */\r\n    private boolean starttls = true;\r\n\r\n    /**\r\n     * Maximum number of retry attempts on failure.\r\n     */\r\n    private int maxRetries = 3;\r\n\r\n    // getters and setters\r\n}\n"
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
        children: "spring:\r\n  application:\r\n    name: order-service\r\n  profiles:\r\n    active: ${ACTIVE_PROFILES:default}\r\n\r\n  config:\r\n    import:\r\n      - optional:classpath:build-info.yml\r\n      - optional:file:./secrets.yml\r\n\r\n  datasource:\r\n    url: ${DATABASE_URL}\r\n    username: ${DATABASE_USER}\r\n    password: ${DATABASE_PASSWORD}\r\n    hikari:\r\n      maximum-pool-size: ${HIKARI_MAX_POOL:20}\r\n      minimum-idle: 5\r\n      idle-timeout: 300000\r\n      connection-timeout: 20000\r\n\r\n  jpa:\r\n    hibernate:\r\n      ddl-auto: validate\r\n    show-sql: false\r\n    properties:\r\n      hibernate:\r\n        format_sql: true\r\n        jdbc:\r\n          batch_size: 50\r\n\r\n  jackson:\r\n    serialization:\r\n      write-dates-as-timestamps: false\r\n    deserialization:\r\n      fail-on-unknown-properties: false\r\n\r\nserver:\r\n  port: ${PORT:8080}\r\n  compression:\r\n    enabled: true\r\n    mime-types: text/html,text/css,application/json\r\n    min-response-size: 2048\r\n  tomcat:\r\n    max-connections: 10000\r\n    threads:\r\n      max: 200\r\n      min-spare: 20\r\n\r\napp:\r\n  order:\r\n    processing-timeout: 30s\r\n    max-items-per-order: 50\r\n    payment-grace-period: 5m\r\n    statuses:\r\n      - PENDING\r\n      - CONFIRMED\r\n      - PROCESSING\r\n      - SHIPPED\r\n      - DELIVERED\r\n      - CANCELLED\r\n    notification:\r\n      enabled: true\r\n      channels: [EMAIL, SMS, PUSH]\r\n\r\n  cache:\r\n    provider: redis\r\n    default-ttl: 10m\r\n    max-size: 500MB\r\n    redis:\r\n      host: ${REDIS_HOST:localhost}\r\n      port: ${REDIS_PORT:6379}\r\n      password: ${REDIS_PASSWORD:}\r\n\r\n  monitoring:\r\n    enabled: true\r\n    alert-email: ops@example.com\r\n    thresholds:\r\n      error-rate: 0.05\r\n      latency-p99: 500ms\r\n      cpu-warning: 80\r\n      memory-warning: 85\r\n\r\n  features:\r\n    new-checkout: ${FEATURE_NEW_CHECKOUT:false}\r\n    dark-mode: true\r\n    beta-users: ${BETA_USERS:}\r\n\r\n---\r\nspring:\r\n  config:\r\n    activate:\r\n      on-profile: dev\r\n\r\nserver:\r\n  port: 8081\r\n\r\napp:\r\n  order:\r\n    processing-timeout: 5s\r\n    max-items-per-order: 100\r\n    notification:\r\n      enabled: false\r\n\r\nlogging:\r\n  level:\r\n    com.example: DEBUG\r\n    org.springframework.web: DEBUG\r\n\r\n---\r\nspring:\r\n  config:\r\n    activate:\r\n      on-profile: prod\r\n\r\nserver:\r\n  port: 80\r\n\r\napp:\r\n  order:\r\n    processing-timeout: 60s\r\n    max-items-per-order: 30\r\n\r\nlogging:\r\n  level:\r\n    com.example: WARN\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OrderProperties.java"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.orderservice.config;\r\n\r\nimport jakarta.validation.Valid;\r\nimport jakarta.validation.constraints.Max;\r\nimport jakarta.validation.constraints.NotBlank;\r\nimport jakarta.validation.constraints.NotNull;\r\nimport jakarta.validation.constraints.Positive;\r\nimport org.springframework.boot.context.properties.ConfigurationProperties;\r\nimport org.springframework.stereotype.Component;\r\nimport org.springframework.validation.annotation.Validated;\r\n\r\nimport java.time.Duration;\r\nimport java.util.ArrayList;\r\nimport java.util.List;\r\n\r\n@Validated\r\n@Component\r\n@ConfigurationProperties(prefix = \"app.order\")\r\npublic class OrderProperties {\r\n\r\n    @Positive\r\n    private Duration processingTimeout;\r\n\r\n    @Max(100)\r\n    private int maxItemsPerOrder;\r\n\r\n    @Positive\r\n    private Duration paymentGracePeriod;\r\n\r\n    @NotEmpty\r\n    private List<@NotBlank String> statuses = new ArrayList<>();\r\n\r\n    @Valid\r\n    @NotNull\r\n    private Notification notification = new Notification();\r\n\r\n    public Duration getProcessingTimeout() {\r\n        return processingTimeout;\r\n    }\r\n\r\n    public void setProcessingTimeout(Duration processingTimeout) {\r\n        this.processingTimeout = processingTimeout;\r\n    }\r\n\r\n    public int getMaxItemsPerOrder() {\r\n        return maxItemsPerOrder;\r\n    }\r\n\r\n    public void setMaxItemsPerOrder(int maxItemsPerOrder) {\r\n        this.maxItemsPerOrder = maxItemsPerOrder;\r\n    }\r\n\r\n    public Duration getPaymentGracePeriod() {\r\n        return paymentGracePeriod;\r\n    }\r\n\r\n    public void setPaymentGracePeriod(Duration paymentGracePeriod) {\r\n        this.paymentGracePeriod = paymentGracePeriod;\r\n    }\r\n\r\n    public List<String> getStatuses() {\r\n        return statuses;\r\n    }\r\n\r\n    public void setStatuses(List<String> statuses) {\r\n        this.statuses = statuses;\r\n    }\r\n\r\n    public Notification getNotification() {\r\n        return notification;\r\n    }\r\n\r\n    public void setNotification(Notification notification) {\r\n        this.notification = notification;\r\n    }\r\n\r\n    public static class Notification {\r\n        private boolean enabled;\r\n        private List<String> channels = new ArrayList<>();\r\n\r\n        public boolean isEnabled() {\r\n            return enabled;\r\n        }\r\n\r\n        public void setEnabled(boolean enabled) {\r\n            this.enabled = enabled;\r\n        }\r\n\r\n        public List<String> getChannels() {\r\n            return channels;\r\n        }\r\n\r\n        public void setChannels(List<String> channels) {\r\n            this.channels = channels;\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ConfigValidationRunner.java"
      }), " → a component that validates configuration at startup:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.orderservice.config;\r\n\r\nimport org.slf4j.Logger;\r\nimport org.slf4j.LoggerFactory;\r\nimport org.springframework.boot.CommandLineRunner;\r\nimport org.springframework.stereotype.Component;\r\n\r\n@Component\r\npublic class ConfigValidationRunner implements CommandLineRunner {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(ConfigValidationRunner.class);\r\n\r\n    private final AppProperties appProperties;\r\n    private final OrderProperties orderProperties;\r\n\r\n    public ConfigValidationRunner(AppProperties appProperties, OrderProperties orderProperties) {\r\n        this.appProperties = appProperties;\r\n        this.orderProperties = orderProperties;\r\n    }\r\n\r\n    @Override\r\n    public void run(String... args) {\r\n        log.info(\"=== Configuration Report ===\");\r\n        log.info(\"Application Name: {}\", appProperties.getAppName());\r\n        log.info(\"Active Profiles: {}\", String.join(\", \", appProperties.getActiveProfiles()));\r\n        log.info(\"Order timeout: {}\", orderProperties.getProcessingTimeout());\r\n        log.info(\"Max items per order: {}\", orderProperties.getMaxItemsPerOrder());\r\n        log.info(\"Payment grace period: {}\", orderProperties.getPaymentGracePeriod());\r\n        log.info(\"Notification enabled: {}\", orderProperties.getNotification().isEnabled());\r\n        log.info(\"Notification channels: {}\", orderProperties.getNotification().getChannels());\r\n        log.info(\"Cache TTL: {}\", appProperties.getCache().getDefaultTtl());\r\n        log.info(\"Cache max size: {}\", appProperties.getCache().getMaxSize());\r\n        log.info(\"==============================\");\r\n\r\n        if (orderProperties.getProcessingTimeout().compareTo(Duration.ofSeconds(5)) < 0) {\r\n            log.warn(\"Processing timeout is very low: {}\", orderProperties.getProcessingTimeout());\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "117-programmatic-environment-access",
      children: "1.17 Programmatic Environment Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sometimes you need to access configuration programmatically:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class EnvironmentInspector {\r\n\r\n    @Autowired\r\n    private Environment env;\r\n\r\n    public void inspect() {\r\n        // Get with default\r\n        String themeColor = env.getProperty(\"app.theme.color\", \"blue\");\r\n\r\n        // Get with type conversion\r\n        int port = env.getProperty(\"server.port\", Integer.class, 8080);\r\n\r\n        // Get required (throws IllegalStateException if missing)\r\n        String dbUrl = env.getRequiredProperty(\"spring.datasource.url\");\r\n\r\n        // Check if property exists\r\n        boolean hasJwt = env.containsProperty(\"app.security.jwt.secret\");\r\n\r\n        // Profile checks\r\n        boolean isDev = env.acceptsProfiles(Profiles.of(\"dev\"));\r\n        boolean isProdOrStaging = env.acceptsProfiles(Profiles.of(\"prod\", \"staging\"));\r\n\r\n        // Get array of active profiles\r\n        String[] activeProfiles = env.getActiveProfiles();\r\n        String[] defaultProfiles = env.getDefaultProfiles();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "118-property-placeholders",
      children: "1.18 Property Placeholders"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Properties can reference other properties:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "app.name=My Application\r\napp.description=Welcome to ${app.name}\r\napp.homepage=https://${app.domain}/\r\napp.domain=example.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With default values:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "app.database.name=${DB_NAME:mydb}\r\napp.port=${PORT:8080}\r\napp.host=${HOST:localhost}\r\napp.url=jdbc:postgresql://${app.host}:${app.port}/${app.database.name}\n"
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
        children: "<dependency>\r\n    <groupId>com.github.ulisesbocchio</groupId>\r\n    <artifactId>jasypt-spring-boot-starter</artifactId>\r\n    <version>3.0.5</version>\r\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.yml (with Jasypt)\r\napp:\r\n  database:\r\n    password: ENC(encryptedPasswordHere)\n"
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
        children: "@SpringBootApplication\r\n@ConfigurationPropertiesScan(\"com.example.orderservice.config\")\r\npublic class OrderServiceApplication {\r\n\r\n    public static void main(String[] args) {\r\n        SpringApplication.run(OrderServiceApplication.class, args);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now properties classes only need ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConfigurationProperties"
      }), " with the prefix:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@ConfigurationProperties(prefix = \"app.cache\")\r\npublic class CacheProperties {\r\n    // ...\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-custom-propertysource",
      children: "1.21 Custom PropertySource"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a custom property source for loading from a custom source (e.g., a database):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.orderservice.config;\r\n\r\nimport org.springframework.core.env.PropertySource;\r\n\r\npublic class DatabasePropertySource extends PropertySource<String> {\r\n\r\n    private final DatabaseConfigRepository repository;\r\n\r\n    public DatabasePropertySource(String name, DatabaseConfigRepository repository) {\r\n        super(name);\r\n        this.repository = repository;\r\n    }\r\n\r\n    @Override\r\n    public Object getProperty(String name) {\r\n        // Look up the property from a database table\r\n        return repository.findValueByName(name)\r\n                .orElse(null);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Register it in a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConfigurableEnvironment"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class DatabasePropertySourceConfig implements ApplicationContextInitializer<ConfigurableApplicationContext> {\r\n\r\n    @Override\r\n    public void initialize(ConfigurableApplicationContext context) {\r\n        ConfigurableEnvironment environment = context.getEnvironment();\r\n        DatabaseConfigRepository repository = context.getBean(DatabaseConfigRepository.class);\r\n        DatabasePropertySource propertySource = new DatabasePropertySource(\"database\", repository);\r\n        environment.getPropertySources().addLast(propertySource);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-testing-with-custom-configuration",
      children: "1.22 Testing with Custom Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\r\n@ActiveProfiles(\"test\")\r\nclass OrderPropertiesTest {\r\n\r\n    @Autowired\r\n    private OrderProperties orderProperties;\r\n\r\n    @Test\r\n    void shouldLoadProperties() {\r\n        assertThat(orderProperties.getProcessingTimeout()).isEqualTo(Duration.ofSeconds(5));\r\n        assertThat(orderProperties.getMaxItemsPerOrder()).isEqualTo(100);\r\n        assertThat(orderProperties.getNotification().isEnabled()).isFalse();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TestPropertySource"
      }), " for test-specific overrides:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\r\n@TestPropertySource(properties = {\r\n    \"app.order.processing-timeout=10s\",\r\n    \"app.order.notification.enabled=true\"\r\n})\r\nclass OrderServiceTest {\r\n\r\n    @Autowired\r\n    private OrderProperties orderProperties;\r\n\r\n    @Test\r\n    void shouldUseTestOverrides() {\r\n        assertThat(orderProperties.getProcessingTimeout()).isEqualTo(Duration.ofSeconds(10));\r\n        assertThat(orderProperties.getNotification().isEnabled()).isTrue();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-building-config-hierarchy-in-large-projects",
      children: "1.23 Building Config Hierarchy in Large Projects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For microservices or multi-module projects, organize configuration as:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "config/\r\n├── application.yml                  # shared base config\r\n├── application-dev.yml              # shared dev overrides\r\n├── application-prod.yml             # shared prod overrides\r\n├── service-order/\r\n│   ├── application.yml              # order-service defaults\r\n│   └── application-prod.yml         # order-service prod overrides\r\n└── service-payment/\r\n    ├── application.yml              # payment-service defaults\r\n    └── application-prod.yml         # payment-service prod overrides\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Launch with:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "java -jar order-service.jar \\\r\n  --spring.config.additional-location=config/ \\\r\n  --spring.config.location=config/service-order/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-spring-cloud-config-integration",
      children: "1.24 Spring Cloud Config Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For centralized configuration in microservices, integrate with Spring Cloud Config:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# bootstrap.yml (or spring.config.import in 2020+)\r\nspring:\r\n  application:\r\n    name: order-service\r\n  cloud:\r\n    config:\r\n      uri: http://config-server:8888\r\n      fail-fast: true\r\n      retry:\r\n        initial-interval: 1000\r\n        max-attempts: 5\r\n        multiplier: 1.5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Using spring.config.import in 2024+\r\nspring:\r\n  config:\r\n    import: configserver:http://config-server:8888\n"
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