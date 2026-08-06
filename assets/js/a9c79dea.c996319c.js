"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[42042],{

/***/ 51901
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_15_rest_api_md_a9c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-15-rest-api-md-a9c.json
const site_docs_courses_java_15_rest_api_md_a9c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/15-rest-api","title":"REST API Development with Spring MVC","description":"Previous Request Validation & Error Handling","source":"@site/docs/courses/java/15-rest-api.md","sourceDirName":"courses/java","slug":"/java/15-rest-api","permalink":"/ai-engineering-journey/java/15-rest-api","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"15-rest-api","slug":"/java/15-rest-api","title":"REST API Development with Spring MVC","sidebar_label":"REST API Development with Spring MVC","sidebar_position":15},"sidebar":"coursesSidebar","previous":{"title":"Logging, Error Handling & Internationalization","permalink":"/ai-engineering-journey/java/14-logging-error-i18n"},"next":{"title":"Request Validation, Error Handling & Binding","permalink":"/ai-engineering-journey/java/16-validation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/15-rest-api.md


const frontMatter = {
	id: '15-rest-api',
	slug: '/java/15-rest-api',
	title: 'REST API Development with Spring MVC',
	sidebar_label: 'REST API Development with Spring MVC',
	sidebar_position: 15
};
const contentTitle = 'REST API Development with Spring MVC';

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
  "value": "1. REST Architectural Style",
  "id": "1-rest-architectural-style",
  "level": 2
}, {
  "value": "1.1 What is REST?",
  "id": "11-what-is-rest",
  "level": 3
}, {
  "value": "1.2 Resources and Representations",
  "id": "12-resources-and-representations",
  "level": 3
}, {
  "value": "1.3 Richardson Maturity Model",
  "id": "13-richardson-maturity-model",
  "level": 3
}, {
  "value": "2. @RestController Fundamentals",
  "id": "2-restcontroller-fundamentals",
  "level": 2
}, {
  "value": "2.1 @Controller + @ResponseBody",
  "id": "21-controller--responsebody",
  "level": 3
}, {
  "value": "2.2 @RestController → The Composed Annotation",
  "id": "22-restcontroller--the-composed-annotation",
  "level": 3
}, {
  "value": "2.3 @RestController Source (Conceptual)",
  "id": "23-restcontroller-source-conceptual",
  "level": 3
}, {
  "value": "2.4 Model Class Example",
  "id": "24-model-class-example",
  "level": 3
}, {
  "value": "2.5 Repository Stub (In-Memory)",
  "id": "25-repository-stub-in-memory",
  "level": 3
}, {
  "value": "3. @RequestMapping → The Foundation",
  "id": "3-requestmapping--the-foundation",
  "level": 2
}, {
  "value": "3.1 @RequestMapping Attributes",
  "id": "31-requestmapping-attributes",
  "level": 3
}, {
  "value": "3.2 Complete Attribute Reference",
  "id": "32-complete-attribute-reference",
  "level": 3
}, {
  "value": "3.3 params Attribute → Expressions",
  "id": "33-params-attribute--expressions",
  "level": 3
}, {
  "value": "3.4 headers Attribute → Expressions",
  "id": "34-headers-attribute--expressions",
  "level": 3
}, {
  "value": "4. Composed @RequestMapping Annotations",
  "id": "4-composed-requestmapping-annotations",
  "level": 2
}, {
  "value": "4.1 @GetMapping",
  "id": "41-getmapping",
  "level": 3
}, {
  "value": "4.2 @PostMapping",
  "id": "42-postmapping",
  "level": 3
}, {
  "value": "4.3 @PutMapping → Full Update",
  "id": "43-putmapping--full-update",
  "level": 3
}, {
  "value": "4.4 @DeleteMapping",
  "id": "44-deletemapping",
  "level": 3
}, {
  "value": "4.5 @PatchMapping → Partial Update",
  "id": "45-patchmapping--partial-update",
  "level": 3
}, {
  "value": "4.6 All Composed Annotations Summary",
  "id": "46-all-composed-annotations-summary",
  "level": 3
}, {
  "value": "5. Request Data Extraction",
  "id": "5-request-data-extraction",
  "level": 2
}, {
  "value": "5.1 @PathVariable → URI Template Variables",
  "id": "51-pathvariable--uri-template-variables",
  "level": 3
}, {
  "value": "5.2 @RequestParam → Query Parameters",
  "id": "52-requestparam--query-parameters",
  "level": 3
}, {
  "value": "5.3 @RequestHeader → HTTP Headers",
  "id": "53-requestheader--http-headers",
  "level": 3
}, {
  "value": "5.4 @RequestBody → Request Body",
  "id": "54-requestbody--request-body",
  "level": 3
}, {
  "value": "5.5 @RequestAttribute → Request Scoped Attributes",
  "id": "55-requestattribute--request-scoped-attributes",
  "level": 3
}, {
  "value": "5.6 @MatrixVariable → Matrix Parameters",
  "id": "56-matrixvariable--matrix-parameters",
  "level": 3
}, {
  "value": "5.7 Parameter Type Conversion",
  "id": "57-parameter-type-conversion",
  "level": 3
}, {
  "value": "6. Response Handling",
  "id": "6-response-handling",
  "level": 2
}, {
  "value": "6.1 @ResponseStatus",
  "id": "61-responsestatus",
  "level": 3
}, {
  "value": "6.2 ResponseEntity → Full Control",
  "id": "62-responseentity--full-control",
  "level": 3
}, {
  "value": "6.3 ResponseEntity with Headers Builder",
  "id": "63-responseentity-with-headers-builder",
  "level": 3
}, {
  "value": "6.4 HttpHeaders → Building Custom Headers",
  "id": "64-httpheaders--building-custom-headers",
  "level": 3
}, {
  "value": "6.5 ResponseStatusException",
  "id": "65-responsestatusexception",
  "level": 3
}, {
  "value": "6.6 Custom Exception + @ResponseStatus",
  "id": "66-custom-exception--responsestatus",
  "level": 3
}, {
  "value": "6.7 @ExceptionHandler → Controller-Level",
  "id": "67-exceptionhandler--controller-level",
  "level": 3
}, {
  "value": "6.8 @ControllerAdvice → Global Error Handling",
  "id": "68-controlleradvice--global-error-handling",
  "level": 3
}, {
  "value": "7. Content Negotiation",
  "id": "7-content-negotiation",
  "level": 2
}, {
  "value": "7.1 How Content Negotiation Works",
  "id": "71-how-content-negotiation-works",
  "level": 3
}, {
  "value": "7.2 Default Content Negotiation",
  "id": "72-default-content-negotiation",
  "level": 3
}, {
  "value": "7.3 Configuring Content Negotiation",
  "id": "73-configuring-content-negotiation",
  "level": 3
}, {
  "value": "7.4 Extension-Based Strategy",
  "id": "74-extension-based-strategy",
  "level": 3
}, {
  "value": "7.5 Parameter-Based Strategy",
  "id": "75-parameter-based-strategy",
  "level": 3
}, {
  "value": "7.6 ContentNegotiationManager → Programmatic Use",
  "id": "76-contentnegotiationmanager--programmatic-use",
  "level": 3
}, {
  "value": "7.7 Controller-Level Content Negotiation",
  "id": "77-controller-level-content-negotiation",
  "level": 3
}, {
  "value": "7.8 Custom ContentNegotiationStrategy",
  "id": "78-custom-contentnegotiationstrategy",
  "level": 3
}, {
  "value": "7.9 Default Content Type",
  "id": "79-default-content-type",
  "level": 3
}, {
  "value": "8. HTTP Method Semantics",
  "id": "8-http-method-semantics",
  "level": 2
}, {
  "value": "8.1 GET → Safe, Idempotent, Cacheable",
  "id": "81-get--safe-idempotent-cacheable",
  "level": 3
}, {
  "value": "8.2 POST → Create, Non-Idempotent",
  "id": "82-post--create-non-idempotent",
  "level": 3
}, {
  "value": "8.3 PUT → Full Replacement, Idempotent",
  "id": "83-put--full-replacement-idempotent",
  "level": 3
}, {
  "value": "8.4 PATCH → Partial Update",
  "id": "84-patch--partial-update",
  "level": 3
}, {
  "value": "8.5 DELETE → Remove, Idempotent",
  "id": "85-delete--remove-idempotent",
  "level": 3
}, {
  "value": "8.6 HTTP Methods Summary",
  "id": "86-http-methods-summary",
  "level": 3
}, {
  "value": "9. HTTP Status Codes",
  "id": "9-http-status-codes",
  "level": 2
}, {
  "value": "9.1 Complete Status Code Reference",
  "id": "91-complete-status-code-reference",
  "level": 3
}, {
  "value": "9.2 Status Code Quick Reference",
  "id": "92-status-code-quick-reference",
  "level": 3
}, {
  "value": "10. HATEOAS",
  "id": "10-hateoas",
  "level": 2
}, {
  "value": "10.1 What is HATEOAS?",
  "id": "101-what-is-hateoas",
  "level": 3
}, {
  "value": "10.2 Maven/Gradle Dependencies",
  "id": "102-mavengradle-dependencies",
  "level": 3
}, {
  "value": "10.3 RepresentationModel → The Base Class",
  "id": "103-representationmodel--the-base-class",
  "level": 3
}, {
  "value": "10.4 EntityModel → Single Resource",
  "id": "104-entitymodel--single-resource",
  "level": 3
}, {
  "value": "10.5 CollectionModel → Resource Collections",
  "id": "105-collectionmodel--resource-collections",
  "level": 3
}, {
  "value": "10.6 Link and WebMvcLinkBuilder",
  "id": "106-link-and-webmvclinkbuilder",
  "level": 3
}, {
  "value": "10.7 PagedModel → Paginated Collections",
  "id": "107-pagedmodel--paginated-collections",
  "level": 3
}, {
  "value": "10.8 RepresentationModelProcessor",
  "id": "108-representationmodelprocessor",
  "level": 3
}, {
  "value": "10.9 Complete HATEOAS Response Example",
  "id": "109-complete-hateoas-response-example",
  "level": 3
}, {
  "value": "11. API Versioning Strategies",
  "id": "11-api-versioning-strategies",
  "level": 2
}, {
  "value": "11.1 Why API Versioning",
  "id": "111-why-api-versioning",
  "level": 3
}, {
  "value": "11.2 URI Path Versioning",
  "id": "112-uri-path-versioning",
  "level": 3
}, {
  "value": "11.3 Request Parameter Versioning",
  "id": "113-request-parameter-versioning",
  "level": 3
}, {
  "value": "11.4 Custom Header Versioning",
  "id": "114-custom-header-versioning",
  "level": 3
}, {
  "value": "11.5 Accept Header (Media Type) Versioning",
  "id": "115-accept-header-media-type-versioning",
  "level": 3
}, {
  "value": "11.6 Versioning Strategy Decision Guide",
  "id": "116-versioning-strategy-decision-guide",
  "level": 3
}, {
  "value": "12. CORS (Cross-Origin Resource Sharing)",
  "id": "12-cors-cross-origin-resource-sharing",
  "level": 2
}, {
  "value": "12.1 What is CORS?",
  "id": "121-what-is-cors",
  "level": 3
}, {
  "value": "12.2 @CrossOrigin → Controller-Level CORS",
  "id": "122-crossorigin--controller-level-cors",
  "level": 3
}, {
  "value": "12.3 @CrossOrigin Attributes",
  "id": "123-crossorigin-attributes",
  "level": 3
}, {
  "value": "12.4 GlobalCorsConfiguration",
  "id": "124-globalcorsconfiguration",
  "level": 3
}, {
  "value": "12.5 CORS with Properties",
  "id": "125-cors-with-properties",
  "level": 3
}, {
  "value": "12.6 CORS Error Diagnostics",
  "id": "126-cors-error-diagnostics",
  "level": 3
}, {
  "value": "13. REST Best Practices",
  "id": "13-rest-best-practices",
  "level": 2
}, {
  "value": "13.1 Naming Conventions",
  "id": "131-naming-conventions",
  "level": 3
}, {
  "value": "13.2 Resource Hierarchy",
  "id": "132-resource-hierarchy",
  "level": 3
}, {
  "value": "13.3 Pagination",
  "id": "133-pagination",
  "level": 3
}, {
  "value": "13.4 Filtering",
  "id": "134-filtering",
  "level": 3
}, {
  "value": "13.5 Sorting",
  "id": "135-sorting",
  "level": 3
}, {
  "value": "13.6 Partial Responses (Field Selection)",
  "id": "136-partial-responses-field-selection",
  "level": 3
}, {
  "value": "13.7 ETags for Conditional Requests",
  "id": "137-etags-for-conditional-requests",
  "level": 3
}, {
  "value": "13.8 Idempotency Key Support",
  "id": "138-idempotency-key-support",
  "level": 3
}, {
  "value": "13.9 Bulk Operations",
  "id": "139-bulk-operations",
  "level": 3
}, {
  "value": "14. Pagination &amp; Sorting with Pageable",
  "id": "14-pagination--sorting-with-pageable",
  "level": 2
}, {
  "value": "14.1 Pageable and Page Basics",
  "id": "141-pageable-and-page-basics",
  "level": 3
}, {
  "value": "14.2 @PageableDefault",
  "id": "142-pageabledefault",
  "level": 3
}, {
  "value": "14.3 Sort Parameter",
  "id": "143-sort-parameter",
  "level": 3
}, {
  "value": "14.4 Custom Pagination Response",
  "id": "144-custom-pagination-response",
  "level": 3
}, {
  "value": "15. Complete REST Controller Example",
  "id": "15-complete-rest-controller-example",
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
}, {
  "value": "Exercise 1: Basic REST Controller",
  "id": "exercise-1-basic-rest-controller",
  "level": 3
}, {
  "value": "Exercise 2: Request Parameter Handling",
  "id": "exercise-2-request-parameter-handling",
  "level": 3
}, {
  "value": "Exercise 3: Error Handling",
  "id": "exercise-3-error-handling",
  "level": 3
}, {
  "value": "Exercise 4: HATEOAS",
  "id": "exercise-4-hateoas",
  "level": 3
}, {
  "value": "Exercise 5: Content Negotiation",
  "id": "exercise-5-content-negotiation",
  "level": 3
}, {
  "value": "Exercise 6: CORS Configuration",
  "id": "exercise-6-cors-configuration",
  "level": 3
}, {
  "value": "Exercise 7: API Versioning",
  "id": "exercise-7-api-versioning",
  "level": 3
}, {
  "value": "Exercise 8: Pagination with Spring Data",
  "id": "exercise-8-pagination-with-spring-data",
  "level": 3
}, {
  "value": "Exercise 9: Complete REST Service",
  "id": "exercise-9-complete-rest-service",
  "level": 3
}, {
  "value": "Exercise 10: Status Code Analysis",
  "id": "exercise-10-status-code-analysis",
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
        id: "rest-api-development-with-spring-mvc",
        children: "REST API Development with Spring MVC"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/14-logging-error-i18n",
          children: "Logging, Error Handling & i18n"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/16-validation",
          children: "Request Validation & Error Handling"
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
        href: "../../assets/images/lessons/java/15-rest-api/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/15-rest-api/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/15-rest-api/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/15-rest-api/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/15-rest-api/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/15-rest-api/visual-explanation.png",
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
        children: ["Build RESTful web services using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RestController"
        }), " and understand its composition from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Controller"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ResponseBody"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Map HTTP requests to handler methods using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RequestMapping"
        }), " and its composed annotations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extract data from requests using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PathVariable"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RequestParam"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RequestHeader"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RequestBody"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RequestAttribute"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@MatrixVariable"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build responses with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ResponseStatus"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ResponseEntity"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ResponseStatusException"
        }), ", and custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HttpHeaders"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure content negotiation strategies via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ContentNegotiationConfigurer"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ContentNegotiationManager"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select appropriate HTTP methods and status codes following REST semantics"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement HATEOAS links using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RepresentationModel"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EntityModel"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CollectionModel"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Link"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WebMvcLinkBuilder"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply API versioning strategies including URI path, parameter, header, and content type approaches"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure CORS with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@CrossOrigin"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GlobalCorsConfiguration"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply REST best practices for endpoint naming, pagination, filtering, sorting, ETags, idempotency, and partial responses"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement pagination and sorting using Spring Data's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Pageable"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Page"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Sort"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PagedModel"
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
            children: "REST Principles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless, resource-oriented, uniform interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use nouns for resources, HTTP methods for actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Request Mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@RequestMapping, @GetMapping, @PostMapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composed annotations reduce boilerplate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Response Building"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResponseEntity, @ResponseStatus, status codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ResponseEntity for full control over response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content Negotiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON, XML, custom media types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accept header drives response format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HATEOAS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Links embedded in responses guide API discovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebMvcLinkBuilder for type-safe link generation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[REST Principles] --> B[Request Mapping]\n    B --> C[Data Extraction]\n    C --> D[Response Building]\n    D --> E[Content Negotiation]\n    E --> F[HATEOAS]\n    F --> G[API Versioning]\n    G --> H[CORS]\n    H --> I[Best Practices]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ExceptionHandler"
        }), " in a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ControllerAdvice"
        }), " to return consistent error responses across all endpoints — never let the container generate the error response."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-rest-architectural-style",
      children: "1. REST Architectural Style"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/15-rest-api.png",
        alt: "REST API Development Flow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-what-is-rest",
      children: "1.1 What is REST?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "REST (Representational State Transfer) is an architectural style defined by Roy Fielding in his 2000 doctoral dissertation. RESTful systems adhere to six constraints:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constraint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Client-Server"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of concerns between UI and data storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stateless"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each request contains all information needed to process it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cacheable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Responses must define themselves as cacheable or not"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Layered System"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediaries (proxies, gateways) can exist between client and server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Uniform Interface"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent resource identification, manipulation through representations, self-descriptive messages, and HATEOAS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Code on Demand"
            }), " (optional)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Servers can extend client functionality via executable code"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-resources-and-representations",
      children: "1.2 Resources and Representations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "resource"
      }), " is any concept that can be named → a user, an order, a product. Resources are identified by URIs. Clients interact with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "representations"
      }), " of resources (JSON, XML, etc.), not the resources themselves."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GET /api/users/42  →  Returns a representation of user 42\nPOST /api/users    →  Creates a new user resource\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-richardson-maturity-model",
      children: "1.3 Richardson Maturity Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Richardson Maturity Model defines four levels of REST adoption:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Swamp of POX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using HTTP as a tunnel (single URI, single verb)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple URIs for different resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP Verbs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using HTTP methods semantically (GET, POST, PUT, DELETE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hypermedia (HATEOAS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Responses contain links to discover related actions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Level 2 is the minimum for a RESTful API. Level 3 (HATEOAS) is the ideal."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-restcontroller-fundamentals",
      children: "2. @RestController Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-controller--responsebody",
      children: "2.1 @Controller + @ResponseBody"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before Spring 4, REST controllers required two annotations:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.stereotype.Controller;\nimport org.springframework.web.bind.annotation.ResponseBody;\nimport org.springframework.web.bind.annotation.RequestMapping;\n\n@Controller\n@ResponseBody\n@RequestMapping(\"/api/books\")\npublic class OldBookController {\n\n    private final BookRepository bookRepository;\n\n    public OldBookController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @RequestMapping(method = RequestMethod.GET)\n    public List<Book> getAllBooks() {\n        return bookRepository.findAll();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Controller"
      }), " marks the class as a Spring MVC controller. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ResponseBody"
      }), " tells Spring to serialize the return value directly to the HTTP response body (JSON/XML) rather than resolving a view name. Without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ResponseBody"
      }), ", Spring would look for a Thymeleaf/JSP template named after the return value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-restcontroller--the-composed-annotation",
      children: "2.2 @RestController → The Composed Annotation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring 4.0 introduced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RestController"
      }), ", a convenience annotation that combines ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Controller"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ResponseBody"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class BookController {\n\n    private final BookRepository bookRepository;\n\n    public BookController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping\n    public List<Book> getAllBooks() {\n        return bookRepository.findAll();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@RestController"
      }), " is meta-annotated with both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Controller"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ResponseBody"
      }), ", so every handler method automatically serializes its return value to the response body."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-restcontroller-source-conceptual",
      children: "2.3 @RestController Source (Conceptual)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.core.annotation.AliasFor;\nimport org.springframework.web.bind.annotation.ResponseBody;\nimport java.lang.annotation.*;\n\n@Target(ElementType.TYPE)\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Controller\n@ResponseBody\npublic @interface RestController {\n\n    @AliasFor(annotation = Controller.class)\n    String value() default \"\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Key insight: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RestController"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "composed annotation"
      }), " → it inherits component scanning through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Controller"
      }), " and response body semantics through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ResponseBody"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-model-class-example",
      children: "2.4 Model Class Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All examples in this chapter use the following domain model:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.restapi.model;\n\nimport java.math.BigDecimal;\nimport java.time.LocalDateTime;\nimport java.util.Objects;\n\npublic class Book {\n\n    private Long id;\n    private String isbn;\n    private String title;\n    private String author;\n    private BigDecimal price;\n    private LocalDateTime publishedAt;\n    private LocalDateTime createdAt;\n    private LocalDateTime updatedAt;\n\n    public Book() {}\n\n    public Book(Long id, String isbn, String title, String author, BigDecimal price) {\n        this.id = id;\n        this.isbn = isbn;\n        this.title = title;\n        this.author = author;\n        this.price = price;\n        this.createdAt = LocalDateTime.now();\n        this.updatedAt = LocalDateTime.now();\n    }\n\n    public Long getId() { return id; }\n    public void setId(Long id) { this.id = id; }\n    public String getIsbn() { return isbn; }\n    public void setIsbn(String isbn) { this.isbn = isbn; }\n    public String getTitle() { return title; }\n    public void setTitle(String title) { this.title = title; }\n    public String getAuthor() { return author; }\n    public void setAuthor(String author) { this.author = author; }\n    public BigDecimal getPrice() { return price; }\n    public void setPrice(BigDecimal price) { this.price = price; }\n    public LocalDateTime getPublishedAt() { return publishedAt; }\n    public void setPublishedAt(LocalDateTime publishedAt) { this.publishedAt = publishedAt; }\n    public LocalDateTime getCreatedAt() { return createdAt; }\n    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }\n    public LocalDateTime getUpdatedAt() { return updatedAt; }\n    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        Book book = (Book) o;\n        return Objects.equals(id, book.id);\n    }\n\n    @Override\n    public int hashCode() { return Objects.hash(id); }\n\n    @Override\n    public String toString() {\n        return \"Book{id=\" + id + \", isbn='\" + isbn + \"', title='\" + title + \"'}\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-repository-stub-in-memory",
      children: "2.5 Repository Stub (In-Memory)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.restapi.repository;\n\nimport com.example.restapi.model.Book;\nimport jakarta.annotation.PostConstruct;\nimport org.springframework.stereotype.Repository;\n\nimport java.math.BigDecimal;\nimport java.time.LocalDateTime;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.Optional;\nimport java.util.concurrent.ConcurrentHashMap;\nimport java.util.concurrent.atomic.AtomicLong;\nimport java.util.stream.Collectors;\n\n@Repository\npublic class BookRepository {\n\n    private final Map<Long, Book> store = new ConcurrentHashMap<>();\n    private final AtomicLong idGenerator = new AtomicLong(1);\n\n    @PostConstruct\n    public void init() {\n        save(new Book(null, \"978-0-13-468599-1\", \"Effective Java\", \"Joshua Bloch\", new BigDecimal(\"54.99\")));\n        save(new Book(null, \"978-0-596-51774-8\", \"Java Concurrency in Practice\", \"Brian Goetz\", new BigDecimal(\"49.99\")));\n        save(new Book(null, \"978-1-617-29453-2\", \"Spring in Action\", \"Craig Walls\", new BigDecimal(\"44.99\")));\n        save(new Book(null, \"978-1-491-95035-7\", \"RESTful Web Services\", \"Leonard Richardson\", new BigDecimal(\"39.99\")));\n    }\n\n    public List<Book> findAll() { return List.copyOf(store.values()); }\n\n    public Optional<Book> findById(Long id) { return Optional.ofNullable(store.get(id)); }\n\n    public List<Book> findByAuthor(String author) {\n        return store.values().stream()\n            .filter(b -> b.getAuthor().toLowerCase().contains(author.toLowerCase()))\n            .collect(Collectors.toList());\n    }\n\n    public Book save(Book book) {\n        if (book.getId() == null) {\n            book.setId(idGenerator.getAndIncrement());\n            book.setCreatedAt(LocalDateTime.now());\n        }\n        book.setUpdatedAt(LocalDateTime.now());\n        store.put(book.getId(), book);\n        return book;\n    }\n\n    public Optional<Book> deleteById(Long id) {\n        Book removed = store.remove(id);\n        return Optional.ofNullable(removed);\n    }\n\n    public boolean existsByIsbn(String isbn) {\n        return store.values().stream().anyMatch(b -> b.getIsbn().equals(isbn));\n    }\n\n    public long count() { return store.size(); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-requestmapping--the-foundation",
      children: "3. @RequestMapping → The Foundation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-requestmapping-attributes",
      children: "3.1 @RequestMapping Attributes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@RequestMapping"
      }), " is the base annotation for mapping HTTP requests to handler methods. It can be applied at the class level (narrowing the base path) and at the method level (further refinement)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RequestMethod;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.http.MediaType;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class RequestMappingController {\n\n    private final BookRepository bookRepository;\n\n    public RequestMappingController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @RequestMapping(method = RequestMethod.GET)\n    public List<Book> getAllBooks() { return bookRepository.findAll(); }\n\n    @RequestMapping(method = RequestMethod.GET, path = \"/{id}\")\n    public Book getBookById(@PathVariable Long id) {\n        return bookRepository.findById(id)\n            .orElseThrow(() -> new BookNotFoundException(id));\n    }\n\n    @RequestMapping(method = RequestMethod.GET, params = \"author\")\n    public List<Book> getBooksByAuthor(@RequestParam String author) {\n        return bookRepository.findByAuthor(author);\n    }\n\n    @RequestMapping(method = RequestMethod.GET, headers = \"API-Version=2\")\n    public List<Book> getAllBooksV2() { return bookRepository.findAll(); }\n\n    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)\n    public Book createBook(@RequestBody Book book) { return bookRepository.save(book); }\n\n    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_XML_VALUE)\n    public List<Book> getAllBooksXml() { return bookRepository.findAll(); }\n\n    @RequestMapping(method = RequestMethod.GET, path = {\"/all\", \"/list\"})\n    public List<Book> getAllBooksAlias() { return bookRepository.findAll(); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-complete-attribute-reference",
      children: "3.2 Complete Attribute Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "value"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "path"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL path mappings"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "\"/users/{id}\""
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{\"/a\",\"/b\"}"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "method"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RequestMethod[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP methods"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "GET"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "POST"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PUT"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "params"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query parameter conditions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "\"action=save\""
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"!admin\""
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "headers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request header conditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"Accept=application/json\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "consumes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Media types the method accepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"application/json\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "produces"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Media types the method produces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"application/json\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handler name for debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"getUserHandler\""
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-params-attribute--expressions",
      children: "3.3 params Attribute → Expressions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RequestMapping(method = RequestMethod.GET, params = \"author\")\n@RequestMapping(method = RequestMethod.GET, params = \"!author\")\n@RequestMapping(method = RequestMethod.GET, params = \"author=tolkien\")\n@RequestMapping(method = RequestMethod.GET, params = \"author!=tolkien\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-headers-attribute--expressions",
      children: "3.4 headers Attribute → Expressions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RequestMapping(method = RequestMethod.GET, headers = \"API-Version\")\n@RequestMapping(method = RequestMethod.GET, headers = \"!X-Internal\")\n@RequestMapping(method = RequestMethod.GET, headers = \"API-Version=2\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-composed-requestmapping-annotations",
      children: "4. Composed @RequestMapping Annotations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-getmapping",
      children: "4.1 @GetMapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.GetMapping;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class GetMappingController {\n\n    private final BookRepository bookRepository;\n\n    public GetMappingController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping\n    public List<Book> getAllBooks() { return bookRepository.findAll(); }\n\n    @GetMapping(\"/{id}\")\n    public Book getBookById(@PathVariable Long id) {\n        return bookRepository.findById(id)\n            .orElseThrow(() -> new BookNotFoundException(id));\n    }\n\n    @GetMapping(\"/count\")\n    public long countBooks() { return bookRepository.count(); }\n\n    @GetMapping(\"/by-isbn\")\n    public Book getBookByIsbn(@RequestParam String isbn) {\n        return bookRepository.findAll().stream()\n            .filter(b -> b.getIsbn().equals(isbn))\n            .findFirst()\n            .orElseThrow(() -> new BookNotFoundException(\"ISBN: \" + isbn));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-postmapping",
      children: "4.2 @PostMapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.PostMapping;\n\n@PostMapping\n@ResponseStatus(HttpStatus.CREATED)\npublic Book createBook(@RequestBody Book book) {\n    return bookRepository.save(book);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-putmapping--full-update",
      children: "4.3 @PutMapping → Full Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.PutMapping;\n\n@PutMapping(\"/{id}\")\npublic Book updateBook(@PathVariable Long id, @RequestBody Book updated) {\n    return bookRepository.findById(id)\n        .map(existing -> {\n            existing.setTitle(updated.getTitle());\n            existing.setAuthor(updated.getAuthor());\n            existing.setPrice(updated.getPrice());\n            existing.setIsbn(updated.getIsbn());\n            existing.setPublishedAt(updated.getPublishedAt());\n            return bookRepository.save(existing);\n        })\n        .orElseThrow(() -> new BookNotFoundException(id));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-deletemapping",
      children: "4.4 @DeleteMapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.DeleteMapping;\n\n@DeleteMapping(\"/{id}\")\n@ResponseStatus(HttpStatus.NO_CONTENT)\npublic void deleteBook(@PathVariable Long id) {\n    bookRepository.deleteById(id)\n        .orElseThrow(() -> new BookNotFoundException(id));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-patchmapping--partial-update",
      children: "4.5 @PatchMapping → Partial Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.PatchMapping;\nimport java.util.Map;\n\n@PatchMapping(\"/{id}\")\npublic Book partialUpdateBook(@PathVariable Long id, @RequestBody Map<String, Object> updates) {\n    return bookRepository.findById(id)\n        .map(existing -> {\n            if (updates.containsKey(\"title\")) existing.setTitle((String) updates.get(\"title\"));\n            if (updates.containsKey(\"author\")) existing.setAuthor((String) updates.get(\"author\"));\n            if (updates.containsKey(\"price\")) existing.setPrice(new BigDecimal(updates.get(\"price\").toString()));\n            if (updates.containsKey(\"isbn\")) existing.setIsbn((String) updates.get(\"isbn\"));\n            return bookRepository.save(existing);\n        })\n        .orElseThrow(() -> new BookNotFoundException(id));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-all-composed-annotations-summary",
      children: "4.6 All Composed Annotations Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Annotation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Equivalent to"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP Method"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@GetMapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@RequestMapping(method=GET)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GET"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@PostMapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@RequestMapping(method=POST)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@PutMapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@RequestMapping(method=PUT)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@DeleteMapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@RequestMapping(method=DELETE)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@PatchMapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@RequestMapping(method=PATCH)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PATCH"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each composed annotation supports ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "path"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "params"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "headers"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "consumes"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "produces"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-request-data-extraction",
      children: "5. Request Data Extraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-pathvariable--uri-template-variables",
      children: "5.1 @PathVariable → URI Template Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.PathVariable;\n\n@RestController\n@RequestMapping(\"/api\")\npublic class PathVariableController {\n\n    private final BookRepository bookRepository;\n\n    public PathVariableController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping(\"/books/{id}\")\n    public Book getBookById(@PathVariable Long id) {\n        return bookRepository.findById(id)\n            .orElseThrow(() -> new BookNotFoundException(id));\n    }\n\n    @GetMapping(\"/authors/{authorId}/books/{bookId}\")\n    public Book getAuthorBook(@PathVariable Long authorId, @PathVariable Long bookId) {\n        return bookRepository.findById(bookId)\n            .orElseThrow(() -> new BookNotFoundException(bookId));\n    }\n\n    @GetMapping(\"/books/{slug}\")\n    public Book getBookBySlug(@PathVariable(\"slug\") String bookSlug) {\n        return bookRepository.findAll().stream()\n            .filter(b -> b.getTitle().toLowerCase().replace(\" \", \"-\").equals(bookSlug))\n            .findFirst()\n            .orElseThrow(() -> new BookNotFoundException(\"Slug: \" + bookSlug));\n    }\n\n    @GetMapping(\"/books/{bookId}/comments/{commentId:\\\\d+}\")\n    public String getComment(@PathVariable Long bookId, @PathVariable Long commentId) {\n        return \"Comment \" + commentId + \" for book \" + bookId;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-requestparam--query-parameters",
      children: "5.2 @RequestParam → Query Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.RequestParam;\nimport java.util.Optional;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class RequestParamController {\n\n    private final BookRepository bookRepository;\n\n    public RequestParamController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping\n    public List<Book> getAllBooks(@RequestParam(required = false) String author) {\n        if (author != null) return bookRepository.findByAuthor(author);\n        return bookRepository.findAll();\n    }\n\n    @GetMapping(\"/paged\")\n    public List<Book> getBooksPaged(\n            @RequestParam(defaultValue = \"0\") int page,\n            @RequestParam(defaultValue = \"20\") int size,\n            @RequestParam(defaultValue = \"id\") String sort) {\n        return bookRepository.findAll().stream()\n            .skip(page * size).limit(size).collect(Collectors.toList());\n    }\n\n    @GetMapping(\"/search\")\n    public List<Book> searchBooks(\n            @RequestParam String q,\n            @RequestParam(required = false) String category,\n            @RequestParam(required = false) BigDecimal minPrice,\n            @RequestParam(required = false) BigDecimal maxPrice) {\n        return bookRepository.findAll().stream()\n            .filter(b -> b.getTitle().toLowerCase().contains(q.toLowerCase()))\n            .filter(b -> minPrice == null || b.getPrice().compareTo(minPrice) >= 0)\n            .filter(b -> maxPrice == null || b.getPrice().compareTo(maxPrice) <= 0)\n            .collect(Collectors.toList());\n    }\n\n    @GetMapping(\"/ids\")\n    public List<Book> getBooksByIds(@RequestParam List<Long> id) {\n        return id.stream()\n            .map(bookRepository::findById).filter(Optional::isPresent).map(Optional::get)\n            .collect(Collectors.toList());\n    }\n\n    @GetMapping(\"/optional\")\n    public List<Book> getBooksOptional(@RequestParam Optional<String> author) {\n        return author.map(bookRepository::findByAuthor).orElseGet(bookRepository::findAll);\n    }\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "value"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method parameter name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query parameter name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether the parameter is required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "defaultValue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "null"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Default value (implies ", (0,jsx_runtime.jsx)(_components.code, {
              children: "required=false"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-requestheader--http-headers",
      children: "5.3 @RequestHeader → HTTP Headers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.RequestHeader;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class RequestHeaderController {\n\n    private final BookRepository bookRepository;\n\n    public RequestHeaderController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping\n    public List<Book> getAllBooks(\n            @RequestHeader(\"Accept-Language\") String acceptLanguage,\n            @RequestHeader(value = \"X-Request-Id\", required = false) String requestId,\n            @RequestHeader(value = \"User-Agent\", defaultValue = \"Unknown\") String userAgent) {\n        System.out.println(\"Language: \" + acceptLanguage);\n        System.out.println(\"Request ID: \" + requestId);\n        return bookRepository.findAll();\n    }\n\n    @GetMapping(\"/headers\")\n    public Map<String, String> getAllHeaders(@RequestHeader Map<String, String> allHeaders) {\n        return allHeaders;\n    }\n\n    @GetMapping(\"/content-length\")\n    public String getContentLength(@RequestHeader(\"Content-Length\") Long contentLength) {\n        return \"Content length: \" + contentLength + \" bytes\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-requestbody--request-body",
      children: "5.4 @RequestBody → Request Body"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.RequestBody;\nimport jakarta.validation.Valid;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class RequestBodyController {\n\n    private final BookRepository bookRepository;\n\n    public RequestBodyController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @PostMapping\n    @ResponseStatus(HttpStatus.CREATED)\n    public Book createBook(@Valid @RequestBody Book book) { return bookRepository.save(book); }\n\n    @PostMapping(\"/raw\")\n    public String createRawBook(@RequestBody String rawBody) {\n        return \"Received raw body: \" + rawBody;\n    }\n\n    @PostMapping(\"/binary\")\n    public byte[] createBinaryBook(@RequestBody byte[] data) {\n        return (\"Processed \" + data.length + \" bytes\").getBytes();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-requestattribute--request-scoped-attributes",
      children: "5.5 @RequestAttribute → Request Scoped Attributes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.RequestAttribute;\n\n@RestController\n@RequestMapping(\"/api\")\npublic class RequestAttributeController {\n\n    @GetMapping(\"/profile\")\n    public Map<String, Object> getProfile(\n            @RequestAttribute(\"authenticatedUser\") String userId,\n            @RequestAttribute(value = \"requestStartTime\", required = false) Long startTime) {\n        Map<String, Object> profile = new HashMap<>();\n        profile.put(\"userId\", userId);\n        if (startTime != null) profile.put(\"processingTimeMs\", System.currentTimeMillis() - startTime);\n        return profile;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example filter:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.servlet.*;\nimport jakarta.servlet.http.HttpServletRequest;\nimport java.io.IOException;\n\n@Component\npublic class RequestAttributeFilter implements Filter {\n    @Override\n    public void doFilter(ServletRequest request, ServletResponse response,\n                         FilterChain chain) throws IOException, ServletException {\n        HttpServletRequest httpRequest = (HttpServletRequest) request;\n        httpRequest.setAttribute(\"authenticatedUser\", \"user-42\");\n        httpRequest.setAttribute(\"requestStartTime\", System.currentTimeMillis());\n        chain.doFilter(request, response);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-matrixvariable--matrix-parameters",
      children: "5.6 @MatrixVariable → Matrix Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 1 → Enable matrix variables:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.context.annotation.Configuration;\nimport org.springframework.web.servlet.config.annotation.WebMvcConfigurer;\nimport org.springframework.web.servlet.config.annotation.PathMatchConfigurer;\nimport org.springframework.web.util.UrlPathHelper;\n\n@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n    @Override\n    public void configurePathMatch(PathMatchConfigurer configurer) {\n        UrlPathHelper urlPathHelper = new UrlPathHelper();\n        urlPathHelper.setRemoveSemicolonContent(false);\n        configurer.setUrlPathHelper(urlPathHelper);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 2 → Use @MatrixVariable:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.MatrixVariable;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class MatrixVariableController {\n\n    // GET /api/books/42;q=2;format=detailed\n    @GetMapping(\"/{id}\")\n    public Book getBookWithOptions(@PathVariable Long id,\n            @MatrixVariable(pathVar = \"id\") Map<String, String> matrixVars) {\n        System.out.println(\"Matrix vars: \" + matrixVars);\n        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));\n    }\n\n    // GET /api/books/filter;author=Bloch;year=2018\n    @GetMapping(path = \"/filter\")\n    public List<Book> filterBooks(@MatrixVariable String author,\n            @MatrixVariable(required = false) Integer year) {\n        return bookRepository.findByAuthor(author);\n    }\n\n    // Multiple path segments with matrix vars\n    // GET /api/books/42/reviews;stars=5;sort=date\n    @GetMapping(\"/{id}/reviews\")\n    public String getReviews(@PathVariable Long id,\n            @MatrixVariable(value = \"stars\", pathVar = \"id\", required = false) Integer stars,\n            @MatrixVariable(value = \"sort\", pathVar = \"reviews\") String sort) {\n        return \"Book \" + id + \" reviews sort: \" + sort + \", stars: \" + stars;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "57-parameter-type-conversion",
      children: "5.7 Parameter Type Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring automatically converts request parameters, path variables, and headers to various types:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.*;\nimport java.time.LocalDate;\nimport java.util.Locale;\n\n@RestController\n@RequestMapping(\"/api\")\npublic class ConversionController {\n\n    @GetMapping(\"/convert\")\n    public String conversionExamples(\n            @RequestParam int count,\n            @RequestParam boolean active,\n            @RequestParam LocalDate date,\n            @RequestParam BigDecimal amount,\n            @RequestParam Locale locale,\n            @RequestParam UUID uuid) {\n        return String.format(\"count=%d, active=%b, date=%s, amount=%s, locale=%s\",\n            count, active, date, amount, locale);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Custom converter:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.core.convert.converter.Converter;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class StringToPhoneNumberConverter implements Converter<String, PhoneNumber> {\n    @Override\n    public PhoneNumber convert(String source) {\n        String cleaned = source.replaceAll(\"[\\\\s\\\\-()]\", \"\");\n        return new PhoneNumber(cleaned.substring(0, 3), cleaned.substring(3, 6), cleaned.substring(6));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-response-handling",
      children: "6. Response Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-responsestatus",
      children: "6.1 @ResponseStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sets the HTTP status code on successful responses:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.ResponseStatus;\nimport org.springframework.http.HttpStatus;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class ResponseStatusController {\n\n    private final BookRepository bookRepository;\n\n    public ResponseStatusController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @PostMapping\n    @ResponseStatus(HttpStatus.CREATED)\n    public Book createBook(@RequestBody Book book) { return bookRepository.save(book); }\n\n    @DeleteMapping(\"/{id}\")\n    @ResponseStatus(HttpStatus.NO_CONTENT)\n    public void deleteBook(@PathVariable Long id) {\n        bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));\n        bookRepository.deleteById(id);\n    }\n\n    @PutMapping(\"/{id}\")\n    @ResponseStatus(HttpStatus.OK)\n    public Book updateBook(@PathVariable Long id, @RequestBody Book book) {\n        return bookRepository.findById(id)\n            .map(existing -> {\n                existing.setTitle(book.getTitle());\n                existing.setAuthor(book.getAuthor());\n                existing.setPrice(book.getPrice());\n                return bookRepository.save(existing);\n            })\n            .orElseThrow(() -> new BookNotFoundException(id));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-responseentity--full-control",
      children: "6.2 ResponseEntity → Full Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.http.ResponseEntity;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.HttpStatus;\nimport java.net.URI;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class ResponseEntityController {\n\n    private final BookRepository bookRepository;\n\n    public ResponseEntityController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping\n    public ResponseEntity<List<Book>> getAllBooks() {\n        return ResponseEntity.ok(bookRepository.findAll());\n    }\n\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<Book> getBook(@PathVariable Long id) {\n        return bookRepository.findById(id)\n            .map(book -> ResponseEntity.ok()\n                .header(\"X-Book-Location\", \"shelf-a-42\")\n                .body(book))\n            .orElse(ResponseEntity.notFound().build());\n    }\n\n    @PostMapping\n    public ResponseEntity<Book> createBook(@RequestBody Book book) {\n        Book saved = bookRepository.save(book);\n        URI location = URI.create(\"/api/books/\" + saved.getId());\n        return ResponseEntity.created(location).body(saved);\n    }\n\n    @DeleteMapping(\"/{id}\")\n    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {\n        return bookRepository.findById(id)\n            .map(book -> {\n                bookRepository.deleteById(id);\n                return ResponseEntity.<Void>noContent().build();\n            })\n            .orElse(ResponseEntity.notFound().build());\n    }\n\n    @GetMapping(\"/conditional\")\n    public ResponseEntity<List<Book>> getBooksIfModified() {\n        List<Book> books = bookRepository.findAll();\n        return ResponseEntity.ok().eTag(Integer.toHexString(books.hashCode())).body(books);\n    }\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ResponseEntity.ok(body)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success with body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ResponseEntity.created(URI)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource created"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ResponseEntity.accepted()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async accepted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ResponseEntity.noContent()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "204"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success, no body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ResponseEntity.badRequest()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bad request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ResponseEntity.notFound()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "404"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource not found"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ResponseEntity.status(HttpStatus)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any status"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-responseentity-with-headers-builder",
      children: "6.3 ResponseEntity with Headers Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@GetMapping(\"/{id}\")\npublic ResponseEntity<Book> getBookComplete(@PathVariable Long id) {\n    return bookRepository.findById(id)\n        .map(book -> ResponseEntity.ok()\n            .contentType(MediaType.APPLICATION_JSON)\n            .header(\"Cache-Control\", \"max-age=3600\")\n            .header(\"ETag\", \"\\\"\" + book.hashCode() + \"\\\"\")\n            .allow(HttpMethod.GET, HttpMethod.PUT, HttpMethod.DELETE)\n            .lastModified(book.getUpdatedAt().toEpochSecond(java.time.ZoneOffset.UTC) * 1000)\n            .location(URI.create(\"/api/books/\" + book.getId()))\n            .body(book))\n        .orElseGet(() -> ResponseEntity.notFound()\n            .header(\"X-Error-Code\", \"BOOK_NOT_FOUND\")\n            .build());\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-httpheaders--building-custom-headers",
      children: "6.4 HttpHeaders → Building Custom Headers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.http.HttpHeaders;\nimport org.springframework.http.CacheControl;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class HttpHeadersController {\n\n    private final BookRepository bookRepository;\n\n    public HttpHeadersController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<Book> getBookWithHeaders(@PathVariable Long id) {\n        return bookRepository.findById(id)\n            .map(book -> {\n                HttpHeaders headers = new HttpHeaders();\n                headers.setContentType(MediaType.APPLICATION_JSON);\n                headers.setCacheControl(CacheControl.maxAge(java.time.Duration.ofHours(1)).mustRevalidate());\n                headers.setETag(\"\\\"\" + book.hashCode() + \"\\\"\");\n                headers.setLastModified(book.getUpdatedAt()\n                    .toInstant(java.time.ZoneOffset.UTC).toEpochMilli());\n                headers.set(\"X-Book-Location\", \"section-a-42\");\n                headers.setExpires(java.time.ZonedDateTime.now().plusHours(1));\n                return new ResponseEntity<>(book, headers, HttpStatus.OK);\n            })\n            .orElse(ResponseEntity.notFound().build());\n    }\n\n    @GetMapping(\"/cookie\")\n    public ResponseEntity<String> setCookie() {\n        HttpHeaders headers = new HttpHeaders();\n        headers.add(HttpHeaders.SET_COOKIE,\n            \"session=abc123; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600\");\n        return ResponseEntity.ok().headers(headers).body(\"Cookie set\");\n    }\n\n    @GetMapping(\"/links\")\n    public ResponseEntity<Void> linkHeaders() {\n        HttpHeaders headers = new HttpHeaders();\n        headers.add(HttpHeaders.LINK, \"<http://api.example.com/books?page=1>; rel=\\\"first\\\"\");\n        headers.add(HttpHeaders.LINK, \"<http://api.example.com/books?page=3>; rel=\\\"prev\\\"\");\n        headers.add(HttpHeaders.LINK, \"<http://api.example.com/books?page=5>; rel=\\\"next\\\"\");\n        return ResponseEntity.noContent().headers(headers).build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-responsestatusexception",
      children: "6.5 ResponseStatusException"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.server.ResponseStatusException;\nimport org.springframework.http.HttpStatus;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class ResponseStatusExceptionController {\n\n    private final BookRepository bookRepository;\n\n    public ResponseStatusExceptionController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping(\"/{id}\")\n    public Book getBook(@PathVariable Long id) {\n        return bookRepository.findById(id)\n            .orElseThrow(() -> new ResponseStatusException(\n                HttpStatus.NOT_FOUND, \"Book with id \" + id + \" not found\"));\n    }\n\n    @PostMapping\n    public Book createBook(@RequestBody Book book) {\n        if (book.getIsbn() == null || book.getIsbn().isBlank())\n            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, \"ISBN is required\");\n        if (bookRepository.existsByIsbn(book.getIsbn()))\n            throw new ResponseStatusException(HttpStatus.CONFLICT,\n                \"Book with ISBN \" + book.getIsbn() + \" already exists\");\n        if (book.getPrice() != null && book.getPrice().compareTo(BigDecimal.ZERO) < 0)\n            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY,\n                \"Price must be non-negative\");\n        return bookRepository.save(book);\n    }\n\n    @PutMapping(\"/{id}\")\n    public Book updateBook(@PathVariable Long id, @RequestBody Book book) {\n        if (!id.equals(book.getId()))\n            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,\n                \"Path variable id does not match request body id\");\n        return bookRepository.findById(id)\n            .map(existing -> bookRepository.save(book))\n            .orElseThrow(() -> new ResponseStatusException(\n                HttpStatus.NOT_FOUND, \"Book with id \" + id + \" not found\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-custom-exception--responsestatus",
      children: "6.6 Custom Exception + @ResponseStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.ResponseStatus;\n\n@ResponseStatus(HttpStatus.NOT_FOUND)\npublic class BookNotFoundException extends RuntimeException {\n    public BookNotFoundException(Long id) { super(\"Book not found with id: \" + id); }\n    public BookNotFoundException(String message) { super(message); }\n}\n\n@ResponseStatus(HttpStatus.CONFLICT)\npublic class BookConflictException extends RuntimeException {\n    public BookConflictException(String isbn) { super(\"Book with ISBN \" + isbn + \" already exists\"); }\n}\n\n@ResponseStatus(HttpStatus.BAD_REQUEST)\npublic class InvalidBookException extends RuntimeException {\n    public InvalidBookException(String message) { super(message); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/books\")\npublic class CustomExceptionController {\n\n    private final BookRepository bookRepository;\n\n    public CustomExceptionController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping(\"/{id}\")\n    public Book getBook(@PathVariable Long id) {\n        return bookRepository.findById(id)\n            .orElseThrow(() -> new BookNotFoundException(id));\n    }\n\n    @PostMapping\n    @ResponseStatus(HttpStatus.CREATED)\n    public Book createBook(@RequestBody Book book) {\n        if (book.getIsbn() == null || book.getIsbn().isBlank())\n            throw new InvalidBookException(\"ISBN is required\");\n        if (bookRepository.existsByIsbn(book.getIsbn()))\n            throw new BookConflictException(book.getIsbn());\n        return bookRepository.save(book);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "67-exceptionhandler--controller-level",
      children: "6.7 @ExceptionHandler → Controller-Level"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.ExceptionHandler;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class ExceptionHandlerController {\n\n    private final BookRepository bookRepository;\n\n    public ExceptionHandlerController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    // ... handler methods ...\n\n    @ExceptionHandler(BookNotFoundException.class)\n    @ResponseStatus(HttpStatus.NOT_FOUND)\n    public Map<String, Object> handleBookNotFound(BookNotFoundException ex) {\n        Map<String, Object> body = new LinkedHashMap<>();\n        body.put(\"error\", \"Book not found\");\n        body.put(\"message\", ex.getMessage());\n        body.put(\"timestamp\", java.time.Instant.now().toString());\n        return body;\n    }\n\n    @ExceptionHandler(InvalidBookException.class)\n    @ResponseStatus(HttpStatus.BAD_REQUEST)\n    public Map<String, Object> handleInvalidBook(InvalidBookException ex) {\n        Map<String, Object> body = new LinkedHashMap<>();\n        body.put(\"error\", \"Invalid book data\");\n        body.put(\"message\", ex.getMessage());\n        return body;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "68-controlleradvice--global-error-handling",
      children: "6.8 @ControllerAdvice → Global Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.RestControllerAdvice;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.context.request.WebRequest;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;\nimport org.springframework.web.bind.MethodArgumentNotValidException;\n\nimport java.time.Instant;\nimport java.util.LinkedHashMap;\nimport java.util.Map;\nimport java.util.stream.Collectors;\n\n@RestControllerAdvice\npublic class GlobalExceptionHandler {\n\n    @ExceptionHandler(BookNotFoundException.class)\n    public ResponseEntity<Map<String, Object>> handleBookNotFound(\n            BookNotFoundException ex, WebRequest request) {\n        Map<String, Object> body = new LinkedHashMap<>();\n        body.put(\"timestamp\", Instant.now().toString());\n        body.put(\"status\", 404);\n        body.put(\"error\", \"Not Found\");\n        body.put(\"message\", ex.getMessage());\n        body.put(\"path\", request.getDescription(false));\n        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(body);\n    }\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<Map<String, Object>> handleValidation(\n            MethodArgumentNotValidException ex) {\n        Map<String, Object> body = new LinkedHashMap<>();\n        body.put(\"timestamp\", Instant.now().toString());\n        body.put(\"status\", 400);\n        body.put(\"error\", \"Validation Failed\");\n        Map<String, String> errors = ex.getBindingResult()\n            .getFieldErrors().stream()\n            .collect(Collectors.toMap(f -> f.getField(), f -> f.getDefaultMessage(), (a, b) -> a));\n        body.put(\"fieldErrors\", errors);\n        return ResponseEntity.badRequest().body(body);\n    }\n\n    @ExceptionHandler(MethodArgumentTypeMismatchException.class)\n    public ResponseEntity<Map<String, Object>> handleTypeMismatch(\n            MethodArgumentTypeMismatchException ex) {\n        Map<String, Object> body = new LinkedHashMap<>();\n        body.put(\"timestamp\", Instant.now().toString());\n        body.put(\"status\", 400);\n        body.put(\"error\", \"Type Mismatch\");\n        body.put(\"message\", \"Parameter '\" + ex.getName()\n            + \"' should be of type \" + ex.getRequiredType().getSimpleName());\n        return ResponseEntity.badRequest().body(body);\n    }\n\n    @ExceptionHandler(ResponseStatusException.class)\n    public ResponseEntity<Map<String, Object>> handleResponseStatus(\n            ResponseStatusException ex) {\n        Map<String, Object> body = new LinkedHashMap<>();\n        body.put(\"timestamp\", Instant.now().toString());\n        body.put(\"status\", ex.getStatusCode().value());\n        body.put(\"error\", ex.getStatusCode().toString());\n        body.put(\"message\", ex.getReason());\n        return ResponseEntity.status(ex.getStatusCode()).body(body);\n    }\n\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<Map<String, Object>> handleAllUncaught(\n            Exception ex, WebRequest request) {\n        Map<String, Object> body = new LinkedHashMap<>();\n        body.put(\"timestamp\", Instant.now().toString());\n        body.put(\"status\", 500);\n        body.put(\"error\", \"Internal Server Error\");\n        body.put(\"message\", ex.getMessage());\n        body.put(\"path\", request.getDescription(false));\n        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-content-negotiation",
      children: "7. Content Negotiation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-how-content-negotiation-works",
      children: "7.1 How Content Negotiation Works"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content negotiation determines the media type (JSON, XML, etc.) used for request/response bodies based on:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Accept header"
        }), " (default and most common)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File extension"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".json"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".xml"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Query parameter"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?format=json"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parameter strategy"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?mediaType=json"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-default-content-negotiation",
      children: "7.2 Default Content Negotiation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, Spring Boot uses the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Accept"
      }), " header:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -H \"Accept: application/json\" http://localhost:8080/api/books\ncurl -H \"Accept: application/xml\" http://localhost:8080/api/books\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-configuring-content-negotiation",
      children: "7.3 Configuring Content Negotiation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.context.annotation.Configuration;\nimport org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;\nimport org.springframework.web.servlet.config.annotation.WebMvcConfigurer;\nimport org.springframework.http.MediaType;\n\n@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n\n    @Override\n    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {\n        configurer\n            .favorParameter(false)\n            .favorPathExtension(true)\n            .favorParameter(true)\n            .parameterName(\"format\")\n            .ignoreAcceptHeader(false)\n            .defaultContentType(MediaType.APPLICATION_JSON)\n            .mediaType(\"json\", MediaType.APPLICATION_JSON)\n            .mediaType(\"xml\", MediaType.APPLICATION_XML)\n            .mediaType(\"yaml\", new MediaType(\"application\", \"x-yaml\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-extension-based-strategy",
      children: "7.4 Extension-Based Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n    @Override\n    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {\n        configurer\n            .favorPathExtension(true)\n            .favorParameter(false)\n            .ignoreAcceptHeader(true)\n            .defaultContentType(MediaType.APPLICATION_JSON)\n            .mediaType(\"json\", MediaType.APPLICATION_JSON)\n            .mediaType(\"xml\", MediaType.APPLICATION_XML);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-parameter-based-strategy",
      children: "7.5 Parameter-Based Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n    @Override\n    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {\n        configurer\n            .favorPathExtension(false)\n            .favorParameter(true)\n            .parameterName(\"format\")\n            .ignoreAcceptHeader(true)\n            .defaultContentType(MediaType.APPLICATION_JSON)\n            .mediaType(\"json\", MediaType.APPLICATION_JSON)\n            .mediaType(\"xml\", MediaType.APPLICATION_XML);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "76-contentnegotiationmanager--programmatic-use",
      children: "7.6 ContentNegotiationManager → Programmatic Use"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.accept.ContentNegotiationManager;\nimport org.springframework.http.MediaType;\nimport jakarta.servlet.http.HttpServletRequest;\n\n@Service\npublic class ContentNegotiationService {\n\n    private final ContentNegotiationManager contentNegotiationManager;\n\n    public ContentNegotiationService(ContentNegotiationManager contentNegotiationManager) {\n        this.contentNegotiationManager = contentNegotiationManager;\n    }\n\n    public List<MediaType> resolveMediaTypes(HttpServletRequest request) {\n        try { return contentNegotiationManager.resolveMediaTypes(request); }\n        catch (Exception e) { return List.of(MediaType.APPLICATION_JSON); }\n    }\n\n    public boolean isJsonRequested(HttpServletRequest request) {\n        return resolveMediaTypes(request).stream()\n            .anyMatch(mt -> mt.includes(MediaType.APPLICATION_JSON));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "77-controller-level-content-negotiation",
      children: "7.7 Controller-Level Content Negotiation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.http.MediaType;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class ControllerNegotiationController {\n\n    private final BookRepository bookRepository;\n\n    public ControllerNegotiationController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)\n    public List<Book> getBooksJson() { return bookRepository.findAll(); }\n\n    @GetMapping(produces = MediaType.APPLICATION_XML_VALUE)\n    public List<Book> getBooksXml() { return bookRepository.findAll(); }\n\n    @GetMapping(path = \"/{id}\", produces = {\n        MediaType.APPLICATION_JSON_VALUE,\n        MediaType.APPLICATION_XML_VALUE\n    })\n    public Book getBook(@PathVariable Long id) {\n        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));\n    }\n\n    @GetMapping(path = \"/v2\", produces = \"application/vnd.example.book.v2+json\")\n    public List<Book> getBooksV2() { return bookRepository.findAll(); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "78-custom-contentnegotiationstrategy",
      children: "7.8 Custom ContentNegotiationStrategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.accept.ContentNegotiationStrategy;\nimport org.springframework.http.MediaType;\nimport jakarta.servlet.http.HttpServletRequest;\nimport java.util.List;\n\npublic class CustomHeaderNegotiationStrategy implements ContentNegotiationStrategy {\n\n    private static final String CUSTOM_HEADER = \"X-Format\";\n\n    @Override\n    public List<MediaType> resolveMediaTypes(HttpServletRequest request) {\n        String format = request.getHeader(CUSTOM_HEADER);\n        if (format == null) return MEDIA_TYPE_ALL_LIST;\n\n        return switch (format.toLowerCase()) {\n            case \"json\" -> List.of(MediaType.APPLICATION_JSON);\n            case \"xml\" -> List.of(MediaType.APPLICATION_XML);\n            case \"yaml\" -> List.of(new MediaType(\"application\", \"x-yaml\"));\n            default -> List.of(MediaType.APPLICATION_JSON);\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Register it:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n    @Override\n    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {\n        configurer.strategies(List.of(\n            new CustomHeaderNegotiationStrategy(),\n            new org.springframework.web.accept.HeaderContentNegotiationStrategy()\n        ));\n        configurer.defaultContentType(MediaType.APPLICATION_JSON);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "79-default-content-type",
      children: "7.9 Default Content Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n    @Override\n    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {\n        configurer\n            .defaultContentType(MediaType.APPLICATION_JSON)\n            .defaultContentTypeStrategy(request -> {\n                if (request.getRequestURI().endsWith(\"/health\"))\n                    return List.of(MediaType.APPLICATION_JSON);\n                return List.of(MediaType.APPLICATION_JSON);\n            });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-http-method-semantics",
      children: "8. HTTP Method Semantics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-get--safe-idempotent-cacheable",
      children: "8.1 GET → Safe, Idempotent, Cacheable"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.GetMapping;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class GetSemanticsController {\n\n    private final BookRepository bookRepository;\n\n    public GetSemanticsController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping\n    public List<Book> getAllBooks() { return bookRepository.findAll(); }\n\n    @GetMapping(\"/{id}\")\n    public Book getBook(@PathVariable Long id) {\n        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));\n    }\n\n    @GetMapping(\"/search\")\n    public List<Book> searchBooks(@RequestParam String author,\n            @RequestParam(required = false) BigDecimal minPrice) {\n        return bookRepository.findByAuthor(author).stream()\n            .filter(b -> minPrice == null || b.getPrice().compareTo(minPrice) >= 0)\n            .collect(Collectors.toList());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GET characteristics"
      }), ": Safe (no state modification), Idempotent (same result every time), Cacheable (browsers/proxies cache), Request body ignored."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-post--create-non-idempotent",
      children: "8.2 POST → Create, Non-Idempotent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.PostMapping;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class PostSemanticsController {\n\n    private final BookRepository bookRepository;\n\n    public PostSemanticsController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @PostMapping\n    public ResponseEntity<Book> createBook(@Valid @RequestBody Book book) {\n        Book saved = bookRepository.save(book);\n        return ResponseEntity.created(URI.create(\"/api/books/\" + saved.getId())).body(saved);\n    }\n\n    @PostMapping(\"/calculate-discount\")\n    public ResponseEntity<BigDecimal> calculateDiscount(@RequestBody Map<String, Object> request) {\n        BigDecimal price = new BigDecimal(request.get(\"price\").toString());\n        return ResponseEntity.ok(price.multiply(new BigDecimal(\"0.9\")));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "POST characteristics"
      }), ": Not safe (modifies state), Not idempotent (repeated calls create multiple resources), Not cacheable, Returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "201 Created"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Location"
      }), " header."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-put--full-replacement-idempotent",
      children: "8.3 PUT → Full Replacement, Idempotent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.PutMapping;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class PutSemanticsController {\n\n    private final BookRepository bookRepository;\n\n    public PutSemanticsController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @PutMapping(\"/{id}\")\n    public Book fullyUpdateBook(@PathVariable Long id, @Valid @RequestBody Book book) {\n        return bookRepository.findById(id)\n            .map(existing -> {\n                existing.setTitle(book.getTitle());\n                existing.setAuthor(book.getAuthor());\n                existing.setPrice(book.getPrice());\n                existing.setIsbn(book.getIsbn());\n                existing.setPublishedAt(book.getPublishedAt());\n                return bookRepository.save(existing);\n            })\n            .orElseGet(() -> {\n                book.setId(id);\n                return bookRepository.save(book);\n            });\n    }\n\n    @PutMapping(\"/upsert/{id}\")\n    public ResponseEntity<Book> upsertBook(@PathVariable Long id, @Valid @RequestBody Book book) {\n        boolean exists = bookRepository.findById(id).isPresent();\n        book.setId(id);\n        Book saved = bookRepository.save(book);\n        return exists ? ResponseEntity.ok(saved)\n                      : ResponseEntity.created(URI.create(\"/api/books/\" + id)).body(saved);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PUT characteristics"
      }), ": Not safe (modifies state), Idempotent (same call N times = same result), Client specifies entire state, Optional upsert convention."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-patch--partial-update",
      children: "8.4 PATCH → Partial Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.PatchMapping;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class PatchSemanticsController {\n\n    private final BookRepository bookRepository;\n\n    public PatchSemanticsController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @PatchMapping(\"/{id}\")\n    public Book partialUpdate(@PathVariable Long id, @RequestBody Map<String, Object> fields) {\n        return bookRepository.findById(id)\n            .map(book -> {\n                fields.forEach((key, value) -> {\n                    switch (key) {\n                        case \"title\" -> book.setTitle((String) value);\n                        case \"author\" -> book.setAuthor((String) value);\n                        case \"price\" -> book.setPrice(new BigDecimal(value.toString()));\n                        case \"isbn\" -> book.setIsbn((String) value);\n                    }\n                });\n                return bookRepository.save(book);\n            })\n            .orElseThrow(() -> new BookNotFoundException(id));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PATCH characteristics"
      }), ": Not safe (modifies state), Not necessarily idempotent, Client sends only the delta (differences), Supports JSON Patch (RFC 6902) and Merge Patch (RFC 7386) formats."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-delete--remove-idempotent",
      children: "8.5 DELETE → Remove, Idempotent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.DeleteMapping;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class DeleteSemanticsController {\n\n    private final BookRepository bookRepository;\n\n    public DeleteSemanticsController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @DeleteMapping(\"/{id}\")\n    @ResponseStatus(HttpStatus.NO_CONTENT)\n    public void deleteBook(@PathVariable Long id) {\n        boolean existed = bookRepository.findById(id).isPresent();\n        bookRepository.deleteById(id);\n        if (!existed) throw new BookNotFoundException(id);\n    }\n\n    @DeleteMapping(\"/idempotent/{id}\")\n    @ResponseStatus(HttpStatus.NO_CONTENT)\n    public void deleteBookIdempotent(@PathVariable Long id) {\n        bookRepository.deleteById(id);\n    }\n\n    @DeleteMapping(\"/conditional/{id}\")\n    public ResponseEntity<Void> conditionalDelete(\n            @PathVariable Long id, @RequestHeader(\"If-Match\") String ifMatch) {\n        return bookRepository.findById(id)\n            .map(book -> {\n                String etag = \"\\\"\" + book.hashCode() + \"\\\"\";\n                if (!etag.equals(ifMatch))\n                    return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).<Void>build();\n                bookRepository.deleteById(id);\n                return ResponseEntity.<Void>noContent().build();\n            })\n            .orElse(ResponseEntity.notFound().build());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DELETE characteristics"
      }), ": Not safe (removes resources), Idempotent (after first successful DELETE, resource is gone), Returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "204 No Content"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "404 Not Found"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-http-methods-summary",
      children: "8.6 HTTP Methods Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Safe"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Idempotent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cacheable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Request Body"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Response Body"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource(s)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Created resource"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updated resource"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial delta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updated resource"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "*PATCH idempotency depends on the patch format."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-http-status-codes",
      children: "9. HTTP Status Codes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-complete-status-code-reference",
      children: "9.1 Complete Status Code Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.http.HttpStatus;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class StatusCodeDemoController {\n\n    private final BookRepository bookRepository;\n\n    public StatusCodeDemoController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping(\"/200\")\n    @ResponseStatus(HttpStatus.OK)\n    public Book status200(@RequestParam Long id) {\n        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));\n    }\n\n    @PostMapping\n    @ResponseStatus(HttpStatus.CREATED)\n    public Book status201(@RequestBody Book book) { return bookRepository.save(book); }\n\n    @PostMapping(\"/async-import\")\n    @ResponseStatus(HttpStatus.ACCEPTED)\n    public String status202(@RequestBody List<Book> books) {\n        return \"Import queued with \" + books.size() + \" books\";\n    }\n\n    @DeleteMapping(\"/{id}\")\n    @ResponseStatus(HttpStatus.NO_CONTENT)\n    public void status204(@PathVariable Long id) { bookRepository.deleteById(id); }\n\n    @GetMapping(\"/old-path\")\n    public ResponseEntity<Void> status301() {\n        return ResponseEntity.status(HttpStatus.MOVED_PERMANENTLY)\n            .location(URI.create(\"/api/books\")).build();\n    }\n\n    @GetMapping(\"/cached\")\n    public ResponseEntity<List<Book>> status304(\n            @RequestHeader(value = \"If-None-Match\", required = false) String ifNoneMatch) {\n        List<Book> books = bookRepository.findAll();\n        String etag = \"\\\"\" + books.hashCode() + \"\\\"\";\n        if (etag.equals(ifNoneMatch))\n            return ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();\n        return ResponseEntity.ok().eTag(etag).body(books);\n    }\n\n    @GetMapping(\"/401\")\n    public ResponseEntity<String> status401() {\n        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)\n            .header(\"WWW-Authenticate\", \"Bearer realm=\\\"api\\\"\")\n            .body(\"Authentication required\");\n    }\n\n    @GetMapping(\"/403\")\n    public ResponseEntity<String> status403() {\n        return ResponseEntity.status(HttpStatus.FORBIDDEN)\n            .body(\"Insufficient permissions\");\n    }\n\n    @PostMapping(\"/409\")\n    public Book status409(@RequestBody Book book) {\n        if (bookRepository.existsByIsbn(book.getIsbn()))\n            throw new ResponseStatusException(HttpStatus.CONFLICT,\n                \"Book with ISBN \" + book.getIsbn() + \" already exists\");\n        return bookRepository.save(book);\n    }\n\n    @PostMapping(\"/422\")\n    public ResponseEntity<Book> status422(@RequestBody Book book) {\n        if (book.getPrice() != null && book.getPrice().compareTo(BigDecimal.ZERO) < 0) {\n            return ResponseEntity.unprocessableEntity().build();\n        }\n        return ResponseEntity.created(URI.create(\"/api/books/\" + bookRepository.save(book).getId()))\n            .body(book);\n    }\n\n    @GetMapping(\"/429\")\n    public ResponseEntity<String> status429() {\n        return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)\n            .header(\"Retry-After\", \"60\")\n            .body(\"Rate limit exceeded\");\n    }\n\n    @GetMapping(\"/500\")\n    public void status500() { throw new RuntimeException(\"Unexpected error\"); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-status-code-quick-reference",
      children: "9.2 Status Code Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "200 OK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Successful GET, PUT, PATCH with response body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "201 Created"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Successful POST that created a resource"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "202 Accepted"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request accepted for async processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "204 No Content"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Successful DELETE or PUT/PATCH with no body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "301 Moved Permanently"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource has a new permanent URI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "304 Not Modified"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional GET → cached version is fresh"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "400 Bad Request"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malformed syntax, missing parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "401 Unauthorized"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing or invalid authentication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "403 Forbidden"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authenticated but lacking permissions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "404 Not Found"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource does not exist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "405 Method Not Allowed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP method not supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "406 Not Acceptable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot produce requested media type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "409 Conflict"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource state conflict (e.g., duplicate)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "415 Unsupported Media Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request body format not supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "422 Unprocessable Entity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic validation failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "429 Too Many Requests"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limit exceeded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "500 Internal Server Error"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unexpected server failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "503 Service Unavailable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary overload or maintenance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-hateoas",
      children: "10. HATEOAS"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-what-is-hateoas",
      children: "10.1 What is HATEOAS?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HATEOAS (Hypermedia as the Engine of Application State) is Level 3 of the Richardson Maturity Model. Responses include links that tell clients what actions are available next, enabling discoverability."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-mavengradle-dependencies",
      children: "10.2 Maven/Gradle Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// build.gradle\nimplementation 'org.springframework.boot:spring-boot-starter-hateoas'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- pom.xml -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-hateoas</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-representationmodel--the-base-class",
      children: "10.3 RepresentationModel → The Base Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.hateoas.RepresentationModel;\nimport org.springframework.hateoas.server.core.Relation;\n\n@Relation(collectionRelation = \"books\", itemRelation = \"book\")\npublic class BookModel extends RepresentationModel<BookModel> {\n    private Long id;\n    private String isbn;\n    private String title;\n    private String author;\n    private BigDecimal price;\n\n    public BookModel() {}\n\n    public BookModel(Book book) {\n        this.id = book.getId();\n        this.isbn = book.getIsbn();\n        this.title = book.getTitle();\n        this.author = book.getAuthor();\n        this.price = book.getPrice();\n    }\n\n    public Long getId() { return id; }\n    public void setId(Long id) { this.id = id; }\n    public String getIsbn() { return isbn; }\n    public void setIsbn(String isbn) { this.isbn = isbn; }\n    public String getTitle() { return title; }\n    public void setTitle(String title) { this.title = title; }\n    public String getAuthor() { return author; }\n    public void setAuthor(String author) { this.author = author; }\n    public BigDecimal getPrice() { return price; }\n    public void setPrice(BigDecimal price) { this.price = price; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-entitymodel--single-resource",
      children: "10.4 EntityModel → Single Resource"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.hateoas.EntityModel;\nimport static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;\n\n@RestController\n@RequestMapping(\"/api/hateoas/books\")\npublic class BookHateoasController {\n\n    private final BookRepository bookRepository;\n\n    public BookHateoasController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping(\"/{id}\")\n    public EntityModel<BookModel> getBook(@PathVariable Long id) {\n        Book book = bookRepository.findById(id)\n            .orElseThrow(() -> new BookNotFoundException(id));\n\n        BookModel bookModel = new BookModel(book);\n        bookModel.add(linkTo(methodOn(BookHateoasController.class).getBook(id)).withSelfRel());\n        bookModel.add(linkTo(methodOn(BookHateoasController.class).getAllBooks()).withRel(\"books\"));\n        bookModel.add(linkTo(methodOn(BookHateoasController.class).updateBook(id, null)).withRel(\"update\"));\n        bookModel.add(linkTo(methodOn(BookHateoasController.class).deleteBook(id)).withRel(\"delete\"));\n\n        return EntityModel.of(bookModel);\n    }\n\n    // Placeholder methods for link building\n    public List<BookModel> getAllBooks() { return List.of(); }\n    public BookModel updateBook(Long id, BookModel b) { return null; }\n    public void deleteBook(Long id) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-collectionmodel--resource-collections",
      children: "10.5 CollectionModel → Resource Collections"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.hateoas.CollectionModel;\n\n@GetMapping\npublic CollectionModel<EntityModel<BookModel>> getAllBooks() {\n    List<EntityModel<BookModel>> bookModels = bookRepository.findAll().stream()\n        .map(book -> {\n            BookModel bookModel = new BookModel(book);\n            bookModel.add(linkTo(methodOn(BookHateoasController.class)\n                .getBook(book.getId())).withSelfRel());\n            return EntityModel.of(bookModel);\n        })\n        .collect(Collectors.toList());\n\n    return CollectionModel.of(bookModels,\n        linkTo(methodOn(BookHateoasController.class).getAllBooks()).withSelfRel());\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "106-link-and-webmvclinkbuilder",
      children: "10.6 Link and WebMvcLinkBuilder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.hateoas.Link;\nimport static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;\n\n@RestController\n@RequestMapping(\"/api/hateoas\")\npublic class LinkBuilderController {\n\n    @GetMapping(\"/links-demo\")\n    public CollectionModel<BookModel> linksDemo() {\n        Link selfLink = linkTo(methodOn(LinkBuilderController.class).linksDemo()).withSelfRel();\n        Link booksLink = linkTo(methodOn(BookHateoasController.class).getAllBooks()).withRel(\"books\");\n        Link classLink = linkTo(BookHateoasController.class).withRel(\"book-controller\");\n        Link specificBookLink = linkTo(methodOn(BookHateoasController.class).getBook(1L)).withRel(\"first-book\");\n        Link searchLink = Link.of(\"/api/hateoas/books{?author,minPrice}\", \"search\").withType(\"application/json\");\n        Link createLink = linkTo(methodOn(BookHateoasController.class).createBook(null)).withRel(\"create\");\n        Link customBase = Link.of(\"http://cdn.example.com/resources/books/{id}\", \"cdn\").expand(42L);\n\n        CollectionModel<BookModel> result = CollectionModel.empty();\n        result.add(selfLink, booksLink, classLink, specificBookLink, searchLink, createLink, customBase);\n        return result;\n    }\n\n    public BookModel createBook(BookModel b) { return null; }\n\n    @GetMapping(\"/dynamic/{id}\")\n    public EntityModel<BookModel> getWithDynamicLinks(@PathVariable Long id) {\n        Book book = bookRepository.findById(id)\n            .orElseThrow(() -> new BookNotFoundException(id));\n        BookModel bookModel = new BookModel(book);\n        bookModel.add(linkTo(methodOn(LinkBuilderController.class).getWithDynamicLinks(id)).withSelfRel());\n        if (canEdit(book))\n            bookModel.add(linkTo(methodOn(BookHateoasController.class).updateBook(id, null))\n                .withRel(\"edit\").withType(\"PUT\"));\n        if (canDelete(book))\n            bookModel.add(linkTo(methodOn(BookHateoasController.class).deleteBook(id)).withRel(\"delete\"));\n        return EntityModel.of(bookModel);\n    }\n\n    private boolean canEdit(Book book) { return true; }\n    private boolean canDelete(Book book) { return book.getId() > 5; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "107-pagedmodel--paginated-collections",
      children: "10.7 PagedModel → Paginated Collections"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.hateoas.PagedModel;\nimport org.springframework.hateoas.PagedModel.PageMetadata;\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.PageImpl;\nimport org.springframework.data.domain.Pageable;\n\n@GetMapping(\"/paged\")\npublic PagedModel<EntityModel<BookModel>> getPagedBooks(Pageable pageable) {\n    List<Book> allBooks = bookRepository.findAll();\n    int start = (int) pageable.getOffset();\n    int end = Math.min(start + pageable.getPageSize(), allBooks.size());\n    List<Book> pageContent = allBooks.subList(start, end);\n\n    List<EntityModel<BookModel>> bookModels = pageContent.stream()\n        .map(book -> {\n            BookModel model = new BookModel(book);\n            model.add(linkTo(methodOn(BookHateoasController.class).getBook(book.getId())).withSelfRel());\n            return EntityModel.of(model);\n        })\n        .collect(Collectors.toList());\n\n    Page<Book> bookPage = new PageImpl<>(pageContent, pageable, allBooks.size());\n    PageMetadata metadata = new PageMetadata(\n        pageable.getPageSize(), pageable.getPageNumber(),\n        bookPage.getTotalElements(), bookPage.getTotalPages());\n\n    Link selfLink = linkTo(methodOn(BookHateoasController.class).getPagedBooks(pageable)).withSelfRel();\n    Link nextLink = linkTo(methodOn(BookHateoasController.class).getPagedBooks(pageable.next())).withRel(\"next\");\n\n    return PagedModel.of(bookModels, metadata, selfLink, nextLink);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "108-representationmodelprocessor",
      children: "10.8 RepresentationModelProcessor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.hateoas.server.RepresentationModelProcessor;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class BookModelProcessor implements RepresentationModelProcessor<EntityModel<BookModel>> {\n\n    @Override\n    public EntityModel<BookModel> process(EntityModel<BookModel> model) {\n        BookModel book = model.getContent();\n        if (book != null) {\n            model.add(linkTo(methodOn(BookHateoasController.class).getBook(book.getId())).withRel(\"self\"));\n            model.add(linkTo(methodOn(BookHateoasController.class).getAllBooks()).withRel(\"collection\"));\n        }\n        return model;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "109-complete-hateoas-response-example",
      children: "10.9 Complete HATEOAS Response Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"id\": 1,\n  \"isbn\": \"978-0-13-468599-1\",\n  \"title\": \"Effective Java\",\n  \"author\": \"Joshua Bloch\",\n  \"price\": 54.99,\n  \"_links\": {\n    \"self\": { \"href\": \"http://localhost:8080/api/hateoas/books/1\" },\n    \"books\": { \"href\": \"http://localhost:8080/api/hateoas/books\" },\n    \"update\": { \"href\": \"http://localhost:8080/api/hateoas/books/1\", \"method\": \"PUT\" },\n    \"delete\": { \"href\": \"http://localhost:8080/api/hateoas/books/1\", \"method\": \"DELETE\" }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-api-versioning-strategies",
      children: "11. API Versioning Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-why-api-versioning",
      children: "11.1 Why API Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API versioning allows you to evolve your API without breaking existing clients."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "URI Path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/api/v1/books"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, explicit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Violates resource identity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Request Parameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/api/books?version=1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL pollution, caching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "X-API-Version: 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean URLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not REST-idiomatic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accept Header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Accept: application/vnd.example.v2+json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most RESTful"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex configuration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-uri-path-versioning",
      children: "11.2 URI Path Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/v1/books\")\npublic class BookControllerV1 {\n\n    private final BookRepository bookRepository;\n\n    public BookControllerV1(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping\n    public List<Book> getAllBooks() { return bookRepository.findAll(); }\n\n    @GetMapping(\"/{id}\")\n    public Book getBook(@PathVariable Long id) {\n        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));\n    }\n\n    @PostMapping\n    @ResponseStatus(HttpStatus.CREATED)\n    public Book createBook(@RequestBody Book book) { return bookRepository.save(book); }\n}\n\n@RestController\n@RequestMapping(\"/api/v2/books\")\npublic class BookControllerV2 {\n\n    private final BookRepository bookRepository;\n\n    public BookControllerV2(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping\n    public List<BookV2> getAllBooks() {\n        return bookRepository.findAll().stream().map(BookV2::new).collect(Collectors.toList());\n    }\n\n    @GetMapping(\"/{id}\")\n    public BookV2 getBook(@PathVariable Long id) {\n        return bookRepository.findById(id)\n            .map(BookV2::new)\n            .orElseThrow(() -> new BookNotFoundException(id));\n    }\n}\n\npublic class BookV2 {\n    private Long id;\n    private String isbn;\n    private String title;\n    private String author;\n    private BigDecimal price;\n    private String description;\n    private List<String> tags;\n\n    public BookV2() {}\n\n    public BookV2(Book book) {\n        this.id = book.getId();\n        this.isbn = book.getIsbn();\n        this.title = book.getTitle();\n        this.author = book.getAuthor();\n        this.price = book.getPrice();\n        this.description = \"\";\n        this.tags = List.of();\n    }\n\n    public Long getId() { return id; }\n    public void setId(Long id) { this.id = id; }\n    public String getIsbn() { return isbn; }\n    public void setIsbn(String isbn) { this.isbn = isbn; }\n    public String getTitle() { return title; }\n    public void setTitle(String title) { this.title = title; }\n    public String getAuthor() { return author; }\n    public void setAuthor(String author) { this.author = author; }\n    public BigDecimal getPrice() { return price; }\n    public void setPrice(BigDecimal price) { this.price = price; }\n    public String getDescription() { return description; }\n    public void setDescription(String d) { this.description = d; }\n    public List<String> getTags() { return tags; }\n    public void setTags(List<String> t) { this.tags = t; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-request-parameter-versioning",
      children: "11.3 Request Parameter Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/books\")\npublic class BookParamVersionController {\n\n    private final BookRepository bookRepository;\n\n    public BookParamVersionController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping\n    public List<?> getAllBooks(@RequestParam(defaultValue = \"1\") String version) {\n        return switch (version) {\n            case \"1\" -> bookRepository.findAll();\n            case \"2\" -> bookRepository.findAll().stream().map(BookV2::new).collect(Collectors.toList());\n            default -> throw new ResponseStatusException(HttpStatus.BAD_REQUEST, \"Unsupported version: \" + version);\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-custom-header-versioning",
      children: "11.4 Custom Header Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/books\")\npublic class BookHeaderVersionController {\n\n    private final BookRepository bookRepository;\n\n    public BookHeaderVersionController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping\n    public ResponseEntity<?> getAllBooks(@RequestHeader(\"X-API-Version\") String apiVersion) {\n        return switch (apiVersion) {\n            case \"1\" -> ResponseEntity.ok(bookRepository.findAll());\n            case \"2\" -> ResponseEntity.ok(\n                bookRepository.findAll().stream().map(BookV2::new).collect(Collectors.toList()));\n            default -> ResponseEntity.badRequest().body(\"Unsupported API version: \" + apiVersion);\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-accept-header-media-type-versioning",
      children: "11.5 Accept Header (Media Type) Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/books\")\npublic class BookAcceptVersionController {\n\n    private final BookRepository bookRepository;\n\n    public BookAcceptVersionController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping(produces = \"application/vnd.example.books.v1+json\")\n    public List<Book> getAllBooksV1() { return bookRepository.findAll(); }\n\n    @GetMapping(produces = \"application/vnd.example.books.v2+json\")\n    public List<BookV2> getAllBooksV2() {\n        return bookRepository.findAll().stream().map(BookV2::new).collect(Collectors.toList());\n    }\n\n    @GetMapping(path = \"/{id}\", produces = \"application/vnd.example.book.v1+json\")\n    public Book getBookV1(@PathVariable Long id) {\n        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));\n    }\n\n    @GetMapping(path = \"/{id}\", produces = \"application/vnd.example.book.v2+json\")\n    public BookV2 getBookV2(@PathVariable Long id) {\n        return bookRepository.findById(id).map(BookV2::new)\n            .orElseThrow(() -> new BookNotFoundException(id));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "116-versioning-strategy-decision-guide",
      children: "11.6 Versioning Strategy Decision Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Q: Is backwards compatibility critical?\n  Yes → Use Accept header or custom header\n  No  → Use URI path (simplest)\n\nQ: Is the API public/external?\n  Yes → Accept header versioning (most RESTful)\n  No  → URI path or parameter (simpler)\n\nQ: Do clients cache responses aggressively?\n  Yes → URI path (different URLs = different cache keys)\n  No  → Any strategy works\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-cors-cross-origin-resource-sharing",
      children: "12. CORS (Cross-Origin Resource Sharing)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-what-is-cors",
      children: "12.1 What is CORS?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CORS is a security mechanism that allows browsers to make cross-origin HTTP requests. A web page from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://localhost:3000"
      }), " cannot by default make AJAX requests to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://api.example.com"
      }), " without the server's permission."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-crossorigin--controller-level-cors",
      children: "12.2 @CrossOrigin → Controller-Level CORS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.bind.annotation.CrossOrigin;\n\n@RestController\n@RequestMapping(\"/api/books\")\n@CrossOrigin(origins = \"http://localhost:3000\")\npublic class BookController {\n\n    private final BookRepository bookRepository;\n\n    public BookController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping\n    public List<Book> getAllBooks() { return bookRepository.findAll(); }\n\n    @GetMapping(\"/{id}\")\n    @CrossOrigin(origins = {\"http://localhost:3000\", \"https://myapp.example.com\"},\n                 allowedHeaders = \"*\")\n    public Book getBook(@PathVariable Long id) {\n        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));\n    }\n\n    @PostMapping\n    @CrossOrigin(origins = \"https://admin.example.com\",\n                 methods = {RequestMethod.POST, RequestMethod.OPTIONS},\n                 allowedHeaders = {\"Content-Type\", \"Authorization\"},\n                 exposedHeaders = {\"X-Request-Id\", \"Location\"},\n                 allowCredentials = \"true\",\n                 maxAge = 3600)\n    @ResponseStatus(HttpStatus.CREATED)\n    public Book createBook(@RequestBody Book book) { return bookRepository.save(book); }\n\n    @GetMapping(\"/dev\")\n    @CrossOrigin(origins = \"*\")\n    public List<Book> getAllBooksDev() { return bookRepository.findAll(); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-crossorigin-attributes",
      children: "12.3 @CrossOrigin Attributes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "origins"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed origins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "methods"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RequestMethod[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed HTTP methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method's methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "allowedHeaders"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed request headers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "exposedHeaders"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Headers exposed to browser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "allowCredentials"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether to allow credentials"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "\"\""
            }), " (not set)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "maxAge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max age of preflight cache"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "-1"
            }), " (no cache)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-globalcorsconfiguration",
      children: "12.4 GlobalCorsConfiguration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.context.annotation.Configuration;\nimport org.springframework.web.servlet.config.annotation.CorsRegistry;\nimport org.springframework.web.servlet.config.annotation.WebMvcConfigurer;\n\n@Configuration(proxyBeanMethods = false)\npublic class WebConfig implements WebMvcConfigurer {\n\n    @Override\n    public void addCorsMappings(CorsRegistry registry) {\n        registry.addMapping(\"/api/**\")\n            .allowedOrigins(\"http://localhost:3000\", \"https://myapp.example.com\", \"https://admin.example.com\")\n            .allowedMethods(\"GET\", \"POST\", \"PUT\", \"DELETE\", \"PATCH\", \"OPTIONS\")\n            .allowedHeaders(\"Content-Type\", \"Authorization\", \"X-Request-Id\", \"X-API-Version\")\n            .exposedHeaders(\"X-Request-Id\", \"Location\", \"X-RateLimit-Remaining\", \"X-RateLimit-Reset\")\n            .allowCredentials(true)\n            .maxAge(3600);\n\n        registry.addMapping(\"/api/public/**\")\n            .allowedOrigins(\"*\")\n            .allowedMethods(\"GET\")\n            .allowedHeaders(\"*\")\n            .maxAge(1800);\n\n        registry.addMapping(\"/api/admin/**\")\n            .allowedOrigins(\"https://admin.example.com\")\n            .allowedMethods(\"GET\", \"POST\", \"PUT\", \"DELETE\")\n            .allowedHeaders(\"Content-Type\", \"Authorization\")\n            .allowCredentials(true)\n            .maxAge(300);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "125-cors-with-properties",
      children: "12.5 CORS with Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties\nspring.web.cors.allowed-origins=http://localhost:3000,https://myapp.example.com\nspring.web.cors.allowed-methods=GET,POST,PUT,DELETE,PATCH\nspring.web.cors.allowed-headers=Content-Type,Authorization\nspring.web.cors.exposed-headers=X-Request-Id,Location\nspring.web.cors.allow-credentials=true\nspring.web.cors.max-age=3600\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "126-cors-error-diagnostics",
      children: "12.6 CORS Error Diagnostics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Error: No 'Access-Control-Allow-Origin' header\n  Solution: Configure @CrossOrigin or GlobalCorsConfiguration\n\nError: Preflight request doesn't pass access control check\n  Solution: Ensure OPTIONS requests are handled (Spring does this by default)\n\nError: Cannot set 'Access-Control-Allow-Origin' more than once\n  Solution: Don't duplicate CORS config (controller + global = conflict)\n\nError: Credentials header cannot be '*'\n  Solution: When allowCredentials=true, specify exact origins, not '*'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-rest-best-practices",
      children: "13. REST Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-naming-conventions",
      children: "13.1 Naming Conventions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// NO → verbs in URLs\n@GetMapping(\"/getAllBooks\")\n@PostMapping(\"/createBook\")\n@DeleteMapping(\"/removeBookById\")\n\n// YES → nouns, plural resources\n@GetMapping(\"/api/books\")\n@PostMapping(\"/api/books\")\n@DeleteMapping(\"/api/books/{id}\")\n\n// NO → inconsistent naming\n/api/get-book\n/api/Book\n/api/booksList\n\n// YES → consistent, lowercase, kebab-case\n/api/books\n/api/book-reviews\n/api/published-authors\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-resource-hierarchy",
      children: "13.2 Resource Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api\")\npublic class HierarchicalController {\n\n    @GetMapping(\"/books\")\n    public List<Book> getBooks() { return List.of(); }\n\n    @GetMapping(\"/books/{bookId}\")\n    public Book getBook(@PathVariable Long bookId) { return null; }\n\n    @GetMapping(\"/books/{bookId}/reviews\")\n    public List<Review> getReviews(@PathVariable Long bookId) { return List.of(); }\n\n    @GetMapping(\"/books/{bookId}/reviews/{reviewId}\")\n    public Review getReview(@PathVariable Long bookId, @PathVariable Long reviewId) { return null; }\n\n    @GetMapping(\"/books/{bookId}/reviews/{reviewId}/comments\")\n    public List<Comment> getComments(@PathVariable Long reviewId) { return List.of(); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-pagination",
      children: "13.3 Pagination"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.data.domain.Page;\nimport org.springframework.data.domain.Pageable;\nimport org.springframework.data.domain.PageImpl;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class PaginationController {\n\n    private final BookRepository bookRepository;\n\n    public PaginationController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping\n    public Page<Book> getBooks(Pageable pageable) {\n        List<Book> allBooks = bookRepository.findAll();\n        int start = (int) pageable.getOffset();\n        int end = Math.min(start + pageable.getPageSize(), allBooks.size());\n        List<Book> pageContent = allBooks.subList(start, end);\n        return new PageImpl<>(pageContent, pageable, allBooks.size());\n    }\n\n    @GetMapping(\"/manual\")\n    public Map<String, Object> getBooksManual(\n            @RequestParam(defaultValue = \"0\") int page,\n            @RequestParam(defaultValue = \"20\") int size) {\n        List<Book> allBooks = bookRepository.findAll();\n        int total = allBooks.size();\n        int totalPages = (int) Math.ceil((double) total / size);\n        int start = page * size;\n        int end = Math.min(start + size, total);\n        List<Book> content = allBooks.subList(start, end);\n\n        Map<String, Object> response = new LinkedHashMap<>();\n        response.put(\"content\", content);\n        response.put(\"page\", page);\n        response.put(\"size\", size);\n        response.put(\"totalElements\", total);\n        response.put(\"totalPages\", totalPages);\n        response.put(\"first\", page == 0);\n        response.put(\"last\", page >= totalPages - 1);\n        return response;\n    }\n\n    @GetMapping(\"/cursor\")\n    public Map<String, Object> getBooksCursor(\n            @RequestParam(required = false) Long after,\n            @RequestParam(defaultValue = \"20\") int limit) {\n        List<Book> allBooks = bookRepository.findAll();\n        int startIndex = 0;\n        if (after != null) {\n            for (int i = 0; i < allBooks.size(); i++) {\n                if (allBooks.get(i).getId().equals(after)) { startIndex = i + 1; break; }\n            }\n        }\n        int endIndex = Math.min(startIndex + limit, allBooks.size());\n        List<Book> pageContent = allBooks.subList(startIndex, endIndex);\n        Long nextCursor = endIndex < allBooks.size() ? allBooks.get(endIndex - 1).getId() : null;\n\n        Map<String, Object> response = new LinkedHashMap<>();\n        response.put(\"content\", pageContent);\n        response.put(\"nextCursor\", nextCursor);\n        response.put(\"hasMore\", nextCursor != null);\n        response.put(\"limit\", limit);\n        return response;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "134-filtering",
      children: "13.4 Filtering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/books\")\npublic class FilteringController {\n\n    private final BookRepository bookRepository;\n\n    public FilteringController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping\n    public List<Book> getBooks(\n            @RequestParam(required = false) String author,\n            @RequestParam(required = false) BigDecimal minPrice,\n            @RequestParam(required = false) BigDecimal maxPrice,\n            @RequestParam(required = false) String title) {\n        return bookRepository.findAll().stream()\n            .filter(b -> author == null || b.getAuthor().toLowerCase().contains(author.toLowerCase()))\n            .filter(b -> minPrice == null || b.getPrice().compareTo(minPrice) >= 0)\n            .filter(b -> maxPrice == null || b.getPrice().compareTo(maxPrice) <= 0)\n            .filter(b -> title == null || b.getTitle().toLowerCase().contains(title.toLowerCase()))\n            .collect(Collectors.toList());\n    }\n\n    @GetMapping(\"/filter\")\n    public List<Book> getBooksWithFilter(BookFilter filter) {\n        return bookRepository.findAll().stream()\n            .filter(filter::matches)\n            .collect(Collectors.toList());\n    }\n}\n\npublic class BookFilter {\n    private String author;\n    private BigDecimal minPrice;\n    private BigDecimal maxPrice;\n    private String title;\n\n    public boolean matches(Book book) {\n        boolean matchAuthor = author == null || book.getAuthor().toLowerCase().contains(author.toLowerCase());\n        boolean matchMinPrice = minPrice == null || book.getPrice().compareTo(minPrice) >= 0;\n        boolean matchMaxPrice = maxPrice == null || book.getPrice().compareTo(maxPrice) <= 0;\n        boolean matchTitle = title == null || book.getTitle().toLowerCase().contains(title.toLowerCase());\n        return matchAuthor && matchMinPrice && matchMaxPrice && matchTitle;\n    }\n\n    public String getAuthor() { return author; }\n    public void setAuthor(String a) { this.author = a; }\n    public BigDecimal getMinPrice() { return minPrice; }\n    public void setMinPrice(BigDecimal p) { this.minPrice = p; }\n    public BigDecimal getMaxPrice() { return maxPrice; }\n    public void setMaxPrice(BigDecimal p) { this.maxPrice = p; }\n    public String getTitle() { return title; }\n    public void setTitle(String t) { this.title = t; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "135-sorting",
      children: "13.5 Sorting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.data.domain.Sort;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class SortingController {\n\n    private final BookRepository bookRepository;\n\n    public SortingController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping(\"/sorted\")\n    public List<Book> getBooksSorted(\n            @RequestParam(defaultValue = \"id\") String sortBy,\n            @RequestParam(defaultValue = \"asc\") String sortDirection) {\n        Comparator<Book> comparator = switch (sortBy) {\n            case \"title\" -> Comparator.comparing(Book::getTitle);\n            case \"author\" -> Comparator.comparing(Book::getAuthor);\n            case \"price\" -> Comparator.comparing(Book::getPrice);\n            default -> Comparator.comparing(Book::getId);\n        };\n        if (\"desc\".equalsIgnoreCase(sortDirection)) comparator = comparator.reversed();\n        return bookRepository.findAll().stream().sorted(comparator).collect(Collectors.toList());\n    }\n\n    @GetMapping(\"/sort-multi\")\n    public List<Book> getBooksMultiSort(@RequestParam(required = false) String sort) {\n        if (sort == null) return bookRepository.findAll();\n        String[] parts = sort.split(\",\");\n        String field = parts[0];\n        boolean asc = parts.length < 2 || \"asc\".equalsIgnoreCase(parts[1]);\n        Comparator<Book> comparator = switch (field) {\n            case \"title\" -> Comparator.comparing(Book::getTitle);\n            case \"author\" -> Comparator.comparing(Book::getAuthor);\n            case \"price\" -> Comparator.comparing(Book::getPrice);\n            default -> Comparator.comparing(Book::getId);\n        };\n        if (!asc) comparator = comparator.reversed();\n        final Comparator<Book> finalComparator = comparator;\n        return bookRepository.findAll().stream().sorted(finalComparator).collect(Collectors.toList());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "136-partial-responses-field-selection",
      children: "13.6 Partial Responses (Field Selection)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/books\")\npublic class PartialResponseController {\n\n    private final BookRepository bookRepository;\n\n    public PartialResponseController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping(\"/{id}\")\n    public Map<String, Object> getBookPartial(@PathVariable Long id,\n            @RequestParam(required = false) String fields) {\n        Book book = bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));\n        Map<String, Object> response = new LinkedHashMap<>();\n\n        if (fields == null || fields.isBlank()) {\n            response.put(\"id\", book.getId());\n            response.put(\"isbn\", book.getIsbn());\n            response.put(\"title\", book.getTitle());\n            response.put(\"author\", book.getAuthor());\n            response.put(\"price\", book.getPrice());\n        } else {\n            Set<String> requestedFields = Set.of(fields.split(\",\"));\n            if (requestedFields.contains(\"id\")) response.put(\"id\", book.getId());\n            if (requestedFields.contains(\"isbn\")) response.put(\"isbn\", book.getIsbn());\n            if (requestedFields.contains(\"title\")) response.put(\"title\", book.getTitle());\n            if (requestedFields.contains(\"author\")) response.put(\"author\", book.getAuthor());\n            if (requestedFields.contains(\"price\")) response.put(\"price\", book.getPrice());\n        }\n        return response;\n    }\n\n    @GetMapping(\"/json-view/{id}\")\n    @JsonView(Views.Summary.class)\n    public Book getBookSummary(@PathVariable Long id) {\n        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));\n    }\n\n    @GetMapping(\"/json-view/{id}/details\")\n    @JsonView(Views.Detailed.class)\n    public Book getBookDetailed(@PathVariable Long id) {\n        return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));\n    }\n}\n\npublic class Views {\n    public static class Summary {}\n    public static class Detailed extends Summary {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "137-etags-for-conditional-requests",
      children: "13.7 ETags for Conditional Requests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.web.context.request.WebRequest;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class ETagController {\n\n    private final BookRepository bookRepository;\n\n    public ETagController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<Book> getBookWithETag(@PathVariable Long id, WebRequest webRequest) {\n        return bookRepository.findById(id)\n            .map(book -> {\n                String etag = \"\\\"\" + Integer.toHexString(book.hashCode()) + \"\\\"\";\n                if (webRequest.checkNotModified(etag))\n                    return ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();\n                return ResponseEntity.ok().eTag(etag)\n                    .cacheControl(org.springframework.http.CacheControl.maxAge(java.time.Duration.ofHours(1)))\n                    .body(book);\n            })\n            .orElse(ResponseEntity.notFound().build());\n    }\n\n    @GetMapping\n    public ResponseEntity<List<Book>> getAllBooksETag(WebRequest webRequest) {\n        List<Book> books = bookRepository.findAll();\n        String etag = \"\\\"\" + Integer.toHexString(books.hashCode()) + \"\\\"\";\n        if (webRequest.checkNotModified(etag))\n            return ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();\n        return ResponseEntity.ok().eTag(etag).body(books);\n    }\n\n    @GetMapping(\"/weak\")\n    public ResponseEntity<List<Book>> getAllBooksWeakETag() {\n        List<Book> books = bookRepository.findAll();\n        String etag = \"W/\\\"\" + books.size() + \"-\" + books.stream().mapToLong(Book::getId).sum() + \"\\\"\";\n        return ResponseEntity.ok().eTag(etag).body(books);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "138-idempotency-key-support",
      children: "13.8 Idempotency Key Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/books\")\npublic class IdempotencyController {\n\n    private final Map<String, Book> idempotencyStore = new ConcurrentHashMap<>();\n    private final BookRepository bookRepository;\n\n    public IdempotencyController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @PostMapping\n    public ResponseEntity<Book> createBook(\n            @RequestBody Book book,\n            @RequestHeader(\"Idempotency-Key\") String idempotencyKey) {\n        Book existing = idempotencyStore.get(idempotencyKey);\n        if (existing != null)\n            return ResponseEntity.ok().header(\"X-Idempotent-Replay\", \"true\").body(existing);\n\n        Book saved = bookRepository.save(book);\n        idempotencyStore.put(idempotencyKey, saved);\n        return ResponseEntity.created(URI.create(\"/api/books/\" + saved.getId())).body(saved);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "139-bulk-operations",
      children: "13.9 Bulk Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/books\")\npublic class BulkController {\n\n    private final BookRepository bookRepository;\n\n    public BulkController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @PostMapping(\"/bulk\")\n    public ResponseEntity<List<Book>> createBooks(@RequestBody List<Book> books) {\n        List<Book> saved = books.stream().map(bookRepository::save).collect(Collectors.toList());\n        return ResponseEntity.created(URI.create(\"/api/books/bulk\")).body(saved);\n    }\n\n    @GetMapping(\"/batch\")\n    public List<Book> getBooksByIds(@RequestParam List<Long> ids) {\n        return ids.stream()\n            .map(bookRepository::findById).filter(Optional::isPresent).map(Optional::get)\n            .collect(Collectors.toList());\n    }\n\n    @DeleteMapping(\"/bulk\")\n    @ResponseStatus(HttpStatus.NO_CONTENT)\n    public void deleteBooks(@RequestBody List<Long> ids) { ids.forEach(bookRepository::deleteById); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-pagination--sorting-with-pageable",
      children: "14. Pagination & Sorting with Pageable"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "141-pageable-and-page-basics",
      children: "14.1 Pageable and Page Basics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Data provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Pageable"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Page"
      }), " for standard pagination:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.data.domain.Pageable;\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.PageImpl;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class PageableController {\n\n    private final BookRepository bookRepository;\n\n    public PageableController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping\n    public Page<Book> getBooks(Pageable pageable) {\n        List<Book> allBooks = bookRepository.findAll();\n        int pageSize = pageable.getPageSize();\n        int currentPage = pageable.getPageNumber();\n        int startItem = currentPage * pageSize;\n\n        List<Book> list;\n        if (allBooks.size() < startItem) list = List.of();\n        else {\n            int toIndex = Math.min(startItem + pageSize, allBooks.size());\n            list = allBooks.subList(startItem, toIndex);\n        }\n\n        if (pageable.getSort().isSorted()) {\n            Comparator<Book> comparator = buildComparator(pageable.getSort());\n            list = list.stream().sorted(comparator).collect(Collectors.toList());\n        }\n\n        return new PageImpl<>(list, pageable, allBooks.size());\n    }\n\n    private Comparator<Book> buildComparator(Sort sort) {\n        List<Comparator<Book>> comparators = new ArrayList<>();\n        sort.forEach(order -> {\n            Comparator<Book> comp = switch (order.getProperty()) {\n                case \"title\" -> Comparator.comparing(Book::getTitle);\n                case \"author\" -> Comparator.comparing(Book::getAuthor);\n                case \"price\" -> Comparator.comparing(Book::getPrice);\n                case \"id\" -> Comparator.comparing(Book::getId);\n                default -> Comparator.comparing(Book::getId);\n            };\n            if (order.isDescending()) comp = comp.reversed();\n            comparators.add(comp);\n        });\n        return comparators.stream().reduce(Comparator::thenComparing).orElse((a, b) -> 0);\n    }\n\n    @GetMapping(\"/page-info\")\n    public Map<String, Object> getPageInfo(Pageable pageable) {\n        Map<String, Object> info = new LinkedHashMap<>();\n        info.put(\"page\", pageable.getPageNumber());\n        info.put(\"size\", pageable.getPageSize());\n        info.put(\"offset\", pageable.getOffset());\n        info.put(\"sort\", pageable.getSort().toString());\n        info.put(\"isPaged\", pageable.isPaged());\n        info.put(\"isUnpaged\", pageable.isUnpaged());\n        return info;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "142-pageabledefault",
      children: "14.2 @PageableDefault"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.data.web.PageableDefault;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class PageableDefaultController {\n\n    private final BookRepository bookRepository;\n\n    public PageableDefaultController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping\n    public Page<Book> getBooks(\n            @PageableDefault(page = 0, size = 20, sort = \"id\", direction = Sort.Direction.ASC)\n            Pageable pageable) {\n        List<Book> allBooks = bookRepository.findAll();\n        int start = (int) pageable.getOffset();\n        int end = Math.min(start + pageable.getPageSize(), allBooks.size());\n        List<Book> pageContent = allBooks.subList(start, end);\n        return new PageImpl<>(pageContent, pageable, allBooks.size());\n    }\n\n    @GetMapping(\"/small\")\n    public Page<Book> getBooksSmall(@PageableDefault(size = 5) Pageable pageable) {\n        return getBooks(pageable);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "143-sort-parameter",
      children: "14.3 Sort Parameter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.data.domain.Sort;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class SortController {\n\n    private final BookRepository bookRepository;\n\n    public SortController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping\n    public List<Book> getBooks(Sort sort) {\n        List<Book> allBooks = bookRepository.findAll();\n        if (!sort.isSorted()) return allBooks;\n\n        Comparator<Book> comparator = null;\n        for (Sort.Order order : sort) {\n            Comparator<Book> fieldComp = switch (order.getProperty()) {\n                case \"title\" -> Comparator.comparing(Book::getTitle);\n                case \"author\" -> Comparator.comparing(Book::getAuthor);\n                case \"price\" -> Comparator.comparing(Book::getPrice);\n                case \"id\" -> Comparator.comparing(Book::getId);\n                default -> Comparator.comparing(Book::getId);\n            };\n            if (order.isDescending()) fieldComp = fieldComp.reversed();\n            comparator = comparator != null ? comparator.thenComparing(fieldComp) : fieldComp;\n        }\n\n        final Comparator<Book> finalComparator = comparator;\n        return finalComparator != null\n            ? allBooks.stream().sorted(finalComparator).collect(Collectors.toList())\n            : allBooks;\n    }\n\n    @GetMapping(\"/sort-demo\")\n    public Map<String, Object> sortDemo(@RequestParam(defaultValue = \"id,asc\") String[] sort) {\n        List<Sort.Order> orders = new ArrayList<>();\n        for (String s : sort) {\n            String[] parts = s.split(\",\");\n            String property = parts[0];\n            Sort.Direction direction = parts.length > 1\n                ? Sort.Direction.fromString(parts[1])\n                : Sort.Direction.ASC;\n            orders.add(new Sort.Order(direction, property));\n        }\n        Sort sortObj = Sort.by(orders);\n\n        Map<String, Object> result = new LinkedHashMap<>();\n        result.put(\"sort\", sortObj.toString());\n        return result;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "144-custom-pagination-response",
      children: "14.4 Custom Pagination Response"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/books\")\npublic class CustomPaginationController {\n\n    private final BookRepository bookRepository;\n\n    public CustomPaginationController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @GetMapping(\"/custom\")\n    public PaginatedResponse<Book> getBooksCustom(\n            @RequestParam(defaultValue = \"0\") int page,\n            @RequestParam(defaultValue = \"20\") int size,\n            @RequestParam(defaultValue = \"id\") String sortBy,\n            @RequestParam(defaultValue = \"asc\") String sortDir) {\n\n        List<Book> allBooks = bookRepository.findAll();\n        Comparator<Book> comparator = switch (sortBy) {\n            case \"title\" -> Comparator.comparing(Book::getTitle);\n            case \"author\" -> Comparator.comparing(Book::getAuthor);\n            case \"price\" -> Comparator.comparing(Book::getPrice);\n            default -> Comparator.comparing(Book::getId);\n        };\n        if (\"desc\".equalsIgnoreCase(sortDir)) comparator = comparator.reversed();\n\n        List<Book> sorted = allBooks.stream().sorted(comparator).collect(Collectors.toList());\n        int total = sorted.size();\n        int totalPages = (int) Math.ceil((double) total / size);\n        int start = page * size;\n        int end = Math.min(start + size, total);\n        List<Book> content = start < total ? sorted.subList(start, end) : List.of();\n\n        return new PaginatedResponse<>(content, page, size, total, totalPages,\n            page == 0, page >= totalPages - 1);\n    }\n}\n\nclass PaginatedResponse<T> {\n    private final List<T> content;\n    private final int page;\n    private final int size;\n    private final long totalElements;\n    private final int totalPages;\n    private final boolean first;\n    private final boolean last;\n\n    public PaginatedResponse(List<T> content, int page, int size, long totalElements,\n                              int totalPages, boolean first, boolean last) {\n        this.content = content;\n        this.page = page;\n        this.size = size;\n        this.totalElements = totalElements;\n        this.totalPages = totalPages;\n        this.first = first;\n        this.last = last;\n    }\n\n    public List<T> getContent() { return content; }\n    public int getPage() { return page; }\n    public int getSize() { return size; }\n    public long getTotalElements() { return totalElements; }\n    public int getTotalPages() { return totalPages; }\n    public boolean isFirst() { return first; }\n    public boolean isLast() { return last; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-complete-rest-controller-example",
      children: "15. Complete REST Controller Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production-style REST controller incorporating all patterns:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.restapi.controller;\n\nimport com.example.restapi.exception.BookNotFoundException;\nimport com.example.restapi.model.Book;\nimport com.example.restapi.repository.BookRepository;\nimport jakarta.validation.Valid;\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.PageImpl;\nimport org.springframework.data.domain.Pageable;\nimport org.springframework.data.domain.Sort;\nimport org.springframework.data.web.PageableDefault;\nimport org.springframework.hateoas.CollectionModel;\nimport org.springframework.hateoas.EntityModel;\nimport org.springframework.hateoas.Link;\nimport org.springframework.hateoas.PagedModel;\nimport org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.MediaType;\nimport org.springframework.http.ProblemDetail;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\nimport org.springframework.web.context.request.WebRequest;\n\nimport java.math.BigDecimal;\nimport java.net.URI;\nimport java.time.Instant;\nimport java.util.*;\nimport java.util.stream.Collectors;\n\n@RestController\n@RequestMapping(\"/api/books\")\npublic class CompleteBookController {\n\n    private final BookRepository bookRepository;\n\n    public CompleteBookController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    // GET /api/books → List all books (paginated)\n    @GetMapping\n    public ResponseEntity<PagedModel<EntityModel<Book>>> getAllBooks(\n            @PageableDefault(page = 0, size = 20, sort = \"id\", direction = Sort.Direction.ASC)\n            Pageable pageable, WebRequest webRequest) {\n\n        List<Book> allBooks = bookRepository.findAll();\n        int start = (int) pageable.getOffset();\n        int end = Math.min(start + pageable.getPageSize(), allBooks.size());\n        List<Book> pageContent = allBooks.subList(start, end);\n\n        List<EntityModel<Book>> bookModels = pageContent.stream()\n            .map(book -> EntityModel.of(book,\n                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(CompleteBookController.class)\n                    .getBook(book.getId(), webRequest)).withSelfRel(),\n                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(CompleteBookController.class)\n                    .getAllBooks(pageable, webRequest)).withRel(\"collection\")))\n            .collect(Collectors.toList());\n\n        long totalElements = allBooks.size();\n        PagedModel.PageMetadata metadata = new PagedModel.PageMetadata(\n            pageable.getPageSize(), pageable.getPageNumber(), totalElements);\n\n        PagedModel<EntityModel<Book>> pagedModel = PagedModel.of(bookModels, metadata);\n        if (!pageable.isUnpaged()) {\n            pagedModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(\n                CompleteBookController.class).getAllBooks(pageable, webRequest)).withSelfRel());\n            if (pageable.getPageNumber() > 0) {\n                Pageable prev = pageable.previousOrFirst();\n                pagedModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(\n                    CompleteBookController.class).getAllBooks(prev, webRequest)).withRel(\"prev\"));\n            }\n            Pageable next = pageable.next();\n            if (start + pageable.getPageSize() < totalElements) {\n                pagedModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(\n                    CompleteBookController.class).getAllBooks(next, webRequest)).withRel(\"next\"));\n            }\n        }\n\n        return ResponseEntity.ok().body(pagedModel);\n    }\n\n    // GET /api/books/{id} → Get a single book\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<EntityModel<Book>> getBook(@PathVariable Long id, WebRequest webRequest) {\n        return bookRepository.findById(id)\n            .map(book -> {\n                String etag = \"\\\"\" + Integer.toHexString(book.hashCode()) + \"\\\"\";\n                if (webRequest.checkNotModified(etag))\n                    return ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();\n\n                EntityModel<Book> entityModel = EntityModel.of(book);\n                entityModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(\n                    CompleteBookController.class).getBook(id, webRequest)).withSelfRel());\n                entityModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(\n                    CompleteBookController.class).getAllBooks(Pageable.unpaged(), webRequest))\n                    .withRel(\"books\"));\n\n                return ResponseEntity.ok().eTag(etag)\n                    .lastModified(book.getUpdatedAt().toInstant(java.time.ZoneOffset.UTC).toEpochMilli())\n                    .body(entityModel);\n            })\n            .orElse(ResponseEntity.notFound().build());\n    }\n\n    // POST /api/books → Create a new book\n    @PostMapping\n    public ResponseEntity<EntityModel<Book>> createBook(@Valid @RequestBody Book book) {\n        if (bookRepository.existsByIsbn(book.getIsbn())) {\n            ProblemDetail problem = ProblemDetail.forStatusAndDetail(\n                HttpStatus.CONFLICT, \"Book with ISBN \" + book.getIsbn() + \" already exists\");\n            problem.setTitle(\"Duplicate Resource\");\n            problem.setProperty(\"isbn\", book.getIsbn());\n            return ResponseEntity.status(HttpStatus.CONFLICT)\n                .contentType(MediaType.APPLICATION_PROBLEM_JSON).build();\n        }\n        if (book.getPrice() != null && book.getPrice().compareTo(BigDecimal.ZERO) < 0) {\n            ProblemDetail problem = ProblemDetail.forStatusAndDetail(\n                HttpStatus.UNPROCESSABLE_ENTITY, \"Price must be non-negative\");\n            return ResponseEntity.unprocessableEntity()\n                .contentType(MediaType.APPLICATION_PROBLEM_JSON).build();\n        }\n\n        Book saved = bookRepository.save(book);\n        EntityModel<Book> entityModel = EntityModel.of(saved);\n        entityModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(\n            CompleteBookController.class).getBook(saved.getId(), null)).withSelfRel());\n        entityModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(\n            CompleteBookController.class).getAllBooks(Pageable.unpaged(), null)).withRel(\"books\"));\n\n        return ResponseEntity.created(URI.create(\"/api/books/\" + saved.getId())).body(entityModel);\n    }\n\n    // PUT /api/books/{id} → Full replacement\n    @PutMapping(\"/{id}\")\n    public ResponseEntity<EntityModel<Book>> updateBook(@PathVariable Long id,\n                                                         @Valid @RequestBody Book book) {\n        return bookRepository.findById(id)\n            .map(existing -> {\n                existing.setTitle(book.getTitle());\n                existing.setAuthor(book.getAuthor());\n                existing.setPrice(book.getPrice());\n                existing.setIsbn(book.getIsbn());\n                existing.setPublishedAt(book.getPublishedAt());\n                Book saved = bookRepository.save(existing);\n\n                EntityModel<Book> entityModel = EntityModel.of(saved);\n                entityModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(\n                    CompleteBookController.class).getBook(id, null)).withSelfRel());\n                return ResponseEntity.ok(entityModel);\n            })\n            .orElse(ResponseEntity.notFound().build());\n    }\n\n    // PATCH /api/books/{id} → Partial update\n    @PatchMapping(\"/{id}\")\n    public ResponseEntity<EntityModel<Book>> partialUpdateBook(@PathVariable Long id,\n                                                                @RequestBody Map<String, Object> updates) {\n        return bookRepository.findById(id)\n            .map(book -> {\n                updates.forEach((key, value) -> {\n                    switch (key) {\n                        case \"title\" -> book.setTitle((String) value);\n                        case \"author\" -> book.setAuthor((String) value);\n                        case \"price\" -> book.setPrice(value instanceof Number\n                            ? BigDecimal.valueOf(((Number) value).doubleValue())\n                            : new BigDecimal(value.toString()));\n                        case \"isbn\" -> book.setIsbn((String) value);\n                    }\n                });\n                Book saved = bookRepository.save(book);\n                EntityModel<Book> entityModel = EntityModel.of(saved);\n                entityModel.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(\n                    CompleteBookController.class).getBook(id, null)).withSelfRel());\n                return ResponseEntity.ok(entityModel);\n            })\n            .orElse(ResponseEntity.notFound().build());\n    }\n\n    // DELETE /api/books/{id} → Delete a book\n    @DeleteMapping(\"/{id}\")\n    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {\n        return bookRepository.findById(id)\n            .map(book -> {\n                bookRepository.deleteById(id);\n                return ResponseEntity.noContent()\n                    .header(\"X-Deleted-At\", Instant.now().toString()).build();\n            })\n            .orElse(ResponseEntity.notFound().build());\n    }\n\n    // GET /api/books/search → Search with filters\n    @GetMapping(\"/search\")\n    public ResponseEntity<List<Book>> searchBooks(\n            @RequestParam(required = false) String author,\n            @RequestParam(required = false) String title,\n            @RequestParam(required = false) BigDecimal minPrice,\n            @RequestParam(required = false) BigDecimal maxPrice,\n            @RequestParam(defaultValue = \"id\") String sortBy,\n            @RequestParam(defaultValue = \"asc\") String sortDir) {\n\n        List<Book> results = bookRepository.findAll().stream()\n            .filter(b -> author == null || b.getAuthor().toLowerCase().contains(author.toLowerCase()))\n            .filter(b -> title == null || b.getTitle().toLowerCase().contains(title.toLowerCase()))\n            .filter(b -> minPrice == null || b.getPrice().compareTo(minPrice) >= 0)\n            .filter(b -> maxPrice == null || b.getPrice().compareTo(maxPrice) <= 0)\n            .sorted(getComparator(sortBy, sortDir))\n            .collect(Collectors.toList());\n        return ResponseEntity.ok(results);\n    }\n\n    @GetMapping(\"/count\")\n    public ResponseEntity<Map<String, Long>> countBooks() {\n        return ResponseEntity.ok(Map.of(\"count\", bookRepository.count()));\n    }\n\n    private Comparator<Book> getComparator(String sortBy, String sortDir) {\n        Comparator<Book> comparator = switch (sortBy) {\n            case \"title\" -> Comparator.comparing(Book::getTitle);\n            case \"author\" -> Comparator.comparing(Book::getAuthor);\n            case \"price\" -> Comparator.comparing(Book::getPrice);\n            default -> Comparator.comparing(Book::getId);\n        };\n        return \"desc\".equalsIgnoreCase(sortDir) ? comparator.reversed() : comparator;\n    }\n}\n"
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
            children: "@RestController"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESTful web service endpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Controller + @ResponseBody"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST API controllers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ResponseEntity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full HTTP response control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status code, headers, body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-grained response control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HATEOAS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hypermedia-driven API responses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Links guide API navigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discoverable REST APIs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CORS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-Origin Resource Sharing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser-based access control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frontend-backend separation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL path, header, or query param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward compatibility strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evolution of public APIs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CRUD Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status Codes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Idempotent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK, 404 Not Found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "201 Created, 400 Bad Request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update/Replace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK, 204 No Content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial Update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK, 204 No Content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "204 No Content, 404 Not Found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
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
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Simple CRUD"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complex Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event-Driven"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reactive"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@RestController"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain controllers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thin event wrappers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebFlux functional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HATEOAS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Useful for navigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@ControllerAdvice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic error handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain-specific exceptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebFlux error handling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which HTTP method should be used for resource creation?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) GET"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) POST"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) PUT"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) DELETE"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) POST.** POST creates a new resource. PUT is for full replacement and is idempotent.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ResponseEntity provide beyond @ResponseBody?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Faster serialization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Control over HTTP status code, headers, and body"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Built-in validation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Swagger documentation"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Control over HTTP status code, headers, and body.** ResponseEntity is a full HTTP response object offering fine-grained control.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does HATEOAS benefit REST API clients?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Reduces payload size"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Provides navigable links with responses"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Enables caching"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Adds security"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Provides navigable links with responses.** HATEOAS embeds related resource links so clients discover the API through hypermedia.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This chapter covered REST API development with Spring MVC, beginning with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RestController"
      }), " annotation and its composition from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Controller"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ResponseBody"
      }), ". You learned how ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RequestMapping"
      }), " maps HTTP requests to handler methods using attributes like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "method"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "path"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "params"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "headers"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "consumes"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "produces"
      }), ", along with its composed annotations ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@GetMapping"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PostMapping"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PutMapping"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@DeleteMapping"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PatchMapping"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For request handling, we explored ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PathVariable"
      }), " for URI template variables, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RequestParam"
      }), " for query parameters, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RequestHeader"
      }), " for HTTP headers, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RequestBody"
      }), " for deserializing request bodies, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RequestAttribute"
      }), " for request-scoped attributes, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@MatrixVariable"
      }), " for matrix parameters in URI segments."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Response handling included ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ResponseStatus"
      }), " for setting HTTP status codes, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResponseEntity"
      }), " for full control over status, headers, and body, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResponseStatusException"
      }), " for programmatic error responses, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HttpHeaders"
      }), " for building custom response headers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Content negotiation was covered through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ContentNegotiationConfigurer"
      }), ", supporting multiple strategies including Accept header, file extension, query parameter, and custom parameter approaches."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We examined HTTP method semantics → the safety of GET, the non-idempotent creation nature of POST, the full-replacement idempotency of PUT, the partial update semantics of PATCH, and the removal idempotency of DELETE. We then mapped these methods to appropriate HTTP status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity, and 500 Internal Server Error."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HATEOAS was introduced as Level 3 of the Richardson Maturity Model, using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RepresentationModel"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EntityModel"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CollectionModel"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Link"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WebMvcLinkBuilder"
      }), " to create self-descriptive responses with discoverable navigation links."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API versioning strategies included URI path versioning, request parameter versioning, custom header versioning, and Accept header (media type) versioning, each with different trade-offs between simplicity, RESTfulness, and cache compatibility."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CORS configuration was covered at both the controller level with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@CrossOrigin"
      }), " and the global level with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GlobalCorsConfiguration"
      }), ", allowing fine-grained control over origins, methods, headers, credentials, and preflight caching."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "REST best practices were demonstrated for noun-based naming conventions, resource hierarchies, pagination (offset-based and cursor-based), filtering, sorting, partial responses via field selection, ETags for conditional requests, idempotency keys, and bulk operations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Finally, Spring Data's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Pageable"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Page"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Sort"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PagedModel"
      }), " were used to implement standard pagination and sorting, with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PageableDefault"
      }), " setting sensible defaults and custom pagination DTOs providing flexible response formats."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-basic-rest-controller",
      children: "Exercise 1: Basic REST Controller"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RestController"
      }), " for managing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Author"
      }), " resources with the following endpoints:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "GET /api/authors"
        }), " → List all authors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "GET /api/authors/{id}"
        }), " → Get a single author"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "POST /api/authors"
        }), " → Create a new author"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "PUT /api/authors/{id}"
        }), " → Update an author"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "DELETE /api/authors/{id}"
        }), " → Delete an author"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use appropriate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ResponseStatus"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResponseEntity"
      }), " return types. Return 201 for creation, 204 for deletion, and 404 when not found."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-request-parameter-handling",
      children: "Exercise 2: Request Parameter Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extend the books API to support:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Filtering by author, publication year, and minimum rating"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pagination with configurable page size (default 20)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sorting by title, author, or price in ascending or descending order"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RequestParam"
      }), " with appropriate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "required"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "defaultValue"
      }), " attributes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-error-handling",
      children: "Exercise 3: Error Handling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RestControllerAdvice"
      }), " that handles:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BookNotFoundException"
        }), " → 404 with a structured error response"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MethodArgumentNotValidException"
        }), " → 400 with field-level validation errors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "HttpMessageNotReadableException"
        }), " → 400 with descriptive parsing error"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Any unhandled ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exception"
        }), " → 500 with a generic error response"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Include timestamp, status, error, message, and path fields."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-hateoas",
      children: "Exercise 4: HATEOAS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add HATEOAS links to the books API:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each single book response should include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "self"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "collection"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "delete"
        }), " links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The collection response should include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "self"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "first"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "next"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prev"
        }), " (when applicable)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link relations should use standard IANA names where possible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-content-negotiation",
      children: "Exercise 5: Content Negotiation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure the books API to support:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["JSON (default) via the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Accept"
        }), " header"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["XML when the client sends ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Accept: application/xml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A custom format via the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?format=yaml"
        }), " query parameter"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ContentNegotiationConfigurer"
      }), " in a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Configuration"
      }), " class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6-cors-configuration",
      children: "Exercise 6: CORS Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Your books API needs to support a frontend running on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://localhost:4200"
      }), ". Configure CORS to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Allow requests from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://localhost:4200"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://books.example.com"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allow GET, POST, PUT, DELETE, and PATCH methods"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Allow the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Authorization"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Content-Type"
        }), " headers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Expose the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "X-Total-Count"
        }), " header for pagination"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache preflight responses for 1 hour"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7-api-versioning",
      children: "Exercise 7: API Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement two versions of the books API:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "v1"
        }), ": Returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{ id, title, author, price }"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "v2"
        }), ": Returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{ id, title, author, price, description, tags }"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement using URI path versioning (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/api/v1/books"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/api/v2/books"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8-pagination-with-spring-data",
      children: "Exercise 8: Pagination with Spring Data"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Pageable"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PageableDefault"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create an endpoint that accepts pagination parameters"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Page<Book>"
        }), " with proper ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PageMetadata"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Support sorting by multiple fields: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?sort=author,asc&sort=title,desc"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add navigation links (first, prev, next, last) to the response"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9-complete-rest-service",
      children: "Exercise 9: Complete REST Service"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a complete REST service for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Customer"
      }), " management:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Customer model: id, name, email, phone, createdAt, updatedAt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full CRUD with proper HTTP methods and status codes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Input validation using Jakarta Bean Validation annotations"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Global error handling via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RestControllerAdvice"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pagination, sorting, and filtering support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HATEOAS links on all responses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom exception classes for not-found and conflict scenarios"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Idempotency key support on the create endpoint"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10-status-code-analysis",
      children: "Exercise 10: Status Code Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For each of the following scenarios, determine the appropriate HTTP status code and explain your reasoning:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A client sends a GET request for a user that does not exist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A client sends a POST request that creates a duplicate resource"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A client sends a DELETE request for a resource that was already deleted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A client sends a PUT request with a mismatched resource ID in the URL and body"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A client sends a request without the required ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Authorization"
        }), " header"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A client sends a PATCH request with an invalid field name"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A client sends a valid request but the server encounters a database connection error"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A client sends a GET request with an invalid parameter type (string instead of integer)"
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