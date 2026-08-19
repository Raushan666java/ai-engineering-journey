"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[36710],{

/***/ 2688
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_powered_learning_ch_11_verification_anti_hallucination_md_22f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-powered-learning-ch-11-verification-anti-hallucination-md-22f.json
const site_docs_courses_ai_powered_learning_ch_11_verification_anti_hallucination_md_22f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-powered-learning/ch11-verification-anti-hallucination","title":"Chapter 11: Verification & Anti-Hallucination","description":"Last Updated 60–75 minutes","source":"@site/docs/courses/ai-powered-learning/ch11-verification-anti-hallucination.md","sourceDirName":"courses/ai-powered-learning","slug":"/ai-powered-learning/ch11-verification-anti-hallucination","permalink":"/ai-engineering-journey/ai-powered-learning/ch11-verification-anti-hallucination","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"ch11-verification-anti-hallucination","slug":"/ai-powered-learning/ch11-verification-anti-hallucination","title":"Chapter 11: Verification & Anti-Hallucination","sidebar_label":"Chapter 11: Verification & Anti-Hallucination","sidebar_position":12},"sidebar":"course-ai-powered-learning","previous":{"title":"Chapter 10: Research & Deep Dives with AI","permalink":"/ai-engineering-journey/ai-powered-learning/ch10-research-deep-dives"},"next":{"title":"Chapter 12: Capstone — Your Complete AI Study System","permalink":"/ai-engineering-journey/ai-powered-learning/ch12-capstone-ai-study-system"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-powered-learning/ch11-verification-anti-hallucination.md


const frontMatter = {
	id: 'ch11-verification-anti-hallucination',
	slug: '/ai-powered-learning/ch11-verification-anti-hallucination',
	title: 'Chapter 11: Verification & Anti-Hallucination',
	sidebar_label: 'Chapter 11: Verification & Anti-Hallucination',
	sidebar_position: 12
};
const contentTitle = 'Chapter 11: Verification & Anti-Hallucination';

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
  "value": "Q1: Why do AI answers sound so confident even when they are wrong?",
  "id": "q1-why-do-ai-answers-sound-so-confident-even-when-they-are-wrong",
  "level": 2
}, {
  "value": "Q2: What is the hallucination guard and how do I make it a habit?",
  "id": "q2-what-is-the-hallucination-guard-and-how-do-i-make-it-a-habit",
  "level": 2
}, {
  "value": "Q3: How do I demand sources and citations for every factual claim?",
  "id": "q3-how-do-i-demand-sources-and-citations-for-every-factual-claim",
  "level": 2
}, {
  "value": "Q4: How do I verify a source once I have it?",
  "id": "q4-how-do-i-verify-a-source-once-i-have-it",
  "level": 2
}, {
  "value": "Q5: What is the cross-verification protocol?",
  "id": "q5-what-is-the-cross-verification-protocol",
  "level": 2
}, {
  "value": "Q6: How do I run cross-verification when I only have one free AI account?",
  "id": "q6-how-do-i-run-cross-verification-when-i-only-have-one-free-ai-account",
  "level": 2
}, {
  "value": "Q7: How does confidence tagging work?",
  "id": "q7-how-does-confidence-tagging-work",
  "level": 2
}, {
  "value": "Q8: How do I calibrate what I do with each confidence level?",
  "id": "q8-how-do-i-calibrate-what-i-do-with-each-confidence-level",
  "level": 2
}, {
  "value": "Q9: How do I verify AI-written code before I trust it?",
  "id": "q9-how-do-i-verify-ai-written-code-before-i-trust-it",
  "level": 2
}, {
  "value": "Q10: How do I torture-test AI code with edge cases?",
  "id": "q10-how-do-i-torture-test-ai-code-with-edge-cases",
  "level": 2
}, {
  "value": "Q11: What is the outdated-information trap?",
  "id": "q11-what-is-the-outdated-information-trap",
  "level": 2
}, {
  "value": "Q12: How do I force freshness when the model has no search?",
  "id": "q12-how-do-i-force-freshness-when-the-model-has-no-search",
  "level": 2
}, {
  "value": "Q13: How do I red-team my own notes?",
  "id": "q13-how-do-i-red-team-my-own-notes",
  "level": 2
}, {
  "value": "Q14: What is the adversarial review prompt for my whole note vault?",
  "id": "q14-what-is-the-adversarial-review-prompt-for-my-whole-note-vault",
  "level": 2
}, {
  "value": "Q15: What is the fact-check workflow for interview prep?",
  "id": "q15-what-is-the-fact-check-workflow-for-interview-prep",
  "level": 2
}, {
  "value": "Q16: How do I fact-check company-specific claims for interviews?",
  "id": "q16-how-do-i-fact-check-company-specific-claims-for-interviews",
  "level": 2
}, {
  "value": "Q17: What is the confidence tracker?",
  "id": "q17-what-is-the-confidence-tracker",
  "level": 2
}, {
  "value": "Q18: How do I build a verification log I can actually run?",
  "id": "q18-how-do-i-build-a-verification-log-i-can-actually-run",
  "level": 2
}, {
  "value": "Q19: When should I fully distrust AI?",
  "id": "q19-when-should-i-fully-distrust-ai",
  "level": 2
}, {
  "value": "Q20: What is the &quot;ask for the failure mode&quot; prompt?",
  "id": "q20-what-is-the-ask-for-the-failure-mode-prompt",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
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
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
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
    header: "header",
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
        id: "chapter-11-verification--anti-hallucination",
        children: "Chapter 11: Verification & Anti-Hallucination"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Last Updated:"
        }), " August 2026 | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Estimated Reading Time:"
        }), " 60–75 minutes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you learn fast with AI, the biggest risk is not speed — it is wrongness. A language model does not know anything; it predicts the next most plausible token, which means it can produce a confident, beautifully written, completely false explanation at any moment. This chapter installs your verification layer: guards that force every answer to declare its confidence, protocols that check claims against second sources, a log that separates checked facts from faith, and the discipline to distrust AI exactly when it deserves distrust."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end, you will never again copy an AI answer into your notes without a confidence tag, a source, or an explicit \"I DON'T KNOW\" — and every fact you repeat in an interview will survive a cross-examining senior engineer because you verified it before you memorized it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How to work this chapter"
        }), " — 15–20 minutes of overhead on top of reading:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Read"
          }), " — 60–75 minutes, split across 2–3 commute blocks."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Do"
          }), " — run every ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Try This"
          }), " as you go; the chapter's power is in the prompts you actually execute."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Prove"
          }), " — score 8/10 or better on the Chapter Quiz before moving on."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Produce"
          }), " — your verification log with at least 10 claims checked, tagged, and dated."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " none — but run this chapter's guards alongside every chapter from here on. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 12."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why models hallucinate and why confident tone is not evidence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the hallucination guard to every AI answer before it enters your notes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Demand structured citations and verify that sources actually support the claims"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run the cross-verification protocol (second model or search tool) for high-stakes claims"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read and act on LOW, MED, and HIGH confidence tags"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify AI-written code by running it, testing edge cases, and asking for the test"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Date-check claims in fast-moving fields and escape the training-cutoff trap"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Red-team your own notes and maintain a persistent verification log"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Hallucination guard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every answer must state confidence, cite a source, or say \"I don't know\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepend the guard to every prompt you send"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Source verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A citation link is not proof; the source must exist and say what the model claims"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open the link, read the paragraph, compare"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two independent answers that agree are far more likely to be true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ask a second model or a search tool for every critical claim"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confidence tagging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI tags each claim LOW, MED, or HIGH so you know how much to trust it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify LOW, spot-check MED, use and log HIGH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pasted code is only an opinion until it runs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run it, add edge cases, demand the test suite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Verification log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What you verified beats what you believed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log every placement-critical claim with a verdict"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[\"AI answer arrives\"] --> B[\"Apply confidence tag\"]\n    B --> C{\"Tag level\"}\n    C -->|\"LOW\"| D[\"Verify against a 2nd source\"]\n    C -->|\"MED\"| E[\"Spot-check with 2nd model\"]\n    C -->|\"HIGH\"| F[\"Use and log the source\"]\n    D --> G{\"Do sources agree?\"}\n    E --> G\n    F --> H[\"Notes + verification log\"]\n    G -->|\"Yes\"| H\n    G -->|\"Partial\"| I[\"Flag and research deeper\"]\n    G -->|\"No\"| J[\"Reject and re-ask\"]\n    I --> H\n    J --> K[\"Re-ask with failure-mode prompt\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant U as You\n    participant A as Model A\n    participant B as Model B\n    participant S as Search tool\n    U->>A: Ask with the hallucination guard\n    A-->>U: Answer with confidence and sources\n    U->>B: Same question, no hints\n    B-->>U: Independent answer\n    U->>S: Find the primary source\n    S-->>U: Docs, paper, or article\n    U->>U: Compare all three and log verdict\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q1-why-do-ai-answers-sound-so-confident-even-when-they-are-wrong",
      children: "Q1: Why do AI answers sound so confident even when they are wrong?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Language models are next-token predictors, not databases. They are trained to produce text that looks like the text they were trained on, and confident, assertive prose is statistically common in that training data. So the model does not first check a fact and then decide how to phrase it; it simply generates the most plausible-sounding completion. This is why a hallucination feels indistinguishable from a correct answer at first read. The practical consequence: tone is zero evidence of truth, and you must have a mechanical check that runs on every answer regardless of how authoritative it sounds. You are not checking AI because it is usually wrong; you are checking because you cannot tell when it is."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You are my hallucination detector. I will paste a claim I plan to use in my study notes.\nTask: pressure-test it.\n1. Identify every factual sub-claim inside it.\n2. Rate each sub-claim 1 to 5, where 1 is almost certainly false and 5 is almost\n   certainly true.\n3. For each rating below 4, explain what evidence would prove or disprove it.\n4. Do not soften your verdict to be polite. If any part is uncertain, write\n   \"UNCERTAIN\" in capital letters.\nClaim: {paste the claim here}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Splitting the claim into sub-claims forces the model to examine parts separately instead of giving a global verdict, and the 1-5 scale makes it commit to a number rather than a vague \"mostly correct.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Take one fact you learned from AI this week — for example \"quick sort is always faster than merge sort\" — and run it through this prompt. Count how many sub-claims the model flags."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q2-what-is-the-hallucination-guard-and-how-do-i-make-it-a-habit",
      children: "Q2: What is the hallucination guard and how do I make it a habit?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The hallucination guard is a standing instruction you attach to every prompt: the AI must state its confidence, name its source, or say \"I DON'T KNOW\" — no exceptions. It works for three reasons. First, it converts silent uncertainty into visible uncertainty, so you see the risk before you use the answer. Second, the explicit permission to say \"I don't know\" removes the pressure to guess, which is where most hallucinations come from. Third, the source requirement makes the model trace its own answer, and models are measurably more careful when they have to justify themselves. Make it a habit by saving the guard as a snippet in your phone's notes app and pasting it into every new chat. It costs five seconds and changes the quality of everything after it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt (the guard):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hallucination guard: apply these rules to every answer in this conversation.\n1. Start every answer with a confidence tag: HIGH if you are certain, MED if you\n   are fairly sure, LOW if you are guessing, extrapolating, or reasoning by analogy.\n2. For every factual claim, name the source you are relying on: general training\n   knowledge, a specific document I gave you, or a web search result.\n3. If you do not know the answer, say exactly \"I DON'T KNOW\" and stop. Never guess\n   to be helpful.\n4. If the answer depends on time, state your knowledge cutoff and today's date.\nTopic: {your topic or question}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Rules 1-4 make uncertainty mandatory output instead of hidden behavior, and rule 4 handles the fact that every model in 2026 has a finite training date."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Ask the same question about your syllabus once with the guard and once without. Compare: how many times does the guarded answer tag itself LOW or say \"I DON'T KNOW\"?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q3-how-do-i-demand-sources-and-citations-for-every-factual-claim",
      children: "Q3: How do I demand sources and citations for every factual claim?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " You cannot verify what is not labeled. Ask the model to attach inline references to every factual claim and to produce a reference list in a fixed format that includes what the source actually says and whether it supports the claim. This does two things: it makes the model slower and more careful (models produce more verifiable text when forced to cite), and it gives you a checklist for your own verification. Treat the reference list as a promise, not a proof — a hallucinating model will happily invent a citation too. The format below is designed so you can paste the references straight into your verification log in one step."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Answer this question and cite every factual claim with an inline reference like\n[1] or [2] placed right after the claim. After the answer, list the references in\nexactly this format, one per line:\n[1] Title | URL or source name | What this source actually says | Verdict:\nSUPPORTS / CONTRADICTS / SILENT\nOnly cite sources you believe are real. If you cannot name a source for a claim,\nsay so instead of inventing one.\nQuestion: {your question}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The fixed pipe-separated format makes citations machine-checkable — you can paste the list into a spreadsheet or the verification log from Q18 and tick them off one by one."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Ask for three citations on a topic from your syllabus, then open each cited page and confirm the sentence you were quoted exists and means what the model said it means."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q4-how-do-i-verify-a-source-once-i-have-it",
      children: "Q4: How do I verify a source once I have it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Four checks, in order. Existence: open the link; if it 404s, the citation is suspect or dead. Relevancy: does the page actually discuss your claim, or is it a near-miss topic? Support: find the exact sentence that backs the claim and quote it; the source must say what the model said it says, not something adjacent. Priority: prefer primary sources — official docs, papers, specifications — over secondary ones like blogs and forums, and when a primary and secondary source conflict, the primary one wins. Fake citations are common, especially with real-looking titles and dead links, so never skip existence. A source that fails any check moves the claim straight to the flagged column of your log."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Here are citations an AI gave me for a claim I need for interview prep. Audit them.\nFor each citation answer:\n1. Does the URL look real and accessible? Flag invented or broken-looking patterns.\n2. Is this a primary source (official docs, papers, specs) or secondary (blogs,\n   forums, news summaries)?\n3. Read the linked page and quote the exact sentence that supports my claim. If no\n   such sentence exists, mark the citation FAKE.\n4. Final label for each: REAL / DEAD / FAKE / MISLEADING.\nCitations: {paste citations}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The labels are decisive and mutually exclusive, so you can act instantly: REAL claims go to your notes, everything else gets verified differently or dropped."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Generate ten citations from AI, then actually open all ten links. Track how many are real, how many support the claim, and how many are invented."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q5-what-is-the-cross-verification-protocol",
      children: "Q5: What is the cross-verification protocol?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The single most powerful verification move: get a second independent opinion and compare. Ask model A with your guard; then ask model B — a different company's model — the same question with no hints about A's answer; then check with a search tool if the claim is high-stakes. When two independently trained models agree on specifics, the probability that both hallucinated identically is low. When they disagree, you have found a genuinely contested point, which is itself valuable interview material. The protocol takes five minutes and is reserved for claims you will repeat out loud: interview facts, definitions you quote, numbers, and anything going into your permanent notes. Low-stakes guesses from AI do not deserve this budget."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Transcript (realistic session):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You (ChatGPT): Hallucination guard on. Question: What is the difference between\nstateful and stateless APIs, and which one do placement interviewers expect me to\nknow first? Level: beginner.\nChatGPT: HIGH confidence. A stateful API keeps the client's context on the server\nbetween requests... [2 paragraphs, sources: general training knowledge]. MED\nconfidence on the claim that REST is always stateless, because JWT tokens\ncomplicate it.\nYou: Cross-examine your own answer. List anything a strict reviewer could challenge.\nChatGPT: I flagged three points: the \"REST is always stateless\" sentence, the\nJWT caveat, and my claim that HTTP cookies are stateful by design.\n\nYou (Claude, fresh chat): Answer in plain terms: stateful vs stateless APIs, and\nwhat an interviewer testing basics would expect. Tag confidence per paragraph.\nClaude: HIGH on the core definitions, which match the standard REST description...\n[independent wording, same substance]. Notes that statelessness is a constraint of\nthe REST architectural style, not of HTTP itself.\n\nYou (Perplexity): Search: \"stateful vs stateless API REST best practices JWT\".\nPerplexity: Summaries from AWS docs and MDN support: REST is designed stateless;\nserver-side sessions are stateful; JWT is a common stateless workaround.\n\nYou: Verdict for log — claim 1 (definitions): accepted, 3 sources agree.\nClaim 2 (REST always stateless): flagged, all three sources agree it needs the\n\"by design\" caveat. Rewriting my note.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Independent agreement is the signal. The transcript shows the three-step rhythm: first model with guard, second model blind, search tool for primary sources, then a logged verdict."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Pick one definitional fact from your current topic and run the full protocol. Write the three verdicts in your log before touching your notes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q6-how-do-i-run-cross-verification-when-i-only-have-one-free-ai-account",
      children: "Q6: How do I run cross-verification when I only have one free AI account?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " You still have two or three independent sources: your one model, a different model's free tier or web interface (all major providers have one in 2026), and a search engine that shows source snippets. If you really have one model only, use the devil's-advocate technique: ask the model to argue against its own answer first, then argue for it, then reconcile. A single model arguing with itself is weaker than two models, but it still surfaces the assumptions, and it is dramatically better than no check. For code and math, there is a fourth free verifier: the runtime itself. Run the code and let the compiler and test cases be your second source."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You are two independent experts who are known to disagree. Expert 1 defends the\nposition that {position A}. Expert 2 defends the opposite: {position B}.\nStep 1: Expert 1 argues with full evidence and names its weakest point.\nStep 2: Expert 2 attacks Expert 1's weakest point and makes its own case.\nStep 3: A neutral judge lists every point where the two actually disagree and says\nwhich side the evidence favors, or says \"undecidable without source X\".\nQuestion: {your question}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Forcing the model to commit to a position and then attack it separates the confident-sounding parts from the reasoned parts, and the judge step forces it to admit what it does not know."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Run this prompt on a claim you have already verified with two real models. Does the single-model debate reach the same verdict?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q7-how-does-confidence-tagging-work",
      children: "Q7: How does confidence tagging work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Confidence tagging makes the model attach a level to every claim: HIGH (well-established, multiple reliable sources), MED (likely true but single-sourced or inferred), or LOW (best guess, could easily be wrong). The point is not that the tags are perfectly calibrated — they are rough — but that they turn an unlabeled stream of text into an actionable checklist. LOW claims are automatically quarantined until verified, MED claims get a \"verify\" marker in your notes, and HIGH claims can go in as-is. Over a month of study, you will notice patterns: models consistently tag algorithm complexity HIGH and tag salaries, versions, and prices LOW or MED, which tells you exactly where your remaining risk lives."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Read the passage below and tag every factual claim with exactly one of:\nHIGH — well-established, multiple reliable sources agree\nMED — likely true but I am relying on one source or on reasoning\nLOW — best guess, could easily be wrong\nReturn a table with columns: claim | tag | reason for the tag | what to check if I\nwant certainty. Keep the table tight.\nPassage: {paste the passage}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Forcing per-claim tags, not one global tag, prevents the model from hedging the whole answer and makes each sentence individually actionable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Paste a page of AI-generated notes about your current topic. Count the LOW claims; verify all of them this week and watch how many were wrong."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q8-how-do-i-calibrate-what-i-do-with-each-confidence-level",
      children: "Q8: How do I calibrate what I do with each confidence level?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Calibration is the policy you run after tagging: LOW claims must be verified before they enter your permanent notes, MED claims enter with a visible \"verify\" marker, HIGH claims enter as-is with the source named. Without a policy, tags are decoration; with a policy, they are a triage system for your time. The policy also protects you from the most common failure: treating MED claims as facts because they sounded good in the moment. In interview preparation specifically, any claim that you will state out loud upgrades to HIGH only after a second source — interview confidence is built on verified claims, not plausible ones."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "I am building a study note from this raw AI answer. Apply my confidence-action\npolicy and output the cleaned note:\n- LOW claims: exclude from the note. Add a line \"CHECKED LATER: {claim}\" at the end.\n- MED claims: include but write \"verify\" in square brackets right after the claim.\n- HIGH claims: include as-is.\n- Add a final section: \"Sources to verify\" listing everything I must check myself.\nRaw answer: {paste the raw answer}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The prompt turns your policy into executable behavior, so the output is a ready-to-review note instead of a blob you have to re-triage manually."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Feed it a raw AI answer with at least ten claims. Check that every LOW claim actually landed in the \"Sources to verify\" section and none leaked into the note body."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q9-how-do-i-verify-ai-written-code-before-i-trust-it",
      children: "Q9: How do I verify AI-written code before I trust it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Never trust pasted code on the basis of a screenshot, a reading, or the model's claim that it works. Code is verified by running, and everything else is hope. The verification ladder: run it once with a happy-path input; run it with edge cases; ask the model for the test cases it used in its head; then write those as a small test file. For interview-prep code, add one more step: re-derive the algorithm's complexity yourself and confirm the function actually matches the pattern you are supposed to practice. AI code that compiles and passes its own happy path is common; AI code that handles empty arrays, negative numbers, and duplicates correctly is much rarer — which is why edge cases are the whole game."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You gave me this TypeScript function. Before I run it, prove to me it works.\n1. List every input edge case it must handle: empty input, single element, extremes,\n   duplicates, negative numbers, undefined, null, type mismatches.\n2. Predict the exact output for each case.\n3. Write a plain TypeScript test suite, no framework, that checks each prediction.\n4. Tell me which cases you are not sure about and why.\nFunction:\n{paste the code}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The prompt forces the model to specify expected outputs first, so when you run the tests you are comparing reality against a committed prediction instead of a vague \"it should work.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Take any AI-generated sorting function from your practice folder and run this prompt. Add the empty-array and all-duplicates cases even if the model did not list them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q10-how-do-i-torture-test-ai-code-with-edge-cases",
      children: "Q10: How do I torture-test AI code with edge cases?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Happy paths catch nothing; edge cases catch everything. The fastest way to break AI code is a QA-style prompt that asks for the ten most likely failure inputs before you run anything, because the model will usually list the exact cases its own implementation mishandles. When you get the list, actually run them — do not nod and close the tab. The classic killers for AI-generated code: empty collections, single-element collections, negative or zero values, duplicates, values at the numeric limits, undefined inputs, and async timing where a loop returns before a promise resolves. In 2026, most AI code fails on the combination cases: empty plus undefined, or negative plus duplicate, because each was handled in isolation but not together."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Torture-test this TypeScript function like a QA engineer with 10 years of\nexperience who has been burned before.\n1. Generate the 10 test cases most likely to break it: boundary values, empty\n   strings, negative numbers, duplicates, NaN, undefined, null, and async timing\n   if relevant.\n2. State the expected output for each case.\n3. Walk through the function mentally case by case and tell me exactly where it\n   fails, with the line and the input.\nFunction:\n{paste the code}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " By predicting outputs before running, the prompt makes you the verifier; the model's predictions become a spec, and the actual run becomes the verdict."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Apply it to a function AI wrote for you this week. Run all ten cases. Log how many predictions were wrong — that number is your personal \"do not trust without tests\" evidence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q11-what-is-the-outdated-information-trap",
      children: "Q11: What is the outdated-information trap?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Every model has a training cutoff, and in fast-moving fields — AI, frameworks, cloud pricing, versions — anything it learned before that date may be stale by years, not months. The trap is subtle because stale information is not wrong-sounding; it is confident-sounding and slightly historical. In 2026, if you are preparing for an AI engineering placement, the model's answer about the current state of a framework, model, or platform may describe a world that no longer exists. The countermeasure is a date-check ritual: whenever the answer depends on time, the model must state its cutoff and mark every time-dependent claim. Anything time-dependent and uncited gets treated as LOW confidence until a dated source confirms it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "This topic changes fast and I am preparing for a 2026 placement. Assume everything\nI believe may be outdated.\n1. State your knowledge cutoff, clearly, before answering.\n2. Answer my question, and mark every claim that is time-dependent with \"TIME\".\n3. List the 3 most important things about {topic} that changed in the last 12\n   months that I must not get wrong, with a dated source for each.\n4. Give me one search query per item that would confirm the current state.\nTopic: {topic}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The TIME marker routes claims into your verification log automatically, and the dated-source requirement forces the model to anchor each change to a real moment you can check."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Ask about the latest version of the framework you use most at work. Run the date-check prompt, then search for release notes and confirm the version number the model gave you."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q12-how-do-i-force-freshness-when-the-model-has-no-search",
      children: "Q12: How do I force freshness when the model has no search?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " When a chat model has no live search, freshness must come from you: run the dated-source prompt, then go to the search tool yourself and confirm the three claims it marked TIME. A shortcut that works well: paste a dated document — release notes, docs page, changelog — into the chat and say \"ground your answer in this document dated {date} and tell me where the document and your training knowledge disagree.\" The model is excellent at comparing a document it can see against its own memory, and the differences it lists are exactly the stale facts you need to replace. This \"ground in a document\" move turns any model into a freshness checker without needing search at all."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "I pasted a dated source below. Ground your answer in it, and nothing else.\n1. Answer my question using only the document.\n2. Then list every place where your training knowledge disagrees with the\n   document, with one line each.\n3. Mark which version is newer: the document or your memory.\nDocument: {paste the dated document}\nQuestion: {your question}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The model compares two explicit things — the visible document and its latent memory — and the disagreements it surfaces are a ready-made list of stale claims for your log."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Fetch the release notes of the tool you use at work and run this prompt. Count the disagreements; each one is a correction to apply to your notes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q13-how-do-i-red-team-my-own-notes",
      children: "Q13: How do I red-team my own notes?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Your notes are the most dangerous place for hallucinations, because you stop reading critically the second you wrote something down — \"I saved it, so it must be right.\" Red-teaming reverses that: you deliberately ask AI to attack your notes and find every error, overgeneralization, stale claim, and unsupported assertion. Do this in two passes: first a targeted pass on your newest notes (most likely to contain unverified AI output), then a monthly full-vault pass. The prompt below is the weekly version, and the result is a fix list with severities rather than vague feedback. Interview preparation makes this non-negotiable: a wrong claim you memorized and recite is worse than not knowing the topic at all, because it looks like confident incompetence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Transcript (realistic session):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You: Here are my notes on complexity analysis. Your job is adversarial review.\nFind every error, overgeneralization, stale claim, or unsupported claim. Quote the\nexact line, explain why it is wrong, and give the corrected version. Assume I am\npreparing for a technical interview and a wrong claim will embarrass me in front\nof a senior engineer. Be harsh; praise nothing.\nClaude: Found 6 issues. 1) \"O(n log n) is always faster than O(n^2)\" — wrong as\nstated: constants matter below the crossover point. Correct version... 2) \"Merge\nsort is stable, quicksort is not\" — needs the qualifier that quicksort's stability\ndepends on implementation... 3) \"Hash maps are O(1) for every operation\" — should\nsay \"amortized average\"; worst case can be O(n)... 4) Your claim that counting sort\nworks on floating point is false... 5) \"Big-O ignores constants entirely\" — imprecise\nfor interviews; say \"for asymptotic comparison\"... 6) Your example for log n lacks\nthe \"n doubles each step\" intuition, which is what interviewers probe.\nYou: Rewrite my notes applying fixes 1, 3, 4, 6 and mark 2 and 5 as MED.\nClaude: [rewritten note with fixes inline]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The harshness instruction and the \"praise nothing\" line flip the model from cheerleader to critic, and requiring exact-line quotes makes the review specific enough to act on."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Run this on your most recent week of notes right now. Keep the model's issue list and fix at least three of them before your next study session."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q14-what-is-the-adversarial-review-prompt-for-my-whole-note-vault",
      children: "Q14: What is the adversarial review prompt for my whole note vault?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The vault-level review is the monthly sweep that catches the errors a weekly review misses: contradictory claims across notes, claims without any source, and stale version numbers that looked fine when you wrote them. The monthly prompt has five checks — unsourced claims, contradictions, absolute language, stale specifics, and missing context — and the output format forces an issue list with locations and severities so you can process it like a bug backlog. The most valuable check is contradictions: when two of your notes disagree, you have discovered a gap in your understanding, and resolving it with a verification pass is worth more than any new material. Run this the first weekend of every month, and keep the issue list as a section in your tracker."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Act as my personal fact-checker. Review this note set for:\n1. Claims without any source or confidence marker\n2. Claims that contradict each other across notes\n3. Overly absolute statements: \"always\", \"never\", \"only\", \"all\"\n4. Stale specifics: version numbers, prices, company names, model names\n5. Missing context that would change the meaning of a claim\nReturn a table: issue | note location | severity (high/med/low) | suggested fix.\nSkip praise entirely.\nNotes: {paste your notes}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The five fixed checks convert a vague \"review my notes\" into a checklist the model can complete mechanically, and the severity column tells you what to fix first."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Run the monthly audit on your current vault now. Resolve every high-severity item this week, then schedule the audit as a recurring reminder."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q15-what-is-the-fact-check-workflow-for-interview-prep",
      children: "Q15: What is the fact-check workflow for interview prep?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Interview prep creates a special class of claims you will state out loud under pressure: definitions, complexity bounds, technology facts, and company details. These get the full protocol: the hallucination guard on every question, the citation format, and a cross-verification pass for anything you plan to recite verbatim. The workflow is mechanical — claim, source, check, verdict — and it ends in your log, so that by interview day everything in your answer bank is already verified. Never skip the \"PARTIALLY TRUE\" verdict: interviewers probe the boundary of a claim (\"is it always true?\"), and knowing a claim is only partially true is exactly the nuance that separates a memorized answer from a mastered one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "I have a list of claims I plan to repeat in a placement interview. Fact-check each\none independently.\nFor each claim output exactly:\nCLAIM: {the claim}\nVERDICT: TRUE / PARTIALLY TRUE / FALSE / OUTDATED\nEVIDENCE: one reliable source, named and dated\nBOUNDARY: in one sentence, the conditions under which the claim stops being true\nClaims (one per line):\n{paste claims}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The BOUNDARY line is the interview-proofing step: it forces the model to state where the claim breaks, which is precisely what a follow-up question tests."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Take ten claims from your current topic's notes and run the workflow. Count how many come back PARTIALLY TRUE or OUTDATED, and add the boundary line to each of those notes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q16-how-do-i-fact-check-company-specific-claims-for-interviews",
      children: "Q16: How do I fact-check company-specific claims for interviews?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Company claims — tech stack, interview process, salary ranges, recent products — are the most hallucination-prone category because they are time-sensitive, company-specific, and rarely in the model's training data in a usable form. The rules: every claim about a company must have a dated source; anything the model cannot source is discarded; salary and process claims are verified against multiple independent sources (employee posts, offer data, the company's own careers page); and the \"about\" page of the company wins over any third-party claim. For 2026 placements, note that company details change quarterly — an interview process from last year may be completely different — so date-check everything and prefer the freshest source you can find."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "I am targeting {company} for a {role} role. Fact-check these claims about it and\nmark each VERIFIED / UNVERIFIED / FALSE / OUTDATED. For every claim, provide a\ndated source. Where sources conflict, say which one wins and why.\nInclude checks on: tech stack, interview process, salary ranges, recent products or\nlayoffs, and hiring status.\nClaims: {paste claims}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The VERIFIED/UNVERIFIED/FALSE/OUTDATED scale is stricter than true/false because it captures the two failure modes that matter for companies: made up, and true last year."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " List five claims you currently believe about your target company and run this prompt. Delete or re-verify anything marked UNVERIFIED or OUTDATED."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q17-what-is-the-confidence-tracker",
      children: "Q17: What is the confidence tracker?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The confidence tracker is a running list of every claim you took from AI, with four columns: the claim, the source, the confidence tag the model gave it, and whether you checked it. Its real job is making your unknown unknowns visible: at any moment you can see exactly how many facts you are carrying on faith. A healthy tracker shows most claims checked within a week and the checked column growing. An unhealthy one shows a pile of unchecked claims — which means your notes are a museum of unverified AI output. Review it every Friday, clear the backlog, and feed the weekly numbers into your progress dashboard. In the tracker, \"checked\" means you actually verified it, not that you read it twice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Turn this week's AI-sourced claims into a verification log table.\nColumns: claim | source | confidence (LOW/MED/HIGH) | checked (YES/NO) | verdict\n(accepted/flagged/rejected/unchecked).\nAny claim with no source gets source \"none\" and confidence LOW.\nKeep the table compact, no commentary.\nClaims: {paste your claims}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The prompt produces the exact schema of your tracker (Q18's CLI uses the same columns), so pasting AI output into your log is one copy-paste."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Generate this week's log right now and count the unchecked rows. Commit to checking them all before your Friday review."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q18-how-do-i-build-a-verification-log-i-can-actually-run",
      children: "Q18: How do I build a verification log I can actually run?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A text table works, but a tiny command-line log makes checking painless and gives you weekly stats for free. The TypeScript tool below stores claims, lets you mark verdicts, and prints a report with a summary line — claims checked versus unchecked, accepted versus flagged versus rejected. Run it from your tracker folder every Friday: add new claims during the week, check them as you verify, and let the summary line tell you how much of your knowledge is verified. The verdicts are exactly four: accepted (verified and true), flagged (partially true or needs a caveat), rejected (false), and unchecked (the default — and the dangerous one). A scoreboard that visibly counts unchecked claims is the cheapest accountability device in this chapter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Confidence = \"LOW\" | \"MED\" | \"HIGH\";\ntype Verdict = \"accepted\" | \"flagged\" | \"rejected\";\n\ninterface Claim {\n  id: number;\n  claim: string;\n  source: string;\n  confidence: Confidence;\n  checked: boolean;\n  verdict: Verdict | \"unchecked\";\n  notes: string;\n}\n\nclass VerificationLog {\n  private claims: Claim[] = [];\n  private nextId = 1;\n\n  add(claim: string, source: string, confidence: Confidence): number {\n    const id = this.nextId++;\n    this.claims.push({\n      id, claim, source, confidence,\n      checked: false, verdict: \"unchecked\", notes: \"\"\n    });\n    return id;\n  }\n\n  check(id: number, verdict: Verdict, notes: string): void {\n    const found = this.claims.find((c) => c.id === id);\n    if (!found) throw new Error(\"No claim with id \" + id);\n    found.checked = true;\n    found.verdict = verdict;\n    found.notes = notes;\n  }\n\n  summary(): string {\n    const total = this.claims.length;\n    const checked = this.claims.filter((c) => c.checked).length;\n    const accepted = this.claims.filter((c) => c.verdict === \"accepted\").length;\n    const flagged = this.claims.filter((c) => c.verdict === \"flagged\").length;\n    const rejected = this.claims.filter((c) => c.verdict === \"rejected\").length;\n    return `Claims: ${total} | Checked: ${checked} | Accepted: ${accepted} | ` +\n      `Flagged: ${flagged} | Rejected: ${rejected}`;\n  }\n\n  report(): string {\n    const rows = this.claims.map((c) =>\n      `${c.id}\\t${c.confidence}\\t${c.checked ? c.verdict : \"UNCHECKED\"}\\t` +\n      `${c.claim.slice(0, 55)}\\t${c.source}`\n    );\n    return [\"ID\\tCONF\\tVERDICT\\tCLAIM\\tSOURCE\", ...rows, \"\", this.summary()].join(\"\\n\");\n  }\n}\n\nconst log = new VerificationLog();\nconst c1 = log.add(\"Binary search is O(log n)\", \"CLRS + two sources\", \"HIGH\");\nconst c2 = log.add(\"REST APIs are always stateless\", \"ChatGPT answer\", \"MED\");\nconst c3 = log.add(\"Next.js 15 shipped in October 2024\", \"release notes search\", \"MED\");\nconst c4 = log.add(\"Median SDE-1 salary at TCS is 40 LPA\", \"ChatGPT answer\", \"LOW\");\nlog.check(c1, \"accepted\", \"Verified in CLRS; two independent models agree\");\nlog.check(c2, \"flagged\", \"JWT and server-side sessions complicate this\");\nlog.check(c4, \"rejected\", \"Contradicted by every dated source found\");\nconsole.log(log.report());\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The CLI maps the guard workflow to code: add claims as they arrive, check them as you verify, and let the summary line expose how many claims are still on faith. It runs in any TS runtime (or as plain JS by removing the types)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Port your last week of AI-sourced claims into this log, mark the ones you have genuinely verified, and see your first summary line. Aim for zero UNCHECKED within a week."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q19-when-should-i-fully-distrust-ai",
      children: "Q19: When should I fully distrust AI?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Full distrust applies to five categories, regardless of confidence tags: exact math (arithmetic, modular arithmetic, bit manipulation — models famously fail at multi-step calculations), API specifics (exact parameter names, signatures, version behavior), versions and prices (anything with a date attached), people (who said what, who works where, quotes attributed to names), and anything safety-critical (medical, legal, financial, security). For these, the model is not a source; it is a drafting assistant. Get your final answer from documentation, a runtime, or a primary source, and use AI only to suggest where to look. The rule of thumb: if a wrong answer would be embarrassing or expensive, it is in the distrust category. Everything in these five categories goes straight into your verification log as unchecked until a human-grade source confirms it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "For the question below, apply the strict rule: assume every number, API name,\nprice, version, person's name, and legal or security claim from your training is\nWRONG until proven otherwise. Answer only with claims you can source right now.\nFor anything else, write \"REFUSE\" and say what document or command would settle it.\nQuestion: {your question}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " \"REFUSE\" turns the model's inclination to guess into a boundary marker, so you leave the session knowing exactly which facts you still need from documentation or a runtime."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Ask it three questions from the distrust list — a price, an API signature, a historical quote — and verify each answer against the real source. Log how many times REFUSE was the right call."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q20-what-is-the-ask-for-the-failure-mode-prompt",
      children: "Q20: What is the \"ask for the failure mode\" prompt?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The failure-mode prompt is the final question of every important verification session: after the answer, demand that the model explain when it would be wrong. Ask for the circumstances that would invalidate it, the evidence that would change its mind, and the assumptions it silently made. This is the strongest single prompt in this chapter because it makes the model confess its own limits instead of you hunting for them. In practice, the answers are surprisingly specific: \"this is wrong if your interviewer uses the older definition\", \"this assumes single-threaded execution\", \"this only holds for balanced trees\". Every confession is a free interview question you now know the answer to, and a boundary line you can add to your notes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Answer my question, then explain the failure modes of your answer:\n1. Under what circumstances would this answer be wrong?\n2. What assumption did you make that I did not state?\n3. What evidence would change your mind?\n4. What should I verify myself before I rely on this?\nQuestion: {your question}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The four questions force the model to attach boundary conditions to its own output, turning each answer into a claim plus a list of exactly where it breaks — the raw material of mastered notes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Append this prompt to the next three questions you ask AI this week. Add each confessed failure mode to the relevant note; those boundaries are interview gold."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI confidence is a tone, not evidence; hallucination guard must be a standing rule on every prompt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The guard: state confidence, name the source, or say \"I DON'T KNOW\" — no guessing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Citations are promises, not proofs: check existence, relevancy, support, and primariness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-verification with a second model or a search tool is the strongest fact check you have"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confidence tags are triage: verify LOW, mark MED, log HIGH — never let MED masquerade as fact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI code is verified by running, not reading: edge cases and demanded test suites catch what happy paths miss"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Training cutoffs make fast-moving fields permanently suspect: date-check everything time-dependent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Red-team your own notes monthly — your written notes are the most dangerous place for hallucinations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Five distrust categories: math, API specifics, versions/prices, people, safety-critical facts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The failure-mode prompt makes the model confess its own limits, giving you free interview boundaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The verification log converts \"I think I knew that\" into \"I checked that\" — the only currency that matters"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prompt / Command"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hallucination guard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Hallucination guard: confidence tag, name source, or say I DON'T KNOW\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start of every study chat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Citation demand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Cite every claim inline, then list Title / URL / what it says / SUPPORTS\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any answer going into permanent notes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Source audit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Quote the exact sentence supporting the claim, or mark FAKE\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After receiving citations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same question in a second model, no hints, then compare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interview facts, definitions, numbers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confidence tagging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Tag each claim HIGH / MED / LOW with reason and what to check\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All AI-generated notes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"List edge cases, predict output, write a test suite\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before trusting any AI code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Date check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"State your cutoff, mark TIME claims, list what changed in 12 months\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frameworks, models, prices, versions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Note red-team"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Adversarial review: quote the exact line, severity, corrected version\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly on new notes, monthly on vault"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure-mode probe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"When would this answer be wrong? What assumptions did you make?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End of every high-stakes session"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Verification log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript CLI from Q18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every Friday, plus after each company prep block"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why can a language model produce a confident-sounding but false answer?\nA) It queries an incomplete database\nB) It predicts the next most plausible token and has no separate truth check\nC) It only fails on math questions\nD) It hides errors deliberately"
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "B. Models generate the most plausible continuation of text; there is no independent lookup of facts, so tone is not evidence."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the core instruction of the hallucination guard?\nA) Always use a search tool\nB) State confidence, name the source, or say \"I DON'T KNOW\"\nC) Never answer theory questions\nD) Provide three examples per answer"
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "B. The guard converts silent uncertainty into visible uncertainty on every answer."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A citation an AI gave you 404s when you open it. What is the correct move?\nA) Keep the claim, the link is optional\nB) Mark the citation DEAD/FAKE and treat the claim as unverified\nC) Copy the claim anyway, it probably exists elsewhere\nD) Ask the model again until it gives a working link"
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "B. Existence is the first check; a dead or invented link means the claim has no source until proven otherwise."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which signal is the strongest evidence that a claim is true?\nA) The model tagged it HIGH\nB) Two independently trained models agree on the specifics\nC) The answer is written in a confident tone\nD) The answer is long and detailed"
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "B. Independent agreement is far stronger than a single model's tag or tone, which is why cross-verification exists."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "According to the confidence-action policy, what happens to a MED claim?\nA) It is deleted immediately\nB) It enters notes with a visible \"verify\" marker\nC) It is treated as fact\nD) It gets tagged LOW"
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "B. MED claims may enter notes but must stay visibly marked until verified; they must never masquerade as HIGH."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the first step in verifying AI-written code?\nA) Read it twice\nB) Run it with a happy-path input, then edge cases\nC) Ask the model if it works\nD) Compare it to a known solution"
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "B. Code is verified by running; reading and asking are not verification."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why is the outdated-information trap dangerous in 2026?\nA) Models refuse to give dates\nB) Fast-moving fields make stale training knowledge look current and confident\nC) Search engines are disabled\nD) Models only hallucinate on old topics"
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "B. In AI, frameworks, and pricing, model training knowledge may describe a world that no longer exists, phrased with full confidence."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of these belongs in the \"fully distrust AI\" category?\nA) An explanation of binary search complexity\nB) Exact API parameter names and version behavior\nC) A general definition of REST\nD) A list of sorting algorithms"
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "B. API specifics, exact math, versions, prices, and people are the distrust categories; the runtime and docs must be the source."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the purpose of the failure-mode prompt?\nA) To make answers shorter\nB) To make the model explain when its own answer would be wrong\nC) To force citations in every answer\nD) To disable hallucinations permanently"
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "B. It surfaces boundary conditions, assumptions, and what would change the answer — free interview material and note boundaries."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What does a healthy verification log show after a week?\nA) Many HIGH tags\nB) Fewer than half the claims checked\nC) Most claims checked, with clear verdicts and few unchecked rows\nD) No claims at all"
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "C. The log's purpose is to make unchecked (faith-based) claims visible and shrink them toward zero."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run the hallucination guard (Q2) on five questions from your current syllabus. Note how many answers carry a LOW tag or an \"I DON'T KNOW\", and compare with five unguarded questions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pick ten claims from your most recent AI-generated notes. Verify each with the citation-demand prompt (Q3) and the source-audit prompt (Q4). Log every verdict."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose one definitional fact central to your placement prep and run the full cross-verification protocol (Q5): two models plus a search tool, then a logged verdict."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Take one AI-written function from your practice folder, run the edge-case torture prompt (Q10), execute all ten predicted cases, and fix every failure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build the TypeScript verification log (Q18), enter the last two weeks of AI-sourced claims, and clear the unchecked backlog before Friday."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Red-team your newest week of notes with the adversarial review prompt (Q13). Apply at least three fixes and add the confessed boundary conditions to the notes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)",
          children: "Wikipedia: Hallucination (artificial intelligence)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.ibm.com/topics/ai-hallucinations",
          children: "IBM: What are AI hallucinations?"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://cookbook.openai.com/examples/why_did_my_ai_answer_wrong",
          children: "OpenAI Cookbook: Why did my AI answer wrong?"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developers.google.com/search/docs/fundamentals/verify-ai-generated-content",
          children: "Google Developers: Verify AI-generated content and sources"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://notebooklm.google.com",
          children: "NotebookLM: Grounding answers in your own sources"
        })
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