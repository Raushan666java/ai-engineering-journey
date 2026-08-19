"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[10539],{

/***/ 95076
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_powered_learning_ch_05_active_recall_quiz_prompts_md_bc7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-powered-learning-ch-05-active-recall-quiz-prompts-md-bc7.json
const site_docs_courses_ai_powered_learning_ch_05_active_recall_quiz_prompts_md_bc7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-powered-learning/ch05-active-recall-quiz-prompts","title":"Chapter 5: Active Recall & Quiz Prompts","description":"Last Updated 60–75 minutes","source":"@site/docs/courses/ai-powered-learning/ch05-active-recall-quiz-prompts.md","sourceDirName":"courses/ai-powered-learning","slug":"/ai-powered-learning/ch05-active-recall-quiz-prompts","permalink":"/ai-engineering-journey/ai-powered-learning/ch05-active-recall-quiz-prompts","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"ch05-active-recall-quiz-prompts","slug":"/ai-powered-learning/ch05-active-recall-quiz-prompts","title":"Chapter 5: Active Recall & Quiz Prompts","sidebar_label":"Chapter 5: Active Recall & Quiz Prompts","sidebar_position":5},"sidebar":"course-ai-powered-learning","previous":{"title":"Chapter 4: Concept Mastery with AI","permalink":"/ai-engineering-journey/ai-powered-learning/ch04-concept-mastery"},"next":{"title":"Chapter 6: Code & DSA with AI","permalink":"/ai-engineering-journey/ai-powered-learning/ch06-code-dsa-with-ai"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-powered-learning/ch05-active-recall-quiz-prompts.md


const frontMatter = {
	id: 'ch05-active-recall-quiz-prompts',
	slug: '/ai-powered-learning/ch05-active-recall-quiz-prompts',
	title: 'Chapter 5: Active Recall & Quiz Prompts',
	sidebar_label: 'Chapter 5: Active Recall & Quiz Prompts',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Active Recall & Quiz Prompts';

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
  "value": "The Socratic quiz loop",
  "id": "the-socratic-quiz-loop",
  "level": 2
}, {
  "value": "Q1: What is the Socratic quizzer and why is it the highest-ROI prompt in this course?",
  "id": "q1-what-is-the-socratic-quizzer-and-why-is-it-the-highest-roi-prompt-in-this-course",
  "level": 2
}, {
  "value": "Q2: How do I feed the AI my study material without pasting a wall of text?",
  "id": "q2-how-do-i-feed-the-ai-my-study-material-without-pasting-a-wall-of-text",
  "level": 2
}, {
  "value": "Q3: What do I do when the AI breaks the rules and hands me the answer?",
  "id": "q3-what-do-i-do-when-the-ai-breaks-the-rules-and-hands-me-the-answer",
  "level": 2
}, {
  "value": "Q4: How do I build an Anki card factory with AI?",
  "id": "q4-how-do-i-build-an-anki-card-factory-with-ai",
  "level": 2
}, {
  "value": "Q5: How do I get the cards as an Anki-importable CSV?",
  "id": "q5-how-do-i-get-the-cards-as-an-anki-importable-csv",
  "level": 2
}, {
  "value": "Q6: How do I write cloze cards that are not trivial to guess?",
  "id": "q6-how-do-i-write-cloze-cards-that-are-not-trivial-to-guess",
  "level": 2
}, {
  "value": "Q7: What is the exam question generator and how do I use it?",
  "id": "q7-what-is-the-exam-question-generator-and-how-do-i-use-it",
  "level": 2
}, {
  "value": "Q8: How do I run a five-type exam drill like a real test?",
  "id": "q8-how-do-i-run-a-five-type-exam-drill-like-a-real-test",
  "level": 2
}, {
  "value": "Q9: What is the difficulty ladder and how do I build one for any topic?",
  "id": "q9-what-is-the-difficulty-ladder-and-how-do-i-build-one-for-any-topic",
  "level": 2
}, {
  "value": "Q10: How do I track my correct rate per rung?",
  "id": "q10-how-do-i-track-my-correct-rate-per-rung",
  "level": 2
}, {
  "value": "Q11: What is interleaving with AI and why does it beat blocked practice?",
  "id": "q11-what-is-interleaving-with-ai-and-why-does-it-beat-blocked-practice",
  "level": 2
}, {
  "value": "Q12: How do I stop the AI from dumping everything on one topic before switching?",
  "id": "q12-how-do-i-stop-the-ai-from-dumping-everything-on-one-topic-before-switching",
  "level": 2
}, {
  "value": "Q13: How does the AI spaced-repetition scheduler work?",
  "id": "q13-how-does-the-ai-spaced-repetition-scheduler-work",
  "level": 2
}, {
  "value": "Q14: How do I rate cards without gaming my own schedule?",
  "id": "q14-how-do-i-rate-cards-without-gaming-my-own-schedule",
  "level": 2
}, {
  "value": "Q15: How do I convert my own notes into fill-in-the-blank drills?",
  "id": "q15-how-do-i-convert-my-own-notes-into-fill-in-the-blank-drills",
  "level": 2
}, {
  "value": "Q16: What is mistake-driven review and how do I run it?",
  "id": "q16-what-is-mistake-driven-review-and-how-do-i-run-it",
  "level": 2
}, {
  "value": "Q17: How do I run a 15-minute recall sprint in the morning commute?",
  "id": "q17-how-do-i-run-a-15-minute-recall-sprint-in-the-morning-commute",
  "level": 2
}, {
  "value": "Q18: What is the recall-before-check protocol?",
  "id": "q18-what-is-the-recall-before-check-protocol",
  "level": 2
}, {
  "value": "Q19: How do I debrief a quiz so every wrong answer becomes a card?",
  "id": "q19-how-do-i-debrief-a-quiz-so-every-wrong-answer-becomes-a-card",
  "level": 2
}, {
  "value": "Q20: How do I chain everything into a 60-minute daily loop?",
  "id": "q20-how-do-i-chain-everything-into-a-60-minute-daily-loop",
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
        id: "chapter-5-active-recall--quiz-prompts",
        children: "Chapter 5: Active Recall & Quiz Prompts"
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
      children: "Reading notes feels productive but stores very little in long-term memory. The science-backed alternative is active recall: forcing your brain to pull facts out before checking them, which is exactly what placement interviews do to you. This chapter gives you a complete kit of copy-paste prompts that turn ChatGPT, Claude, or Gemini into a personal quiz engine: a Socratic quizzer, an Anki card factory, an exam question generator, and a spaced-repetition scheduler."
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
          }), " — 50 Anki cards (CSV) generated from one chapter you have already read, plus one generated exam you actually sat."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " Chapter 2. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 6."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run a Socratic quizzer that gives hints only and never full answers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert any chapter of notes into Anki-ready cards using a prompt plus a TypeScript CSV generator"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate five exam question types (MCQ, True/False, Fill-in-the-blank, Scenario, Output) at any difficulty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Climb a difficulty ladder and track your correct rate per rung"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Force interleaving so AI mixes three topics in a single quiz"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schedule spaced repetition with again/hard/good/easy ratings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert your own notes into fill-in-the-blank drills"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feed your wrong answers back into targeted re-quizzes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run a 15-minute recall sprint during the morning commute"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the recall-before-check protocol before you ever open your notes"
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
            children: "Socratic quizzer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI asks one question at a time and gives hints, never answers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master prompt in Q1; use for every subject"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anki card factory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notes become front/back and cloze cards automatically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt in Q4 plus TypeScript CSV generator in Q5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exam question generator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Five question types, three difficulty levels from one prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One prompt, instant mock test in Q7-Q8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Difficulty ladder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start easy, climb rungs, stay where accuracy is below 70%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ladder prompt in Q9, tracking log in Q10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interleaving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mix three topics so retrieval keeps switching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interleave prompt in Q11-Q12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spaced repetition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate every card again/hard/good/easy, AI schedules the next quiz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler prompt in Q13-Q14"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-socratic-quiz-loop",
      children: "The Socratic quiz loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant You\n    participant AI as AI quizzer\n    You->>AI: Paste notes and quiz rules\n    AI->>You: Confirm rules: hints only, no answers\n    loop 10 question round\n        AI->>You: Question n\n        You->>AI: Attempt or SKIP\n        alt Attempt is correct\n            AI->>You: Correct, brief reinforcement\n        else Attempt is wrong or SKIP\n            AI->>You: Hint level 1, then 2, then 3\n            You->>AI: Second attempt\n            AI->>You: Reveal answer only after SKIP, log a miss\n        end\n    end\n    AI->>You: Score X of 10 and weak spots\n    You->>AI: Re-quiz the weak spots\n    AI->>You: New round, same rules\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q1-what-is-the-socratic-quizzer-and-why-is-it-the-highest-roi-prompt-in-this-course",
      children: "Q1: What is the Socratic quizzer and why is it the highest-ROI prompt in this course?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Passive reading gives maybe 10-20% retention, while retrieval practice roughly doubles long-term recall because every attempt to answer strengthens the memory trace. The Socratic quizzer makes the AI act as an examiner who asks one question at a time, gives escalating hints when you are stuck, and never reveals the full answer unless you explicitly type SKIP. This mirrors how placement interviews behave: an interviewer will never hand you the answer, they will nudge you with hints and judge how you recover. Used daily, it converts dead study time into measurable improvement, and it works for theory, coding, and behavioral prep alike."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You are my Socratic quizzer for placement preparation.\n\nTopic: {topic}\nSource material: {paste your notes or chapter text}\nLevel: {beginner | intermediate | placement}\nQuestions per round: 10\n\nRules:\n1. Ask ONE question at a time. Never dump all questions at once.\n2. If I answer correctly, say Correct and move on in one line.\n3. If I am wrong or stuck, give a hint level 1 (a nudge, an analogy, or a sub-question).\n   Level 2 is a stronger nudge with a partial outline.\n   Level 3 is a yes-or-no probe. NEVER give the full answer unless I type SKIP.\n4. On SKIP, reveal the answer, explain it in 2 sentences, and log it as a miss.\n5. Every 5 questions, ask me my confidence from 1 to 5.\n6. At the end give: score X of 10, the list of misses, and 3 follow-up questions for the next round.\n\nBegin with question 1. Do not introduce yourself.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The rules block constrains the AI's behavior: one question per reply keeps focus, hint levels create a graded difficulty ramp, and the SKIP rule guarantees you do the retrieval work before any answer appears."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Copy the prompt, paste your hardest subject's chapter notes into {source material}, and run the full 10-question round without skipping a single question."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q2-how-do-i-feed-the-ai-my-study-material-without-pasting-a-wall-of-text",
      children: "Q2: How do I feed the AI my study material without pasting a wall of text?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " You can paste a full chapter, but the AI reads better when you label the paste and set a contract first. The trick is to separate the \"reading\" phase from the \"quizzing\" phase: the AI ingests silently, confirms it understood, and only then starts asking. This prevents the AI from summarizing everything back at you (which is passive reading again) and keeps the session focused on retrieval."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Here is the material I just studied. Read it silently and do NOT summarize it back to me.\nMaterial:\n{paste your notes or chapter text}\n\nConfirm understanding with: Ready.\nThen quiz me on it, one question at a time, using these rules:\n1. Hints only, never full answers, unless I type SKIP.\n2. Ask me to type READY again before you reveal question 1.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The explicit instruction \"do NOT summarize\" blocks the AI's default urge to recap, and the READY gate puts you in control of when the quiz starts so you can mentally prepare."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Take one lecture's worth of notes on {a topic you studied this week}, run the Q1 prompt with this Q2 injection pattern, and compare how much you remember versus how much you thought you knew."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q3-what-do-i-do-when-the-ai-breaks-the-rules-and-hands-me-the-answer",
      children: "Q3: What do I do when the AI breaks the rules and hands me the answer?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Model misbehavior is normal: newer models default to being helpful and will blurt out answers. You must correct the behavior immediately, in the same conversation, so the AI learns your session's contract. If it happens twice, start a fresh conversation and paste the rules again, because long conversations dilute instruction-following. Do not silently accept the answer and move on; the moment you accept it, the quiz stops being retrieval practice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You: What is a deadlock?\nAI: A deadlock is a situation where two or more processes are each holding a resource\n     and waiting for the other to release one, so none can proceed...\nYou: STOP. We agreed: hints only, no full answers. You gave me the answer.\n     From now on, if I am wrong, ask me a hint-level-1 question instead.\n     Redo the question from scratch.\nAI: You are right, I broke the rules. Let me redo that.\n     Hint: what happens when process A holds resource 1 and waits for resource 2,\n     while process B holds resource 2 and waits for resource 1? Try again.\nYou: Both wait forever, so neither completes.\nAI: Correct, that is the circular wait. Good recovery.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The correction names the broken rule, states the new expectation, and demands a redo; this is exactly how you would handle a junior colleague who jumped to the answer in a code review."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Next time the AI slips, use this exact exchange pattern, then note whether it stayed disciplined for the rest of the round; record the result in your session log."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q4-how-do-i-build-an-anki-card-factory-with-ai",
      children: "Q4: How do I build an Anki card factory with AI?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Anki is a free spaced-repetition flashcard app that runs on desktop and mobile, so it works offline on your commute. The AI card factory converts any chunk of notes into well-formed cards: basic front/back cards, cloze deletion cards, and tags. The quality rules matter more than the prompt itself: one idea per card, answerable in under 20 seconds, and a bias toward WHY and HOW questions, because those are what interviewers ask."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Convert the notes below into Anki-ready cards.\nNotes:\n{paste your notes or chapter text}\n\nFormat for every card:\n- front: {the question}\n- back: {the answer, one or two lines}\n- type: basic | cloze\n- tags: {tag1} {tag2}\n\nRules:\n1. One idea per card. Split compound ideas into separate cards.\n2. Every question must be answerable from memory in under 20 seconds.\n3. Make 25% of cards cloze type using this notation: {{c1::answer}}.\n4. Prefer WHY and HOW questions over WHAT questions.\n5. Skip trivia. Keep only facts a placement interviewer would ask.\n6. Output a numbered list. No commentary before or after.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The format section fixes the card schema, the one-idea rule prevents bloated cards that are impossible to retrieve, and the cloze quota forces variety between recognition and recall questions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Run this prompt on one chapter of {your current subject}, then pick the 5 weakest cards and rewrite them so they pass the 20-second rule."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q5-how-do-i-get-the-cards-as-an-anki-importable-csv",
      children: "Q5: How do I get the cards as an Anki-importable CSV?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Anki imports plain text files with a specific header format, and the fastest path is a tiny TypeScript generator: you keep {question, answer} pairs as data, and it emits a CSV with the deck name, tab separators, and HTML line breaks. You can save the output to a .txt file and import it in Anki desktop under File, Import. This also means you can rebuild your whole deck from a chapter in seconds and keep the generator in your learning-playground repo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Card {\n  front: string;\n  back: string;\n  tag?: string;\n}\n\nfunction buildAnkiCsv(cards: Card[], deck: string): string {\n  const header =\n    \"#separator:tab\\n#html:false\\n#deck:\" + deck + \"\\nfront\\tback\\ttags\";\n  const rows: string[] = [];\n  for (const c of cards) {\n    const tag = c.tag === undefined ? \"default\" : c.tag;\n    const front = c.front.replace(/\\t/g, \" \").replace(/\\n/g, \"<br>\");\n    const back = c.back.replace(/\\t/g, \" \").replace(/\\n/g, \"<br>\");\n    rows.push(front + \"\\t\" + back + \"\\t\" + tag);\n  }\n  return header + \"\\n\" + rows.join(\"\\n\");\n}\n\nconst deck = \"placement-os\";\nconst cards: Card[] = [\n  {\n    front: \"What is a deadlock?\",\n    back: \"Two or more processes each waiting for a resource held by the other.\",\n    tag: \"os\",\n  },\n  {\n    front: \"What are the four necessary deadlock conditions?\",\n    back: \"Mutual exclusion, hold and wait, no preemption, circular wait.\",\n    tag: \"os\",\n  },\n  {\n    front: \"What does the banker's algorithm prevent?\",\n    back: \"Deadlock, by simulating resource allocation before granting it.\",\n    tag: \"os\",\n  },\n  {\n    front: \"What is the difference between deadlock and starvation?\",\n    back: \"Starvation means a process waits forever while resources go to others.\",\n    tag: \"os\",\n  },\n];\n\nconst csv = buildAnkiCsv(cards, deck);\nconsole.log(csv);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The header lines tell Anki the file uses tab separators, plain text, and a specific deck, and the column header front/back/tags maps each line to Anki's card fields; the replace calls turn tabs and newlines inside answers into safe characters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Save the script as anki-cards.ts, run it with npx ts-node anki-cards.ts, redirect the output to os-deck.txt, and import it in Anki; then review the deck on your phone during tomorrow's commute."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q6-how-do-i-write-cloze-cards-that-are-not-trivial-to-guess",
      children: "Q6: How do I write cloze cards that are not trivial to guess?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A cloze card blanks out part of a sentence and asks you to fill it, but deleting random words produces guessing games, not learning. The rule is to delete the key term or the key comparison, and keep enough context that you can reconstruct the sentence. Ask the AI for cloze cards only from dense definitional or comparative notes, and give each cloze a basic-card twin so the same fact is tested both ways."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Take these notes and make 5 cloze cards.\nNotes:\n{paste notes with definitions or comparisons}\n\nRules:\n1. Use {{c1::...}} syntax with the key term or key comparison deleted.\n2. Never delete random filler words.\n3. Each cloze card must test exactly one idea.\n4. For every cloze card, also give a basic-card twin:\n   front: {the same fact as a question}, back: {the answer}.\n5. Tag cloze cards with {topic}-cloze.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Deleting the key term forces retrieval of the central idea rather than vocabulary recognition, and the basic twin ensures the fact is also tested in question form, which covers both recall directions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Take your {networking notes on TCP vs UDP}, generate the 5 cloze cards, and check that you can complete each one in under 10 seconds after one review pass."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q7-what-is-the-exam-question-generator-and-how-do-i-use-it",
      children: "Q7: What is the exam question generator and how do I use it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The exam generator is one prompt that produces a realistic mock test in five formats: MCQ, True/False, Fill-in-the-blank, Scenario, and Output prediction. Output prediction questions show a short code snippet and ask what it prints, which is a favorite of placement tests. The generator hides the answer key so you must run the exam honestly before revealing it, and you can set difficulty so the same topic can be tested easy, medium, or hard on different days."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Act as a placement exam setter.\nTopic: {topic}\nDifficulty: {easy | medium | hard}\n\nCreate exactly 10 questions:\n- 2 MCQ with 4 options each, exactly one correct. Do not mark the correct option.\n- 2 True/False statements.\n- 2 Fill-in-the-blank sentences.\n- 2 Scenario questions: real workplace or interview context, 2 sentences each.\n- 2 Output prediction questions. Use TypeScript code and ask what it prints.\n\nRules:\n1. No answer key inline. Put answers in a separate Answer key section at the end.\n2. One question per numbered line, compact.\n3. Difficulty must match {difficulty} strictly.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The five-type split covers recognition, judgment, recall, application, and execution, so a single 10-question run exercises multiple memory systems, and the separated answer key makes the test honest."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Generate a hard set on {operating system scheduling}, answer all 10 in writing with a timer set to 15 minutes, then grade yourself against the key and mark each miss as concept gap, recall slip, or careless error."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q8-how-do-i-run-a-five-type-exam-drill-like-a-real-test",
      children: "Q8: How do I run a five-type exam drill like a real test?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The transcript below shows the full flow: generate, answer without looking, then self-grade. The discipline that makes it work is answering everything before peeking at the key, and using the AI's corrections to classify each error. Treat the drill as a practice round of an actual placement test: no notes, no pausing on easy questions, and a strict timer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You: Generate the exam set. Topic: OS scheduling. Difficulty: hard. Rules as before.\nAI: 1. MCQ: Which scheduler can starve a process indefinitely? A) Round robin\n      B) Priority with preemption C) FCFS D) Multilevel feedback\n     2. True/False: FCFS minimizes average waiting time in all cases.\n     3. Fill: In round robin, the time slice is called the ____.\n     4. Scenario: A customer app needs 1ms average response for 1000 requests/s.\n        Which scheduler family fits? Justify in 2 lines.\n     5. Output: let t = 0; for (let i = 0; i < 3; i++) { t += i; }\n        console.log(t); what prints?\n     ... [Answer key at the end]\nYou: Q1: B. Q2: False. Q3: quantum. Q4: Round robin with small quantum. Q5: 3.\nAI: Q1 correct. Q2 correct. Q3 correct. Q4 correct but your justification is thin:\n      mention preemption and bounded waiting. Q5 wrong: the loop sums 0+1+2 = 3,\n      so 3 is right actually. Recheck my key: yes, 3. Full score 5/5 on hard.\nYou: That was suspicious. Regenerate Q5 as a trickier trace with nested loops.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The round is structured as generate, answer, grade, and the AI's terse verdicts mirror interview feedback; the final request for a harder trace shows how to escalate after a perfect run."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Run this exact flow for {DBMS transactions} at medium difficulty, enforce a 15-minute timer, and classify every miss into one of the three error types."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q9-what-is-the-difficulty-ladder-and-how-do-i-build-one-for-any-topic",
      children: "Q9: What is the difficulty ladder and how do I build one for any topic?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A difficulty ladder is a 5-rung progression from recall to derivation: define terms, explain a process step by step, compare concepts, apply to a scenario, and finally design or derive something. The ladder fights the common mistake of practicing only definition-level questions, which never appear in interviews. Have the AI tell you which rung you are on and always start one rung above your estimate so you feel productive but still challenged."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Create a difficulty ladder for {topic} with 5 rungs:\nRung 1: define the key terms.\nRung 2: explain how the mechanism works, step by step.\nRung 3: compare and contrast two concepts in the topic.\nRung 4: apply the concept to a given scenario.\nRung 5: derive or design, for example write the pseudo-flow of a solution.\n\nGive me 2 questions per rung with answers hidden in a separate key.\nFirst ask me which rung I estimate I am on, then start one rung above\nmy answer and ask one question at a time.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The rungs map to Bloom's taxonomy, the standard model of cognitive depth, and starting one rung above your estimate keeps the session in the productive challenge zone."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Build a ladder for {TCP vs UDP}, declare rung 2, and climb from rung 3 until you hit a rung where you score below 70%; that is your real current level."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q10-how-do-i-track-my-correct-rate-per-rung",
      children: "Q10: How do I track my correct rate per rung?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The AI can maintain a session log in the conversation, but a permanent record belongs in a notebook or spreadsheet because conversation logs vanish. Log at minimum: date, topic, rung, questions attempted, correct count, and rate. The rule of thumb is 70% to stay, 85% to advance: below 70% means restudy the rung, above 85% means climb. Ask the AI to compute and format the log after every drill so the habit costs zero effort."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Keep a session log for me in this conversation.\nTable columns: date, topic, rung, questions, correct, rate.\nStart a new row for each drill I run and update the table.\nRules:\n- If my rate on a rung is below 70%, say: stay on this rung and give a fresh set.\n- If my rate is above 85%, say: advance to rung {next}.\n- After every row, print the table so I can copy it to my notebook.\n\nLog this drill I just finished:\nTopic: {topic}, rung: {rung}, correct: {correct} of {total}.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The threshold rules turn the AI into a coach that makes the advance-or-repeat decision for you, and the copy-paste table makes your notebook log effortless."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Run three drills on {DBMS indexing} at rungs 2, 3, and 4, ask the AI to print the accumulated log, and copy it into a notebook page."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q11-what-is-interleaving-with-ai-and-why-does-it-beat-blocked-practice",
      children: "Q11: What is interleaving with AI and why does it beat blocked practice?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Blocked practice drills one topic until it feels easy, which inflates your confidence because your brain knows what is coming. Interleaving mixes several topics in one session, forcing your brain to re-identify the topic before solving, which is exactly what happens in an interview where questions jump between subjects. AI makes interleaving trivial because one prompt can mix three topics and label each question, and the switching itself is the training."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Interleave drill. Pool of topics: {topic A}, {topic B}, {topic C}.\nAsk 12 questions in mixed order.\n\nRules:\n1. Never ask two questions on the same topic in a row.\n2. After I answer, switch to a different topic.\n3. Label every question with its topic, like [OS] or [CN] or [DB].\n4. Alternate difficulty: easy, medium, hard, repeating.\n5. Hints only, no full answers, unless I type SKIP.\n6. At the end, show my score per topic and per difficulty.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The no-repeat rule guarantees the brain must re-detect the topic each time, and per-topic scoring reveals which subject is actually weak rather than which one feels hardest."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Run the interleave drill on {OS, Computer Networks, DBMS} with 12 questions, then compare your per-topic scores with your single-topic quiz scores from Q7 to see where blocked practice fooled you."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q12-how-do-i-stop-the-ai-from-dumping-everything-on-one-topic-before-switching",
      children: "Q12: How do I stop the AI from dumping everything on one topic before switching?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Models love to finish a subject before moving on, so you need explicit guardrails: one question per reply, no previews, and a hard topic-switch after every answer. If the AI still groups questions, reply with a one-line correction that names the violated rule. You can also request a fixed rotation pattern, such as cycling through A, B, C in order, which is easier for the model to follow than random switching."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "One question per reply. Strict rules:\n1. After my answer, you MUST switch to a different topic from the pool.\n2. Never preview the next question. Never group questions.\n3. Rotation order: {topic A}, then {topic B}, then {topic C}, repeat.\n4. If I point out a rule violation, apologize in one line and continue from\n   the rule, not from the violation.\nPool: {topic A}, {topic B}, {topic C}. Start now.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " A deterministic rotation is easier for the model to enforce than randomness, and the apology rule converts rule breaks into a quick reset instead of a derailed session."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Run this guardrail prompt on {sorting, searching, hashing} and count how many rule violations occur in 12 questions; then run the same pool with the Q11 prompt and compare violation counts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q13-how-does-the-ai-spaced-repetition-scheduler-work",
      children: "Q13: How does the AI spaced-repetition scheduler work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The scheduler implements a simplified SM-2 algorithm: after every card you rate it again, hard, good, or easy, and the AI keeps a table of each card's rating and next review date. Again means you relearn now, hard means review tomorrow, good means review in 3 days, and easy means review in 7 days. Each morning you ask for the cards due today, and the due set automatically becomes your recall sprint, which closes the loop between the card factory and the commute quiz."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Act as my spaced-repetition scheduler.\nCards:\n{paste 10 to 20 cards}\n\nFor each card I will reply with exactly one of: again | hard | good | easy.\nMeaning:\n- again = forgot it, show it again now and relearn.\n- hard = barely remembered, review tomorrow.\n- good = remembered, review in 3 days.\n- easy = instant recall, review in 7 days.\n\nMaintain a table: card, last rating, next review date.\nWhen I type TODAY, show the cards due today as a quiz, one at a time,\nwith the same hint-only rules.\nStart with card 1 and wait for my rating after each card.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The rating maps directly to the SM-2 intervals that spaced-repetition research recommends, and the TODAY command turns the schedule into a concrete daily quiz list."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Feed it 15 cards from yesterday's Q4 factory run, rate every card honestly (including a few again ratings), then type TODAY and take the resulting quiz."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q14-how-do-i-rate-cards-without-gaming-my-own-schedule",
      children: "Q14: How do I rate cards without gaming my own schedule?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The rating is a self-report, so honesty is the whole system. The trap is rating good on a card you barely remembered because you want a shorter queue tomorrow; that is exactly how decks rot. Use the 10-second rule: if the answer arrives in under 10 seconds without hesitation, it is good or easy; if you stalled, it is hard; if you needed the hint, it is again. Keep the rating key visible during the session."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rating protocol for this session:\n- Answer before reading the back. If you peeked, the rating is again.\n- Under 10 seconds, no hesitation: good.\n- Instant, effortless: easy.\n- 10 to 30 seconds of struggle: hard.\n- Wrong, guessed, or peeked: again.\n\nRun the cards from {deck name} one by one. After I rate each card,\nupdate the schedule table and show me the next card.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The explicit protocol removes ambiguity from the rating, and the peek rule blocks the most common cheat, which is flipping the card before attempting recall."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Take 10 cards on {your current weak topic}, rate them honestly, then predict which three cards will come back tomorrow and check the AI's schedule against your prediction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q15-how-do-i-convert-my-own-notes-into-fill-in-the-blank-drills",
      children: "Q15: How do I convert my own notes into fill-in-the-blank drills?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Fill-in-the-blank drills are a middle ground between recognition and recall: the sentence provides structure, you supply the missing key term. Converting your own notes matters because your phrasing becomes the retrieval context, which is what you will see in exams. The prompt blanks out the most important word or phrase, keeps 40-60% of the sentence visible, and orders blanks so earlier ones support later ones."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Take my notes and turn them into fill-in-the-blank sentences.\nNotes:\n{paste your notes}\n\nRules:\n1. Blank out the most important word or phrase with ______.\n2. Keep 40 to 60 percent of the sentence visible so the sentence is\n   reconstructable.\n3. Order the blanks so earlier ones build on later ones.\n4. Provide the answer list at the end, shuffled.\nProduce 8 blanks.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Keeping most of the sentence visible preserves the context clues that make retrieval possible, and the shuffled answer list forces you to match meanings instead of order."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Run this on your {HTTP and HTTPS notes}, complete the 8 blanks from memory, and note which two blanks you missed; those two concepts go straight into the Q4 card factory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q16-what-is-mistake-driven-review-and-how-do-i-run-it",
      children: "Q16: What is mistake-driven review and how do I run it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Mistake-driven review feeds your wrong answers back into a targeted re-quiz, which is the fastest way to fix weak spots because you spend the session exactly where you failed. The AI re-tests the missed concept from multiple angles: the same concept reworded, the same concept from a new perspective such as a scenario instead of a definition, and one linking question that connects the miss to a topic you know well. The output is a score on your own mistakes, which is the most honest metric in this course."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Here are my wrong answers from the last quiz on {topic}:\nWrong question: {paste the question}\nMy answer: {paste my answer}\nCorrect answer: {paste the correction}\n\nCreate a targeted re-quiz:\n1. 5 questions that directly test the concepts I missed, reworded.\n2. 2 questions that test the SAME concept from a new angle, for example\n   a scenario instead of a definition.\n3. 1 question that links the missed concept to a topic I know well: {strong topic}.\nSame hint rules: hints only, no full answers, unless I type SKIP.\nTrack how many I fix this round and show the before/after score.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Rewording removes answer memorization, the new-angle questions test transfer rather than recall, and the linking question anchors the new concept into an existing knowledge structure."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " After your next Q7 exam drill, paste your three worst misses into this prompt and complete the re-quiz; aim for a before/after improvement of at least 2 fixed answers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q17-how-do-i-run-a-15-minute-recall-sprint-in-the-morning-commute",
      children: "Q17: How do I run a 15-minute recall sprint in the morning commute?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The sprint is a compressed quiz: 10 questions, 15 minutes, hints only on explicit request, with an aggressive pace. It is designed for the commute because it needs no notes, no setup, and fits inside a single train ride or bus trip. The transcript below shows the full loop: fast questions, a single hint request, and a score report that feeds the next day's schedule."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You: Sprint mode. Topic: {DB indexes}. 15 minutes, 10 questions.\n     Hints only if I say HINT. Go.\nAI: Q1: Why does an index speed up SELECT but slow down INSERT?\nYou: Because the index is an extra structure the database must update on every write.\nAI: Correct. Q2: What happens to a range query on an indexed column?\nYou: The index lets it read only the matching range instead of scanning the table.\nAI: Correct. Q3: When would the optimizer ignore a perfectly good index?\nYou: HINT.\nAI: Hint: think about selectivity and what percentage of rows match the filter.\nYou: When the query matches most of the table, scanning is cheaper than index lookups.\nAI: Correct, that is the low-selectivity case. Q4: What is a covering index?\nYou: An index that contains every column the query needs, so no table lookup.\nAI: Correct. Q5: Explain the trade-off of composite index column order.\nYou: Leftmost prefix rule: the order decides which queries can use the index.\nAI: Correct. ...\nAI: Sprint over. Score 9 of 10. Miss: Q3 needed one hint but you recovered.\n     Suggestion for tomorrow: 3 questions on index internals, harder level.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The tight 10-question structure with terse verdicts forces fast retrieval decisions, and the closing report identifies the exact gap for tomorrow's session."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Run the sprint every morning this week on {yesterday's chapter}, keeping a running score in your Q10 log; after 5 days, check whether your average score rose and your hint usage fell."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q18-what-is-the-recall-before-check-protocol",
      children: "Q18: What is the recall-before-check protocol?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The protocol is simple: before opening notes, an AI, or a video, write down everything you can recall on the topic. Only then do you check, and the check's job is purely to mark your dump: correct, missing, wrong. This makes the gap visible before any new information is added, and it turns review sessions into diagnostic sessions. The AI version of this protocol is the brain-dump grader below."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "I will give you a topic. I will recall in my head for 2 minutes,\nthen I will paste my brain dump.\nYour job:\n1. Grade the dump: mark what is correct, what is missing, what is wrong.\n2. Do not add new facts. Only mark my dump.\n3. Ask me 3 questions that probe the gaps you saw.\n4. At the end, give me the corrected outline to restudy, nothing more.\n\nTopic: {topic}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Delaying the check keeps the retrieval effort honest, and grading the dump before adding facts isolates your actual gaps from the new material."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Pick {a topic you studied last week}, brain-dump for 2 minutes before touching notes, paste the dump, and compare the AI's gap list with what you thought you knew."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q19-how-do-i-debrief-a-quiz-so-every-wrong-answer-becomes-a-card",
      children: "Q19: How do I debrief a quiz so every wrong answer becomes a card?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A quiz has value only if its mistakes change your study system, and the conversion step makes that explicit: every miss becomes at least one Anki card tagged with the error type. Concept gaps mean the material was never learned and need a restudy step before the card; recall slips mean the knowledge exists but needs repetition; careless errors mean the card should include the trap, for example the wrong option you chose. This turns the error taxonomy from Q8 into a machine that improves the deck."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Convert my quiz misses into Anki cards.\nMisses:\n{paste each missed question, my answer, and the correction}\n\nFor each miss produce:\n1. One basic card: front as the question, back as the correct answer in 2 lines.\n2. One cloze card testing the same idea.\n3. A tag naming the error type: concept-gap, recall-slip, or careless-error.\n\nKeep the back shorter than 2 lines. No commentary.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The error-type tag lets you sort the deck by failure mode, and the basic-plus-cloze pair tests each miss in both directions so the same gap is hit twice."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Debrief your next Q7 exam, run this prompt on the misses, import the new cards into Anki, and review only the concept-gap tagged cards tomorrow."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q20-how-do-i-chain-everything-into-a-60-minute-daily-loop",
      children: "Q20: How do I chain everything into a 60-minute daily loop?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " All the tools in this chapter compose into one daily routine: sprint, new-material quiz, error review, card production, and ladder climbing. The sprint warms up retrieval on yesterday's material, the Socratic round covers today's chapter, the re-quiz fixes yesterday's misses, the factory converts today's mistakes into cards, and the ladder deepens one topic. One prompt can generate the entire session plan and then run it step by step."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[New chapter study] --> B[Socratic round 15 min]\n    B --> C[Collect misses]\n    C --> D[Anki card factory]\n    D --> E[Spaced repetition schedule]\n    E --> F[Morning sprint uses due cards]\n    F --> G[Wrong answers feed back to C]\n    G --> B\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Build my daily recall loop for today.\n1. Sprint 15 min: 10 questions on {topic from yesterday}.\n2. Socratic round 15 min: {today's chapter}.\n3. Error review 10 min: targeted re-quiz on {yesterday's misses}.\n4. Card production 10 min: convert today's mistakes into Anki cards.\n5. Ladder 10 min: one rung of {topic ladder}.\nOutput the session plan as a checklist, then run item 1 now.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The loop closes at both ends: the sprint draws from the schedule, and the schedule is fed by the card factory, which is fed by the misses from every quiz."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " For one week, run this 60-minute loop daily and log only two numbers per day: sprint score and re-quiz improvement; then review the week's trend."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Socratic quizzer prompt turns any AI into a hint-only examiner, which is the highest-ROI tool in this course"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Anki card factory plus the TypeScript CSV generator converts any chapter into an importable deck in minutes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The exam generator produces five question types at three difficulty levels from a single prompt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The difficulty ladder forces progression from recall to application and derivation, with 70% and 85% thresholds driving advance decisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interleaving mixes topics to train topic detection, which is the real skill in mixed-subject interviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The spaced-repetition scheduler with again/hard/good/easy ratings produces a daily due-card list automatically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every quiz should end in the mistake-to-card pipeline, tagging misses as concept gap, recall slip, or careless error"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contradictions",
      children: "Contradictions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The methods in this chapter are not universally right. Read these before trusting the system blindly:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Active recall is proven; AI-generated quizzes are not. A badly generated MCQ can teach you a wrong fact with the confidence of a right one — verify question banks before mass-quizzing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For pure vocabulary or syntax, plain Anki beats Socratic quizzing. The Socratic quizzer is highest-ROI for concepts, not facts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interleaving slows you down in the short run. If your test is next week, blocked practice may score higher; interleaving wins retention, not speed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-rated card difficulty (again/hard/good/easy) is biased; learners systematically rate their own cards as easier than they are."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-questions",
      children: "Open Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What this chapter deliberately does not claim to know:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your correct-rate-per-rung numbers are self-rated, and overconfidence is one of the best-documented biases in psychology (Kahneman's work). Calibration is unmeasured here."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimal intervals for AI-generated cards are guesses; Anki's SM-2 algorithm was designed for user-made cards, not machine-generated ones."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Whether generated exams predict real exam performance is untested — that is your experiment to run."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Socratic quizzer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q1 master prompt with {topic}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Daily new-material quiz, every subject"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Material injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q2 \"read silently, do not summarize\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First quiz on a fresh chapter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rule enforcement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q3 \"STOP, we agreed hints only\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whenever the AI blurts answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anki card factory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q4 conversion prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After every chapter, before the commute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSV generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "npx ts-node anki-cards.ts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When you need an importable deck file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exam generator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q7 five-type prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly mock test per subject"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Difficulty ladder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q9 ladder prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deepening one topic over several days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interleave drill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q11 mixed-topic prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-interview mixed-subject practice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spaced repetition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q13 scheduler with TODAY command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every evening card session"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mistake re-quiz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q16 targeted re-quiz prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The day after any quiz with misses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recall sprint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q17 \"Sprint mode\" prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Morning commute, 15 minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Daily loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q20 60-minute plan prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full study day, all five phases"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1. What is the single most important rule in the Socratic quizzer prompt?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. Ask all questions at once to save time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. Reveal the answer immediately after a wrong attempt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. Give hints only and never the full answer unless the student types SKIP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. Switch topics after every question"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: C — hints only, full answer only on SKIP"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Withholding the full answer forces you to do the retrieval work, which is what creates the memory trace. Options A and B both destroy the retrieval effect."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2. What does the 25% cloze quota in the card factory achieve?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. It makes cards prettier"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. It forces a mix of recognition and recall-style cards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. It reduces the total number of cards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. It makes the CSV import faster"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: B — it forces a mix of card styles"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Cloze cards test reconstruction, basic cards test question-answer recall; the quota guarantees both types appear in every deck."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3. Which line in the Anki CSV header tells Anki which deck to put the cards in?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. #separator:tab"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. #html:false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. #deck:placement-os"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. front\tback\ttags"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: C — the #deck line"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The #deck line names the destination deck. The header row maps fields, and #separator:tab sets the column delimiter."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4. The exam generator produces which five question types?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. MCQ, True/False, Fill-in-the-blank, Scenario, Output prediction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. MCQ, Essay, Oral, Puzzle, Debate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. True/False, Match, Order, Essay, Code review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. Multiple select, Drag-drop, Timeline, Map, Ranking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: A — MCQ, True/False, Fill-in-the-blank, Scenario, Output prediction"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "These five cover recognition, judgment, recall, application, and code execution, which are the modes used in placement exams."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5. In the difficulty ladder, when should you advance to the next rung?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. When you feel comfortable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. When your correct rate is above 85%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. When you finish all questions regardless of score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. When the AI says the topic is complete"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: B — above 85% correct"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The rule of thumb is 70% to stay on a rung and 85% to advance; feeling comfortable is unreliable because of the Dunning-Kruger effect."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6. Why does interleaving beat blocked practice for interview prep?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. It covers more material per session"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. It trains the brain to detect the topic before solving, like real interviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. It makes questions easier to answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. It uses less AI token budget"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: B — it trains topic detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Interleaving forces your brain to identify the topic first, which is exactly the skill you need when an interview jumps between OS, networking, and DBMS."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7. In the spaced-repetition scheduler, what does a hard rating mean?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. Review again in 7 days"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. Review tomorrow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. Review in 3 days"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. Never review again"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: B — review tomorrow"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Hard means barely remembered: 1 day. Again means now, good means 3 days, easy means 7 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8. Which rating should you use if you peeked at the card back before answering?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. easy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. good"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. hard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. again"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: D — again"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Peeking means you did not retrieve the answer, so the card must be relearned; any other rating would let you cheat your own schedule."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9. What is the purpose of the error-type tag in mistake-to-card conversion?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. It decorates the deck with colors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. It lets you sort cards by failure mode, concept gap, recall slip, or careless error"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. It is required by Anki for import"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. It makes cards harder to guess"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: B — sorting by failure mode"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The tag lets you study concept gaps first because those are the ones that need restudy, not just repetition."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10. What is the correct order of the 15-minute recall sprint?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. Read notes, then answer questions, then grade"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. Fast questions, hints only on request, score report that feeds tomorrow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. Ask AI to explain the topic, then take one question"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. Generate cards, then rate them, then quiz"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: B — fast questions, hints on request, score report"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The sprint is retrieval-first with hints only when you explicitly ask, and the closing score report drives the next day's session."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run the Q1 Socratic quizzer on one full chapter of your hardest subject, 10 questions, no SKIP allowed, and log your score plus the confidence ratings the AI asks for."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feed one chapter into the Q4 card factory, run the Q5 TypeScript generator on the results, import the deck into Anki, and review it offline during tomorrow's commute."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate a hard five-type exam (Q7) on a topic you finished last week, answer all 10 in 15 minutes, and classify every miss as concept gap, recall slip, or careless error."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a difficulty ladder (Q9) for TCP vs UDP, climb from one rung above your estimate, and keep a Q10 log of three sessions with correct rates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run one interleave drill (Q11) mixing OS, Computer Networks, and DBMS, then compare per-topic scores with your single-topic scores to find where blocked practice fooled you."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For one week, run the 60-minute daily loop from Q20 and record only two numbers per day: sprint score and re-quiz improvement; review the trend on day 7."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Anki Manual — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.ankiweb.net/",
          children: "https://docs.ankiweb.net/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Importing text files into Anki — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.ankiweb.net/importing/intro.html",
          children: "https://docs.ankiweb.net/importing/intro.html"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Retrieval Practice: The Most Powerful Learning Strategy You're Already Using — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.learningscientists.org/blog/2016/6/23-1",
          children: "https://www.learningscientists.org/blog/2016/6/23-1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Spaced Repetition: A comprehensive overview — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gwern.net/spaced-repetition",
          children: "https://gwern.net/spaced-repetition"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Make It Stick: The Science of Successful Learning — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.makeitstick.net/",
          children: "https://www.makeitstick.net/"
        })]
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