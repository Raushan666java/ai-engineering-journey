"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[72458],{

/***/ 47912
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_05_regular_languages_md_d2e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-05-regular-languages-md-d2e.json
const site_docs_courses_theory_of_computation_05_regular_languages_md_d2e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/05-regular-languages","title":"Chapter 5: Properties of Regular Languages","description":"Previous Context-Free Grammars","source":"@site/docs/courses/theory-of-computation/05-regular-languages.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation/05-regular-languages","permalink":"/ai-engineering-journey/theory-of-computation/05-regular-languages","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-regular-languages","slug":"/theory-of-computation/05-regular-languages","title":"Chapter 5: Properties of Regular Languages","sidebar_label":"Chapter 5: Properties of Regular Languages","sidebar_position":5},"sidebar":"coursesSidebar","previous":{"title":"Chapter 4: Regular Expressions","permalink":"/ai-engineering-journey/theory-of-computation/04-regex"},"next":{"title":"Chapter 6: Context-Free Grammars","permalink":"/ai-engineering-journey/theory-of-computation/06-cfg"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/theory-of-computation/05-regular-languages.md


const frontMatter = {
	id: '05-regular-languages',
	slug: '/theory-of-computation/05-regular-languages',
	title: 'Chapter 5: Properties of Regular Languages',
	sidebar_label: 'Chapter 5: Properties of Regular Languages',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Properties of Regular Languages';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "4.1 The Pumping Lemma for Regular Languages",
  "id": "41-the-pumping-lemma-for-regular-languages",
  "level": 3
}, {
  "value": "4.2 Using the Pumping Lemma to Prove Non-Regularity",
  "id": "42-using-the-pumping-lemma-to-prove-non-regularity",
  "level": 3
}, {
  "value": "4.3 Closure Properties of Regular Languages",
  "id": "43-closure-properties-of-regular-languages",
  "level": 3
}, {
  "value": "4.4 Myhill-Nerode Theorem",
  "id": "44-myhill-nerode-theorem",
  "level": 3
}, {
  "value": "4.5 DFA Minimization",
  "id": "45-dfa-minimization",
  "level": 3
}, {
  "value": "4.6 Decision Properties of Regular Languages",
  "id": "46-decision-properties-of-regular-languages",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 4.1: Pumping Lemma → Prove L = {0ⁿ1ⁿ | n ≥ 0} is Not Regular",
  "id": "example-41-pumping-lemma--prove-l--0ⁿ1ⁿ--n--0-is-not-regular",
  "level": 3
}, {
  "value": "Example 4.2: Pumping Lemma → Prove L = { w ∈ {a,b}* | w = wʀ (palindromes) } is Not Regular",
  "id": "example-42-pumping-lemma--prove-l---w--ab--w--wʀ-palindromes--is-not-regular",
  "level": 3
}, {
  "value": "Example 4.3: Proving Closure Under Intersection",
  "id": "example-43-proving-closure-under-intersection",
  "level": 3
}, {
  "value": "Example 4.4: Myhill-Nerode for L = {0ⁿ1ⁿ | n ≥ 0}",
  "id": "example-44-myhill-nerode-for-l--0ⁿ1ⁿ--n--0",
  "level": 3
}, {
  "value": "Example 4.5: DFA Minimization",
  "id": "example-45-dfa-minimization",
  "level": 3
}, {
  "value": "Example 4.6: Decision Procedure for Emptiness",
  "id": "example-46-decision-procedure-for-emptiness",
  "level": 3
}, {
  "value": "TypeScript Closure Demonstrations",
  "id": "typescript-closure-demonstrations",
  "level": 2
}, {
  "value": "Myhill-Nerode Step-by-Step",
  "id": "myhill-nerode-step-by-step",
  "level": 2
}, {
  "value": "DFA Minimization with Table-Filling",
  "id": "dfa-minimization-with-table-filling",
  "level": 2
}, {
  "value": "The Pumping Lemma in Game Form",
  "id": "the-pumping-lemma-in-game-form",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
  "value": "The Pumping Lemma: Advanced Applications",
  "id": "the-pumping-lemma-advanced-applications",
  "level": 2
}, {
  "value": "Proving Non-Regularity via Closure Properties",
  "id": "proving-non-regularity-via-closure-properties",
  "level": 3
}, {
  "value": "The Pumping Lemma for Finite Languages",
  "id": "the-pumping-lemma-for-finite-languages",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Pumping Lemma Prover: TypeScript Implementation",
  "id": "pumping-lemma-prover-typescript-implementation",
  "level": 2
}, {
  "value": "Decision Properties in TypeScript",
  "id": "decision-properties-in-typescript",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways-1",
  "level": 2
}, {
  "value": "TypeScript Implementation: Pumping Lemma and Myhill-Nerode Equivalence",
  "id": "typescript-implementation-pumping-lemma-and-myhill-nerode-equivalence",
  "level": 2
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
    header: "header",
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
        id: "chapter-5-properties-of-regular-languages",
        children: "Chapter 5: Properties of Regular Languages"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/04-regex",
          children: "Regular Expressions"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/06-cfg",
          children: "Context-Free Grammars"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State and apply the pumping lemma for regular languages."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that specific languages are not regular using the pumping lemma."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand and prove closure properties of regular languages."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State and apply the Myhill-Nerode theorem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimize a DFA using the table-filling algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between regular and non-regular languages."
      }), "\n"]
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
        href: "../../assets/images/lessons/theory-of-computation/05-regular-languages/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/05-regular-languages/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/theory-of-computation/05-regular-languages/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/05-regular-languages/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/theory-of-computation/05-regular-languages/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/05-regular-languages/visual-explanation.png",
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
            children: "Pumping Lemma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long strings have pumpable substring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proves languages are not regular"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Closure Properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular langs closed under ?, n, ¬, etc."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build complex languages from simple"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Myhill-Nerode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Characterizes regularity via equivalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finds minimal DFA uniquely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFA Minimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table-filling merges equivalent states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most efficient language recognizer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decision Properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Membership, emptiness, equivalence decidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithms exist for regular langs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Pumping Lemma] --> B[Non-Regular Proofs]\n    B --> C[Closure Properties]\n    C --> D[Myhill-Nerode]\n    D --> E[DFA Minimization]\n    E --> F[Decision Properties]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/04-regular-languages.png",
        alt: "Properties of Regular Languages Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-the-pumping-lemma-for-regular-languages",
      children: "4.1 The Pumping Lemma for Regular Languages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The pumping lemma is a powerful tool for proving that certain languages are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not regular"
      }), ". It captures a fundamental property: any sufficiently long string in a regular language can be \"pumped\" → a middle section can be repeated any number of times → and the resulting string remains in the language."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pumping Lemma (for Regular Languages):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If L is a regular language, then there exists an integer ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "p ≥ 1"
      }), " (the pumping length) such that every string s ∈ L with |s| ≥ p can be written as s = xyz satisfying:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "xyⁱz ∈ L for all i ≥ 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "|y| ≥ 1 (y is non-empty)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "|xy| ≤ p (the pumpable portion occurs within the first p symbols)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof sketch:"
      }), " If L is regular, there exists a DFA M with, say, p states that recognizes L. Consider a string s of length ≥ p. When M processes s, it visits p+1 states (including the start). By the pigeonhole principle, some state is repeated. The loop between the first and second occurrence of this state is y. Since |xy| ≤ p and |y| ≥ 1, the loop occurs within the first p symbols."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-using-the-pumping-lemma-to-prove-non-regularity",
      children: "4.2 Using the Pumping Lemma to Prove Non-Regularity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To prove L is not regular:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assume L is regular (for contradiction)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Let p be the pumping length."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose s ∈ L with |s| ≥ p (strategically chosen)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Show that for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "every"
        }), " decomposition s = xyz with |y| ≥ 1 and |xy| ≤ p, there exists some i ≥ 0 such that xyⁱz ∉ L."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This contradicts the pumping lemma, so L is not regular."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-closure-properties-of-regular-languages",
      children: "4.3 Closure Properties of Regular Languages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The class of regular languages is closed under the following operations. If L₁ and L₂ are regular:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Construction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L₁ ∪ L₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFA with ε from new start to both DFAs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intersection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L₁ ∩ L₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product DFA: (q₁,q₂) with F₁ × F₂ as accept"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L̅ = Σ* − L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swap accepting and non-accepting states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concatenation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L₁L₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFA with ε from L₁'s accept to L₂'s start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kleene star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFA with ε-loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lʀ = { wʀ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "w ∈ L }"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Homomorphism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h(L) = { h(w)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "w ∈ L }"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inverse homomorphism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h⁻¹(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Straightforward DFA construction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L₁ − L₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L₁ ∩ L̅₂"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L₁ ⊕ L₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(L₁ ∪ L₂) − (L₁ ∩ L₂)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Closure under complement and intersection follow from DFA properties. For complement, simply flip accepting and non-accepting states in the DFA. For intersection, build a product DFA where state (qᵢ, pⱼ) transitions to (δ₁(qᵢ,a), δ₂(pⱼ,a)) and accepts iff both coordinates are accepting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-myhill-nerode-theorem",
      children: "4.4 Myhill-Nerode Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Myhill-Nerode theorem characterizes the regular languages in terms of an equivalence relation on strings and provides a method to find the minimal DFA."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define an equivalence relation ≡ₗ on strings over Σ:\nx ≡ₗ y iff for all z ∈ Σ*, xz ∈ L ⇔ yz ∈ L"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two strings are equivalent if they have the same \"future\" with respect to L → appending any suffix z to both either keeps both in L or both out of L."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Myhill-Nerode Theorem:"
      }), "\nThe following three statements are equivalent:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L is regular."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L is the union of some equivalence classes of a right-invariant equivalence relation of finite index."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relation ≡ₗ has finitely many equivalence classes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When L is regular, the number of equivalence classes of ≡ₗ equals the number of states in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "minimal"
      }), " DFA for L."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Practical use:"
      }), " To prove L is not regular, show that ≡ₗ has infinitely many classes by finding an infinite set of pairwise inequivalent strings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-dfa-minimization",
      children: "4.5 DFA Minimization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "table-filling algorithm"
      }), " (also called the Moore or Hopcroft-Ullman algorithm) minimizes a DFA by identifying indistinguishable states."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove any unreachable states (states not reachable from the start state)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark pairs (p, q) where p ∈ F and q ∉ F as distinguishable."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each unmarked pair (p, q) and each symbol a ∈ Σ:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If (δ(p, a), δ(q, a)) is marked, then mark (p, q)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat Step 3 until no more pairs are marked."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remaining unmarked pairs are indistinguishable and can be merged."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why minimize?"
      }), " The minimal DFA is guaranteed to be unique up to renaming. It provides the most efficient implementation of a regular language recognizer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-decision-properties-of-regular-languages",
      children: "4.6 Decision Properties of Regular Languages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These problems are decidable for regular languages:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Given DFA M and string w, does M accept w?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simulate M on w"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Emptiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is L(M) = ∅?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check if any accept state is reachable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finiteness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is L(M) finite?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check for cycles that can reach accept"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Do M₁ and M₂ recognize the same language?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimize both and check isomorphism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inclusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is L(M₁) ⊆ L(M₂)?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check L(M₁) ∩ L(M₂)̅ = ∅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-41-pumping-lemma--prove-l--0ⁿ1ⁿ--n--0-is-not-regular",
      children: "Example 4.1: Pumping Lemma → Prove L = {0ⁿ1ⁿ | n ≥ 0} is Not Regular"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof:"
      }), " Assume L is regular. Let p be the pumping length. Choose s = 0ᵖ1ᵖ. Since |s| ≥ p, s = xyz with |y| ≥ 1 and |xy| ≤ p."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since |xy| ≤ p, y consists only of 0s (the first p characters are all 0). Let y = 0ᵏ where k ≥ 1."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now pump: xy²z = 0ᵖ⁺ᵏ1ᵖ. This string has more 0s than 1s, so it is not in L. Contradiction. Therefore, L is not regular."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-42-pumping-lemma--prove-l---w--ab--w--wʀ-palindromes--is-not-regular",
      children: "Example 4.2: Pumping Lemma → Prove L = { w ∈ {a,b}* | w = wʀ (palindromes) } is Not Regular"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof:"
      }), " Assume L is regular with pumping length p. Choose s = aᵖ b aᵖ ∈ L. Since |xy| ≤ p, y contains only a's from the first block. So y = aᵏ for some k ≥ 1. Then xy²z = aᵖ⁺ᵏ b aᵖ. This is not a palindrome (the first half has more a's than the second half). Contradiction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-43-proving-closure-under-intersection",
      children: "Example 4.3: Proving Closure Under Intersection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given DFA M₁ = (Q₁, Σ, δ₁, q₁, F₁) for L₁ and M₂ = (Q₂, Σ, δ₂, q₂, F₂) for L₂:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Construct M = (Q, Σ, δ, q₀, F) for L₁ ∩ L₂:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Q = Q₁ × Q₂ (Cartesian product)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ((p, q), a) = (δ₁(p, a), δ₂(q, a))"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₀ = (q₁, q₂)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "F = F₁ × F₂"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A string w is accepted by M iff δ̂₁(q₁, w) ∈ F₁ and δ̂₂(q₂, w) ∈ F₂, meaning w ∈ L₁ ∩ L₂."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-44-myhill-nerode-for-l--0ⁿ1ⁿ--n--0",
      children: "Example 4.4: Myhill-Nerode for L = {0ⁿ1ⁿ | n ≥ 0}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider strings 0ⁱ and 0ʲ with i ≠ j. Let z = 1ⁱ. Then 0ⁱ·1ⁱ = 0ⁱ1ⁱ ∈ L, but 0ʲ·1ⁱ = 0ʲ1ⁱ ∉ L (since j ≠ i). Therefore, 0ⁱ and 0ʲ are distinguishable for all i ≠ j. This gives infinitely many equivalence classes, proving L is not regular by Myhill-Nerode."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-45-dfa-minimization",
      children: "Example 4.5: DFA Minimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider a DFA over {a,b} with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "States: A (start, accept), B, C, D (accept), E"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ: A-a→B, A-b→C; B-a→A, B-b→D; C-a→E, C-b→D; D-a→E, D-b→C; E-a→E, E-b→E"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Remove unreachable states → all reachable from A."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Initial marking: accept (A, D) vs non-accept (B, C, E). Mark: (A,B), (A,C), (A,E), (D,B), (D,C), (D,E)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Iterate. Consider (B,C): δ(B,a)=A, δ(C,a)=E → (A,E) is unmarked, so don't mark yet. δ(B,b)=D, δ(C,b)=D → same. So (B,C) stays unmarked."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Continue until stable. Unmarked pairs indicate equivalent states."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-46-decision-procedure-for-emptiness",
      children: "Example 4.6: Decision Procedure for Emptiness"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To check if L(M) = ∅ for DFA M with states Q, start q₀, accept F:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run graph reachability algorithm (DFS/BFS) from q₀."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If any accept state is reachable, L(M) ≠ ∅."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otherwise, L(M) = ∅."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-closure-demonstrations",
      children: "TypeScript Closure Demonstrations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Product construction for intersection closure\ntype DFAConfig = {\n  Q: string[];\n  sigma: string[];\n  delta: (q: string, a: string) => string;\n  q0: string;\n  F: string[];\n};\n\nfunction intersectDFA(A: DFAConfig, B: DFAConfig): DFAConfig {\n  const Q: string[] = [];\n  for (const qa of A.Q) {\n    for (const qb of B.Q) {\n      Q.push(`(${qa},${qb})`);\n    }\n  }\n  const sigma = A.sigma.filter(s => B.sigma.includes(s));\n  const delta = (q: string, a: string) => {\n    const [qa, qb] = q.slice(1, -1).split(',');\n    return `(${A.delta(qa, a)},${B.delta(qb, a)})`;\n  };\n  const q0 = `(${A.q0},${B.q0})`;\n  const F = A.F.flatMap(fa => B.F.map(fb => `(${fa},${fb})`));\n  return { Q, sigma, delta, q0, F };\n}\n\n// Complement: swap accepting and non-accepting states\nfunction complementDFA(M: DFAConfig): DFAConfig {\n  const acceptSet = new Set(M.F);\n  return {\n    ...M,\n    F: M.Q.filter(q => !acceptSet.has(q))\n  };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "myhill-nerode-step-by-step",
      children: "Myhill-Nerode Step-by-Step"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To find the minimal DFA using the Myhill-Nerode approach:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the equivalence relation =_L: x =_L y iff for all suffixes z, xz ? L ? yz ? L."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with the empty string e. Find all distinct equivalence classes by checking distinguishability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each equivalence class becomes a state in the minimal DFA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The transition from class [x] on symbol a goes to class [xa]."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Myhill-Nerode Construction\"\n        A[Start: e class] -->|a| B[\"Class [a]\"]\n        A -->|b| C[\"Class [b]\"]\n        B -->|a| D[\"Class [aa]\"]\n        B -->|b| E[\"Class [ab]\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The number of equivalence classes equals the number of states in the minimal DFA. This is the most direct characterization: a language is regular precisely when its strings partition into finitely many future-behavior classes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dfa-minimization-with-table-filling",
      children: "DFA Minimization with Table-Filling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The table-filling algorithm systematically finds indistinguishable states:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Table-Filling Algorithm\"\n        T1[\"Initialize| Mark (p,q) if p?F, q?F\"] --> T2[\"Iterate| Mark (p,q) if ?a?S,<br/>(d(p,a),d(q,a)) is marked\"]\n        T2 --> T3[\"Repeat until stable| Unmarked pairs ? equivalent\"]\n        T3 --> T4[\"Merge| Collapse each equivalence class<br/>into one state\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The algorithm runs in O(|Q|²|S|) time. After minimization, the DFA is unique up to state renaming — the canonical representation of the regular language."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-pumping-lemma-in-game-form",
      children: "The Pumping Lemma in Game Form"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "View the pumping lemma as an adversarial game:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You claim L is regular."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The opponent picks pumping length p."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You pick s ? L with |s| = p."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The opponent picks a decomposition s = xyz with |xy| = p and |y| = 1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You pick i = 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If xy?z ? L, you win (L is not regular). Otherwise, the opponent wins."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To prove non-regularity, you need a strategy that beats every possible decomposition — this is why the universal quantifier \"for every decomposition\" is the key challenge."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The pumping lemma is a non-regularity tool."
          }), " It gives a necessary condition for regularity, so violating it proves non-regularity. But some non-regular languages can still be \"pumped\" — use Myhill-Nerode for certainty."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Closure properties are construction recipes."
          }), " When building a language processor, use union, intersection, and complement to compose complex recognizers from simple ones. Product construction is the key implementation technique."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DFA minimization saves resources."
          }), " A minimized DFA requires the fewest possible states and transitions. In embedded systems or high-throughput pattern matching, this directly reduces memory and power consumption."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Decision algorithms exist for regular languages."
          }), " Questions like \"does this DFA accept any string?\" or \"are these two DFAs equivalent?\" have efficient algorithms — a rare luxury not shared by more powerful models."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Regular?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Construction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e-NFA from new start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intersection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product DFA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flip accept/reject"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concatenation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e-chain NFAs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kleene star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e-loop NFA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse transitions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Pumping lemma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prove non-regularity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Myhill-Nerode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Characterize/maximally classify"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Table-filling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimize DFA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Product construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intersection/union closure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State elimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA ? regex"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-pumping-lemma-advanced-applications",
      children: "The Pumping Lemma: Advanced Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "proving-non-regularity-via-closure-properties",
      children: "Proving Non-Regularity via Closure Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sometimes the pumping lemma alone is insufficient or awkward. Using closure properties, we can reduce a language to a known non-regular language:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Prove (L = { w \\in {a,b}^* \\mid #_a(w) = #_b(w) }) is not regular."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If L were regular, then (L \\cap a^", (0,jsx_runtime.jsx)(_components.em, {
        children: "b^"
      }), " = {a^n b^n \\mid n \\ge 0}) would be regular (intersection closure). But ({a^n b^n}) is not regular. Therefore, L is not regular."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This approach is often simpler than applying the pumping lemma directly."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-pumping-lemma-for-finite-languages",
      children: "The Pumping Lemma for Finite Languages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Languages with finitely many strings are always regular (they can be represented as a finite union of singleton strings). The pumping lemma does not apply to them because the pumping length p exceeds all strings in the language."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    L[\"Language L\"] --> Finite{\"Finite?\"}\n    Finite -->|Yes| REG[\"Regular (trivially)\"]\n    Finite -->|No| PL[\"Apply Pumping Lemma\"]\n    PL --> Result{\"Pumping condition holds?\"}\n    Result -->|No| NOT_REG[\"Not Regular ?\"]\n    Result -->|Yes| MN[\"Apply Myhill-Nerode\"]\n    MN --> MNResult{\"Finite index?\"}\n    MNResult -->|Yes| REG2[\"Regular ?\"]\n    MNResult -->|No| NOT_REG2[\"Not Regular ?\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This decision tree illustrates the relationship between the pumping lemma (necessary condition), Myhill-Nerode (necessary and sufficient), and the finite/infinite distinction."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lexer optimization via DFA minimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formal verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model checking regular properties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient regex matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aho-Corasick multi-pattern search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNA sequence pattern search"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " The pumping lemma shows a language is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Regular"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Not regular ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Context-free"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Decidable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** The pumping lemma gives a necessary condition for regularity; violating it proves non-regularity.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Regular languages are closed under:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Intersection ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) All set operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Every operation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Only union"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**A)** Regular languages are closed under union, intersection, complement, concatenation, and Kleene star.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Myhill-Nerode theorem states L is regular iff =_L has:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Zero classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Finite index ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) One class"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Infinite index"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Finite-index right-invariant equivalence relation — number of classes = minimal DFA states.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " DFA minimization merges:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) All states"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Indistinguishable states ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Reachable states"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Accepting states"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** States that behave identically on all suffixes are merged.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "**"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pumping-lemma-prover-typescript-implementation",
      children: "Pumping Lemma Prover: TypeScript Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type PumpingDecomposition = { x: string; y: string; z: string };\n\nfunction checkPumpingLemma(\n  language: (s: string) => boolean,\n  p: number,\n  s: string\n): { isRegular: boolean | null; witness?: string } {\n  if (!language(s) || s.length < p) {\n    return { isRegular: null };  // String doesn't meet conditions\n  }\n\n  // Try all valid decompositions\n  for (let xyLen = 1; xyLen <= p; xyLen++) {\n    for (let yLen = 1; yLen <= xyLen; yLen++) {\n      const x = s.slice(0, xyLen - yLen);\n      const y = s.slice(xyLen - yLen, xyLen);\n      const z = s.slice(xyLen);\n\n      // Try pumping: i = 0 (pump down), i = 2 (pump up)\n      for (const i of [0, 2]) {\n        const pumped = x + y.repeat(i) + z;\n        if (!language(pumped)) {\n          return {\n            isRegular: false,\n            witness: `s=${s}, x='${x}', y='${y}', z='${z}', i=${i} ? '${pumped}' not in L`\n          };\n        }\n      }\n    }\n  }\n  return { isRegular: true };  // Passed all decompositions\n}\n\n// Test: {0n1n} is not regular\nconst anbn = (s: string) => /^0+1+$/.test(s) &&\n  s.split('0').length - 1 === s.split('1').length - 1;\n\nconst result = checkPumpingLemma(anbn, 5, '0000011111');\nconsole.log(result.isRegular === false\n  ? 'Not regular: ' + result.witness\n  : 'May be regular');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-properties-in-typescript",
      children: "Decision Properties in TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DecisionProcedures {\n  // Emptiness: Is L(M) = Ø?\n  static isEmpty(Q: Set<string>, delta: Map<string, string>,\n                  q0: string, F: Set<string>): boolean {\n    const visited = new Set<string>();\n    const stack = [q0];\n    while (stack.length > 0) {\n      const q = stack.pop()!;\n      if (visited.has(q)) continue;\n      visited.add(q);\n      if (F.has(q)) return false;  // Can reach accept\n      for (const sym of ['0', '1', 'a', 'b']) {\n        const key = `${q},${sym}`;\n        if (delta.has(key)) stack.push(delta.get(key)!);\n      }\n    }\n    return true;  // No accept state reachable\n  }\n\n  // Finiteness: Is L(M) finite?\n  static isFinite(Q: Set<string>, delta: Map<string, string>,\n                  q0: string, F: Set<string>): boolean {\n    // A DFA accepts infinite language iff there is a cycle\n    // reachable from start that can reach an accept state\n    const visited = new Set<string>();\n    const recStack = new Set<string>();\n\n    function dfs(q: string): boolean {\n      visited.add(q);\n      recStack.add(q);\n      for (const sym of ['0', '1', 'a', 'b']) {\n        const key = `${q},${sym}`;\n        if (!delta.has(key)) continue;\n        const next = delta.get(key)!;\n        if (!visited.has(next)) {\n          if (dfs(next)) return true;\n        } else if (recStack.has(next)) {\n          // Found cycle — check if it can reach accept\n          return canReachAccept(next, new Set(), delta, F);\n        }\n      }\n      recStack.delete(q);\n      return false;\n    }\n\n    function canReachAccept(q: string, seen: Set<string>,\n                            delta: Map<string, string>,\n                            F: Set<string>): boolean {\n      if (F.has(q)) return true;\n      seen.add(q);\n      for (const sym of ['0', '1', 'a', 'b']) {\n        const key = `${q},${sym}`;\n        if (!delta.has(key)) continue;\n        const next = delta.get(key)!;\n        if (!seen.has(next) && canReachAccept(next, seen, delta, F))\n          return true;\n      }\n      return false;\n    }\n\n    return !dfs(q0);\n  }\n\n  // Equivalence: Do two DFAs accept the same language?\n  static areEquivalent(m1: DFA, m2: DFA): boolean {\n    // Product construction + table-filling\n    const Q1 = [...m1['Q']], Q2 = [...m2['Q']];\n    const worklist: Array<[string, string]> = [[m1['q0'], m2['q0']]];\n    const visited = new Set<string>();\n\n    while (worklist.length > 0) {\n      const [s1, s2] = worklist.pop()!;\n      const key = `${s1}|${s2}`;\n      if (visited.has(key)) continue;\n      visited.add(key);\n\n      if (m1['F'].has(s1) !== m2['F'].has(s2)) return false;\n\n      for (const sym of m1['sigma']) {\n        const k1 = `${s1},${sym}`, k2 = `${s2},${sym}`;\n        if (m1['delta'].has(k1) && m2['delta'].has(k2)) {\n          worklist.push([m1['delta'].get(k1)!, m2['delta'].get(k2)!]);\n        }\n      }\n    }\n    return true;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways-1",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The pumping lemma is a negative tool."
          }), " Use it to prove that a language is NOT regular, never to prove regularity. The lemma gives a necessary condition, not a sufficient one — some non-regular languages satisfy it."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Closure properties simplify proofs."
          }), " Instead of directly applying the pumping lemma to a complex language, try to prove non-regularity by reduction: if L were regular, then applying a closure property (intersection with a regular language, homomorphism) would produce a known non-regular language."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DFA minimization guarantees optimality."
          }), " The table-filling algorithm produces the unique minimal DFA for any regular language. This is the gold standard: minimal DFAs are canonical representations — two regular expressions are equivalent iff their minimized DFAs are isomorphic."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Decidability means automation."
          }), " Membership, emptiness, finiteness, and equivalence are all decidable for regular languages. This enables automated tools like regex testers, lexer generators, and pattern matchers that can reason about regular languages without human intervention."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The pumping lemma as a game."
          }), " Understanding the adversarial game formulation helps construct correct proofs — the key is that you must beat every possible decomposition, not just the obvious ones."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Closure under complement is unique to regular languages."
          }), " For CFLs and above, complement closure fails spectacularly. This makes regular languages exceptionally well-behaved for verification tasks."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-pumping-lemma-and-myhill-nerode-equivalence",
      children: "TypeScript Implementation: Pumping Lemma and Myhill-Nerode Equivalence"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Pumping Lemma Checker and Myhill-Nerode Equivalence\n\nclass PumpingLemma {\n  static canBePumped(\n    language: (s: string) => boolean,\n    p: number,\n    maxChecks: number = 100\n  ): boolean {\n    // Try to find a pumpable string of length >= p\n    for (let len = p; len < p + maxChecks; len++) {\n      const str = this.generateString(len);\n      if (!language(str)) continue;\n\n      // Try all possible splits s = xyz with |xy| <= p, |y| >= 1\n      for (let yStart = 0; yStart < p; yStart++) {\n        for (let yLen = 1; yStart + yLen <= p; yLen++) {\n          const x = str.slice(0, yStart);\n          const y = str.slice(yStart, yStart + yLen);\n          const z = str.slice(yStart + yLen);\n\n          // Check if pumping works\n          let isPumpable = true;\n          for (let i = 0; i <= 3; i++) {\n            const pumped = x + y.repeat(i) + z;\n            if (!language(pumped)) {\n              isPumpable = false;\n              break;\n            }\n          }\n          if (isPumpable) return true;\n        }\n      }\n    }\n    return false; // Likely not regular\n  }\n\n  private static generateString(len: number): string {\n    return \"a\".repeat(len);\n  }\n\n  static proveNonRegular(languageName: string,\n                         language: (s: string) => boolean,\n                         p: number): string[] {\n    // Attempt to find a counterexample for the pumping lemma\n    const proof: string[] = [];\n    proof.push(`Assume ${languageName} is regular with pumping length p.`);\n    const s = \"a\".repeat(p) + \"b\".repeat(p);\n    proof.push(`Choose s = a^p b^p ? ${languageName}, |s| = ${s.length} >= p.`);\n\n    for (let yStart = 0; yStart < p; yStart++) {\n      for (let yLen = 1; yStart + yLen <= p; yLen++) {\n        const x = s.slice(0, yStart);\n        const y = s.slice(yStart, yStart + yLen);\n        const z = s.slice(yStart + yLen);\n        // Pump with i=2: xy²z has more a's than b's\n        const pumped = x + y.repeat(2) + z;\n        if (!language(pumped)) {\n          proof.push(`All splits: x=${x}, y=${y}, z=${z}.`);\n          proof.push(`Then xy²z = ${pumped} ? ${languageName} => contradiction.`);\n          return proof;\n        }\n      }\n    }\n    proof.push(\"No contradiction found — language may be regular.\");\n    return proof;\n  }\n}\n\nclass MyhillNerode {\n  static computeEquivalence(\n    alphabet: string[],\n    language: (s: string) => boolean,\n    maxLen: number\n  ): Map<string, string[]> {\n    // Build distinguishing suffixes for strings up to maxLen\n    const strings = this.generateStrings(alphabet, maxLen);\n    const classes = new Map<string, string[]>();\n    const assigned = new Set<string>();\n\n    for (const s of strings) {\n      if (assigned.has(s)) continue;\n      const equiv = [s];\n      assigned.add(s);\n\n      for (const t of strings) {\n        if (assigned.has(t) || s === t) continue;\n        let equivalent = true;\n        for (let i = 0; i <= maxLen; i++) {\n          const suffix = this.generateStrings(alphabet, i);\n          for (const w of suffix) {\n            if (language(s + w) !== language(t + w)) {\n              equivalent = false;\n              break;\n            }\n          }\n          if (!equivalent) break;\n        }\n        if (equivalent) {\n          equiv.push(t);\n          assigned.add(t);\n        }\n      }\n      classes.set(s, equiv);\n    }\n    return classes;\n  }\n\n  private static generateStrings(alphabet: string[], maxLen: number): string[] {\n    const result: string[] = [\"\"];\n    for (let len = 1; len <= maxLen; len++)\n      this.generateRec(alphabet, len, \"\", result);\n    return result;\n  }\n\n  private static generateRec(alphabet: string[], len: number,\n                              current: string, result: string[]): void {\n    if (current.length === len) { result.push(current); return; }\n    for (const a of alphabet) this.generateRec(alphabet, len, current + a, result);\n  }\n}\n\nconst langEvenAs = (s: string) => (s.match(/a/g) || []).length % 2 === 0;\nconsole.log(PumpingLemma.canBePumped(langEvenAs, 2)); // true\n\nconst langAnBn = (s: string) => /^a+b+$/.test(s) &&\n  (s.match(/a/g) || []).length === (s.match(/b/g) || []).length;\nconsole.log(PumpingLemma.proveNonRegular(\"L = {anbn}\", langAnBn, 3));\n\nconst classes = MyhillNerode.computeEquivalence([\"a\", \"b\"], langEvenAs, 2);\nconsole.log(`Myhill-Nerode equivalence classes: ${classes.size}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// Myhill-Nerode Equivalence Class Finder\n// Computes the right-invariant equivalence relation\n// for a language and reports the number of classes.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class MyhillNerodeClassifier {\n// Given a language L over alphabet S, compute equivalence\n// classes of strings up to length maxLen using the\n// Myhill-Nerode relation: x ~ y iff for all z,\n// xz ? L ? yz ? L.\nstatic computeClasses(\nalphabet: string[],\nlanguage: (s: string) => boolean,\nmaxLen: number\n): Map<string, string[]> {\n// Generate all strings up to maxLen\nconst allStrings = this.generateAllStrings(alphabet, maxLen);\nconst classes = new Map<string, string[]>();\nconst assigned = new Set<string>();"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (const x of allStrings) {\n  if (assigned.has(x)) continue;\n  const representatives: string[] = [x];\n  assigned.add(x);\n\n  for (const y of allStrings) {\n    if (x === y || assigned.has(y)) continue;\n    if (this.areEquivalent(x, y, alphabet, language, maxLen)) {\n      representatives.push(y);\n      assigned.add(y);\n    }\n  }\n  classes.set(x, representatives);\n}\n\nreturn classes;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Check if two strings are Myhill-Nerode equivalent\n// by testing all possible extensions z up to maxLen.\nprivate static areEquivalent(\nx: string, y: string,\nalphabet: string[],\nlanguage: (s: string) => boolean,\nmaxLen: number\n): boolean {\nconst maxExt = maxLen - Math.max(x.length, y.length);\nconst allExts = this.generateAllStrings(alphabet, maxExt);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (const z of allExts) {\n  if (language(x + z) !== language(y + z)) return false;\n}\nreturn true;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "private static generateAllStrings(\nalphabet: string[], maxLen: number\n): string[] {\nconst result: string[] = [\"\"]; // empty string\nfor (let len = 1; len <= maxLen; len++) {\nthis.genRec(alphabet, len, \"\", result);\n}\nreturn result;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "private static genRec(\nalphabet: string[], len: number,\ncurrent: string, result: string[]\n): void {\nif (current.length === len) { result.push(current); return; }\nfor (const a of alphabet) {\nthis.genRec(alphabet, len, current + a, result);\n}\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// DFA Equivalence Checker — verifies whether two DFAs\n// recognize the same language by checking if the symmetric\n// difference of their languages is empty.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class DFAEquivalenceChecker {\nstatic areEquivalent(\ndfa1: { states: Set<string>; alphabet: Set<string>; transitions: Map<string, string>; start: string; accept: Set<string> },\ndfa2: { states: Set<string>; alphabet: Set<string>; transitions: Map<string, string>; start: string; accept: Set<string> }\n): boolean {\n// BFS over pairs of states — search for a distinguishing string\nconst visited = new Set<string>();\nconst queue: [string, string][] = [[dfa1.start, dfa2.start]];"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "while (queue.length > 0) {\n  const [s1, s2] = queue.shift()!;\n  const pair = `${s1},${s2}`;\n  if (visited.has(pair)) continue;\n  visited.add(pair);\n\n  // If one accepts and the other doesn't, languages differ\n  if (dfa1.accept.has(s1) !== dfa2.accept.has(s2)) {\n    return false;\n  }\n\n  for (const sym of dfa1.alphabet) {\n    const t1 = dfa1.transitions.get(`${s1},${sym}`);\n    const t2 = dfa2.transitions.get(`${s2},${sym}`);\n    if (t1 !== undefined && t2 !== undefined) {\n      const nextPair = `${t1},${t2}`;\n      if (!visited.has(nextPair)) queue.push([t1, t2]);\n    }\n  }\n}\nreturn true;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["// Demo\nconst lang = (s: string) => (s.match(/a/g) || []).length % 2 === 0;\nconst classes = MyhillNerodeClassifier.computeClasses([\"a\", \"b\"], lang, 3);\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Myhill-Nerode equivalence classes: ${classes.size}"
      }), ");\nfor (const [rep, members] of classes) {\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "  Class [${rep}]: ${members.join(\", \")}"
      }), ");\n}"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["// DFA equivalence demo\nconst dfaA = {\nstates: new Set([\"q0\", \"q1\"]), alphabet: new Set([\"0\"]),\ntransitions: new Map([[\"q0,0\", \"q1\"], [\"q1,0\", \"q0\"]]),\nstart: \"q0\", accept: new Set([\"q0\"])\n};\nconst dfaB = {\nstates: new Set([\"p0\", \"p1\"]), alphabet: new Set([\"0\"]),\ntransitions: new Map([[\"p0,0\", \"p1\"], [\"p1,0\", \"p0\"]]),\nstart: \"p0\", accept: new Set([\"p0\"])\n};\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "DFAs equivalent: ${DFAEquivalenceChecker.areEquivalent(dfaA, dfaB)}"
      }), ");"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// regular languages\n// automata-complexity implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'regular languages', data: { topic: 'automata-complexity' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n## Summary\n\n- The pumping lemma provides a necessary condition for regularity used to prove non-regularity.\n- Regular languages are closed under union, intersection, complement, concatenation, star, reversal, homomorphism, and more.\n- The Myhill-Nerode theorem characterizes regular languages via finite-index right-invariant equivalence relations.\n- The table-filling algorithm produces the minimal (unique) DFA for any regular language.\n- Membership, emptiness, finiteness, and equivalence are decidable for regular languages.\n- Product construction is the key technique for closure under intersection and difference.\n- **Decision procedures** exist for all major questions about regular languages — a property not shared by more powerful language classes.\n- The **adversarial game formulation** of the pumping lemma clarifies the quantifier structure of non-regularity proofs.\n\n## Exercises\n\n### Basic\n\n1. Prove that L = { aⁿbⁿ | n ≥ 0 } is not regular using the pumping lemma.\n2. Prove that L = { w ∈ {a,b}* | w has an equal number of a's and b's } is not regular.\n3. Minimize the DFA from Example 1.2 (exactly two 1s) using the table-filling algorithm.\n4. Show that regular languages are closed under reversal by construction.\n5. For DFA with 3 states, how many distinct equivalence relations (potential minimized DFAs) could there be?\n\n### Intermediate\n\n6. Prove that L = { 0ⁿ | n is a perfect square } is not regular.\n7. Prove that L = { w ∈ {0,1}* | |w|₀ = |w|₁ } is not regular using both the pumping lemma and Myhill-Nerode.\n8. Given a DFA M with n states, prove that L(M) is infinite iff there exists a string w with |w| between n and 2n-1 such that w ∈ L(M).\n9. Construct product DFAs for the union and intersection of the languages from Examples 1.1 and 1.2.\n10. Show that the regular languages are closed under the operation shuffle(L₁, L₂) = { w₁v₁w₂v₂…wₙvₙ | w₁…wₙ ∈ L₁, v₁…vₙ ∈ L₂ }.\n\n### Advanced\n\n11. Prove the Myhill-Nerode theorem: L is regular iff ≡ₗ has finite index.\n12. Design an algorithm to check whether two regular expressions denote the same language. What is its complexity?\n13. Let L₁ = { aⁿbᵐ | n ≠ m } and L₂ = { aⁿb²ⁿ | n ≥ 0 }. Prove L₁ is regular (construct a DFA) and L₂ is not regular.\n14. Prove that the language L = { aⁿ | n is prime } is not regular using the pumping lemma. (Hint: use properties of prime numbers → if y = aᵏ, then xyⁱᐨ¹z has length p + (i-1)k. Choose i appropriately to get a composite number.)\n15. Implement the table-filling algorithm for a DFA with up to 100 states. Show that the algorithm runs in O(|Q|² |Σ|) time.\n16. Write a TypeScript function that implements the adversarial game formulation of the pumping lemma. Given a language L described as a TypeScript predicate, determine (as far as possible) whether L is non-regular.\n17. Prove that the language L = { ww | w ? {0,1}* } is not regular using both (a) the pumping lemma and (b) the Myhill-Nerode theorem.\n18. Show that regular languages are closed under the operation prefix(L) = { w | wx ? L for some x } by constructing a DFA that accepts prefix(L).\n19. Implement a TypeScript function that, given a DFA, decides whether the language is infinite using the cycle-and-reachability algorithm from the DecisionProcedures class.\n20. Prove that the regular languages are closed under the operation half(L) = { w | ww ? L } using the Myhill-Nerode approach.\n21. Implement a TypeScript function that, given a DFA M, constructs a DFA for the language prefix(L(M)). Prove your construction correct.\n22. Show that the language L = { an | n is a perfect square } is not regular using both the pumping lemma and Myhill-Nerode.\n\n## Practical Takeaways\n\n1. **The pumping lemma is a negative tool.** Use it to prove that a language is NOT regular, never to prove regularity. It gives a necessary condition — some non-regular languages satisfy it, making Myhill-Nerode the definitive method.\n\n2. **Closure properties simplify proofs.** Instead of directly applying the pumping lemma to a complex language, try to prove non-regularity by reduction: if L were regular, then applying a closure property (intersection with a regular language, homomorphism) would produce a known non-regular language.\n\n3. **DFA minimization guarantees optimality.** The table-filling algorithm produces the unique minimal DFA. This is the gold standard: two regular expressions are equivalent iff their minimized DFAs are isomorphic.\n\n4. **Decidability means automation.** Membership, emptiness, finiteness, and equivalence are all decidable for regular languages. This enables automated tools like regex testers, lexer generators, and pattern matchers.\n\n5. **Closure under complement is unique to regular languages.** For CFLs and above, complement closure fails spectacularly. This makes regular languages exceptionally well-behaved for verification tasks.\n\n## Further Reading\n\n- **Hopcroft, John E., Motwani, Rajeev, and Ullman, Jeffrey D.** *Introduction to Automata Theory, Languages, and Computation* (3rd ed.). Chapter 4 covers properties of regular languages including pumping lemma, closure properties, and minimization.\n- **Nerode, Anil.** \"Linear Automaton Transformations.\" Proceedings of the American Mathematical Society, 1958. The original paper introducing the Myhill-Nerode theorem.\n- **Brzozowski, Janusz A.** \"Canonical Regular Expressions and Minimal State Machines.\" 2015. A modern treatment of DFA minimization and canonical representations.\n\n"
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