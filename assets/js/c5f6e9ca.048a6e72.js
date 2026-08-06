"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[23737],{

/***/ 47348
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_16_validation_md_c5f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-16-validation-md-c5f.json
const site_docs_courses_java_16_validation_md_c5f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/16-validation","title":"Request Validation, Error Handling & Binding","description":"Previous OpenAPI & API Documentation","source":"@site/docs/courses/java/16-validation.md","sourceDirName":"courses/java","slug":"/java/16-validation","permalink":"/ai-engineering-journey/java/16-validation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"16-validation","slug":"/java/16-validation","title":"Request Validation, Error Handling & Binding","sidebar_label":"Request Validation, Error Handling & Binding","sidebar_position":16},"sidebar":"coursesSidebar","previous":{"title":"REST API Development with Spring MVC","permalink":"/ai-engineering-journey/java/15-rest-api"},"next":{"title":"API Documentation with OpenAPI/Swagger","permalink":"/ai-engineering-journey/java/17-openapi"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/16-validation.md


const frontMatter = {
	id: '16-validation',
	slug: '/java/16-validation',
	title: 'Request Validation, Error Handling & Binding',
	sidebar_label: 'Request Validation, Error Handling & Binding',
	sidebar_position: 16
};
const contentTitle = 'Request Validation, Error Handling & Binding';

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
  "value": "1.1 Why Validate?",
  "id": "11-why-validate",
  "level": 3
}, {
  "value": "1.2 Jakarta Bean Validation → The JSR-380 Standard",
  "id": "12-jakarta-bean-validation--the-jsr-380-standard",
  "level": 3
}, {
  "value": "1.2.1 Core Constraint Annotations",
  "id": "121-core-constraint-annotations",
  "level": 4
}, {
  "value": "1.3 @Valid on Controller Parameters",
  "id": "13-valid-on-controller-parameters",
  "level": 3
}, {
  "value": "1.3.1 Nested Object Validation",
  "id": "131-nested-object-validation",
  "level": 4
}, {
  "value": "1.3.2 List Validation",
  "id": "132-list-validation",
  "level": 4
}, {
  "value": "1.4 @Validated Groups",
  "id": "14-validated-groups",
  "level": 3
}, {
  "value": "1.4.1 Default Group Sequence",
  "id": "141-default-group-sequence",
  "level": 4
}, {
  "value": "1.4.2 @ConvertGroup",
  "id": "142-convertgroup",
  "level": 4
}, {
  "value": "1.5 Custom Validators",
  "id": "15-custom-validators",
  "level": 3
}, {
  "value": "1.5.1 Simple Custom Constraint",
  "id": "151-simple-custom-constraint",
  "level": 4
}, {
  "value": "1.5.2 Class-Level (Cross-Field) Validation",
  "id": "152-class-level-cross-field-validation",
  "level": 4
}, {
  "value": "1.5.3 Fields Match Validator",
  "id": "153-fields-match-validator",
  "level": 4
}, {
  "value": "1.6 Error Responses",
  "id": "16-error-responses",
  "level": 3
}, {
  "value": "1.6.1 MethodArgumentNotValidException",
  "id": "161-methodargumentnotvalidexception",
  "level": 4
}, {
  "value": "1.6.2 ConstraintViolationException",
  "id": "162-constraintviolationexception",
  "level": 4
}, {
  "value": "1.6.3 Comprehensive Exception Handler",
  "id": "163-comprehensive-exception-handler",
  "level": 4
}, {
  "value": "1.6.4 FieldError and GlobalError Deep Dive",
  "id": "164-fielderror-and-globalerror-deep-dive",
  "level": 4
}, {
  "value": "1.7 @InitBinder",
  "id": "17-initbinder",
  "level": 3
}, {
  "value": "1.7.1 Custom Property Editors",
  "id": "171-custom-property-editors",
  "level": 4
}, {
  "value": "1.7.2 Allowed and Disallowed Fields",
  "id": "172-allowed-and-disallowed-fields",
  "level": 4
}, {
  "value": "1.7.3 Custom Validator on a Specific Model Attribute",
  "id": "173-custom-validator-on-a-specific-model-attribute",
  "level": 4
}, {
  "value": "1.8 @ControllerAdvice / @RestControllerAdvice",
  "id": "18-controlleradvice--restcontrolleradvice",
  "level": 3
}, {
  "value": "1.8.1 Scoping with basePackages",
  "id": "181-scoping-with-basepackages",
  "level": 4
}, {
  "value": "1.8.2 Scoping with assignableTypes",
  "id": "182-scoping-with-assignabletypes",
  "level": 4
}, {
  "value": "1.8.3 Exception Handler Ordering",
  "id": "183-exception-handler-ordering",
  "level": 4
}, {
  "value": "1.9 Request Entity Binding",
  "id": "19-request-entity-binding",
  "level": 3
}, {
  "value": "1.9.1 @ModelAttribute",
  "id": "191-modelattribute",
  "level": 4
}, {
  "value": "1.9.2 BindingResult",
  "id": "192-bindingresult",
  "level": 4
}, {
  "value": "1.9.3 Errors Interface",
  "id": "193-errors-interface",
  "level": 4
}, {
  "value": "1.9.4 Programmatic Error Rejection",
  "id": "194-programmatic-error-rejection",
  "level": 4
}, {
  "value": "1.10 Message Interpolation",
  "id": "110-message-interpolation",
  "level": 3
}, {
  "value": "1.10.1 Default Interpolation",
  "id": "1101-default-interpolation",
  "level": 4
}, {
  "value": "1.10.2 ValidationMessages.properties",
  "id": "1102-validationmessagesproperties",
  "level": 4
}, {
  "value": "1.10.3 Message Interpolation in Annotations",
  "id": "1103-message-interpolation-in-annotations",
  "level": 4
}, {
  "value": "1.10.4 Custom MessageInterpolator",
  "id": "1104-custom-messageinterpolator",
  "level": 4
}, {
  "value": "1.10.5 EL Interpolation in Messages",
  "id": "1105-el-interpolation-in-messages",
  "level": 4
}, {
  "value": "1.11 Spring Validation",
  "id": "111-spring-validation",
  "level": 3
}, {
  "value": "1.11.1 Spring&#39;s Validator Interface",
  "id": "1111-springs-validator-interface",
  "level": 4
}, {
  "value": "1.11.2 Combining Bean Validation with Spring Validation",
  "id": "1112-combining-bean-validation-with-spring-validation",
  "level": 4
}, {
  "value": "1.11.3 Spring Validation Utils",
  "id": "1113-spring-validation-utils",
  "level": 4
}, {
  "value": "1.12 DTO Patterns",
  "id": "112-dto-patterns",
  "level": 3
}, {
  "value": "1.12.1 Request DTO vs Response DTO vs Entity",
  "id": "1121-request-dto-vs-response-dto-vs-entity",
  "level": 4
}, {
  "value": "1.12.2 Complete DTO Example",
  "id": "1122-complete-dto-example",
  "level": 4
}, {
  "value": "1.12.3 MapStruct for DTO Conversion",
  "id": "1123-mapstruct-for-dto-conversion",
  "level": 4
}, {
  "value": "1.13 @Validated at Class Level for Method Validation",
  "id": "113-validated-at-class-level-for-method-validation",
  "level": 3
}, {
  "value": "1.14 Complete Working Example",
  "id": "114-complete-working-example",
  "level": 3
}, {
  "value": "1.15 Testing Validation",
  "id": "115-testing-validation",
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
  "value": "Exercise 1: Basic Bean Validation",
  "id": "exercise-1-basic-bean-validation",
  "level": 3
}, {
  "value": "Exercise 2: Nested Object Validation",
  "id": "exercise-2-nested-object-validation",
  "level": 3
}, {
  "value": "Exercise 3: Validation Groups",
  "id": "exercise-3-validation-groups",
  "level": 3
}, {
  "value": "Exercise 4: Custom Constraint → ISBN",
  "id": "exercise-4-custom-constraint--isbn",
  "level": 3
}, {
  "value": "Exercise 5: Cross-Field Validator",
  "id": "exercise-5-cross-field-validator",
  "level": 3
}, {
  "value": "Exercise 6: Global Exception Handler",
  "id": "exercise-6-global-exception-handler",
  "level": 3
}, {
  "value": "Exercise 7: @InitBinder in Practice",
  "id": "exercise-7-initbinder-in-practice",
  "level": 3
}, {
  "value": "Exercise 8: Message Interpolation",
  "id": "exercise-8-message-interpolation",
  "level": 3
}, {
  "value": "Exercise 9: Spring Validator",
  "id": "exercise-9-spring-validator",
  "level": 3
}, {
  "value": "Exercise 10: MapStruct DTO Mapping",
  "id": "exercise-10-mapstruct-dto-mapping",
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
        id: "request-validation-error-handling--binding",
        children: "Request Validation, Error Handling & Binding"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/15-rest-api",
          children: "REST API Development"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/17-openapi",
          children: "OpenAPI & API Documentation"
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
        href: "../../assets/images/lessons/java/16-validation/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/16-validation/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/16-validation/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/16-validation/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/16-validation/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/16-validation/visual-explanation.png",
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
        children: ["Apply Jakarta Bean Validation constraints (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotNull"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotEmpty"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotBlank"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Size"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Min"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Max"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Email"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Pattern"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Past"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Future"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Positive"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Negative"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Digits"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@AssertTrue"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trigger validation on controller parameters with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Valid"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use validation groups for partial validation in different scenarios"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create custom constraint annotations and validators with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ConstraintValidator"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Handle validation errors globally with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ExceptionHandler"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ControllerAdvice"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Structure error responses with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FieldError"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GlobalError"
        }), ", and custom DTOs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@InitBinder"
        }), " for custom property editors, allowed and disallowed fields"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RestControllerAdvice"
        }), " for global exception handling with ordering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bind request entities with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ModelAttribute"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BindingResult"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Interpolate validation messages with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ValidationMessages.properties"
        }), " and custom interpolators"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Combine Spring ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Validator"
        }), " interface with Bean Validation"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply DTO patterns with MapStruct for entity-to-DTO conversion"
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
            children: "Bean Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jakarta EE standard annotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@NotNull, @NotEmpty, @Size, @Pattern cover most cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validation Groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial validation for different scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define group interfaces, specify via @Validated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Constraint + ConstraintValidator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reusable validation logic with message interpolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@ExceptionHandler for MethodArgumentNotValidException"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured error response with field-level details"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DTO Pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate API models from entity models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MapStruct generates mapper implementations at compile time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Bean Validation] --> B[Validation Groups]\n    B --> C[Custom Constraints]\n    C --> D[Global Error Handling]\n    D --> E[InitBinder]\n    E --> F[ModelAttribute]\n    F --> G[DTO Pattern]\n    G --> H[MapStruct]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always use DTOs for your API layer. Exposing JPA entities directly creates tight coupling between your database schema and your API contract, making both harder to evolve independently."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-theory",
      children: "1. Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/16-validation.png",
        alt: "Request Validation Flow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-why-validate",
      children: "1.1 Why Validate?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid data is the root cause of most application defects. Without validation, you risk:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL injection through unvalidated string inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Persistence errors from oversized or null values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Business logic failures from out-of-range numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UX degradation from cryptic stack traces shown to users"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data corruption that silently propagates through the system"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot provides a layered validation architecture:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP Request\n    │\n    ▼\nController (@Valid / @Validated)\n    │\n    ▼\nService layer (programmatic validation)\n    │\n    ▼\nPersistence (@Column constraints, DB constraints)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Validation should happen at ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "every boundary"
      }), " where external data enters the system. The controller is the first and most important boundary."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-jakarta-bean-validation--the-jsr-380-standard",
      children: "1.2 Jakarta Bean Validation → The JSR-380 Standard"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot 4.x uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Jakarta Bean Validation 3.0+"
      }), " (formerly JSR-380 / Bean Validation 2.0). The reference implementation is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hibernate Validator"
      }), " 8+, which is automatically included when you add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-boot-starter-web"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n</dependency>\n<!-- Validation is already included as a transitive dependency -->\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hibernate Validator implements all standard constraints and provides additional ones. You never need to add the validation starter separately → Spring Boot's web starter includes it."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "121-core-constraint-annotations",
      children: "1.2.1 Core Constraint Annotations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Annotation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Applicable To"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@NotNull"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any reference"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Value must not be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "null"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@NotEmpty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String, Collection, Map, Array"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must not be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "null"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "and"
            }), " must have size > 0"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@NotBlank"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String only"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must not be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "null"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "and"
            }), " must contain at least one non-whitespace character"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Size(min, max)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String, Collection, Map, Array"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Length/size must be between ", (0,jsx_runtime.jsx)(_components.code, {
              children: "min"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "max"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Min(value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "short"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "byte"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BigDecimal"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must be ≥ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "value"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Max(value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Same as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Min"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must be ≤ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "value"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@DecimalMin(value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BigDecimal"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BigInteger"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CharSequence"
            }), ", numeric wrappers"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must be ≥ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "value"
            }), " (string-based comparison for precision)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@DecimalMax(value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Same as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@DecimalMin"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must be ≤ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "value"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Negative"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be strictly negative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@NegativeOrZero"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be negative or zero"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Positive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be strictly positive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@PositiveOrZero"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be positive or zero"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Digits(integer, fraction)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric types, String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be a number within specified integer/fraction digit bounds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Email"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be a well-formed email address (regex-based, not RFC-5321 complete)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Pattern(regexp)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must match the given regular expression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Past"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Date"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Calendar"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Instant"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "LocalDate"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "LocalDateTime"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "OffsetDateTime"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Year"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MonthDay"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be in the past"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@PastOrPresent"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Same as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Past"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be in the past or present"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Future"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Same as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Past"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be in the future"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@FutureOrPresent"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Same as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Past"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be in the future or present"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@AssertTrue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "boolean"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), " (useful for terms-acceptance checks)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@AssertFalse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "boolean"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Complete example:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.constraints.*;\nimport java.math.BigDecimal;\nimport java.time.LocalDate;\n\npublic class ProductRequest {\n\n    @NotNull(message = \"Product name is required\")\n    @NotBlank(message = \"Product name cannot be blank\")\n    @Size(min = 3, max = 100, message = \"Product name must be between {min} and {max} characters\")\n    private String name;\n\n    @NotNull\n    @Size(min = 10, max = 2000)\n    private String description;\n\n    @NotNull(message = \"Price is required\")\n    @Positive(message = \"Price must be positive\")\n    @Digits(integer = 8, fraction = 2, message = \"Price must have at most 8 integer and 2 fraction digits\")\n    private BigDecimal price;\n\n    @Min(value = 0, message = \"Stock cannot be negative\")\n    @Max(value = 100000, message = \"Stock cannot exceed 100,000\")\n    private int stockQuantity;\n\n    @NotNull\n    @Email(message = \"Supplier email must be valid\")\n    private String supplierEmail;\n\n    @Pattern(\n        regexp = \"^[A-Z]{2}\\\\d{10}$\",\n        message = \"SKU must be 2 uppercase letters followed by 10 digits\"\n    )\n    private String sku;\n\n    @Past(message = \"Manufacturing date must be in the past\")\n    private LocalDate manufacturingDate;\n\n    @Future(message = \"Expiry date must be in the future\")\n    private LocalDate expiryDate;\n\n    @AssertTrue(message = \"You must accept the terms and conditions\")\n    private boolean termsAccepted;\n\n    @NotNull\n    @PositiveOrZero\n    private BigDecimal discountPercentage;\n\n    public ProductRequest() {}\n\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n\n    public String getDescription() { return description; }\n    public void setDescription(String description) { this.description = description; }\n\n    public BigDecimal getPrice() { return price; }\n    public void setPrice(BigDecimal price) { this.price = price; }\n\n    public int getStockQuantity() { return stockQuantity; }\n    public void setStockQuantity(int stockQuantity) { this.stockQuantity = stockQuantity; }\n\n    public String getSupplierEmail() { return supplierEmail; }\n    public void setSupplierEmail(String supplierEmail) { this.supplierEmail = supplierEmail; }\n\n    public String getSku() { return sku; }\n    public void setSku(String sku) { this.sku = sku; }\n\n    public LocalDate getManufacturingDate() { return manufacturingDate; }\n    public void setManufacturingDate(LocalDate manufacturingDate) { this.manufacturingDate = manufacturingDate; }\n\n    public LocalDate getExpiryDate() { return expiryDate; }\n    public void setExpiryDate(LocalDate expiryDate) { this.expiryDate = expiryDate; }\n\n    public boolean isTermsAccepted() { return termsAccepted; }\n    public void setTermsAccepted(boolean termsAccepted) { this.termsAccepted = termsAccepted; }\n\n    public BigDecimal getDiscountPercentage() { return discountPercentage; }\n    public void setDiscountPercentage(BigDecimal discountPercentage) { this.discountPercentage = discountPercentage; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-valid-on-controller-parameters",
      children: "1.3 @Valid on Controller Parameters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Valid"
      }), " annotation (from Jakarta) triggers Bean Validation on a method parameter. In Spring MVC, place it on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RequestBody"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RequestParam"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ModelAttribute"
      }), " parameters:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.Valid;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\n@RestController\n@RequestMapping(\"/api/products\")\npublic class ProductController {\n\n    @PostMapping\n    public ResponseEntity<ProductResponse> createProduct(\n            @Valid @RequestBody ProductRequest request) {\n        // If validation fails, MethodArgumentNotValidException is thrown\n        // This code only runs if all constraints pass\n        ProductResponse response = new ProductResponse(\n            \"PROD-001\",\n            request.getName(),\n            request.getPrice()\n        );\n        return ResponseEntity.status(HttpStatus.CREATED).body(response);\n    }\n\n    @PutMapping(\"/{id}\")\n    public ResponseEntity<ProductResponse> updateProduct(\n            @PathVariable String id,\n            @Valid @RequestBody ProductRequest request) {\n        ProductResponse response = new ProductResponse(\n            id,\n            request.getName(),\n            request.getPrice()\n        );\n        return ResponseEntity.ok(response);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "131-nested-object-validation",
      children: "1.3.1 Nested Object Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a DTO contains another object, the nested object is NOT validated automatically. You must annotate the field with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Valid"
      }), " to trigger cascading validation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.Valid;\nimport jakarta.validation.constraints.*;\n\npublic class OrderRequest {\n\n    @NotNull\n    @Valid\n    private CustomerInfo customer;\n\n    @NotNull\n    @Size(min = 1, message = \"Order must have at least one item\")\n    @Valid\n    private List<OrderItemRequest> items;\n\n    @Valid\n    private ShippingAddress shippingAddress;\n\n    public OrderRequest() {}\n\n    public CustomerInfo getCustomer() { return customer; }\n    public void setCustomer(CustomerInfo customer) { this.customer = customer; }\n\n    public List<OrderItemRequest> getItems() { return items; }\n    public void setItems(List<OrderItemRequest> items) { this.items = items; }\n\n    public ShippingAddress getShippingAddress() { return shippingAddress; }\n    public void setShippingAddress(ShippingAddress shippingAddress) { this.shippingAddress = shippingAddress; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.constraints.*;\n\npublic class CustomerInfo {\n\n    @NotBlank(message = \"Customer name is required\")\n    private String name;\n\n    @NotBlank\n    @Email\n    private String email;\n\n    @NotBlank\n    @Pattern(regexp = \"^\\\\+?[1-9]\\\\d{1,14}$\", message = \"Phone must be in E.164 format\")\n    private String phone;\n\n    public CustomerInfo() {}\n\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n\n    public String getEmail() { return email; }\n    public void setEmail(String email) { this.email = email; }\n\n    public String getPhone() { return phone; }\n    public void setPhone(String phone) { this.phone = phone; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.constraints.*;\n\npublic class OrderItemRequest {\n\n    @NotBlank(message = \"Product ID is required\")\n    private String productId;\n\n    @NotNull\n    @Min(value = 1, message = \"Quantity must be at least 1\")\n    @Max(value = 100, message = \"Quantity cannot exceed 100\")\n    private Integer quantity;\n\n    @NotNull\n    @Positive\n    private BigDecimal unitPrice;\n\n    public OrderItemRequest() {}\n\n    public String getProductId() { return productId; }\n    public void setProductId(String productId) { this.productId = productId; }\n\n    public Integer getQuantity() { return quantity; }\n    public void setQuantity(Integer quantity) { this.quantity = quantity; }\n\n    public BigDecimal getUnitPrice() { return unitPrice; }\n    public void setUnitPrice(BigDecimal unitPrice) { this.unitPrice = unitPrice; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.constraints.*;\n\npublic class ShippingAddress {\n\n    @NotBlank\n    private String street;\n\n    @NotBlank\n    private String city;\n\n    @NotBlank\n    @Size(min = 2, max = 2, message = \"Country code must be exactly 2 characters\")\n    private String countryCode;\n\n    @NotBlank\n    @Pattern(regexp = \"^\\\\d{4,10}$\", message = \"Invalid postal code format\")\n    private String postalCode;\n\n    public ShippingAddress() {}\n\n    public String getStreet() { return street; }\n    public void setStreet(String street) { this.street = street; }\n\n    public String getCity() { return city; }\n    public void setCity(String city) { this.city = city; }\n\n    public String getCountryCode() { return countryCode; }\n    public void setCountryCode(String countryCode) { this.countryCode = countryCode; }\n\n    public String getPostalCode() { return postalCode; }\n    public void setPostalCode(String postalCode) { this.postalCode = postalCode; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/orders\")\npublic class OrderController {\n\n    @PostMapping\n    public ResponseEntity<OrderResponse> createOrder(\n            @Valid @RequestBody OrderRequest request) {\n\n        // If customer, items, or any nested object fails validation,\n        // MethodArgumentNotValidException is thrown with ALL field errors\n\n        OrderResponse response = new OrderResponse(\"ORD-001\", request.getCustomer().getName());\n        return ResponseEntity.status(HttpStatus.CREATED).body(response);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "132-list-validation",
      children: "1.3.2 List Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To validate a list of objects in a request body directly:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.Valid;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.List;\n\n@RestController\n@RequestMapping(\"/api/bulk\")\npublic class BulkImportController {\n\n    @PostMapping(\"/products\")\n    public ResponseEntity<Integer> importProducts(\n            @Valid @RequestBody List<@Valid ProductRequest> products) {\n        // Both the list itself and each element are validated\n        return ResponseEntity.ok(products.size());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Note: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Valid"
      }), " on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List"
      }), " type parameter requires ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Valid"
      }), " on the method parameter AND on the type-use:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public ResponseEntity<Integer> importProducts(\n        @Valid @RequestBody List<@Valid ProductRequest> products) {\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-validated-groups",
      children: "1.4 @Validated Groups"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sometimes the same DTO needs different validation rules in different contexts. For example, when creating a resource you require all fields, but when updating you only require the ID:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface CreateGroup {}\n\npublic interface UpdateGroup {}\n\npublic interface DiscountGroup {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.constraints.*;\nimport jakarta.validation.groups.Default;\n\npublic class ProductGroupedRequest {\n\n    @NotNull(groups = UpdateGroup.class, message = \"ID is required for update\")\n    private Long id;\n\n    @NotBlank(groups = {CreateGroup.class, Default.class})\n    @Size(min = 3, max = 100, groups = {CreateGroup.class, UpdateGroup.class, Default.class})\n    private String name;\n\n    @NotNull(groups = {CreateGroup.class, Default.class})\n    @Positive(groups = {CreateGroup.class, UpdateGroup.class, Default.class})\n    private BigDecimal price;\n\n    @NotNull(groups = DiscountGroup.class)\n    @Min(value = 0, groups = DiscountGroup.class)\n    @Max(value = 100, groups = DiscountGroup.class)\n    private Integer discountPercent;\n\n    public ProductGroupedRequest() {}\n\n    public Long getId() { return id; }\n    public void setId(Long id) { this.id = id; }\n\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n\n    public BigDecimal getPrice() { return price; }\n    public void setPrice(BigDecimal price) { this.price = price; }\n\n    public Integer getDiscountPercent() { return discountPercent; }\n    public void setDiscountPercent(Integer discountPercent) { this.discountPercent = discountPercent; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Validated"
      }), " (from Spring, not Jakarta) to specify which groups to validate:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.validation.annotation.Validated;\n\n@RestController\n@RequestMapping(\"/api/products\")\npublic class ProductGroupedController {\n\n    @PostMapping\n    public ResponseEntity<String> createProduct(\n            @Validated(CreateGroup.class) @RequestBody ProductGroupedRequest request) {\n        // Only validates constraints in CreateGroup and Default\n        return ResponseEntity.ok(\"Created: \" + request.getName());\n    }\n\n    @PutMapping(\"/{id}\")\n    public ResponseEntity<String> updateProduct(\n            @Validated(UpdateGroup.class) @RequestBody ProductGroupedRequest request) {\n        // Only validates constraints in UpdateGroup (but not Default)\n        return ResponseEntity.ok(\"Updated: \" + request.getId());\n    }\n\n    @PatchMapping(\"/{id}/discount\")\n    public ResponseEntity<String> applyDiscount(\n            @Validated({UpdateGroup.class, DiscountGroup.class})\n            @RequestBody ProductGroupedRequest request) {\n        // Validates both UpdateGroup and DiscountGroup\n        return ResponseEntity.ok(\"Discount applied: \" + request.getDiscountPercent() + \"%\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "141-default-group-sequence",
      children: "1.4.1 Default Group Sequence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, all groups validate independently. But sometimes you want groups to validate ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "in order"
      }), ", and stop at the first failure. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@GroupSequence"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.GroupSequence;\nimport jakarta.validation.groups.Default;\n\n@GroupSequence({Default.class, CreateGroup.class, DiscountGroup.class})\npublic interface ProductValidationSequence {}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now when you validate against this sequence, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Default"
      }), " runs first. If it passes, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CreateGroup"
      }), " runs. Then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DiscountGroup"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@PostMapping(\"/full\")\npublic ResponseEntity<String> createProductFull(\n        @Validated(ProductValidationSequence.class)\n        @RequestBody ProductGroupedRequest request) {\n    return ResponseEntity.ok(\"Validated in sequence\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "142-convertgroup",
      children: "1.4.2 @ConvertGroup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When validation cascades to nested objects, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConvertGroup"
      }), " lets you convert the validation group for the nested object:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class OrderWithGroupConversion {\n\n    @Valid\n    @ConvertGroup(from = Default.class, to = CreateGroup.class)\n    private CustomerInfo customer;\n\n    @Valid\n    @ConvertGroup(from = UpdateGroup.class, to = DiscountGroup.class)\n    private ShippingAddress shippingAddress;\n\n    // getters/setters\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now when the parent is validated with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Default.class"
      }), ", the nested ", (0,jsx_runtime.jsx)(_components.code, {
        children: "customer"
      }), " is validated with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CreateGroup.class"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-custom-validators",
      children: "1.5 Custom Validators"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When built-in constraints aren't enough, create custom ones."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "151-simple-custom-constraint",
      children: "1.5.1 Simple Custom Constraint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a custom annotation and its validator:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.Constraint;\nimport jakarta.validation.Payload;\nimport java.lang.annotation.*;\n\n@Target({ElementType.FIELD, ElementType.PARAMETER, ElementType.TYPE_USE})\n@Retention(RetentionPolicy.RUNTIME)\n@Constraint(validatedBy = StrongPasswordValidator.class)\n@Documented\npublic @interface StrongPassword {\n\n    String message() default \"Password must contain uppercase, lowercase, digit, and special character\";\n\n    Class<?>[] groups() default {};\n\n    Class<? extends Payload>[] payload() default {};\n\n    int minLength() default 8;\n\n    int maxLength() default 64;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.ConstraintValidator;\nimport jakarta.validation.ConstraintValidatorContext;\n\npublic class StrongPasswordValidator\n        implements ConstraintValidator<StrongPassword, String> {\n\n    private int minLength;\n    private int maxLength;\n\n    @Override\n    public void initialize(StrongPassword constraintAnnotation) {\n        this.minLength = constraintAnnotation.minLength();\n        this.maxLength = constraintAnnotation.maxLength();\n    }\n\n    @Override\n    public boolean isValid(String value, ConstraintValidatorContext context) {\n        if (value == null) {\n            return true; // @NotNull should handle nulls separately\n        }\n\n        if (value.length() < minLength || value.length() > maxLength) {\n            return false;\n        }\n\n        boolean hasUppercase = !value.equals(value.toLowerCase());\n        boolean hasLowercase = !value.equals(value.toUpperCase());\n        boolean hasDigit = value.matches(\".*\\\\d.*\");\n        boolean hasSpecial = value.matches(\".*[!@#$%^&*()_+\\\\-=\\\\[\\\\]{};':\\\"\\\\\\\\|,.<>/?].*\");\n\n        return hasUppercase && hasLowercase && hasDigit && hasSpecial;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using the custom annotation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class UserRegistrationRequest {\n\n    @NotBlank\n    @StrongPassword(minLength = 8, maxLength = 32)\n    private String password;\n\n    // getters/setters\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "152-class-level-cross-field-validation",
      children: "1.5.2 Class-Level (Cross-Field) Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sometimes validation spans multiple fields → e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "startDate"
      }), " must be before ", (0,jsx_runtime.jsx)(_components.code, {
        children: "endDate"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "password"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "confirmPassword"
      }), " must match."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.Constraint;\nimport jakarta.validation.Payload;\nimport java.lang.annotation.*;\n\n@Target({ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Constraint(validatedBy = DateRangeValidator.class)\n@Documented\npublic @interface ValidDateRange {\n\n    String message() default \"End date must be after start date\";\n\n    Class<?>[] groups() default {};\n\n    Class<? extends Payload>[] payload() default {};\n\n    String startDateField();\n\n    String endDateField();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.ConstraintValidator;\nimport jakarta.validation.ConstraintValidatorContext;\nimport java.lang.reflect.Field;\nimport java.time.LocalDate;\n\npublic class DateRangeValidator\n        implements ConstraintValidator<ValidDateRange, Object> {\n\n    private String startDateField;\n    private String endDateField;\n\n    @Override\n    public void initialize(ValidDateRange constraintAnnotation) {\n        this.startDateField = constraintAnnotation.startDateField();\n        this.endDateField = constraintAnnotation.endDateField();\n    }\n\n    @Override\n    public boolean isValid(Object value, ConstraintValidatorContext context) {\n        try {\n            Field startField = value.getClass().getDeclaredField(startDateField);\n            startField.setAccessible(true);\n            Field endField = value.getClass().getDeclaredField(endDateField);\n            endField.setAccessible(true);\n\n            LocalDate start = (LocalDate) startField.get(value);\n            LocalDate end = (LocalDate) endField.get(value);\n\n            if (start == null || end == null) {\n                return true; // @NotNull on individual fields handles nulls\n            }\n\n            return end.isAfter(start);\n        } catch (NoSuchFieldException | IllegalAccessException e) {\n            return false;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.constraints.Future;\nimport jakarta.validation.constraints.NotNull;\n\n@ValidDateRange(\n    startDateField = \"startDate\",\n    endDateField = \"endDate\",\n    message = \"Event end date must be after start date\"\n)\npublic class EventRequest {\n\n    @NotNull\n    @Future\n    private LocalDate startDate;\n\n    @NotNull\n    @Future\n    private LocalDate endDate;\n\n    @NotBlank\n    private String title;\n\n    public EventRequest() {}\n\n    public LocalDate getStartDate() { return startDate; }\n    public void setStartDate(LocalDate startDate) { this.startDate = startDate; }\n\n    public LocalDate getEndDate() { return endDate; }\n    public void setEndDate(LocalDate endDate) { this.endDate = endDate; }\n\n    public String getTitle() { return title; }\n    public void setTitle(String title) { this.title = title; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "153-fields-match-validator",
      children: "1.5.3 Fields Match Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Another common cross-field validator → password confirmation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.Constraint;\nimport jakarta.validation.Payload;\nimport java.lang.annotation.*;\n\n@Target({ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Constraint(validatedBy = FieldsMatchValidator.class)\n@Documented\npublic @interface FieldsMatch {\n\n    String message() default \"Fields do not match\";\n\n    Class<?>[] groups() default {};\n\n    Class<? extends Payload>[] payload() default {};\n\n    String field();\n\n    String matchingField();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.ConstraintValidator;\nimport jakarta.validation.ConstraintValidatorContext;\nimport org.springframework.beans.BeanUtils;\nimport java.beans.PropertyDescriptor;\n\npublic class FieldsMatchValidator\n        implements ConstraintValidator<FieldsMatch, Object> {\n\n    private String field;\n    private String matchingField;\n\n    @Override\n    public void initialize(FieldsMatch constraintAnnotation) {\n        this.field = constraintAnnotation.field();\n        this.matchingField = constraintAnnotation.matchingField();\n    }\n\n    @Override\n    public boolean isValid(Object value, ConstraintValidatorContext context) {\n        try {\n            PropertyDescriptor fieldPd = BeanUtils.getPropertyDescriptor(\n                value.getClass(), field);\n            PropertyDescriptor matchingPd = BeanUtils.getPropertyDescriptor(\n                value.getClass(), matchingField);\n\n            if (fieldPd == null || matchingPd == null) {\n                return false;\n            }\n\n            Object fieldValue = fieldPd.getReadMethod().invoke(value);\n            Object matchingValue = matchingPd.getReadMethod().invoke(value);\n\n            if (fieldValue == null && matchingValue == null) {\n                return true;\n            }\n\n            if (fieldValue != null) {\n                return fieldValue.equals(matchingValue);\n            }\n\n            return false;\n        } catch (Exception e) {\n            return false;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.constraints.NotBlank;\nimport jakarta.validation.constraints.Size;\n\n@FieldsMatch(\n    field = \"password\",\n    matchingField = \"confirmPassword\",\n    message = \"Passwords do not match\"\n)\npublic class PasswordChangeRequest {\n\n    @NotBlank\n    @Size(min = 8, max = 64)\n    private String password;\n\n    @NotBlank\n    private String confirmPassword;\n\n    public PasswordChangeRequest() {}\n\n    public String getPassword() { return password; }\n    public void setPassword(String password) { this.password = password; }\n\n    public String getConfirmPassword() { return confirmPassword; }\n    public void setConfirmPassword(String confirmPassword) { this.confirmPassword = confirmPassword; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-error-responses",
      children: "1.6 Error Responses"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When validation fails, Spring throws exceptions. You need to handle them to return structured responses."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "161-methodargumentnotvalidexception",
      children: "1.6.1 MethodArgumentNotValidException"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is thrown when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Valid"
      }), " validation on a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RequestBody"
      }), " parameter fails. It contains a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BindingResult"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FieldError"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ObjectError"
      }), " instances."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.validation.FieldError;\nimport org.springframework.validation.ObjectError;\nimport org.springframework.web.bind.MethodArgumentNotValidException;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.bind.annotation.RestControllerAdvice;\n\nimport java.time.LocalDateTime;\nimport java.util.ArrayList;\nimport java.util.List;\n\n@RestControllerAdvice\npublic class ValidationExceptionHandler {\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<ValidationErrorResponse> handleValidationExceptions(\n            MethodArgumentNotValidException ex) {\n\n        ValidationErrorResponse response = new ValidationErrorResponse(\n            \"VALIDATION_FAILED\",\n            \"Request validation failed\",\n            LocalDateTime.now()\n        );\n\n        for (FieldError fieldError : ex.getBindingResult().getFieldErrors()) {\n            response.addFieldError(\n                fieldError.getField(),\n                fieldError.getDefaultMessage(),\n                fieldError.getRejectedValue()\n            );\n        }\n\n        for (ObjectError globalError : ex.getBindingResult().getGlobalErrors()) {\n            response.addGlobalError(\n                globalError.getObjectName(),\n                globalError.getDefaultMessage()\n            );\n        }\n\n        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.time.LocalDateTime;\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class ValidationErrorResponse {\n\n    private String code;\n    private String message;\n    private LocalDateTime timestamp;\n    private List<FieldValidationError> fieldErrors;\n    private List<GlobalValidationError> globalErrors;\n\n    public ValidationErrorResponse(String code, String message, LocalDateTime timestamp) {\n        this.code = code;\n        this.message = message;\n        this.timestamp = timestamp;\n        this.fieldErrors = new ArrayList<>();\n        this.globalErrors = new ArrayList<>();\n    }\n\n    public void addFieldError(String field, String message, Object rejectedValue) {\n        this.fieldErrors.add(new FieldValidationError(field, message, rejectedValue));\n    }\n\n    public void addGlobalError(String objectName, String message) {\n        this.globalErrors.add(new GlobalValidationError(objectName, message));\n    }\n\n    public String getCode() { return code; }\n    public String getMessage() { return message; }\n    public LocalDateTime getTimestamp() { return timestamp; }\n    public List<FieldValidationError> getFieldErrors() { return fieldErrors; }\n    public List<GlobalValidationError> getGlobalErrors() { return globalErrors; }\n\n    public static class FieldValidationError {\n        private String field;\n        private String message;\n        private Object rejectedValue;\n\n        public FieldValidationError(String field, String message, Object rejectedValue) {\n            this.field = field;\n            this.message = message;\n            this.rejectedValue = rejectedValue;\n        }\n\n        public String getField() { return field; }\n        public String getMessage() { return message; }\n        public Object getRejectedValue() { return rejectedValue; }\n    }\n\n    public static class GlobalValidationError {\n        private String objectName;\n        private String message;\n\n        public GlobalValidationError(String objectName, String message) {\n            this.objectName = objectName;\n            this.message = message;\n        }\n\n        public String getObjectName() { return objectName; }\n        public String getMessage() { return message; }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "162-constraintviolationexception",
      children: "1.6.2 ConstraintViolationException"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is thrown when validation fails on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RequestParam"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PathVariable"
      }), " parameters annotated with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Validated"
      }), " at the class level:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.ConstraintViolationException;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.bind.annotation.RestControllerAdvice;\n\n@RestControllerAdvice\npublic class ConstraintViolationHandler {\n\n    @ExceptionHandler(ConstraintViolationException.class)\n    public ResponseEntity<ValidationErrorResponse> handleConstraintViolation(\n            ConstraintViolationException ex) {\n\n        ValidationErrorResponse response = new ValidationErrorResponse(\n            \"CONSTRAINT_VIOLATION\",\n            \"Parameter validation failed\",\n            LocalDateTime.now()\n        );\n\n        ex.getConstraintViolations().forEach(violation -> {\n            String path = violation.getPropertyPath().toString();\n            String message = violation.getMessage();\n            Object invalidValue = violation.getInvalidValue();\n            response.addFieldError(path, message, invalidValue);\n        });\n\n        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Validated"
      }), " on individual parameters, you must also enable validation on the controller class:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.validation.annotation.Validated;\nimport org.springframework.web.bind.annotation.*;\n\n@Validated\n@RestController\n@RequestMapping(\"/api/search\")\npublic class SearchController {\n\n    @GetMapping\n    public ResponseEntity<List<ProductResponse>> search(\n            @RequestParam @NotBlank String query,\n            @RequestParam @Min(0) int page,\n            @RequestParam @Min(1) @Max(100) int size) {\n\n        // ConstraintViolationException thrown if query is blank,\n        // page < 0, or size is outside [1, 100]\n        return ResponseEntity.ok(List.of());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "163-comprehensive-exception-handler",
      children: "1.6.3 Comprehensive Exception Handler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production-ready controller advice handling all common exceptions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.HttpStatusCode;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.http.converter.HttpMessageNotReadableException;\nimport org.springframework.lang.Nullable;\nimport org.springframework.security.access.AccessDeniedException;\nimport org.springframework.validation.FieldError;\nimport org.springframework.web.bind.MethodArgumentNotValidException;\nimport org.springframework.web.bind.MissingServletRequestParameterException;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.bind.annotation.RestControllerAdvice;\nimport org.springframework.web.context.request.WebRequest;\nimport org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;\nimport org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;\n\nimport java.time.LocalDateTime;\nimport java.util.stream.Collectors;\n\n@RestControllerAdvice\npublic class GlobalExceptionHandler extends ResponseEntityExceptionHandler {\n\n    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);\n\n    @Override\n    @Nullable\n    protected ResponseEntity<Object> handleMethodArgumentNotValid(\n            MethodArgumentNotValidException ex,\n            HttpHeaders headers, HttpStatusCode status, WebRequest request) {\n\n        ValidationErrorResponse body = new ValidationErrorResponse(\n            \"VALIDATION_FAILED\",\n            \"Request validation failed\",\n            LocalDateTime.now()\n        );\n\n        ex.getBindingResult().getAllErrors().forEach(error -> {\n            if (error instanceof FieldError fieldError) {\n                body.addFieldError(\n                    fieldError.getField(),\n                    fieldError.getDefaultMessage(),\n                    fieldError.getRejectedValue()\n                );\n            } else {\n                body.addGlobalError(error.getObjectName(), error.getDefaultMessage());\n            }\n        });\n\n        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);\n    }\n\n    @Override\n    @Nullable\n    protected ResponseEntity<Object> handleMissingServletRequestParameter(\n            MissingServletRequestParameterException ex,\n            HttpHeaders headers, HttpStatusCode status, WebRequest request) {\n\n        ValidationErrorResponse body = new ValidationErrorResponse(\n            \"MISSING_PARAMETER\",\n            \"Required parameter is missing\",\n            LocalDateTime.now()\n        );\n        body.addFieldError(ex.getParameterName(), ex.getMessage(), null);\n\n        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);\n    }\n\n    @Override\n    @Nullable\n    protected ResponseEntity<Object> handleHttpMessageNotReadable(\n            HttpMessageNotReadableException ex,\n            HttpHeaders headers, HttpStatusCode status, WebRequest request) {\n\n        ValidationErrorResponse body = new ValidationErrorResponse(\n            \"MALFORMED_REQUEST\",\n            \"Request body is malformed or contains invalid data\",\n            LocalDateTime.now()\n        );\n\n        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);\n    }\n\n    @ExceptionHandler(MethodArgumentTypeMismatchException.class)\n    public ResponseEntity<ValidationErrorResponse> handleTypeMismatch(\n            MethodArgumentTypeMismatchException ex) {\n\n        ValidationErrorResponse body = new ValidationErrorResponse(\n            \"TYPE_MISMATCH\",\n            \"Parameter type mismatch\",\n            LocalDateTime.now()\n        );\n        body.addFieldError(\n            ex.getName(),\n            \"Failed to convert value '\" + ex.getValue() + \"' to type \" + ex.getRequiredType().getSimpleName(),\n            ex.getValue()\n        );\n\n        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);\n    }\n\n    @ExceptionHandler(ConstraintViolationException.class)\n    public ResponseEntity<ValidationErrorResponse> handleConstraintViolation(\n            ConstraintViolationException ex) {\n\n        ValidationErrorResponse body = new ValidationErrorResponse(\n            \"CONSTRAINT_VIOLATION\",\n            \"Parameter validation failed\",\n            LocalDateTime.now()\n        );\n\n        ex.getConstraintViolations().forEach(violation -> {\n            body.addFieldError(\n                violation.getPropertyPath().toString(),\n                violation.getMessage(),\n                violation.getInvalidValue()\n            );\n        });\n\n        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);\n    }\n\n    @ExceptionHandler(AccessDeniedException.class)\n    public ResponseEntity<ValidationErrorResponse> handleAccessDenied(\n            AccessDeniedException ex) {\n\n        ValidationErrorResponse body = new ValidationErrorResponse(\n            \"ACCESS_DENIED\",\n            \"You do not have permission to perform this action\",\n            LocalDateTime.now()\n        );\n\n        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(body);\n    }\n\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<ValidationErrorResponse> handleAllUncaught(\n            Exception ex, WebRequest request) {\n\n        log.error(\"Unhandled exception caught in GlobalExceptionHandler\", ex);\n\n        ValidationErrorResponse body = new ValidationErrorResponse(\n            \"INTERNAL_ERROR\",\n            \"An unexpected error occurred. Please try again later.\",\n            LocalDateTime.now()\n        );\n\n        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "164-fielderror-and-globalerror-deep-dive",
      children: "1.6.4 FieldError and GlobalError Deep Dive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FieldError"
      }), " extends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ObjectError"
      }), " with:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "getField()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The field name (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"name\""
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"customer.email\""
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "getDefaultMessage()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The interpolated validation message"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "getRejectedValue()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The value that failed validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "getCodes()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array of message codes tried (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[\"NotBlank.productRequest.name\", \"NotBlank.name\", \"NotBlank.java.lang.String\", \"NotBlank\"]"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "getArguments()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array of arguments for message interpolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "getObjectName()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The name of the validated object (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"productRequest\""
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "GlobalError"
      }), " (a.k.a. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ObjectError"
      }), ") is for class-level validation failures (like cross-field validators). It has no ", (0,jsx_runtime.jsx)(_components.code, {
        children: "field"
      }), " property:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Accessing errors programmatically\nBindingResult bindingResult = ex.getBindingResult();\n\nList<FieldError> fieldErrors = bindingResult.getFieldErrors();\nList<ObjectError> globalErrors = bindingResult.getGlobalErrors();\n\nfor (FieldError fe : fieldErrors) {\n    String field = fe.getField();\n    String message = fe.getDefaultMessage();\n    Object rejected = fe.getRejectedValue();\n    log.warn(\"Validation failed on field '{}': {} (rejected value: {})\",\n        field, message, rejected);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-initbinder",
      children: "1.7 @InitBinder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@InitBinder"
      }), " methods in a controller configure ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WebDataBinder"
      }), " for that controller. They let you:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Register custom property editors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Whitelist or blacklist fields"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set custom validators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure formatting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "171-custom-property-editors",
      children: "1.7.1 Custom Property Editors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Property editors convert incoming String values to Java types:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.WebDataBinder;\nimport org.springframework.web.bind.annotation.InitBinder;\nimport org.springframework.web.bind.annotation.RestController;\nimport java.beans.PropertyEditorSupport;\nimport java.time.LocalDate;\nimport java.time.format.DateTimeFormatter;\n\n@RestController\n@RequestMapping(\"/api/events\")\npublic class EventController {\n\n    @InitBinder\n    public void initBinder(WebDataBinder binder) {\n        // Register custom editor for LocalDate with a specific format\n        binder.registerCustomEditor(LocalDate.class, new PropertyEditorSupport() {\n            @Override\n            public void setAsText(String text) throws IllegalArgumentException {\n                if (text == null || text.isBlank()) {\n                    setValue(null);\n                } else {\n                    setValue(LocalDate.parse(text, DateTimeFormatter.ofPattern(\"dd-MM-yyyy\")));\n                }\n            }\n\n            @Override\n            public String getAsText() {\n                Object value = getValue();\n                if (value == null) return \"\";\n                return ((LocalDate) value).format(DateTimeFormatter.ofPattern(\"dd-MM-yyyy\"));\n            }\n        });\n\n        // Register editor that trims strings\n        binder.registerCustomEditor(String.class, new PropertyEditorSupport() {\n            @Override\n            public void setAsText(String text) {\n                setValue(text == null ? null : text.trim());\n            }\n        });\n    }\n\n    @GetMapping\n    public ResponseEntity<String> getEvents(\n            @RequestParam LocalDate from,\n            @RequestParam LocalDate to) {\n        // Expects dates in dd-MM-yyyy format\n        return ResponseEntity.ok(\"Events from \" + from + \" to \" + to);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "172-allowed-and-disallowed-fields",
      children: "1.7.2 Allowed and Disallowed Fields"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prevent mass assignment by restricting which fields can be bound:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.WebDataBinder;\nimport org.springframework.web.bind.annotation.InitBinder;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n\n    @InitBinder\n    public void initBinder(WebDataBinder binder) {\n        // Only these fields can be set from request parameters\n        binder.setAllowedFields(\"firstName\", \"lastName\", \"email\", \"phone\");\n\n        // OR: explicitly disallow sensitive fields (preferred approach)\n        binder.setDisallowedFields(\"id\", \"role\", \"password\", \"createdAt\");\n    }\n\n    @PostMapping(\"/register\")\n    public ResponseEntity<String> register(UserRegistrationRequest request) {\n        // Even if request includes \"role=ADMIN\" or \"id=1\", they are ignored\n        return ResponseEntity.ok(\"Registered: \" + request.getEmail());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "173-custom-validator-on-a-specific-model-attribute",
      children: "1.7.3 Custom Validator on a Specific Model Attribute"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.validation.Errors;\nimport org.springframework.validation.Validator;\nimport org.springframework.web.bind.WebDataBinder;\nimport org.springframework.web.bind.annotation.InitBinder;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@RequestMapping(\"/api/promo\")\npublic class PromoCodeController {\n\n    @InitBinder(\"promoCodeRequest\")\n    public void initPromoBinder(WebDataBinder binder) {\n        // Add a custom validator alongside Bean Validation\n        binder.addValidators(new Validator() {\n            @Override\n            public boolean supports(Class<?> clazz) {\n                return PromoCodeRequest.class.isAssignableFrom(clazz);\n            }\n\n            @Override\n            public void validate(Object target, Errors errors) {\n                PromoCodeRequest request = (PromoCodeRequest) target;\n                if (request.getCode() != null\n                        && request.getCode().startsWith(\"DISABLE_\")\n                        && !request.isConfirmed()) {\n                    errors.rejectValue(\"confirmed\",\n                        \"promo.confirmation.required\",\n                        \"This promo code requires explicit confirmation\");\n                }\n            }\n        });\n    }\n\n    @PostMapping\n    public ResponseEntity<String> applyPromo(\n            @Valid PromoCodeRequest request) {\n        // Both Bean Validation and custom validator run\n        return ResponseEntity.ok(\"Promo applied: \" + request.getCode());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-controlleradvice--restcontrolleradvice",
      children: "1.8 @ControllerAdvice / @RestControllerAdvice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These annotations create ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "global"
      }), " (or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "scoped"
      }), ") exception handlers, data binders, and model attributes that apply across multiple controllers."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@ControllerAdvice"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@RestControllerAdvice"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Response body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Views (JSP/Thymeleaf)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON/XML directly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Common use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVC apps with views"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST APIs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@ExceptionHandler"
            }), " return"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ModelAndView or ResponseEntity"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ResponseEntity (automatic ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@ResponseBody"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "181-scoping-with-basepackages",
      children: "1.8.1 Scoping with basePackages"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.RestControllerAdvice;\n\n@RestControllerAdvice(basePackages = \"com.example.api.v1\")\npublic class V1ApiExceptionHandler {\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<ValidationErrorResponse> handleValidation(\n            MethodArgumentNotValidException ex) {\n        ValidationErrorResponse response = new ValidationErrorResponse(\n            \"V1_VALIDATION_ERROR\", \"Validation failed\", LocalDateTime.now()\n        );\n        ex.getBindingResult().getFieldErrors().forEach(fe ->\n            response.addFieldError(fe.getField(), fe.getDefaultMessage(), fe.getRejectedValue())\n        );\n        return ResponseEntity.badRequest().body(response);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.ControllerAdvice;\n\n@RestControllerAdvice(basePackages = \"com.example.api.v2\")\npublic class V2ApiExceptionHandler {\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<ValidationErrorResponse> handleValidation(\n            MethodArgumentNotValidException ex) {\n        ValidationErrorResponse response = new ValidationErrorResponse(\n            \"V2_VALIDATION_ERROR\",\n            \"One or more fields are invalid\",\n            LocalDateTime.now()\n        );\n        ex.getBindingResult().getFieldErrors().forEach(fe -> {\n            response.addFieldError(fe.getField(), fe.getDefaultMessage(), null);\n        });\n        return ResponseEntity.badRequest().body(response);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "182-scoping-with-assignabletypes",
      children: "1.8.2 Scoping with assignableTypes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.RestControllerAdvice;\n\n@RestControllerAdvice(assignableTypes = {AdminController.class, ManagementController.class})\npublic class AdminExceptionHandler {\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<ValidationErrorResponse> handleAdminValidation(\n            MethodArgumentNotValidException ex) {\n        ValidationErrorResponse response = new ValidationErrorResponse(\n            \"ADMIN_VALIDATION_ERROR\",\n            \"Admin validation failed\",\n            LocalDateTime.now()\n        );\n        ex.getBindingResult().getFieldErrors().forEach(fe ->\n            response.addFieldError(fe.getField(), fe.getDefaultMessage(), fe.getRejectedValue())\n        );\n        return ResponseEntity.badRequest().body(response);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "183-exception-handler-ordering",
      children: "1.8.3 Exception Handler Ordering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When multiple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ControllerAdvice"
      }), " beans can handle the same exception, the one with the highest ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Order"
      }), " value (lowest precedence) wins. By default, all are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Ordered.LOWEST_PRECEDENCE"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.core.Ordered;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.bind.annotation.RestControllerAdvice;\n\n@Order(Ordered.HIGHEST_PRECEDENCE)\n@RestControllerAdvice(assignableTypes = {AdminController.class})\npublic class SpecificAdminHandler {\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<ValidationErrorResponse> handleAdminValidation(\n            MethodArgumentNotValidException ex) {\n        ValidationErrorResponse response = new ValidationErrorResponse(\n            \"ADMIN_SPECIFIC_ERROR\", \"Admin validation failed\", LocalDateTime.now()\n        );\n        ex.getBindingResult().getFieldErrors().forEach(fe ->\n            response.addFieldError(fe.getField(), fe.getDefaultMessage(), fe.getRejectedValue())\n        );\n        return ResponseEntity.badRequest().body(response);\n    }\n}\n\n@Order(Ordered.LOWEST_PRECEDENCE)\n@RestControllerAdvice\npublic class GlobalFallbackHandler {\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<ValidationErrorResponse> handleGenericValidation(\n            MethodArgumentNotValidException ex) {\n        ValidationErrorResponse response = new ValidationErrorResponse(\n            \"VALIDATION_ERROR\", \"Validation failed\", LocalDateTime.now()\n        );\n        ex.getBindingResult().getFieldErrors().forEach(fe ->\n            response.addFieldError(fe.getField(), fe.getDefaultMessage(), fe.getRejectedValue())\n        );\n        return ResponseEntity.badRequest().body(response);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19-request-entity-binding",
      children: "1.9 Request Entity Binding"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "191-modelattribute",
      children: "1.9.1 @ModelAttribute"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@ModelAttribute"
      }), " binds request parameters (query params, form data) to a Java object:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.*;\n\n@RestController\n@RequestMapping(\"/api/search\")\npublic class SearchController {\n\n    @GetMapping\n    public ResponseEntity<List<ProductResponse>> search(\n            @Valid @ModelAttribute ProductSearchCriteria criteria) {\n\n        // Binds query parameters to ProductSearchCriteria fields\n        // /api/search?query=laptop&category=electronics&minPrice=100&maxPrice=2000\n        return ResponseEntity.ok(List.of());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.constraints.*;\n\npublic class ProductSearchCriteria {\n\n    @NotBlank(message = \"Search query is required\")\n    private String query;\n\n    private String category;\n\n    @Min(0)\n    private BigDecimal minPrice;\n\n    @DecimalMax(\"999999.99\")\n    private BigDecimal maxPrice;\n\n    @Min(0)\n    private int page;\n\n    @Min(1)\n    @Max(100)\n    private int size = 20;\n\n    private String sortBy = \"relevance\";\n\n    private boolean includeOutOfStock;\n\n    public ProductSearchCriteria() {}\n\n    public String getQuery() { return query; }\n    public void setQuery(String query) { this.query = query; }\n\n    public String getCategory() { return category; }\n    public void setCategory(String category) { this.category = category; }\n\n    public BigDecimal getMinPrice() { return minPrice; }\n    public void setMinPrice(BigDecimal minPrice) { this.minPrice = minPrice; }\n\n    public BigDecimal getMaxPrice() { return maxPrice; }\n    public void setMaxPrice(BigDecimal maxPrice) { this.maxPrice = maxPrice; }\n\n    public int getPage() { return page; }\n    public void setPage(int page) { this.page = page; }\n\n    public int getSize() { return size; }\n    public void setSize(int size) { this.size = size; }\n\n    public String getSortBy() { return sortBy; }\n    public void setSortBy(String sortBy) { this.sortBy = sortBy; }\n\n    public boolean isIncludeOutOfStock() { return includeOutOfStock; }\n    public void setIncludeOutOfStock(boolean includeOutOfStock) { this.includeOutOfStock = includeOutOfStock; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "192-bindingresult",
      children: "1.9.2 BindingResult"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you place ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BindingResult"
      }), " immediately after a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Valid"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Validated"
      }), " parameter, validation errors are captured in the result instead of throwing an exception:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.validation.BindingResult;\nimport org.springframework.validation.FieldError;\n\n@RestController\n@RequestMapping(\"/api/products\")\npublic class ProductWithBindingResultController {\n\n    @PostMapping\n    public ResponseEntity<?> createProduct(\n            @Valid @RequestBody ProductRequest request,\n            BindingResult bindingResult) {\n\n        if (bindingResult.hasErrors()) {\n            ValidationErrorResponse errorResponse = new ValidationErrorResponse(\n                \"VALIDATION_FAILED\",\n                \"Product creation failed due to validation errors\",\n                LocalDateTime.now()\n            );\n\n            for (FieldError fe : bindingResult.getFieldErrors()) {\n                errorResponse.addFieldError(\n                    fe.getField(),\n                    fe.getDefaultMessage(),\n                    fe.getRejectedValue()\n                );\n            }\n\n            return ResponseEntity.badRequest().body(errorResponse);\n        }\n\n        // No validation errors → proceed\n        ProductResponse response = new ProductResponse(\n            \"PROD-001\",\n            request.getName(),\n            request.getPrice()\n        );\n        return ResponseEntity.status(HttpStatus.CREATED).body(response);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Key rule: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BindingResult"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "must"
      }), " immediately follow the validated parameter in the method signature:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// CORRECT\npublic ResponseEntity<?> create(\n        @Valid @RequestBody ProductRequest request,\n        BindingResult bindingResult) { ... }\n\n// WRONG → BindingResult is not immediately after the validated parameter\npublic ResponseEntity<?> create(\n        @Valid @RequestBody ProductRequest request,\n        @RequestParam String tenant,\n        BindingResult bindingResult) { ... }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "193-errors-interface",
      children: "1.9.3 Errors Interface"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Errors"
      }), " is the parent interface of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BindingResult"
      }), ". It's useful when you only need to check for errors or add custom errors:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.validation.Errors;\nimport org.springframework.validation.FieldError;\n\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserRegistrationController {\n\n    @PostMapping(\"/register\")\n    public ResponseEntity<?> registerUser(\n            @Valid @RequestBody UserRegistrationRequest request,\n            Errors errors) {\n\n        if (errors.hasErrors()) {\n            // Build response from errors\n            Map<String, String> fieldErrors = new HashMap<>();\n            errors.getFieldErrors().forEach(fe ->\n                fieldErrors.put(fe.getField(), fe.getDefaultMessage())\n            );\n            return ResponseEntity.badRequest().body(fieldErrors);\n        }\n\n        return ResponseEntity.ok(\"User registered\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "194-programmatic-error-rejection",
      children: "1.9.4 Programmatic Error Rejection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can also add errors programmatically to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BindingResult"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Errors"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.validation.BindingResult;\nimport org.springframework.validation.FieldError;\n\n@Service\npublic class UserService {\n\n    public void registerUser(UserRegistrationRequest request, Errors errors) {\n        // Validate email uniqueness\n        if (emailExists(request.getEmail())) {\n            errors.rejectValue(\n                \"email\",\n                \"error.email.duplicate\",\n                \"An account with this email already exists\"\n            );\n        }\n\n        // Validate that the username is not reserved\n        if (isReservedUsername(request.getUsername())) {\n            errors.rejectValue(\n                \"username\",\n                \"error.username.reserved\",\n                \"This username is reserved and cannot be used\"\n            );\n        }\n\n        // Object-level error (not field-specific)\n        if (request.getPassword() != null && request.getPassword().contains(request.getUsername())) {\n            errors.reject(\n                \"error.password.containsUsername\",\n                \"Password should not contain the username\"\n            );\n        }\n    }\n\n    private boolean emailExists(String email) {\n        return false; // Simulated\n    }\n\n    private boolean isReservedUsername(String username) {\n        return List.of(\"admin\", \"root\", \"system\").contains(username.toLowerCase());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/users\")\npublic class ServiceValidationController {\n\n    private final UserService userService;\n\n    public ServiceValidationController(UserService userService) {\n        this.userService = userService;\n    }\n\n    @PostMapping(\"/with-service-validation\")\n    public ResponseEntity<?> registerWithServiceValidation(\n            @Valid @RequestBody UserRegistrationRequest request,\n            BindingResult bindingResult) {\n\n        // Run service-level validation\n        userService.registerUser(request, bindingResult);\n\n        if (bindingResult.hasErrors()) {\n            Map<String, String> errors = new HashMap<>();\n            bindingResult.getFieldErrors().forEach(fe ->\n                errors.put(fe.getField(), fe.getDefaultMessage())\n            );\n            return ResponseEntity.badRequest().body(errors);\n        }\n\n        return ResponseEntity.ok(\"User registered\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "110-message-interpolation",
      children: "1.10 Message Interpolation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bean Validation supports message interpolation → replacing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{parameters}"
      }), " in constraint messages with actual values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1101-default-interpolation",
      children: "1.10.1 Default Interpolation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By default, Hibernate Validator resolves message parameters in this order:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ValidationMessages.properties"
        }), " in the classpath root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ConstraintValidator"
        }), "'s ", (0,jsx_runtime.jsx)(_components.code, {
          children: "message()"
        }), " attribute"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use built-in default messages from Hibernate Validator"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1102-validationmessagesproperties",
      children: "1.10.2 ValidationMessages.properties"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/main/resources/ValidationMessages.properties"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# Field-level messages\njakarta.validation.constraints.NotNull.message=Field must not be null\njakarta.validation.constraints.NotBlank.message=Field must not be blank\njakarta.validation.constraints.NotEmpty.message=Field must not be empty\njakarta.validation.constraints.Size.message=Size must be between {min} and {max}\njakarta.validation.constraints.Min.message=Value must be at least {value}\njakarta.validation.constraints.Max.message=Value must be at most {value}\njakarta.validation.constraints.Email.message=Must be a valid email address\njakarta.validation.constraints.Pattern.message=Must match pattern: {regexp}\njakarta.validation.constraints.Positive.message=Value must be positive\njakarta.validation.constraints.Negative.message=Value must be negative\njakarta.validation.constraints.Past.message=Date must be in the past\njakarta.validation.constraints.Future.message=Date must be in the future\njakarta.validation.constraints.Digits.message=Numeric value out of bounds (<{integer} digits>.<{fraction} digits>)\n\n# Custom constraint messages\ncom.example.validation.StrongPassword.message=Password must be at least {minLength} characters with uppercase, lowercase, digit, and special character\ncom.example.validation.ValidDateRange.message={startDateField} must be before {endDateField}\ncom.example.validation.FieldsMatch.message={field} and {matchingField} must match\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Locale-specific versions: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ValidationMessages_de.properties"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ValidationMessages_fr.properties"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# ValidationMessages_de.properties\njakarta.validation.constraints.NotBlank.message=Darf nicht leer sein\njakarta.validation.constraints.Size.message=Groesse muss zwischen {min} und {max} liegen\njakarta.validation.constraints.Email.message=Muss eine gultige E-Mail-Adresse sein\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# ValidationMessages_fr.properties\njakarta.validation.constraints.NotBlank.message=Ne doit pas etre vide\njakarta.validation.constraints.Size.message=La taille doit etre comprise entre {min} et {max}\njakarta.validation.constraints.Email.message=Doit etre une adresse email valide\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1103-message-interpolation-in-annotations",
      children: "1.10.3 Message Interpolation in Annotations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class UserMessageDemo {\n\n    @NotNull(message = \"{jakarta.validation.constraints.NotNull.message}\")\n    @NotBlank(message = \"{jakarta.validation.constraints.NotBlank.message}\")\n    @Size(\n        min = 3,\n        max = 50,\n        message = \"{jakarta.validation.constraints.Size.message}\"\n    )\n    private String username;\n\n    @Email(\n        message = \"{jakarta.validation.constraints.Email.message}\"\n    )\n    private String email;\n\n    @StrongPassword(\n        message = \"{com.example.validation.StrongPassword.message}\"\n    )\n    private String password;\n\n    // getters/setters\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1104-custom-messageinterpolator",
      children: "1.10.4 Custom MessageInterpolator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For advanced scenarios, implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MessageInterpolator"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.MessageInterpolator;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.context.i18n.LocaleContextHolder;\nimport org.springframework.stereotype.Component;\n\nimport java.util.Locale;\n\n@Component\npublic class CustomMessageInterpolator implements MessageInterpolator {\n\n    private static final Logger log = LoggerFactory.getLogger(CustomMessageInterpolator.class);\n    private final MessageInterpolator defaultInterpolator;\n\n    public CustomMessageInterpolator(MessageInterpolator defaultInterpolator) {\n        this.defaultInterpolator = defaultInterpolator;\n    }\n\n    @Override\n    public String interpolate(String messageTemplate, Context context) {\n        Locale locale = LocaleContextHolder.getLocale();\n        return interpolate(messageTemplate, context, locale);\n    }\n\n    @Override\n    public String interpolate(String messageTemplate, Context context, Locale locale) {\n        // Step 1: Try the Spring MessageSource first\n        // Step 2: Fall back to default interpolation\n\n        if (messageTemplate != null && messageTemplate.startsWith(\"{\") && messageTemplate.endsWith(\"}\")) {\n            String key = messageTemplate.substring(1, messageTemplate.length() - 1);\n            // In a real app, inject MessageSource and try:\n            // String springMessage = messageSource.getMessage(key, null, null, locale);\n            // if (springMessage != null) return springMessage;\n        }\n\n        String interpolated = defaultInterpolator.interpolate(messageTemplate, context, locale);\n\n        log.debug(\"Interpolated '{}' → '{}' for locale {}\", messageTemplate, interpolated, locale);\n\n        return interpolated;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Register the custom interpolator in configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.MessageInterpolator;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;\n\n@Configuration\npublic class ValidationConfig {\n\n    @Bean\n    public LocalValidatorFactoryBean validator(MessageInterpolator interpolator) {\n        LocalValidatorFactoryBean bean = new LocalValidatorFactoryBean();\n        bean.setMessageInterpolator(interpolator);\n        return bean;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1105-el-interpolation-in-messages",
      children: "1.10.5 EL Interpolation in Messages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hibernate Validator supports Unified EL expressions in messages. This is disabled by default in some environments for security. When enabled:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# In the constraint annotation message attribute:\nmessage=\"Value is too ${validatedValue < 0 ? 'low' : 'high'}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "${validatedValue}"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "${formatter.format(...)}"
      }), ", ternary operators, string operations, and math. This is powerful but be careful with user input in messages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-spring-validation",
      children: "1.11 Spring Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring provides its own ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Validator"
      }), " interface alongside Bean Validation. It's useful when you need Spring-injected dependencies (like services, repositories) in validation logic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1111-springs-validator-interface",
      children: "1.11.1 Spring's Validator Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.validation.Errors;\nimport org.springframework.validation.ValidationUtils;\nimport org.springframework.validation.Validator;\n\npublic class ProductRequestValidator implements Validator {\n\n    @Override\n    public boolean supports(Class<?> clazz) {\n        return ProductRequest.class.isAssignableFrom(clazz);\n    }\n\n    @Override\n    public void validate(Object target, Errors errors) {\n        ProductRequest request = (ProductRequest) target;\n\n        // Reject if empty\n        ValidationUtils.rejectIfEmptyOrWhitespace(errors, \"name\", \"field.required\", \"Name is required\");\n        ValidationUtils.rejectIfEmptyOrWhitespace(errors, \"sku\", \"field.required\", \"SKU is required\");\n\n        // Custom logic for price\n        if (request.getPrice() != null && request.getPrice().compareTo(BigDecimal.ZERO) <= 0) {\n            errors.rejectValue(\"price\", \"field.positive\", \"Price must be positive\");\n        }\n\n        // SKU format validation\n        if (request.getSku() != null && !request.getSku().matches(\"^[A-Z]{2}\\\\d{10}$\")) {\n            errors.rejectValue(\"sku\", \"field.format\", \"SKU must be 2 uppercase letters followed by 10 digits\");\n        }\n\n        // Cross-field validation\n        if (request.getStockQuantity() > 0 && request.getPrice() == null) {\n            errors.reject(\"stock.without.price\",\n                \"Stock quantity cannot be set without a price\");\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1112-combining-bean-validation-with-spring-validation",
      children: "1.11.2 Combining Bean Validation with Spring Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can run both Bean Validation constraints and a Spring ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Validator"
      }), " on the same object:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.validation.Validator;\nimport org.springframework.web.bind.WebDataBinder;\nimport org.springframework.web.bind.annotation.InitBinder;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@RequestMapping(\"/api/combined\")\npublic class CombinedValidationController {\n\n    private final Validator productRequestValidator;\n\n    public CombinedValidationController(Validator productRequestValidator) {\n        this.productRequestValidator = productRequestValidator;\n    }\n\n    @InitBinder\n    public void initBinder(WebDataBinder binder) {\n        // Bean Validation runs first (from @Valid), then custom validator\n        binder.addValidators(productRequestValidator);\n    }\n\n    @PostMapping\n    public ResponseEntity<?> createProduct(\n            @Valid @RequestBody ProductRequest request,\n            BindingResult bindingResult) {\n\n        if (bindingResult.hasErrors()) {\n            Map<String, String> errors = new HashMap<>();\n            bindingResult.getFieldErrors().forEach(fe ->\n                errors.put(fe.getField(), fe.getDefaultMessage())\n            );\n            return ResponseEntity.badRequest().body(errors);\n        }\n\n        return ResponseEntity.ok(\"Product created\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1113-spring-validation-utils",
      children: "1.11.3 Spring Validation Utils"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring provides helper methods in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ValidationUtils"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.validation.ValidationUtils;\nimport org.springframework.validation.Errors;\n\n// Reject if field is null or whitespace\nValidationUtils.rejectIfEmptyOrWhitespace(errors, \"fieldName\", \"error.code\", \"Default message\");\n\n// Reject if field is null\nValidationUtils.rejectIfEmpty(errors, \"fieldName\", \"error.code\", \"Default message\");\n\n// Invoke a validator on a nested object\nValidationUtils.invokeValidator(nestedValidator, nestedTarget, errors);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-dto-patterns",
      children: "1.12 DTO Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1121-request-dto-vs-response-dto-vs-entity",
      children: "1.12.1 Request DTO vs Response DTO vs Entity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Annotations"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ProductRequest"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@NotNull"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@NotBlank"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Size"
            }), ", etc."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inbound data validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ProductResponse"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@JsonProperty"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@JsonInclude"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outbound data shaping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Product"
            }), " (entity)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@Entity"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Column"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Id"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Table"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ProductDTO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (simple carrier)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal transfer between layers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Never"
      }), " use entities as request or response objects:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// WRONG → Using entity directly as request body\n@PostMapping(\"/products\")\npublic ResponseEntity<Product> create(@Valid @RequestBody Product product) {\n    // Security: exposes all fields, mass assignment risk\n    // Coupling: changes to entity break API\n    // Validation: entity constraints may be persistence-specific\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Always"
      }), " use separate DTOs:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// CORRECT → Separate request DTO\n@PostMapping(\"/products\")\npublic ResponseEntity<ProductResponse> create(@Valid @RequestBody ProductCreateRequest request) {\n    Product product = productMapper.toEntity(request);\n    Product saved = productService.save(product);\n    return ResponseEntity.status(HttpStatus.CREATED).body(productMapper.toResponse(saved));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1122-complete-dto-example",
      children: "1.12.2 Complete DTO Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ProductCreateRequest.java → Input validation\nimport jakarta.validation.constraints.*;\n\npublic class ProductCreateRequest {\n\n    @NotBlank(message = \"Product name is required\")\n    @Size(min = 3, max = 100)\n    private String name;\n\n    @NotNull\n    @Positive\n    @Digits(integer = 8, fraction = 2)\n    private BigDecimal price;\n\n    @NotNull\n    @Min(0)\n    private Integer stockQuantity;\n\n    @NotBlank\n    private String categoryCode;\n\n    public ProductCreateRequest() {}\n\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n\n    public BigDecimal getPrice() { return price; }\n    public void setPrice(BigDecimal price) { this.price = price; }\n\n    public Integer getStockQuantity() { return stockQuantity; }\n    public void setStockQuantity(Integer stockQuantity) { this.stockQuantity = stockQuantity; }\n\n    public String getCategoryCode() { return categoryCode; }\n    public void setCategoryCode(String categoryCode) { this.categoryCode = categoryCode; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ProductResponse.java → Output shaping\nimport com.fasterxml.jackson.annotation.JsonInclude;\nimport com.fasterxml.jackson.annotation.JsonProperty;\nimport java.math.BigDecimal;\nimport java.time.LocalDateTime;\n\n@JsonInclude(JsonInclude.Include.NON_NULL)\npublic class ProductResponse {\n\n    @JsonProperty(\"id\")\n    private Long id;\n\n    @JsonProperty(\"name\")\n    private String name;\n\n    @JsonProperty(\"price\")\n    private BigDecimal price;\n\n    @JsonProperty(\"inStock\")\n    private boolean inStock;\n\n    @JsonProperty(\"createdAt\")\n    private LocalDateTime createdAt;\n\n    @JsonProperty(\"category\")\n    private CategoryResponse category;\n\n    private String internalNotes; // Excluded from JSON → no getter\n\n    public ProductResponse() {}\n\n    public ProductResponse(Long id, String name, BigDecimal price,\n                           boolean inStock, LocalDateTime createdAt) {\n        this.id = id;\n        this.name = name;\n        this.price = price;\n        this.inStock = inStock;\n        this.createdAt = createdAt;\n    }\n\n    public Long getId() { return id; }\n    public void setId(Long id) { this.id = id; }\n\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n\n    public BigDecimal getPrice() { return price; }\n    public void setPrice(BigDecimal price) { this.price = price; }\n\n    public boolean isInStock() { return inStock; }\n    public void setInStock(boolean inStock) { this.inStock = inStock; }\n\n    public LocalDateTime getCreatedAt() { return createdAt; }\n    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }\n\n    public CategoryResponse getCategory() { return category; }\n    public void setCategory(CategoryResponse category) { this.category = category; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// CategoryResponse.java → Nested response DTO\npublic class CategoryResponse {\n\n    private String code;\n    private String name;\n\n    public CategoryResponse() {}\n\n    public CategoryResponse(String code, String name) {\n        this.code = code;\n        this.name = name;\n    }\n\n    public String getCode() { return code; }\n    public void setCode(String code) { this.code = code; }\n\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1123-mapstruct-for-dto-conversion",
      children: "1.12.3 MapStruct for DTO Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MapStruct generates mapper implementations at compile time → no runtime reflection, no boilerplate:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- pom.xml -->\n<properties>\n    <org.mapstruct.version>1.6.3</org.mapstruct.version>\n</properties>\n\n<dependencies>\n    <dependency>\n        <groupId>org.mapstruct</groupId>\n        <artifactId>mapstruct</artifactId>\n        <version>${org.mapstruct.version}</version>\n    </dependency>\n</dependencies>\n\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <configuration>\n                <annotationProcessorPaths>\n                    <path>\n                        <groupId>org.mapstruct</groupId>\n                        <artifactId>mapstruct-processor</artifactId>\n                        <version>${org.mapstruct.version}</version>\n                    </path>\n                </annotationProcessorPaths>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.mapstruct.Mapper;\nimport org.mapstruct.Mapping;\nimport org.mapstruct.Named;\n\n@Mapper(componentModel = \"spring\")\npublic interface ProductMapper {\n\n    @Mapping(target = \"id\", ignore = true)\n    @Mapping(target = \"createdAt\", expression = \"java(java.time.LocalDateTime.now())\")\n    @Mapping(target = \"category\", ignore = true)\n    Product toEntity(ProductCreateRequest request);\n\n    @Mapping(target = \"inStock\", source = \"stockQuantity\", qualifiedByName = \"stockToInStock\")\n    @Mapping(target = \"category\", source = \"category\")\n    ProductResponse toResponse(Product product);\n\n    @Named(\"stockToInStock\")\n    default boolean mapStockToInStock(int stockQuantity) {\n        return stockQuantity > 0;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.persistence.*;\nimport java.math.BigDecimal;\nimport java.time.LocalDateTime;\n\n@Entity\n@Table(name = \"products\")\npublic class Product {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(nullable = false, length = 100)\n    private String name;\n\n    @Column(nullable = false, precision = 10, scale = 2)\n    private BigDecimal price;\n\n    @Column(nullable = false)\n    private int stockQuantity;\n\n    @Column(nullable = false, updatable = false)\n    private LocalDateTime createdAt;\n\n    @ManyToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"category_id\")\n    private Category category;\n\n    public Product() {}\n\n    public Long getId() { return id; }\n    public void setId(Long id) { this.id = id; }\n\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n\n    public BigDecimal getPrice() { return price; }\n    public void setPrice(BigDecimal price) { this.price = price; }\n\n    public int getStockQuantity() { return stockQuantity; }\n    public void setStockQuantity(int stockQuantity) { this.stockQuantity = stockQuantity; }\n\n    public LocalDateTime getCreatedAt() { return createdAt; }\n    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }\n\n    public Category getCategory() { return category; }\n    public void setCategory(Category category) { this.category = category; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Category.java\nimport jakarta.persistence.*;\nimport java.util.Set;\n\n@Entity\n@Table(name = \"categories\")\npublic class Category {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(nullable = false, unique = true, length = 20)\n    private String code;\n\n    @Column(nullable = false, length = 100)\n    private String name;\n\n    @OneToMany(mappedBy = \"category\")\n    private Set<Product> products;\n\n    public Category() {}\n\n    public Long getId() { return id; }\n    public void setId(Long id) { this.id = id; }\n\n    public String getCode() { return code; }\n    public void setCode(String code) { this.code = code; }\n\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n\n    public Set<Product> getProducts() { return products; }\n    public void setProducts(Set<Product> products) { this.products = products; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using the mapper in a service:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class ProductService {\n\n    private final ProductRepository repository;\n    private final ProductMapper mapper;\n    private final CategoryRepository categoryRepository;\n\n    public ProductService(ProductRepository repository, ProductMapper mapper,\n                          CategoryRepository categoryRepository) {\n        this.repository = repository;\n        this.mapper = mapper;\n        this.categoryRepository = categoryRepository;\n    }\n\n    @Transactional\n    public ProductResponse createProduct(ProductCreateRequest request) {\n        Product product = mapper.toEntity(request);\n\n        Category category = categoryRepository.findByCode(request.getCategoryCode())\n            .orElseThrow(() -> new IllegalArgumentException(\"Invalid category code\"));\n        product.setCategory(category);\n\n        Product saved = repository.save(product);\n\n        return mapper.toResponse(saved);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-validated-at-class-level-for-method-validation",
      children: "1.13 @Validated at Class Level for Method Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring supports method-level validation on any Spring bean using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Validated"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.stereotype.Service;\nimport org.springframework.validation.annotation.Validated;\nimport jakarta.validation.constraints.NotBlank;\nimport jakarta.validation.constraints.Positive;\n\n@Validated\n@Service\npublic class PaymentService {\n\n    public void processPayment(\n            @NotBlank String accountId,\n            @Positive double amount,\n            @NotBlank String currency) {\n        // Parameters are validated before method body executes\n        // ConstraintViolationException thrown on failure\n    }\n\n    @Validated(CreateGroup.class)\n    public void createPaymentMethod(\n            @NotBlank String methodType,\n            @Valid PaymentMethodDetails details) {\n        // Uses CreateGroup for validation\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-complete-working-example",
      children: "1.14 Complete Working Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Putting it all together:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Application.java\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// UserCreateRequest.java\nimport jakarta.validation.constraints.*;\nimport java.time.LocalDate;\n\npublic class UserCreateRequest {\n\n    @NotBlank\n    @Size(min = 3, max = 50)\n    private String username;\n\n    @NotBlank\n    @Email\n    private String email;\n\n    @NotBlank\n    @StrongPassword\n    private String password;\n\n    @NotBlank\n    private String confirmPassword;\n\n    @Min(18)\n    @Max(150)\n    private int age;\n\n    @Past\n    private LocalDate birthDate;\n\n    @AssertTrue\n    private boolean termsAccepted;\n\n    public UserCreateRequest() {}\n\n    public String getUsername() { return username; }\n    public void setUsername(String username) { this.username = username; }\n\n    public String getEmail() { return email; }\n    public void setEmail(String email) { this.email = email; }\n\n    public String getPassword() { return password; }\n    public void setPassword(String password) { this.password = password; }\n\n    public String getConfirmPassword() { return confirmPassword; }\n    public void setConfirmPassword(String confirmPassword) { this.confirmPassword = confirmPassword; }\n\n    public int getAge() { return age; }\n    public void setAge(int age) { this.age = age; }\n\n    public LocalDate getBirthDate() { return birthDate; }\n    public void setBirthDate(LocalDate birthDate) { this.birthDate = birthDate; }\n\n    public boolean isTermsAccepted() { return termsAccepted; }\n    public void setTermsAccepted(boolean termsAccepted) { this.termsAccepted = termsAccepted; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// UserResponse.java\npublic class UserResponse {\n\n    private Long id;\n    private String username;\n    private String email;\n    private LocalDate birthDate;\n\n    public UserResponse() {}\n\n    public UserResponse(Long id, String username, String email, LocalDate birthDate) {\n        this.id = id;\n        this.username = username;\n        this.email = email;\n        this.birthDate = birthDate;\n    }\n\n    public Long getId() { return id; }\n    public void setId(Long id) { this.id = id; }\n\n    public String getUsername() { return username; }\n    public void setUsername(String username) { this.username = username; }\n\n    public String getEmail() { return email; }\n    public void setEmail(String email) { this.email = email; }\n\n    public LocalDate getBirthDate() { return birthDate; }\n    public void setBirthDate(LocalDate birthDate) { this.birthDate = birthDate; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// UserService.java\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class UserService {\n\n    public UserResponse createUser(UserCreateRequest request) {\n        // Simulated creation\n        return new UserResponse(\n            1L,\n            request.getUsername(),\n            request.getEmail(),\n            request.getBirthDate()\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// UserController.java\nimport jakarta.validation.Valid;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n\n    private final UserService userService;\n\n    public UserController(UserService userService) {\n        this.userService = userService;\n    }\n\n    @PostMapping\n    public ResponseEntity<UserResponse> createUser(\n            @Valid @RequestBody UserCreateRequest request) {\n        UserResponse response = userService.createUser(request);\n        return ResponseEntity.status(HttpStatus.CREATED).body(response);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-testing-validation",
      children: "1.15 Testing Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.validation.ConstraintViolation;\nimport jakarta.validation.Validator;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;\n\nimport java.util.Set;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass ProductRequestValidationTest {\n\n    private Validator validator;\n\n    @BeforeEach\n    void setUp() {\n        LocalValidatorFactoryBean factory = new LocalValidatorFactoryBean();\n        factory.afterPropertiesSet();\n        validator = factory;\n    }\n\n    @Test\n    void shouldPassWhenAllFieldsValid() {\n        ProductRequest request = new ProductRequest();\n        request.setName(\"Gaming Laptop\");\n        request.setDescription(\"High-performance gaming laptop with RTX 5090\");\n        request.setPrice(new BigDecimal(\"1999.99\"));\n        request.setStockQuantity(50);\n        request.setSupplierEmail(\"supplier@example.com\");\n        request.setSku(\"EL2024123456\");\n        request.setManufacturingDate(LocalDate.now().minusDays(30));\n        request.setExpiryDate(LocalDate.now().plusYears(3));\n        request.setTermsAccepted(true);\n        request.setDiscountPercentage(new BigDecimal(\"5.00\"));\n\n        Set<ConstraintViolation<ProductRequest>> violations = validator.validate(request);\n\n        assertTrue(violations.isEmpty());\n    }\n\n    @Test\n    void shouldFailWhenNameIsBlank() {\n        ProductRequest request = new ProductRequest();\n        request.setName(\"\");\n        request.setDescription(\"Valid description\");\n        request.setPrice(new BigDecimal(\"10.00\"));\n        request.setStockQuantity(10);\n        request.setSupplierEmail(\"test@example.com\");\n        request.setSku(\"EL2024123456\");\n        request.setManufacturingDate(LocalDate.now().minusDays(1));\n        request.setExpiryDate(LocalDate.now().plusYears(1));\n        request.setTermsAccepted(true);\n        request.setDiscountPercentage(BigDecimal.ZERO);\n\n        Set<ConstraintViolation<ProductRequest>> violations = validator.validate(request);\n\n        assertFalse(violations.isEmpty());\n        assertTrue(violations.stream()\n            .anyMatch(v -> v.getPropertyPath().toString().equals(\"name\")));\n    }\n\n    @Test\n    void shouldFailWhenPriceIsNegative() {\n        ProductRequest request = new ProductRequest();\n        request.setName(\"Test Product\");\n        request.setDescription(\"Description\");\n        request.setPrice(new BigDecimal(\"-10.00\"));\n        request.setStockQuantity(10);\n        request.setSupplierEmail(\"test@example.com\");\n        request.setSku(\"EL2024123456\");\n        request.setManufacturingDate(LocalDate.now().minusDays(1));\n        request.setExpiryDate(LocalDate.now().plusYears(1));\n        request.setTermsAccepted(true);\n        request.setDiscountPercentage(BigDecimal.ZERO);\n\n        Set<ConstraintViolation<ProductRequest>> violations = validator.validate(request);\n\n        assertFalse(violations.isEmpty());\n        assertTrue(violations.stream()\n            .anyMatch(v -> v.getPropertyPath().toString().equals(\"price\")));\n    }\n\n    @Test\n    void shouldFailWhenEmailIsInvalid() {\n        ProductRequest request = new ProductRequest();\n        request.setName(\"Test Product\");\n        request.setDescription(\"Description\");\n        request.setPrice(new BigDecimal(\"100.00\"));\n        request.setStockQuantity(10);\n        request.setSupplierEmail(\"not-an-email\");\n        request.setSku(\"EL2024123456\");\n        request.setManufacturingDate(LocalDate.now().minusDays(1));\n        request.setExpiryDate(LocalDate.now().plusYears(1));\n        request.setTermsAccepted(true);\n        request.setDiscountPercentage(BigDecimal.ZERO);\n\n        Set<ConstraintViolation<ProductRequest>> violations = validator.validate(request);\n\n        assertFalse(violations.isEmpty());\n        assertTrue(violations.stream()\n            .anyMatch(v -> v.getPropertyPath().toString().equals(\"supplierEmail\")));\n    }\n\n    @Test\n    void shouldFailWhenTermsNotAccepted() {\n        ProductRequest request = new ProductRequest();\n        request.setName(\"Test Product\");\n        request.setDescription(\"Description\");\n        request.setPrice(new BigDecimal(\"100.00\"));\n        request.setStockQuantity(10);\n        request.setSupplierEmail(\"test@example.com\");\n        request.setSku(\"EL2024123456\");\n        request.setManufacturingDate(LocalDate.now().minusDays(1));\n        request.setExpiryDate(LocalDate.now().plusYears(1));\n        request.setTermsAccepted(false);\n        request.setDiscountPercentage(BigDecimal.ZERO);\n\n        Set<ConstraintViolation<ProductRequest>> violations = validator.validate(request);\n\n        assertFalse(violations.isEmpty());\n        assertTrue(violations.stream()\n            .anyMatch(v -> v.getPropertyPath().toString().equals(\"termsAccepted\")));\n    }\n\n    @Test\n    void shouldFailWhenExpiryDateIsInThePast() {\n        ProductRequest request = new ProductRequest();\n        request.setName(\"Test Product\");\n        request.setDescription(\"Description\");\n        request.setPrice(new BigDecimal(\"100.00\"));\n        request.setStockQuantity(10);\n        request.setSupplierEmail(\"test@example.com\");\n        request.setSku(\"EL2024123456\");\n        request.setManufacturingDate(LocalDate.now().minusDays(30));\n        request.setExpiryDate(LocalDate.now().minusDays(1)); // Past date\n        request.setTermsAccepted(true);\n        request.setDiscountPercentage(BigDecimal.ZERO);\n\n        Set<ConstraintViolation<ProductRequest>> violations = validator.validate(request);\n\n        assertFalse(violations.isEmpty());\n        assertTrue(violations.stream()\n            .anyMatch(v -> v.getPropertyPath().toString().equals(\"expiryDate\")));\n    }\n\n    @Test\n    void shouldFailWithMultipleViolations() {\n        ProductRequest request = new ProductRequest();\n        request.setName(\"\");\n        request.setDescription(\"Short\");\n        request.setPrice(new BigDecimal(\"-1.00\"));\n        request.setStockQuantity(-5);\n        request.setSupplierEmail(\"invalid\");\n        request.setSku(\"wrong\");\n        request.setManufacturingDate(LocalDate.now().plusDays(1));\n        request.setExpiryDate(LocalDate.now().minusDays(1));\n        request.setTermsAccepted(false);\n        request.setDiscountPercentage(new BigDecimal(\"-1.00\"));\n\n        Set<ConstraintViolation<ProductRequest>> violations = validator.validate(request);\n\n        assertTrue(violations.size() >= 5);\n    }\n\n    @Test\n    void shouldApplyCustomPasswordValidator() {\n        UserCreateRequest request = new UserCreateRequest();\n        request.setUsername(\"testuser\");\n        request.setEmail(\"test@example.com\");\n        request.setPassword(\"weak\");\n        request.setConfirmPassword(\"weak\");\n        request.setAge(25);\n        request.setTermsAccepted(true);\n\n        Set<ConstraintViolation<UserCreateRequest>> violations = validator.validate(request);\n\n        assertTrue(violations.stream()\n            .anyMatch(v -> v.getPropertyPath().toString().equals(\"password\")));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;\nimport org.springframework.boot.test.mock.bean.MockBean;\nimport org.springframework.http.MediaType;\nimport org.springframework.test.web.servlet.MockMvc;\n\nimport static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;\n\n@WebMvcTest(UserController.class)\nclass UserControllerValidationTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @MockBean\n    private UserService userService;\n\n    @Test\n    void shouldReturn400WhenRequestBodyIsInvalid() throws Exception {\n        String invalidJson = \"\"\"\n            {\n                \"username\": \"ab\",\n                \"email\": \"invalid\",\n                \"password\": \"weak\",\n                \"confirmPassword\": \"weak\",\n                \"age\": 15,\n                \"birthDate\": \"2099-01-01\",\n                \"termsAccepted\": false\n            }\n            \"\"\";\n\n        mockMvc.perform(post(\"/api/users\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(invalidJson))\n            .andExpect(status().isBadRequest())\n            .andExpect(jsonPath(\"$.code\").value(\"VALIDATION_FAILED\"))\n            .andExpect(jsonPath(\"$.fieldErrors\").isArray())\n            .andExpect(jsonPath(\"$.fieldErrors.length()\").value(5));\n    }\n\n    @Test\n    void shouldReturn201WhenRequestBodyIsValid() throws Exception {\n        String validJson = \"\"\"\n            {\n                \"username\": \"john_doe\",\n                \"email\": \"john@example.com\",\n                \"password\": \"StrongP@ss1\",\n                \"confirmPassword\": \"StrongP@ss1\",\n                \"age\": 30,\n                \"birthDate\": \"1995-06-15\",\n                \"termsAccepted\": true\n            }\n            \"\"\";\n\n        mockMvc.perform(post(\"/api/users\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(validJson))\n            .andExpect(status().isCreated());\n    }\n}\n"
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
            children: "Bean Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jakarta EE validation annotations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative, annotation-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Field-level constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validation Groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial validation for scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group interfaces with @Validated(groups=...)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update vs. Create validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-defined validation logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Constraint + ConstraintValidator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business-specific rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Transfer Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate API model from entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid exposing entity to API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MapStruct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time code generator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No reflection, faster than manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity-to-DTO conversion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constraint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@NotNull"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value cannot be null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@NotEmpty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String/collection not null or empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@NotBlank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String not null and has text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"   \""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size within bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min=1, max=50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Min/@Max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min=0, max=100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regex matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "regexp=\"\\d{3}-\\d{2}-\\d{4}\""
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
            children: "Validation Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "REST API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Form Submission"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Batch Processing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Internal Service"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bean Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DTO Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request DTOs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Form DTOs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Job parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which annotation ensures a string has at least one non-whitespace character?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) @NotEmpty"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) @NotNull"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) @NotBlank"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) @Size(min=1)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) @NotBlank.** @NotBlank requires the string to be non-null and contain at least one non-whitespace character.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How do you validate different constraints for create vs. update operations?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Separate methods"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Validation groups with group interfaces"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Conditional validation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Profile-based validation"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Validation groups with group interfaces.** Define marker interfaces (e.g., Create.class, Update.class) and specify groups on both constraints and @Validated.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary advantage of MapStruct over manual DTO mapping?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Runtime performance via reflection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Compile-time code generation with type safety"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Less code to write but slower"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Automatic JSON serialization"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Compile-time code generation with type safety.** MapStruct generates mapper implementations at compile time, avoiding reflection overhead and catching errors early.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered the complete validation and error handling stack in Spring Boot:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bean Validation (Jakarta Validation)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Core constraints: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotNull"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotEmpty"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotBlank"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Size"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Min"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Max"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Email"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Pattern"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Past"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Future"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Positive"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Negative"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Digits"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@AssertTrue"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Valid"
        }), " for triggering validation on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RequestBody"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ModelAttribute"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RequestParam"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nested validation with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Valid"
        }), " on object fields and list elements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validation groups with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Validated(groups = ...)"
        }), " for context-dependent rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@GroupSequence"
        }), " for ordered validation with fail-fast"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@ConvertGroup"
        }), " for group conversion on nested validation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom Validators"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ConstraintValidator<A, T>"
        }), " interface for field-level custom constraints"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Class-level (cross-field) validation with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Target(ElementType.TYPE)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Custom annotations with configurable attributes via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Constraint(validatedBy = ...)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Handling"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@ControllerAdvice"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RestControllerAdvice"
        }), " for global exception handling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@ExceptionHandler"
        }), " for targeted exception-to-response mapping"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MethodArgumentNotValidException"
        }), " handling with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FieldError"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ObjectError"
        }), " extraction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ConstraintViolationException"
        }), " for parameter-level validation errors"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structured error response DTOs with field-level details"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ResponseEntityExceptionHandler"
        }), " subclass for overriding Spring's default responses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Order"
        }), " for handler precedence when multiple advice classes exist"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Binding"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@ModelAttribute"
        }), " for query parameter / form data binding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BindingResult"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Errors"
        }), " for capturing errors without exceptions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@InitBinder"
        }), " for custom property editors, allowed/disallowed fields, and additional validators"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "PropertyEditorSupport"
        }), " for custom type conversion"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Message Interpolation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ValidationMessages.properties"
        }), " for locale-specific error messages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{parameter}"
        }), " placeholders in constraint messages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MessageInterpolator"
        }), " implementation"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EL expressions in messages for dynamic content"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Validation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Validator"
        }), " interface with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "supports()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ValidationUtils"
        }), " helpers for common checks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Combining Bean Validation with Spring ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Validator"
        }), " via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@InitBinder.addValidators()"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DTO Patterns"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Request DTOs for input (with validation annotations)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Response DTOs for output (with JSON shaping)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MapStruct for compile-time DTO-to-entity conversion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never exposing entities directly as request or response objects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-basic-bean-validation",
      children: "Exercise 1: Basic Bean Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CustomerRegistrationRequest"
      }), " DTO with the following fields and constraints:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "firstName"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotBlank"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Size(min=2, max=50)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "lastName"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotBlank"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Size(min=2, max=50)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "email"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotNull"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Email"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "phone"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Pattern"
        }), " for US phone format ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(\\d{3}-\\d{3}-\\d{4})"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "age"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Min(18)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Max(120)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "referralCode"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Pattern"
        }), " for alphanumeric 6-10 characters (nullable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "agreeToTerms"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@AssertTrue"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a controller endpoint ", (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/customers"
      }), " that uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Valid @RequestBody"
      }), " and returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "201 Created"
      }), " with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CustomerResponse"
      }), ". Include a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RestControllerAdvice"
      }), " that catches ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MethodArgumentNotValidException"
      }), " and returns field-level error details."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-nested-object-validation",
      children: "Exercise 2: Nested Object Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InvoiceRequest"
      }), " DTO containing:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "invoiceNumber"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotBlank"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "issuedDate"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotNull"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Past"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dueDate"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotNull"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Future"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "customer"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotNull"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Valid"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "CustomerInfo"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "email"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "address"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "lineItems"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotEmpty"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "List<@Valid LineItemRequest>"
        }), " (each with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "description"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "quantity: @Min(1)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unitPrice: @Positive"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement the controller and test with both valid and invalid JSON payloads using MockMvc."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-validation-groups",
      children: "Exercise 3: Validation Groups"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProductUpdateRequest"
      }), " with these groups:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CreateGroup"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotBlank"
        }), "), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "price"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotNull"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Positive"
        }), "), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "category"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotBlank"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "UpdateGroup"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotNull"
        }), "), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Size(min=1, max=100)"
        }), "), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "price"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Positive"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "DiscountGroup"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "discountPercent"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Min(0)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Max(100)"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create three endpoints that use different group combinations and verify that the correct constraints are applied in each case."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-custom-constraint--isbn",
      children: "Exercise 4: Custom Constraint → ISBN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Isbn"
      }), " constraint that validates ISBN-10 and ISBN-13 formats:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISBN-10: 10 digits, last digit can be 'X', with checksum validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISBN-13: 13 digits, starting with 978 or 979, with checksum validation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Accept either format by default, or use an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "type()"
        }), " attribute to restrict"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IsbnValidator"
      }), " with the proper checksum algorithm. Add a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Pattern"
      }), " fallback for format checking before computing the checksum."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-cross-field-validator",
      children: "Exercise 5: Cross-Field Validator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ValidReservation"
      }), " class-level constraint for a hotel reservation:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "checkInDate"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotNull"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Future"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "checkOutDate"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotNull"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Future"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation rule: checkOutDate must be after checkInDate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation rule: the stay cannot exceed 30 nights"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation rule: checkInDate cannot be more than 1 year in the future"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement the validator and write tests for all three rules."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6-global-exception-handler",
      children: "Exercise 6: Global Exception Handler"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a comprehensive ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RestControllerAdvice"
      }), " called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApiExceptionHandler"
      }), " that handles:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MethodArgumentNotValidException"
        }), " → structured field errors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ConstraintViolationException"
        }), " → parameter violations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "HttpMessageNotReadableException"
        }), " → malformed JSON body"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MissingServletRequestParameterException"
        }), " → missing required params"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MethodArgumentTypeMismatchException"
        }), " → type conversion failures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "AccessDeniedException"
        }), " → 403 with message"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "HttpRequestMethodNotSupportedException"
        }), " → 405 with supported methods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "NoHandlerFoundException"
        }), " → 404 with requested path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Any unhandled ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exception"
        }), " → 500 with correlation ID"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Format all responses as a consistent ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApiError"
      }), " DTO with: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "status"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "code"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "message"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "timestamp"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "path"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fieldErrors"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "correlationId"
      }), ". Generate a unique correlation ID per request using a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component"
      }), " request-scoped bean."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7-initbinder-in-practice",
      children: "Exercise 7: @InitBinder in Practice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TaskController"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@InitBinder"
      }), " that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Registers a custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PropertyEditorSupport"
        }), " that converts comma-separated strings to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "List<String>"
        }), " for tags"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "disallowedFields"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "createdBy"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "createdAt"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Adds a Spring ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Validator"
        }), " that checks ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dueDate"
        }), " is not on a weekend"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trims all string fields automatically"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test each behavior with curl or MockMvc."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8-message-interpolation",
      children: "Exercise 8: Message Interpolation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ValidationMessages.properties"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ValidationMessages_de.properties"
      }), " with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All standard Jakarta Validation messages customized for your application"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Parameterized messages using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{min}"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{max}"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{value}"
        }), " placeholders"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@StrongPassword"
        }), " message with dynamic ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{minLength}"
        }), " parameter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ValidDateRange"
        }), " message referencing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{startDateField}"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{endDateField}"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a test that verifies the English and German messages are returned based on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Accept-Language"
      }), " header."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9-spring-validator",
      children: "Exercise 9: Spring Validator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a Spring ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Validator"
      }), " for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EmployeeRequest"
      }), " that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rejects if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "salary < 0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rejects if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "department"
        }), " is not one of the known departments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rejects if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "managerId"
        }), " references a non-existent manager"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rejects if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "startDate"
        }), " is more than 90 days in the past"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Combines with Bean Validation constraints via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@InitBinder.addValidators()"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inject a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EmployeeRepository"
      }), " into the validator for existence checks. Write a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@WebMvcTest"
      }), " that validates both the Bean Validation and Spring Validator rules fire correctly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10-mapstruct-dto-mapping",
      children: "Exercise 10: MapStruct DTO Mapping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create the full DTO layer for a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Book"
      }), " entity:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Book"
        }), " entity: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "title"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isbn"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "author"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "publishedDate"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "price"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "genre"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "createdAt"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "updatedAt"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BookCreateRequest"
        }), " with validation: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotBlank"
        }), " title, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Isbn"
        }), " isbn, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@NotBlank"
        }), " author, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Past"
        }), " publishedDate, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Positive"
        }), " price"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BookResponse"
        }), " with only: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "title"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "author"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isbn"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "price"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "genre"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BookSummaryResponse"
        }), " with: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "title"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "author"
        }), " (a lightweight list DTO)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BookMapper"
        }), " interface using MapStruct with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "componentModel = \"spring\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Handle the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "genre"
      }), " field: the entity stores a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Genre"
      }), " enum, the request uses a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "String"
      }), ", and the mapper converts between them. Write a test that verifies the mapping works correctly for all fields."]
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