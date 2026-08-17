"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[31622],{

/***/ 69850
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_computer_networks_15_web_apis_md_a23_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-computer-networks-15-web-apis-md-a23.json
const site_docs_courses_computer_networks_15_web_apis_md_a23_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/computer-networks/15-web-apis","title":"Chapter 15: Web APIs and Application Protocols","description":"Learning Objectives","source":"@site/docs/courses/computer-networks/15-web-apis.md","sourceDirName":"courses/computer-networks","slug":"/computer-networks/15-web-apis","permalink":"/ai-engineering-journey/computer-networks/15-web-apis","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"15-web-apis","slug":"/computer-networks/15-web-apis","title":"Chapter 15: Web APIs and Application Protocols","sidebar_label":"Chapter 15: Web APIs and Application Protocols","sidebar_position":15},"sidebar":"course-computer-networks","previous":{"title":"Chapter 14: Software-Defined Networking","permalink":"/ai-engineering-journey/computer-networks/14-sdn"},"next":{"title":"Chapter 16: Cloud Networking","permalink":"/ai-engineering-journey/computer-networks/16-cloud-networking"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/computer-networks/15-web-apis.md


const frontMatter = {
	id: '15-web-apis',
	slug: '/computer-networks/15-web-apis',
	title: 'Chapter 15: Web APIs and Application Protocols',
	sidebar_label: 'Chapter 15: Web APIs and Application Protocols',
	sidebar_position: 15
};
const contentTitle = 'Chapter 15: Web APIs and Application Protocols';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "15.1 RESTful APIs",
  "id": "151-restful-apis",
  "level": 2
}, {
  "value": "15.1.1 REST Architectural Constraints (Six Constraints)",
  "id": "1511-rest-architectural-constraints-six-constraints",
  "level": 3
}, {
  "value": "15.1.2 Resource Modeling &amp; URL Design",
  "id": "1512-resource-modeling--url-design",
  "level": 3
}, {
  "value": "15.1.3 HTTP Methods Deep Dive",
  "id": "1513-http-methods-deep-dive",
  "level": 3
}, {
  "value": "15.1.4 HTTP Status Code Families",
  "id": "1514-http-status-code-families",
  "level": 3
}, {
  "value": "15.1.5 CRUD with HTTP Mapping",
  "id": "1515-crud-with-http-mapping",
  "level": 3
}, {
  "value": "15.1.6 Statelessness",
  "id": "1516-statelessness",
  "level": 3
}, {
  "value": "15.1.7 HATEOAS",
  "id": "1517-hateoas",
  "level": 3
}, {
  "value": "15.1.8 Caching (ETag, Cache-Control)",
  "id": "1518-caching-etag-cache-control",
  "level": 3
}, {
  "value": "15.1.9 Rate Limiting",
  "id": "1519-rate-limiting",
  "level": 3
}, {
  "value": "15.1.10 API Versioning",
  "id": "15110-api-versioning",
  "level": 3
}, {
  "value": "15.1.11 OpenAPI / Swagger",
  "id": "15111-openapi--swagger",
  "level": 3
}, {
  "value": "15.1.12 REST API Implementation",
  "id": "15112-rest-api-implementation",
  "level": 3
}, {
  "value": "15.1.13 REST vs SOAP vs GraphQL vs gRPC Comparison",
  "id": "15113-rest-vs-soap-vs-graphql-vs-grpc-comparison",
  "level": 3
}, {
  "value": "15.1.14 Interview Corner",
  "id": "15114-interview-corner",
  "level": 3
}, {
  "value": "15.1.15 Applications in Real Systems",
  "id": "15115-applications-in-real-systems",
  "level": 3
}, {
  "value": "15.2 WebSockets",
  "id": "152-websockets",
  "level": 2
}, {
  "value": "15.3 gRPC",
  "id": "153-grpc",
  "level": 2
}, {
  "value": "15.3.1 Protocol Buffers Definition",
  "id": "1531-protocol-buffers-definition",
  "level": 3
}, {
  "value": "15.4 GraphQL",
  "id": "154-graphql",
  "level": 2
}, {
  "value": "15.4.1 Query Structure",
  "id": "1541-query-structure",
  "level": 3
}, {
  "value": "15.4.2 Schema Definition",
  "id": "1542-schema-definition",
  "level": 3
}, {
  "value": "15.5 Server-Sent Events",
  "id": "155-server-sent-events",
  "level": 2
}, {
  "value": "15.6 WebRTC",
  "id": "156-webrtc",
  "level": 2
}, {
  "value": "15.7 API Gateways",
  "id": "157-api-gateways",
  "level": 2
}, {
  "value": "💡 Pro Tips",
  "id": "-pro-tips",
  "level": 2
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference: RESTful API Design Cheat Sheet",
  "id": "quick-reference-restful-api-design-cheat-sheet",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Case Study: API Gateway Migration for Microservices",
  "id": "case-study-api-gateway-migration-for-microservices",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "chapter-15-web-apis-and-application-protocols",
        children: "Chapter 15: Web APIs and Application Protocols"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch15-web-apis.png",
        alt: "Web APIs and Application Protocols"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design RESTful APIs with appropriate resource modeling, HTTP methods, and status codes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the WebSocket protocol and its use in real-time applications."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare gRPC and REST for different application requirements."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe GraphQL query structure and its advantages over REST for certain use cases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the role of WebRTC in peer-to-peer communication."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "151-restful-apis",
      children: "15.1 RESTful APIs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Representational State Transfer (REST) is an architectural style for designing networked applications introduced by Roy Fielding in his 2000 PhD dissertation. RESTful APIs use HTTP methods as verbs operating on resources identified by URLs. The core idea: everything is a resource, and each resource has a unique identifier (URI) and a set of operations defined by HTTP methods."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1511-rest-architectural-constraints-six-constraints",
      children: "15.1.1 REST Architectural Constraints (Six Constraints)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "REST defines six architectural constraints. A system satisfying all six is \"RESTful.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Library Catalog System"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A library catalog is a perfect analogy for REST:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Books/resources"
        }), " are identifiable by ISBN (unique URI)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Library rules"
        }), " define how you interact with books (uniform interface)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "You browse"
        }), " the catalog independently; the librarian doesn't remember your past visits (stateless)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Catalog cards"
        }), " include location information (HATEOAS links)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Floors/departments"
        }), " are independent layers (layered system)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Six Constraints:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Constraint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Library Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of concerns: UI (client) and data (server) evolve independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patron (client) and catalog (server) are separate systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each request contains all information needed; no server-side session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patron shows library card each visit; librarian doesn't remember past visits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cacheable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Responses must declare cacheability to eliminate unnecessary requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Popular books kept at front desk (cache) rather than fetched from storage each time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform Interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resources identified in requests, representation manipulation through representations, self-descriptive messages, HATEOAS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All books have ISBNs, all follow same checkout procedure, catalog cards link to related sections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layered System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client cannot tell if directly connected to end server or intermediary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patron talks to front desk, which retrieves from stacks → patron unaware of the layers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code on Demand (optional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server can extend client functionality by transferring executable code (e.g., JavaScript)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library provides a self-checkout kiosk app (code) to run at home"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps: REST API Call Flow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client identifies the resource URI (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET /books/9780141036144"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends an HTTP request with the method, headers, and optional body"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server validates the request (authentication, authorization, input validation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server processes the request: queries database, computes response"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server sets caching headers (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Cache-Control"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ETag"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server returns HTTP status code, headers, and optional body"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client interprets the status code, caches the response if appropriate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client may follow HATEOAS links for related operations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: REST Request Lifecycle"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION handleRequest(request):\n  // Step 1: Parse HTTP method and URI\n  method = request.method   // GET, POST, PUT, DELETE, PATCH\n  uri = request.uri         // e.g., /users/42\n  headers = request.headers\n  body = request.body\n\n  // Step 2: Authenticate\n  IF NOT authenticate(headers.Authorization):\n    RETURN 401 Unauthorized\n\n  // Step 3: Authorize\n  IF NOT authorize(method, uri, user):\n    RETURN 403 Forbidden\n\n  // Step 4: Validate input\n  IF NOT validateRequest(method, uri, body):\n    RETURN 400 Bad Request\n\n  // Step 5: Check cache (for safe methods)\n  IF method IN {GET, HEAD, OPTIONS}:\n    etag = computeETag(uri)\n    IF headers.\"If-None-Match\" == etag:\n      RETURN 304 Not Modified\n\n  // Step 6: Process and generate response\n  resource = executeQuery(method, uri, body)\n  status = mapStatus(method, resource)\n  responseBody = serialize(resource)\n\n  // Step 7: Add HATEOAS links\n  responseBody.links = generateLinks(uri, user)\n\n  // Step 8: Set cache headers\n  responseHeaders = {\n    \"Cache-Control\": \"max-age=3600, private\",\n    \"ETag\": computeETag(uri)\n  }\n\n  RETURN (status, responseHeaders, responseBody)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table: REST API Call Flow"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Client Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Server State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cache State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GET /books"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requests list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client wants all books"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate auth token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "user=alice, role=reader"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token valid, authorized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Execute ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT * FROM books"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1200 books found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query returns results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serialize as JSON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1200 items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Format response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add HATEOAS links"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rel: \"self\""
            }), " URLs per book"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-referencing links"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache-Control: max-age=300"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Headers set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Populated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cached for 5 min"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{data, cache: 300s}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client receives and caches"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Request validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed set of checks (auth token parse, URI pattern match)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource lookup (indexed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database index seek for primary key query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource lookup (unindexed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full table scan → always index your API query fields"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Response serialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k = number of fields in resource; linear in object size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HATEOAS link generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed number of relationship links per resource type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limit check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis/Token bucket counter increment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why REST complexity matters:"
      }), " REST's simplicity (plain HTTP, stateless requests) means per-request overhead is O(1) for most operations. The bottleneck is nearly always the database query, not the REST framework itself. This predictability is why REST dominates web APIs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1512-resource-modeling--url-design",
      children: "15.1.2 Resource Modeling & URL Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Resources are nouns representing entities. URL design maps the domain model to a navigable hierarchy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Library Bookshelf Layout"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A library organizes books by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Collection (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/fiction"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/non-fiction"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Author (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/fiction/fantasy/tolkien"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/fiction/scifi/asimov"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Specific book (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/fiction/fantasy/tolkien/lotr"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "REST URL Design Principles:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Good Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bad Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nouns, not verbs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GET /orders"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GET /getOrders"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verbs belong in HTTP methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plural nouns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GET /users"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GET /user"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collections are plural"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/users/42/orders"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/orders?userId=42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reflects ownership"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent casing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/order-items"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/orderItems"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/order_items"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick kebab-case and stay consistent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filter via query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GET /orders?status=active"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GET /orders/status/active"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filters are query params, not path segments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version prefix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/v1/users"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/users?v=1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URI versioning is most discoverable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps: Designing a Resource Hierarchy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify domain entities: User, Order, Product, Category"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Establish ownership relationships: User → Order → OrderItem, Category → Product"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map entities to URL paths reflecting ownership"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose collection names (plural, lowercase, kebab-case)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add query parameters for filtering, sorting, pagination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add sub-resources for related entities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design actions as sub-resources with POST"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: URL Router"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION routeRequest(method, uri, body):\n  pattern = \"^(/v\\d+)?/(?P<resource>\\w+)(/(?P<id>\\d+))?(/(?P<subresource>\\w+))?(/(?P<subid>\\d+))?\"\n  match = regexMatch(uri, pattern)\n\n  IF NOT match:\n    RETURN 404 Not Found\n\n  resource = match.resource\n  id = match.id\n  subresource = match.subresource\n  subid = match.subid\n\n  // Route to handler based on resource + method\n  handler = lookupHandler(resource, method)\n  IF NOT handler:\n    RETURN 405 Method Not Allowed\n\n  RETURN handler(id, subresource, subid, body, uri.queryParams)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D Table: URL Design Choices"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Choice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/users/42"
            }), " (path param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean, bookmarkable, semantic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed hierarchy, hard to compose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "?userId=42"
            }), " (query param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible, composable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less semantic, can get messy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/v1/users"
            }), " (URI version)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most discoverable, cache-friendly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL pollution, hard to maintain multiple versions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Accept: version=2"
            }), " (header)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean URLs, no pollution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden from casual inspection, harder to test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "?version=2"
            }), " (query param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pollutes URLs, not cache-friendly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Plural (", (0,jsx_runtime.jsx)(_components.code, {
              children: "/users"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly longer URIs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Singular (", (0,jsx_runtime.jsx)(_components.code, {
              children: "/user"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shorter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inconsistent with collection semantics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1513-http-methods-deep-dive",
      children: "15.1.3 HTTP Methods Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP methods (verbs) define the operation to perform on a resource."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Library Operations"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Library Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browse the shelves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read book info; no changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Donate a new book"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create a new catalog entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace a damaged book entirely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full replacement of a resource"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update a book's status to \"checked out\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial modification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove a book from circulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete a resource"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method Semantics:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GET → Retrieve a resource"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Safe: yes (no side effects)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Idempotent: yes (repeating returns same result)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payload: body optional in request, body in response"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cacheable: yes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status codes: 200 OK, 304 Not Modified, 404 Not Found, 400 Bad Request"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GET /books/9780141036144 HTTP/1.1\nHost: library.example.com\nAccept: application/json\n\nHTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 312\nCache-Control: max-age=3600\nETag: \"abc123\"\n\n{\"isbn\":\"9780141036144\",\"title\":\"1984\",\"author\":\"George Orwell\",\"year\":1949}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "POST → Create a resource or submit data"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Safe: no (creates resources)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Idempotent: no (multiple POSTs create multiple resources)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payload: body in request, body in response (created resource)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cacheable: no (responses to POST are not cacheable by default)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status codes: 201 Created, 200 OK, 400 Bad Request, 409 Conflict"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /books HTTP/1.1\nHost: library.example.com\nContent-Type: application/json\n\n{\"isbn\":\"9780451524935\",\"title\":\"1984\",\"author\":\"George Orwell\",\"year\":1949}\n\nHTTP/1.1 201 Created\nLocation: /books/9780451524935\nContent-Type: application/json\n\n{\"isbn\":\"9780451524935\",\"title\":\"1984\",\"author\":\"George Orwell\",\"year\":1949,\"id\":\"new-uuid-123\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PUT → Replace a resource entirely"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Safe: no (modifies state)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Idempotent: yes (same PUT N times = same state as 1 PUT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payload: full resource body in request, body in response"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cacheable: no"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status codes: 200 OK, 201 Created (if new), 204 No Content, 400 Bad Request"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PUT /books/9780451524935 HTTP/1.1\nHost: library.example.com\nContent-Type: application/json\n\n{\"isbn\":\"9780451524935\",\"title\":\"Nineteen Eighty-Four\",\"author\":\"George Orwell\",\"year\":1949}\n\nHTTP/1.1 200 OK\nETag: \"def456\"\n{\"isbn\":\"9780451524935\",\"title\":\"Nineteen Eighty-Four\",\"author\":\"George Orwell\",\"year\":1949}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PATCH → Partially update a resource"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Safe: no (modifies state)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Idempotent: no (by default; depends on patch format)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payload: partial resource body (or patch instructions) in request, body in response"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cacheable: no"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status codes: 200 OK, 204 No Content, 400 Bad Request, 422 Unprocessable Entity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PATCH /books/9780451524935 HTTP/1.1\nHost: library.example.com\nContent-Type: application/json-patch+json\n\n[{\"op\":\"replace\",\"path\":\"/year\",\"value\":1950}]\n\nHTTP/1.1 200 OK\nETag: \"ghi789\"\n{\"isbn\":\"9780451524935\",\"title\":\"Nineteen Eighty-Four\",\"author\":\"George Orwell\",\"year\":1950}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DELETE → Remove a resource"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Safe: no (destructive)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Idempotent: yes (DELETE of deleted resource returns same status)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payload: no body in request, no body in response typically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cacheable: no"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status codes: 204 No Content, 200 OK, 404 Not Found (if already deleted)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DELETE /books/9780451524935 HTTP/1.1\nHost: library.example.com\n\nHTTP/1.1 204 No Content\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table: Method Behavior"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Request"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Database State Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Database State After"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET /books/1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{id:1, title:\"A\"}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{id:1, title:\"A\"}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET /books/1 (repeat)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{id:1, title:\"A\"}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{id:1, title:\"A\"}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK (same)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POST /books body={title:\"B\"}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{title:\"B\"}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 book (A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 books (A, B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "201 Created, new id"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POST /books body={title:\"B\"}(repeat)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{title:\"B\"}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 books (A, B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 books (A, B, B2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "201 Created, different id"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PUT /books/1 body={title:\"C\",...}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{id:1, title:\"A\"}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{id:1, title:\"C\"}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PUT /books/1 (repeat, same body)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{id:1, title:\"C\"}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{id:1, title:\"C\"}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK (same state)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["PATCH /books/1 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{\"year\":2000}"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{id:1, title:\"C\", year:1950}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{id:1, title:\"C\", year:2000}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["PATCH /books/1 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{\"year\":2000}"
            }), " (repeat)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same patch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{id:1, title:\"C\", year:2000}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{id:1, title:\"C\", year:2000}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK (same because value same)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE /books/1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{id:1, title:\"C\"}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "204 No Content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE /books/1 (repeat)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "404 Not Found"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP Methods Comparison Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RFC"
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
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 7231"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieve data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 7231"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Get headers only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 7231"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create, submit, action"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 7231"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full replacement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 7231"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove resource"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 5789"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial update"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPTIONS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RFC 7231"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Get allowed methods"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1514-http-status-code-families",
      children: "15.1.4 HTTP Status Code Families"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP status codes are three-digit integers grouped into five families. The first digit indicates the response class."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Library Transaction Status"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Family"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Library Equivalent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1xx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"One moment, processing...\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Informational, request received"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2xx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Here's your book.\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success, operation completed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3xx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"That book is now in the reference section.\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redirection, further action needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4xx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"You don't have a library card.\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client error, bad request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5xx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"The catalog system is down.\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server error, backend failure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status Code Family Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Family"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1xx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100–199"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Informational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request received, continuing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "101 Switching Protocols"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2xx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200–299"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action received, understood, accepted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK, 201 Created, 204 No Content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3xx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300–399"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redirection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Further action needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "301 Moved, 304 Not Modified"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4xx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400–499"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request contains bad syntax or cannot be fulfilled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "404 Not Found, 401 Unauthorized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5xx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500–599"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server failed to fulfill a valid request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 Internal Server Error"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Status Codes with Usage:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Response Body"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GET, PUT, PATCH succeeded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource representation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POST succeeded (new resource)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource + Location header"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accepted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async operation accepted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status URL or tracking ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "204"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No Content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE succeeded, or PUT with no body needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "301"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moved Permanently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource URL changed permanently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New URL in Location header"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "304"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not Modified"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional GET; resource unchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bad Request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malformed syntax, missing fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error details"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication missing or failed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auth challenge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "403"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forbidden"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authenticated but not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error message"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "404"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not Found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource does not exist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error message"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "405"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method Not Allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong HTTP method for resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow header"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "409"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource state conflict (e.g., duplicate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conflict details"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "415"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupported Media Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong Content-Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "422"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unprocessable Entity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validation failed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validation errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "429"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too Many Requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limit exceeded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retry-After header"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal Server Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unexpected server failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "502"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bad Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upstream service failed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error details"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "503"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service Unavailable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary overload/maintenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retry-After header"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1515-crud-with-http-mapping",
      children: "15.1.5 CRUD with HTTP Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CRUD (Create, Read, Update, Delete) maps naturally to HTTP methods."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "CRUD Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "URL Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Request Body"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Response"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/resources"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource data (no id)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Created resource with id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "201 Created"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read (all)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/resources"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array of resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read (one)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/resources/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update (full)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/resources/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full resource data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updated resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update (partial)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/resources/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial data/patch ops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updated resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/resources/{id}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "204 No Content"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important: REST ≠ CRUD."
      }), " REST is about resources and their state transfers, not just database operations. A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cancel"
      }), " action on an order could be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /orders/{id}/cancel"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PATCH /orders/{id}"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{status:\"cancelled\"}"
      }), ". Design resources around business actions, not table rows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: CRUD Controller"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Create\nFUNCTION createUser(request):\n  userData = parseBody(request)\n  IF NOT validate(userData):\n    RETURN 422 Unprocessable Entity\n  IF emailExists(userData.email):\n    RETURN 409 Conflict\n  user.id = generateUUID()\n  db.insert(\"users\", userData)\n  response.body = serialize(userData)\n  response.headers.Location = \"/users/\" + user.id\n  RETURN 201 Created\n\n// Read\nFUNCTION getUser(userId):\n  user = db.find(\"users\", userId)\n  IF NOT user:\n    RETURN 404 Not Found\n  RETURN 200 OK with serialize(user)\n\n// Update (full replacement)\nFUNCTION replaceUser(userId, newData):\n  IF NOT db.exists(\"users\", userId):\n    RETURN 404 Not Found\n  db.update(\"users\", userId, newData)  // replaces all fields\n  RETURN 200 OK with serialize(newData)\n\n// Partial update\nFUNCTION patchUser(userId, patchData):\n  IF NOT db.exists(\"users\", userId):\n    RETURN 404 Not Found\n  existing = db.find(\"users\", userId)\n  merged = merge(existing, patchData)\n  db.update(\"users\", userId, merged)\n  RETURN 200 OK with serialize(merged)\n\n// Delete\nFUNCTION deleteUser(userId):\n  IF NOT db.exists(\"users\", userId):\n    RETURN 404 Not Found\n  db.delete(\"users\", userId)\n  RETURN 204 No Content\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases in CRUD with HTTP:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POST same data twice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Second creates different resource (POST not idempotent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "201 (different URI)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotent update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUT same data N times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same final state after each call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 (same response)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial update race"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two concurrent PATCHes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last write wins; possible data loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 (may need optimistic locking)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete non-existent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE on already deleted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No error → DELETE is idempotent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "204 or 404"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GET/PUT/PATCH/DELETE on nonexistent id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "404"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validation failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POST with missing required field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns validation details"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "422"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1516-statelessness",
      children: "15.1.6 Statelessness"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Statelessness means each request from client to server must contain all information needed to understand and process the request. The server does not store any session context between requests."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Library Checkout vs. Restaurant"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analogy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stateless (REST)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library: you show your card each time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server doesn't remember past requests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stateful"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restaurant: waiter remembers your table, drink order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server maintains session state"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps: Stateless Authentication Flow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends credentials (username + password or API key) with every request"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server validates credentials independently → no session lookup needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server processes request and returns response"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client receives response → no session cookie is set"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client sends next request with same credentials (typically via JWT in Authorization header)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server re-validates → no memory of step 2"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stateless vs. Stateful Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stateless (REST)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stateful (Session-based)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear → any server handles any request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex → session affinity (sticky sessions) needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each request is self-describing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server state hidden from client"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No single point of failure for session data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session server failure breaks all active sessions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger per-request payload (auth + context)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller payload but session lookup overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highly cacheable (no session dependency)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache unfriendly (depends on server state)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JWT token in Authorization header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session cookie + server-side session store"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Statelessness Tradeoff:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Advantages:\n  - Horizontal scaling: any server handles any request (no session affinity)\n  - Visibility: monitoring can examine a single request fully\n  - Reliability: no session store to fail\n  - Cacheability: responses independent of server state\n\nDisadvantages:\n  - Larger requests: auth tokens and context in every request\n  - Shifted responsibility: client manages state\n  - Chatty: no multi-step transactions within a single request\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1517-hateoas",
      children: "15.1.7 HATEOAS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hypermedia as the Engine of Application State (HATEOAS) means API responses contain links to navigate related resources, making the API self-discoverable."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Library Catalog Cards"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A library catalog card doesn't just give you the book title → it includes links to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The author's other works (", (0,jsx_runtime.jsx)(_components.code, {
          children: "rel: \"author\""
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Related subjects (", (0,jsx_runtime.jsx)(_components.code, {
          children: "rel: \"subject\""
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Where the book is shelved (", (0,jsx_runtime.jsx)(_components.code, {
          children: "rel: \"location\""
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Whether it's available (", (0,jsx_runtime.jsx)(_components.code, {
          children: "rel: \"availability\""
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is HATEOAS: the response tells you what you can do next."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expanded HATEOAS Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "GET /orders/123\n\n{\n  \"orderId\": 123,\n  \"total\": 59.98,\n  \"status\": \"shipped\",\n  \"items\": [\n    {\"productId\": 456, \"name\": \"Wireless Mouse\", \"quantity\": 1, \"price\": 29.99}\n  ],\n  \"_links\": {\n    \"self\": {\"href\": \"/orders/123\", \"method\": \"GET\"},\n    \"cancel\": {\"href\": \"/orders/123/cancel\", \"method\": \"POST\"},\n    \"tracking\": {\"href\": \"/orders/123/tracking\", \"method\": \"GET\"},\n    \"customer\": {\"href\": \"/users/42\", \"method\": \"GET\"},\n    \"payment\": {\"href\": \"/orders/123/payment\", \"method\": \"GET\"},\n    \"return\": {\"href\": \"/orders/123/return\", \"method\": \"POST\"}\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HATEOAS Link Format:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relationship type"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "\"self\""
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"next\""
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"author\""
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "href"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target URI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"/users/42\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "method"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP method to use"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "\"GET\""
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"POST\""
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"DELETE\""
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "title"
            }), " (optional)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-readable label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"View customer profile\""
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: HATEOAS Link Generator"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION generateLinks(resource, userRole):\n  links = []\n  links.add(rel=\"self\", href=\"/\" + resource.type + \"/\" + resource.id, method=\"GET\")\n\n  // Role-based links\n  IF userRole == \"admin\":\n    links.add(rel=\"delete\", href=\"/\" + resource.type + \"/\" + resource.id, method=\"DELETE\")\n    links.add(rel=\"update\", href=\"/\" + resource.type + \"/\" + resource.id, method=\"PUT\")\n\n  // State-based links\n  IF resource.status == \"active\" AND resource.type == \"order\":\n    links.add(rel=\"cancel\", href=\"/orders/\" + resource.id + \"/cancel\", method=\"POST\")\n  IF resource.status == \"shipped\":\n    links.add(rel=\"tracking\", href=\"/orders/\" + resource.id + \"/tracking\", method=\"GET\")\n\n  // Relationship links\n  FOR each relatedResource IN resource.relations:\n    links.add(rel=relatedResource.type, href=\"/\" + relatedResource.type + \"/\" + relatedResource.id, method=\"GET\")\n\n  RETURN links\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D Table: HATEOAS"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discoverability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client navigates without docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increases response size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decoupling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server changes URL structure independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client must handle links, not hardcode URLs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic navigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Links change based on state (e.g., \"cancel\" only shown for active orders)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex server logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-world adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub API, Stripe API use it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most APIs use minimal HATEOAS; full HATEOAS is rare (Level 3 Richardson Maturity Model)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases in HATEOAS:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expired links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link target resource deleted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return 404 with link to parent collection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permission change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link visible but user loses permission mid-session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link shown, but 403 on actual request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circular references"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order→Customer→Order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limit link depth; show top-level only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Links point to different API version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base URLs respect version prefix"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1518-caching-etag-cache-control",
      children: "15.1.8 Caching (ETag, Cache-Control)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Caching reduces server load and improves response time by reusing previous responses."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Library Reserve Shelf"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The library keeps popular books at the front desk (cache) rather than fetching them from the stacks each time. The librarian checks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Is this book on the reserve shelf?\" (Cache hit?)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Has the book been updated since last time?\" (ETag validation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"How long can I keep this on reserve?\" (Cache-Control max-age)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache-Control Directives:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Directive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any cache may store (CDN, browser, proxy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache-Control: public, max-age=3600"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only browser cache may store (no CDN/proxy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache-Control: private, max-age=600"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "no-cache"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must revalidate with server before using cached copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache-Control: no-cache"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "no-store"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must not cache at all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache-Control: no-store"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "max-age=<seconds>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum time cached response is fresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache-Control: max-age=3600"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s-maxage=<seconds>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overrides max-age for shared caches (CDN)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache-Control: public, s-maxage=3600"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "must-revalidate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Once stale, must revalidate before reuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache-Control: must-revalidate"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ETag (Entity Tag):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ETag is a hash-based validator. The server computes an ETag for each resource. The client sends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "If-None-Match"
      }), " with the stored ETag; the server returns 304 Not Modified if unchanged."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps: Conditional Request with ETag"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client sends ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET /books/123"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server computes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ETag: \"a1b2c3\""
        }), " (hash of resource state)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "200 OK"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ETag: \"a1b2c3\""
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Cache-Control: public, max-age=3600"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client caches: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{data, etag: \"a1b2c3\", expires: now+3600s}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After 3600 seconds, client sends ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET /books/123 If-None-Match: \"a1b2c3\""
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server re-computes ETag from current state"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If unchanged: server returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "304 Not Modified"
        }), " (empty body)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If changed: server returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "200 OK"
        }), " with new data and new ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ETag: \"d4e5f6\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table: Caching Decision Flow"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Client State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Request"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cache State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Server State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GET /books/1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fresh data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request sent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait for response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computes ETag \"abc\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Receive: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "200 OK, ETag: \"abc\", max-age=300"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Done"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Stores ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{data, etag: \"abc\", expires: T+300}"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache populated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Before expiry)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GET /books/1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fresh (T+50 < T+300)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache HIT: return cached"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(After expiry)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GET /books/1 If-None-Match: \"abc\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stale (T+310 > T+300)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compares ETag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Receive: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "304 Not Modified"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refreshes to T+300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache refreshed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Later)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GET /books/1 If-None-Match: \"abc\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data changed, ETag=\"def\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Receive: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "200 OK, ETag: \"def\", max-age=300"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Done"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Updates ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{data, etag: \"def\", expires: T+300}"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache updated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Caching Middleware Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <unordered_map>\n#include <string>\n#include <chrono>\n#include <functional>\n#include <iostream>\n\nstruct CacheEntry {\n    std::string data;\n    std::string etag;\n    std::chrono::steady_clock::time_point expiresAt;\n};\n\nclass CachingMiddleware {\nprivate:\n    std::unordered_map<std::string, CacheEntry> cache;\n    std::hash<std::string> hasher;\n\n    std::string computeETag(const std::string& resourceState) {\n        return std::to_string(hasher(resourceState));\n    }\n\n    CachePolicy getCachePolicy(const std::string& method) {\n        // GET and HEAD are cacheable; POST, PUT, PATCH, DELETE invalidate\n        if (method == \"GET\" || method == \"HEAD\") {\n            return CachePolicy::READ;\n        }\n        return CachePolicy::INVALIDATE;\n    }\n\npublic:\n    enum class CachePolicy { READ, INVALIDATE, BYPASS };\n\n    struct Response {\n        int statusCode;\n        std::string body;\n        std::string etag;\n        bool fromCache;\n    };\n\n    Response handleRequest(\n        const std::string& method,\n        const std::string& url,\n        const std::string& ifNoneMatch,\n        const std::string& requestBody,\n        std::function<Response()> upstream\n    ) {\n        if (getCachePolicy(method) == CachePolicy::INVALIDATE) {\n            cache.erase(url);\n            return upstream();\n        }\n\n        // Check cache\n        auto it = cache.find(url);\n        if (it != cache.end()) {\n            CacheEntry& entry = it->second;\n            auto now = std::chrono::steady_clock::now();\n\n            if (now < entry.expiresAt) {\n                // Fresh cache hit\n                std::cout << \"[CACHE HIT] Fresh: \" << url << std::endl;\n                return {200, entry.data, entry.etag, true};\n            }\n\n            // Stale → conditional request\n            std::cout << \"[CACHE] Stale, revalidating: \" << url << std::endl;\n            if (!ifNoneMatch.empty() && ifNoneMatch == entry.etag) {\n                // Client sent If-None-Match → use it\n                Response serverResp = upstream();\n                if (serverResp.statusCode == 304) {\n                    entry.expiresAt = std::chrono::steady_clock::now()\n                        + std::chrono::seconds(300);\n                    return {200, entry.data, entry.etag, true};\n                }\n                // Resource changed\n                if (!serverResp.etag.empty()) {\n                    cache[url] = {serverResp.body, serverResp.etag,\n                        std::chrono::steady_clock::now() + std::chrono::seconds(300)};\n                }\n                return serverResp;\n            }\n        }\n\n        // Cache miss → fetch from upstream\n        std::cout << \"[CACHE MISS] \" << url << std::endl;\n        Response serverResp = upstream();\n        if (serverResp.statusCode == 200 && !serverResp.etag.empty()) {\n            cache[url] = {serverResp.body, serverResp.etag,\n                std::chrono::steady_clock::now() + std::chrono::seconds(300)};\n        }\n        serverResp.fromCache = false;\n        return serverResp;\n    }\n};\n\n// Usage example\nint main() {\n    CachingMiddleware cache;\n\n    auto upstream = []() {\n        return CachingMiddleware::Response{\n            200,\n            \"{\\\"id\\\":1,\\\"name\\\":\\\"Book A\\\"}\",\n            \"etag123\",\n            false\n        };\n    };\n\n    auto r1 = cache.handleRequest(\"GET\", \"/books/1\", \"\", \"\", upstream);\n    std::cout << \"Response 1: status=\" << r1.statusCode\n              << \" fromCache=\" << r1.fromCache << std::endl;\n\n    auto r2 = cache.handleRequest(\"GET\", \"/books/1\",\n        \"etag123\", \"\", upstream);\n    std::cout << \"Response 2: status=\" << r2.statusCode\n              << \" fromCache=\" << r2.fromCache << std::endl;\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Caching Middleware Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\nimport time\nfrom functools import wraps\nfrom typing import Optional, Dict, Callable, Any\n\nclass CacheEntry:\n    def __init__(self, data: str, etag: str, max_age: int = 300):\n        self.data = data\n        self.etag = etag\n        self.expires_at = time.time() + max_age\n\n    def is_fresh(self) -> bool:\n        return time.time() < self.expires_at\n\nclass CachingMiddleware:\n    def __init__(self):\n        self._cache: Dict[str, CacheEntry] = {}\n\n    @staticmethod\n    def _compute_etag(data: str) -> str:\n        return hashlib.md5(data.encode()).hexdigest()\n\n    def _should_invalidate(self, method: str) -> bool:\n        return method.upper() in (\"POST\", \"PUT\", \"PATCH\", \"DELETE\")\n\n    def handle(\n        self,\n        method: str,\n        url: str,\n        if_none_match: Optional[str],\n        upstream: Callable[[], Dict[str, Any]]\n    ) -> Dict[str, Any]:\n        if self._should_invalidate(method):\n            self._cache.pop(url, None)\n            return upstream()\n\n        entry = self._cache.get(url)\n        if entry is not None:\n            if entry.is_fresh():\n                print(f\"[CACHE HIT] Fresh: {url}\")\n                return {\"status\": 200, \"body\": entry.data,\n                        \"etag\": entry.etag, \"from_cache\": True}\n\n            # Stale → try conditional request\n            if if_none_match and if_none_match == entry.etag:\n                resp = upstream()\n                if resp.get(\"status\") == 304:\n                    entry.expires_at = time.time() + 300\n                    return {\"status\": 200, \"body\": entry.data,\n                            \"etag\": entry.etag, \"from_cache\": True, \"revalidated\": True}\n                if resp.get(\"etag\"):\n                    self._cache[url] = CacheEntry(resp[\"body\"], resp[\"etag\"])\n                return resp\n\n        # Cache miss\n        print(f\"[CACHE MISS] {url}\")\n        resp = upstream()\n        if resp.get(\"status\") == 200:\n            etag = resp.get(\"etag\") or self._compute_etag(resp.get(\"body\", \"\"))\n            self._cache[url] = CacheEntry(resp[\"body\"], etag)\n            resp[\"etag\"] = etag\n        resp[\"from_cache\"] = False\n        return resp\n\n\n# Simulated usage\ndef make_upstream(body: str, etag: Optional[str] = None):\n    def upstream():\n        return {\"status\": 200, \"body\": body, \"etag\": etag}\n    return upstream\n\ncache = CachingMiddleware()\nr1 = cache.handle(\"GET\", \"/books/1\", None, make_upstream('{\"id\":1}', \"v1\"))\nprint(f\"First call - from_cache: {r1['from_cache']}\")  # False\n\nr2 = cache.handle(\"GET\", \"/books/1\", \"v1\", make_upstream('{\"id\":1}', \"v1\"))\nprint(f\"Second call - from_cache: {r2['from_cache']}\")  # True (fresh hit)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis of Caching:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache lookup (hash map)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct hash table access by URL key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ETag computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = response size; full hash of response body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache invalidation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash map erase by URL key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Freshness check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single timestamp comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) + O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash computation (n) + comparison (1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache eviction (LRU)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doubly-linked list + hash map"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(1) cache lookup matters:"
      }), " In a system handling 10,000 requests/second, a cache hit reduces response time from ~50ms (database query) to ~1ms (memory read). The 50x speedup is directly attributable to O(1) hash map lookup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D Table: Caching with ETag vs Cache-Control"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-Control: no-store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees fresh data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No performance gain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive data, real-time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-Control: max-age=3600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, reduces server load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data may be stale for up to 1 hour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blog posts, product catalog"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ETag + 304 revalidation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always fresh data, saves bandwidth when unchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires extra server computation on revalidation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rapidly changing data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ETag + Cache-Control combined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both freshness window + revalidation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly more complex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most APIs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases in Caching:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache invalidation after write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUT/PATCH updates resource; stale cache served"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalidate cache on mutating methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent writes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two clients PATCH same resource simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ETag in If-Match header for optimistic locking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private vs public data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-specific data cached in shared CDN"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Cache-Control: private"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stale CDN cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CDN serves outdated content"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "s-maxage"
            }), " < ", (0,jsx_runtime.jsx)(_components.code, {
              children: "max-age"
            }), ", purge API, or versioned URLs"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache stampede"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N clients miss cache simultaneously, hammering DB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock/mutex on cache miss (dogpile effect prevention)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1519-rate-limiting",
      children: "15.1.9 Rate Limiting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rate limiting controls how many requests a client can make within a time window, preventing abuse and ensuring fair usage."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Library Computer Terminal Policy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The library limits computer usage:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "30 minutes per session per patron"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must wait 10 minutes between sessions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Librarians get unlimited access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The timer resets daily"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Token Bucket"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Token bucket is the most common rate-limiting algorithm. A bucket holds tokens; each request consumes a token. Tokens refill at a fixed rate."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: Token Bucket Rate Limiter"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CLASS TokenBucket:\n  capacity          // max tokens (burst limit)\n  refillRate        // tokens per second\n  tokens            // current token count\n  lastRefillTime    // timestamp of last refill\n\n  FUNCTION allowRequest():\n    refill()\n    IF tokens > 0:\n      tokens = tokens - 1\n      RETURN True\n    ELSE:\n      RETURN False\n\n  FUNCTION refill():\n    now = currentTime()\n    elapsed = now - lastRefillTime\n    newTokens = elapsed * refillRate\n    tokens = min(capacity, tokens + newTokens)\n    lastRefillTime = now\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps: Rate Limiting Flow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client sends request ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET /api/books"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server extracts client identity from API key or IP address"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate limiter looks up the client's token bucket (or creates one)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Token bucket checks: tokens > 0?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If yes: consume 1 token, forward request to handler"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If no: return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "429 Too Many Requests"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Retry-After"
        }), " header"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tokens refill at fixed rate (e.g., 10 tokens/second) regardless of consumption"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation: Token Bucket Rate Limiter"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nfrom threading import Lock\nfrom typing import Dict\n\nclass TokenBucket:\n    def __init__(self, capacity: int, refill_rate: float):\n        self.capacity = capacity\n        self.refill_rate = refill_rate\n        self.tokens = capacity\n        self.last_refill = time.monotonic()\n        self.lock = Lock()\n\n    def _refill(self):\n        now = time.monotonic()\n        elapsed = now - self.last_refill\n        new_tokens = elapsed * self.refill_rate\n        self.tokens = min(self.capacity, self.tokens + new_tokens)\n        self.last_refill = now\n\n    def allow(self) -> bool:\n        with self.lock:\n            self._refill()\n            if self.tokens >= 1:\n                self.tokens -= 1\n                return True\n            return False\n\n    def wait_time(self) -> float:\n        \"\"\"Seconds until next token is available.\"\"\"\n        with self.lock:\n            self._refill()\n            if self.tokens >= 1:\n                return 0.0\n            return (1 - self.tokens) / self.refill_rate\n\n\nclass RateLimiter:\n    def __init__(self, default_capacity: int = 100, default_rate: float = 10.0):\n        self.buckets: Dict[str, TokenBucket] = {}\n        self.default_capacity = default_capacity\n        self.default_rate = default_rate\n\n    def get_bucket(self, client_id: str) -> TokenBucket:\n        if client_id not in self.buckets:\n            self.buckets[client_id] = TokenBucket(\n                self.default_capacity, self.default_rate)\n        return self.buckets[client_id]\n\n    def check(self, client_id: str) -> Dict:\n        bucket = self.get_bucket(client_id)\n        allowed = bucket.allow()\n        return {\n            \"allowed\": allowed,\n            \"remaining\": max(0, int(bucket.tokens)),\n            \"retry_after\": bucket.wait_time() if not allowed else 0\n        }\n\n\n# Usage\nlimiter = RateLimiter(default_capacity=10, default_rate=1.0)  # 10 burst, 1/sec refill\nclient = \"user_42\"\nfor i in range(15):\n    result = limiter.check(client)\n    status = \"ALLOWED\" if result[\"allowed\"] else \"DENIED\"\n    print(f\"Request {i+1}: {status} | Remaining: {result['remaining']}\")\n    if not result[\"allowed\"]:\n        print(f\"  Retry after: {result['retry_after']:.2f}s\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table: Rate Limiter"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time (s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Request #"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket State (tokens)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Refill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consumed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Allowed?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (last token)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 (1s elapsed * 1/sec)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 → after refill: consumed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (429)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 (retry)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1 (1 more second elapsed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 → consumed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token bucket lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash map by client ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token refill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Arithmetic: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tokens += elapsed * rate"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allow check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single comparison and decrement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limiter memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(c)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c = number of active clients; bounded by LRU eviction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cleanup of stale buckets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(c)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Periodic scan; tunable interval"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(1) matters for rate limiting:"
      }), " Rate limiting runs on EVERY request. At 50,000 requests/sec, O(1) per request means 50,000 operations/second. O(n) would make rate limiting the bottleneck rather than the guard."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D Table: Rate Limiting Algorithms"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Token Bucket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allows bursts, smooth refill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory per client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leaky Bucket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed processing rate, smooth output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No burst flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, easy to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic spikes at window boundaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple rate limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding Window Log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precise, no boundary spikes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) memory per window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict rate guarantees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding Window Counter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good precision, O(1) memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly complex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most production systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases in Rate Limiting:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Burst traffic at window boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed window: all requests flood last millisecond"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding window counter or token bucket"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed rate limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple servers share one rate limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized Redis (atomic INCR + EXPIRE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limit header sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client sees different remaining count across servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronize counter in Redis cluster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIP/whitelist clients"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some clients need higher limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable per-client bucket capacity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retry-After accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client needs exact wait time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return precise float seconds"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Token Bucket Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <unordered_map>\n#include <chrono>\n#include <mutex>\n#include <iostream>\n\nclass TokenBucket {\nprivate:\n    double capacity;\n    double refillRate;\n    double tokens;\n    std::chrono::steady_clock::time_point lastRefill;\n    std::mutex mtx;\n\n    void refill() {\n        auto now = std::chrono::steady_clock::now();\n        auto elapsed = std::chrono::duration<double>(now - lastRefill).count();\n        tokens = std::min(capacity, tokens + elapsed * refillRate);\n        lastRefill = now;\n    }\n\npublic:\n    TokenBucket(double cap, double rate)\n        : capacity(cap), refillRate(rate),\n          tokens(cap), lastRefill(std::chrono::steady_clock::now()) {}\n\n    bool allow() {\n        std::lock_guard<std::mutex> lock(mtx);\n        refill();\n        if (tokens >= 1.0) {\n            tokens -= 1.0;\n            return true;\n        }\n        return false;\n    }\n\n    double waitTime() {\n        std::lock_guard<std::mutex> lock(mtx);\n        refill();\n        if (tokens >= 1.0) return 0.0;\n        return (1.0 - tokens) / refillRate;\n    }\n};\n\nclass RateLimiter {\nprivate:\n    std::unordered_map<std::string, TokenBucket> buckets;\n    std::mutex globalMtx;\n    double defaultCap;\n    double defaultRate;\n\npublic:\n    RateLimiter(double cap, double rate) : defaultCap(cap), defaultRate(rate) {}\n\n    bool check(const std::string& clientId) {\n        std::lock_guard<std::mutex> lock(globalMtx);\n        auto it = buckets.find(clientId);\n        if (it == buckets.end()) {\n            it = buckets.emplace(clientId,\n                TokenBucket(defaultCap, defaultRate)).first;\n        }\n        return it->second.allow();\n    }\n};\n\nint main() {\n    RateLimiter limiter(10, 1.0);\n\n    for (int i = 0; i < 15; i++) {\n        bool allowed = limiter.check(\"user_42\");\n        std::cout << \"Request \" << (i+1) << \": \"\n                  << (allowed ? \"ALLOWED\" : \"DENIED\") << std::endl;\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TypeScript Implementation: Token Bucket Rate Limiter"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RateLimitConfig {\n  capacity: number;\n  refillRate: number; // tokens per second\n}\n\ninterface RateLimitResult {\n  allowed: boolean;\n  remaining: number;\n  retryAfter: number; // seconds\n}\n\ninterface RateLimitHeaders {\n  'X-RateLimit-Limit': number;\n  'X-RateLimit-Remaining': number;\n  'X-RateLimit-Reset': number;\n  'Retry-After'?: number;\n}\n\nclass TokenBucket {\n  private tokens: number;\n  private lastRefill: number;\n\n  constructor(private capacity: number, private refillRate: number) {\n    this.tokens = capacity;\n    this.lastRefill = Date.now();\n  }\n\n  private refill(): void {\n    const now = Date.now();\n    const elapsed = (now - this.lastRefill) / 1000;\n    this.tokens = Math.min(this.capacity, this.tokens + elapsed * this.refillRate);\n    this.lastRefill = now;\n  }\n\n  allow(): boolean {\n    this.refill();\n    if (this.tokens >= 1) {\n      this.tokens -= 1;\n      return true;\n    }\n    return false;\n  }\n\n  getWaitTime(): number {\n    this.refill();\n    if (this.tokens >= 1) return 0;\n    return (1 - this.tokens) / this.refillRate;\n  }\n\n  getTokenCount(): number {\n    this.refill();\n    return this.tokens;\n  }\n}\n\nclass RateLimiter {\n  private buckets: Map<string, TokenBucket> = new Map();\n  private slidingLog: Map<string, number[]> = new Map();\n\n  constructor(\n    private defaultCapacity: number = 100,\n    private defaultRate: number = 10,\n    private windowMs: number = 60000\n  ) {}\n\n  private getBucket(clientId: string): TokenBucket {\n    let bucket = this.buckets.get(clientId);\n    if (!bucket) {\n      bucket = new TokenBucket(this.defaultCapacity, this.defaultRate);\n      this.buckets.set(clientId, bucket);\n    }\n    return bucket;\n  }\n\n  checkTokenBucket(clientId: string): RateLimitResult {\n    const bucket = this.getBucket(clientId);\n    const allowed = bucket.allow();\n    return {\n      allowed,\n      remaining: allowed ? Math.floor(bucket.getTokenCount()) : 0,\n      retryAfter: allowed ? 0 : bucket.getWaitTime()\n    };\n  }\n\n  checkSlidingWindow(clientId: string): RateLimitResult {\n    const now = Date.now();\n    let timestamps = this.slidingLog.get(clientId) || [];\n\n    timestamps = timestamps.filter(t => now - t < this.windowMs);\n    this.slidingLog.set(clientId, timestamps);\n\n    if (timestamps.length >= this.defaultCapacity) {\n      const oldestInWindow = timestamps[0];\n      const retryAfter = Math.max(0, (oldestInWindow + this.windowMs - now) / 1000);\n      return {\n        allowed: false,\n        remaining: 0,\n        retryAfter\n      };\n    }\n\n    timestamps.push(now);\n    this.slidingLog.set(clientId, timestamps);\n    return {\n      allowed: true,\n      remaining: this.defaultCapacity - timestamps.length,\n      retryAfter: 0\n    };\n  }\n\n  getRateLimitHeaders(clientId: string): RateLimitHeaders {\n    const result = this.checkTokenBucket(clientId);\n    const resetTime = Math.floor(Date.now() / 1000) + Math.ceil(result.retryAfter);\n    return {\n      'X-RateLimit-Limit': this.defaultCapacity,\n      'X-RateLimit-Remaining': result.remaining,\n      'X-RateLimit-Reset': resetTime,\n      ...(result.retryAfter > 0 ? { 'Retry-After': Math.ceil(result.retryAfter) } : {})\n    };\n  }\n\n  // Per-client configuration for tiered rate limiting\n  setClientConfig(clientId: string, capacity: number, rate: number): void {\n    this.buckets.set(clientId, new TokenBucket(capacity, rate));\n  }\n}\n\n// Usage example\nconst rateLimiter = new RateLimiter(10, 1); // 10 burst, 1/sec refill\nconst clientId = 'user_42';\nfor (let i = 0; i < 15; i++) {\n  const result = rateLimiter.checkTokenBucket(clientId);\n  const status = result.allowed ? 'ALLOWED' : 'DENIED';\n  const headers = rateLimiter.getRateLimitHeaders(clientId);\n  console.log(`Request ${i + 1}: ${status} | Remaining: ${result.remaining} | Retry-After: ${result.retryAfter}s`);\n  console.log(`  Headers: X-RateLimit-Remaining=${headers['X-RateLimit-Remaining']}`);\n}\n// Output:\n// Request 1: ALLOWED | Remaining: 9 | Retry-After: 0s\n// Request 10: ALLOWED | Remaining: 0 | Retry-After: 0s\n// Request 11: DENIED | Remaining: 0 | Retry-After: 0.5s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15110-api-versioning",
      children: "15.1.10 API Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "APIs evolve. Versioning lets you introduce breaking changes without disrupting existing clients."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Library Edition Numbers"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Books have editions. A 2nd edition may have:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Different chapter organization (breaking change)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updated content (new fields)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same ISBN meaning different content (backward incompatible)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Libraries keep both editions on shelves during transition."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning Strategies:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cache-Friendly"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Discoverability"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "URI prefix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path segment includes version"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/v1/users"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/v2/users"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (different URLs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (visible in URL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP header specifies version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Accept: application/vnd.myapp.v2+json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (same URL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (hidden)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query parameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query param includes version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/users?version=2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (same URL with different param)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content negotiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accept header media type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Accept: application/vnd.myapp.v2+json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps: API Version Migration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Release v1 of API with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/v1/users"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clients adopt v1; production traffic flows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Develop v2 with breaking changes (e.g., renamed fields, removed endpoints)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Deploy v2 alongside v1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/v1/users"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/v2/users"
        }), " both serve traffic"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Announce deprecation of v1 with sunset date (e.g., 6 months)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor v1 traffic decreasing, v2 traffic increasing"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After sunset date, remove v1 code and redirect ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/v1/*"
        }), " to 410 Gone"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: Version Router"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION routeByVersion(uri):\n  version = extractVersion(uri)  // /v2/users -> \"v2\"\n  resourcePath = stripVersion(uri)  // /v2/users -> /users\n\n  SWITCH version:\n    CASE \"v1\":\n      RETURN v1Handlers.process(resourcePath)\n    CASE \"v2\":\n      RETURN v2Handlers.process(resourcePath)\n    CASE \"latest\":\n      RETURN v2Handlers.process(resourcePath)\n    DEFAULT:\n      RETURN 400 Bad Request, \"Unknown API version: \" + version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D Table: Versioning Strategies"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "URI prefix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most explicit; cache-friendly; easy to route"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL pollution; duplicated code if versions share logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Header-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean URLs; no duplication of endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden from casual inspection; harder to test via browser"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query parameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same URL with different content breaks caches; not RESTful (version isn't a query)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases in Versioning:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Client sticks to old version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security patches on v1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security backports with deprecation deadline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel code maintenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two code paths for v1 and v2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use adapter layer; share business logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version in HATEOAS links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Links returned in v1 should stay in v1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate links with correct version prefix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What if client omits version?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route to latest stable; add warning header"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15111-openapi--swagger",
      children: "15.1.11 OpenAPI / Swagger"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenAPI (formerly Swagger) is a specification for describing REST APIs using a standard YAML or JSON format. It provides a machine-readable contract that enables code generation, documentation, and testing."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Library Subject Index"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A library subject index card doesn't just list the book → it describes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Where to find it (endpoints)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What format it's in (paperback, hardcover → request/response formats)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Who can check it out (authentication)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related topics (links to other endpoints)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OpenAPI Example (YAML):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "openapi: \"3.0.3\"\ninfo:\n  title: Library API\n  version: \"1.0.0\"\n  description: API for managing library books and patrons\n\npaths:\n  /books:\n    get:\n      summary: List all books\n      parameters:\n        - name: author\n          in: query\n          schema:\n            type: string\n      responses:\n        \"200\":\n          description: A list of books\n          content:\n            application/json:\n              schema:\n                type: array\n                items:\n                  $ref: \"#/components/schemas/Book\"\n\n    post:\n      summary: Add a new book\n      requestBody:\n        required: true\n        content:\n          application/json:\n            schema:\n              $ref: \"#/components/schemas/BookInput\"\n      responses:\n        \"201\":\n          description: Book created\n          headers:\n            Location:\n              schema:\n                type: string\n\n  /books/{bookId}:\n    get:\n      summary: Get a book by ID\n      parameters:\n        - name: bookId\n          in: path\n          required: true\n            schema:\n              type: integer\n      responses:\n        \"200\":\n          description: A single book\n        \"404\":\n          description: Book not found\n\ncomponents:\n  schemas:\n    Book:\n      type: object\n      properties:\n        id:\n          type: integer\n        title:\n          type: string\n        author:\n          type: string\n        isbn:\n          type: string\n\n    BookInput:\n      type: object\n      required:\n        - title\n        - author\n      properties:\n        title:\n          type: string\n        author:\n          type: string\n        isbn:\n          type: string\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OpenAPI Ecosystem Tools:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Swagger UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive API documentation explorer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Swagger Editor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser-based OpenAPI editor with live preview"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Swagger Codegen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate client SDKs in 40+ languages from spec"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAPI Generator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternative codegen with more language support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Postman"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Import OpenAPI spec to create collections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redoc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beautiful API documentation from OpenAPI"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15112-rest-api-implementation",
      children: "15.1.12 REST API Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation: REST Server with FastAPI-Style Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\nimport hashlib\nimport time\nfrom typing import Optional, Dict, List\nfrom urllib.parse import urlparse, parse_qs\n\n# Simulated database\nclass Database:\n    def __init__(self):\n        self._data: Dict[str, list] = {\n            \"books\": [\n                {\"id\": 1, \"title\": \"1984\", \"author\": \"George Orwell\",\n                 \"isbn\": \"9780451524935\", \"year\": 1949},\n                {\"id\": 2, \"title\": \"Brave New World\", \"author\": \"Aldous Huxley\",\n                 \"isbn\": \"9780060850524\", \"year\": 1932},\n            ]\n        }\n        self._counters = {\"books\": 3}\n\n    def list_all(self, resource: str) -> list:\n        return self._data.get(resource, [])\n\n    def find_by_id(self, resource: str, rid: int) -> Optional[dict]:\n        for item in self._data.get(resource, []):\n            if item[\"id\"] == rid:\n                return item\n        return None\n\n    def create(self, resource: str, data: dict) -> dict:\n        new_item = dict(data)\n        new_item[\"id\"] = self._counters.get(resource, 1)\n        self._counters[resource] = new_item[\"id\"] + 1\n        self._data.setdefault(resource, []).append(new_item)\n        return new_item\n\n    def replace(self, resource: str, rid: int, data: dict) -> Optional[dict]:\n        items = self._data.get(resource, [])\n        for i, item in enumerate(items):\n            if item[\"id\"] == rid:\n                replacement = dict(data)\n                replacement[\"id\"] = rid\n                items[i] = replacement\n                return replacement\n        return None\n\n    def update(self, resource: str, rid: int, data: dict) -> Optional[dict]:\n        items = self._data.get(resource, [])\n        for i, item in enumerate(items):\n            if item[\"id\"] == rid:\n                items[i].update(data)\n                return items[i]\n        return None\n\n    def delete(self, resource: str, rid: int) -> bool:\n        items = self._data.get(resource, [])\n        for i, item in enumerate(items):\n            if item[\"id\"] == rid:\n                items.pop(i)\n                return True\n        return False\n\n\nclass RESTRequest:\n    def __init__(self, method: str, path: str, headers: dict = None,\n                 body: str = \"\"):\n        self.method = method.upper()\n        parsed = urlparse(path)\n        self.path = parsed.path\n        self.query_params = parse_qs(parsed.query)\n        self.headers = headers or {}\n        self.body = body\n\n    def json(self) -> dict:\n        return json.loads(self.body) if self.body else {}\n\n\nclass RESTResponse:\n    def __init__(self, status: int, body: any = None,\n                 headers: dict = None):\n        self.status = status\n        self.body = json.dumps(body) if body is not None else \"\"\n        self.headers = headers or {}\n        self.headers[\"Content-Type\"] = \"application/json\"\n\n\nclass RESTRouter:\n    def __init__(self):\n        self._routes: Dict[str, Dict[str, callable]] = {}\n        self.db = Database()\n\n    def _etag(self, data: str) -> str:\n        return hashlib.md5(data.encode()).hexdigest()[:8]\n\n    def _parse_path(self, path: str) -> tuple:\n        parts = path.strip(\"/\").split(\"/\")\n        if len(parts) >= 1:\n            resource = parts[0]\n            rid = int(parts[1]) if len(parts) > 1 and parts[1].isdigit() else None\n            return resource, rid\n        return None, None\n\n    def _add_hateoas(self, data: dict, resource: str) -> dict:\n        if isinstance(data, dict) and \"id\" in data:\n            rid = data[\"id\"]\n            data[\"_links\"] = {\n                \"self\": {\"href\": f\"/{resource}/{rid}\", \"method\": \"GET\"},\n                \"update\": {\"href\": f\"/{resource}/{rid}\", \"method\": \"PUT\"},\n                \"delete\": {\"href\": f\"/{resource}/{rid}\", \"method\": \"DELETE\"},\n            }\n        return data\n\n    def handle(self, request: RESTRequest) -> RESTResponse:\n        print(f\"[REQUEST] {request.method} {request.path}\")\n\n        resource, rid = self._parse_path(request.path)\n\n        if not resource or resource not in self.db._data:\n            return RESTResponse(404, {\"error\": f\"Resource /{resource} not found\"})\n\n        if_none_match = request.headers.get(\"If-None-Match\", \"\")\n\n        if request.method == \"GET\":\n            if rid:\n                item = self.db.find_by_id(resource, rid)\n                if not item:\n                    return RESTResponse(404, {\"error\": \"Not found\"})\n                body_str = json.dumps(item)\n                etag = self._etag(body_str)\n                if if_none_match == etag:\n                    return RESTResponse(304)\n                item = self._add_hateoas(item, resource)\n                return RESTResponse(200, item, {\"ETag\": etag,\n                    \"Cache-Control\": \"public, max-age=3600\"})\n            items = [self._add_hateoas(i, resource)\n                     for i in self.db.list_all(resource)]\n            return RESTResponse(200, items)\n\n        elif request.method == \"POST\":\n            data = request.json()\n            if not data:\n                return RESTResponse(400, {\"error\": \"Empty body\"})\n            created = self.db.create(resource, data)\n            created = self._add_hateoas(created, resource)\n            return RESTResponse(201, created,\n                {\"Location\": f\"/{resource}/{created['id']}\"})\n\n        elif request.method == \"PUT\":\n            if not rid:\n                return RESTResponse(400, {\"error\": \"ID required in path\"})\n            data = request.json()\n            if not data:\n                return RESTResponse(400, {\"error\": \"Empty body\"})\n            replaced = self.db.replace(resource, rid, data)\n            if not replaced:\n                return RESTResponse(404, {\"error\": \"Not found\"})\n            replaced = self._add_hateoas(replaced, resource)\n            return RESTResponse(200, replaced)\n\n        elif request.method == \"PATCH\":\n            if not rid:\n                return RESTResponse(400, {\"error\": \"ID required in path\"})\n            data = request.json()\n            if not data:\n                return RESTResponse(400, {\"error\": \"Empty body\"})\n            updated = self.db.update(resource, rid, data)\n            if not updated:\n                return RESTResponse(404, {\"error\": \"Not found\"})\n            updated = self._add_hateoas(updated, resource)\n            return RESTResponse(200, updated)\n\n        elif request.method == \"DELETE\":\n            if not rid:\n                return RESTResponse(400, {\"error\": \"ID required in path\"})\n            if self.db.delete(resource, rid):\n                return RESTResponse(204)\n            return RESTResponse(404, {\"error\": \"Not found\"})\n\n        return RESTResponse(405, {\"error\": \"Method not allowed\"})\n\n\n# Simulated request flow\nrouter = RESTRouter()\nrequests = [\n    RESTRequest(\"GET\", \"/books\"),\n    RESTRequest(\"GET\", \"/books/1\"),\n    RESTRequest(\"POST\", \"/books\", body=json.dumps(\n        {\"title\": \"Fahrenheit 451\", \"author\": \"Ray Bradbury\",\n         \"isbn\": \"9781451673319\", \"year\": 1953})),\n    RESTRequest(\"PUT\", \"/books/1\", body=json.dumps(\n        {\"title\": \"Nineteen Eighty-Four\", \"author\": \"George Orwell\",\n         \"isbn\": \"9780451524935\", \"year\": 1949})),\n    RESTRequest(\"PATCH\", \"/books/2\", body=json.dumps({\"year\": 1931})),\n    RESTRequest(\"DELETE\", \"/books/3\"),\n]\n\nfor req in requests:\n    resp = router.handle(req)\n    print(f\"[RESPONSE] {resp.status}: {resp.body[:80] if resp.body else '(empty)'}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ REST Client Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <map>\n#include <sstream>\n#include <functional>\n#include <curl/curl.h>  // Requires libcurl\n\nclass RestClient {\nprivate:\n    std::string baseUrl;\n    std::map<std::string, std::string> defaultHeaders;\n    struct curl_slist* headersList;\n\n    static size_t writeCallback(void* contents, size_t size,\n                                size_t nmemb, std::string* output) {\n        size_t totalSize = size * nmemb;\n        output->append(static_cast<char*>(contents), totalSize);\n        return totalSize;\n    }\n\n    std::string buildUrl(const std::string& endpoint) {\n        return baseUrl + endpoint;\n    }\n\n    void setHeaders(CURL* curl) {\n        headersList = nullptr;\n        for (const auto& [key, value] : defaultHeaders) {\n            std::string header = key + \": \" + value;\n            headersList = curl_slist_append(headersList, header.c_str());\n        }\n        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headersList);\n    }\n\npublic:\n    struct Response {\n        int statusCode;\n        std::string body;\n        std::map<std::string, std::string> headers;\n    };\n\n    RestClient(const std::string& base)\n        : baseUrl(base), headersList(nullptr) {\n        defaultHeaders[\"Accept\"] = \"application/json\";\n        defaultHeaders[\"Content-Type\"] = \"application/json\";\n        defaultHeaders[\"User-Agent\"] = \"REST-Client-CPP/1.0\";\n        curl_global_init(CURL_GLOBAL_ALL);\n    }\n\n    ~RestClient() {\n        curl_global_cleanup();\n    }\n\n    Response get(const std::string& endpoint,\n                 const std::map<std::string, std::string>& params = {},\n                 const std::string& ifNoneMatch = \"\") {\n        CURL* curl = curl_easy_init();\n        std::string responseBody;\n        std::string url = buildUrl(endpoint);\n\n        // Build query string\n        if (!params.empty()) {\n            url += \"?\";\n            for (const auto& [key, value] : params) {\n                url += key + \"=\" + value + \"&\";\n            }\n            url.pop_back(); // Remove trailing &\n        }\n\n        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());\n        curl_easy_setopt(curl, CURLOPT_HTTPGET, 1L);\n        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, writeCallback);\n        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &responseBody);\n        curl_easy_setopt(curl, CURLOPT_TIMEOUT, 30L);\n\n        if (!ifNoneMatch.empty()) {\n            defaultHeaders[\"If-None-Match\"] = ifNoneMatch;\n        }\n        setHeaders(curl);\n\n        CURLcode res = curl_easy_perform(curl);\n        Response response;\n        response.body = responseBody;\n\n        if (res == CURLE_OK) {\n            curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &response.statusCode);\n        } else {\n            response.statusCode = 0;\n            response.body = \"CURL error: \" + std::string(curl_easy_strerror(res));\n        }\n\n        curl_slist_free_all(headersList);\n        defaultHeaders.erase(\"If-None-Match\");\n        curl_easy_cleanup(curl);\n        return response;\n    }\n\n    Response post(const std::string& endpoint, const std::string& body) {\n        CURL* curl = curl_easy_init();\n        std::string responseBody;\n        std::string url = buildUrl(endpoint);\n\n        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());\n        curl_easy_setopt(curl, CURLOPT_POST, 1L);\n        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, body.c_str());\n        curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, body.length());\n        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, writeCallback);\n        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &responseBody);\n        curl_easy_setopt(curl, CURLOPT_TIMEOUT, 30L);\n\n        setHeaders(curl);\n\n        CURLcode res = curl_easy_perform(curl);\n        curl_slist_free_all(headersList);\n        Response response;\n        response.body = responseBody;\n        if (res == CURLE_OK) {\n            curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &response.statusCode);\n        } else {\n            response.statusCode = 0;\n            response.body = \"CURL error: \" + std::string(curl_easy_strerror(res));\n        }\n        curl_easy_cleanup(curl);\n        return response;\n    }\n\n    Response put(const std::string& endpoint, const std::string& body) {\n        CURL* curl = curl_easy_init();\n        std::string responseBody;\n        std::string url = buildUrl(endpoint);\n\n        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());\n        curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, \"PUT\");\n        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, body.c_str());\n        curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, body.length());\n        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, writeCallback);\n        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &responseBody);\n        curl_easy_setopt(curl, CURLOPT_TIMEOUT, 30L);\n\n        setHeaders(curl);\n\n        CURLcode res = curl_easy_perform(curl);\n        curl_slist_free_all(headersList);\n        Response response;\n        response.body = responseBody;\n        if (res == CURLE_OK) {\n            curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &response.statusCode);\n        } else {\n            response.statusCode = 0;\n            response.body = \"CURL error: \" + std::string(curl_easy_strerror(res));\n        }\n        curl_easy_cleanup(curl);\n        return response;\n    }\n\n    Response del(const std::string& endpoint) {\n        CURL* curl = curl_easy_init();\n        std::string responseBody;\n        std::string url = buildUrl(endpoint);\n\n        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());\n        curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, \"DELETE\");\n        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, writeCallback);\n        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &responseBody);\n        curl_easy_setopt(curl, CURLOPT_TIMEOUT, 30L);\n\n        setHeaders(curl);\n\n        CURLcode res = curl_easy_perform(curl);\n        curl_slist_free_all(headersList);\n        Response response;\n        response.body = responseBody;\n        if (res == CURLE_OK) {\n            curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &response.statusCode);\n        } else {\n            response.statusCode = 0;\n            response.body = \"CURL error: \" + std::string(curl_easy_strerror(res));\n        }\n        curl_easy_cleanup(curl);\n        return response;\n    }\n};\n\n// Usage example\nint main() {\n    RestClient client(\"https://api.example.com\");\n\n    // GET with caching\n    auto r1 = client.get(\"/v1/books/1\");\n    std::cout << \"GET /books/1 -> \" << r1.statusCode << \": \"\n              << r1.body.substr(0, 100) << std::endl;\n\n    // Follow up with conditional GET\n    auto r2 = client.get(\"/v1/books/1\", {}, \"etag_from_r1\");\n    std::cout << \"Conditional GET -> \" << r2.statusCode << std::endl;\n\n    // POST\n    auto r3 = client.post(\"/v1/books\",\n        R\"({\"title\":\"Dune\",\"author\":\"Frank Herbert\",\"isbn\":\"9780441172719\"})\");\n    std::cout << \"POST /v1/books -> \" << r3.statusCode << std::endl;\n\n    // DELETE\n    auto r4 = client.del(\"/v1/books/3\");\n    std::cout << \"DELETE /v1/books/3 -> \" << r4.statusCode << std::endl;\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15113-rest-vs-soap-vs-graphql-vs-grpc-comparison",
      children: "15.1.13 REST vs SOAP vs GraphQL vs gRPC Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Ordering at Different Restaurants"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Paradigm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Restaurant Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "REST"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffet: you walk to each station (resource), pick what you want"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SOAP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine dining with a strict protocol: you must use the correct fork for each course, follow exact etiquette"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GraphQL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customizable meal: tell the chef exactly what ingredients you want, they prepare exactly that"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "gRPC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast-food drive-through: predefined combos (protobuf schema), fast, efficient, multiple lanes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "REST"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SOAP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GraphQL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "gRPC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protocol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/1.1, HTTP/2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP, SMTP, JMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Message format"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON, XML, plain text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML (SOAP envelope)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol Buffers (binary)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interface definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAPI (optional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WSDL (required)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema Definition Language (SDL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".proto files (required)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transport"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP, TCP, message queues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless or stateful"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Caching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native HTTP caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (single endpoint)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in caching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Streaming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (SSE, chunked)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subscriptions (via WS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native (unary, server, client, bidirectional)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loose (JSON dynamic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (XSD schemas)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (SDL types)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (protobuf)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Client generation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAPI codegen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WSDL codegen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GraphQL Codegen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "protoc compiler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (XML parsing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable (query complexity)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best (binary, multiplexed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tooling maturity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning curve"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public APIs, web services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise, banking, strict contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile apps, flexible UIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices, internal services"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use Which:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Choice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public web API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal HTTP support, cacheable, simple"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise integration with contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal contracts (WSDL), ACID transactions, WS-* standards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile app with varied UIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GraphQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client controls data shape, reduces over-fetching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Internal microservices communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gRPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast binary serialization, HTTP/2 streaming, typed contracts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time data feeds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gRPC streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native bidirection streaming over HTTP/2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple CRUD API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Straightforward, well-understood by all clients"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Richer Mermaid: API Architecture Comparison (REST vs GraphQL vs gRPC vs WebSocket)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n  subgraph Clients[\"Client Layer\"]\n    direction LR\n    WA[\"Web App<br/>(Browser)\"]\n    MA[\"Mobile App\"]\n    SR[\"Server/Service\"]\n    IO[\"IoT Device\"]\n  end\n\n  subgraph API[\"API Layer\"]\n    direction TB\n    REST[\"REST API<br/>HTTP/1.1 + JSON\"]\n    GQL[\"GraphQL<br/>Single Endpoint\"]\n    GRPC[\"gRPC<br/>HTTP/2 + Protobuf\"]\n    WS[\"WebSocket<br/>Full-Duplex TCP\"]\n  end\n\n  subgraph Features[\"Feature Comparison\"]\n    direction LR\n    F1[\"🔄 CRUD<br/>REST\"]\n    F2[\"📊 Flexible Query<br/>GraphQL\"]\n    F3[\"⚡ Binary Stream<br/>gRPC\"]\n    F4[\"💬 Real-Time<br/>WebSocket\"]\n  end\n\n  subgraph Transport[\"Transport Protocols\"]\n    HTTP1[\"HTTP/1.1\"]\n    HTTP2[\"HTTP/2\"]\n    TCP[\"TCP\"]\n    UDP[\"UDP\"]\n  end\n\n  WA --> REST\n  WA --> GQL\n  WA --> WS\n  MA --> REST\n  MA --> GQL\n  MA --> GRPC\n  SR --> GRPC\n  SR --> REST\n  IO --> WS\n  IO --> REST\n\n  REST --> HTTP1\n  GQL --> HTTP1\n  GRPC --> HTTP2\n  WS --> TCP\n  WS --> HTTP1\n\n  REST -.-> F1\n  GQL -.-> F2\n  GRPC -.-> F3\n  WS -.-> F4\n\n  classDef client fill:#e1f5fe,stroke:#0288d1,stroke-width:2px\n  classDef api fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px\n  classDef feature fill:#e8f5e9,stroke:#388e3c,stroke-width:2px\n  classDef transport fill:#fff3e0,stroke:#f57c00,stroke-width:2px\n  class WA,MA,SR,IO client\n  class REST,GQL,GRPC,WS api\n  class F1,F2,F3,F4 feature\n  class HTTP1,HTTP2,TCP,UDP transport\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15114-interview-corner",
      children: "15.1.14 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: What is the difference between PUT and PATCH?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PUT replaces the entire resource. PATCH applies a partial update. PUT is idempotent; PATCH is not necessarily idempotent (depends on the patch format). PUT sends the full resource representation; PATCH sends only the changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PUT /users/42  {\"name\":\"Alice\",\"email\":\"a@b.com\",\"age\":30}\n  → Entire resource replaced. Repeating the same PUT yields the same state.\n\nPATCH /users/42  {\"age\": 31}\n  → Only the age field changes. Repeating JSON Merge Patch with {\"age\":31}\n    is idempotent. But PATCH with {\"op\":\"increment\",\"path\":\"/age\",\"value\":1}\n    is NOT idempotent (age increases each time).\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: What does idempotency mean in HTTP methods?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An idempotent method produces the same server state regardless of how many times it's applied. GET, PUT, DELETE, HEAD, OPTIONS, TRACE are idempotent. POST and PATCH are not (by default). Idempotency is critical for retry safety: if a client doesn't receive a response, it can safely retry GET/PUT/DELETE without side effects."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: Explain HATEOAS and its role in REST."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HATEOAS (Hypermedia as the Engine of Application State) means API responses include links to navigate related resources. This allows clients to discover the API dynamically without hardcoding URLs. A Level 3 (Richardson Maturity Model) REST API uses HATEOAS. In practice, most APIs are Level 2 (HTTP methods + resources), and few achieve Level 3."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: What are the six REST constraints?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client-Server: separation of concerns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stateless: each request contains all context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cacheable: responses declare cacheability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uniform Interface: standard resource identification, manipulation through representations, self-descriptive messages, HATEOAS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layered System: intermediaries transparent to client"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code on Demand (optional): server sends executable code"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: URI versioning vs header versioning vs query versioning: which is best?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["URI versioning (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/v1/resource"
      }), ") is most common → visible in URLs, cache-friendly, easy to route. Header versioning keeps URLs clean but is opaque. Query versioning (", (0,jsx_runtime.jsx)(_components.code, {
        children: "?version=1"
      }), ") is simple but pollutes URLs and breaks caching. For public APIs, URI versioning is recommended; for internal APIs, header versioning can be acceptable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: How does REST handle state if it's stateless?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Statelessness refers to the server not storing client session state. Application state is maintained on the client and transferred to the server with each request (usually via tokens, authentication headers, and request parameters). The server never stores \"this client was here before\" context."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: What is the Richardson Maturity Model?"
      })
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
            children: "Uses HTTP as a tunnel; single URI, single method (POST)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple URIs (individual resources) but single method"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP Verbs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URIs + proper HTTP methods (GET/POST/PUT/DELETE) + status codes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hypermedia Controls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level 2 + HATEOAS links for API discoverability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most public APIs operate at Level 2. Achieving Level 3 is rare but is \"true REST\" per Fielding's definition."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15115-applications-in-real-systems",
      children: "15.1.15 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub REST API"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://api.github.com"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GitHub's API is a textbook REST implementation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GET /repos/:owner/:repo          → Repository details\nGET /repos/:owner/:repo/issues   → List issues\nPOST /repos/:owner/:repo/issues  → Create issue\nPATCH /repos/:owner/:repo/issues/:number  → Update issue\nGET /repos/:owner/:repo/pulls    → List pull requests\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key practices:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HATEOAS: responses include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_links"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rel: \"self\""
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"html\""
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"comments\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pagination: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Link"
        }), " header with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rel=\"next\""
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rel=\"last\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rate limiting: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "X-RateLimit-Limit"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "X-RateLimit-Remaining"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "X-RateLimit-Reset"
        }), " headers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ETag caching: responses include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ETag"
        }), "; conditional requests return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "304 Not Modified"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Versioning: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Accept: application/vnd.github.v3+json"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stripe API"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://api.stripe.com"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stripe's API demonstrates resource-oriented design:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /v1/customers            → Create customer\nGET /v1/customers/:id         → Retrieve customer\nPOST /v1/charges              → Create charge (payment)\nPOST /v1/refunds              → Refund a charge\nGET /v1/balance               → Retrieve account balance\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key practices:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Idempotency keys: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Idempotency-Key"
        }), " header ensures safe retries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Expansion: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?expand[]=customer"
        }), " to include related resources inline"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pagination: cursor-based with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?starting_after=..."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Object-oriented: all resources are JSON objects with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "object"
        }), " type field"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AWS REST APIs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AWS services expose REST APIs with signature-based authentication:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GET /?Action=DescribeInstances&Version=2016-11-15  → List EC2 instances\nPUT /{bucket}/{key}                                 → Upload S3 object\nGET /{bucket}/{key}                                 → Download S3 object\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key practices:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Query-based actions: some APIs use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?Action=..."
        }), " (REST-RPC hybrid)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Signature V4: HMAC-SHA256 signed requests for authentication"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["S3 REST: fully RESTful with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET/PUT/DELETE /bucket/key"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning in API and S3: both URI and action parameter versioning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TypeScript Implementation: RESTClient with Full HTTP Method Support"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RequestOptions {\n  headers?: Record<string, string>;\n  params?: Record<string, string>;\n  timeout?: number;\n}\n\ninterface ApiResponse<T = any> {\n  statusCode: number;\n  headers: Record<string, string>;\n  data: T | null;\n  ok: boolean;\n}\n\ninterface PaginatedResponse<T> {\n  data: T[];\n  total: number;\n  page: number;\n  pageSize: number;\n  hasMore: boolean;\n  nextPage?: string;\n}\n\nclass RESTClient {\n  private baseUrl: string;\n  private defaultHeaders: Record<string, string>;\n  private authToken: string | null = null;\n\n  constructor(baseUrl: string) {\n    this.baseUrl = baseUrl.replace(/\\/$/, '');\n    this.defaultHeaders = {\n      'Content-Type': 'application/json',\n      'Accept': 'application/json',\n      'User-Agent': 'RESTClient-TS/1.0'\n    };\n  }\n\n  setAuthToken(token: string): void {\n    this.authToken = token;\n    this.defaultHeaders['Authorization'] = `Bearer ${token}`;\n  }\n\n  clearAuthToken(): void {\n    this.authToken = null;\n    delete this.defaultHeaders['Authorization'];\n  }\n\n  private buildUrl(endpoint: string, params?: Record<string, string>): string {\n    const url = new URL(`${this.baseUrl}${endpoint}`);\n    if (params) {\n      Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));\n    }\n    return url.toString();\n  }\n\n  private buildHeaders(extra?: Record<string, string>): Record<string, string> {\n    return { ...this.defaultHeaders, ...extra };\n  }\n\n  private async request<T>(\n    method: string,\n    endpoint: string,\n    body?: any,\n    options?: RequestOptions\n  ): Promise<ApiResponse<T>> {\n    const url = this.buildUrl(endpoint, options?.params);\n    const headers = this.buildHeaders(options?.headers);\n    const controller = new AbortController();\n    const timeout = options?.timeout ?? 30000;\n    const timeoutId = setTimeout(() => controller.abort(), timeout);\n\n    try {\n      const fetchOptions: RequestInit = {\n        method,\n        headers,\n        signal: controller.signal,\n      };\n      if (body && method !== 'GET' && method !== 'HEAD') {\n        fetchOptions.body = JSON.stringify(body);\n      }\n\n      const response = await fetch(url, fetchOptions);\n      const responseHeaders: Record<string, string> = {};\n      response.headers.forEach((value, key) => { responseHeaders[key] = value; });\n\n      let data: T | null = null;\n      const contentType = response.headers.get('content-type') || '';\n      if (contentType.includes('application/json')) {\n        data = await response.json() as T;\n      } else {\n        data = await response.text() as unknown as T;\n      }\n\n      return {\n        statusCode: response.status,\n        headers: responseHeaders,\n        data,\n        ok: response.ok\n      };\n    } catch (error: any) {\n      if (error.name === 'AbortError') {\n        return { statusCode: 0, headers: {}, data: null, ok: false };\n      }\n      throw error;\n    } finally {\n      clearTimeout(timeoutId);\n    }\n  }\n\n  async get<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {\n    return this.request<T>('GET', endpoint, undefined, options);\n  }\n\n  async post<T>(endpoint: string, body?: any, options?: RequestOptions): Promise<ApiResponse<T>> {\n    return this.request<T>('POST', endpoint, body, options);\n  }\n\n  async put<T>(endpoint: string, body?: any, options?: RequestOptions): Promise<ApiResponse<T>> {\n    return this.request<T>('PUT', endpoint, body, options);\n  }\n\n  async patch<T>(endpoint: string, body?: any, options?: RequestOptions): Promise<ApiResponse<T>> {\n    return this.request<T>('PATCH', endpoint, body, options);\n  }\n\n  async delete<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {\n    return this.request<T>('DELETE', endpoint, undefined, options);\n  }\n\n  // Pagination helper for cursor/offset-based pagination\n  async getAllPages<T>(\n    endpoint: string,\n    pageSize: number = 100,\n    options?: RequestOptions\n  ): Promise<T[]> {\n    const allItems: T[] = [];\n    let page = 1;\n    let hasMore = true;\n\n    while (hasMore) {\n      const response = await this.get<PaginatedResponse<T>>(endpoint, {\n        ...options,\n        params: { ...options?.params, page: String(page), pageSize: String(pageSize) }\n      });\n\n      if (response.ok && response.data) {\n        allItems.push(...response.data.data);\n        hasMore = response.data.hasMore;\n        page++;\n      } else {\n        hasMore = false;\n      }\n    }\n    return allItems;\n  }\n\n  // Status code handling helper\n  handleStatusCode(statusCode: number): string {\n    const statusMessages: Record<number, string> = {\n      200: 'OK',\n      201: 'Created',\n      204: 'No Content',\n      304: 'Not Modified',\n      400: 'Bad Request',\n      401: 'Unauthorized',\n      403: 'Forbidden',\n      404: 'Not Found',\n      409: 'Conflict',\n      422: 'Unprocessable Entity',\n      429: 'Too Many Requests',\n      500: 'Internal Server Error',\n      502: 'Bad Gateway',\n      503: 'Service Unavailable'\n    };\n    return statusMessages[statusCode] || 'Unknown';\n  }\n}\n\n// Usage example\nasync function demoRESTClient() {\n  const client = new RESTClient('https://api.example.com/v1');\n  client.setAuthToken('eyJhbGciOiJIUzI1NiIs...');\n\n  // GET with pagination\n  const getResult = await client.get('/books', {\n    params: { page: '1', limit: '10' }\n  });\n  console.log(`GET /books → ${getResult.statusCode} ${client.handleStatusCode(getResult.statusCode)}`);\n  // Output: GET /books → 200 OK\n\n  // POST - Create resource\n  const postResult = await client.post('/books', {\n    title: 'Dune',\n    author: 'Frank Herbert',\n    isbn: '9780441172719'\n  });\n  console.log(`POST /books → ${postResult.statusCode} (Location: ${postResult.headers['location']})`);\n  // Output: POST /books → 201 (Location: /v1/books/42)\n\n  // PUT - Full replacement\n  const putResult = await client.put('/books/42', {\n    title: 'Dune (Revised)',\n    author: 'Frank Herbert',\n    isbn: '9780441172719',\n    year: 1965\n  });\n  console.log(`PUT /books/42 → ${putResult.statusCode} ${client.handleStatusCode(putResult.statusCode)}`);\n  // Output: PUT /books/42 → 200 OK\n\n  // DELETE\n  const deleteResult = await client.delete('/books/42');\n  console.log(`DELETE /books/42 → ${deleteResult.statusCode}`);\n  // Output: DELETE /books/42 → 204\n\n  // Error handling\n  const notFound = await client.get('/books/999');\n  if (!notFound.ok) {\n    console.error(`Error ${notFound.statusCode}: ${client.handleStatusCode(notFound.statusCode)}`);\n    // Output: Error 404: Not Found\n  }\n\n  // Pagination\n  const allBooks = await client.getAllPages('/books', 50);\n  console.log(`Fetched ${allBooks.length} books across all pages`);\n}\n\ndemoRESTClient();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "152-websockets",
      children: "15.2 WebSockets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WebSocket (RFC 6455) provides full-duplex communication over a single TCP connection after an HTTP upgrade handshake. The protocol is designed for real-time applications such as chat, live updates, and gaming."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Handshake:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GET /chat HTTP/1.1\nHost: server.example.com\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\nSec-WebSocket-Version: 13\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Response:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.1 101 Switching Protocols\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frame format:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "FIN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RSV"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Opcode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mask"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Length"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Masking Key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Payload"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7/7+16/7+64 b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 or 4 B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Opcode types: 1 (text), 2 (binary), 8 (close), 9 (ping), 10 (pong)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Clients mask payload data; servers do not. Close frames carry a status code (1000 normal, 1001 going away, 1002 protocol error, 1003 unsupported data)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TypeScript Implementation: WebSocketManager with Frame Handling"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type WebSocketState = 'CONNECTING' | 'OPEN' | 'CLOSING' | 'CLOSED';\ntype MessageType = 'text' | 'binary' | 'close' | 'ping' | 'pong';\n\ninterface WebSocketFrame {\n  fin: boolean;\n  opcode: number;\n  masked: boolean;\n  payloadLength: number;\n  maskingKey?: Uint8Array;\n  payload: ArrayBuffer;\n}\n\ninterface MessageEvent {\n  type: MessageType;\n  data: string | ArrayBuffer;\n  timestamp: number;\n}\n\ninterface WebSocketConfig {\n  url: string;\n  protocols?: string | string[];\n  reconnectInterval?: number;\n  maxReconnectAttempts?: number;\n  pingInterval?: number;\n}\n\nclass WebSocketManager {\n  private ws: WebSocket | null = null;\n  private state: WebSocketState = 'CLOSED';\n  private config: Required<WebSocketConfig>;\n  private reconnectAttempts: number = 0;\n  private pingTimer: number | null = null;\n  private messageQueue: string[] = [];\n  private listeners: Map<MessageType, Set<(event: MessageEvent) => void>> = new Map();\n  private fragmentationBuffer: ArrayBuffer[] = [];\n\n  constructor(config: WebSocketConfig) {\n    this.config = {\n      url: config.url,\n      protocols: config.protocols ?? [],\n      reconnectInterval: config.reconnectInterval ?? 3000,\n      maxReconnectAttempts: config.maxReconnectAttempts ?? 5,\n      pingInterval: config.pingInterval ?? 30000\n    };\n    this.connect();\n  }\n\n  private async connect(): Promise<void> {\n    if (this.state === 'CONNECTING' || this.state === 'OPEN') return;\n\n    this.state = 'CONNECTING';\n    try {\n      this.ws = new WebSocket(this.config.url, this.config.protocols);\n      this.ws.onopen = () => {\n        this.state = 'OPEN';\n        this.reconnectAttempts = 0;\n        this.flushMessageQueue();\n        this.startPingInterval();\n        this.emit('text', { type: 'text', data: 'connected', timestamp: Date.now() });\n      };\n\n      this.ws.onmessage = (event: MessageEvent) => {\n        const frame = this.parseFrame(event);\n        this.handleFrame(frame);\n      };\n\n      this.ws.onclose = (event: CloseEvent) => {\n        this.state = 'CLOSED';\n        this.stopPingInterval();\n        this.emit('close', {\n          type: 'close',\n          data: `code=${event.code}, reason=${event.reason}`,\n          timestamp: Date.now()\n        });\n        this.attemptReconnect();\n      };\n\n      this.ws.onerror = () => {\n        this.emit('close', { type: 'close', data: 'WebSocket error', timestamp: Date.now() });\n      };\n    } catch (error) {\n      this.attemptReconnect();\n    }\n  }\n\n  private parseFrame(event: MessageEvent): WebSocketFrame {\n    const opcode = event.data instanceof ArrayBuffer ? 2 : 1; // binary=2, text=1\n    return {\n      fin: true,\n      opcode,\n      masked: false,\n      payloadLength: event.data instanceof ArrayBuffer ? event.data.byteLength : (event.data as string).length,\n      payload: event.data instanceof ArrayBuffer ? event.data : new TextEncoder().encode(event.data as string).buffer\n    };\n  }\n\n  private handleFrame(frame: WebSocketFrame): void {\n    switch (frame.opcode) {\n      case 0x0: // Continuation frame (fragmentation)\n        this.fragmentationBuffer.push(frame.payload);\n        break;\n      case 0x1: // Text frame\n        if (!frame.fin) {\n          this.fragmentationBuffer.push(frame.payload);\n        } else if (this.fragmentationBuffer.length > 0) {\n          this.fragmentationBuffer.push(frame.payload);\n          this.assembleAndEmit('text');\n        } else {\n          const text = new TextDecoder().decode(frame.payload);\n          this.emit('text', { type: 'text', data: text, timestamp: Date.now() });\n        }\n        break;\n      case 0x2: // Binary frame\n        this.emit('binary', { type: 'binary', data: frame.payload, timestamp: Date.now() });\n        break;\n      case 0x8: // Close frame\n        this.ws?.close(1000, 'Normal closure');\n        break;\n      case 0x9: // Ping\n        this.sendPong();\n        break;\n      case 0xA: // Pong\n        this.emit('pong', { type: 'pong', data: 'pong', timestamp: Date.now() });\n        break;\n    }\n  }\n\n  private assembleAndEmit(type: 'text' | 'binary'): void {\n    const totalLength = this.fragmentationBuffer.reduce((acc, buf) => acc + buf.byteLength, 0);\n    const assembled = new Uint8Array(totalLength);\n    let offset = 0;\n    for (const buf of this.fragmentationBuffer) {\n      assembled.set(new Uint8Array(buf), offset);\n      offset += buf.byteLength;\n    }\n    this.fragmentationBuffer = [];\n    if (type === 'text') {\n      this.emit('text', { type: 'text', data: new TextDecoder().decode(assembled), timestamp: Date.now() });\n    } else {\n      this.emit('binary', { type: 'binary', data: assembled.buffer, timestamp: Date.now() });\n    }\n  }\n\n  send(data: string | ArrayBuffer): void {\n    if (this.state !== 'OPEN') {\n      this.messageQueue.push(typeof data === 'string' ? data : '');\n      return;\n    }\n    this.ws?.send(data);\n  }\n\n  private flushMessageQueue(): void {\n    while (this.messageQueue.length > 0) {\n      const msg = this.messageQueue.shift();\n      if (msg) this.ws?.send(msg);\n    }\n  }\n\n  private sendPong(): void {\n    // Browser WebSocket API handles pong automatically\n    // This is a placeholder for custom implementations\n    this.emit('pong', { type: 'pong', data: 'pong', timestamp: Date.now() });\n  }\n\n  private startPingInterval(): void {\n    this.pingTimer = window.setInterval(() => {\n      if (this.state === 'OPEN') {\n        this.ws?.send(new Uint8Array([0x09])); // Ping frame (opcode 9)\n      }\n    }, this.config.pingInterval);\n  }\n\n  private stopPingInterval(): void {\n    if (this.pingTimer !== null) {\n      clearInterval(this.pingTimer);\n      this.pingTimer = null;\n    }\n  }\n\n  private attemptReconnect(): void {\n    if (this.reconnectAttempts >= this.config.maxReconnectAttempts) return;\n    this.reconnectAttempts++;\n    setTimeout(() => this.connect(), this.config.reconnectInterval);\n  }\n\n  private emit(type: MessageType, event: MessageEvent): void {\n    this.listeners.get(type)?.forEach(cb => cb(event));\n  }\n\n  on(type: MessageType, callback: (event: MessageEvent) => void): void {\n    if (!this.listeners.has(type)) this.listeners.set(type, new Set());\n    this.listeners.get(type)!.add(callback);\n  }\n\n  off(type: MessageType, callback: (event: MessageEvent) => void): void {\n    this.listeners.get(type)?.delete(callback);\n  }\n\n  close(code: number = 1000, reason: string = 'Normal closure'): void {\n    this.stopPingInterval();\n    this.ws?.close(code, reason);\n    this.state = 'CLOSED';\n  }\n\n  getState(): WebSocketState {\n    return this.state;\n  }\n}\n\n// Usage example\nfunction demoWebSocket() {\n  const ws = new WebSocketManager({\n    url: 'wss://echo.example.com/chat',\n    pingInterval: 25000,\n    reconnectInterval: 2000,\n    maxReconnectAttempts: 10\n  });\n\n  ws.on('text', (event) => {\n    console.log(`[WS] Message received: ${event.data}`);\n    // Output: [WS] Message received: {\"type\":\"chat\",\"user\":\"alice\",\"text\":\"Hello\"}\n  });\n\n  ws.on('close', (event) => {\n    console.log(`[WS] Connection closed: ${event.data}`);\n    // Output: [WS] Connection closed: code=1000, reason=Normal closure\n  });\n\n  ws.on('pong', () => {\n    console.log('[WS] Pong received — keepalive confirmed');\n    // Output: [WS] Pong received — keepalive confirmed\n  });\n\n  // Send a message\n  ws.send(JSON.stringify({ type: 'chat', user: 'bob', text: 'Hi everyone!' }));\n\n  // Check state\n  console.log(`WebSocket state: ${ws.getState()}`);\n  // Output: WebSocket state: OPEN\n\n  // Graceful close\n  ws.close(1000, 'Client disconnecting');\n}\n\ndemoWebSocket();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "153-grpc",
      children: "15.3 gRPC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "gRPC uses Protocol Buffers for interface definition and HTTP/2 for transport. It supports four service types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unary"
        }), ": single request, single response (like REST)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server streaming"
        }), ": single request, stream of responses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Client streaming"
        }), ": stream of requests, single response."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bidirectional streaming"
        }), ": independent streams of requests and responses."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1531-protocol-buffers-definition",
      children: "15.3.1 Protocol Buffers Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-protobuf",
        children: "service UserService {\n  rpc GetUser (GetUserRequest) returns (User);\n  rpc ListUsers (ListUsersRequest) returns (stream User);\n  rpc UpdateUser (stream UpdateRequest) returns (UpdateResponse);\n}\n\nmessage User {\n  int32 id = 1;\n  string name = 2;\n  string email = 3;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "gRPC performance advantages over JSON-based REST: binary serialization is faster and more compact; HTTP/2 multiplexing eliminates head-of-line blocking; streaming reduces latency for real-time data."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "154-graphql",
      children: "15.4 GraphQL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GraphQL (Facebook, 2015) is a query language and server runtime for APIs. Clients specify the exact data they need, reducing over-fetching and under-fetching common in REST."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1541-query-structure",
      children: "15.4.1 Query Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-graphql",
        children: "{\n  user(id: 123) {\n    name\n    email\n    orders {\n      id\n      total\n      items {\n        name\n        price\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1542-schema-definition",
      children: "15.4.2 Schema Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-graphql",
        children: "type User {\n  id: ID!\n  name: String!\n  email: String!\n  orders: [Order!]!\n}\n\ntype Order {\n  id: ID!\n  total: Float!\n  items: [OrderItem!]!\n}\n\ntype Query {\n  user(id: ID!): User\n  users: [User!]!\n}\n\ntype Mutation {\n  createUser(name: String!, email: String!): User!\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GraphQL uses a single endpoint; the client specifies the data structure. Security concerns: complex queries can overload the server (depth limiting, query complexity analysis, rate limiting). Data loading efficiency requires batching (DataLoader pattern) to avoid N+1 query problems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "155-server-sent-events",
      children: "15.5 Server-Sent Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSE enables servers to push events to clients over HTTP. The client opens a connection; the server sends data as text/event-stream:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "data: {\"message\": \"Hello\"}\n\\n\\n\ndata: {\"message\": \"World\"}\n\\n\\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSE is simpler than WebSockets (HTTP only, unidirectional server→client, automatic reconnection) but suitable for notifications, live feeds, and status updates."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "156-webrtc",
      children: "15.6 WebRTC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WebRTC (Web Real-Time Communication, W3C/IETF) enables peer-to-peer audio, video, and data transfer between browsers without plugins."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signaling"
        }), ": SDP exchange via the application server (WebRTC does not define the signaling protocol; SIP, XMPP, or custom WebSocket signaling are used)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAT traversal"
        }), ": STUN (Session Traversal Utilities for NAT) discovers public IP and port; TURN (Traversal Using Relays around NAT) relays traffic when direct connection fails; ICE (Interactive Connectivity Establishment) coordinates STUN and TURN candidates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DTLS-SRTP"
        }), ": encrypts media streams. DTLS (Datagram TLS) provides key agreement; SRTP (Secure Real-time Transport Protocol) encrypts audio/video packets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DataChannel"
        }), ": SCTP over DTLS enables reliable/unreordered data streams."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "157-api-gateways",
      children: "15.7 API Gateways"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An API gateway is a reverse proxy that sits between clients and backend services. It handles:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Request routing (path-based or header-based)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authentication and authorization (OAuth2, JWT validation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate limiting (token bucket, leaky bucket per client)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Caching (response cache for idempotent requests)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load balancing across service instances"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Request/response transformation (XML↔JSON)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitoring and analytics (latency, error rates)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common API gateways: Kong, NGINX, AWS API Gateway, Envoy, Traefik."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-pro-tips",
      children: "💡 Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "REST ≠ CRUD"
        }), ": Not every resource needs all four CRUD operations. Design resources around business actions. For example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "POST /orders/{id}/cancel"
        }), " is more expressive than ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PATCH /orders/{id}"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{status: \"cancelled\"}"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "gRPC streaming is cheaper than polling"
        }), ": For real-time feeds, use gRPC server streaming instead of REST polling. One persistent gRPC stream replaces hundreds of REST GET requests, reducing both latency and server load."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GraphQL query complexity limits are mandatory"
        }), ": Without depth/width limiting, a single malicious query like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{users{posts{comments{user{posts{...}}}}}"
        }), " can bring down your server. Always enforce max depth (5–7) and query cost analysis."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WebRTC needs a TURN server"
        }), ": STUN works for 80–90% of NAT types, but symmetric NAT requires TURN relay. Always deploy a TURN server (coturn) for production WebRTC applications."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ETag + Cache-Control for production"
        }), ": Never rely on one alone. Cache-Control gives you a freshness window, ETag provides validation when stale. Together they minimize both bandwidth and server load."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rate limit at the gateway, not each service"
        }), ": Centralized rate limiting at the API gateway (Kong, Envoy) ensures consistent enforcement. Per-service rate limiting creates gaps and inconsistent user experience."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RESTful APIs model resources as nouns and HTTP methods as verbs, using status codes for results."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WebSocket provides full-duplex communication over a single TCP connection after an HTTP upgrade."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "gRPC uses Protocol Buffers and HTTP/2 for efficient binary streaming with four service types."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GraphQL lets clients specify exact data needs, solving over-fetching and under-fetching."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSE provides simple unidirectional server push over HTTP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WebRTC enables peer-to-peer audio/video/data between browsers via ICE/STUN/TURN."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Message Format"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Streaming"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REST (HTTP/1.1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON/XML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRUD APIs, web services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP (upgraded)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary/Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-duplex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chat, live updates, gaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gRPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol Buffers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unary/Server/Client/Bidi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices, real-time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GraphQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON (query string)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (subscriptions via WS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible data fetching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text/event-stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server→Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notifications, feeds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WebRTC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP (DTLS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary (media/data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peer-to-peer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Voice, video, file sharing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-restful-api-design-cheat-sheet",
      children: "Quick Reference: RESTful API Design Cheat Sheet"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Endpoint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Idempotent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/resources/{id}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Replace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/resources/{id}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/resources/{id}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/resources/{id}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "204"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
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
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRUD microservice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, well-understood, cacheable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time chat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebSocket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low latency, full-duplex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Internal microservices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gRPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast binary serialization, streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile app with flexible UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GraphQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-specified fields, reduce payload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server → browser notifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, auto-reconnect, HTTP-only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P2P video conference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebRTC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct browser-to-browser media"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study-api-gateway-migration-for-microservices",
      children: "Case Study: API Gateway Migration for Microservices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A growing SaaS company operated 20 microservices, each with its own authentication, rate limiting, and logging. As the system scaled to 500,000 daily active users, several issues emerged: each service implemented auth independently (OAuth2, JWT, API keys) leading to inconsistent security; rate limits were per-service, allowing abusive clients to overwhelm individual services; there was no centralized monitoring or caching layer; and clients had to manage 20 different base URLs. Response times degraded to 2-4 seconds during peak hours."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " The team migrated to Kong API Gateway as a centralized entry point. Kong was configured with: OAuth2 plugin for unified authentication (replacing per-service auth), Redis-backed rate limiting with tiered quotas (free: 10 req/min, pro: 100 req/min, enterprise: 10,000 req/min), response caching for idempotent GET endpoints (TTL: 300s), route-based traffic splitting for canary deployments, and Prometheus metrics export for unified monitoring. The migration followed a gradual rollout: first 5 services in week 1, 10 more in week 2, and all 20 by week 3. Each service was moved behind the gateway without code changes by configuring Kong's upstream targets and path-based routing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Results:"
      }), " Auth verification calls dropped by 60% (single gateway verification instead of per-service), rate limit enforcement became consistent (thousands of 429 responses eliminated), cache hit rate reached 72% reducing origin load, unified monitoring enabled 15-minute mean-time-to-detection (MTTD) for anomalies, and the client team went from managing 20 URLs to 1. Average response time improved from 3.2s to 480ms (6.7x improvement). The gateway handled 12,000 requests per second at peak with 8ms median latency overhead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Centralize cross-cutting concerns at the API gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement auth, rate limiting, caching, and logging at a single gateway layer rather than per-service to reduce duplication and ensure consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use token bucket for burst-tolerant rate limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure capacity (burst) and refill rate separately; burst handles traffic spikes while rate limits sustained throughput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement ETag + Cache-Control together"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-Control provides freshness windows for performance; ETag provides validation for cache efficiency; never rely on one alone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer URI versioning for public APIs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/v1/resources"
            }), " is cache-friendly, visible in URLs, and easy to route; header versioning hides the contract from casual inspection"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use HATEOAS links for API discoverability"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Include ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_links"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "self"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "next"
            }), ", and relationship links so clients navigate without hardcoded URLs"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Always validate input and return proper status codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400 for bad request, 422 for validation failures, 409 for conflicts — precise status codes enable automated error handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design resources around business actions, not CRUD"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "POST /orders/{id}/cancel"
            }), " endpoint is more expressive and discoverable than ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PATCH /orders/{id}"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{status: \"cancelled\"}"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which HTTP method is idempotent?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What does WebSocket use for the initial handshake?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDP upgrade"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP upgrade"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which gRPC service type allows independent bidirectional streams?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which WebRTC component relays traffic when direct P2P fails?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STUN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TURN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which Cache-Control directive prevents any caching?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no-cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no-store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "must-revalidate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which HTTP method is idempotent?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) POST"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) PATCH"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) PUT ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Both a and b"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What does WebSocket use for the initial handshake?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) UDP upgrade"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) HTTP upgrade ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) TLS directly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) DNS query"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which gRPC service type allows independent streams in both directions?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Unary"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Server streaming"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Bidirectional streaming ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Client streaming"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which WebRTC component relays traffic when direct P2P fails?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) STUN"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) TURN ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) ICE"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) SDP"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What prevents malicious deep queries in GraphQL?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Rate limiting"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Query complexity analysis ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) JWT validation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) DataLoader"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which Cache-Control directive prevents any caching?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["a) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "no-cache"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["b) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "no-store"
            }), " ✓"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["c) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["d) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "must-revalidate"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What status code does a conditional GET return when the resource has NOT changed?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 200 OK"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 204 No Content ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 304 Not Modified"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 412 Precondition Failed"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which rate limiting algorithm allows burst traffic?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Fixed window"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Token bucket ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Leaky bucket"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Sliding window log"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-c, 2-b, 3-c, 4-b, 5-b, 6-b, 7-c, 8-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RESTful APIs model resources as nouns with HTTP methods as verbs, leveraging status codes for result communication. The six REST constraints (client-server, stateless, cacheable, uniform interface, layered system, code on demand) define the architectural style. HTTP methods (GET/POST/PUT/DELETE/PATCH) have distinct semantics for safety and idempotency. Caching with ETag and Cache-Control dramatically improves performance. Rate limiting with token bucket algorithms protects against abuse. WebSockets provide full-duplex communication for real-time applications. gRPC uses Protocol Buffers and HTTP/2 for efficient binary streaming. GraphQL enables flexible client-driven queries. SSE offers simple server push. WebRTC enables browser-based peer-to-peer media. API gateways centralize cross-cutting concerns."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "1. What is the difference between PUT and PATCH in REST?"
      }), "\nPUT replaces the entire resource. It is idempotent — sending the same PUT request multiple times produces the same state. PATCH applies a partial update to a resource. It is not necessarily idempotent (depends on the patch format, e.g., JSON Merge Patch can be idempotent if values are absolute, but JSON Patch with increment operations is not). PUT sends the full resource representation; PATCH sends only the changes.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "2. How does a WebSocket connection differ from a long-lived HTTP connection?"
      }), "\nA long-lived HTTP connection (keep-alive) still uses request-response: client sends a request, server sends a response, and the connection stays open for more requests. WebSocket upgrades the connection via HTTP Upgrade handshake (101 Switching Protocols) and provides full-duplex communication where both sides can send messages independently at any time. WebSocket also has a binary frame format (opcodes, masking, fragmentation) and uses ping/pong for keepalive.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "3. What advantage does gRPC streaming have over REST polling?"
      }), "\ngRPC streaming (server-streaming, client-streaming, bidirectional) maintains a single persistent HTTP/2 connection. REST polling requires repeated HTTP requests, each with header overhead, TLS handshake overhead for new connections, and server processing for each request. A single gRPC stream can replace hundreds of REST GET requests, reducing latency (no repeated connection setup), bandwidth (binary protobuf vs JSON), and server load (one stream instead of many requests).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "4. How does GraphQL solve the over-fetching problem common in REST?"
      }), "\nIn REST, the server defines the response structure. A GET /users/42 endpoint might return all user fields (name, email, address, phone, orders, etc.) even if the client only needs the name. This wastes bandwidth. GraphQL lets the client specify exactly which fields it needs: { user(id: 42) { name } }. The server returns only the requested fields. This eliminates over-fetching (too much data) and under-fetching (too little data requiring additional requests).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "5. What role does ICE play in WebRTC connection establishment?"
      }), "\nICE (Interactive Connectivity Establishment) coordinates STUN and TURN candidates to find the best path for peer-to-peer connections. ICE collects all possible connection candidates (local IP, public IP via STUN, TURN relay), sorts them by priority, and attempts each candidate pair. The highest-priority working pair is selected. This enables WebRTC to work through NATs and firewalls by trying multiple connectivity strategies.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "6. Explain how ETag-based conditional requests reduce bandwidth usage."
      }), "\nThe server computes a hash (ETag) for each resource version. The client stores the ETag and sends it in the If-None-Match header on subsequent requests. If the resource hasn't changed, the server returns 304 Not Modified with an empty body (saving bandwidth on the full response). If changed, the server returns 200 with the full response and new ETag. This means unchanged resources consume only header bytes (~200 bytes) instead of the full response body (potentially kilobytes or megabytes).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "7. Compare token bucket and fixed window rate limiting algorithms."
      }), "\nToken bucket: Tokens fill at a constant rate (e.g., 10 tokens/sec) up to a capacity (e.g., 100). Each request consumes one token. Allows bursts up to capacity while enforcing long-term rate. Fixed window: Count requests in a time window (e.g., 60 seconds). Allows bursts at window boundaries (all 100 requests in the last second of the window). Token bucket provides smoother traffic shaping while fixed window is simpler to implement but allows traffic spikes.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "8. Why is POST not idempotent? Give a concrete example."
      }), "\nPOST creates a new resource on each invocation. POST /books with body {title: \"1984\"} creates a new book each time. The first call creates book #1, the second call creates book #2 (different resource even with same body). If the client doesn't receive a response and retries, it creates a duplicate. This is why POST is not idempotent. Contrast with PUT: PUT /books/1 replaces the resource; repeating it produces the same state.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "9. Design a RESTful API for a library system with books, authors, members, and loans."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Resources and endpoints:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "GET /books"
          }), " — List books (filter by author, genre, year). Returns 200 with array."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "GET /books/{id}"
          }), " — Get book details. Returns 200 or 404."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "POST /books"
          }), " — Add a book. Body: {title, authorId, isbn, year, genre}. Returns 201 with Location header."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "PUT /books/{id}"
          }), " — Replace book info. Returns 200 or 404."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "PATCH /books/{id}"
          }), " — Partial update. Returns 200 or 404."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "DELETE /books/{id}"
          }), " — Remove book. Returns 204 or 404."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "GET /authors"
          }), " / ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GET /authors/{id}"
          }), " / ", (0,jsx_runtime.jsx)(_components.code, {
            children: "POST /authors"
          }), " / ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PUT /authors/{id}"
          }), " — Author CRUD."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "GET /members"
          }), " / ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GET /members/{id}"
          }), " / ", (0,jsx_runtime.jsx)(_components.code, {
            children: "POST /members"
          }), " — Member CRUD."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "GET /members/{id}/loans"
          }), " — Member's active loans."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "POST /loans"
          }), " — Check out a book. Body: {memberId, bookId, dueDate}. Returns 201."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "POST /loans/{id}/return"
          }), " — Return a book. Returns 200."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "GET /loans"
          }), " — List loans (filter by status=active/overdue/returned)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Response format: JSON with HATEOAS links. All list endpoints support pagination via ?page=&limit=."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "10. A real-time collaborative document editor needs to synchronize changes across multiple users. Compare WebSockets, SSE, and gRPC streaming."
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WebSockets:"
        }), " Best choice. Full-duplex communication allows both sending edits and receiving updates simultaneously. Low latency, efficient binary framing, and built-in ping/pong for connection health. The editor sends character-level changes (OT operations or CRDT mutations) and receives other users' changes in real-time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSE:"
        }), " Unidirectional (server→client). The client would need separate HTTP POST requests to send edits, which adds overhead and complexity. Not suitable for bidirectional collaboration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "gRPC streaming:"
        }), " Bidirectional streaming works, but adds complexity with protobuf schema definition and requires HTTP/2. Overkill for a browser-based editor (WebSocket is native to browsers)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommendation:"
        }), " WebSockets. Use a shared CRDT (e.g., Yjs) for conflict resolution, transmit operations as binary-encoded delta over the WebSocket. Fall back to long-polling if WebSocket is unavailable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "11. API gateway latency and throughput calculation."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Given: 10,000 req/s, auth=2ms, rate limiting=0.5ms, routing=0.1ms, 20 backends."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Average latency added by gateway = auth + rate limiting + routing = 2 + 0.5 + 0.1 = 2.6 ms."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Throughput capacity: With 2.6ms processing per request, a single gateway thread can handle 1000/2.6 ≈ 384 requests/second. For 10,000 req/s, we need 10,000/384 ≈ 27 concurrent workers (threads or event loop capacity). In practice, async/event-driven gateways (Kong, Envoy) handle this with fewer OS threads. Gateway throughput is typically bottlenecked by upstream service response time, not gateway processing (which is sub-millisecond per hop)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "12. Design a real-time collaborative whiteboard protocol."
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protocol design:"
        }), " Use WebRTC DataChannel (SCTP over DTLS) with WebSocket relay fallback. Each user maintains a CRDT (Conflict-free Replicated Data Type) state for the whiteboard."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Message format (binary):"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Header: 1 byte message type + 2 byte user ID + 4 byte timestamp + 4 byte sequence number"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Types: 0x01=AddShape, 0x02=MoveShape, 0x03=DeleteShape, 0x04=CursorMove, 0x05=Undo, 0x06=Redo"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Shape payload: type(1B) + x1(4B float) + y1(4B float) + x2(4B float) + y2(4B float) + color(3B) + strokeWidth(2B)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Cursor payload: x(4B) + y(4B)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conflict resolution:"
        }), " Each operation has a unique (userID, clock) tuple. CRDT ensures commutativity: operations from different users can be applied in any order and converge to the same state. Undo/redo uses operation counter per user."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signaling:"
        }), " WebSocket-based signaling server exchanges SDP offers/answers and ICE candidates between peers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fallback:"
        }), " If ICE connection fails after 5 seconds, fall back to WebSocket relay. The relay forwards binary messages between users."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bandwidth:"
        }), " 60 updates/s × 10 users = 600 msg/s. Each draw message ≈ 30 bytes. Total: 18 KB/s = 144 Kbps, well within WebRTC DataChannel and WebSocket capacity (target <500 Kbps)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "13. Design an HTTP caching strategy for a news API."
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Article list endpoint"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET /api/articles"
        }), "):"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "Cache-Control: public, max-age=300, s-maxage=600"
          }), " (5 min browser, 10 min CDN)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["ETag based on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "COUNT(*) + MAX(updated_at)"
          }), " from articles table"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Conditional: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "If-None-Match"
          }), " returns 304 when unchanged"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single article endpoint"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET /api/articles/{id}"
        }), "):"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "Cache-Control: public, max-age=14400, s-maxage=3600"
          }), " (4 hours browser, 1 hour CDN)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["ETag based on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "updated_at"
          }), " timestamp"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Breaking news endpoint"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET /api/breaking"
        }), "):"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "Cache-Control: public, max-age=60, s-maxage=300"
          }), " (1 min browser, 5 min CDN)"]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Shorter TTL for frequently updated content"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User feed endpoint"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET /api/feed"
        }), "):"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "Cache-Control: private, max-age=60"
          }), " (private = no CDN caching)"]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "ETag based on user's last read timestamp"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "No shared caching because feeds are user-specific"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Invalidation:"
        }), " When editor publishes an update, purge CDN cache for specific article URL + list endpoint. Use versioned URLs (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/api/articles/123?v=2"
        }), ") for breaking news to avoid purge delays. Implement stale-while-revalidate for popular articles to serve stale content while fetching fresh version from origin."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "14. Implement a rate limiting design for a public API with Redis."
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data structure:"
        }), " Redis Sorted Set per client: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ratelimit:{clientId}"
        }), ". Score = timestamp, member = timestamp. This enables sliding window log."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lua script for atomic operations:"
        }), " The script checks the count in the current window, increments if allowed, and returns the decision with remaining count. This ensures atomicity across concurrent requests."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Token bucket parameters per tier:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Free: capacity=10, refillRate=10/60 per sec (10 tokens per minute)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Pro: capacity=100, refillRate=100/60 per sec"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Enterprise: capacity=10000, refillRate=10000/60 per sec"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rate limit headers:"
        }), " All responses include:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "X-RateLimit-Limit"
          }), ": max requests per window"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "X-RateLimit-Remaining"
          }), ": remaining requests"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "X-RateLimit-Reset"
          }), ": UNIX timestamp when limit resets"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "Retry-After"
          }), ": seconds to wait (on 429 response)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Graceful degradation:"
        }), " When Redis is unavailable, fall back to local in-memory token bucket (per-node rate limiting). This may allow slightly more requests during failover but prevents a Redis outage from blocking all API traffic. Log Redis failures for monitoring alerting."]
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