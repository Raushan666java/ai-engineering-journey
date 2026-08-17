"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[12429],{

/***/ 86789
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_39_interview_healthcare_md_078_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-39-interview-healthcare-md-078.json
const site_docs_courses_laravel_39_interview_healthcare_md_078_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/39-interview-healthcare","title":"Chapter 39: Healthcare Interview Q&A","description":"Previous Finance & FinTech Interview Q&A","source":"@site/docs/courses/laravel/39-interview-healthcare.md","sourceDirName":"courses/laravel","slug":"/laravel/39-interview-healthcare","permalink":"/ai-engineering-journey/laravel/39-interview-healthcare","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":39,"frontMatter":{"id":"39-interview-healthcare","slug":"/laravel/39-interview-healthcare","title":"Chapter 39: Healthcare Interview Q&A","sidebar_label":"Chapter 39: Healthcare Interview Q&A","sidebar_position":39},"sidebar":"course-laravel","previous":{"title":"Chapter 38: Laravel General Interview Q&A","permalink":"/ai-engineering-journey/laravel/38-interview-general"},"next":{"title":"Chapter 40: Finance & FinTech Interview Q&A","permalink":"/ai-engineering-journey/laravel/40-interview-finance"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/39-interview-healthcare.md


const frontMatter = {
	id: '39-interview-healthcare',
	slug: '/laravel/39-interview-healthcare',
	title: 'Chapter 39: Healthcare Interview Q&A',
	sidebar_label: 'Chapter 39: Healthcare Interview Q&A',
	sidebar_position: 39
};
const contentTitle = 'Chapter 39: Healthcare Interview Q&A';

const assets = {

};



