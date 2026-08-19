"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[18445],{

/***/ 10161
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_powered_learning_ch_02_prompt_foundations_md_8c0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-powered-learning-ch-02-prompt-foundations-md-8c0.json
const site_docs_courses_ai_powered_learning_ch_02_prompt_foundations_md_8c0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-powered-learning/ch02-prompt-foundations","title":"Chapter 2: Prompt Foundations","description":"Last Updated 60–75 minutes","source":"@site/docs/courses/ai-powered-learning/ch02-prompt-foundations.md","sourceDirName":"courses/ai-powered-learning","slug":"/ai-powered-learning/ch02-prompt-foundations","permalink":"/ai-engineering-journey/ai-powered-learning/ch02-prompt-foundations","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"ch02-prompt-foundations","slug":"/ai-powered-learning/ch02-prompt-foundations","title":"Chapter 2: Prompt Foundations","sidebar_label":"Chapter 2: Prompt Foundations","sidebar_position":2},"sidebar":"course-ai-powered-learning","previous":{"title":"Chapter 1: The AI Learning System","permalink":"/ai-engineering-journey/ai-powered-learning/ch01-the-ai-learning-system"},"next":{"title":"Chapter 3: The Learn-Anything Blueprint","permalink":"/ai-engineering-journey/ai-powered-learning/ch03-learn-anything-blueprint"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-powered-learning/ch02-prompt-foundations.md


const frontMatter = {
	id: 'ch02-prompt-foundations',
	slug: '/ai-powered-learning/ch02-prompt-foundations',
	title: 'Chapter 2: Prompt Foundations',
	sidebar_label: 'Chapter 2: Prompt Foundations',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Prompt Foundations';

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
  "value": "Q1: What is the universal 5-part prompt, and what does each part do?",
  "id": "q1-what-is-the-universal-5-part-prompt-and-what-does-each-part-do",
  "level": 2
}, {
  "value": "Q2: What does a full worked example look like, learning Kafka with the 5 parts?",
  "id": "q2-what-does-a-full-worked-example-look-like-learning-kafka-with-the-5-parts",
  "level": 2
}, {
  "value": "Q3: What is the master study prompt, and how do I use it daily?",
  "id": "q3-what-is-the-master-study-prompt-and-how-do-i-use-it-daily",
  "level": 2
}, {
  "value": "Q4: What is the prompt improvement loop: diagnose, redraft, retest?",
  "id": "q4-what-is-the-prompt-improvement-loop-diagnose-redraft-retest",
  "level": 2
}, {
  "value": "Q5: How do I diagnose a weak prompt output quickly?",
  "id": "q5-how-do-i-diagnose-a-weak-prompt-output-quickly",
  "level": 2
}, {
  "value": "Q6: What are the 8 anti-slop rules for study prompts?",
  "id": "q6-what-are-the-8-anti-slop-rules-for-study-prompts",
  "level": 2
}, {
  "value": "Q7: How do I control output format, starting with tables?",
  "id": "q7-how-do-i-control-output-format-starting-with-tables",
  "level": 2
}, {
  "value": "Q8: How do I get JSON or CSV output, including Anki-ready cards?",
  "id": "q8-how-do-i-get-json-or-csv-output-including-anki-ready-cards",
  "level": 2
}, {
  "value": "Q9: What is chain-of-thought prompting for learning, and how do I use it?",
  "id": "q9-what-is-chain-of-thought-prompting-for-learning-and-how-do-i-use-it",
  "level": 2
}, {
  "value": "Q10: How do few-shot examples improve study prompts?",
  "id": "q10-how-do-few-shot-examples-improve-study-prompts",
  "level": 2
}, {
  "value": "Q11: What is context injection, and how do I inject my own notes and failed attempts?",
  "id": "q11-what-is-context-injection-and-how-do-i-inject-my-own-notes-and-failed-attempts",
  "level": 2
}, {
  "value": "Q12: What is the level ladder, and why is starting at the expert level wrong?",
  "id": "q12-what-is-the-level-ladder-and-why-is-starting-at-the-expert-level-wrong",
  "level": 2
}, {
  "value": "Q13: How do I make AI ask ME questions instead of lecturing?",
  "id": "q13-how-do-i-make-ai-ask-me-questions-instead-of-lecturing",
  "level": 2
}, {
  "value": "Q14: What is prompt chaining, and how do I chain a full study session?",
  "id": "q14-what-is-prompt-chaining-and-how-do-i-chain-a-full-study-session",
  "level": 2
}, {
  "value": "Q15: What are the 8 most common prompt mistakes?",
  "id": "q15-what-are-the-8-most-common-prompt-mistakes",
  "level": 2
}, {
  "value": "Q16: How do I grade AI output instead of just accepting it?",
  "id": "q16-how-do-i-grade-ai-output-instead-of-just-accepting-it",
  "level": 2
}, {
  "value": "Q17: How do I tune AI output without touching settings: length, difficulty, tone?",
  "id": "q17-how-do-i-tune-ai-output-without-touching-settings-length-difficulty-tone",
  "level": 2
}, {
  "value": "Q18: How do I defend against hallucinations in study output?",
  "id": "q18-how-do-i-defend-against-hallucinations-in-study-output",
  "level": 2
}, {
  "value": "Q19: How do I build a personal prompt library?",
  "id": "q19-how-do-i-build-a-personal-prompt-library",
  "level": 2
}, {
  "value": "Q20: How do I manage context limits when prompts get long?",
  "id": "q20-how-do-i-manage-context-limits-when-prompts-get-long",
  "level": 2
}, {
  "value": "Q21: What is the prompt template builder, and how do I automate placeholder filling?",
  "id": "q21-what-is-the-prompt-template-builder-and-how-do-i-automate-placeholder-filling",
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
        id: "chapter-2-prompt-foundations",
        children: "Chapter 2: Prompt Foundations"
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
      children: "Every AI-powered learning system from Chapter 1 runs on prompts, and most learners use prompts that are too vague to unlock real depth. This chapter teaches the engineering behind prompts: the universal 5-part structure, the anti-slop rules, format control, level ladders, and prompt chaining, all tuned for studying and placement prep. By the end you will have a reusable master study prompt, a prompt library, and a TypeScript template builder that fills your prompts with one command."
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
          }), " — your personal master study prompt (all 5 parts filled in) plus the first 5 entries of your prompt library."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " Chapter 1. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 3."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build any study prompt from the universal 5 parts: Role, Context, Task, Format, Constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a master study prompt that produces structured, level-fitted lessons"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run the prompt improvement loop: diagnose, redraft, retest"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the 8 anti-slop rules to kill generic AI mush"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Control output format for tables, JSON, and Anki-ready CSV"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use chain-of-thought, few-shot examples, and context injection correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Climb the level ladder from ELI5 to expert without starting at the top"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chain 4 to 6 prompts into a full study session and avoid the 8 common mistakes"
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
            children: "5-part prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every strong prompt has Role, Context, Task, Format, Constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write all 5 parts before pressing send"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-slop rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic prompts produce generic answers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ban filler and demand examples, tradeoffs, and limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Format control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Format part decides table, JSON, or CSV output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Say the exact format and the exact columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Level ladder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start at ELI5 and climb, never at expert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level is a prompt parameter, not a personality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Question-first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI should quiz you, not lecture you"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flip the default: questions before explanations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One session equals 4 to 6 linked prompts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan the chain before the first message"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    P1[Draft Prompt] --> O1[Weak Output]\n    O1 --> D[Diagnose]\n    D --> R1[Redraft]\n    R1 --> T1[Retest]\n    T1 --> Q{Good Enough?}\n    Q -->|No| D\n    Q -->|Yes| S[Use and Archive]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q1-what-is-the-universal-5-part-prompt-and-what-does-each-part-do",
      children: "Q1: What is the universal 5-part prompt, and what does each part do?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Every strong prompt has five parts. Role tells the model who it is, such as \"interview coach\" or \"strict grader\", which sets the style and priorities. Context gives it what it needs: your level, your syllabus, your deadline, your past attempts. Task states exactly what you want done, in one imperative sentence. Format describes the shape of the answer: table, JSON, list, or transcript. Constraints are the rules: no filler, no emojis, max N lines, cite sources, hide answers. Parts 1 and 4 are what most people skip, and they are exactly what separates a 3/10 output from a 9/10 output. The master template below is the skeleton you will reuse for every study prompt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You are a {role}. Here is my context: I am a {level} learner preparing for {goal}.\nMy syllabus includes {syllabus topics}. My deadline is {deadline}.\nTask: {one imperative sentence describing the exact job}.\nFormat: {table | JSON | list | transcript with columns or keys specified}.\nConstraints: {ban filler, max length, no emojis, no praise, hide answers, cite sources if unsure}.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The five slots force you to think about output shape and boundaries before the model thinks for you. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " take your last prompt from this week and rewrite it with all 5 parts filled in, then compare the outputs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q2-what-does-a-full-worked-example-look-like-learning-kafka-with-the-5-parts",
      children: "Q2: What does a full worked example look like, learning Kafka with the 5 parts?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Here is the same template applied to a real topic, showing how each part changes the model's behavior. The Role makes it a placement-oriented tutor, the Context pins your level and goal, the Task asks for a specific 3-section lesson, the Format fixes structure, and the Constraints forbid the generic mush. Notice the difference from \"explain Kafka\": this prompt demands examples, an analogy, and an interview question, which is the difference between reading and studying."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User: You are a placement interview tutor for backend and systems roles. I am a beginner-to-intermediate\nlearner, comfortable with Java and REST APIs, preparing for software engineering interviews.\nI know what a message queue is but have never used Kafka. I have a 3-week deadline before my first\nsystems-design round. Task: teach me Kafka in 3 sections: the core model (topics, partitions,\noffsets, consumer groups), one real-world example of how a payment system uses it, and the 3 most\ncommon interview questions with model answers. Format: use headings for the 3 sections, keep each\nsection under 10 lines, end with a 3-line summary. Constraints: no filler, no praise, no analogies\nthat involve animals, one analogy maximum, and hide the interview answers behind a section\ntitled \"ANSWERS\" so I can test myself first.\n\nAI: ## 1. The core model\nKafka is a distributed log. Producers append events to a topic; a topic is split into partitions;\neach event gets an offset, a permanent position in the log. Consumers read the log at their own\npace, and a consumer group splits partitions between its members so each event is read by exactly\none consumer in the group. The log keeps events even after they are read, which is why replay is\npossible: a new consumer starts at offset 0 and reads history.\nAnalogy: a train logbook. Every station event is written to the log in order, every train crew\nreads it at their own speed, and the pages are never torn out after reading.\n## 2. A payment system example\nAn order service produces \"order created\" events to the topic \"orders\". Three downstream\nconsumers, fraud check, inventory, and notification, form separate consumer groups. Fraud check\nis slow but can read at its own pace because Kafka never deletes read events; notification can\nlag without blocking the producer. If fraud check fails, it can replay its partition from the\nlast committed offset instead of losing events.\n## 3. Interview questions\n1. How are partitions and consumer groups related? 2. How does Kafka guarantee order within a\npartition? 3. What happens when a consumer dies mid-processing?\n## ANSWERS\n1. A topic is split into partitions; each partition is consumed by exactly one consumer within a\ngroup, so a group with fewer consumers than partitions leaves partitions idle, and a group with\nmore consumers than partitions has idle consumers. 2. Order is guaranteed within a partition\nbecause the log position, the offset, is strictly sequential; producers assigning a key route\nevents for one entity to the same partition. 3. On death, the group rebalances: the partition\nis reassigned, and the new consumer resumes from the last committed offset, so the risk is\nduplicate processing rather than lost events, which is why consumers should be idempotent.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The 5 parts turned a generic \"explain Kafka\" into a testable study session with a built-in self-quiz. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " rewrite this transcript for your own topic, GraphQL, Redis, or any syllabus item, keeping all 5 parts and the ANSWERS section pattern."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q3-what-is-the-master-study-prompt-and-how-do-i-use-it-daily",
      children: "Q3: What is the master study prompt, and how do I use it daily?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The master study prompt is one copy-paste block that turns any topic into a full study session: lesson, analogy, examples, drills, quiz, and gap analysis. It combines all 5 parts and bakes in the pipeline from Chapter 1, so one message produces a complete micro-loop. Keep it saved in your notes app and change only the three placeholders: topic, level, and goal. After the AI answers, your only job is the drills and quiz; the prompt guarantees the structure, you supply the effort."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You are a {level} tutor for {goal}. Context: I study {minutes} minutes per session, my weak\nareas are {weak areas}, and I am preparing for {target company or role}. Today's topic: {topic}.\nTask: run a complete study session in this order:\n1. LESSON: teach the core idea in 10 lines with one real-world analogy.\n2. EXAMPLES: give 2 concrete examples with numbers or code-like steps.\n3. DRILLS: generate 3 practice problems of increasing difficulty, no answers shown.\n4. QUIZ: 3 multiple-choice questions on this topic.\n5. GAPS: after I answer the drills and quiz, list my gaps as a ranked list.\nFormat: use numbered sections exactly as above, answers only in a final section titled\n\"ANSWERS TO 3 AND 4\". Constraints: no filler, no praise, no emojis, stay under {word limit}\nwords, and never reveal drill or quiz answers before I ask.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " One prompt produces the entire pipeline in a single thread, so daily study never renegotiates structure. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " save this prompt now, run it tonight on the topic from your velocity tracker's weakest list, and complete the drills without scrolling to ANSWERS."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q4-what-is-the-prompt-improvement-loop-diagnose-redraft-retest",
      children: "Q4: What is the prompt improvement loop: diagnose, redraft, retest?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Prompts are code, and bad output means a bug in the prompt, not a bad model. The loop has three steps. Diagnose: read the weak output and find which of the 5 parts failed, for example vague Task (explain is not a task), missing Constraints (no length or ban list), or wrong Format (you said explain, it gave an essay). Redraft: change exactly one part, never three at once. Retest: run the new prompt and compare against the old output on a rubric. Iterate until the output passes; archive the final version in your prompt library, because a working prompt is an asset you will reuse."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "I ran this prompt: {paste your prompt}. I got this output: {paste the output}.\nDiagnose it for me. For each of the 5 parts (Role, Context, Task, Format, Constraints),\nsay: worked, or failed and why, in one line each. Then give me a redrafted prompt that fixes\nonly the two worst failures, with the changed parts marked with [CHANGED]. Then list the 3\nchecks I should run on the next output to know it worked.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The diagnosis prompt turns vague frustration (\"it's all generic\") into a part-by-part bug report you can act on. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " take your weakest prompt from this week, run this loop twice, and archive the final draft with a name like \"LESSON-ARRAYS-V2\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q5-how-do-i-diagnose-a-weak-prompt-output-quickly",
      children: "Q5: How do I diagnose a weak prompt output quickly?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Run the output through a 30-second checklist. Is the answer generic enough to apply to any topic? Then the Task lacked specificity and Constraints lacked bans. Is it a wall of text with no structure? Then Format was missing. Is it too advanced or too childish? Then Context (your level) was wrong or missing. Does it sound confident but feel off? Then Constraints needed a \"cite sources or mark uncertain\" rule. Most weak prompts fail in exactly one part, so identify that part and redraft only it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Evaluate this output: {paste output}. Apply this checklist and answer yes or no per item:\n1. Could this answer apply to any topic (generic)?\n2. Is it a solid wall of text with no structure?\n3. Is the difficulty clearly mismatched to my stated level?\n4. Does it contain claims with no sources or reasoning?\n5. Does it use filler, praise, or vague phrases like \"delve\" or \"in conclusion\"?\nThen, for every yes, tell me which of the 5 prompt parts to fix and give the one-line fix.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " A binary checklist replaces \"this feels wrong\" with a concrete list of failing parts. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " run the checklist on the last 3 AI outputs you produced and fix the part that fails most often."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q6-what-are-the-8-anti-slop-rules-for-study-prompts",
      children: "Q6: What are the 8 anti-slop rules for study prompts?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Slop is generic AI mush: filler, fake structure, and safe sentences that teach nothing. Rule 1: ban filler words explicitly (delve, moreover, in conclusion). Rule 2: demand at least N concrete examples with real numbers. Rule 3: force tradeoffs, every technique must get one strength and one weakness. Rule 4: ban praise, no \"great question\" or \"good point\". Rule 5: cap length so the model cannot pad. Rule 6: demand a claim-to-evidence ratio, one reason per claim. Rule 7: require an application step, what to do differently tomorrow. Rule 8: end with a test, never let the output end with a summary."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Teach me {topic} with these anti-slop rules enforced strictly:\n1. Banned words: delve, moreover, furthermore, in conclusion, it is important to note, landscape.\n2. Minimum 3 concrete examples, each with real numbers or steps.\n3. Every concept gets one strength and one limitation, in a table.\n4. No praise, no \"great question\", no motivational sentences.\n5. Maximum {word limit} words.\n6. Every claim gets one reason or source reference.\n7. End with an APPLICATION section: one thing I should do with this knowledge tomorrow.\n8. Do not end with a summary paragraph.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Each rule targets a specific slop behavior, so the output is forced to carry content instead of style. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " run this on your next topic, then run the same topic with no constraints, and count which output teaches more per line."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q7-how-do-i-control-output-format-starting-with-tables",
      children: "Q7: How do I control output format, starting with tables?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Format part is a contract: say the exact shape, the exact columns, and the exact number of rows, and the model will fill it. Tables are the workhorse for comparisons, tradeoffs, and revision sheets. The trick is specifying columns and row count, because \"make a table\" alone produces random columns. For a comparison table, always list the columns you want and demand one row per item."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Create a comparison table for {topic A} vs {topic B} for an interview. Columns exactly:\nAspect | {topic A} | {topic B} | Interview Answer (one line).\nAspects to cover, in this order: definition, core mechanism, when to use, when NOT to use,\nperformance note, typical interview question. Exactly 6 rows. No extra columns, no header\nfluff, no text outside the table, and one sentence per cell.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Columns, row order, and row count are all specified, so the model cannot drift into essays. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " generate this table for your next two competing topics, then quiz yourself by covering the Interview Answer column."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q8-how-do-i-get-json-or-csv-output-including-anki-ready-cards",
      children: "Q8: How do I get JSON or CSV output, including Anki-ready cards?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " JSON and CSV are the machine formats: JSON for anything you want to process with code, CSV for importing into Anki. The Anki CSV format is simple: front, back, tag, one card per line, so ask for exactly that column order and demand valid CSV escaping. The JSON contract works the same way: name the keys, the nesting, and the number of objects. Say \"valid JSON\" explicitly and demand nothing else in the output, because a stray markdown code fence breaks your parser."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Generate Anki-ready CSV for topic {topic}. Columns, in this exact order: front, back, tag.\nExactly {count} cards, one per line. Front: a cloze-style or question card from this topic.\nBack: a 1-line answer with a short example. Tag: \"course\" plus the topic name in lowercase.\nRules: valid CSV with quotes around fields containing commas, no markdown formatting,\nno code fences, no header row, no extra text before or after the data.\nHere is the topic material: {paste your notes}.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The column contract plus the \"no extra text\" rule produces a file Anki imports directly, turning every lesson into spaced repetition. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " run this on your last lesson, import the CSV into Anki via File, Import, and review the cards tomorrow on your commute."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q9-what-is-chain-of-thought-prompting-for-learning-and-how-do-i-use-it",
      children: "Q9: What is chain-of-thought prompting for learning, and how do I use it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Chain-of-thought asks the model to show its reasoning steps instead of jumping to an answer, which for learning serves two purposes: it models how an expert thinks through a problem, and it exposes the model's assumptions so you can question them. The learning version adds a twist: \"show your reasoning, then quiz me on it.\" You get a worked solution path, then a test that forces you to reproduce the path yourself. Never paste the full reasoning chain into your notes; work the quiz first, then compare."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User: Solve this problem step by step, showing every intermediate step and why you chose it:\n\"Design a system that must serve {qps} requests per second with a {p99} latency target,\nstoring {data size} of user data.\" Show your reasoning out loud before you conclude.\nAfter your solution, quiz me on it: ask me the 3 decisions you think I would get wrong,\nand grade my answers against your reasoning. Do not reveal the quiz before I answer.\n\nAI: Reasoning chain:\n1. Start from QPS: {qps} requests per second. A single instance handles roughly\n1,000 to 5,000 simple requests per second, so this workload needs horizontal scaling.\nI choose a stateless API layer behind a load balancer, which is the default move.\n2. Storage: {data size} of user data is small enough for a SQL database with replication;\na NoSQL store only earns its complexity at much larger scale or unusual access patterns.\n3. Latency: p99 of {p99} requires caching the hot read set; I put a cache in front of the\ndatabase and design for cache miss spikes, because cold caches are where p99 dies.\n4. Failure: I add read replicas and a primary-failover plan; the cost is write consistency,\nso I must state the consistency choice explicitly.\nSolution summary: stateless API layer, load balancer, SQL primary with read replicas,\ncache in front, and an explicit consistency tradeoff.\nNow, the quiz:\n1. Why did I reject NoSQL for this workload? 2. Where does p99 usually break in this design?\n3. What is the consistency tradeoff of the read replicas?\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The reasoning chain is a worked example of expert decision-making, and the quiz converts it from reading material into retrieval practice. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " run this on a system-design prompt of your own, answer the 3 quiz questions in writing before reading the AI's grading."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q10-how-do-few-shot-examples-improve-study-prompts",
      children: "Q10: How do few-shot examples improve study prompts?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A few-shot prompt shows the model 1 to 3 complete examples of the output you want before asking for a new one. It works because models imitate patterns: one good example teaches the format, the tone, and the depth better than a paragraph of instructions. For study prompts, few-shot is the best way to teach a rubric, a card style, or a question format. Keep examples short and perfect, because the model copies flaws as eagerly as strengths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Generate 5 interview questions for {topic}, following exactly this style.\nExample 1: \"How would you detect a memory leak in a long-running service?\" Answer style:\none-line diagnosis, one tool, one prevention.\nExample 2: \"What happens to an HTTP request when the server is overloaded?\" Answer style:\nthree-line story from client to server to failure, then one mitigation.\nRules: same question style, same answer style, questions must target {level} level,\nno repetition of the examples, and one question per numbered line.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Two examples lock the pattern, so the 5 new questions come out in the exact style and depth you modeled. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " write 2 example questions in your own words for your target company, paste them as few-shots, and compare the generated 5 against your previous generic attempts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q11-what-is-context-injection-and-how-do-i-inject-my-own-notes-and-failed-attempts",
      children: "Q11: What is context injection, and how do I inject my own notes and failed attempts?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Context injection is pasting your real material into the prompt so the model answers from your world, not from generic knowledge. The three highest-value injections are your syllabus, your own notes, and your failed attempt at a problem. A failed attempt is the most powerful, because \"here is what I did, grade it\" produces feedback, while \"solve this\" produces a lecture. Keep injections short: a 200-line notes dump buries your actual question, so paste the relevant section plus a one-line pointer to the rest."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Here is my context. My notes on {topic}: {paste 10-30 lines of your notes}.\nMy failed attempt: {paste your attempt, code or reasoning}.\nMy task: grade my attempt against these notes. Tell me: what I got right (with the note line\nthat proves it), what I got wrong (with the correction), and the one concept from my notes\nI clearly misunderstood. Then ask me to redo the attempt in my own words before you show\nthe model answer. Keep your grade under 15 lines.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Grading against your own notes makes the feedback verifiable and forces you to reconstruct the fix instead of copying it. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " next time you fail a DSA problem, paste your attempt plus your notes into this prompt and redo the problem after the grade."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q12-what-is-the-level-ladder-and-why-is-starting-at-the-expert-level-wrong",
      children: "Q12: What is the level ladder, and why is starting at the expert level wrong?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The level ladder has 4 rungs: ELI5 (a 10-year-old), student (school level), graduate (college level), and expert (practitioner level). Starting at expert is wrong because you skip the conceptual skeleton, so you memorize jargon without a frame to hang it on, and you cannot debug your own understanding when an explanation is too deep. The right order is bottom-up with checkpoints: get the ELI5, explain it back, climb one rung, explain again, until the expert rung gives you the interview vocabulary. Each rung reuses the previous one, which is exactly how your memory is built."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Teach me {topic} using the level ladder, one rung per message:\n1. ELI5: explain it as if I am 10, using one household analogy, 6 lines max.\n2. Student: add the first real terms, still with everyday examples, 8 lines max.\n3. Graduate: add the mechanism, the formulas or structures, and one real use case.\n4. Expert: add the interview-ready details: tradeoffs, pitfalls, and one deep question.\nAfter each rung, ask me to explain the rung back in 3 lines before you continue.\nDo not advance a rung until my 3-line explanation is correct.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The checkpoint rule makes the model gate progress on your retrieval, so the ladder actually builds understanding instead of dumping 4 lectures. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " run the ladder on a topic you currently \"know\", and notice which rung your 3-line explanations get wrong."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q13-how-do-i-make-ai-ask-me-questions-instead-of-lecturing",
      children: "Q13: How do I make AI ask ME questions instead of lecturing?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Question-first prompts flip the default: instead of \"teach me X\", say \"do not teach me anything, interview me on X.\" The model becomes a Socratic examiner that probes your existing knowledge, finds the gaps, and only then fills them. This is the strongest single prompt for placement prep because it trains retrieval under pressure, which is what interviews are. Use it on topics you think you already know; the gaps it finds are usually embarrassing and always useful."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User: Interview me on {topic} as if you are a hiring manager. Rules:\n1. Do not teach me anything before I answer.\n2. Start with 3 questions of increasing difficulty: easy, medium, hard.\n3. After each of my answers, grade it in 2 lines and ask exactly one follow-up question\nbased on my answer.\n4. Do not reveal the full model answer until I have answered all 3 questions plus follow-ups.\n5. If my answer is wrong, mark it WRONG and give a one-line correction.\nTopic: rate limiting. Begin.\n\nAI: Question 1 (easy): What is rate limiting, and at which layer of an API stack would you\nplace it? \n(You answer.)\nQuestion 2 (medium): A client sends 100 requests per second; your limit is 50. Show the\nalgorithm you would use to decide which requests pass.\n(You answer.)\nQuestion 3 (hard): How does rate limiting interact with a horizontally scaled set of API\ninstances, and what problem does a distributed counter introduce?\n(You answer.)\nGrading and follow-ups appear after each answer, then this final summary: the model answer\nfor all three questions, your WRONG marks, and the 3 Anki cards you should create tonight.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The grading and follow-up rules keep the session exam-like, and the closing summary converts the session into revision material. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " run this on your next \"I know this\" topic and write down the 3 wrong or shaky answers as your next study targets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q14-what-is-prompt-chaining-and-how-do-i-chain-a-full-study-session",
      children: "Q14: What is prompt chaining, and how do I chain a full study session?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Prompt chaining breaks one study goal into 4 to 6 sequential prompts, where each message consumes the previous output. Chains beat one giant prompt when a task has stages: a giant prompt overloads context and the model forgets your constraints halfway through. The standard study chain is Preflight, Learn, Practice, Test, Debrief. You keep the same thread so the model remembers everything, and each step's output feeds the next step's input."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant U as You\n    participant A as AI Tutor\n    U->>A: Step 1 Preflight: goal, level, constraints\n    A-->>U: Scope and lesson plan\n    U->>A: Step 2 Learn: 10-minute lesson with examples\n    A-->>U: Lesson and one analogy\n    U->>A: Step 3 Practice: generate drills\n    A-->>U: 5 drills with answers hidden\n    U->>A: Step 4 Test: quiz me closed-book\n    A-->>U: 5 questions, then grading\n    U->>A: Step 5 Debrief: grade my answers\n    A-->>U: Gap list and Anki cards\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Each step has a single deliverable, so the session is a conveyor belt: scope, lesson, drills, quiz, gaps. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " run the chain above on one topic this week and note whether the Debrief gap list matches the weak topics in your velocity tracker."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q15-what-are-the-8-most-common-prompt-mistakes",
      children: "Q15: What are the 8 most common prompt mistakes?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Mistake 1: vague goals, \"help me with DSA\" instead of a specific task. Mistake 2: no format, so the answer shape is whatever the model felt like. Mistake 3: no constraints, so length and style run free. Mistake 4: one-shot-and-give-up, one weak output ends the technique instead of starting the improvement loop. Mistake 5: dumping context, a 300-line paste that buries the question. Mistake 6: asking for everything at once, ten questions in one message. Mistake 7: ignoring the answer, pasting model output into notes without doing the retrieval. Mistake 8: prompt-gasm, rewriting the whole prompt on every failure instead of changing one part."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mistake"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "One-line fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vague goal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"help me with SQL\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"teach me the 4 join types with one example each\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"explain Redis\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"use a table with 5 columns\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"write a lesson\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"max 200 words, no filler, hide answers\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "One-shot and quit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "one weak answer, abandon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "run the diagnose-redraft-retest loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context dump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300 lines then a question"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "paste 10-30 lines, point to the rest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Everything at once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 questions in one message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "chain 4 to 6 prompts instead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ignoring the answer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "notes grow, recall flat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "quiz yourself on the output same day"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt-gasm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rewrite everything per failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "change exactly one part per retest"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Naming the mistake tells you the fix: each row is a symptom-to-repair mapping. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " grade your last 10 prompts against this table and fix the row that appears most."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q16-how-do-i-grade-ai-output-instead-of-just-accepting-it",
      children: "Q16: How do I grade AI output instead of just accepting it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Treat AI output like a junior developer's PR: review it against a rubric before you merge it into your brain. Grade on accuracy (facts you can verify), relevance (answers the actual task), level fit (matches your ladder rung), and actionability (ends in a test or next step). Score each out of 10, reject anything below 7 on accuracy, and run the diagnose-redraft loop on anything below 7 on relevance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Grade this AI output for me: {paste the output}.\nRubric: Accuracy (out of 10, with one claim to verify), Relevance (out of 10, does it answer\nmy task: {paste task}), Level fit (out of 10, my level is {level}), Actionability (out of 10,\ndoes it end in practice or a test).\nGive a total out of 40, a verdict (ship, fix, or reject), and if not ship, the one prompt\nchange that would fix it.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " A scored rubric turns \"this feels useful\" into a ship/fix/reject decision with an explicit reason. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " grade your last study output now, and if the verdict is fix, run the suggested one-line change immediately."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q17-how-do-i-tune-ai-output-without-touching-settings-length-difficulty-tone",
      children: "Q17: How do I tune AI output without touching settings: length, difficulty, tone?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Every tuning knob can be expressed in natural language inside the prompt, so you never need the settings panel. Length: \"max N lines\" or \"exactly 5 sentences\". Difficulty: your ladder rung plus a constraint like \"assume I do not know joins\". Tone: \"like a strict reviewer\", \"no praise\", \"treat me like a peer\". The reliable pattern is state the knob, the value, and the consequence: \"if I get a quiz question wrong, stop and re-teach that concept.\" Settings in the app are session-wide; prompt knobs are per-message, which is more precise."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Answer with these knobs set for {topic}:\n- Length: exactly {min} to {max} lines, no more.\n- Difficulty: {level} rung, and if my level seems off, say so instead of adjusting silently.\n- Tone: {tone}, no praise, no motivational sentences.\n- Feedback rule: after any wrong answer I give, stop and re-teach that exact concept in 3 lines.\n- Pace: {fast | normal | slow}, where slow means one concept per message.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Knob lines act like typed parameters: the model applies them deterministically instead of guessing your preferences. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " run one topic twice, once with slow pace and once with fast, and keep the one whose session quiz scores were higher."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q18-how-do-i-defend-against-hallucinations-in-study-output",
      children: "Q18: How do I defend against hallucinations in study output?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Treat every AI fact as a draft until verified, especially in topics you cannot check yourself. Three defenses: demand sources (\"name the RFC, docs page, or paper\"), demand uncertainty flags (\"if you are not certain, mark it UNCERTAIN\"), and cross-check with Perplexity or the official docs for anything you will memorize. Interview damage from hallucination is real: you will answer confidently and wrong. Build the verification step into your review loop so facts are checked the same day they are learned."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "I am about to memorize facts about {topic}. List the 5 most important facts an interviewer\nwould test. For each fact: state it, then either give a source name (documentation page,\nRFC, spec, official docs) or mark it UNCERTAIN if you cannot. If a fact is commonly\nmisstated in tutorials, flag it with MISLED and explain the correct version.\nThen list 3 facts you think I should double-check myself before memorizing.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The source-or-uncertainty contract forces the model to separate its confident knowledge from its guesses. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " run this on the facts you learned this week, and verify the UNCERTAIN and MISLED rows in the official docs today."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q19-how-do-i-build-a-personal-prompt-library",
      children: "Q19: How do I build a personal prompt library?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A prompt library is a folder of saved prompts, one file per prompt, named by job: LESSON, DRILLS, QUIZ, ANKI, GRADER, LADDER, INTERVIEW. Each file holds the 5-part prompt plus a usage note: when to run it, what placeholders to fill, and the rubric it passes. The library is the payoff of the improvement loop: every prompt you iterate to \"ship\" gets archived, and over a month you accumulate 10 to 15 prompts that cover the entire course. Store it in a version-controlled folder, because prompts are code assets with history."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Convert my saved prompts into a clean library. Here are my drafts: {paste your prompts}.\nFor each: give me the filename (kebab-case, job-based), the final 5-part prompt text,\na one-line WHEN TO USE note, and the placeholders it needs. Order the library by study\nflow: plan, learn, drill, quiz, review. Flag any two prompts that overlap so I can merge them.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " A named, deduplicated library turns scattered chats into reusable assets that make every future topic faster. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " create the folder tonight, save your 3 best prompts from this week, and set the target of 10 prompts by month end."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q20-how-do-i-manage-context-limits-when-prompts-get-long",
      children: "Q20: How do I manage context limits when prompts get long?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " When your material outgrows the context window, compress before you paste. Three techniques: summarize-then-paste (ask the model to summarize your notes into 20 lines, then paste that summary into the real prompt), chunk-by-question (paste only the section the question needs), and thread-per-topic (a fresh thread resets context, so long courses run better as one thread per topic). The symptom of context overload is the model forgetting your early instructions mid-session; when that happens, do not add more text, cut context instead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "My notes on {topic} are longer than the context window. Summarize them into exactly 20 lines\nthat preserve: the definitions, the 3 most important examples, the common pitfalls, and any\nnumbers or formulas. Then I will paste this summary into my study prompt, so optimize for\ninformation density, not style. Here are my notes: {paste the relevant section}.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " A 20-line summary carries the syllabus while keeping the model focused on your actual question. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " the next time a session degrades mid-thread, restart with a compressed summary and a fresh thread, and compare answer quality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q21-what-is-the-prompt-template-builder-and-how-do-i-automate-placeholder-filling",
      children: "Q21: What is the prompt template builder, and how do I automate placeholder filling?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The template builder is a tiny TypeScript tool that stores your master prompts and fills {placeholders} with values, so you never retype the 5-part skeleton. It also reports missing placeholders before you send, which prevents the classic mistake of sending a prompt with empty slots. Store templates as plain strings in the code, run it before each session, and paste the filled prompt into your chat app. This is the automation layer of your prompt library: library for humans, builder for speed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Template = {\n  name: string;\n  text: string;\n};\n\nconst templates: Template[] = [\n  {\n    name: \"lesson\",\n    text: \"You are a {level} tutor for {goal}. Teach me {topic} in 10 lines with one analogy, \" +\n      \"then 3 drills, then a quiz. Format: numbered sections. Constraints: no filler, no praise, \" +\n      \"hide answers until I ask.\",\n  },\n  {\n    name: \"anki\",\n    text: \"Generate {count} Anki cards for {topic} as CSV with columns front, back, tag. \" +\n      \"No header row, no code fences, no extra text. Tag: course-{subject}.\",\n  },\n  {\n    name: \"interview\",\n    text: \"Interview me on {topic} for {company}. Start easy, go hard, grade each answer in \" +\n      \"2 lines, and do not reveal model answers until I finish all questions.\",\n  },\n];\n\nclass PromptTemplateBuilder {\n  private registry = new Map<string, string>();\n\n  constructor(templates: Template[]) {\n    for (const t of templates) {\n      this.registry.set(t.name, t.text);\n    }\n  }\n\n  fill(name: string, values: Record<string, string>): string {\n    const template = this.registry.get(name);\n    if (!template) {\n      throw new Error(\"Unknown template: \" + name);\n    }\n    return template.replace(/\\{(\\w+)\\}/g, (match, key: string) => {\n      const value = values[key];\n      if (value === undefined || value.trim() === \"\") {\n        throw new Error(\"Missing placeholder {\" + key + \"} in template \" + name);\n      }\n      return value;\n    });\n  }\n\n  missing(name: string, values: Record<string, string>): string[] {\n    const template = this.registry.get(name);\n    if (!template) {\n      return [name];\n    }\n    const needed = [...template.matchAll(/\\{(\\w+)\\}/g)].map((m) => m[1]);\n    return [...new Set(needed)].filter((key) => values[key] === undefined || values[key].trim() === \"\");\n  }\n\n  list(): string[] {\n    return [...this.registry.keys()];\n  }\n}\n\nconst builder = new PromptTemplateBuilder(templates);\n\nconsole.log(\"Available templates:\", builder.list().join(\", \"));\nconsole.log(\"\");\nconsole.log(\"Missing check for 'lesson':\", builder.missing(\"lesson\", { level: \"beginner\", goal: \"placements\" }));\nconsole.log(\"\");\nconst filled = builder.fill(\"lesson\", {\n  level: \"beginner\",\n  goal: \"software engineering placements\",\n  topic: \"TCP vs UDP\",\n});\nconsole.log(\"--- FILLED LESSON PROMPT ---\");\nconsole.log(filled);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The builder centralizes your best prompts, fails loudly on empty placeholders, and prints a paste-ready prompt in one command. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " add your own master study prompt from Q3 as a template, fill it with your next topic, and paste the result into your chat app tonight."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The universal 5-part prompt (Role, Context, Task, Format, Constraints) is the base of every strong study prompt."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The master study prompt runs a full session: lesson, examples, drills, quiz, and gap analysis in one message."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prompts are code: diagnose, redraft one part, retest, and archive what ships."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The 8 anti-slop rules force examples, tradeoffs, length caps, and bans on filler and praise."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Format contracts produce tables, JSON, and Anki-ready CSV with exact columns and no stray text."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chain-of-thought, few-shot examples, and context injection make the model show reasoning, imitate rubrics, and grade your real attempts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Climb the level ladder bottom-up with a checkpoint per rung, and run question-first sessions on topics you think you know."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chain 4 to 6 prompts per session, avoid the 8 common mistakes, and automate with a template builder."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contradictions",
      children: "Contradictions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The methods in this chapter are not universally right. Read these before trusting the system blindly:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A perfectly engineered prompt can produce answers you copy without thinking. The anti-slop rules fight the output, not the habit — the dependency test from Chapter 1 matters more than any template here."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chain-of-thought prompting sometimes produces confident wrong reasoning. Asking the AI to \"show your reasoning\" does not guarantee the reasoning is correct; verify, never assume."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hand-written notes occasionally beat AI-generated summaries for retention, precisely because handwriting forces slow selection and effortful encoding. Speed has a price."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Output-format contracts (JSON, CSV) can break across model versions; a format that worked in one chat may silently degrade in another."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-questions",
      children: "Open Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What this chapter deliberately does not claim to know:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No controlled experiment here measures how much prompt iteration actually improves retention; the improvement loop is a heuristic with face validity, not proof."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Whether long system-style prompts are remembered by models across long sessions is model-dependent and unverified for every tool."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The optimal prompt length per concept (minimal viable prompt) is unknown and likely varies by model."
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
            children: "5-part structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"You are {role}. Context: {level}, {goal}. Task: ... Format: ... Constraints: ...\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every single prompt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Master study prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Run a complete study session: lesson, examples, drills, quiz, gaps\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Daily study sessions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Improvement loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Diagnose this prompt by the 5 parts, redraft the 2 worst\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any weak output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-slop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Banned words ..., minimum 3 examples, no praise, max N words\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every lesson prompt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Table format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Columns exactly ..., exactly 6 rows, no text outside the table\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparisons and tradeoffs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anki CSV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"CSV with columns front, back, tag, no code fences, no header\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After every lesson"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chain-of-thought"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Show your reasoning step by step, then quiz me on it\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System design and DSA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Few-shot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 example Q&A pairs, then \"generate 5 in exactly this style\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Question generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Grade my attempt against these notes\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After every failed problem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Level ladder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Teach me {topic}, ELI5 first, checkpoint each rung\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New topics, topics you \"know\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Question-first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Do not teach me anything, interview me first\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topics you think you know"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Template builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "npx ts-node prompt-template-builder.ts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before every study session"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the 5 parts of the universal prompt?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "Role, Context, Task, Format, Constraints. Role sets the persona, Context gives your level and goal, Task states the exact job, Format fixes the output shape, and Constraints set the rules and boundaries."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which two parts do most people skip, causing the biggest quality loss?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "Format and Constraints. Skipping Format produces random-shaped answers, and skipping Constraints produces generic, padded, praise-filled mush."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the correct first step of the prompt improvement loop?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "Diagnose: read the weak output and identify which of the 5 parts failed. Then redraft exactly one part and retest, never change three parts at once."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which anti-slop rule directly targets \"delve\", \"moreover\", and \"in conclusion\"?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "Rule 1: ban filler words explicitly. The prompt lists banned terms and instructs the model to never use them, which is the cheapest way to kill padded prose."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What columns must Anki-ready CSV output have, in what order?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "front, back, tag, in that exact order, with no header row, no code fences, and no extra text. Quote fields that contain commas."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is starting at the expert level of the ladder wrong?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "Because you skip the conceptual skeleton, so you memorize jargon without a frame to attach it to. Climbing bottom-up with checkpoints builds understanding that survives probing questions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What does \"question-first\" prompting ask the model to do first?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "Interview you before teaching anything. The model starts with graded questions and only reveals explanations after you answer, which trains retrieval under interview pressure."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the standard 5-step study chain in prompt chaining?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "Preflight, Learn, Practice, Test, Debrief. Each step consumes the previous output in the same thread, ending with a gap list and Anki cards."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which mistake is \"rewriting the whole prompt on every failure\"?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "Prompt-gasm. The fix is to change exactly one part per retest so you can measure which change fixed the output."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What does the template builder do when a placeholder is missing?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "It throws an error naming the missing placeholder, so you never send a prompt with empty slots. It also fills valid placeholders and prints a paste-ready prompt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rewrite your 3 most-used prompts from last week using all 5 parts, and run one topic through both the old and new versions. Write a 3-line comparison of output quality."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Take your weakest prompt and run the diagnose-redraft-retest loop twice, saving each draft. Archive the final version in a prompt library folder named by job."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert your last week of notes into Anki cards using the CSV prompt, import them into Anki, and review them on tomorrow's commute. Note how many cards survived import without edits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run the level ladder on one topic you believe you know, with the checkpoint rule. Record which rung your 3-line explanations first failed, and study that rung explicitly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run a question-first interview session on that same topic and list the 3 answers you got wrong or shaky. Turn each into a gap in your velocity tracker."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extend the TypeScript template builder with your master study prompt from Q3 plus one template of your own, and use it to produce tomorrow's filled prompt. Add the two missing-placeholder tests to prove it fails loudly."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://platform.openai.com/docs/guides/prompt-engineering",
          children: "OpenAI Prompt Engineering Guide"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
          children: "Anthropic Prompt Engineering Overview"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.anthropic.com/en/prompt-library/library",
          children: "Anthropic Prompt Library"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://ai.google.dev/gemini-api/docs/prompting-intro",
          children: "Google Gemini Prompting Guide"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
          children: "ChatGPT Prompt Engineering for Developers (DeepLearning.AI)"
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