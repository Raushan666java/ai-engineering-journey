"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[21957],{

/***/ 9754
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_powered_learning_ch_07_speed_reading_summarization_md_6e3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-powered-learning-ch-07-speed-reading-summarization-md-6e3.json
const site_docs_courses_ai_powered_learning_ch_07_speed_reading_summarization_md_6e3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-powered-learning/ch07-speed-reading-summarization","title":"Chapter 7: Speed Reading & Summarization","description":"Last Updated 60–75 minutes","source":"@site/docs/courses/ai-powered-learning/ch07-speed-reading-summarization.md","sourceDirName":"courses/ai-powered-learning","slug":"/ai-powered-learning/ch07-speed-reading-summarization","permalink":"/ai-engineering-journey/ai-powered-learning/ch07-speed-reading-summarization","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"ch07-speed-reading-summarization","slug":"/ai-powered-learning/ch07-speed-reading-summarization","title":"Chapter 7: Speed Reading & Summarization","sidebar_label":"Chapter 7: Speed Reading & Summarization","sidebar_position":7},"sidebar":"course-ai-powered-learning","previous":{"title":"Chapter 6: Code & DSA with AI","permalink":"/ai-engineering-journey/ai-powered-learning/ch06-code-dsa-with-ai"},"next":{"title":"Chapter 8: Interview & Aptitude with AI","permalink":"/ai-engineering-journey/ai-powered-learning/ch08-interview-aptitude-with-ai"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-powered-learning/ch07-speed-reading-summarization.md


const frontMatter = {
	id: 'ch07-speed-reading-summarization',
	slug: '/ai-powered-learning/ch07-speed-reading-summarization',
	title: 'Chapter 7: Speed Reading & Summarization',
	sidebar_label: 'Chapter 7: Speed Reading & Summarization',
	sidebar_position: 7
};
const contentTitle = 'Chapter 7: Speed Reading & Summarization';

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
  "value": "The Summary-to-Recall Pipeline",
  "id": "the-summary-to-recall-pipeline",
  "level": 2
}, {
  "value": "Q1: What is the summary-to-recall pipeline and why does it beat re-reading?",
  "id": "q1-what-is-the-summary-to-recall-pipeline-and-why-does-it-beat-re-reading",
  "level": 2
}, {
  "value": "Q2: How do I run the pipeline as a 3-prompt loop (stage by stage)?",
  "id": "q2-how-do-i-run-the-pipeline-as-a-3-prompt-loop-stage-by-stage",
  "level": 2
}, {
  "value": "Q3: How do I convert a chapter into flashcards in one shot?",
  "id": "q3-how-do-i-convert-a-chapter-into-flashcards-in-one-shot",
  "level": 2
}, {
  "value": "Q4: How do I audit a generated deck so it stays recall-worthy?",
  "id": "q4-how-do-i-audit-a-generated-deck-so-it-stays-recall-worthy",
  "level": 2
}, {
  "value": "Q5: How do I turn a YouTube lecture into structured notes (transcript in, notes out)?",
  "id": "q5-how-do-i-turn-a-youtube-lecture-into-structured-notes-transcript-in-notes-out",
  "level": 2
}, {
  "value": "Q6: How do I handle podcasts and noisy transcripts?",
  "id": "q6-how-do-i-handle-podcasts-and-noisy-transcripts",
  "level": 2
}, {
  "value": "Q7: What is the notes compressor (long messy notes to one-page sheet)?",
  "id": "q7-what-is-the-notes-compressor-long-messy-notes-to-one-page-sheet",
  "level": 2
}, {
  "value": "Q8: How do I keep exam-critical detail (formulas, signatures, edge cases) when compressing?",
  "id": "q8-how-do-i-keep-exam-critical-detail-formulas-signatures-edge-cases-when-compressing",
  "level": 2
}, {
  "value": "Q9: How does SQ3R work with AI?",
  "id": "q9-how-does-sq3r-work-with-ai",
  "level": 2
}, {
  "value": "Q10: What are the active reading prompts (predict, extract, quiz)?",
  "id": "q10-what-are-the-active-reading-prompts-predict-extract-quiz",
  "level": 2
}, {
  "value": "Q11: How do I understand dense PDFs and textbooks with AI (progressive chunking)?",
  "id": "q11-how-do-i-understand-dense-pdfs-and-textbooks-with-ai-progressive-chunking",
  "level": 2
}, {
  "value": "Q12: What do I do when the AI summary itself confuses me?",
  "id": "q12-what-do-i-do-when-the-ai-summary-itself-confuses-me",
  "level": 2
}, {
  "value": "Q13: What is the skim + deep-dive combo (AI finds the 20% that matters)?",
  "id": "q13-what-is-the-skim--deep-dive-combo-ai-finds-the-20-that-matters",
  "level": 2
}, {
  "value": "Q14: How do I convert summaries into recall material instead of note-hoarding?",
  "id": "q14-how-do-i-convert-summaries-into-recall-material-instead-of-note-hoarding",
  "level": 2
}, {
  "value": "Q15: How do I calibrate speed vs comprehension (self-test after each chapter)?",
  "id": "q15-how-do-i-calibrate-speed-vs-comprehension-self-test-after-each-chapter",
  "level": 2
}, {
  "value": "Q16: How do I handle 50-page documentation quickly (docs to runnable tutorial)?",
  "id": "q16-how-do-i-handle-50-page-documentation-quickly-docs-to-runnable-tutorial",
  "level": 2
}, {
  "value": "Q17: How do I use NotebookLM or a source-based tool for multi-source learning?",
  "id": "q17-how-do-i-use-notebooklm-or-a-source-based-tool-for-multi-source-learning",
  "level": 2
}, {
  "value": "Q18: How do I use the Feynman technique with AI (explain, catch gaps, simplify)?",
  "id": "q18-how-do-i-use-the-feynman-technique-with-ai-explain-catch-gaps-simplify",
  "level": 2
}, {
  "value": "Q19: How do I build a spaced repetition schedule with AI?",
  "id": "q19-how-do-i-build-a-spaced-repetition-schedule-with-ai",
  "level": 2
}, {
  "value": "Q20: How do I detect weak spots from quiz misses (the miss-mining loop)?",
  "id": "q20-how-do-i-detect-weak-spots-from-quiz-misses-the-miss-mining-loop",
  "level": 2
}, {
  "value": "Q21: How do I build a chapter-to-questions generator I can run offline (TypeScript)?",
  "id": "q21-how-do-i-build-a-chapter-to-questions-generator-i-can-run-offline-typescript",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Contradictions",
  "id": "contradictions",
  "level": 2
}, {
  "value": "Open Questions",
  "id": "open-questions",
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
        id: "chapter-7-speed-reading--summarization",
        children: "Chapter 7: Speed Reading & Summarization"
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
      children: "Reading is the slowest part of studying, and re-reading is the most wasteful part of the week. This chapter wires AI into the entire reading workflow — summarizing, note-taking, flashcard generation, and recall — so every hour you read produces revision material you can use for weeks. The pipeline at the center of it all (read once, summarize with AI, quiz with AI, recall on a schedule) is the fastest honest path through a 24-module syllabus that still leaves you interview-ready."
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
          }), " — one real chapter pushed through the full summary-to-recall pipeline: summary, flashcards, quiz, and recall schedule."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " Chapter 2 (Chapter 5 for the card formats). ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 8."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run the summary-to-recall pipeline (read, summarize, quiz, schedule) on every chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert any chapter text into import-ready Anki flashcards with one prompt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Turn YouTube lectures and podcasts into structured notes without ever rewatching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compress messy notes into one-page sheets without losing formulas or API details"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply SQ3R with AI powering the Question and Review stages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use active reading prompts (predict, extract, quiz) around every study session"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle dense PDFs, textbooks, and 50-page documentation with progressive chunking and tutorial conversion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calibrate reading speed against comprehension and mine quiz misses to fix weak spots"
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
            children: "Summary-to-recall pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reading is input; recall is output. A summary that is never quizzed is lost within 24 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run the 3-prompt loop (summary, quiz, review schedule) on every chapter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter to flashcards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An LLM converts prose into Q/A cards in one pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One paste plus one prompt equals an Anki deck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lecture to notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transcripts are 10x longer than the ideas inside them"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract outline, key terms, questions, and code; never watch twice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Notes compressor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long notes hide the five facts that matter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Force a one-page sheet with a hard line limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQ3R with AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI asks the questions and runs the review; you do the reading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Survey with AI, recite without notes, review via AI quiz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dense material"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context limits truncate big PDFs in the middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Progressive chunking with concept-first instructions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-summary-to-recall-pipeline",
      children: "The Summary-to-Recall Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[\"Read the chapter once\"] --> B[\"Stage 1: AI summary prompt\"]\n    B --> C[\"Stage 2: AI quiz prompt (questions without answers)\"]\n    C --> D[\"Recall 24-72 hours later, from memory\"]\n    D --> E{\"Miss rate below threshold?\"}\n    E -->|Yes| F[\"Schedule next review in 3-7 days\"]\n    E -->|No| G[\"Re-study only the missed items\"]\n    G --> D\n    F --> H[\"Spaced review: flashcards and one-pagers\"]\n    H --> I[\"Interview-ready recall\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q1-what-is-the-summary-to-recall-pipeline-and-why-does-it-beat-re-reading",
      children: "Q1: What is the summary-to-recall pipeline and why does it beat re-reading?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The pipeline has four stages: read once, compress with AI, test with AI, and review on a schedule. Reading is only the input stage, because information decays fast unless it is converted into testable form. The summary stage forces the chapter down to its core ideas; the quiz stage converts those ideas into questions you must answer from memory; the recall schedule re-exposes you at expanding intervals. Re-reading feels productive but only produces recognition, which is not recall. Effortful retrieval — forcing the answer out of memory — is what actually writes knowledge into long-term memory. For a placement student on a deadline, this pipeline means every hour of reading generates material you can revise in 5-minute commute slots for the rest of the week."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "I am preparing for software engineering placement exams. I will paste the notes for a chapter. Do these 4 things in order:\n\n1. SUMMARY: Compress the chapter into 8-12 bullet points. Keep every formula, API name, and interview-critical term intact.\n2. QUIZ: Write 10 questions (4 recall, 4 explanation, 2 scenario). Do NOT include answers yet.\n3. REVIEW PLAN: Classify each bullet as \"recall daily\", \"recall weekly\", or \"recall before interview\".\n4. GAP CHECK: List any topic an interviewer would likely ask that the notes do not cover.\n\nChapter notes:\n{PASTE_CHAPTER_NOTES_HERE}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " One prompt produces the three artifacts (summary, quiz, review plan) so you never need to touch the raw chapter again, and the gap check tells you exactly what to ask the AI to explain next."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Take the chapter you studied yesterday, run the prompt, and answer the 10 quiz questions from memory 24 hours later. The miss count is your true retention rate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q2-how-do-i-run-the-pipeline-as-a-3-prompt-loop-stage-by-stage",
      children: "Q2: How do I run the pipeline as a 3-prompt loop (stage by stage)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Run the pipeline as three separate prompts so each output can be saved to its own file: the summary prompt, the quiz prompt (which consumes only the summary, never the original), and the recall-check prompt you run 24-72 hours later. Separating stages matters because the summary becomes your only study artifact, and the quiz-on-summary design means you are tested on what you actually retained, not on what the original chapter said. The final stage is where the learning happens: you answer from memory, and the AI grades each answer and classifies every miss."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Here is my chapter summary. I will now answer the quiz questions from memory, without looking at anything.\n\nQUIZ ANSWERS (label each Q1-Q10):\n{PASTE_YOUR_ANSWERS_HERE}\n\nSUMMARY:\n{PASTE_CHAPTER_SUMMARY_HERE}\n\nFor each question: mark my answer correct / partially correct / incorrect. Then:\n1. List the questions I got wrong, with the correct answer.\n2. Classify each miss: \"never learned\", \"fuzzy recall\", or \"confused with another concept\".\n3. Give me a 5-minute re-study list for the misses.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The AI compares your from-memory answers against the summary and classifies each miss, so you re-study only what leaked out of memory instead of re-reading everything."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " For your current module, run stage 1 today, stage 2 tomorrow, and stage 3 on day 3. Write the miss classification into your tracker."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q3-how-do-i-convert-a-chapter-into-flashcards-in-one-shot",
      children: "Q3: How do I convert a chapter into flashcards in one shot?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Paste the raw chapter text and ask for Anki-ready cards in a strict pipe-separated format, which Anki imports directly. Give the AI card-quality rules: one fact per card, no multi-part backs, and a mix that forces application rather than recognition. For a placement course, tag cards by module and difficulty so you can review weak cards first. Thirty well-designed cards that you actually review beat 300 lazy ones you never open."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Convert the chapter below into Anki flashcards. Rules:\n- Format exactly one card per line: FRONT | BACK | TAG\n- 30 cards: 40% recall (term -> definition), 30% concept (question -> explanation),\n  20% scenario (situation -> decision), 10% code/API (signature -> behavior)\n- One fact per card. No multi-part backs.\n- Tags: {MODULE_NAME}-easy, {MODULE_NAME}-hard, {MODULE_NAME}-formula\n- Bold the keyword on the back.\n\nChapter text:\n{PASTE_CHAPTER_TEXT_HERE}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Anki imports pipe-separated lines as cards, so the output is directly importable (File > Import, field separator \"|\"), and the card mix forces recall and application instead of recognition."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Convert the chapter from your weakest module today, import the deck, and do one 5-minute review session on the commute. Repeat the session every day for a week."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q4-how-do-i-audit-a-generated-deck-so-it-stays-recall-worthy",
      children: "Q4: How do I audit a generated deck so it stays recall-worthy?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " One-paste decks bloat fast, and most LLM cards are \"what is X\" recognition cards that feel easy because the front half-answers itself. Run a second prompt that flags cards with multiple facts, cards where the answer leaks into the question, near-duplicates, and cards an interviewer would never ask. Then enforce Anki limits: 15 new cards per day, and bury hard cards until the easy ones stick. A 1,200-card deck is a liability; a 200-card deck you actually review wins every time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Audit this Anki deck. Flag cards that:\n1. Are duplicates or near-duplicates\n2. Have more than one fact on the back\n3. Give away the answer in the front (recognition instead of recall)\n4. Are too long to answer in 5 seconds\n5. Would never be asked in a software engineering interview\n\nFor each flagged card, give the corrected version. Keep the same pipe-separated format.\n\nDECK:\n{PASTE_DECK_TEXT_HERE}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The audit catches the three deck killers (duplicates, multi-fact cards, answer leakage) and returns corrected cards in importable format."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Audit your last generated deck, count the flags, and fix or delete everything flagged. Record the before/after card count in your tracker."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q5-how-do-i-turn-a-youtube-lecture-into-structured-notes-transcript-in-notes-out",
      children: "Q5: How do I turn a YouTube lecture into structured notes (transcript in, notes out)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Pull the transcript (YouTube: \"Show transcript\" under the description; podcasts usually publish transcripts or offer audio transcription in AI apps), paste it as one message, and ask for a fixed output structure: outline, key terms, code examples, quiz questions, and interview angles. You never watch the video twice. The notes file becomes your primary artifact, and the raw lecture becomes dead weight. The follow-up interaction matters as much as the extraction: converting the extracted quiz into a mock-interview exchange builds recall on top of the notes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "User: Here is the transcript of a 40-minute lecture on SQL window functions. Extract:\n(1) an outline with time anchors, (2) 10 key terms with one-line definitions,\n(3) the exact code examples, (4) 6 quiz questions, (5) interview angles.\n\n[Transcript pasted, ~9,000 words]\n\nAssistant: OUTLINE\n- 0:00-6:00  ROW_NUMBER basics with ORDER BY\n- 6:00-14:00 RANK vs DENSE_RANK behavior with ties\n- 14:00-22:00 PARTITION BY and window grouping\n- 22:00-31:00 ROWS BETWEEN framing\n- 31:00-40:00 running totals and top-N per group\n\nKEY TERMS: OVER clause, PARTITION BY, ORDER BY inside OVER,\nROWS BETWEEN, framing, unbounded preceding, rank ties.\n\nCODE EXAMPLES:\nSELECT name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS rn\nFROM employees;\n\nQUIZ:\n1. What does PARTITION BY do inside a window function?\n2. When do RANK and DENSE_RANK return the same result?\n3. What does ROWS BETWEEN 2 PRECEDING AND CURRENT ROW do?\n...\n\nINTERVIEW ANGLES: \"Cumulative totals\" and \"top-N per group\" are the two\npatterns interviewers test. Be ready to write RANK() OVER\n(PARTITION BY dept ORDER BY salary DESC) from memory.\n\nUser: Turn quiz Q3 and Q4 into a mock-interview exchange. You ask, I answer.\n\nAssistant: Q3. What is the difference between ROWS BETWEEN 2 PRECEDING AND CURRENT ROW\nand RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW?\n\nUser: ROWS looks at exactly the 2 previous rows; RANGE includes all rows whose\nvalue is tied with the boundary row, so duplicates count.\n\nAssistant: Correct. Second part: with duplicate salaries in the table, which one\nis deterministic, and which can surprise you in production?\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The structured extraction prompt turns the transcript into study artifacts, and the follow-up mock-interview exchange converts knowledge into interview answers with a realistic back-and-forth."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Convert one recorded lecture from your current module this week, import the quiz into your tracker, and answer it from memory after 48 hours."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q6-how-do-i-handle-podcasts-and-noisy-transcripts",
      children: "Q6: How do I handle podcasts and noisy transcripts?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " If a podcast has no transcript, use your AI app's audio transcription feature or a transcription service, then run a cleanup pass. Noisy auto-transcripts are full of filler, stutters, and split sentences, so tell the AI to repair while extracting in a single pass. Keep the extraction prompt identical to your lecture prompt so all your notes have the same shape, which makes revision faster. For a commuter this is the killer workflow: audio in the earphones on the way to work, notes file complete before you reach the office."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "This is a noisy auto-transcript of a {DURATION}-minute podcast on {TOPIC}. Fix it while extracting:\n1. Remove filler, stutters, and repeated words\n2. Merge fragmented sentences\n3. Extract the 5 core ideas with supporting examples\n4. Flag anything the speaker contradicts later in the episode\n5. End with \"3 questions a placement interviewer would ask about this topic\"\n\nTRANSCRIPT:\n{PASTE_TRANSCRIPT_HERE}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The cleanup and extraction happen in one pass, so even a garbled transcript produces clean notes without an extra repair step."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Transcribe a 15-minute podcast on a topic you find boring, run this prompt, and check whether the extracted 5 ideas make the topic more interesting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q7-what-is-the-notes-compressor-long-messy-notes-to-one-page-sheet",
      children: "Q7: What is the notes compressor (long messy notes to one-page sheet)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The notes compressor takes raw notes and forces them into a fixed one-page structure: core concept, mechanism, key example, formulas/API, edge cases, and the one most likely interview question. The hard limit is the trick: \"keep it under 60 lines\" forces the AI to merge and delete, which is exactly the prioritization you should be doing. A one-pager you can re-read in three minutes on the commute beats a 30-page notebook you never open."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Compress my notes below into a one-page structured sheet with EXACTLY these sections:\n1. CORE CONCEPT: 1-2 sentences\n2. MECHANISM: 5-8 steps or a mini-flow\n3. KEY EXAMPLE: one worked example\n4. FORMULAS / API: everything that must be memorized verbatim\n5. EDGE CASES: 3-5 things that trip people up\n6. INTERVIEW QUESTION: the one question most likely to be asked, with a model answer\n\nHard rule: the output must be under 60 lines. Merge or delete anything that does not fit. Do not pad.\n\nMY NOTES:\n{PASTE_MESSY_NOTES_HERE}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The fixed section schema plus the hard line cap forces the AI to prioritize the way you would if you had unlimited time, producing the artifact you will actually revise."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Compress the messiest notes you have from the last module, then delete the original file the same day (see Q14) and study only from the sheet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q8-how-do-i-keep-exam-critical-detail-formulas-signatures-edge-cases-when-compressing",
      children: "Q8: How do I keep exam-critical detail (formulas, signatures, edge cases) when compressing?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Compression normally destroys the exact details you need under exam pressure: formulas, function signatures, error messages, and time complexities. Add a verbatim rule: anything that must be recalled exactly goes into a protected block that the AI may shorten but never rephrase. Lossy summaries are fine for prose but never for specs. Then verify with the drop-list: ask the AI to report what it removed, and eyeball whether any of it was interview-critical."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Compress the following notes. TWO categories:\n- PROSE: can be rephrased, merged, or dropped\n- VERBATIM: must appear exactly: formulas, function signatures, error messages,\n  commands, time/space complexities, standard names\n\nOutput: (1) compressed sheet under 60 lines, (2) a list of everything you dropped\nfrom PROSE, (3) confirmation that VERBATIM items are untouched, listing each one.\n\nNOTES:\n{PASTE_NOTES_HERE}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The two-category instruction stops the AI from paraphrasing things that must be memorized letter-for-letter, and the drop list makes the compression auditable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Compress a DBMS or OS chapter with this prompt, pick one dropped item, and explain to a friend why you are fine losing it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q9-how-does-sq3r-work-with-ai",
      children: "Q9: How does SQ3R work with AI?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " SQ3R is Survey, Question, Read, Recite, Review. AI replaces the manual work in two stages: it converts headings into questions before you read (the Question stage), and it runs the quiz after you read (the Review stage). Survey stays human but takes two minutes when the AI provides a chapter map. Recite is the most important stage and must stay human: close the material and explain aloud, because that is where forgetting surfaces. The AI never reads for you — it reads the headings and your recall, not the chapter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    S[\"Survey: AI provides chapter map\"] --> Q[\"Question: AI converts headings to exam questions\"]\n    Q --> R[\"Read: I read once, hunting for answers\"]\n    R --> Rec[\"Recite: I explain aloud, closed book\"]\n    Rec --> Rev[\"Review: AI quizzes me on the questions\"]\n    Rev -->|Misses| R\n    Rev -->|Passes| Done[\"Next chapter\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Here are the headings of a chapter. Convert each heading into a question I should\nbe able to answer after reading it. Keep questions specific and exam-flavored.\nAlso add 3 questions that are NOT answered by the headings but that interviewers\ncommonly ask on this topic.\n\nHEADINGS:\n{PASTE_CHAPTER_HEADINGS_OR_TOC_HERE}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Pre-reading questions give the read a target (find the answer to heading-question 3), and the extra interview questions keep you hunting beyond the headings; the Review stage reuses the Q2 quiz prompt."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " On your next chapter, survey for 2 minutes, get questions from AI, read once looking for answers, close the book and recite aloud, then run the review quiz. Compare retention against last week's chapter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q10-what-are-the-active-reading-prompts-predict-extract-quiz",
      children: "Q10: What are the active reading prompts (predict, extract, quiz)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Active reading runs three prompts around one read: predict before, extract during, quiz after. The predict prompt asks the AI what a title implies the chapter will say, turning the read into verification, which keeps attention high. The extract prompt takes your margin notes every 15-20 minutes and structures them. The quiz prompt is the stage-2 pipeline prompt from Q2. This converts one passive pass into three interactions with the material, which is what the active recall research says builds memory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "I am about to read a chapter titled \"{CHAPTER_TITLE}\" in a {COURSE} course for software engineering placement.\n\n1. Predict the 5 most important concepts the chapter will cover, with one line of reasoning each\n2. Predict the 3 things it will NOT cover but that are adjacent (so I can decide if I need them)\n3. Tell me which existing concepts from {PREVIOUS_TOPIC} it will build on\n\nAfter I finish reading, I will paste my findings back and we will reconcile your predictions against the chapter.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Prediction activates prior knowledge and creates a target to check, so the read becomes active verification instead of passive scanning."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Before your next chapter, run the predict prompt; after reading, paste back three bullets: prediction confirmed, prediction wrong, and something you predicted that was not in the chapter at all."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q11-how-do-i-understand-dense-pdfs-and-textbooks-with-ai-progressive-chunking",
      children: "Q11: How do I understand dense PDFs and textbooks with AI (progressive chunking)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Do not paste a 60-page PDF in one go; context limits truncate the middle, which is exactly where the core content hides. Use progressive chunking: extract the table of contents, get a concept map, then work section by section, pasting one chunk at a time with a concept-first instruction (\"explain the concept before the notation\"). For formulas, ask the AI to name every symbol and give a plain-English reading of the formula. This keeps the whole book inside the model's attention and keeps your mental model ahead of the math."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "I am reading {BOOK_TITLE}, section {SECTION_RANGE}. Do not summarize in order. Instead:\n\n1. CONCEPT-FIRST: state the one concept this section teaches, in plain English, before any notation\n2. NOTATION TABLE: list every symbol/term introduced, with its meaning\n3. READING ALOUD: for each formula, give a plain-English reading\n   (e.g., \"the output is the input scaled by the inverse of the distance\")\n4. WORKED CHECK: apply the formula to the book's own example, step by step\n5. STUCK-PROOFING: list the 2 most common misunderstandings of this section\n\nSECTION TEXT:\n{PASTE_SECTION_TEXT_HERE}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Concept-first ordering stops the AI from echoing the book's dense ordering, the notation table gives you a decoder ring, and the plain-English readings convert formulas into things you can explain."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Take the hardest section of your current textbook, run the prompt, and teach the concept to a non-technical friend using only the notation table and plain-English readings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q12-what-do-i-do-when-the-ai-summary-itself-confuses-me",
      children: "Q12: What do I do when the AI summary itself confuses me?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Do not silently move on; confusion is the signal that the AI compressed away a step you needed. Run a confusion prompt pinned to the exact sentence that broke: ask for the missing step, a smaller numeric example, and an analogy. If the AI still fails, your underlying model is missing a prerequisite, so ask it to diagnose which prerequisite it silently assumes. Fix the prerequisite first (5-10 minutes of targeted reading), then re-read the summary."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Your previous summary confused me at this sentence:\n\n\"{PASTE_CONFUSING_SENTENCE}\"\n\nDiagnose, in order:\n1. Which prerequisite concept does this sentence silently assume? (be specific)\n2. Explain the sentence with a concrete numeric example in 3 steps\n3. Give a non-technical analogy for the mechanism\n4. If I still cannot get it, what should I learn first? Give me a 10-minute mini-lesson on that prerequisite.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The prompt forces the AI to localize the failure to one sentence, find the assumed prerequisite, and rebuild from a concrete example instead of re-explaining the whole section."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Find the sentence that broke you in your last chapter, run the prompt, and write the prerequisite on a sticky note on your desk for one week."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q13-what-is-the-skim--deep-dive-combo-ai-finds-the-20-that-matters",
      children: "Q13: What is the skim + deep-dive combo (AI finds the 20% that matters)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Roughly 20 percent of a chapter produces 80 percent of interview questions. The combo runs a skim prompt first: the AI labels every subsection as deep-read, skim, or skip, with a placement-relevance reason for each label. You read only the deep-read parts slowly and fully, give the skim parts a fast pass, and drop the skips without guilt. This is how you finish a 40-chapter syllabus in weeks instead of months while staying sharp on the questions that actually get asked."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "I have a {TOPIC} chapter with these sections (below). Label each one:\n- DEEP-READ: concepts that appear in interviews, with complexity or tradeoffs\n- SKIM: background or motivation, one-pass read\n- SKIP: historical, redundant, or outside placement scope\n\nFor DEEP-READ sections, add: the 1-2 questions an interviewer would ask,\nand what makes the section non-negotiable. Output as a table.\n\nSECTIONS:\n{PASTE_TOC_OR_SECTION_LIST_HERE}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The labels force a cost-benefit split before you spend time, and the reason column keeps you from blindly trusting the labels."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Label the next 5 chapters of your current module and record the deep-read/skim/skip ratio. If any module is more than 40 percent skip, question whether that module belongs in your plan at all."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q14-how-do-i-convert-summaries-into-recall-material-instead-of-note-hoarding",
      children: "Q14: How do I convert summaries into recall material instead of note-hoarding?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The anti-hoarding rule: every artifact you create must be in recall form (question-to-answer) or a review trigger, never raw prose. Summary goes to quiz (Q1), quiz goes to spaced schedule (Q19), notes go to a one-pager (Q7). If a file does not fit those forms, delete it. Note-hoarding feels like studying but is organization anxiety; four hours of commute spent re-reading summaries is four hours of zero retrieval. Run a weekly purge: any study file not opened in 7 days gets deleted or merged."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Classify each artifact below into:\n- RECALL: a question-answer or quiz item (keep)\n- REFERENCE: needs-to-be-exact material (keep, tag REF)\n- HOARD: prose summary of something I already quizzed (delete or compress into 5 recall cards)\n\nFor every HOARD item, generate the 5 recall cards that replace it, in pipe-separated Anki format.\n\nARTIFACTS:\n{PASTE_FILENAMES_OR_SNIPPETS_HERE}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The classification gives you a defensible delete list, and each deleted item is replaced by a recall equivalent so nothing of value is lost."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " List every file in your study folder, run the classifier, and delete the HOARD items today. Keep a running count in your tracker."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q15-how-do-i-calibrate-speed-vs-comprehension-self-test-after-each-chapter",
      children: "Q15: How do I calibrate speed vs comprehension (self-test after each chapter)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Measure, do not guess. After each chapter, answer the stage-3 quiz from memory and record the score and the reading time. Your personal curve emerges after 5-6 chapters: maybe 30 minutes per chapter with 80 percent retention, or 15 minutes with 60 percent. The target is not maximum speed; it is the fastest speed where misses stay below your threshold (say 30 percent). If you read three times faster but retain 40 percent less, you are paying for speed with re-reads, which are slower overall."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "User: I just finished a chapter on OS process scheduling in 25 minutes. Quiz me with 8 questions, no hints.\n\nAssistant: Q1. What is the difference between preemptive and non-preemptive scheduling?\nQ2. When does priority inversion occur, and what is the classic fix?\nQ3. Round Robin with time quantum 4ms; three processes arrive at 0. Give the average waiting time.\n...\n\nUser: Q1: preemptive means the CPU can be taken away mid-execution; non-preemptive waits for the process to finish or block.\nQ2: priority inversion is when a low-priority process holds a lock a high-priority process needs; the classic fix is priority inheritance.\nQ3: waiting times 2, 4, and 6 ms, average 4 ms.\n...\n\nAssistant: Q1 correct. Q2 mostly correct: inheritance raises the low-priority process's priority while it holds the lock; that is what breaks the stall.\nQ3 wrong: with quantum 4ms and arrival order A, B, C you get 0, 4, 8 -> average 4 ms only if arrival order matches; recheck the Gantt chart.\n\nScore: 6/8. Misses:\n- Q5: you swapped SJF and SRTF. Same policy, but SRTF is the preemptive version.\n- Q7: aging prevents starvation in PRIORITY scheduling, not round robin.\n\nRe-study list: SRTF vs SJF, priority aging.\n\nUser: Based on 25 minutes of reading plus this quiz, what is my effective comprehension, and what speed should I target next chapter?\n\nAssistant: 6/8 = 75 percent, above your 70 percent threshold, so 25 minutes is sustainable. Try 22 minutes next chapter and re-check; if you land above 70 percent again, hold 22 minutes.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The quiz measures retention in real time, and the follow-up question converts the score into a speed target, so each chapter teaches you your own calibration curve."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Calibrate your next three chapters: read, quiz from memory, record time and score in your tracker, and compute your personal threshold speed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q16-how-do-i-handle-50-page-documentation-quickly-docs-to-runnable-tutorial",
      children: "Q16: How do I handle 50-page documentation quickly (docs to runnable tutorial)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Large docs have the same problem as textbooks: the useful 10 percent is buried. Ask the AI to convert the docs into a runnable tutorial: a quick start with copy-paste commands, a minimal working example with expected output, the five functions you will use 80 percent of the time, a pitfalls table, and a mock scenario. Then you do not read the docs at all — you run the tutorial and only consult the docs when something breaks. This turns documentation reading into documentation executing, which is faster and transfers directly to interview code questions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Convert this documentation into a runnable tutorial for a beginner. Structure:\n1. QUICK START: the minimal commands to get {TOOL_NAME} working (copy-paste ready)\n2. MINIMAL EXAMPLE: the smallest program that exercises the main feature, with expected output\n3. THE 5 THINGS: the 5 functions/classes you will use 80 percent of the time, with signatures\n4. PITFALLS: the 5 most common errors from this doc, with the fix for each\n5. MOCK SCENARIO: a 2-line interview question this tool is commonly tested on, with a model answer\n\nDOCUMENTATION (may be long):\n{PASTE_DOC_TEXT_HERE}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The tutorial template forces the doc into executable form, so learning becomes running code and fixing errors instead of reading 50 pages."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Next new tool or library you need: run this prompt, do the quick start, and time how long until your first working example."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q17-how-do-i-use-notebooklm-or-a-source-based-tool-for-multi-source-learning",
      children: "Q17: How do I use NotebookLM or a source-based tool for multi-source learning?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " NotebookLM and similar source-grounded tools shine when a topic spans several sources: a lecture, a textbook chapter, your own notes, or a paper. Upload everything, then ask grounded questions that cite sources, so you can verify instead of trusting a floating summary. Use it for the two failure modes of plain chat: conflicting sources (ask it to compare passages) and self-doubt (ask it to locate where a claim actually lives). For a placement student, this is the \"the interviewer asked something I saw somewhere\" resolver."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Using only the sources I uploaded ({SOURCE_1}, {SOURCE_2}), answer:\n\n1. Where do these sources AGREE about {TOPIC}? Cite the specific passage for each agreement.\n2. Where do they CONFLICT or differ in emphasis? Quote both passages.\n3. Which source explains {CONCEPT_X} best for an interview answer, and why?\n4. Give me one interview question that combines both sources, with a model answer that uses evidence from each.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Source grounding makes every claim traceable to a passage you can check, which fixes hallucinated citations and lets you reconcile conflicting material."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Upload your two most confusing study sources on one topic, run the prompt, and save the combined interview answer into your notes file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q18-how-do-i-use-the-feynman-technique-with-ai-explain-catch-gaps-simplify",
      children: "Q18: How do I use the Feynman technique with AI (explain, catch gaps, simplify)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Feynman method is: explain the concept simply, find where the explanation breaks, go back to the source, repeat. AI makes it ten times faster because the \"find where it breaks\" stage is instant: the AI plays a student who interrupts your vague spots and asks pointed questions, not a grader who says \"good\". Every stumble in your explanation is a gap; collect them, fix them with the source, and explain again 24 hours later."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Role-play as a curious student who knows NOTHING about {TOPIC}. I will explain it to you.\n\nRules for you:\n1. Interrupt me only when I say something vague, hand-wave, or circular\n2. Ask for a concrete example whenever I give a definition\n3. Ask \"why\" at least twice per explanation\n4. At the end, list the 3 places I was vaguest, ranked by danger for an interview\n\nMy explanation (paste as one message or in parts):\n{PASTE_YOUR_EXPLANATION_HERE}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The interruption rules convert your monologue into an interactive explanation, and the vague-spots list tells you exactly what to re-read."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Pick the concept you are least confident about in your current module, explain it out loud into the prompt, fix the three vague spots, and re-explain from memory tomorrow."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q19-how-do-i-build-a-spaced-repetition-schedule-with-ai",
      children: "Q19: How do I build a spaced repetition schedule with AI?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Spaced repetition says review at expanding intervals; the AI's job is to compute the schedule from your quiz results. Feed it the topic list with last-quiz scores and ask for a weekly schedule: daily items (missed recently), 3-day items (partially recalled), weekly items (solid). Slots are the constraint: you have ~4 hours of commute daily but only about 60 minutes of pure recall work. The schedule must fit into commute slots or it dies; one solid 15-minute Anki session is worth three 40-minute skims."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Here are my topics with last-quiz scores and dates. Build a 1-week spaced review schedule.\n\nConstraints:\n- 3 review sessions per day: morning commute (15 min), lunch (10 min), evening commute (20 min)\n- Max 3 topics per session\n- Missed topics recur every 24 hours; partially correct every 3 days; solid every 7 days\n- Every day must include 5 minutes of \"cold recall\": a random old topic, no notes\n\nFor each day, list: session, topics, and what to do (quiz / re-read one-pager / Anki).\n\nMY DATA:\n{PASTE_TOPIC_AND_SCORE_LIST_HERE}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The schedule maps your score data onto your real time slots, so review survives the workday instead of being an afterthought."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Generate this schedule for your current week, run it for 7 days, then quiz yourself on 10 randomly chosen topics and compare the miss rate against last week."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q20-how-do-i-detect-weak-spots-from-quiz-misses-the-miss-mining-loop",
      children: "Q20: How do I detect weak spots from quiz misses (the miss-mining loop)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A miss is not failure; it is a coordinate. Collect every miss for a week, paste the whole list to the AI, and ask for three outputs: the cluster analysis (which underlying topics produce the most misses), the root cause for each cluster (never learned, fuzzy, confused, or formula rot), and the fix (re-study, practice, or formula drills). Then update your study plan: the module with the most misses gets the next deep-dive, not the module you like. This converts the pipeline into a feedback loop that re-tunes your plan weekly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Here are all the questions I missed this week, with the topic and my last score for each.\n\n1. Cluster them into underlying weakness areas (e.g., \"DB indexes\", \"OS deadlocks\")\n2. For each cluster: root cause (never learned / fuzzy / confused with another concept / formula rot)\n3. Recommend for each: re-read one-pager, 20 new practice problems, or formula drills\n4. Rank the clusters by urgency for an interview next month\n5. Suggest which 2 modules should change place in my 18-week plan\n\nMISS LIST:\n{PASTE_MISSED_QUESTIONS_HERE}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Miss mining turns scattered quiz failures into a ranked, root-caused action list that updates the plan instead of generating guilt."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Keep a running miss list for 7 days, run the mining prompt on Sunday, and change exactly two things in next week's plan based on it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q21-how-do-i-build-a-chapter-to-questions-generator-i-can-run-offline-typescript",
      children: "Q21: How do I build a chapter-to-questions generator I can run offline (TypeScript)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " When you are on the train with no internet, a small script converts your pasted notes into a 10-question quiz spaced by difficulty — 4 easy recall questions, 3 medium explanation questions, and 3 hard application questions. The script is a stand-in for the pipeline's quiz stage: it buckets your notes deterministically so the same notes always produce the same quiz, which is useful when you want a stable weekly test. Save it in your study folder and run it with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npx ts-node chapter-to-questions.ts"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// chapter-to-questions.ts\n// Paste notes, get 10 quiz questions spaced by difficulty.\n// Run: npx ts-node chapter-to-questions.ts\n\ntype Difficulty = \"easy\" | \"medium\" | \"hard\";\n\ninterface QuizQuestion {\n  difficulty: Difficulty;\n  type: \"recall\" | \"explain\" | \"apply\";\n  question: string;\n  answer: string;\n}\n\nconst PASTE_NOTES_HERE = `\nSQL indexes speed up lookups on WHERE clauses.\nB-trees keep data sorted, which enables range queries.\nComposite indexes follow the left-most prefix rule.\nNormalization removes duplicate data (3NF).\nDenormalization trades storage for query speed.\nJoins combine tables on foreign keys.\nEXPLAIN shows the query execution plan.\nPartitioning splits a table by range or hash.\nConnection pooling reuses database connections.\nTransactions guarantee ACID properties.\n`;\n\nfunction bucketByDifficulty(lines: string[]): [string[], string[], string[]] {\n  const easy: string[] = [];\n  const medium: string[] = [];\n  const hard: string[] = [];\n  lines.forEach((line, i) => {\n    if (i % 3 === 0) easy.push(line);\n    else if (i % 3 === 1) medium.push(line);\n    else hard.push(line);\n  });\n  return [easy, medium, hard];\n}\n\nfunction makeQuestion(line: string, difficulty: Difficulty): QuizQuestion {\n  const type: QuizQuestion[\"type\"] =\n    difficulty === \"easy\" ? \"recall\"\n    : difficulty === \"medium\" ? \"explain\"\n    : \"apply\";\n  const verb =\n    type === \"recall\"\n      ? \"State the key idea\"\n      : type === \"explain\"\n        ? \"Explain in your own words\"\n        : \"Give an example where this matters in a real system\";\n  return {\n    difficulty,\n    type,\n    question: `${verb}: ${line.toLowerCase()}`,\n    answer: line,\n  };\n}\n\nfunction generateQuestions(rawNotes: string): QuizQuestion[] {\n  const lines = rawNotes\n    .split(\"\\n\")\n    .map((l) => l.trim())\n    .filter((l) => l.length > 3 && !l.startsWith(\"#\"));\n  const [easy, medium, hard] = bucketByDifficulty(lines);\n  return [\n    ...easy.slice(0, 4).map((l) => makeQuestion(l, \"easy\")),\n    ...medium.slice(0, 3).map((l) => makeQuestion(l, \"medium\")),\n    ...hard.slice(0, 3).map((l) => makeQuestion(l, \"hard\")),\n  ];\n}\n\nfunction printStudyPlan(questions: QuizQuestion[]): void {\n  console.log(\"=== 10 questions, spaced by difficulty ===\\n\");\n  questions.forEach((q, i) => {\n    console.log(`Q${i + 1} [${q.difficulty} | ${q.type}]`);\n    console.log(`   ${q.question}`);\n    console.log(`   Model answer: ${q.answer}\\n`);\n  });\n}\n\nconst questions = generateQuestions(PASTE_NOTES_HERE);\nprintStudyPlan(questions);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The script buckets notes into three difficulty tiers, builds one question per note with a tier-appropriate verb, and prints a study plan you can use to quiz yourself without internet."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Replace the sample SQL notes with your own chapter notes, run the script, and answer the 10 questions from memory; repeat with the same notes 72 hours later and compare miss counts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The summary-to-recall pipeline (read once, summarize, quiz, schedule) replaces re-reading with retrieval, which is what builds durable memory."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flashcards: one prompt produces an import-ready Anki deck; always audit it to kill recognition-style cards that inflate confidence."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lectures and podcasts: transcript in, structured notes out, never watch twice; noisy transcripts get a repair-plus-extract pass."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The notes compressor forces everything onto a one-page sheet; verbatim rules protect formulas, signatures, and complexities."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQ3R with AI: AI powers the Question and Review stages; Recite stays human and closed-book."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Active reading = predict, extract, quiz; prediction turns reading into verification, which keeps attention high."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dense material needs progressive chunking and concept-first prompts; 50-page docs become runnable tutorials."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Misses are data: weekly miss-mining clusters failures by root cause and re-ranks your study plan."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contradictions",
      children: "Contradictions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The methods in this chapter are not universally right. Read these before trusting the system blindly:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Summaries are lossy. For dense formal content (proofs, derivations), slow full reading beats summary pipelines; the pipeline is for concepts, not formal arguments."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI summaries can flatten nuance, and you cannot notice what was dropped if you never read the original."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The anti-hoarding rule (every note must produce a recall artifact) discourages legitimate reference notes. Some notes exist for lookup, not recall — the rule should not apply to those."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Skim plus AI deep-dive\" is contested in reading research; on unknown, dense topics it can leave you with confident superficiality."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-questions",
      children: "Open Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What this chapter deliberately does not claim to know:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Whether skim + AI deep-dive preserves comprehension as well as full reading is contested in reading research, and no personal data exists here."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The optimal summary compression ratio (how compressed before recall quality drops) is unknown."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Whether generated flashcards from compressed summaries leak the same errors the summary introduced is an unverified chain."
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
            children: "Pipeline summary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q1's 4-part prompt (summary, quiz, review plan, gap check)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every chapter, first pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3-prompt loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stage 1 summary, stage 2 quiz, stage 3 recall-check 24-72h later"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The core weekly rhythm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter to flashcards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Convert this chapter into Anki cards, pipe-separated, 30 cards\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After every module"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deck audit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Flag duplicates, multi-fact, answer-leaking cards; fix them\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before importing any deck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lecture extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Extract outline, key terms, code, quiz, interview angles\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every video lecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Notes compressor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"One-page sheet, 6 sections, under 60 lines\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When notes exceed 2 pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQ3R question stage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Convert these headings into exam questions\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before reading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confusion fix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Diagnose the prerequisite behind this sentence\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When a summary breaks you"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Docs to tutorial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Convert this documentation into a runnable tutorial\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New tools, 50-page docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly miss mining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Cluster my misses, root cause, rank by urgency\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every Sunday"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why does the summary-to-recall pipeline beat re-reading?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Re-reading takes too long"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Retrieval from memory builds long-term recall, while re-reading produces only recognition"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) AI summaries are shorter"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Re-reading causes eye strain"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "b) Retrieval from memory builds long-term recall, while re-reading produces only recognition"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the pipeline, what happens between the quiz stage and the review schedule?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Re-reading the full chapter"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Waiting 24-72 hours, then recalling answers from memory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Generating new flashcards"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Watching the lecture again"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "b) Waiting 24-72 hours, then recalling answers from memory"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which Anki card defect gives false confidence?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Multi-fact backs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Recognition cards where the front gives away the answer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Scenario cards"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Cloze deletions"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "b) Recognition cards where the front gives away the answer"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How should formulas and API signatures be treated during note compression?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Paraphrased freely"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Protected as verbatim blocks that may be shortened but not rephrased"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Deleted"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Moved to the bottom of the sheet"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "b) Protected as verbatim blocks that may be shortened but not rephrased"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In SQ3R with AI, which stage must stay human and closed-book?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Survey"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Question"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Recite"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Review"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "c) Recite"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which prompt runs before reading in the active reading set?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Extract"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Predict"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Quiz"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Compress"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "b) Predict"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is progressive chunking for dense PDFs?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Pasting the whole PDF at once"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Working section by section with concept-first instructions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Reading only the table of contents"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Skipping the book entirely"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "b) Working section by section with concept-first instructions"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the skim + deep-dive combo, which label gets the slow, full read?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) DEEP-READ"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) SKIM"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) SKIP"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) OPTIONAL"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "a) DEEP-READ"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the anti-hoarding rule?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Never delete study files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Every artifact must be recall form or a review trigger; prose hoards get deleted"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Keep only AI output"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Store everything in the cloud"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "b) Every artifact must be recall form or a review trigger; prose hoards get deleted"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the calibration transcript, what did the AI diagnose from the miss at Q5?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Slow typing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Swapping SJF and SRTF (the same policy, preemptive vs non-preemptive)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Reading too fast"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Weak vocabulary"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer"
          }), "b) Swapping SJF and SRTF (the same policy, preemptive vs non-preemptive)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run the full pipeline (Q1 + Q2) on one chapter this week and record your stage-3 score in the tracker."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate an Anki deck (Q3), audit it (Q4), import it, and review it for 5 consecutive days."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert one YouTube lecture (Q5) and one podcast (Q6) into structured notes, then quiz yourself from memory 48 hours later."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compress your messiest notes with the compressor (Q7) and the verbatim rule (Q8), then delete the originals (Q14)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run SQ3R (Q9) with the predict prompt (Q10) on your next chapter, then run the calibration transcript (Q15) and record your time and score pair."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a miss list for 7 days, run the miss-mining prompt (Q20), and change exactly two things in next week's plan. Bonus: run the TypeScript generator (Q21) on the train."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.coursera.org/learn/learning-how-to-learn",
          children: "Learning How to Learn (Coursera)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.ankiweb.net/",
          children: "Anki Manual"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://makeitstick.net/",
          children: "Make It Stick — the science of durable learning"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://en.wikipedia.org/wiki/SQ3R",
          children: "SQ3R — Wikipedia"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://en.wikipedia.org/wiki/Spaced_repetition",
          children: "Spaced repetition — Wikipedia"
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