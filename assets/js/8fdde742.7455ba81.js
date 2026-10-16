"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5803],{

/***/ 9953
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_11_auto_configuration_md_8fd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-11-auto-configuration-md-8fd.json
const site_docs_courses_java_11_auto_configuration_md_8fd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/11-auto-configuration","title":"Auto-Configuration & Starters","description":"Previous Application Properties & Configuration","source":"@site/docs/courses/java/11-auto-configuration.md","sourceDirName":"courses/java","slug":"/java/11-auto-configuration","permalink":"/ai-engineering-journey/java/11-auto-configuration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"11-auto-configuration","slug":"/java/11-auto-configuration","title":"Auto-Configuration & Starters","sidebar_label":"Auto-Configuration & Starters","sidebar_position":11},"sidebar":"course-java","previous":{"title":"Dependency Injection & IoC Container","permalink":"/ai-engineering-journey/java/10-di-container"},"next":{"title":"Application Properties & Configuration","permalink":"/ai-engineering-journey/java/12-configuration"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/java/11-auto-configuration.md


const frontMatter = {
	id: '11-auto-configuration',
	slug: '/java/11-auto-configuration',
	title: 'Auto-Configuration & Starters',
	sidebar_label: 'Auto-Configuration & Starters',
	sidebar_position: 11
};
const contentTitle = 'Auto-Configuration & Starters';

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
  "value": "1. @EnableAutoConfiguration â€” The Entry Point",
  "id": "1-enableautoconfiguration-â-the-entry-point",
  "level": 2
}, {
  "value": "1.1 @EnableAutoConfiguration Internals",
  "id": "11-enableautoconfiguration-internals",
  "level": 3
}, {
  "value": "1.2 AutoConfigurationImportSelector",
  "id": "12-autoconfigurationimportselector",
  "level": 3
}, {
  "value": "1.3 Which Auto-Configuration Classes Are Loaded?",
  "id": "13-which-auto-configuration-classes-are-loaded",
  "level": 3
}, {
  "value": "2. The @Conditional Family",
  "id": "2-the-conditional-family",
  "level": 2
}, {
  "value": "2.1 @ConditionalOnClass and @ConditionalOnMissingClass",
  "id": "21-conditionalonclass-and-conditionalonmissingclass",
  "level": 3
}, {
  "value": "2.2 @ConditionalOnBean and @ConditionalOnMissingBean",
  "id": "22-conditionalonbean-and-conditionalonmissingbean",
  "level": 3
}, {
  "value": "2.3 @ConditionalOnProperty",
  "id": "23-conditionalonproperty",
  "level": 3
}, {
  "value": "2.4 @ConditionalOnResource",
  "id": "24-conditionalonresource",
  "level": 3
}, {
  "value": "2.5 @ConditionalOnExpression",
  "id": "25-conditionalonexpression",
  "level": 3
}, {
  "value": "2.6 @ConditionalOnCloudPlatform",
  "id": "26-conditionaloncloudplatform",
  "level": 3
}, {
  "value": "2.7 @ConditionalOnJndi",
  "id": "27-conditionalonjndi",
  "level": 3
}, {
  "value": "2.8 @ConditionalOnJava",
  "id": "28-conditionalonjava",
  "level": 3
}, {
  "value": "2.9 @ConditionalOnSingleCandidate",
  "id": "29-conditionalonsinglecandidate",
  "level": 3
}, {
  "value": "2.10 @ConditionalOnWarDeployment",
  "id": "210-conditionalonwardeployment",
  "level": 3
}, {
  "value": "2.11 Custom @Conditional",
  "id": "211-custom-conditional",
  "level": 3
}, {
  "value": "3. Auto-Configuration Classes",
  "id": "3-auto-configuration-classes",
  "level": 2
}, {
  "value": "3.1 @AutoConfiguration vs @Configuration",
  "id": "31-autoconfiguration-vs-configuration",
  "level": 3
}, {
  "value": "3.2 Major Auto-Configuration Classes",
  "id": "32-major-auto-configuration-classes",
  "level": 3
}, {
  "value": "3.3 Conditional Chain Evaluation",
  "id": "33-conditional-chain-evaluation",
  "level": 3
}, {
  "value": "3.4 @AutoConfigureBefore, @AutoConfigureAfter, @AutoConfigureOrder",
  "id": "34-autoconfigurebefore-autoconfigureafter-autoconfigureorder",
  "level": 3
}, {
  "value": "4. Auto-Configuration Discovery: spring.factories and AutoConfiguration.imports",
  "id": "4-auto-configuration-discovery-springfactories-and-autoconfigurationimports",
  "level": 2
}, {
  "value": "4.1 The Old Way: spring.factories (Spring Boot 2.x)",
  "id": "41-the-old-way-springfactories-spring-boot-2x",
  "level": 3
}, {
  "value": "4.2 The New Way: AutoConfiguration.imports (Spring Boot 3.x)",
  "id": "42-the-new-way-autoconfigurationimports-spring-boot-3x",
  "level": 3
}, {
  "value": "4.3 Listing Boot&#39;s Built-In Auto-Configurations",
  "id": "43-listing-boots-built-in-auto-configurations",
  "level": 3
}, {
  "value": "5. Building a Custom Spring Boot Starter",
  "id": "5-building-a-custom-spring-boot-starter",
  "level": 2
}, {
  "value": "5.1 Building a Greeting Starter",
  "id": "51-building-a-greeting-starter",
  "level": 3
}, {
  "value": "Step 1: The Auto-Configuration Module",
  "id": "step-1-the-auto-configuration-module",
  "level": 4
}, {
  "value": "Step 2: The Starter Module",
  "id": "step-2-the-starter-module",
  "level": 4
}, {
  "value": "Step 3: Using the Starter",
  "id": "step-3-using-the-starter",
  "level": 4
}, {
  "value": "5.2 Naming Conventions",
  "id": "52-naming-conventions",
  "level": 3
}, {
  "value": "5.3 Auto-Configuration Conditionals in the Starter",
  "id": "53-auto-configuration-conditionals-in-the-starter",
  "level": 3
}, {
  "value": "6. Configuration Properties Binding",
  "id": "6-configuration-properties-binding",
  "level": 2
}, {
  "value": "6.1 @ConfigurationProperties(prefix)",
  "id": "61-configurationpropertiesprefix",
  "level": 3
}, {
  "value": "6.2 @EnableConfigurationProperties",
  "id": "62-enableconfigurationproperties",
  "level": 3
}, {
  "value": "6.3 Relaxed Binding",
  "id": "63-relaxed-binding",
  "level": 3
}, {
  "value": "6.4 @ConstructorBinding",
  "id": "64-constructorbinding",
  "level": 3
}, {
  "value": "6.5 Duration and DataSize Conversion",
  "id": "65-duration-and-datasize-conversion",
  "level": 3
}, {
  "value": "6.6 @NestedConfigurationProperty",
  "id": "66-nestedconfigurationproperty",
  "level": 3
}, {
  "value": "6.7 Validation",
  "id": "67-validation",
  "level": 3
}, {
  "value": "6.8 Configuration Properties in a Non-Spring-Boot Project",
  "id": "68-configuration-properties-in-a-non-spring-boot-project",
  "level": 3
}, {
  "value": "7. Metadata Generation (spring-boot-configuration-processor)",
  "id": "7-metadata-generation-spring-boot-configuration-processor",
  "level": 2
}, {
  "value": "7.1 Adding the Dependency",
  "id": "71-adding-the-dependency",
  "level": 3
}, {
  "value": "7.2 What It Generates",
  "id": "72-what-it-generates",
  "level": 3
}, {
  "value": "7.3 Providing Hints",
  "id": "73-providing-hints",
  "level": 3
}, {
  "value": "8. Auto-Configuration Ordering and Exclusion",
  "id": "8-auto-configuration-ordering-and-exclusion",
  "level": 2
}, {
  "value": "8.1 Phase Ordering",
  "id": "81-phase-ordering",
  "level": 3
}, {
  "value": "8.2 Conditional Chain",
  "id": "82-conditional-chain",
  "level": 3
}, {
  "value": "8.3 Preventing Auto-Configuration",
  "id": "83-preventing-auto-configuration",
  "level": 3
}, {
  "value": "Method 1: @SpringBootApplication(exclude = ...)",
  "id": "method-1-springbootapplicationexclude--",
  "level": 4
}, {
  "value": "Method 2: excludeName",
  "id": "method-2-excludename",
  "level": 4
}, {
  "value": "Method 3: Property-based exclusion",
  "id": "method-3-property-based-exclusion",
  "level": 4
}, {
  "value": "8.4 Testing Exclusions",
  "id": "84-testing-exclusions",
  "level": 3
}, {
  "value": "9. Failure Analysis",
  "id": "9-failure-analysis",
  "level": 2
}, {
  "value": "9.1 Built-in FailureAnalyzers",
  "id": "91-built-in-failureanalyzers",
  "level": 3
}, {
  "value": "9.2 Custom FailureAnalyzer",
  "id": "92-custom-failureanalyzer",
  "level": 3
}, {
  "value": "9.3 Registering the Custom FailureAnalyzer",
  "id": "93-registering-the-custom-failureanalyzer",
  "level": 3
}, {
  "value": "9.4 Testing a FailureAnalyzer",
  "id": "94-testing-a-failureanalyzer",
  "level": 3
}, {
  "value": "10. Environment Post-Processing",
  "id": "10-environment-post-processing",
  "level": 2
}, {
  "value": "10.1 Built-in: RandomValuePropertySource",
  "id": "101-built-in-randomvaluepropertysource",
  "level": 3
}, {
  "value": "10.2 Custom EnvironmentPostProcessor",
  "id": "102-custom-environmentpostprocessor",
  "level": 3
}, {
  "value": "10.3 Registering EnvironmentPostProcessor",
  "id": "103-registering-environmentpostprocessor",
  "level": 3
}, {
  "value": "10.4 Adding Custom Property Sources",
  "id": "104-adding-custom-property-sources",
  "level": 3
}, {
  "value": "10.5 @PropertySource Ordering",
  "id": "105-propertysource-ordering",
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
        id: "auto-configuration--starters",
        children: "Auto-Configuration & Starters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./10-di-container.md",
          children: "Dependency Injection & IoC Container"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./12-configuration.md",
          children: "Application Properties & Configuration"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Auto-configuration is Spring Boot's killer feature. It is the mechanism that transforms a bare Spring Framework application â€” where you must manually declare every bean, every component scan, every property source â€” into a Spring Boot application that \"just works.\" When you add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-starter-web"
      }), " to your dependencies, Spring Boot automatically configures a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DispatcherServlet"
      }), ", an embedded Tomcat server, a Jackson ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ObjectMapper"
      }), ", a multipart resolver, error handling, and dozens of other beans. You write zero configuration for any of them."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key insight is that auto-configuration is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "opinionated but overridable"
      }), ". Spring Boot makes reasonable default choices (Tomcat over Jetty, Jackson over Gson, Logback over Log4j2) but provides clean escape hatches: exclude an auto-configuration class, supply your own bean (which takes priority), or flip a property. This philosophy â€” \"start with sensible defaults, customize only what you need\" â€” is why Spring Boot dominates enterprise Java."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This chapter covers the complete auto-configuration machinery: how ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EnableAutoConfiguration"
      }), " works, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Conditional"
      }), " family of annotations that gates auto-configuration beans, how auto-configuration classes are discovered and ordered, how to build custom starters, how configuration properties bind, how metadata is generated, and how to extend the infrastructure with custom failure analysis and environment post-processing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every example in this chapter is complete and compilable. Create a Maven project with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-starter"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-starter-web"
      }), " as dependencies, or use any existing Spring Boot 3.x project."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain how ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@EnableAutoConfiguration"
        }), " delegates to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AutoConfigurationImportSelector"
        }), " and loads auto-configuration classes from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spring.factories"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AutoConfiguration.imports"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use every member of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Conditional"
        }), " family to gate bean definitions on classpath presence, bean presence, property values, resource availability, expression evaluation, cloud platform, JNDI, Java version, single-candidate beans, and war deployment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recognize the major auto-configuration classes â€” ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataSourceAutoConfiguration"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JpaRepositoriesAutoConfiguration"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SecurityAutoConfiguration"
        }), " â€” and understand their conditional guards"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Distinguish ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@AutoConfiguration"
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Configuration"
        }), " and understand the Spring Boot 3.x import mechanism"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure auto-configuration ordering with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@AutoConfigureBefore"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@AutoConfigureAfter"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@AutoConfigureOrder"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build a complete custom Spring Boot starter with auto-configuration module, starter module, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConfigurationProperties"
        }), ", conditionals, and metadata"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Exclude unwanted auto-configuration classes using both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exclude"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "excludeName"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bind configuration properties with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConfigurationProperties(prefix)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@EnableConfigurationProperties"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConstructorBinding"
        }), ", relaxed binding, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Duration"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataSize"
        }), " conversion, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NestedConfigurationProperty"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generate configuration metadata with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spring-boot-configuration-processor"
        }), " and understand the generated JSON schema"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FailureAnalyzer"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FailureAnalysis"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EnvironmentPostProcessor"
        }), " to inject property sources before bean creation"]
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
            children: "Auto-Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@EnableAutoConfiguration loads from spring.factories/AutoConfiguration.imports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opinionated defaults, easily overridable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Conditional Family"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class/property/bean/resource conditions gate auto-config beans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables graceful fallback when dependencies are absent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Starters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-config module + starter POM + configuration properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulate reusable infrastructure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration Properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@ConfigurationProperties with relaxed binding and metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe, IDE-friendly configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@AutoConfiguration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Boot 3.x replaces @Configuration for auto-config classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated annotation with ordering support"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[\"@EnableAutoConfiguration\"] --> B[\"@Conditional Family\"]\r\n    B --> C[Auto-Configuration Classes]\r\n    C --> D[Custom Starters]\r\n    D --> E[Configuration Properties]\r\n    E --> F[Metadata & Tooling]\r\n    F --> G[Failure Analysis]\r\n    G --> H[Environment Post-Processing]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " When building a custom starter, publish it as a separate Maven module from your application. The auto-configuration module should have zero dependency on your application code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-enableautoconfiguration-â-the-entry-point",
      children: "1. @EnableAutoConfiguration â€” The Entry Point"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/11-auto-configuration.png",
        alt: "Spring Boot Auto-Configuration Flow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every Spring Boot application class is annotated with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootApplication"
      }), ", which is a composed annotation that bundles three others:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.demo;\r\n\r\nimport org.springframework.boot.SpringApplication;\r\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\r\n\r\n// @SpringBootApplication is equivalent to:\r\n// @Configuration + @EnableAutoConfiguration + @ComponentScan\r\n@SpringBootApplication\r\npublic class DemoApplication {\r\n\r\n    public static void main(String[] args) {\r\n        SpringApplication.run(DemoApplication.class, args);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Decomposing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@SpringBootApplication"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Annotation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Configuration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marks the class as a source of bean definitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@EnableAutoConfiguration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Activates Spring Boot's auto-configuration machinery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ComponentScan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables component scanning in the package hierarchy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-enableautoconfiguration-internals",
      children: "1.1 @EnableAutoConfiguration Internals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The annotation itself is simple:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.enableautoconfig;\r\n\r\nimport org.springframework.context.annotation.Import;\r\nimport org.springframework.boot.autoconfigure.EnableAutoConfiguration;\r\n\r\nimport java.lang.annotation.*;\r\n\r\n@Target(ElementType.TYPE)\r\n@Retention(RetentionPolicy.RUNTIME)\r\n@Documented\r\n@Inherited\r\n@Import(AutoConfigurationImportSelector.class)\r\npublic @interface EnableAutoConfiguration {\r\n\r\n    // Exclude specific auto-configuration classes by class reference\r\n    Class<?>[] exclude() default {};\r\n\r\n    // Exclude specific auto-configuration classes by fully-qualified name\r\n    String[] excludeName() default {};\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The critical element is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Import(AutoConfigurationImportSelector.class)"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AutoConfigurationImportSelector"
      }), " implements ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ImportSelector"
      }), ", which means Spring will call its ", (0,jsx_runtime.jsx)(_components.code, {
        children: "selectImports"
      }), " method and process the returned class names as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Configuration"
      }), " classes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-autoconfigurationimportselector",
      children: "1.2 AutoConfigurationImportSelector"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "AutoConfigurationImportSelector"
      }), " does the heavy lifting:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.enableautoconfig;\r\n\r\nimport org.springframework.boot.autoconfigure.AutoConfigurationImportSelector;\r\nimport org.springframework.core.type.AnnotationMetadata;\r\nimport org.springframework.core.io.support.SpringFactoriesLoader;\r\nimport org.springframework.core.io.ResourceLoader;\r\n\r\nimport java.util.List;\r\n\r\npublic class SelectorDemo {\r\n\r\n    // This is a simplified illustration of what AutoConfigurationImportSelector does.\r\n    // The real implementation is much more complex (filtering, ordering, exclusion, etc.)\r\n\r\n    public static void simulateSelection(ResourceLoader resourceLoader, ClassLoader classLoader) {\r\n        // In Spring Boot 3.x the primary source is META-INF/spring/AutoConfiguration.imports\r\n        // In Spring Boot 2.x it was META-INF/spring.factories under the key:\r\n        //   org.springframework.boot.autoconfigure.EnableAutoConfiguration\r\n\r\n        // Load auto-configuration class names from all AutoConfiguration.imports files\r\n        // on the classpath using SpringFactoriesLoader\r\n        List<String> autoConfigClasses = SpringFactoriesLoader.loadFactoryNames(\r\n                AutoConfigurationImportSelector.class,\r\n                classLoader\r\n        );\r\n\r\n        System.out.println(\"Loaded \" + autoConfigClasses.size() + \" auto-configuration candidates:\");\r\n        autoConfigClasses.stream()\r\n                .limit(10)\r\n                .forEach(name -> System.out.println(\"  - \" + name));\r\n    }\r\n\r\n    public static void main(String[] args) {\r\n        System.out.println(\"AutoConfigurationImportSelector simulation:\");\r\n        System.out.println(\"(Run within a Spring Boot application to see actual results)\");\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "selectImports"
      }), " is called, the selector:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Loads all entries for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "org.springframework.boot.autoconfigure.EnableAutoConfiguration"
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports"
        }), " (Spring Boot 3.x) or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "META-INF/spring.factories"
        }), " (Spring Boot 2.x)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Applies filtering based on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Conditional"
        }), " annotations on each candidate class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Applies ordering via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@AutoConfigureBefore"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@AutoConfigureAfter"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@AutoConfigureOrder"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Applies any exclusions from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@SpringBootApplication(exclude = ...)"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spring.autoconfigure.exclude"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Returns the filtered, ordered, excluded list to Spring's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Import"
        }), " processing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The result is that only the auto-configuration classes whose conditions are met are actually loaded and processed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-which-auto-configuration-classes-are-loaded",
      children: "1.3 Which Auto-Configuration Classes Are Loaded?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can inspect the auto-configuration report at runtime:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.enableautoconfig;\r\n\r\nimport org.springframework.boot.SpringApplication;\r\nimport org.springframework.boot.autoconfigure.AutoConfigurationImportEvent;\r\nimport org.springframework.boot.autoconfigure.AutoConfigurationImportListener;\r\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\r\nimport org.springframework.context.event.EventListener;\r\nimport org.springframework.stereotype.Component;\r\n\r\n@SpringBootApplication\r\npublic class AutoConfigReportApp {\r\n\r\n    public static void main(String[] args) {\r\n        SpringApplication.run(AutoConfigReportApp.class, args);\r\n    }\r\n}\r\n\r\n@Component\r\nclass AutoConfigListener implements AutoConfigurationImportListener {\r\n\r\n    @Override\r\n    public void onAutoConfigurationImport(AutoConfigurationImportEvent event) {\r\n        System.out.println(\"=== Auto-Configuration Import Report ===\");\r\n        System.out.println(\"Selected configurations (\" + event.getSelectedConfigurations().size() + \"):\");\r\n        event.getSelectedConfigurations().forEach(c -> System.out.println(\"  + \" + c));\r\n\r\n        System.out.println(\"\\nExcluded configurations (\" + event.getExclusions().size() + \"):\");\r\n        event.getExclusions().forEach(c -> System.out.println(\"  - \" + c));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A more practical approach: set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "debug=true"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "application.properties"
      }), " (or use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--debug"
      }), ") to print the auto-configuration report in the console."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties\r\ndebug=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This produces a report that shows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Positive matches"
        }), ": auto-configuration classes that matched and were applied."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative matches"
        }), ": auto-configuration classes that did ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " match (with the reason)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exclusions"
        }), ": classes that were explicitly excluded."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unconditional classes"
        }), ": classes with no conditional guards."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-the-conditional-family",
      children: "2. The @Conditional Family"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Auto-configuration classes declare beans that should only exist under certain conditions. If a classpath library is absent, the beans that depend on it should not be created. If the user has already defined a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataSource"
      }), " bean, the auto-configured ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataSource"
      }), " should back off. If a property is not set, the default value should apply."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These decisions are expressed with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Conditional"
      }), " family of annotations, which are evaluated ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "before the bean definition is registered"
      }), ", not at runtime."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-conditionalonclass-and-conditionalonmissingclass",
      children: "2.1 @ConditionalOnClass and @ConditionalOnMissingClass"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnClass"
      }), " activates a configuration only when the specified classes are on the classpath. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnMissingClass"
      }), " is the inverse."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.conditionals;\r\n\r\nimport com.example.conditionals.lib.HazelcastClient;\r\nimport org.springframework.boot.autoconfigure.AutoConfiguration;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnClass;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnMissingClass;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\n\r\n// This auto-configuration only loads if Hazelcast is on the classpath.\r\n@AutoConfiguration\r\n@ConditionalOnClass(HazelcastClient.class)\r\npublic class HazelcastAutoConfiguration {\r\n\r\n    @Bean\r\n    public HazelcastClient hazelcastClient() {\r\n        return new HazelcastClient(\"localhost:5701\");\r\n    }\r\n}\r\n\r\n// Fallback: if Hazelcast is NOT on the classpath, use an in-memory map.\r\n@AutoConfiguration\r\n@ConditionalOnMissingClass(\"com.example.conditionals.lib.HazelcastClient\")\r\npublic class SimpleCacheAutoConfiguration {\r\n\r\n    @Bean\r\n    public SimpleCache simpleCache() {\r\n        return new SimpleCache();\r\n    }\r\n}\r\n\r\n// Supporting classes\r\nclass SimpleCache {\r\n    private final java.util.Map<String, Object> store = new java.util.concurrent.ConcurrentHashMap<>();\r\n\r\n    public void put(String key, Object value) {\r\n        store.put(key, value);\r\n    }\r\n\r\n    @SuppressWarnings(\"unchecked\")\r\n    public <T> T get(String key, Class<T> type) {\r\n        return (T) store.get(key);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), " attribute accepts fully-qualified class names as strings, which is useful when the class itself may not be available at compile time:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.conditionals;\r\n\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnClass;\r\nimport org.springframework.context.annotation.Configuration;\r\n\r\n@Configuration\r\n@ConditionalOnClass(name = \"org.postgresql.Driver\")\r\npublic class PostgresConfiguration {\r\n\r\n    // This configuration only loads if the PostgreSQL driver is on the classpath.\r\n    // Using name = \"...\" means the code compiles even without the dependency.\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-conditionalonbean-and-conditionalonmissingbean",
      children: "2.2 @ConditionalOnBean and @ConditionalOnMissingBean"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnBean"
      }), " activates a configuration only when a bean of the specified type (or name) already exists in the context. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnMissingBean"
      }), " activates only when no such bean exists."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is the primary ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "back-off"
      }), " mechanism: auto-configuration classes declare their beans with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnMissingBean"
      }), ", so a user-defined bean with the same type takes priority."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.conditionals;\r\n\r\nimport com.zaxxer.hikari.HikariDataSource;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnBean;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnClass;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnMissingClass;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\n\r\nimport javax.sql.DataSource;\r\n\r\n@Configuration\r\n@ConditionalOnClass(DataSource.class)\r\npublic class DataSourceConditionalDemo {\r\n\r\n    // This bean is only created if no DataSource bean already exists.\r\n    // If the user defines their own DataSource, this is skipped.\r\n    @Bean\r\n    @ConditionalOnMissingBean(DataSource.class)\r\n    public DataSource autoConfiguredDataSource() {\r\n        HikariDataSource ds = new HikariDataSource();\r\n        ds.setJdbcUrl(\"jdbc:h2:mem:testdb\");\r\n        ds.setUsername(\"sa\");\r\n        ds.setPassword(\"\");\r\n        return ds;\r\n    }\r\n\r\n    // This bean is only created if a DataSource bean is present.\r\n    @Bean\r\n    @ConditionalOnBean(DataSource.class)\r\n    public DataSourceHealthIndicator dataSourceHealthIndicator(DataSource dataSource) {\r\n        return new DataSourceHealthIndicator(dataSource);\r\n    }\r\n}\r\n\r\n// Minimal health indicator class\r\nclass DataSourceHealthIndicator {\r\n    private final DataSource dataSource;\r\n\r\n    DataSourceHealthIndicator(DataSource dataSource) {\r\n        this.dataSource = dataSource;\r\n    }\r\n\r\n    public boolean isHealthy() {\r\n        try (var conn = dataSource.getConnection()) {\r\n            return conn.isValid(5);\r\n        } catch (Exception e) {\r\n            return false;\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Complex matching with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnBean"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.conditionals;\r\n\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnBean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.transaction.PlatformTransactionManager;\r\n\r\nimport javax.sql.DataSource;\r\n\r\n@Configuration\r\n@ConditionalOnBean(name = \"transactionManager\")\r\n@ConditionalOnBean({DataSource.class, PlatformTransactionManager.class})\r\n// Both DataSource and PlatformTransactionManager beans must exist\r\n// AND a bean named \"transactionManager\" must exist\r\npublic class ComplexConditionalConfig {\r\n\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-conditionalonproperty",
      children: "2.3 @ConditionalOnProperty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnProperty"
      }), " activates a configuration based on the presence and value of a Spring Environment property."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.conditionals;\r\n\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\n\r\n@Configuration\r\npublic class PropertyConditionalConfig {\r\n\r\n    @Bean\r\n    @ConditionalOnProperty(\r\n        name = \"app.features.reporting.enabled\",\r\n        havingValue = \"true\",\r\n        matchIfMissing = false\r\n    )\r\n    public ReportingService reportingService() {\r\n        return new ReportingService();\r\n    }\r\n\r\n    @Bean\r\n    @ConditionalOnProperty(\r\n        name = \"app.cache.type\",\r\n        havingValue = \"redis\",\r\n        matchIfMissing = true\r\n    )\r\n    public CacheService cacheService() {\r\n        return new CacheService();\r\n    }\r\n\r\n    // Using prefix attribute to group related properties\r\n    @Bean\r\n    @ConditionalOnProperty(\r\n        prefix = \"app.features.analytics\",\r\n        name = \"enabled\",\r\n        havingValue = \"true\",\r\n        matchIfMissing = false\r\n    )\r\n    public AnalyticsService analyticsService() {\r\n        return new AnalyticsService();\r\n    }\r\n}\r\n\r\nclass ReportingService {\r\n    public String generateReport() {\r\n        return \"Monthly Report: ...\";\r\n    }\r\n}\r\n\r\nclass CacheService {\r\n    public void cache(String key, Object value) {\r\n        System.out.println(\"Caching: \" + key);\r\n    }\r\n}\r\n\r\nclass AnalyticsService {\r\n    public void track(String event) {\r\n        System.out.println(\"Tracking: \" + event);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The attributes:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "prefix"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Property prefix (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "spring.datasource"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Property name relative to prefix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "havingValue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The value that must match for the condition to be true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "matchIfMissing"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Whether the condition should match if the property is absent (default: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-conditionalonresource",
      children: "2.4 @ConditionalOnResource"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnResource"
      }), " activates a configuration only when a specific resource exists on the classpath."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.conditionals;\r\n\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnResource;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\n\r\n@Configuration\r\n@ConditionalOnResource(resources = \"classpath:logging-config.xml\")\r\npublic class LoggingConfiguration {\r\n\r\n    @Bean\r\n    public CustomLogger customLogger() {\r\n        return new CustomLogger();\r\n    }\r\n}\r\n\r\nclass CustomLogger {\r\n    public void log(String message) {\r\n        System.out.println(\"[CUSTOM] \" + message);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-conditionalonexpression",
      children: "2.5 @ConditionalOnExpression"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnExpression"
      }), " uses a SpEL expression to determine whether a configuration should be activated. This is the most flexible conditional â€” you can combine multiple conditions, reference other beans, and evaluate complex logic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.conditionals;\r\n\r\nimport org.springframework.beans.factory.annotation.Value;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnJava;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;\r\nimport org.springframework.boot.system.JavaVersion;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\n\r\n@Configuration\r\npublic class ExpressionConditionalConfig {\r\n\r\n    @Bean\r\n    @ConditionalOnExpression(\r\n        \"#{ '${app.deployment:development}' == 'production' \" +\r\n        \"&& '${app.region}' == 'us-east-1' }\"\r\n    )\r\n    public ProductionService productionService() {\r\n        return new ProductionService();\r\n    }\r\n\r\n    @Bean\r\n    @ConditionalOnExpression(\r\n        \"#{T(java.lang.Runtime).getRuntime().availableProcessors() > 4}\"\r\n    )\r\n    public ParallelProcessor parallelProcessor() {\r\n        return new ParallelProcessor();\r\n    }\r\n\r\n    // Combine multiple conditions â€” this is equivalent to using\r\n    // @ConditionalOnProperty AND @ConditionalOnExpression together.\r\n    // Spring Boot evaluates ALL conditions in a logical AND.\r\n    @Bean\r\n    @ConditionalOnProperty(\"app.features.parallel.enabled\")\r\n    @ConditionalOnExpression(\"#{T(java.lang.Runtime).getRuntime().availableProcessors() > 4}\")\r\n    public ComputeIntensiveService computeIntensiveService() {\r\n        return new ComputeIntensiveService();\r\n    }\r\n}\r\n\r\nclass ProductionService {\r\n    public String status() {\r\n        return \"Production service running in us-east-1\";\r\n    }\r\n}\r\n\r\nclass ParallelProcessor {\r\n    public void process() {\r\n        System.out.println(\"Processing with \" + Runtime.getRuntime().availableProcessors() + \" cores\");\r\n    }\r\n}\r\n\r\nclass ComputeIntensiveService {\r\n    public double compute(double input) {\r\n        return Math.pow(input, Math.PI);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-conditionaloncloudplatform",
      children: "2.6 @ConditionalOnCloudPlatform"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnCloudPlatform"
      }), " activates a configuration when the application is deployed on a specific cloud platform (Cloud Foundry, Heroku, Kubernetes, etc.)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.conditionals;\r\n\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnCloudPlatform;\r\nimport org.springframework.boot.cloud.CloudPlatform;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\n\r\n@Configuration\r\npublic class CloudPlatformConfig {\r\n\r\n    @Bean\r\n    @ConditionalOnCloudPlatform(CloudPlatform.KUBERNETES)\r\n    public KubernetesHealthIndicator kubernetesHealthIndicator() {\r\n        return new KubernetesHealthIndicator();\r\n    }\r\n\r\n    @Bean\r\n    @ConditionalOnCloudPlatform(CloudPlatform.CLOUD_FOUNDRY)\r\n    public CloudFoundryService cloudFoundryService() {\r\n        return new CloudFoundryService();\r\n    }\r\n\r\n    @Bean\r\n    @ConditionalOnCloudPlatform(CloudPlatform.HEROKU)\r\n    public HerokuService herokuService() {\r\n        return new HerokuService();\r\n    }\r\n}\r\n\r\nclass KubernetesHealthIndicator {\r\n    public String check() {\r\n        return \"Running on Kubernetes\";\r\n    }\r\n}\r\n\r\nclass CloudFoundryService {\r\n    public String info() {\r\n        return \"Bound to Cloud Foundry\";\r\n    }\r\n}\r\n\r\nclass HerokuService {\r\n    public String dynoInfo() {\r\n        return \"Dyno: \" + System.getenv(\"DYNO\");\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-conditionalonjndi",
      children: "2.7 @ConditionalOnJndi"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnJndi"
      }), " activates a configuration when a JNDI InitialContext is available and, optionally, when a specific JNDI resource exists."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.conditionals;\r\n\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnJndi;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\n\r\nimport javax.sql.DataSource;\r\n\r\n@Configuration\r\n@ConditionalOnJndi\r\npublic class JndiDataSourceConfig {\r\n\r\n    // This configuration only loads if a JNDI InitialContext is available.\r\n    // This is typically the case in Java EE / Jakarta EE application servers.\r\n\r\n    @Bean\r\n    @ConditionalOnJndi(\"java:comp/env/jdbc/myDataSource\")\r\n    public DataSource jndiDataSource() {\r\n        // Spring Boot will look up the DataSource from JNDI\r\n        return new org.springframework.jndi.JndiObjectFactoryBean() {\r\n            {\r\n                setJndiName(\"java:comp/env/jdbc/myDataSource\");\r\n                setExpectedType(DataSource.class);\r\n            }\r\n        }.getObject();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "28-conditionalonjava",
      children: "2.8 @ConditionalOnJava"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnJava"
      }), " activates a configuration based on the Java runtime version."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.conditionals;\r\n\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnJava;\r\nimport org.springframework.boot.system.JavaVersion;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\n\r\n@Configuration\r\npublic class JavaVersionConfig {\r\n\r\n    @Bean\r\n    @ConditionalOnJava(JavaVersion.SEVENTEEN)\r\n    public Java17FeatureService java17FeatureService() {\r\n        return new Java17FeatureService();\r\n    }\r\n\r\n    @Bean\r\n    @ConditionalOnJava(\r\n        range = ConditionalOnJava.Range.EQUAL_OR_NEWER,\r\n        value = JavaVersion.TWENTY_ONE\r\n    )\r\n    public VirtualThreadService virtualThreadService() {\r\n        return new VirtualThreadService();\r\n    }\r\n\r\n    @Bean\r\n    @ConditionalOnJava(\r\n        range = ConditionalOnJava.Range.OLDER_THAN,\r\n        value = JavaVersion.EIGHTEEN\r\n    )\r\n    public LegacyCompatibilityService legacyCompatibilityService() {\r\n        return new LegacyCompatibilityService();\r\n    }\r\n}\r\n\r\nclass Java17FeatureService {\r\n    public String features() {\r\n        return \"\"\"\r\n            Sealed classes, pattern matching for switch,\r\n            records, text blocks\r\n            \"\"\";\r\n    }\r\n}\r\n\r\nclass VirtualThreadService {\r\n    public void executeTasks() {\r\n        Thread.startVirtualThread(() -> System.out.println(\"Running on virtual thread\"));\r\n    }\r\n}\r\n\r\nclass LegacyCompatibilityService {\r\n    public void compatibilityWarning() {\r\n        System.out.println(\"Running on Java < 18. Some features are unavailable.\");\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "29-conditionalonsinglecandidate",
      children: "2.9 @ConditionalOnSingleCandidate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnSingleCandidate"
      }), " activates a configuration when a bean of the specified type exists ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "and"
      }), " is a primary/single candidate. This is stricter than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnBean"
      }), " â€” it requires that exactly one bean of that type is available (or that one of them is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Primary"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.conditionals;\r\n\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnSingleCandidate;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\n\r\nimport javax.sql.DataSource;\r\n\r\n@Configuration\r\npublic class SingleCandidateConfig {\r\n\r\n    @Bean\r\n    @ConditionalOnSingleCandidate(DataSource.class)\r\n    public DataSourceMetrics dataSourceMetrics(DataSource dataSource) {\r\n        // This bean is only created if there is exactly one DataSource bean\r\n        // (or one marked as @Primary). If there are multiple DataSources\r\n        // and none is @Primary, this bean will NOT be created.\r\n        return new DataSourceMetrics(dataSource);\r\n    }\r\n}\r\n\r\nclass DataSourceMetrics {\r\n    private final DataSource dataSource;\r\n\r\n    DataSourceMetrics(DataSource dataSource) {\r\n        this.dataSource = dataSource;\r\n    }\r\n\r\n    public int getActiveConnections() {\r\n        try (var conn = dataSource.getConnection()) {\r\n            var meta = conn.getMetaData();\r\n            return meta.getMaxConnections();\r\n        } catch (Exception e) {\r\n            return -1;\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "210-conditionalonwardeployment",
      children: "2.10 @ConditionalOnWarDeployment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnWarDeployment"
      }), " activates a configuration only when the application is deployed as a traditional WAR file (as opposed to an embedded container)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.conditionals;\r\n\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnWarDeployment;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\n\r\n@Configuration\r\n@ConditionalOnWarDeployment\r\npublic class WarDeploymentConfig {\r\n\r\n    @Bean\r\n    public JndiDataSourceProvider jndiDataSourceProvider() {\r\n        // JNDI lookups are common in traditional app-server deployments\r\n        // but unnecessary with embedded containers\r\n        return new JndiDataSourceProvider();\r\n    }\r\n}\r\n\r\nclass JndiDataSourceProvider {\r\n    public String lookupType() {\r\n        return \"WAR deployment â€” using JNDI datasource\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "211-custom-conditional",
      children: "2.11 Custom @Conditional"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can also write your own conditional by implementing the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Condition"
      }), " interface:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.conditionals;\r\n\r\nimport org.springframework.context.annotation.Condition;\r\nimport org.springframework.context.annotation.ConditionContext;\r\nimport org.springframework.context.annotation.Conditional;\r\nimport org.springframework.core.type.AnnotatedTypeMetadata;\r\nimport org.springframework.stereotype.Component;\r\n\r\nimport java.lang.annotation.*;\r\nimport java.time.LocalTime;\r\n\r\n// Custom conditional annotation\r\n@Target({ElementType.TYPE, ElementType.METHOD})\r\n@Retention(RetentionPolicy.RUNTIME)\r\n@Conditional(OnAfternoonCondition.class)\r\n@interface ConditionalOnAfternoon {\r\n}\r\n\r\n// Condition implementation\r\nclass OnAfternoonCondition implements Condition {\r\n\r\n    @Override\r\n    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {\r\n        LocalTime now = LocalTime.now();\r\n        return now.isAfter(LocalTime.NOON) && now.isBefore(LocalTime.of(18, 0));\r\n    }\r\n}\r\n\r\n// Usage\r\n@Component\r\n@ConditionalOnAfternoon\r\nclass AfternoonGreeter {\r\n\r\n    public String greet() {\r\n        return \"Good afternoon!\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A more practical custom conditional â€” checking for a specific system property:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.conditionals;\r\n\r\nimport org.springframework.context.annotation.Condition;\r\nimport org.springframework.context.annotation.ConditionContext;\r\nimport org.springframework.context.annotation.Conditional;\r\nimport org.springframework.core.type.AnnotatedTypeMetadata;\r\n\r\nimport java.lang.annotation.*;\r\nimport java.util.Map;\r\n\r\n@Target({ElementType.TYPE, ElementType.METHOD})\r\n@Retention(RetentionPolicy.RUNTIME)\r\n@Conditional(OnSystemPropertyCondition.class)\r\n@interface ConditionalOnSystemProperty {\r\n\r\n    String name();\r\n\r\n    String havingValue();\r\n}\r\n\r\nclass OnSystemPropertyCondition implements Condition {\r\n\r\n    @Override\r\n    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {\r\n        Map<String, Object> attrs = metadata.getAnnotationAttributes(\r\n                ConditionalOnSystemProperty.class.getName());\r\n        if (attrs == null) return false;\r\n\r\n        String name = (String) attrs.get(\"name\");\r\n        String havingValue = (String) attrs.get(\"havingValue\");\r\n        String actualValue = System.getProperty(name);\r\n\r\n        return havingValue.equals(actualValue);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-auto-configuration-classes",
      children: "3. Auto-Configuration Classes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Auto-configuration classes are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Configuration"
      }), " classes that declare beans that are only created when certain conditions are met. Spring Boot ships with over 200 auto-configuration classes covering almost every common technology."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-autoconfiguration-vs-configuration",
      children: "3.1 @AutoConfiguration vs @Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot 3.0 introduced the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@AutoConfiguration"
      }), " annotation as a specialization of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Configuration"
      }), ". It is identical in behavior but signals intent: this is an auto-configuration class that should be discovered via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AutoConfiguration.imports"
      }), " mechanism."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Spring Boot 3.x style\r\npackage com.example.autoconfigclasses;\r\n\r\nimport org.springframework.boot.autoconfigure.AutoConfiguration;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnClass;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;\r\nimport org.springframework.context.annotation.Bean;\r\n\r\n@AutoConfiguration\r\n@ConditionalOnClass(name = \"org.springframework.web.servlet.DispatcherServlet\")\r\npublic class MyWebAutoConfiguration {\r\n\r\n    @Bean\r\n    @ConditionalOnMissingBean\r\n    public MyWebFilter myWebFilter() {\r\n        return new MyWebFilter();\r\n    }\r\n}\r\n\r\nclass MyWebFilter {\r\n    public void doFilter() {\r\n        System.out.println(\"MyWebFilter applied\");\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@AutoConfiguration"
      }), " differs from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Configuration"
      }), " in an important way: it enables ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "auto-configuration ordering"
      }), " via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@AutoConfigureBefore"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@AutoConfigureAfter"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@AutoConfigureOrder"
      }), ". Plain ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Configuration"
      }), " classes loaded via component scanning are not subject to auto-configuration ordering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-major-auto-configuration-classes",
      children: "3.2 Major Auto-Configuration Classes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is a representative subset of the auto-configuration classes Spring Boot provides, with their conditional guards:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.autoconfigclasses;\r\n\r\nimport org.springframework.boot.autoconfigure.AutoConfiguration;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnClass;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;\r\nimport org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;\r\nimport org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;\r\nimport org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;\r\nimport org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration;\r\n\r\n// These are NOT real implementations â€” they illustrate the conditional chain\r\n// that Spring Boot uses. The actual sources are in the spring-boot-autoconfigure JAR.\r\n\r\npublic class AutoConfigurationExamples {\r\n\r\n    // DataSourceAutoConfiguration is conditional on:\r\n    //   - @ConditionalOnClass(DataSource.class, EmbeddedDatabaseType.class)\r\n    //   - @ConditionalOnMissingBean(DataSource.class)\r\n    // If H2 is on the classpath and no DataSource bean exists,\r\n    // Spring Boot creates an embedded H2 DataSource.\r\n\r\n    // HibernateJpaAutoConfiguration is conditional on:\r\n    //   - @ConditionalOnClass(DataSource.class, JpaConfiguration.class)\r\n    //   - @ConditionalOnBean(DataSource.class)\r\n    //   - @ConditionalOnMissingBean(EntityManagerFactory.class)\r\n    // Only loads after DataSource is available.\r\n\r\n    // SecurityAutoConfiguration is conditional on:\r\n    //   - @ConditionalOnClass(DefaultAuthenticationEventPublisher.class)\r\n    // Configures basic authentication with a default user.\r\n\r\n    // WebMvcAutoConfiguration is conditional on:\r\n    //   - @ConditionalOnClass(Servlet.class, DispatcherServlet.class, WebMvcConfigurer.class)\r\n    //   - @ConditionalOnMissingBean(WebMvcConfigurationSupport.class)\r\n    // Configures DispatcherServlet, static resource handling, message converters, etc.\r\n\r\n    public static void main(String[] args) {\r\n        System.out.println(\"See individual auto-configuration class Javadoc for full conditional chains.\");\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-conditional-chain-evaluation",
      children: "3.3 Conditional Chain Evaluation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When an auto-configuration class has multiple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Conditional"
      }), " annotations, they are evaluated in order. If any condition fails, the class is skipped and no further conditions are evaluated. This means you should order your conditionals from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cheapest to most expensive"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.autoconfigclasses;\r\n\r\nimport org.springframework.boot.autoconfigure.AutoConfiguration;\r\nimport org.springframework.boot.autoconfigure.condition.*;\r\n\r\n// Spring Boot evaluates conditions in this order:\r\n// 1. @ConditionalOnClass (classpath check â€” fast)\r\n// 2. @ConditionalOnBean (bean check â€” requires bean factory)\r\n// 3. @ConditionalOnProperty (property check â€” requires environment)\r\n// 4. @ConditionalOnExpression (SpEL evaluation â€” slowest)\r\n\r\n@AutoConfiguration\r\n// Evaluated first: if Hibernate is not on classpath, skip entirely\r\n@ConditionalOnClass(name = \"org.hibernate.Session\")\r\n// Evaluated second: only if DataSource bean exists\r\n@ConditionalOnBean(javax.sql.DataSource.class)\r\n// Evaluated third: allow user to disable with property\r\n@ConditionalOnProperty(prefix = \"spring.jpa\", name = \"enabled\", matchIfMissing = true)\r\npublic class ConditionalChainExample {\r\n\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-autoconfigurebefore-autoconfigureafter-autoconfigureorder",
      children: "3.4 @AutoConfigureBefore, @AutoConfigureAfter, @AutoConfigureOrder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Auto-configuration classes often need to run in a specific order. For example, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JpaRepositoriesAutoConfiguration"
      }), " must run after ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataSourceAutoConfiguration"
      }), ". Ordering is specified with dedicated annotations â€” not with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Order"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.autoconfigclasses;\r\n\r\nimport org.springframework.boot.autoconfigure.AutoConfiguration;\r\nimport org.springframework.boot.autoconfigure.AutoConfigureAfter;\r\nimport org.springframework.boot.autoconfigure.AutoConfigureBefore;\r\nimport org.springframework.boot.autoconfigure.AutoConfigureOrder;\r\nimport org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;\r\nimport org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;\r\nimport org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;\r\nimport org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration;\r\nimport org.springframework.core.Ordered;\r\n\r\n// This auto-configuration runs after DataSourceAutoConfiguration\r\n@AutoConfiguration\r\n@AutoConfigureAfter(DataSourceAutoConfiguration.class)\r\n@AutoConfigureBefore(HibernateJpaAutoConfiguration.class)\r\npublic class MyDataSourceDecoratorAutoConfiguration {\r\n\r\n}\r\n\r\n// Run this auto-configuration with a specific order value\r\n@AutoConfiguration\r\n@AutoConfigureOrder(Ordered.HIGHEST_PRECEDENCE + 10)\r\n@AutoConfigureAfter(WebMvcAutoConfiguration.class)\r\npublic class MyWebCustomizerAutoConfiguration {\r\n\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The order of evaluation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@AutoConfigureOrder"
        }), " defines a numeric order (lower = earlier). Default is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@AutoConfigureBefore"
        }), " declares that this class runs before the specified class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@AutoConfigureAfter"
        }), " declares that this class runs after the specified class."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The auto-configuration sorting algorithm combines these into a total order using a topological sort. Circular dependencies (", (0,jsx_runtime.jsx)(_components.code, {
        children: "A"
      }), " must be before ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B"
      }), " must be before ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A"
      }), ") will cause a startup failure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-auto-configuration-discovery-springfactories-and-autoconfigurationimports",
      children: "4. Auto-Configuration Discovery: spring.factories and AutoConfiguration.imports"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-the-old-way-springfactories-spring-boot-2x",
      children: "4.1 The Old Way: spring.factories (Spring Boot 2.x)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In Spring Boot 2.x, auto-configuration classes were registered in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "META-INF/spring.factories"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# META-INF/spring.factories (Spring Boot 2.x style)\r\norg.springframework.boot.autoconfigure.EnableAutoConfiguration=\\\r\ncom.example.starter.autoconfigure.MyAutoConfiguration,\\\r\ncom.example.starter.autoconfigure.MyOtherAutoConfiguration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-the-new-way-autoconfigurationimports-spring-boot-3x",
      children: "4.2 The New Way: AutoConfiguration.imports (Spring Boot 3.x)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot 3.x migrated to a dedicated file format that is more efficient to parse:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports\r\ncom.example.starter.autoconfigure.MyAutoConfiguration\r\ncom.example.starter.autoconfigure.MyOtherAutoConfiguration\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each line is a fully-qualified auto-configuration class name. The file is read by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AutoConfigurationImportSelector"
      }), " at startup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-listing-boots-built-in-auto-configurations",
      children: "4.3 Listing Boot's Built-In Auto-Configurations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can list all auto-configuration classes registered by Spring Boot:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.discovery;\r\n\r\nimport org.springframework.boot.autoconfigure.AutoConfigurationImportSelector;\r\nimport org.springframework.core.io.support.SpringFactoriesLoader;\r\nimport org.springframework.core.io.DefaultResourceLoader;\r\n\r\nimport java.util.List;\r\n\r\npublic class ListAutoConfigurations {\r\n\r\n    public static void main(String[] args) {\r\n        var loader = new DefaultResourceLoader();\r\n        var classLoader = ListAutoConfigurations.class.getClassLoader();\r\n\r\n        // Load from AutoConfiguration.imports\r\n        List<String> configs = SpringFactoriesLoader.loadFactoryNames(\r\n                AutoConfigurationImportSelector.class,\r\n                classLoader\r\n        );\r\n\r\n        System.out.println(\"Total auto-configuration classes: \" + configs.size());\r\n        configs.forEach(name -> System.out.println(\"  \" + name));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-building-a-custom-spring-boot-starter",
      children: "5. Building a Custom Spring Boot Starter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Spring Boot starter is a Maven/Gradle module that bundles dependencies and auto-configuration to provide a turnkey experience for a specific technology. The most famous example is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-starter-web"
      }), " â€” add it and you get a working web server."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The convention is to use two modules:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Module"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Naming"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "autoconfigure"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Auto-configuration classes, conditionals, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@ConfigurationProperties"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{name}-spring-boot-autoconfigure"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "starter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POM that pulls in the autoconfigure module + required dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{name}-spring-boot-starter"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-building-a-greeting-starter",
      children: "5.1 Building a Greeting Starter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Let's build a complete starter that provides a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GreetingService"
      }), ". The starter will:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Expose a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GreetingService"
        }), " bean."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Allow configuration via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.properties"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support multiple greeting formats (formal, casual, festive)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Back off if the user defines their own ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GreetingService"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only activate if a property is enabled."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-1-the-auto-configuration-module",
      children: "Step 1: The Auto-Configuration Module"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ============================================\r\n// File: greeting-spring-boot-autoconfigure/\r\n//   src/main/java/.../autoconfigure/GreetingProperties.java\r\n// ============================================\r\npackage com.example.greeting.autoconfigure;\r\n\r\nimport org.springframework.boot.context.properties.ConfigurationProperties;\r\nimport org.springframework.boot.context.properties.bind.ConstructorBinding;\r\nimport org.springframework.boot.context.properties.bind.DefaultValue;\r\nimport org.springframework.boot.convert.DurationUnit;\r\n\r\nimport java.time.Duration;\r\nimport java.time.temporal.ChronoUnit;\r\n\r\n@ConfigurationProperties(prefix = \"greeting\")\r\npublic class GreetingProperties {\r\n\r\n    /** Whether the greeting starter is enabled. Defaults to true. */\r\n    private boolean enabled = true;\r\n\r\n    /** The greeting template. Use %s as placeholder for the name. */\r\n    private String template = \"Hello, %s!\";\r\n\r\n    /** The format style: formal, casual, or festive. */\r\n    private Style style = Style.CASUAL;\r\n\r\n    /** How often to refresh the greeting message. */\r\n    @DurationUnit(ChronoUnit.SECONDS)\r\n    private Duration refreshInterval = Duration.ofSeconds(60);\r\n\r\n    /** Name prefixes for common titles. */\r\n    private final Titles titles;\r\n\r\n    public GreetingProperties() {\r\n        this.titles = new Titles();\r\n    }\r\n\r\n    public boolean isEnabled() { return enabled; }\r\n    public void setEnabled(boolean enabled) { this.enabled = enabled; }\r\n\r\n    public String getTemplate() { return template; }\r\n    public void setTemplate(String template) { this.template = template; }\r\n\r\n    public Style getStyle() { return style; }\r\n    public void setStyle(Style style) { this.style = style; }\r\n\r\n    public Duration getRefreshInterval() { return refreshInterval; }\r\n    public void setRefreshInterval(Duration refreshInterval) { this.refreshInterval = refreshInterval; }\r\n\r\n    public Titles getTitles() { return titles; }\r\n\r\n    public enum Style {\r\n        FORMAL, CASUAL, FESTIVE\r\n    }\r\n\r\n    public static class Titles {\r\n        private String male = \"Mr.\";\r\n        private String female = \"Ms.\";\r\n        private String neutral = \"Mx.\";\r\n\r\n        public String getMale() { return male; }\r\n        public void setMale(String male) { this.male = male; }\r\n        public String getFemale() { return female; }\r\n        public void setFemale(String female) { this.female = female; }\r\n        public String getNeutral() { return neutral; }\r\n        public void setNeutral(String neutral) { this.neutral = neutral; }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ============================================\r\n// File: greeting-spring-boot-autoconfigure/\r\n//   src/main/java/.../autoconfigure/GreetingService.java\r\n// ============================================\r\npackage com.example.greeting.autoconfigure;\r\n\r\npublic class GreetingService {\r\n\r\n    private final GreetingProperties properties;\r\n\r\n    public GreetingService(GreetingProperties properties) {\r\n        this.properties = properties;\r\n    }\r\n\r\n    public String greet(String name) {\r\n        return switch (properties.getStyle()) {\r\n            case FORMAL -> String.format(\"Good day, %s %s.\",\r\n                    properties.getTitles().getMale(), name);\r\n            case CASUAL -> String.format(properties.getTemplate(), name);\r\n            case FESTIVE -> String.format(\"Welcome, magnificent %s! âœ¨\", name);\r\n        };\r\n    }\r\n\r\n    public GreetingProperties getProperties() {\r\n        return properties;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ============================================\r\n// File: greeting-spring-boot-autoconfigure/\r\n//   src/main/java/.../autoconfigure/GreetingAutoConfiguration.java\r\n// ============================================\r\npackage com.example.greeting.autoconfigure;\r\n\r\nimport org.springframework.boot.autoconfigure.AutoConfiguration;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnClass;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;\r\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;\r\nimport org.springframework.boot.context.properties.EnableConfigurationProperties;\r\nimport org.springframework.context.annotation.Bean;\r\n\r\n@AutoConfiguration\r\n@ConditionalOnProperty(prefix = \"greeting\", name = \"enabled\", havingValue = \"true\", matchIfMissing = true)\r\n@EnableConfigurationProperties(GreetingProperties.class)\r\npublic class GreetingAutoConfiguration {\r\n\r\n    @Bean\r\n    @ConditionalOnMissingBean\r\n    public GreetingService greetingService(GreetingProperties properties) {\r\n        return new GreetingService(properties);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# ============================================\r\n# File: greeting-spring-boot-autoconfigure/\r\n#   src/main/resources/META-INF/spring/\r\n#   org.springframework.boot.autoconfigure.AutoConfiguration.imports\r\n# ============================================\r\ncom.example.greeting.autoconfigure.GreetingAutoConfiguration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-2-the-starter-module",
      children: "Step 2: The Starter Module"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The starter module is a POM-only project:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- ============================================\r\n     File: greeting-spring-boot-starter/pom.xml\r\n     ============================================ -->\r\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\r\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\r\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0\r\n                             https://maven.apache.org/xsd/maven-4.0.0.xsd\">\r\n    <modelVersion>4.0.0</modelVersion>\r\n\r\n    <groupId>com.example</groupId>\r\n    <artifactId>greeting-spring-boot-starter</artifactId>\r\n    <version>1.0.0</version>\r\n    <packaging>pom</packaging>\r\n\r\n    <dependencies>\r\n        <dependency>\r\n            <groupId>com.example</groupId>\r\n            <artifactId>greeting-spring-boot-autoconfigure</artifactId>\r\n            <version>1.0.0</version>\r\n        </dependency>\r\n        <!-- Pull in any runtime dependencies the auto-configuration needs -->\r\n        <!-- Typically this is the library being auto-configured -->\r\n    </dependencies>\r\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-3-using-the-starter",
      children: "Step 3: Using the Starter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A consumer application adds the starter:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\r\n    <groupId>com.example</groupId>\r\n    <artifactId>greeting-spring-boot-starter</artifactId>\r\n    <version>1.0.0</version>\r\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "And configures it:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties\r\ngreeting.enabled=true\r\ngreeting.style=FESTIVE\r\ngreeting.template=Hey there, %s!\r\ngreeting.refresh-interval=30s\r\ngreeting.titles.male=Sir\r\ngreeting.titles.female=Lady\r\ngreeting.titles.neutral=Comrade\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.consumer;\r\n\r\nimport com.example.greeting.autoconfigure.GreetingService;\r\nimport org.springframework.boot.CommandLineRunner;\r\nimport org.springframework.boot.SpringApplication;\r\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\r\nimport org.springframework.context.annotation.Bean;\r\n\r\n@SpringBootApplication\r\npublic class GreetingConsumerApp {\r\n\r\n    public static void main(String[] args) {\r\n        SpringApplication.run(GreetingConsumerApp.class, args);\r\n    }\r\n\r\n    @Bean\r\n    CommandLineRunner demo(GreetingService greetingService) {\r\n        return args -> {\r\n            System.out.println(greetingService.greet(\"Alice\"));\r\n            System.out.println(greetingService.greet(\"Bob\"));\r\n            System.out.println(\"Style: \" + greetingService.getProperties().getStyle());\r\n            System.out.println(\"Refresh interval: \" + greetingService.getProperties().getRefreshInterval());\r\n        };\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-naming-conventions",
      children: "5.2 Naming Conventions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Official Spring Boot starters follow strict naming conventions:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Official Spring starter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot-starter-{name}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot-starter-web"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom starter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{name}-spring-boot-starter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "greeting-spring-boot-starter"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom autoconfigure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{name}-spring-boot-autoconfigure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "greeting-spring-boot-autoconfigure"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-auto-configuration-conditionals-in-the-starter",
      children: "5.3 Auto-Configuration Conditionals in the Starter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The auto-configuration module should be carefully conditioned:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.greeting.autoconfigure;\r\n\r\nimport org.springframework.boot.autoconfigure.AutoConfiguration;\r\nimport org.springframework.boot.autoconfigure.condition.*;\r\nimport org.springframework.boot.context.properties.EnableConfigurationProperties;\r\nimport org.springframework.context.annotation.Bean;\r\n\r\n@AutoConfiguration\r\n// 1. Only activate if the library's core class is present\r\n@ConditionalOnClass(GreetingService.class)\r\n// 2. Only activate if the user hasn't disabled it\r\n@ConditionalOnProperty(prefix = \"greeting\", name = \"enabled\", havingValue = \"true\", matchIfMissing = true)\r\n// 3. Register the @ConfigurationProperties bean\r\n@EnableConfigurationProperties(GreetingProperties.class)\r\npublic class GreetingAutoConfiguration {\r\n\r\n    @Bean\r\n    @ConditionalOnMissingBean\r\n    // 4. Back off if the user has already defined a GreetingService\r\n    public GreetingService greetingService(GreetingProperties properties) {\r\n        return new GreetingService(properties);\r\n    }\r\n\r\n    @Bean\r\n    @ConditionalOnMissingBean\r\n    @ConditionalOnProperty(prefix = \"greeting\", name = \"health-indicator-enabled\", havingValue = \"true\", matchIfMissing = false)\r\n    public GreetingHealthIndicator greetingHealthIndicator(GreetingService greetingService) {\r\n        return new GreetingHealthIndicator(greetingService);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-configuration-properties-binding",
      children: "6. Configuration Properties Binding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot's type-safe configuration properties mechanism binds external configuration (from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "application.properties"
      }), ", environment variables, command-line arguments, etc.) to strongly-typed Java beans."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-configurationpropertiesprefix",
      children: "6.1 @ConfigurationProperties(prefix)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.properties;\r\n\r\nimport org.springframework.boot.context.properties.ConfigurationProperties;\r\nimport org.springframework.validation.annotation.Validated;\r\n\r\nimport jakarta.validation.constraints.Max;\r\nimport jakarta.validation.constraints.Min;\r\nimport jakarta.validation.constraints.NotBlank;\r\nimport java.net.URI;\r\nimport java.time.Duration;\r\nimport java.util.List;\r\nimport java.util.Map;\r\n\r\n@ConfigurationProperties(prefix = \"app.mail\")\r\n@Validated\r\npublic class MailProperties {\r\n\r\n    @NotBlank\r\n    private String hostname;\r\n\r\n    @Min(1024)\r\n    @Max(65535)\r\n    private int port = 587;\r\n\r\n    private Credentials credentials = new Credentials();\r\n    private List<String> recipients;\r\n    private Map<String, String> customHeaders;\r\n    private Duration connectionTimeout = Duration.ofSeconds(10);\r\n\r\n    // Nested class\r\n    public static class Credentials {\r\n        @NotBlank\r\n        private String username;\r\n        @NotBlank\r\n        private String password;\r\n\r\n        public String getUsername() { return username; }\r\n        public void setUsername(String username) { this.username = username; }\r\n        public String getPassword() { return password; }\r\n        public void setPassword(String password) { this.password = password; }\r\n    }\r\n\r\n    // Getters and setters\r\n    public String getHostname() { return hostname; }\r\n    public void setHostname(String hostname) { this.hostname = hostname; }\r\n    public int getPort() { return port; }\r\n    public void setPort(int port) { this.port = port; }\r\n    public Credentials getCredentials() { return credentials; }\r\n    public void setCredentials(Credentials credentials) { this.credentials = credentials; }\r\n    public List<String> getRecipients() { return recipients; }\r\n    public void setRecipients(List<String> recipients) { this.recipients = recipients; }\r\n    public Map<String, String> getCustomHeaders() { return customHeaders; }\r\n    public void setCustomHeaders(Map<String, String> customHeaders) { this.customHeaders = customHeaders; }\r\n    public Duration getConnectionTimeout() { return connectionTimeout; }\r\n    public void setConnectionTimeout(Duration connectionTimeout) { this.connectionTimeout = connectionTimeout; }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-enableconfigurationproperties",
      children: "6.2 @EnableConfigurationProperties"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The properties class must be registered. The cleanest way is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EnableConfigurationProperties"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.properties;\r\n\r\nimport org.springframework.boot.context.properties.EnableConfigurationProperties;\r\nimport org.springframework.context.annotation.Configuration;\r\n\r\n@Configuration\r\n@EnableConfigurationProperties(MailProperties.class)\r\npublic class MailConfiguration {\r\n\r\n    private final MailProperties properties;\r\n\r\n    public MailConfiguration(MailProperties properties) {\r\n        this.properties = properties;\r\n    }\r\n\r\n    public void sendTestEmail() {\r\n        System.out.println(\"Connecting to \" + properties.getHostname() + \":\" + properties.getPort());\r\n        System.out.println(\"Timeout: \" + properties.getConnectionTimeout().toSeconds() + \"s\");\r\n        System.out.println(\"Recipients: \" + String.join(\", \", properties.getRecipients()));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-relaxed-binding",
      children: "6.3 Relaxed Binding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relaxed binding"
      }), " â€” property keys can use various naming conventions and Spring Boot will bind them correctly. This is critical because environment variables (which cannot contain dots or dashes) must map cleanly to property names."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "application.properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "app.mail.hostname=mail.example.com"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Environment variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "APP_MAIL_HOSTNAME=mail.example.com"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Command line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--app.mail.hostname=mail.example.com"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YAML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "app.mail.hostname: mail.example.com"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Relaxed binding rules (all of these map to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mailProperties.hostname"
      }), "):"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Format"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exact (kebab-case)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "app.mail.hostname"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Camel case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "app.mail.hostName"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Underscore notation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "app.mail.host_name"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Upper camel case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "app.mail.HostName"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Environment variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "APP_MAIL_HOSTNAME"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-constructorbinding",
      children: "6.4 @ConstructorBinding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instead of setters, you can use constructor binding for immutable properties:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.properties;\r\n\r\nimport org.springframework.boot.context.properties.ConfigurationProperties;\r\nimport org.springframework.boot.context.properties.bind.ConstructorBinding;\r\nimport org.springframework.boot.context.properties.bind.DefaultValue;\r\n\r\nimport java.time.Duration;\r\nimport java.util.List;\r\n\r\n@ConfigurationProperties(prefix = \"app.cache\")\r\npublic class CacheProperties {\r\n\r\n    private final String type;\r\n    private final Duration ttl;\r\n    private final List<String> evictionPolicies;\r\n    private final RedisConfig redis;\r\n\r\n    @ConstructorBinding\r\n    public CacheProperties(\r\n            @DefaultValue(\"local\") String type,\r\n            @DefaultValue(\"10m\") Duration ttl,\r\n            @DefaultValue({}) List<String> evictionPolicies,\r\n            @DefaultValue RedisConfig redis) {\r\n        this.type = type;\r\n        this.ttl = ttl;\r\n        this.evictionPolicies = evictionPolicies;\r\n        this.redis = redis;\r\n    }\r\n\r\n    public String getType() { return type; }\r\n    public Duration getTtl() { return ttl; }\r\n    public List<String> getEvictionPolicies() { return evictionPolicies; }\r\n    public RedisConfig getRedis() { return redis; }\r\n\r\n    public static class RedisConfig {\r\n        private final String host;\r\n        private final int port;\r\n\r\n        @ConstructorBinding\r\n        public RedisConfig(@DefaultValue(\"localhost\") String host,\r\n                          @DefaultValue(\"6379\") int port) {\r\n            this.host = host;\r\n            this.port = port;\r\n        }\r\n\r\n        public String getHost() { return host; }\r\n        public int getPort() { return port; }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-duration-and-datasize-conversion",
      children: "6.5 Duration and DataSize Conversion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot automatically converts ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Duration"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataSize"
      }), " strings from properties:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.properties;\r\n\r\nimport org.springframework.boot.context.properties.ConfigurationProperties;\r\nimport org.springframework.boot.convert.DataSizeUnit;\r\nimport org.springframework.boot.convert.DurationUnit;\r\nimport org.springframework.util.unit.DataSize;\r\nimport org.springframework.util.unit.DataUnit;\r\n\r\nimport java.time.Duration;\r\nimport java.time.temporal.ChronoUnit;\r\n\r\n@ConfigurationProperties(prefix = \"app.server\")\r\npublic class ServerProperties {\r\n\r\n    // All of these are valid:\r\n    //   app.server.connection-timeout=5s\r\n    //   app.server.connection-timeout=5000ms\r\n    //   app.server.connection-timeout=1m\r\n    private Duration connectionTimeout = Duration.ofSeconds(30);\r\n\r\n    // Specify default unit\r\n    @DurationUnit(ChronoUnit.MINUTES)\r\n    private Duration sessionTimeout = Duration.ofMinutes(30);\r\n\r\n    // All of these are valid:\r\n    //   app.server.max-request-size=10MB\r\n    //   app.server.max-request-size=10485760B\r\n    //   app.server.max-request-size=10GB\r\n    private DataSize maxRequestSize = DataSize.ofMegabytes(10);\r\n\r\n    @DataSizeUnit(DataUnit.KILOBYTES)\r\n    private DataSize bufferSize = DataSize.ofKilobytes(8);\r\n\r\n    // Getters and setters\r\n    public Duration getConnectionTimeout() { return connectionTimeout; }\r\n    public void setConnectionTimeout(Duration connectionTimeout) { this.connectionTimeout = connectionTimeout; }\r\n    public Duration getSessionTimeout() { return sessionTimeout; }\r\n    public void setSessionTimeout(Duration sessionTimeout) { this.sessionTimeout = sessionTimeout; }\r\n    public DataSize getMaxRequestSize() { return maxRequestSize; }\r\n    public void setMaxRequestSize(DataSize maxRequestSize) { this.maxRequestSize = maxRequestSize; }\r\n    public DataSize getBufferSize() { return bufferSize; }\r\n    public void setBufferSize(DataSize bufferSize) { this.bufferSize = bufferSize; }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Valid duration formats:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "5s"
        }), " â€” 5 seconds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "5000ms"
        }), " â€” 5000 milliseconds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "1m"
        }), " â€” 1 minute"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "2h"
        }), " â€” 2 hours"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "1d"
        }), " â€” 1 day"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "PT10S"
        }), " â€” ISO-8601 format (10 seconds)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Valid data size formats:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "10B"
        }), " â€” 10 bytes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "10KB"
        }), " â€” 10 kilobytes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "10MB"
        }), " â€” 10 megabytes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "10GB"
        }), " â€” 10 gigabytes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "10TB"
        }), " â€” 10 terabytes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-nestedconfigurationproperty",
      children: "6.6 @NestedConfigurationProperty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For nested POJOs that are not top-level ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConfigurationProperties"
      }), ", use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@NestedConfigurationProperty"
      }), " to signal to the metadata generator and binding infrastructure that the field contains nested properties:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.properties;\r\n\r\nimport org.springframework.boot.context.properties.ConfigurationProperties;\r\nimport org.springframework.boot.context.properties.NestedConfigurationProperty;\r\n\r\n@ConfigurationProperties(prefix = \"app.database\")\r\npublic class DatabaseProperties {\r\n\r\n    private String url;\r\n    private String username;\r\n\r\n    @NestedConfigurationProperty\r\n    private PoolConfig pool = new PoolConfig();\r\n\r\n    // Getters and setters\r\n    public String getUrl() { return url; }\r\n    public void setUrl(String url) { this.url = url; }\r\n    public String getUsername() { return username; }\r\n    public void setUsername(String username) { this.username = username; }\r\n    public PoolConfig getPool() { return pool; }\r\n    public void setPool(PoolConfig pool) { this.pool = pool; }\r\n\r\n    public static class PoolConfig {\r\n        private int minSize = 5;\r\n        private int maxSize = 20;\r\n        private boolean connectionTestEnabled = true;\r\n\r\n        public int getMinSize() { return minSize; }\r\n        public void setMinSize(int minSize) { this.minSize = minSize; }\r\n        public int getMaxSize() { return maxSize; }\r\n        public void setMaxSize(int maxSize) { this.maxSize = maxSize; }\r\n        public boolean isConnectionTestEnabled() { return connectionTestEnabled; }\r\n        public void setConnectionTestEnabled(boolean connectionTestEnabled) { this.connectionTestEnabled = connectionTestEnabled; }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "67-validation",
      children: "6.7 Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot supports Jakarta Bean Validation annotations on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConfigurationProperties"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.properties;\r\n\r\nimport jakarta.validation.Valid;\r\nimport jakarta.validation.constraints.*;\r\nimport org.springframework.boot.context.properties.ConfigurationProperties;\r\nimport org.springframework.validation.annotation.Validated;\r\n\r\nimport java.net.URL;\r\nimport java.util.List;\r\n\r\n@ConfigurationProperties(prefix = \"app.service\")\r\n@Validated\r\npublic class ServiceProperties {\r\n\r\n    @NotBlank(message = \"Service name must not be blank\")\r\n    private String name;\r\n\r\n    @URL(message = \"Base URL must be a valid URL\")\r\n    private String baseUrl;\r\n\r\n    @Min(value = 1, message = \"Minimum pool size must be at least 1\")\r\n    @Max(value = 100, message = \"Maximum pool size must be at most 100\")\r\n    private int poolSize = 10;\r\n\r\n    @Positive(message = \"Timeout must be positive\")\r\n    private long timeoutMs = 5000;\r\n\r\n    @Valid\r\n    private List<@Valid Endpoint> endpoints;\r\n\r\n    // Nested validated class\r\n    public static class Endpoint {\r\n        @NotBlank\r\n        private String path;\r\n        @NotNull\r\n        private HttpMethod method = HttpMethod.GET;\r\n\r\n        // Getters and setters\r\n        public String getPath() { return path; }\r\n        public void setPath(String path) { this.path = path; }\r\n        public HttpMethod getMethod() { return method; }\r\n        public void setMethod(HttpMethod method) { this.method = method; }\r\n    }\r\n\r\n    public enum HttpMethod { GET, POST, PUT, DELETE, PATCH }\r\n\r\n    // Getters and setters\r\n    public String getName() { return name; }\r\n    public void setName(String name) { this.name = name; }\r\n    public String getBaseUrl() { return baseUrl; }\r\n    public void setBaseUrl(String baseUrl) { this.baseUrl = baseUrl; }\r\n    public int getPoolSize() { return poolSize; }\r\n    public void setPoolSize(int poolSize) { this.poolSize = poolSize; }\r\n    public long getTimeoutMs() { return timeoutMs; }\r\n    public void setTimeoutMs(long timeoutMs) { this.timeoutMs = timeoutMs; }\r\n    public List<Endpoint> getEndpoints() { return endpoints; }\r\n    public void setEndpoints(List<Endpoint> endpoints) { this.endpoints = endpoints; }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "68-configuration-properties-in-a-non-spring-boot-project",
      children: "6.8 Configuration Properties in a Non-Spring-Boot Project"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConfigurationProperties"
      }), " in a non-Boot Spring application by registering the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConfigurationPropertiesBindingPostProcessor"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.properties;\r\n\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.context.support.PropertySourcesPlaceholderConfigurer;\r\nimport org.springframework.boot.context.properties.ConfigurationPropertiesBindingPostProcessor;\r\nimport org.springframework.boot.context.properties.EnableConfigurationProperties;\r\n\r\n@Configuration\r\n@EnableConfigurationProperties(MailProperties.class)\r\npublic class NonBootPropertiesConfig {\r\n\r\n    // In a Spring Framework (non-Boot) application, you may need\r\n    // to register the binding post-processor manually.\r\n    // Spring Boot does this automatically.\r\n\r\n    @Bean\r\n    public static ConfigurationPropertiesBindingPostProcessor configurationPropertiesBindingPostProcessor() {\r\n        return new ConfigurationPropertiesBindingPostProcessor();\r\n    }\r\n\r\n    @Bean\r\n    public static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {\r\n        return new PropertySourcesPlaceholderConfigurer();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-metadata-generation-spring-boot-configuration-processor",
      children: "7. Metadata Generation (spring-boot-configuration-processor)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot's configuration processor generates JSON metadata that IDEs use for auto-completion, documentation, and validation when editing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "application.properties"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "application.yml"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-adding-the-dependency",
      children: "7.1 Adding the Dependency"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\r\n    <groupId>org.springframework.boot</groupId>\r\n    <artifactId>spring-boot-configuration-processor</artifactId>\r\n    <optional>true</optional>\r\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Gradle:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "annotationProcessor 'org.springframework.boot:spring-boot-configuration-processor'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-what-it-generates",
      children: "7.2 What It Generates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["During compilation, the annotation processor scans ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConfigurationProperties"
      }), " annotated classes and generates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "META-INF/spring-configuration-metadata.json"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n  \"groups\": [\r\n    {\r\n      \"name\": \"greeting\",\r\n      \"type\": \"com.example.greeting.autoconfigure.GreetingProperties\",\r\n      \"sourceType\": \"com.example.greeting.autoconfigure.GreetingProperties\",\r\n      \"description\": \"Greeting service configuration.\"\r\n    },\r\n    {\r\n      \"name\": \"greeting.titles\",\r\n      \"type\": \"com.example.greeting.autoconfigure.GreetingProperties$Titles\",\r\n      \"sourceType\": \"com.example.greeting.autoconfigure.GreetingProperties$Titles\",\r\n      \"sourceMethod\": \"getTitles()\"\r\n    }\r\n  ],\r\n  \"properties\": [\r\n    {\r\n      \"name\": \"greeting.enabled\",\r\n      \"type\": \"java.lang.Boolean\",\r\n      \"description\": \"Whether the greeting starter is enabled.\",\r\n      \"sourceType\": \"com.example.greeting.autoconfigure.GreetingProperties\",\r\n      \"defaultValue\": true\r\n    },\r\n    {\r\n      \"name\": \"greeting.style\",\r\n      \"type\": \"com.example.greeting.autoconfigure.GreetingProperties$Style\",\r\n      \"description\": \"The format style: formal, casual, or festive.\",\r\n      \"sourceType\": \"com.example.greeting.autoconfigure.GreetingProperties\",\r\n      \"defaultValue\": \"casual\"\r\n    },\r\n    {\r\n      \"name\": \"greeting.template\",\r\n      \"type\": \"java.lang.String\",\r\n      \"description\": \"The greeting template. Use %s as placeholder for the name.\",\r\n      \"sourceType\": \"com.example.greeting.autoconfigure.GreetingProperties\",\r\n      \"defaultValue\": \"Hello, %s!\"\r\n    },\r\n    {\r\n      \"name\": \"greeting.refresh-interval\",\r\n      \"type\": \"java.time.Duration\",\r\n      \"description\": \"How often to refresh the greeting message.\",\r\n      \"sourceType\": \"com.example.greeting.autoconfigure.GreetingProperties\",\r\n      \"defaultValue\": \"60s\"\r\n    },\r\n    {\r\n      \"name\": \"greeting.titles.male\",\r\n      \"type\": \"java.lang.String\",\r\n      \"description\": \"Title for male-gendered addressees.\",\r\n      \"sourceType\": \"com.example.greeting.autoconfigure.GreetingProperties$Titles\",\r\n      \"defaultValue\": \"Mr.\"\r\n    },\r\n    {\r\n      \"name\": \"greeting.titles.female\",\r\n      \"type\": \"java.lang.String\",\r\n      \"description\": \"Title for female-gendered addressees.\",\r\n      \"sourceType\": \"com.example.greeting.autoconfigure.GreetingProperties$Titles\",\r\n      \"defaultValue\": \"Ms.\"\r\n    },\r\n    {\r\n      \"name\": \"greeting.titles.neutral\",\r\n      \"type\": \"java.lang.String\",\r\n      \"description\": \"Title for non-binary addressees.\",\r\n      \"sourceType\": \"com.example.greeting.autoconfigure.GreetingProperties$Titles\",\r\n      \"defaultValue\": \"Mx.\"\r\n    }\r\n  ],\r\n  \"hints\": [\r\n    {\r\n      \"name\": \"greeting.style\",\r\n      \"values\": [\r\n        { \"value\": \"formal\", \"description\": \"Formal greeting with titles.\" },\r\n        { \"value\": \"casual\", \"description\": \"Casual greeting using template.\" },\r\n        { \"value\": \"festive\", \"description\": \"Festive greeting with emoji.\" }\r\n      ]\r\n    }\r\n  ]\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-providing-hints",
      children: "7.3 Providing Hints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Provide value hints and provider hints by creating ", (0,jsx_runtime.jsx)(_components.code, {
        children: "additional-spring-configuration-metadata.json"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n  \"properties\": [\r\n    {\r\n      \"name\": \"greeting.refresh-interval\",\r\n      \"description\": \"How often to refresh the greeting message.\",\r\n      \"defaultValue\": \"60s\"\r\n    }\r\n  ],\r\n  \"hints\": [\r\n    {\r\n      \"name\": \"greeting.refresh-interval\",\r\n      \"values\": [\r\n        { \"value\": \"30s\", \"description\": \"Refresh every 30 seconds.\" },\r\n        { \"value\": \"60s\", \"description\": \"Refresh every minute.\" },\r\n        { \"value\": \"5m\", \"description\": \"Refresh every 5 minutes.\" }\r\n      ]\r\n    },\r\n    {\r\n      \"name\": \"greeting.style\",\r\n      \"values\": [\r\n        { \"value\": \"formal\", \"description\": \"Dear Sir/Madam format.\" },\r\n        { \"value\": \"casual\", \"description\": \"Hi, {name}! format.\" },\r\n        { \"value\": \"festive\", \"description\": \"Celebratory greeting.\" }\r\n      ]\r\n    },\r\n    {\r\n      \"name\": \"greeting.titles.male\",\r\n      \"providers\": [\r\n        { \"name\": \"handle-as\", \"parameters\": { \"target\": \"java.lang.String\" } }\r\n      ]\r\n    }\r\n  ]\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Place this file at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/main/resources/META-INF/additional-spring-configuration-metadata.json"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-auto-configuration-ordering-and-exclusion",
      children: "8. Auto-Configuration Ordering and Exclusion"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-phase-ordering",
      children: "8.1 Phase Ordering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Auto-configuration classes run in phases determined by their ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@AutoConfigureOrder"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@AutoConfigureBefore"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@AutoConfigureAfter"
      }), " annotations. The ordering within a phase is stable across restarts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The general informal phases are:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Classes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infrastructure"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ApplicationContextAutoConfiguration"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "JacksonAutoConfiguration"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DataSource"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DataSourceAutoConfiguration"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "HikariCPAutoConfiguration"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ORM"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "HibernateJpaAutoConfiguration"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "JdbcTemplateAutoConfiguration"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "WebMvcAutoConfiguration"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "HttpMessageConvertersAutoConfiguration"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SecurityAutoConfiguration"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "OAuth2ClientAutoConfiguration"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Actuator"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "EndpointAutoConfiguration"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "HealthEndpointAutoConfiguration"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-conditional-chain",
      children: "8.2 Conditional Chain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When an auto-configuration class defines multiple beans, each bean has its own conditional chain. The class-level conditions are evaluated first; if they pass, then each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Bean"
      }), " method's conditions are evaluated independently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.ordering;\r\n\r\nimport org.springframework.boot.autoconfigure.AutoConfiguration;\r\nimport org.springframework.boot.autoconfigure.AutoConfigureAfter;\r\nimport org.springframework.boot.autoconfigure.AutoConfigureBefore;\r\nimport org.springframework.boot.autoconfigure.AutoConfigureOrder;\r\nimport org.springframework.boot.autoconfigure.condition.*;\r\nimport org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.core.Ordered;\r\n\r\n// This auto-configuration runs after DataSourceAutoConfiguration\r\n// and before JpaRepositoriesAutoConfiguration\r\n@AutoConfiguration\r\n@AutoConfigureAfter(DataSourceAutoConfiguration.class)\r\n@AutoConfigureBefore(name = \"org.springframework.boot.autoconfigure.orm.jpa.JpaRepositoriesAutoConfiguration\")\r\n@AutoConfigureOrder(Ordered.LOWEST_PRECEDENCE - 100)\r\npublic class MyPersistenceCustomizerAutoConfiguration {\r\n\r\n    @Bean\r\n    @ConditionalOnBean(javax.sql.DataSource.class)\r\n    public MyConnectionValidator myConnectionValidator() {\r\n        return new MyConnectionValidator();\r\n    }\r\n\r\n    @Bean\r\n    @ConditionalOnMissingClass(\"com.zaxxer.hikari.HikariDataSource\")\r\n    public MySimpleDataSourceFallback mySimpleDataSourceFallback() {\r\n        return new MySimpleDataSourceFallback();\r\n    }\r\n}\r\n\r\nclass MyConnectionValidator {\r\n    public boolean validate() { return true; }\r\n}\r\n\r\nclass MySimpleDataSourceFallback {\r\n    public void log() { System.out.println(\"HikariCP not available\"); }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-preventing-auto-configuration",
      children: "8.3 Preventing Auto-Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are three ways to exclude an auto-configuration class:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "method-1-springbootapplicationexclude--",
      children: "Method 1: @SpringBootApplication(exclude = ...)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.exclusion;\r\n\r\nimport org.springframework.boot.SpringApplication;\r\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\r\nimport org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;\r\nimport org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;\r\n\r\n@SpringBootApplication(\r\n    exclude = {\r\n        DataSourceAutoConfiguration.class,\r\n        SecurityAutoConfiguration.class\r\n    }\r\n)\r\npublic class ExcludingApp {\r\n\r\n    public static void main(String[] args) {\r\n        SpringApplication.run(ExcludingApp.class, args);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "method-2-excludename",
      children: "Method 2: excludeName"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.exclusion;\r\n\r\nimport org.springframework.boot.SpringApplication;\r\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\r\n\r\n@SpringBootApplication(\r\n    excludeName = {\r\n        \"org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration\",\r\n        \"org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration\"\r\n    }\r\n)\r\npublic class ExcludingByNameApp {\r\n\r\n    public static void main(String[] args) {\r\n        SpringApplication.run(ExcludingByNameApp.class, args);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "method-3-property-based-exclusion",
      children: "Method 3: Property-based exclusion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties\r\nspring.autoconfigure.exclude=\\\r\n  org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration,\\\r\n  org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is useful when you want to exclude a class without modifying the source code â€” for example, across different deployment profiles."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-testing-exclusions",
      children: "8.4 Testing Exclusions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.exclusion;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.boot.test.context.assertj.AssertableApplicationContext;\r\n\r\nimport javax.sql.DataSource;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n// Using properties to exclude for a specific test\r\n@SpringBootTest(\r\n    properties = {\r\n        \"spring.autoconfigure.exclude=\" +\r\n        \"org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration\"\r\n    }\r\n)\r\nclass DataSourceExclusionTest {\r\n\r\n    @Test\r\n    void dataSourceShouldNotBeConfigured(AssertableApplicationContext ctx) {\r\n        assertThat(ctx.getBeansOfType(DataSource.class)).isEmpty();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-failure-analysis",
      children: "9. Failure Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-built-in-failureanalyzers",
      children: "9.1 Built-in FailureAnalyzers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When Spring Boot encounters a startup failure, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FailureAnalyzers"
      }), " convert the raw exception into a human-readable message. For example:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "***************************\r\nAPPLICATION FAILED TO START\r\n***************************\r\n\r\nDescription:\r\n\r\nFailed to configure a DataSource: 'url' attribute is not specified and no embedded datasource could be configured.\r\n\r\nReason: Failed to determine a suitable driver class\r\n\r\nAction:\r\n\r\nConsider the following:\r\n    If you want an embedded database (H2, HSQL, or Derby), please put it on the classpath.\r\n    If you have database settings to be loaded from a particular profile you may need to activate it.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This comes from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataSourceBeanCreationFailureAnalyzer"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-custom-failureanalyzer",
      children: "9.2 Custom FailureAnalyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.failure;\r\n\r\nimport org.springframework.boot.diagnostics.FailureAnalysis;\r\nimport org.springframework.boot.diagnostics.FailureAnalyzer;\r\nimport org.springframework.stereotype.Component;\r\n\r\npublic class GreetingServiceNotFoundException extends RuntimeException {\r\n\r\n    public GreetingServiceNotFoundException(String message) {\r\n        super(message);\r\n    }\r\n}\r\n\r\n@Component\r\npublic class GreetingFailureAnalyzer implements FailureAnalyzer {\r\n\r\n    @Override\r\n    public FailureAnalysis analyze(Throwable failure) {\r\n        if (failure instanceof GreetingServiceNotFoundException ex) {\r\n            return new FailureAnalysis(\r\n                getDescription(ex),\r\n                getAction(ex),\r\n                ex\r\n            );\r\n        }\r\n        return null; // Not my exception â€” pass to next analyzer\r\n    }\r\n\r\n    private String getDescription(GreetingServiceNotFoundException ex) {\r\n        return \"\"\"\r\n            Failed to configure GreetingService: %s\r\n            \"\"\".formatted(ex.getMessage());\r\n    }\r\n\r\n    private String getAction(GreetingServiceNotFoundException ex) {\r\n        return \"\"\"\r\n            Ensure 'greeting.enabled=true' is set in your application.properties.\r\n            Alternatively, define your own GreetingService @Bean.\r\n            \"\"\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-registering-the-custom-failureanalyzer",
      children: "9.3 Registering the Custom FailureAnalyzer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In Spring Boot 3.x, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FailureAnalyzer"
      }), " implementations are registered via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring.factories"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# META-INF/spring/org.springframework.boot.diagnostics.FailureAnalyzer.imports\r\ncom.example.failure.GreetingFailureAnalyzer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Spring Boot 2.x:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# META-INF/spring.factories\r\norg.springframework.boot.diagnostics.FailureAnalyzer=\\\r\ncom.example.failure.GreetingFailureAnalyzer\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The import file for Spring Boot 3.x is a simple one-per-line format identical to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AutoConfiguration.imports"
      }), " pattern."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-testing-a-failureanalyzer",
      children: "9.4 Testing a FailureAnalyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.failure;\r\n\r\nimport org.junit.jupiter.api.Test;\r\nimport org.springframework.boot.diagnostics.FailureAnalysis;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\nclass GreetingFailureAnalyzerTest {\r\n\r\n    private final GreetingFailureAnalyzer analyzer = new GreetingFailureAnalyzer();\r\n\r\n    @Test\r\n    void shouldHandleGreetingServiceNotFoundException() {\r\n        var exception = new GreetingServiceNotFoundException(\"GreetingService is disabled\");\r\n        FailureAnalysis analysis = analyzer.analyze(exception);\r\n\r\n        assertThat(analysis).isNotNull();\r\n        assertThat(analysis.getDescription()).contains(\"disabled\");\r\n        assertThat(analysis.getAction()).contains(\"greeting.enabled=true\");\r\n    }\r\n\r\n    @Test\r\n    void shouldReturnNullForOtherExceptions() {\r\n        var exception = new RuntimeException(\"Something else\");\r\n        FailureAnalysis analysis = analyzer.analyze(exception);\r\n\r\n        assertThat(analysis).isNull();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-environment-post-processing",
      children: "10. Environment Post-Processing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "EnvironmentPostProcessor"
      }), " is a Spring Boot extension point that allows you to add custom property sources to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Environment"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "before any beans are created"
      }), ". This is useful for injecting default values, random values, platform-specific properties, or values from external sources."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-built-in-randomvaluepropertysource",
      children: "10.1 Built-in: RandomValuePropertySource"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot includes a built-in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RandomValuePropertySource"
      }), " that generates random values:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties\r\napp.secret=${random.value}\r\napp.number=${random.int}\r\napp.limit=${random.int(1024,65536)}\r\napp.range=${random.long}\r\napp.uuid=${random.uuid}\r\napp.hex=${random.hex(32)}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The underlying implementation is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RandomValuePropertySource"
      }), ", which registers itself early in environment preparation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-custom-environmentpostprocessor",
      children: "10.2 Custom EnvironmentPostProcessor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let's build one that reads properties from a YAML file on the filesystem:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.envpost;\r\n\r\nimport org.springframework.boot.SpringApplication;\r\nimport org.springframework.boot.env.EnvironmentPostProcessor;\r\nimport org.springframework.core.Ordered;\r\nimport org.springframework.core.annotation.Order;\r\nimport org.springframework.core.env.ConfigurableEnvironment;\r\nimport org.springframework.core.env.MapPropertySource;\r\nimport org.springframework.core.env.PropertySource;\r\n\r\nimport java.io.FileInputStream;\r\nimport java.io.InputStream;\r\nimport java.util.LinkedHashMap;\r\nimport java.util.Map;\r\nimport java.util.Properties;\r\n\r\n@Order(Ordered.LOWEST_PRECEDENCE - 10)\r\npublic class ExternalConfigEnvironmentPostProcessor implements EnvironmentPostProcessor {\r\n\r\n    private static final String PROPERTY_SOURCE_NAME = \"externalConfig\";\r\n    private static final String EXTERNAL_CONFIG_PATH = \"/etc/myapp/application.properties\";\r\n\r\n    @Override\r\n    public void postProcessEnvironment(ConfigurableEnvironment environment,\r\n                                       SpringApplication application) {\r\n        try (InputStream input = new FileInputStream(EXTERNAL_CONFIG_PATH)) {\r\n            Properties props = new Properties();\r\n            props.load(input);\r\n\r\n            Map<String, Object> map = new LinkedHashMap<>();\r\n            props.stringPropertyNames().forEach(key -> map.put(key, props.getProperty(key)));\r\n\r\n            PropertySource<?> externalSource = new MapPropertySource(PROPERTY_SOURCE_NAME, map);\r\n\r\n            // Add with highest priority (before the existing sources)\r\n            environment.getPropertySources().addFirst(externalSource);\r\n\r\n            System.out.println(\"Loaded \" + map.size() + \" properties from \" + EXTERNAL_CONFIG_PATH);\r\n        } catch (Exception e) {\r\n            // File not found is not an error â€” just skip\r\n            System.out.println(\"No external config at \" + EXTERNAL_CONFIG_PATH + \" (\" + e.getMessage() + \")\");\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-registering-environmentpostprocessor",
      children: "10.3 Registering EnvironmentPostProcessor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# META-INF/spring/org.springframework.boot.env.EnvironmentPostProcessor.imports\r\ncom.example.envpost.ExternalConfigEnvironmentPostProcessor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-adding-custom-property-sources",
      children: "10.4 Adding Custom Property Sources"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A more sophisticated example that adds a property source backed by a database:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.envpost;\r\n\r\nimport org.springframework.boot.SpringApplication;\r\nimport org.springframework.boot.env.EnvironmentPostProcessor;\r\nimport org.springframework.core.Ordered;\r\nimport org.springframework.core.annotation.Order;\r\nimport org.springframework.core.env.ConfigurableEnvironment;\r\nimport org.springframework.core.env.MapPropertySource;\r\nimport org.springframework.jdbc.core.JdbcTemplate;\r\nimport org.springframework.jdbc.datasource.DriverManagerDataSource;\r\n\r\nimport javax.sql.DataSource;\r\nimport java.util.LinkedHashMap;\r\nimport java.util.Map;\r\n\r\n@Order(Ordered.HIGHEST_PRECEDENCE + 20)\r\npublic class DatabasePropertySourcePostProcessor implements EnvironmentPostProcessor {\r\n\r\n    @Override\r\n    public void postProcessEnvironment(ConfigurableEnvironment environment,\r\n                                       SpringApplication application) {\r\n        // Read database connection from existing properties (already loaded)\r\n        String dbUrl = environment.getProperty(\"app.config.db.url\");\r\n        if (dbUrl == null) {\r\n            return;\r\n        }\r\n\r\n        try {\r\n            DataSource ds = new DriverManagerDataSource(dbUrl);\r\n            JdbcTemplate jdbc = new JdbcTemplate(ds);\r\n\r\n            Map<String, Object> props = new LinkedHashMap<>();\r\n            jdbc.query(\r\n                \"SELECT property_key, property_value FROM app_config\",\r\n                (rs) -> {\r\n                    props.put(rs.getString(\"property_key\"),\r\n                              rs.getString(\"property_value\"));\r\n                }\r\n            );\r\n\r\n            if (!props.isEmpty()) {\r\n                environment.getPropertySources().addFirst(\r\n                    new MapPropertySource(\"databaseConfig\", props)\r\n                );\r\n            }\r\n        } catch (Exception e) {\r\n            throw new RuntimeException(\"Failed to load config from database: \" + dbUrl, e);\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-propertysource-ordering",
      children: "10.5 @PropertySource Ordering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot also supports ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PropertySource"
      }), " on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Configuration"
      }), " classes to import property files. The ordering of property sources in the environment is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Command-line arguments (--app.foo=bar)\r\n2. JNDI attributes\r\n3. System properties (System.getProperties())\r\n4. OS environment variables\r\n5. RandomValuePropertySource\r\n6. application-{profile}.properties (profile-specific)\r\n7. application.properties (main)\r\n8. @PropertySource on @Configuration classes\r\n9. Default properties (SpringApplication.setDefaultProperties)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Note that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EnvironmentPostProcessor"
      }), " can inject at any position â€” you can use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "addFirst"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "addLast"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "addBefore"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "addAfter"
      }), "."]
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
            children: "@ConditionalOnClass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bean created only if class is on classpath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency-based gating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-configure only when library present"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ConditionalOnProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bean created only if property has expected value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration-based gating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature toggles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ConditionalOnBean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bean created only if another bean exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency-based gating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ConfigurationProperties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe property binding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relaxed binding, metadata generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@AutoConfiguration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Boot 3.x auto-config marker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered import via AutoConfiguration.imports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom starter development"
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
            children: "Key Mechanisms"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conditionals"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@ConditionalOnClass, OnProperty, OnBean, OnMissingBean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combined with Any/Nested for complex logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auto-Config Location"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line-separated fully qualified class names"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ordering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@AutoConfigureBefore, @AutoConfigureAfter, @AutoConfigureOrder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last auto-config wins on conflict"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Properties"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@ConfigurationProperties(prefix), @ConstructorBinding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@EnableConfigurationProperties to register"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Metadata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spring-boot-configuration-processor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generates spring-configuration-metadata.json"
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
            children: "Data Access"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Custom Infrastructure"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DispatcherServlet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DataSource, JPA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SecurityFilterChain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom starter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Driver availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider presence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library feature gating"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ConfigurationProperties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection pool settings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth2 properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starter configuration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Where does Spring Boot 3.x read auto-configuration class names from?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) spring.factories"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) application.properties"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) web.xml"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) META-INF/spring/...AutoConfiguration.imports.** In Spring Boot 3.x, auto-configuration candidates are listed in this imports file, replacing the older spring.factories approach.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which @Conditional annotation would you use to gate a bean on a property value?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) @ConditionalOnClass"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) @ConditionalOnBean"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) @ConditionalOnProperty"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) @ConditionalOnResource"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) @ConditionalOnProperty.** This annotation creates the bean only when a specified property has the expected value (or is defined).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of @ConstructorBinding?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) To inject dependencies via constructor"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) To enable immutable @ConfigurationProperties with constructor parameters"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) To bind request parameters to a constructor"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) To enable AOP for constructors"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) To enable immutable @ConfigurationProperties with constructor parameters.** @ConstructorBinding allows configuration properties to be bound through a constructor, enabling final fields.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot's auto-configuration is the mechanism that eliminates boilerplate configuration by providing opinionated, conditionally-applied bean definitions. Understanding this machinery is essential for every Spring Boot developer â€” not just framework authors."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key takeaways:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "@EnableAutoConfiguration"
        }), " imports ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AutoConfigurationImportSelector"
        }), ", which loads auto-configuration class names from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports"
        }), " (Spring Boot 3.x) or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "META-INF/spring.factories"
        }), " (Spring Boot 2.x)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The @Conditional family"
        }), " provides fine-grained gating: classpath presence (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConditionalOnClass"
        }), "), bean presence (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConditionalOnBean"
        }), "), property values (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConditionalOnProperty"
        }), "), resource availability (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConditionalOnResource"
        }), "), SpEL expressions (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConditionalOnExpression"
        }), "), cloud platform, JNDI, Java version, single-candidate beans, and war deployment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "@AutoConfiguration"
        }), " (Spring Boot 3.x) is a specialized ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Configuration"
        }), " that participates in auto-configuration ordering via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@AutoConfigureBefore"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@AutoConfigureAfter"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@AutoConfigureOrder"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom starters"
        }), " follow a two-module convention: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{name}-spring-boot-autoconfigure"
        }), " (contains the auto-configuration and properties) and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{name}-spring-boot-starter"
        }), " (the consumer POM)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration properties"
        }), " bind external configuration to type-safe POJOs via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConfigurationProperties(prefix)"
        }), ", with support for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConstructorBinding"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NestedConfigurationProperty"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Validated"
        }), ", relaxed binding, and automatic ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Duration"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataSize"
        }), " conversion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "spring-boot-configuration-processor"
        }), " generates IDE metadata from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConfigurationProperties"
        }), " classes for auto-completion, documentation rendering, and validation in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.properties"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.yml"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Failure analysis"
        }), " converts raw startup exceptions into actionable, human-readable messages. Custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FailureAnalyzer"
        }), " implementations plug into this system."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EnvironmentPostProcessor"
        }), " allows injecting property sources before bean creation, enabling external configuration sources like filesystem paths, databases, or vault services."]
      }), "\n"]
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
            children: "@Configuration"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@AutoConfiguration"
          }), " in Spring Boot 3.x?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AutoConfigurationImportSelector"
          }), " determine which auto-configuration classes to load? List the steps in order."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@ConditionalOnBean"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@ConditionalOnSingleCandidate"
          }), ". When would you use each?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Why should ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@ConditionalOnClass"
          }), " typically be placed before ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@ConditionalOnExpression"
          }), " on an auto-configuration class?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is relaxed binding? Give three examples of property key formats that would bind to the field ", (0,jsx_runtime.jsx)(_components.code, {
            children: "mailProperties.hostname"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@ConstructorBinding"
          }), " differ from traditional setter-based binding? What are the advantages?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the purpose of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "spring-boot-configuration-processor"
          }), "? Where does it place its output?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How would you exclude the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DataSourceAutoConfiguration"
          }), " class without modifying any Java source code?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the naming convention for a custom Spring Boot starter called \"redis-streams\"? What are the two modules?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Why would you implement an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EnvironmentPostProcessor"
          }), " instead of using a regular ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@PropertySource"
          }), "?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 1: Analyze an Auto-Configuration Report"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Start a Spring Boot 3.x application with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-starter-web"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-starter-data-jpa"
      }), " as dependencies. Set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "debug=true"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "application.properties"
      }), ". Read the auto-configuration report in the startup log. Identify:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Three auto-configuration classes with positive matches."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Three auto-configuration classes with negative matches and the reason why."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One unconditional auto-configuration class."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a short explanation of why ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataSourceAutoConfiguration"
        }), " matches but ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FlywayAutoConfiguration"
        }), " (if present) does not."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 2: Write Custom Conditionals"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConditionalOnOperatingSystem"
      }), " annotation that accepts a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), " attribute (", (0,jsx_runtime.jsx)(_components.code, {
        children: "WINDOWS"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LINUX"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAC"
      }), "). Implement the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Condition"
      }), " interface to check ", (0,jsx_runtime.jsx)(_components.code, {
        children: "System.getProperty(\"os.name\")"
      }), ". Create two beans:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "WindowsSpecificService"
        }), " â€” annotated with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConditionalOnOperatingSystem(name = \"WINDOWS\")"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "UnixSpecificService"
        }), " â€” annotated with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConditionalOnOperatingSystem(name = \"LINUX\")"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify the correct service is created based on your current operating system."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 3: Configuration Properties with Nested and Duration Types"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConfigurationProperties"
      }), " class called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NotificationProperties"
      }), " with prefix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app.notification"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "app.notification.enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "app.notification.providers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List<String>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[\"email\"]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "app.notification.retry-delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "app.notification.max-retries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "app.notification.email.host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(required)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "app.notification.email.port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "587"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "app.notification.email.credentials.username"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(required)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "app.notification.email.credentials.password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(required)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use a nested static class for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Email"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Credentials"
      }), ". Add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Validated"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@jakarta.validation.constraints"
      }), " annotations to enforce the constraints. Provide the corresponding ", (0,jsx_runtime.jsx)(_components.code, {
        children: "application.properties"
      }), " with sample values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 4: Build a Full Custom Starter â€” Rate Limiter"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a two-module custom starter that provides a rate-limiting capability:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Auto-Configuration Module (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ratelimit-spring-boot-autoconfigure"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RateLimitProperties"
        }), " â€” prefix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ratelimit"
        }), ", properties: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enabled"
        }), " (boolean, default true), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "default-limit"
        }), " (int, default 100), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "default-window"
        }), " (Duration, default 1m), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strategies"
        }), " (Map<String, StrategyConfig>)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "StrategyConfig"
        }), " â€” nested class with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "limit"
        }), " (int) and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "window"
        }), " (Duration)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RateLimiter"
        }), " â€” simple token-bucket implementation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RateLimitAutoConfiguration"
        }), " â€” conditionally creates a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RateLimiter"
        }), " bean with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConditionalOnMissingBean"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ConditionalOnProperty"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Starter Module (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ratelimit-spring-boot-starter"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["POM-only, depends on the autoconfigure module and a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bucket4j"
        }), " or similar library (or implement a simple in-memory counter)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer Application:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add the starter, configure with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ratelimit.default-limit=50"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ratelimit.strategies.api.limit=10"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ratelimit.strategies.api.window=1s"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Inject ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RateLimiter"
        }), " and call it in a loop, printing whether each call is allowed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 5: Deep Dive â€” Override Auto-Configuration with Custom Bean"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WebMvcAutoConfiguration"
      }), " configures a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ContentNegotiationManager"
      }), " that includes a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PathExtensionContentNegotiationStrategy"
      }), ". You want to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "disable"
      }), " path-extension content negotiation (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/users.json"
      }), " should return JSON, not trigger ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".json"
      }), " content negotiation) and instead use only the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Accept"
      }), " header."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Research: What bean in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WebMvcAutoConfiguration"
        }), " controls content negotiation?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Configuration"
        }), " class that overrides this bean."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@AutoConfigureAfter(WebMvcAutoConfiguration.class)"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@AutoConfigureOrder(0)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify the behavior with a simple REST controller and curl requests demonstrating that ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".json"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".xml"
        }), " extensions no longer change the response format."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 6: Custom FailureAnalyzer for Missing Configuration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create an auto-configuration class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReportingAutoConfiguration"
      }), " that requires a property ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app.reporting.database-url"
      }), " to be set. If the property is missing, throw a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReportingConfigurationException"
      }), " with a descriptive message. Write a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReportingFailureAnalyzer"
      }), " that produces a FailureAnalysis with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Description: \"Reporting database URL (app.reporting.database-url) is not configured.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Action: \"Set the 'app.reporting.database-url' property in application.properties or define a bean of type 'javax.sql.DataSource' named 'reportingDataSource'.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Register the analyzer and verify it works by starting the application without the required property."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 7: EnvironmentPostProcessor with Encrypted Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EnvironmentPostProcessor"
      }), " that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Scans the existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PropertySource"
        }), " entries for keys ending with ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".encrypted"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each such key, reads the value (a Base64-encoded, AES-encrypted string)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Decrypts the value using a secret key read from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "system.properties"
        }), " or an environment variable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Registers a new ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PropertySource"
        }), " with the decrypted values, using the same key name with the ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".encrypted"
        }), " suffix removed."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removes the original encrypted property source (or marks it as last priority)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Include a utility class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AESEncryption"
      }), " for encrypting/decrypting, and provide a test that verifies the decryption works end-to-end with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Value(\"${database.password}\")"
      }), " resolving to the decrypted value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 8: Metadata Generation for a Complex Configuration Class"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Extend the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GreetingProperties"
      }), " starter from Section 5 with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@DurationUnit"
        }), " annotated field for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cache-ttl"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@DataSizeUnit"
        }), " annotated field for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "max-message-size"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "List<String>"
        }), " field for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fallback-greetings"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Map<String, String>"
        }), " field for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "localized-templates"
        }), " (key: locale code, value: template)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Generate the configuration metadata by building the project. Inspect ", (0,jsx_runtime.jsx)(_components.code, {
        children: "target/classes/META-INF/spring-configuration-metadata.json"
      }), " and confirm that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All properties are listed with correct types."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Duration"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataSize"
        }), " properties show the correct type."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nested properties (under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "titles"
        }), ") are present."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The map property shows ", (0,jsx_runtime.jsx)(_components.code, {
          children: "java.util.Map<java.lang.String,java.lang.String>"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "additional-spring-configuration-metadata.json"
      }), " that provides value hints for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cache-ttl"
      }), " field suggesting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "30s"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "60s"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "5m"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "10m"
      }), "."]
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



/***/ }

}]);