const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "1. Healthcare Domain Knowledge",
  "id": "1-healthcare-domain-knowledge",
  "level": 2
}, {
  "value": "Q1: What is HIPAA and what are its three core safeguards? How do they map to Laravel architecture?",
  "id": "q1-what-is-hipaa-and-what-are-its-three-core-safeguards-how-do-they-map-to-laravel-architecture",
  "level": 3
}, {
  "value": "Q2: What are the five core data models in a healthcare Laravel application?",
  "id": "q2-what-are-the-five-core-data-models-in-a-healthcare-laravel-application",
  "level": 3
}, {
  "value": "Q3: Explain the difference between EHR, HL7, and FHIR. How would a Laravel application integrate with each?",
  "id": "q3-explain-the-difference-between-ehr-hl7-and-fhir-how-would-a-laravel-application-integrate-with-each",
  "level": 3
}, {
  "value": "Q4: What is PHI under HIPAA, and what are the key rules for handling it in a Laravel app?",
  "id": "q4-what-is-phi-under-hipaa-and-what-are-the-key-rules-for-handling-it-in-a-laravel-app",
  "level": 3
}, {
  "value": "Q5: What common healthcare integrations would a Laravel platform typically need?",
  "id": "q5-what-common-healthcare-integrations-would-a-laravel-platform-typically-need",
  "level": 3
}, {
  "value": "2. Technical Implementation",
  "id": "2-technical-implementation",
  "level": 2
}, {
  "value": "Q6: How would you structure a Laravel patient management system with HIPAA-compliant encryption?",
  "id": "q6-how-would-you-structure-a-laravel-patient-management-system-with-hipaa-compliant-encryption",
  "level": 3
}, {
  "value": "Q7: How would you implement an appointment scheduling agent with AI in Laravel 13?",
  "id": "q7-how-would-you-implement-an-appointment-scheduling-agent-with-ai-in-laravel-13",
  "level": 3
}, {
  "value": "Q8: How would you implement medical record RAG using pgvector and the Laravel AI SDK?",
  "id": "q8-how-would-you-implement-medical-record-rag-using-pgvector-and-the-laravel-ai-sdk",
  "level": 3
}, {
  "value": "Q9: How would you build a clinical decision support agent that uses RAG over medical literature?",
  "id": "q9-how-would-you-build-a-clinical-decision-support-agent-that-uses-rag-over-medical-literature",
  "level": 3
}, {
  "value": "Q10: How would you automate insurance claims processing with a multi-stage Laravel agent?",
  "id": "q10-how-would-you-automate-insurance-claims-processing-with-a-multi-stage-laravel-agent",
  "level": 3
}, {
  "value": "Q11: How would you implement a medication management agent that checks drug interactions?",
  "id": "q11-how-would-you-implement-a-medication-management-agent-that-checks-drug-interactions",
  "level": 3
}, {
  "value": "Q12: How would you build a healthcare analytics and reporting agent in Laravel?",
  "id": "q12-how-would-you-build-a-healthcare-analytics-and-reporting-agent-in-laravel",
  "level": 3
}, {
  "value": "Q13: How would you implement a diagnostic assistance agent that flags abnormal lab results?",
  "id": "q13-how-would-you-implement-a-diagnostic-assistance-agent-that-flags-abnormal-lab-results",
  "level": 3
}, {
  "value": "3. Architecture &amp; Design",
  "id": "3-architecture--design",
  "level": 2
}, {
  "value": "Q14: How would you design a HIPAA-compliant Laravel application from the ground up?",
  "id": "q14-how-would-you-design-a-hipaa-compliant-laravel-application-from-the-ground-up",
  "level": 3
}, {
  "value": "Q15: How would you implement multi-tenancy in a healthcare SaaS platform?",
  "id": "q15-how-would-you-implement-multi-tenancy-in-a-healthcare-saas-platform",
  "level": 3
}, {
  "value": "Q16: How would you design the data model for a multi-provider clinic management system?",
  "id": "q16-how-would-you-design-the-data-model-for-a-multi-provider-clinic-management-system",
  "level": 3
}, {
  "value": "Q17: How would you scale a Laravel healthcare application to handle millions of patients?",
  "id": "q17-how-would-you-scale-a-laravel-healthcare-application-to-handle-millions-of-patients",
  "level": 3
}, {
  "value": "Q18: How would you design a telemedicine platform&#39;s real-time video architecture in Laravel?",
  "id": "q18-how-would-you-design-a-telemedicine-platforms-real-time-video-architecture-in-laravel",
  "level": 3
}, {
  "value": "4. Behavioral &amp; Scenario",
  "id": "4-behavioral--scenario",
  "level": 2
}, {
  "value": "Q19: Describe a healthcare SaaS platform you&#39;d build with Laravel. Walk through the architecture.",
  "id": "q19-describe-a-healthcare-saas-platform-youd-build-with-laravel-walk-through-the-architecture",
  "level": 3
}, {
  "value": "Q20: How would you handle patient data encryption and access control across a multi-region deployment?",
  "id": "q20-how-would-you-handle-patient-data-encryption-and-access-control-across-a-multi-region-deployment",
  "level": 3
}, {
  "value": "Q21: How would you design a telemedicine platform with Laravel? What are the key considerations?",
  "id": "q21-how-would-you-design-a-telemedicine-platform-with-laravel-what-are-the-key-considerations",
  "level": 3
}, {
  "value": "Q22: You discover a PHI data leak in your Laravel application. Walk through your response.",
  "id": "q22-you-discover-a-phi-data-leak-in-your-laravel-application-walk-through-your-response",
  "level": 3
}, {
  "value": "Q23: How would you approach migrating a legacy on-premise EHR to a Laravel cloud platform?",
  "id": "q23-how-would-you-approach-migrating-a-legacy-on-premise-ehr-to-a-laravel-cloud-platform",
  "level": 3
}, {
  "value": "Q24: Your patient intake agent is hallucinating patient data. How do you handle it?",
  "id": "q24-your-patient-intake-agent-is-hallucinating-patient-data-how-do-you-handle-it",
  "level": 3
}, {
  "value": "Q25: Your claims processing agent is running too slowly. How do you diagnose and fix it?",
  "id": "q25-your-claims-processing-agent-is-running-too-slowly-how-do-you-diagnose-and-fix-it",
  "level": 3
}, {
  "value": "Q26: Your medical record RAG agent returns irrelevant results for complex queries. How do you improve retrieval quality?",
  "id": "q26-your-medical-record-rag-agent-returns-irrelevant-results-for-complex-queries-how-do-you-improve-retrieval-quality",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
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
        id: "chapter-39-healthcare-interview-qa",
        children: "Chapter 39: Healthcare Interview Q&A"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/38-interview-general",
          children: "Laravel General Interview Q&A"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/40-interview-finance",
          children: "Finance & FinTech Interview Q&A"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Healthcare-specific interview questions covering patient data models, HIPAA compliance, FHIR integration, telemedicine features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Health data models, compliance, FHIR API integration, appointment scheduling, EMR/EHR integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q&A format with practical code examples and domain-specific scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHP, Laravel, Eloquent, healthcare domain knowledge, HL7/FHIR basics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Core Concepts]\n    B[Interview Questions]\n    C[Code Examples]\n    D[Best Practices]\n    E[Common Pitfalls]\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-healthcare-domain-knowledge",
      children: "1. Healthcare Domain Knowledge"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/39-interview-healthcare.png",
        alt: "Healthcare Interview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-hipaa-and-what-are-its-three-core-safeguards-how-do-they-map-to-laravel-architecture",
      children: "Q1: What is HIPAA and what are its three core safeguards? How do they map to Laravel architecture?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HIPAA"
      }), " (Health Insurance Portability and Accountability Act) mandates protection of Protected Health Information (PHI) through three safeguard categories:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Safeguard"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Laravel Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Administrative"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access policies, training, audit logs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Spatie Permission roles, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AuditTrail"
            }), " trait on models"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Physical"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server security, device control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted storage volumes, restricted environments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Technical"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption, access control, integrity"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "encrypt()"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "decrypt()"
            }), " accessors, signed routes, validation"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PHI fields are encrypted at the Laravel layer using accessor mutators so the database stores only ciphertext. Controllers enforce authorization via Gates, and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AuditTrail"
      }), " trait hooks into Eloquent's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "creating"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "updating"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "deleting"
      }), " events to log every data change with user ID, IP, and old/new values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class Patient extends Model\n{\n    public function getNameAttribute(): ?string\n    {\n        return $this->encrypted_name ? decrypt($this->encrypted_name) : null;\n    }\n\n    public function setNameAttribute(string $value): void\n    {\n        $this->encrypted_name = encrypt($value);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-are-the-five-core-data-models-in-a-healthcare-laravel-application",
      children: "Q2: What are the five core data models in a healthcare Laravel application?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The five foundational entities are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Patient, Provider, Appointment, MedicalRecord, and Claim"
      }), ". Patients store encrypted PHI fields. Providers hold NPI numbers, specialties, and licensure. Appointments link patients to providers with scheduling data. MedicalRecords contain encrypted clinical notes with pgvector embeddings for RAG queries. Claims manage the insurance billing lifecycle from draft through adjudication."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each model enforces encryption for PHI, maintains a complete audit trail via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AuditTrail"
      }), " trait, and respects role-based access through Laravel Gates. Foreign keys cascade appropriately → deleting a patient cascades to their appointments, records, and claims."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-explain-the-difference-between-ehr-hl7-and-fhir-how-would-a-laravel-application-integrate-with-each",
      children: "Q3: Explain the difference between EHR, HL7, and FHIR. How would a Laravel application integrate with each?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "EHR"
      }), " (Electronic Health Record) is the system of record → Epic, Cerner, Athenahealth. Integration typically means exposing or consuming REST APIs. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HL7 v2"
      }), " is the legacy messaging standard using pipe-delimited text over MLLP (Minimum Lower Layer Protocol). A Laravel integration listens on a TCP socket or polls an interface and parses HL7 messages (e.g., ADT^A01 for admissions). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FHIR"
      }), " (Fast Healthcare Interoperability Resources) is the modern RESTful standard using JSON bundles of Resources (Patient, Observation, Encounter)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Support\\Facades\\Http;\n\nclass FhirIntegrationService\n{\n    public function sendObservation(Observation $observation): array\n    {\n        $bundle = [\n            'resourceType' => 'Observation',\n            'status' => $observation->status,\n            'code' => [\n                'coding' => [['system' => 'http://loinc.org', 'code' => $observation->loinc_code]],\n            ],\n            'subject' => ['reference' => \"Patient/{$observation->patient->external_id}\"],\n            'valueQuantity' => [\n                'value' => $observation->value,\n                'unit' => $observation->unit,\n            ],\n        ];\n\n        return Http::withToken(config('services.fhir.api_key'))\n            ->post(config('services.fhir.base_url') . '/Observation', $bundle)\n            ->json();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-phi-under-hipaa-and-what-are-the-key-rules-for-handling-it-in-a-laravel-app",
      children: "Q4: What is PHI under HIPAA, and what are the key rules for handling it in a Laravel app?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PHI includes 18 identifiers: name, address, dates (birth, admission, discharge), phone, email, SSN, medical record numbers, health plan beneficiary numbers, account numbers, certificate/license numbers, vehicle identifiers, device identifiers, URLs, IP addresses, biometric IDs, facial photos, and any other unique identifying characteristic."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rules for Laravel:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Encrypt all PHI fields at the application layer using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "encrypt()"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "decrypt()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Force HTTPS in production via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AppServiceProvider::forceHttps()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain audit logs for every access and mutation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforce least-privilege access via Gates + Spatie roles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement session timeouts and automatic logout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log raw PHI to Laravel's log files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sign data export routes to prevent unauthorized bulk access"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-common-healthcare-integrations-would-a-laravel-platform-typically-need",
      children: "Q5: What common healthcare integrations would a Laravel platform typically need?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Beyond EHR/HL7/FHIR, a healthcare Laravel app commonly integrates with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clearinghouses"
        }), " (Change Healthcare, Waystar) for claims submission via X12 837 files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pharmacy databases"
        }), " (RxNorm, NDC) for drug interaction checking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lab information systems"
        }), " for receiving structured lab results"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Payment gateways"
        }), " (Stripe, Square) for patient payment collection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Video SDKs"
        }), " (Twilio, Agora) for telemedicine sessions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identity providers"
        }), " (Okta, Azure AD) for SSO with hospital credentialing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inventory systems"
        }), " for medical supply chain management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRM platforms"
        }), " (Salesforce Health Cloud) for patient outreach"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each integration should be wrapped in a dedicated service class with queue-backed async processing, rate limiting, and structured error handling."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-technical-implementation",
      children: "2. Technical Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-would-you-structure-a-laravel-patient-management-system-with-hipaa-compliant-encryption",
      children: "Q6: How would you structure a Laravel patient management system with HIPAA-compliant encryption?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Patient"
      }), " model with encrypted accessors for all PHI fields. Use a migration with columns prefixed ", (0,jsx_runtime.jsx)(_components.code, {
        children: "encrypted_"
      }), " to make encryption explicit. The model serializes only non-PHI fields by default and exposes decrypted values through computed accessors that are gated behind authorization checks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Migration\nSchema::create('patients', function (Blueprint $table) {\n    $table->id();\n    $table->string('encrypted_name');\n    $table->string('encrypted_email');\n    $table->string('encrypted_phone');\n    $table->text('encrypted_address');\n    $table->string('encrypted_ssn_last_four');\n    $table->date('date_of_birth');\n    $table->foreignId('primary_provider_id')->nullable()->constrained('providers');\n    $table->string('status')->default('active');\n    $table->timestamps();\n    $table->softDeletes();\n});\n\n// PatientController\npublic function show(Patient $patient): JsonResponse\n{\n    Gate::authorize('view', $patient);\n\n    AuditLog::create([\n        'auditable_type' => Patient::class,\n        'auditable_id' => $patient->id,\n        'user_id' => auth()->id(),\n        'event' => 'viewed',\n        'ip_address' => request()->ip(),\n    ]);\n\n    return response()->json(['data' => $patient]);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The controller logs every view as an audit event. Query scopes restrict patients to the authenticated user's organization or care team."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-how-would-you-implement-an-appointment-scheduling-agent-with-ai-in-laravel-13",
      children: "Q7: How would you implement an appointment scheduling agent with AI in Laravel 13?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SchedulingAgent"
      }), " implementing the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Agent"
      }), " contract. The agent accepts structured parameters (patient, provider, preferred date/time) and uses tools to check calendar slots, book appointments, and schedule reminders. Slots use pessimistic locking to prevent double-booking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class SchedulingAgent implements Agent\n{\n    use Promptable;\n\n    public function book(int $patientId, int $providerId, int $slotId, string $type, ?string $reason = null): array\n    {\n        return DB::transaction(function () use ($patientId, $providerId, $slotId, $type, $reason) {\n            $slot = CalendarSlot::where('id', $slotId)\n                ->where('status', 'available')\n                ->lockForUpdate()\n                ->firstOrFail();\n\n            $appointment = Appointment::create([\n                'patient_id' => $patientId,\n                'provider_id' => $providerId,\n                'scheduled_at' => $slot->start_time,\n                'type' => $type,\n                'status' => 'scheduled',\n                'reason' => $reason,\n            ]);\n\n            $slot->update(['status' => 'booked', 'appointment_id' => $appointment->id]);\n            $this->scheduleReminders($appointment);\n\n            return $appointment->toArray();\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The agent exposes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "checkAvailability"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "book"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "reschedule"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cancel"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "suggestSlots"
      }), " methods. The AI layer uses structured output to parse natural-language booking requests (e.g., \"book my next Tuesday at 10am with Dr. Smith\") into concrete parameters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-would-you-implement-medical-record-rag-using-pgvector-and-the-laravel-ai-sdk",
      children: "Q8: How would you implement medical record RAG using pgvector and the Laravel AI SDK?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Embed each medical record's content during creation and store the vector in a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vector"
      }), " column. On query, embed the doctor's natural-language question, find the nearest neighbors by cosine distance, and send the retrieved records as context to the AI model."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class MedicalRecordRagAgent implements Agent\n{\n    use Promptable;\n\n    public function __construct(\n        protected Patient $patient,\n        protected string $query,\n    ) {}\n\n    public function answer(): array\n    {\n        $queryEmbedding = Ai::embed($this->query)->toArray();\n\n        $relevantRecords = MedicalRecord::query()\n            ->where('patient_id', $this->patient->id)\n            ->orderByRaw(\"embedding <=> '{$queryEmbedding}'::vector\")\n            ->limit(10)\n            ->get()\n            ->map(fn ($record) => [\n                'type' => $record->record_type,\n                'date' => $record->created_at->toDateString(),\n                'content' => $record->encrypted_content ? decrypt($record->encrypted_content) : null,\n            ]);\n\n        $response = $this->chat(\n            messages: [[\n                'role' => 'user',\n                'content' => json_encode([\n                    'question' => $this->query,\n                    'relevant_records' => $relevantRecords->toArray(),\n                ]),\n            ]],\n            structuredOutput: [\n                'type' => 'object',\n                'properties' => [\n                    'answer' => ['type' => 'string'],\n                    'sources_used' => ['type' => 'array'],\n                    'confidence' => ['type' => 'string', 'enum' => ['high', 'moderate', 'low']],\n                    'missing_information' => ['type' => 'array', 'items' => ['type' => 'string']],\n                ],\n            ],\n        );\n\n        return $response;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A scheduled command runs nightly to embed any records missing vectors, and an HNSW index on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "embedding"
      }), " column keeps queries performant at scale."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-how-would-you-build-a-clinical-decision-support-agent-that-uses-rag-over-medical-literature",
      children: "Q9: How would you build a clinical decision support agent that uses RAG over medical literature?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ClinicalDecisionAgent"
      }), " with tools for symptom analysis, literature retrieval, and diagnosis suggestion. The agent first structures free-text symptoms via AI, embeds the structured query to find relevant medical literature from pgvector, then synthesizes differential diagnoses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ClinicalDecisionAgent implements Agent, HasTools\n{\n    use Promptable;\n\n    public function tools(): array\n    {\n        return [\n            Tool::for('search_literature')\n                ->describe('Search medical literature by vector similarity')\n                ->withParameters(['query' => 'string', 'limit' => 5]),\n\n            Tool::for('suggest_diagnoses')\n                ->describe('Generate ranked differential diagnoses')\n                ->withParameters(['symptoms' => 'array', 'literature' => 'array']),\n        ];\n    }\n\n    public function runAnalysis(): array\n    {\n        $symptomAnalysis = $this->analyzeSymptoms($this->symptoms);\n        $query = implode(' ', $symptomAnalysis['key_terms']);\n        $queryEmbedding = Ai::embed($query)->toArray();\n\n        $literature = MedicalLiterature::nearestNeighbors($queryEmbedding, 5)->get();\n\n        $diagnoses = $this->chat(\n            messages: [[\n                'role' => 'user',\n                'content' => json_encode([\n                    'symptoms' => $symptomAnalysis['structured_symptoms'],\n                    'patient_context' => $this->patientContext,\n                    'retrieved_literature' => $literature,\n                ]),\n            ]],\n            structuredOutput: ['type' => 'object', 'properties' => [\n                'differential_diagnoses' => ['type' => 'array'],\n                'urgency_level' => ['type' => 'string'],\n                'recommended_tests' => ['type' => 'array'],\n                'caveats' => ['type' => 'array'],\n            ]],\n        );\n\n        return [\n            'symptom_analysis' => $symptomAnalysis,\n            'literature_used' => $literature,\n            'diagnoses' => $diagnoses,\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The agent includes a disclaimer in every response that it is decision-support only and must be reviewed by a licensed clinician."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-how-would-you-automate-insurance-claims-processing-with-a-multi-stage-laravel-agent",
      children: "Q10: How would you automate insurance claims processing with a multi-stage Laravel agent?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ClaimsProcessingAgent"
      }), " that walks through five stages: validation, fraud assessment, submission, status check, and adjudication. Each stage is a method on the agent that updates the claim status and records history."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ClaimsProcessingAgent implements Agent\n{\n    use Promptable;\n\n    public function validate(): array\n    {\n        $result = $this->chat(\n            messages: [[\n                'role' => 'user',\n                'content' => json_encode([\n                    'claim_number' => $this->claim->claim_number,\n                    'amount' => $this->claim->amount,\n                    'patient_age' => $this->claim->patient->date_of_birth?->age,\n                    'provider_npi' => $this->claim->provider->npi_number,\n                ]),\n            ]],\n            structuredOutput: ['type' => 'object', 'properties' => [\n                'is_valid' => ['type' => 'boolean'],\n                'validation_errors' => ['type' => 'array'],\n                'recommendation' => ['type' => 'string'],\n            ]],\n        );\n\n        $this->claim->update(['validation_results' => $result]);\n        $this->recordStatus('validated', $result['is_valid'] ? 'Passed' : 'Failed');\n\n        return $result;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A scheduled command ", (0,jsx_runtime.jsx)(_components.code, {
        children: "healthcare:process-claims"
      }), " processes pending claims. The agent handles clearinghouse submission via HTTP, retries on failure up to 3 times, and logs every status transition to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "claim_status_histories"
      }), " for audit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-how-would-you-implement-a-medication-management-agent-that-checks-drug-interactions",
      children: "Q11: How would you implement a medication management agent that checks drug interactions?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MedicationAgent"
      }), " that cross-references new prescriptions against the patient's existing medications, known allergies, and conditions. The AI analyzes interactions and returns a structured severity assessment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class MedicationAgent implements Agent\n{\n    use Promptable;\n\n    public function processNewPrescription(array $data): array\n    {\n        $interactionResult = $this->checkInteractions($data);\n\n        if (in_array($interactionResult['severity'], ['severe', 'contraindicated'])) {\n            return [\n                'approved' => false,\n                'interactions' => $interactionResult['interactions'],\n                'recommendation' => $interactionResult['recommendation'],\n            ];\n        }\n\n        $medication = Medication::create([...$data, 'is_active' => true]);\n        $this->scheduleRefillReminders($medication);\n\n        return ['approved' => true, 'medication_id' => $medication->id];\n    }\n\n    public function checkInteractions(array $newMed): array\n    {\n        $existing = Medication::where('patient_id', $this->patient->id)\n            ->where('is_active', true)->get();\n\n        return $this->chat(\n            messages: [[\n                'role' => 'user',\n                'content' => json_encode([\n                    'new_medication' => $newMed,\n                    'existing_medications' => $existing->toArray(),\n                    'patient_allergies' => $this->patient->allergies,\n                    'patient_conditions' => $this->patient->conditions,\n                ]),\n            ]],\n            structuredOutput: ['type' => 'object', 'properties' => [\n                'has_interactions' => ['type' => 'boolean'],\n                'severity' => ['type' => 'string', 'enum' => ['none', 'minor', 'moderate', 'severe', 'contraindicated']],\n                'interactions' => ['type' => 'array'],\n                'recommendation' => ['type' => 'string'],\n            ]],\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The agent schedules refill reminders 5 days before the prescription runs out, using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "days_supply"
      }), " field to calculate the refill date."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-how-would-you-build-a-healthcare-analytics-and-reporting-agent-in-laravel",
      children: "Q12: How would you build a healthcare analytics and reporting agent in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HealthcareAnalyticsAgent"
      }), " that aggregates patient, appointment, claims, and provider metrics across a time window, then uses the AI SDK to generate an executive summary with trend analysis and recommendations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class HealthcareAnalyticsAgent implements Agent\n{\n    use Promptable;\n\n    public function generateReport(): array\n    {\n        $patientMetrics = $this->getPatientMetrics();\n        $appointmentMetrics = $this->getAppointmentMetrics();\n        $claimsMetrics = $this->getClaimsMetrics();\n\n        $report = $this->chat(\n            messages: [[\n                'role' => 'user',\n                'content' => json_encode([\n                    'period' => $this->period,\n                    'patient_metrics' => $patientMetrics,\n                    'appointment_metrics' => $appointmentMetrics,\n                    'claims_metrics' => $claimsMetrics,\n                ]),\n            ]],\n            structuredOutput: ['type' => 'object', 'properties' => [\n                'executive_summary' => ['type' => 'string'],\n                'patient_outcomes' => ['type' => 'object'],\n                'clinic_efficiency' => ['type' => 'object'],\n                'financial_performance' => ['type' => 'object'],\n                'key_recommendations' => ['type' => 'array'],\n            ]],\n        );\n\n        AnalyticsReport::create([\n            'period' => $this->period,\n            'start_date' => $this->startDate,\n            'end_date' => $this->endDate,\n            'metrics' => compact('patientMetrics', 'appointmentMetrics', 'claimsMetrics'),\n            'report' => $report,\n        ]);\n\n        return $report;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reports are generated on schedule via the console kernel → weekly on Monday and monthly on the 1st. The command outputs a formatted summary and stores the full report for dashboard consumption."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-how-would-you-implement-a-diagnostic-assistance-agent-that-flags-abnormal-lab-results",
      children: "Q13: How would you implement a diagnostic assistance agent that flags abnormal lab results?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LabReviewAgent"
      }), " that compares lab results against reference ranges and patient historical baselines. When it detects critical values, it notifies the ordering provider automatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class LabReviewAgent implements Agent\n{\n    use Promptable;\n\n    public function analyze(): array\n    {\n        $analysis = $this->chat(\n            messages: [[\n                'role' => 'user',\n                'content' => json_encode([\n                    'lab_result' => [\n                        'test_name' => $this->labResult->test_name,\n                        'result_value' => $this->labResult->result_value,\n                        'reference_range' => $this->labResult->reference_range,\n                    ],\n                    'patient' => [\n                        'age' => $this->labResult->patient->date_of_birth?->age,\n                        'conditions' => $this->labResult->patient->conditions,\n                    ],\n                    'historical_results' => $this->getRecentResults(),\n                ]),\n            ]],\n            structuredOutput: ['type' => 'object', 'properties' => [\n                'is_abnormal' => ['type' => 'boolean'],\n                'severity' => ['type' => 'string', 'enum' => ['normal', 'borderline', 'abnormal', 'critical']],\n                'clinical_assessment' => ['type' => 'string'],\n                'recommended_follow_up' => ['type' => 'array'],\n                'urgency' => ['type' => 'string', 'enum' => ['routine', 'soon', 'urgent', 'emergent']],\n                'notify_provider' => ['type' => 'boolean'],\n            ]],\n        );\n\n        if ($analysis['notify_provider'] && $this->labResult->orderingProvider) {\n            $this->labResult->orderingProvider->notify(\n                new CriticalLabAlert($this->labResult, $analysis)\n            );\n        }\n\n        $this->labResult->update(['assessment' => $analysis, 'reviewed_at' => now()]);\n\n        return $analysis;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A scheduled command ", (0,jsx_runtime.jsx)(_components.code, {
        children: "healthcare:review-labs"
      }), " processes unreviewed results in batches, and critical flags are immediately escalated via notification channels."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-architecture--design",
      children: "3. Architecture & Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-how-would-you-design-a-hipaa-compliant-laravel-application-from-the-ground-up",
      children: "Q14: How would you design a HIPAA-compliant Laravel application from the ground up?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Start with three architectural layers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Data Layer"
          }), ": All PHI fields encrypted via Eloquent accessors. The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AuditTrail"
          }), " trait on every model that touches patient data. Soft deletes everywhere. Foreign keys cascading properly."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Access Layer"
          }), ": Laravel Gates for all CRUD operations, roles (physician, nurse, admin, billing) via Spatie Permission. Every controller method calls ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Gate::authorize()"
          }), " before acting. Sanctum tokens with short expiry and MFA enforcement."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Infrastructure Layer"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AppServiceProvider::forceHttps()"
          }), " in production. Session timeout via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "config/session.php"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "lifetime"
          }), " plus a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "last_activity"
          }), " middleware check. Encrypted database backups via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "gpg"
          }), ". All logs scrubbed of PHI via a custom ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LogMonolog"
          }), " handler."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class AppServiceProvider extends ServiceProvider\n{\n    public function boot(): void\n    {\n        if (app()->isProduction()) {\n            URL::forceScheme('https');\n            $this->app['request']->server->set('HTTPS', 'on');\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HIPAA audits are supported by querying the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "audit_logs"
      }), " table for any model: who accessed what, when, and from which IP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-how-would-you-implement-multi-tenancy-in-a-healthcare-saas-platform",
      children: "Q15: How would you implement multi-tenancy in a healthcare SaaS platform?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single-database, tenant-scoped"
      }), " pattern where every table has a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tenant_id"
      }), " column and all queries are automatically scoped via a global ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TenantScope"
      }), ". The tenant is resolved from the authenticated user's relationship."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "trait BelongsToTenant\n{\n    public static function bootBelongsToTenant(): void\n    {\n        static::addGlobalScope('tenant', fn ($builder) =>\n            $builder->where('tenant_id', auth()->user()->tenant_id)\n        );\n\n        static::creating(fn ($model) =>\n            $model->tenant_id ??= auth()->user()->tenant_id\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For stricter isolation (e.g., competing hospitals), use a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "database-per-tenant"
      }), " pattern where each tenant has their own database connection. A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TenantResolver"
      }), " middleware switches the default connection at the start of each request based on the authenticated user's tenant mapping."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Healthcare-specific considerations: audit logs must include the tenant ID for cross-tenant compliance reporting. Encryption keys can be per-tenant for maximum PHI isolation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-how-would-you-design-the-data-model-for-a-multi-provider-clinic-management-system",
      children: "Q16: How would you design the data model for a multi-provider clinic management system?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Core entities:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tenant"
        }), " → the clinic or hospital organization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Patient"
        }), " → scoped to tenant, encrypted PHI"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provider"
        }), " → healthcare professionals, NPI-numbered"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Appointment"
        }), " → patient-provider-time junction with slot-based scheduling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MedicalRecord"
        }), " → polymorphic clinical entries (SOAP notes, lab orders, imaging referrals) with pgvector embedding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Claim"
        }), " → insurance billing records with multi-stage workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CalendarSlot"
        }), " → provider availability windows with optimistic locking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reminder"
        }), " → pending appointment notifications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AuditLog"
        }), " → polymorphic event trail"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LabResult"
        }), " → structured test data with reference ranges"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The schema uses foreign keys for referential integrity, composite indexes on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[provider_id, scheduled_at]"
      }), " for scheduling queries, and JSON columns for flexible metadata."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Schema::create('medical_records', function (Blueprint $table) {\n    $table->id();\n    $table->foreignId('tenant_id')->constrained();\n    $table->foreignId('patient_id')->constrained()->cascadeOnDelete();\n    $table->foreignId('provider_id')->constrained();\n    $table->string('record_type', 50); // progress_note, lab_order, imaging, referral\n    $table->text('encrypted_content');\n    $table->json('metadata')->nullable();\n    $table->vector('embedding', 1536)->nullable();\n    $table->timestamps();\n    $table->index(['patient_id', 'record_type']);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-how-would-you-scale-a-laravel-healthcare-application-to-handle-millions-of-patients",
      children: "Q17: How would you scale a Laravel healthcare application to handle millions of patients?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Layer the scaling strategy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database"
        }), ": Read replicas for reporting queries, partitioning ", (0,jsx_runtime.jsx)(_components.code, {
          children: "appointments"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "audit_logs"
        }), " by date, HNSW index on pgvector embeddings for fast similarity search"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Queue"
        }), ": Horizon with multiple queue workers for claims processing, lab review, referral intake, and reminder sending"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache"
        }), ": Redis for provider availability lookups, patient demographic caches (TTL-bounded for PHI compliance), and embedding result caching"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Octane"
        }), ": Swoole/RoadRunner workers for API endpoints that need sub-100ms response times"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Horizontal"
        }), ": Laravel Vapor or Cloud for auto-scaling web tier, separate queue worker environments"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For PHI compliance at scale: never cache raw decrypted PHI in shared Redis. Use encrypted cache values or cache only non-PHI identifiers with the actual data fetched from the database through encrypted accessors on each request."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-how-would-you-design-a-telemedicine-platforms-real-time-video-architecture-in-laravel",
      children: "Q18: How would you design a telemedicine platform's real-time video architecture in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WebRTC"
      }), " model where Laravel handles signaling and session management, while video flows peer-to-peer (or through a TURN server). Laravel Reverb broadcasts signaling messages (offer, answer, ICE candidates) over WebSocket channels."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Signaling via Reverb\nclass TelemedicineController extends Controller\n{\n    public function initiateCall(Request $request, Appointment $appointment): JsonResponse\n    {\n        Gate::authorize('join', $appointment);\n\n        $session = TelemedicineSession::create([\n            'appointment_id' => $appointment->id,\n            'room_sid' => Str::uuid(),\n            'status' => 'waiting',\n            'initiated_by' => $request->user()->id,\n        ]);\n\n        broadcast(new TelemedicineSignal($session, [\n            'type' => 'call_initiated',\n            'room' => $session->room_sid,\n            'participants' => [$appointment->patient_id, $appointment->provider_id],\n        ]))->toPresenceChannel(\"telemedicine.{$appointment->id}\");\n\n        return response()->json(['session' => $session]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For fallback (when P2P fails), integrate a video SDK like Twilio or Agora. The appointment itself is created by the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SchedulingAgent"
      }), ", so telemedicine sessions are linked to existing appointment records. All session metadata is logged for HIPAA compliance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-behavioral--scenario",
      children: "4. Behavioral & Scenario"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-describe-a-healthcare-saas-platform-youd-build-with-laravel-walk-through-the-architecture",
      children: "Q19: Describe a healthcare SaaS platform you'd build with Laravel. Walk through the architecture."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HealFlow"
      }), " → an AI-powered clinic management platform for independent practices. Three pillars:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Patient Intake Pipeline"
          }), ": Referral documents (email, fax, PDF) are ingested by a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PatientIntakeAgent"
          }), " that extracts structured data, creates the patient record, and auto-schedules an initial appointment. Patients receive SMS/email onboarding with a secure portal link."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Clinical Decision Support"
          }), ": A ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ClinicalDecisionAgent"
          }), " with RAG over embedded clinical guidelines. When a doctor enters symptoms, the agent retrieves relevant literature and suggests differential diagnoses with evidence citations → never presented as definitive, always requiring clinician review."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Revenue Cycle Automation"
          }), ": The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ClaimsProcessingAgent"
          }), " validates claims against payer rules, assesses fraud risk, submits to clearinghouses, and tracks through adjudication. Denial management is AI-driven → the agent analyzes denial reasons and suggests corrected codes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The platform uses database-per-tenant multi-tenancy for strict PHI isolation. All agents run on queues via Horizon. Weekly analytics reports give administrators visibility into no-show rates, provider utilization, and revenue trends."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-how-would-you-handle-patient-data-encryption-and-access-control-across-a-multi-region-deployment",
      children: "Q20: How would you handle patient data encryption and access control across a multi-region deployment?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Encrypt every PHI field at the application layer using Laravel's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "encrypt()"
      }), " with a key unique to each tenant. The encryption key is stored in the tenant's configuration and never leaves the application server. For multi-region:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "regional KMS"
        }), " (AWS KMS, Azure Key Vault) to wrap tenant keys so the DEK never exists in plaintext outside the region"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "cross-region audit trail"
        }), " that aggregates audit logs to a central observability account"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enforce ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "data residency"
        }), " via middleware that routes patient write operations to the correct regional database based on patient zip code or provider location"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Access control uses a hierarchical Gates model:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Gate::define('view-patient', fn (User $user, Patient $patient) =>\n    $user->tenant_id === $patient->tenant_id\n    && ($user->hasRole('admin')\n        || $user->id === $patient->primary_provider_id\n        || $user->careTeam->contains($patient->id))\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All access denials are logged to the audit trail with the user, timestamp, IP, and attempted action for security monitoring."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q21-how-would-you-design-a-telemedicine-platform-with-laravel-what-are-the-key-considerations",
      children: "Q21: How would you design a telemedicine platform with Laravel? What are the key considerations?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The architecture has four layers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scheduling Layer"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SchedulingAgent"
          }), " creates appointments with type ", (0,jsx_runtime.jsx)(_components.code, {
            children: "telemedicine"
          }), ". Calendar slots have a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "mode"
          }), " field (", (0,jsx_runtime.jsx)(_components.code, {
            children: "in_person"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "video"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "phone"
          }), "). Reminders include the telemedicine join link."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Signaling Layer"
          }), ": Laravel Reverb manages WebSocket channels for call signaling (", (0,jsx_runtime.jsx)(_components.code, {
            children: "telemedicine.{appointment_id}"
          }), "). The controller creates a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TelemedicineSession"
          }), " record and broadcasts the room SID to participants."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Video Layer"
          }), ": WebRTC for peer-to-peer video with a TURN server fallback. Optionally, a video SDK (Twilio Video, Daily.co) handles media routing for group sessions (multi-provider consultations)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compliance Layer"
          }), ": All session metadata (start time, end time, participants, connection quality) is logged. Recordings (if any) are encrypted and stored with tenant-scoped access. Provider notes from the session flow into ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MedicalRecord"
          }), " via the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MedicalRecordRagAgent"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key considerations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bandwidth adaptation"
        }), " → degrade gracefully from HD to audio-only on poor connections"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Async communication"
        }), " → store chat messages during the session as structured records"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-prescribing"
        }), " → integrate with pharmacy APIs for post-consultation prescriptions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regulatory"
        }), " → state-level telemedicine licensing checks, patient consent recording, ADA compliance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q22-you-discover-a-phi-data-leak-in-your-laravel-application-walk-through-your-response",
      children: "Q22: You discover a PHI data leak in your Laravel application. Walk through your response."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Follow the HIPAA Breach Notification Rule protocol:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Immediate containment"
          }), ": Rotate the compromised encryption keys, revoke the affected API tokens, and block the originating IP at the infrastructure level. Take the affected service offline if the scope warrants."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Forensic investigation"
          }), ": Query the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "audit_logs"
          }), " table to identify exactly which records were accessed and by whom. Correlate with Laravel access logs, CloudTrail, and database connection logs to build a timeline."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Impact assessment"
          }), ": Determine the number of affected patients, the types of PHI exposed, and whether the data was encrypted at rest (mitigates breach classification under HIPAA)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Notification"
          }), ": Notify affected patients within 60 days (HIPAA requirement). Notify the HHS Secretary and, for 500+ patients, local media."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Root cause fix"
          }), ": Implement the fix (e.g., revoke overly permissive Gates, add encryption to a missing field, fix a logging pathway that wrote raw PHI). Add a regression test that asserts no PHI fields appear in API responses or log files."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Post-mortem"
          }), ": Blameless incident review. Update the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AuditTrail"
          }), " trait, add automated breach detection alerts, and run a tabletop exercise with the engineering team."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q23-how-would-you-approach-migrating-a-legacy-on-premise-ehr-to-a-laravel-cloud-platform",
      children: "Q23: How would you approach migrating a legacy on-premise EHR to a Laravel cloud platform?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "strangler fig pattern"
      }), " running in parallel with the legacy system for 6-12 months:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Data extraction"
          }), ": Use the legacy EHR's FHIR or HL7 export to bulk-extract patient records, providers, and appointment history. Transform and validate the data in a staging environment with encrypted storage."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Phased cutover"
          }), ": Start with read-only access to historical records via the Laravel app while appointments and new patients continue on the legacy system. Phase 2 enables appointment scheduling in Laravel. Phase 3 moves clinical documentation. Phase 4 sunsets the legacy system."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Synchronization layer"
          }), ": A ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SyncAgent"
          }), " runs hourly, pulling new and updated records from the legacy system's HL7 interface and upserting them into Laravel. Conflicts are flagged for manual reconciliation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Validation"
          }), ": After each phase, run automated reconciliation scripts that compare record counts, field values, and appointment schedules between systems. Reject the phase if discrepancies exceed 0.1%."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Rollback plan"
          }), ": Every phase includes a documented rollback procedure. The legacy system is maintained in read-only mode for 90 days post-migration to allow fallback."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q24-your-patient-intake-agent-is-hallucinating-patient-data-how-do-you-handle-it",
      children: "Q24: Your patient intake agent is hallucinating patient data. How do you handle it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement a three-layer validation strategy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Input guardrails"
          }), ": The agent's prompt includes strict instructions to never fabricate data → missing fields must be returned as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "null"
          }), ". Structured output Schemas mark all fields as nullable except ", (0,jsx_runtime.jsx)(_components.code, {
            children: "confidence"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "missing_fields"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pattern validation"
          }), ": A ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PatientIntakeValidator"
          }), " runs after the agent returns data, checking that extracted fields match expected patterns (valid email regex, 10-digit phone, date format, SSN last four is exactly 4 digits). Fields that fail validation are set to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "null"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class PatientIntakeValidator\n{\n    public function validate(array $patientInfo): array\n    {\n        $validated = [];\n        $validated['email'] = filter_var($patientInfo['email'] ?? '', FILTER_VALIDATE_EMAIL)\n            ? $patientInfo['email'] : null;\n        $validated['phone'] = preg_match('/^\\+?1?\\d{10}$/', $patientInfo['phone'] ?? '')\n            ? $patientInfo['phone'] : null;\n        $validated['ssn_last_four'] = preg_match('/^\\d{4}$/', $patientInfo['ssn_last_four'] ?? '')\n            ? $patientInfo['ssn_last_four'] : null;\n        return $validated;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Human review queue"
        }), ": Referrals with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "confidence < 0.7"
        }), " or more than 3 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "missing_fields"
        }), " are routed to a manual review queue instead of auto-creating the patient. A dashboard shows pending intakes with the AI's extracted data and highlights fields needing human verification."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The system also logs all agent outputs for audit. If the same hallucination pattern appears, we update the agent's instructions with a counter-example showing the correct behavior."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q25-your-claims-processing-agent-is-running-too-slowly-how-do-you-diagnose-and-fix-it",
      children: "Q25: Your claims processing agent is running too slowly. How do you diagnose and fix it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Profile the agent's execution pipeline:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Identify bottlenecks"
          }), ": Add timing logs at each stage → validation, fraud assessment, clearinghouse submission, status check. Use Laravel Telescope to monitor queue job duration and failure rates."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Common fixes"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "AI latency"
            }), ": Reduce the number of LLM calls by batching validation and fraud assessment into a single structured output call"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Database locking"
            }), ": Optimize the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "lockForUpdate()"
            }), " transaction window → keep it narrow, only around the slot assignment, not the full AI call"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Clearinghouse API"
            }), ": Add response caching for status checks (claims don't change status every 5 minutes)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Queue backlog"
            }), ": Increase Horizon workers for the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "claims"
            }), " queue and add a dedicated queue connection"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Batched AI call reduces 2 calls to 1\npublic function validateAndAssessFraud(): array\n{\n    return $this->chat(\n        messages: [['role' => 'user', 'content' => json_encode([...])]],\n        structuredOutput: ['type' => 'object', 'properties' => [\n            'is_valid' => ['type' => 'boolean'],\n            'validation_errors' => ['type' => 'array'],\n            'fraud_score' => ['type' => 'number'],\n            'risk_level' => ['type' => 'string'],\n            'recommendation' => ['type' => 'string'],\n        ]],\n    );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Horizontal scaling"
          }), ": Claims processing is embarrassingly parallel → deploy 10+ queue workers, enable batch processing (process 50 claims per job), and ensure the clearinghouse API supports concurrent requests."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoring"
          }), ": Set up Pulse to monitor queue throughput. Alert if claims take longer than 5 minutes per stage. Track the end-to-end time from claim creation to submission as a service-level indicator."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q26-your-medical-record-rag-agent-returns-irrelevant-results-for-complex-queries-how-do-you-improve-retrieval-quality",
      children: "Q26: Your medical record RAG agent returns irrelevant results for complex queries. How do you improve retrieval quality?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apply a multi-strategy retrieval improvement:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid search"
        }), ": Combine vector similarity with full-text search. pgvector's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<=>"
        }), " operator finds semantically similar results, while Laravel's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whereFullText()"
        }), " catches exact keyword matches."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$results = MedicalRecord::where('patient_id', $patient->id)\n    ->whereFullText(['encrypted_content'], $keywords)\n    ->orderByRaw(\"embedding <=> '{$embedding}'::vector\")\n    ->limit(10)\n    ->get();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Query rewriting"
          }), ": Before embedding the user's query, pass it through the AI SDK to formulate a better search query. A query like \"what's going on with his heart\" gets rewritten to \"cardiac assessment, echocardiogram results, cardiology notes\"."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reranking"
          }), ": Retrieve the top 20 results by vector similarity, then use the AI SDK's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Reranking::of()"
          }), " to score them against the original query and keep only the top 5 most relevant."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$reranked = Reranking::of($results, $originalQuery)->take(5);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Chunking strategy"
          }), ": Medical records are long → chunk them into smaller segments (each note section, each lab result) before embedding. The chunk boundaries follow clinical document structure (History, Assessment, Plan, Lab Results, Medications)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Feedback loop"
          }), ": Track which results users click on or flag as irrelevant. Use implicit feedback to fine-tune the embedding model or adjust the chunking strategy over time."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Compare key healthcare concepts for interview preparation."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Consideration"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Patient Data Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store and manage patient information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHI protection and encryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FHIR Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interoperability standard for healthcare APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured resource-based API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Telemedicine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual healthcare delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time video + scheduling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIPAA, GDPR, SOC-2 adherence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit logging + data encryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clinical Workflows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end care management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-role coordination"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quick reference for healthcare interview topics."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Patient Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHI encrypted, audit-trailed, role-restricted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FHIR Resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patient, Observation, Medication, Appointment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Telemedicine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Video + chat + prescription workflows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIPAA, audit logs, data encryption, access control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider availability + patient preference matching"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application Context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Health Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patient records management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessibility vs privacy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FHIR API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Healthcare interoperability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standardization vs flexibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Telemedicine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote care delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convenience vs in-person quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regulatory adherence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security vs usability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appointment management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open slots vs patient preference"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Test your healthcare interview knowledge."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is FHIR in healthcare technology?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) A billing system"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) An interoperability standard for healthcare APIs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) A patient portal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) A scheduling system"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>B) An interoperability standard for healthcare APIs</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Q2:"
          }), " What is the most important consideration for patient data models?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) PHI protection and encryption"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) UI design"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) API documentation"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>B) PHI protection and encryption</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Q3:"
              }), " Which compliance framework applies to US healthcare applications?"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A) GDPR"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "B) HIPAA"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C) PCI-DSS"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "D) SOC-2"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
              children: (0,jsx_runtime.jsxs)(_components.summary, {
                children: ["Answer</summary>B) HIPAA</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q4:"
                  }), " What does telemedicine enable?"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "A) Only phone consultations"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "B) Virtual healthcare delivery with video + chat"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "C) Only email communication"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "D) In-person visits only"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                  children: (0,jsx_runtime.jsx)(_components.summary, {
                    children: "Answer</summary>B) Virtual healthcare delivery with video + chat</details>\n"
                  })
                })]
              })
            })]
          })
        })]
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