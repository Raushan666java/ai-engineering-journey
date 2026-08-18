"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[84978],{

/***/ 59342
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_powered_learning_ch_06_code_dsa_with_ai_md_0cc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-powered-learning-ch-06-code-dsa-with-ai-md-0cc.json
const site_docs_courses_ai_powered_learning_ch_06_code_dsa_with_ai_md_0cc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-powered-learning/ch06-code-dsa-with-ai","title":"Chapter 6: Code & DSA with AI","description":"Last Updated 60–75 minutes","source":"@site/docs/courses/ai-powered-learning/ch06-code-dsa-with-ai.md","sourceDirName":"courses/ai-powered-learning","slug":"/ai-powered-learning/ch06-code-dsa-with-ai","permalink":"/ai-engineering-journey/ai-powered-learning/ch06-code-dsa-with-ai","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"ch06-code-dsa-with-ai","slug":"/ai-powered-learning/ch06-code-dsa-with-ai","title":"Chapter 6: Code & DSA with AI","sidebar_label":"Chapter 6: Code & DSA with AI","sidebar_position":7},"sidebar":"course-ai-powered-learning","previous":{"title":"Chapter 5: Active Recall & Quiz Prompts","permalink":"/ai-engineering-journey/ai-powered-learning/ch05-active-recall-quiz-prompts"},"next":{"title":"Chapter 7: Speed Reading & Summarization","permalink":"/ai-engineering-journey/ai-powered-learning/ch07-speed-reading-summarization"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-powered-learning/ch06-code-dsa-with-ai.md


const frontMatter = {
	id: 'ch06-code-dsa-with-ai',
	slug: '/ai-powered-learning/ch06-code-dsa-with-ai',
	title: 'Chapter 6: Code & DSA with AI',
	sidebar_label: 'Chapter 6: Code & DSA with AI',
	sidebar_position: 7
};
const contentTitle = 'Chapter 6: Code & DSA with AI';

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
  "value": "The full problem-solving loop",
  "id": "the-full-problem-solving-loop",
  "level": 2
}, {
  "value": "Q1: Why solve DSA with AI instead of watching more videos?",
  "id": "q1-why-solve-dsa-with-ai-instead-of-watching-more-videos",
  "level": 2
}, {
  "value": "Q2: What is the hints-only DSA solver?",
  "id": "q2-what-is-the-hints-only-dsa-solver",
  "level": 2
}, {
  "value": "Q3: How do I set up a timed, constrained session?",
  "id": "q3-how-do-i-set-up-a-timed-constrained-session",
  "level": 2
}, {
  "value": "Q4: How does a full hints-only session actually run?",
  "id": "q4-how-does-a-full-hints-only-session-actually-run",
  "level": 2
}, {
  "value": "Q5: What is the DSA pattern mapper?",
  "id": "q5-what-is-the-dsa-pattern-mapper",
  "level": 2
}, {
  "value": "Q6: How do I learn a pattern&#39;s signature deeply?",
  "id": "q6-how-do-i-learn-a-patterns-signature-deeply",
  "level": 2
}, {
  "value": "Q7: How does the AI code reviewer work?",
  "id": "q7-how-does-the-ai-code-reviewer-work",
  "level": 2
}, {
  "value": "Q8: How do I run the review in strict interview mode?",
  "id": "q8-how-do-i-run-the-review-in-strict-interview-mode",
  "level": 2
}, {
  "value": "Q9: What is the debugging tutor?",
  "id": "q9-what-is-the-debugging-tutor",
  "level": 2
}, {
  "value": "Q10: How do I debug live with the AI asking questions?",
  "id": "q10-how-do-i-debug-live-with-the-ai-asking-questions",
  "level": 2
}, {
  "value": "Q11: How do I run a 20-day new-language blueprint?",
  "id": "q11-how-do-i-run-a-20-day-new-language-blueprint",
  "level": 2
}, {
  "value": "Q12: How do I run today&#39;s daily language drill?",
  "id": "q12-how-do-i-run-todays-daily-language-drill",
  "level": 2
}, {
  "value": "Q13: How do I do system design mock rounds with AI?",
  "id": "q13-how-do-i-do-system-design-mock-rounds-with-ai",
  "level": 2
}, {
  "value": "Q14: How do I debrief a mock round?",
  "id": "q14-how-do-i-debrief-a-mock-round",
  "level": 2
}, {
  "value": "Q15: How do I practice SQL with AI?",
  "id": "q15-how-do-i-practice-sql-with-ai",
  "level": 2
}, {
  "value": "Q16: How do I drill hard SQL patterns like window functions?",
  "id": "q16-how-do-i-drill-hard-sql-patterns-like-window-functions",
  "level": 2
}, {
  "value": "Q17: How do I turn CS theory into code?",
  "id": "q17-how-do-i-turn-cs-theory-into-code",
  "level": 2
}, {
  "value": "Q18: How do I verify my code matches the theory?",
  "id": "q18-how-do-i-verify-my-code-matches-the-theory",
  "level": 2
}, {
  "value": "Q19: What is the interview code style coach?",
  "id": "q19-what-is-the-interview-code-style-coach",
  "level": 2
}, {
  "value": "Q20: How do I get complexity drill prompts?",
  "id": "q20-how-do-i-get-complexity-drill-prompts",
  "level": 2
}, {
  "value": "Q21: How do I track my pass rate per pattern with a solution grader?",
  "id": "q21-how-do-i-track-my-pass-rate-per-pattern-with-a-solution-grader",
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
        id: "chapter-6-code--dsa-with-ai",
        children: "Chapter 6: Code & DSA with AI"
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
      children: "Watching DSA videos creates an illusion of competence; writing code under pressure creates skill. This chapter turns ChatGPT, Claude, or Gemini into a full DSA coaching staff: a hints-only solver, a pattern mapper, a code reviewer, a debugging tutor, a system design interviewer, and a complexity drillmaster. Every tool follows one rule from Chapter 5: the AI assists, you do the work, and the AI grades the result."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run a hints-only DSA solver that gives three escalating hints and never full solutions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map any problem to a known pattern family and learn that pattern's signatures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Get your solutions reviewed on correctness, complexity, clarity, and edge cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Debug with an AI tutor that asks questions instead of fixing code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute a 20-day new-language blueprint with daily feature, idiom, and mini-project drills"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run 45-minute system design mock rounds with an interviewer persona"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Practice SQL against a given schema with AI-generated questions and grading"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Turn CS theory concepts into coding exercises that prove understanding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write code under interview constraints with a style coach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Force big-O analysis on every solution and track pass rate per pattern"
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
            children: "Hints-only solver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three escalating hints, never full code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master protocol in Q2; use for every problem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern mapper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every problem signals a pattern family"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mapper prompt in Q5, deep-dive in Q6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI code reviewer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grade on correctness, complexity, clarity, edge cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review prompt in Q7, interview mode in Q8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging tutor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI asks questions, you find the bug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol in Q9, live session in Q10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "New-language blueprint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 days of feature + idiom + mini-project"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blueprint in Q11, daily drill in Q12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mock rounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System design and SQL as interviewer practice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persona prompts in Q13-Q16"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-full-problem-solving-loop",
      children: "The full problem-solving loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Problem arrives] --> B[Understand: restate, constraints, examples]\n    B --> C[Pattern map: name the pattern and its signals]\n    C --> D{Solved without hints?}\n    D -- Yes --> E[Write solution with verbal reasoning]\n    D -- No --> F[Ask AI for hint level 1]\n    F --> D\n    E --> G[AI code review: correctness, complexity, edge cases]\n    G --> H{Review passed?}\n    H -- No --> I[Fix the top issue, one at a time]\n    I --> G\n    H -- Yes --> J[Re-solve in 3 to 7 days]\n    J --> K[Pass rate tracked per pattern]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q1-why-solve-dsa-with-ai-instead-of-watching-more-videos",
      children: "Q1: Why solve DSA with AI instead of watching more videos?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Video lectures are passive consumption: your brain recognizes the pattern as it is explained, which feels like understanding but produces almost no ability to solve a fresh problem alone. AI-based practice gives you interactive repetitions, instant feedback, and interview realism, because the AI behaves like an interviewer rather than a lecturer. It also scales to your commute: a problem, three hints, and a review can fit in 25 minutes with no setup. The coach setup prompt below establishes the persona once, and every later session in this chapter builds on it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You are my DSA coach for placement preparation.\nLanguage: TypeScript. Interview style: {Google | Amazon | service company}.\n\nStanding rules:\n1. Never write full solutions unless I explicitly ask for a post-mortem.\n2. Hints escalate: level 1 names the pattern family, level 2 names the\n   technique, level 3 gives a pseudocode skeleton with blanks.\n3. After I solve, review my code for correctness, time and space\n   complexity, and edge cases.\n4. Ask follow-up questions the way a real interviewer would.\n5. If I type POST-MORTEM, then and only then show the full solution.\n\nAcknowledge with one line and wait for my first problem.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The standing rules are a session contract that all later prompts inherit, and the POST-MORTEM escape hatch guarantees you can still learn from a stuck problem without compromising the hint discipline."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Start a fresh conversation with this setup prompt, then paste a problem you solved last week and run the full loop to see how the coach behaves."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q2-what-is-the-hints-only-dsa-solver",
      children: "Q2: What is the hints-only DSA solver?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The hints-only solver is the core prompt of this chapter: it forces the restate-first protocol, three escalating hints, and a full review after you solve. The escalation design is deliberate: level 1 only names the pattern family so you still pick the technique, level 2 names the technique so you still write the code, and level 3 gives a skeleton with blanks so the final structure is still yours. This mirrors the way interviewers leak information, one nudge at a time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DSA session. Language: TypeScript.\nProblem: {paste the problem, including constraints and examples}\n\nFollow this protocol:\n1. Ask me to restate the problem in my own words and state my first idea\n   BEFORE any hint.\n2. If I am stuck, give hint 1: which pattern family this belongs to.\n3. Hint 2: the specific technique inside that family.\n4. Hint 3: pseudocode skeleton with blanks. NEVER full code.\n5. When I solve it, review my code: correctness, time and space\n   complexity, edge cases, and test cases.\n6. Then ask 2 follow-up questions a {company} interviewer would ask.\nWait for my input after every step.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The restate-first step forces problem comprehension before any solution attempt, the three hint levels keep difficulty controllable, and the review step converts every solve into a graded learning event."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Paste a medium two-pointer problem, complete the protocol without ever typing POST-MORTEM, and answer both follow-up questions in writing before checking the review."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q3-how-do-i-set-up-a-timed-constrained-session",
      children: "Q3: How do I set up a timed, constrained session?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Interviews are timed, so practice must be timed. The session setup prompt fixes difficulty, time limit, and behavior rules before the problem appears, which prevents the session from drifting into an open-ended chat. The most important rule is that you type code into the chat while the AI stays silent, and the timer starts the moment you see the problem, exactly like a real round."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Session setup. Difficulty: {easy | medium | hard}.\nTime limit: {25} minutes. Language: TypeScript.\nRules:\n1. You show the problem, I solve, you stay silent while I type.\n2. Hints only when I explicitly write HINT, at most 2 per session.\n3. No full code, no dry runs, no judging my code until I type DONE.\n4. At DONE, stop the clock and report my elapsed time, then review.\nStart: give me one problem at the chosen difficulty and start the timer.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The silence rule stops the AI from coaching mid-solve, the HINT budget simulates scarce interviewer help, and the DONE report creates a time pressure that chat practice otherwise lacks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Run a 25-minute medium session on {sliding window problems} three times this week and log your DONE times to see the trend."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q4-how-does-a-full-hints-only-session-actually-run",
      children: "Q4: How does a full hints-only session actually run?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The transcript below shows the complete arc: restate, first idea, hint escalation, solve, review, follow-up. Notice that the AI never wrote the solution and that the user's code appeared only after the approach was fixed in words. That ordering, words before code, is the single biggest difference between casual chat practice and interview practice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You: Problem: given an array of integers and a target, return the indices of\n     the two numbers that add up to the target.\nAI: Restate the problem in your own words and give your first idea.\nYou: Find the pair whose sum equals the target and return both indices.\n     Brute force: check every pair, O(n^2) time, O(1) space.\nAI: Good, that is a valid first idea. What is the space-time trade-off?\n     Hint level 1: think about hashing.\nYou: Use a map from value to index, then for each element check if the\n     complement exists.\nAI: Correct family. Hint level 2: can you do it in one pass and why?\nYou: Yes: check the complement before inserting the current element,\n     so each element is seen exactly once. O(n) time, O(n) space.\nAI: Correct. Write your code now.\nYou: function twoSum(nums: number[], target: number): number[] {\n       const seen = new Map<number, number>();\n       for (let i = 0; i < nums.length; i++) {\n         const complement = target - nums[i];\n         if (seen.has(complement)) return [seen.get(complement)!, i];\n         seen.set(nums[i], i);\n       }\n       return [];\n     }\nAI: Review: correct, O(n) time, O(n) space. Edge cases: duplicates are handled\n     because you check before insert; negative numbers work; empty array\n     returns an empty result. Follow-up 1: what if the array is sorted?\n     Follow-up 2: how would you handle a target that must use distinct\n     values from the same element?\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Each hint level only narrows the decision space, the code appears after the approach is verbalized, and the follow-ups push you to transfer the solution to new constraints."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Replay this exact problem tomorrow from memory, without the AI, and write both the brute force and the hashmap version; then note where you stalled."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q5-what-is-the-dsa-pattern-mapper",
      children: "Q5: What is the DSA pattern mapper?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Most interview problems are recombinations of about a dozen pattern families: two-pointers, sliding window, prefix sum, binary search, BFS/DFS, dynamic programming, greedy, heap, backtracking, union-find, monotonic stack. The pattern mapper names the family, explains the signals that point to it, gives the pattern's signature, and suggests similar problems to drill. It never solves the problem, because pattern recognition is the skill you are training."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Act as a pattern mapper. Problem:\n{paste the problem, constraints, examples}\n\nAnswer these 4 points:\n1. The pattern family: choose from two-pointers, sliding window, prefix sum,\n   binary search, BFS, DFS, dynamic programming, greedy, heap,\n   backtracking, union-find, monotonic stack, or other.\n2. The signals: the 3 specific clues in THIS problem that point to that family.\n3. The pattern signature: the key structures and the typical loop shape,\n   written in TypeScript, max 15 lines, no full solution.\n4. Two similar problems at the same difficulty to drill next.\n\nDo NOT solve the problem and do not write a complete implementation.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The signal list builds your recognition skill, the signature template gives you the reusable skeleton, and the similar-problem suggestions feed the next practice session automatically."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Map 5 problems from your last practice week, write the signals for each in one line, and check whether you can name the pattern before reading the AI's answer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q6-how-do-i-learn-a-patterns-signature-deeply",
      children: "Q6: How do I learn a pattern's signature deeply?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Knowing a pattern's name is not enough; you need its signature, which is the fixed structure you can adapt: the pointer positions, the window bounds, the DP table dimensions, the loop shape. The deep-dive prompt forces the AI to teach the signature with an analogy, a TypeScript template, and failure cases, then quiz you on it from memory. This converts pattern knowledge from recognition into a reusable tool."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Deep-dive the {sliding window} pattern:\n1. A real-world analogy for when the pattern applies.\n2. Three signals that say: use this pattern.\n3. A TypeScript template, max 15 lines, with {placeholders} clearly marked.\n4. Two counterexamples: when this template breaks.\n5. A 30-second memory hook.\nThen quiz me on the template from memory, hint-only, 3 questions.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The template gives you a starting skeleton for every future problem of this family, the counterexamples teach its limits, and the memory hook plus quiz seals the signature into long-term memory."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Deep-dive {monotonic stack}, then solve two next-greater-element problems using only the template and hints."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q7-how-does-the-ai-code-reviewer-work",
      children: "Q7: How does the AI code reviewer work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The reviewer grades your solution like a staff engineer on four axes: correctness, time and space complexity, clarity, and edge-case handling. The prompt fixes the rubric so feedback is consistent across sessions, which lets you track improvement. The critical rule is that the AI tells you what is wrong but does not provide the fixed code; you repair the worst issue yourself, because fixing is where the learning happens."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Review my solution like a staff engineer. Problem:\n{paste the problem}\nMy code:\n{paste your TypeScript code}\n\nGrade me 1 to 10 on each:\n- correctness\n- time complexity\n- space complexity\n- clarity and naming\n- edge-case handling\n\nFor each axis: one line on what is right, one line on what is wrong,\none concrete improvement. Then ask me to fix the worst issue myself.\nDo not provide the fixed code.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The fixed rubric makes reviews comparable across sessions, and the fix-it-yourself rule keeps the repair work on your side of the loop."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Submit a solution you wrote last month, accept the worst-issue verdict, fix it yourself, and re-submit to see if the score rises."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q8-how-do-i-run-the-review-in-strict-interview-mode",
      children: "Q8: How do I run the review in strict interview mode?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Interviewers do not stop at correctness; they probe complexity, edge cases, and design trade-offs. Interview follow-up mode turns the reviewer into a questioner who asks one question at a time and grades each answer with a one-word verdict. This trains the spoken reasoning that written reviews cannot, which is the part of interviews most self-study misses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Interview follow-up mode. My code above is finished.\nAsk me these 4 questions, one at a time, waiting for my answer:\n1. What is the time and space complexity and why?\n2. Which edge cases would you test and what would each assert?\n3. How would you change the design if memory were the constraint?\n4. Can you achieve the same result in a single pass?\nAfter each of my answers, give a one-word verdict: strong, ok, or weak,\nplus one improvement sentence.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " One-at-a-time questioning with verdicts simulates the live pressure of an interview and exposes the difference between writing code and defending it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Take the Q4 two-sum solution, run this mode, and record your four spoken answers; replay the recording and count how many verdicts were strong."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q9-what-is-the-debugging-tutor",
      children: "Q9: What is the debugging tutor?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The debugging tutor inverts the usual pattern: instead of pasting code and asking the AI to find the bug, you describe the bug and the AI walks you to it with questions. This builds the hypothesis-testing skill that real debugging requires: describe expected versus actual behavior, state what you ruled out, then test one hypothesis at a time. The protocol ends with a root-cause sentence and a test that would have caught it, which is exactly the reflection senior engineers force themselves to do."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Act as a debugging tutor. I will describe a bug, not paste the code yet.\nProtocol:\n1. Ask me to describe expected vs actual behavior in 2 sentences.\n2. Ask me what I have already ruled out.\n3. Suggest ONE hypothesis at a time, phrased as a question, never a statement.\n4. When I find the fix, ask me to explain the root cause in one sentence\n   and name the test that would have caught it.\nMy bug description: {describe the bug: what you expected, what happens}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Describing expected versus actual isolates the failure band, the ruled-out list prevents re-testing dead ends, and the one-question-at-a-time rule keeps the discovery on your side."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Take a real bug from your current work project, run this protocol without pasting code, and time how long it takes you to find the fix yourself."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q10-how-do-i-debug-live-with-the-ai-asking-questions",
      children: "Q10: How do I debug live with the AI asking questions?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The transcript below shows the questioning flow in action. Notice the AI never says where the bug is; it narrows the space by asking about data flow, return values, and failure conditions. Your job in the session is to answer honestly, because a guessed answer produces a wrong hypothesis chain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You: My function returns an empty array when I pass a valid list of users.\n     Expected: the filtered list. Actual: empty array.\nAI: What have you already ruled out?\nYou: The filter condition is correct, I tested it in isolation.\nAI: What does the function return when the input list is empty?\nYou: Also an empty array. Same output.\nAI: Interesting. Where does the empty return path come from? Does the\n     function have an early return before the filter?\nYou: Yes, there is an early return for a null check on the input...\n     Wait. The check is if (!users) return []. If the caller passes an\n     empty-but-valid list, the check passes, so that is not it.\nAI: What happens after the early return? Is the result assigned or returned\n     directly?\nYou: It is assigned to a variable, then a later line overwrites it with a\n     second filter on a property that does not exist, so the second filter\n     drops everything. That is the bug.\nAI: Good find. Root cause in one sentence?\nYou: A second filter on a missing property silently drops all rows.\nAI: And the test that would have caught it?\nYou: A test that asserts the result for a list where that property is absent.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Each question halves the search space, the early-return question exposed the overwrite line, and the closing root-cause and test questions convert the fix into a lesson."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Reproduce this session structure with a real bug from your codebase, and write the one-sentence root cause and the regression test on paper before typing anything."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q11-how-do-i-run-a-20-day-new-language-blueprint",
      children: "Q11: How do I run a 20-day new-language blueprint?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A new language is best learned in a fixed 20-day arc: days 1-5 syntax, days 6-10 idiomatic code, days 11-15 project patterns, days 16-20 interview drills. Each day has three fixed deliverables: today's feature, today's idiom, and today's mini-project, which guarantees daily progress without decision fatigue. The AI builds the whole plan in one prompt, tuned to your background and 60-minute daily budget."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Build a 20-day blueprint to learn {language} for placement prep.\nMy background: {your current languages and level}.\nDaily study budget: 60 minutes.\n\nStructure:\n- Days 1-5: syntax essentials, one feature per day.\n- Days 6-10: idiomatic code, one native idiom per day.\n- Days 11-15: project patterns, one small pattern per day.\n- Days 16-20: interview drills with common {language} interview questions.\n\nFor each day output: today's feature, today's idiom, today's mini-project\nunder 30 lines, and one check question.\nOutput as a table. No extra commentary.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The four-phase arc mirrors how you actually become productive in a language, and the fixed daily deliverable format makes every day a measurable unit of progress."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Generate a 20-day blueprint for {TypeScript} from your {Java or Python} background and pin it above your desk for the month."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q12-how-do-i-run-todays-daily-language-drill",
      children: "Q12: How do I run today's daily language drill?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The blueprint sets the arc, but the daily drill prompt runs each day: teach the feature, hand over the idiom, set the mini-project, and end with a recall question. The mini-project rule, under 30 lines, keeps the project completable inside the commute or lunch break. Reviewing your submitted mini-project is where the day's learning gets graded."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Day {N} of the {language} blueprint.\n1. Teach today's feature: {feature} in 10 minutes with 3 examples.\n2. Give today's idiom: a pattern native {language} developers use,\n   shown as before/after code.\n3. Set the mini-project: a task that MUST use the feature and the idiom,\n   spec under 10 lines. I code it, you review it.\n4. Ask the check question for yesterday's feature, hint-only.\nStart with step 1.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The feature and idiom are inputs, the mini-project forces application of both, and the daily check question adds a retrieval layer on top of the day's practice."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Run day 4 of your {TypeScript} blueprint, build the mini-project with the idiom from day 3, and submit it for review before the commute ends."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q13-how-do-i-do-system-design-mock-rounds-with-ai",
      children: "Q13: How do I do system design mock rounds with AI?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " System design interviews follow a repeatable arc: requirements, estimation, high-level design, API and data model, deep dive, and trade-offs. The mock-round prompt makes the AI a strict interviewer who runs that arc in 45 minutes and never gives answers, only probing questions. The value is in the structure: real practice without structure degenerates into a chat, but the arc forces you to cover every phase."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Act as a system design interviewer at a {Google | startup | service company}.\nRound topic: {e.g. design a URL shortener}. Duration: 45 minutes. Strict.\n\nRun this arc:\n1. Requirements: ask me clarifying questions, then let me list them.\n2. Capacity estimation: I compute reads, writes, storage, bandwidth.\n3. High-level design: I draw it with text blocks, you ask what each\n   component handles.\n4. API and data model: I define endpoints and schema.\n5. Deep dive: I choose one bottleneck and design the fix.\n6. Trade-offs: you list the decisions I made and ask me to defend the\n   two weakest ones.\n\nRules: never give the answer, one question at a time, no lecture mode.\nAt the end grade me on structure, coverage, depth, and communication.\nStart.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The fixed six-phase arc guarantees complete coverage, the never-answer rule keeps you doing the designing, and the final grade on four axes gives you a score you can track across rounds."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Run a 45-minute round on {designing a chat service} this weekend and write the four-axis grade into your session log."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q14-how-do-i-debrief-a-mock-round",
      children: "Q14: How do I debrief a mock round?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The mock round generates raw material; the debrief turns it into a study plan. The debrief prompt scores each phase separately, names the three biggest gaps, picks the single section to restudy first, and sets a harder follow-up for the next round. Debriefing is where most self-studiers quit, so this prompt makes it a 5-minute fixed ritual."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Debrief my mock round.\nMy session notes: {paste your notes from the round}\n\nOutput:\n1. Score each phase 1 to 10: requirements, estimation, design, data model,\n   deep dive, communication.\n2. The 3 biggest gaps, in priority order.\n3. The ONE section to restudy first, with a concrete study action.\n4. One harder follow-up question I must answer in the next round.\nNo advice beyond this structure.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Phase-by-phase scoring isolates your weakest phase instead of producing a vague overall feeling, and the single restudy priority prevents the next session from being unfocused."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " After your next mock round, run this debrief and bring the one follow-up question to the next session as its opening problem."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q15-how-do-i-practice-sql-with-ai",
      children: "Q15: How do I practice SQL with AI?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " SQL interviews are schema-driven: the interviewer pastes tables and asks you to write queries. The AI practice setup does the same: you paste a schema once, the AI generates questions from easy to hard, and grades each query on correctness, efficiency, and cleanliness. Keeping the same schema across sessions builds speed, because interview success depends on fluent schema navigation, not just syntax."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Schema:\n{paste CREATE TABLE statements}\n\nAct as a SQL interviewer. Generate 8 questions from easy to hard:\n- filtering and joins\n- aggregations with GROUP BY and HAVING\n- subqueries and CTEs\n- one window function question\n\nRules:\n1. One question at a time.\n2. Grade my query on: correct, efficient (can it use an index), clean.\n3. If my query is wrong, ask one probing question instead of showing the fix.\n4. After 8 questions, show my grade summary.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The fixed schema gives you a reusable practice surface, the grade axes mirror what interviewers actually check, and the probing-question rule keeps error correction active."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Paste a {users, orders, products} schema, run all 8 questions this week, and replay the two you failed until you can explain the fixes from memory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q16-how-do-i-drill-hard-sql-patterns-like-window-functions",
      children: "Q16: How do I drill hard SQL patterns like window functions?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Window functions are the most common gap between self-taught SQL and interview-level SQL, and they need dedicated drills. The window drill forces ROW_NUMBER, RANK, LAG, and SUM OVER into the same schema, and each answer gets an execution-level check: how the database would run it, and whether it degrades at 10 million rows. That execution reasoning is what separates a query-writer from a query-designer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drill: {window functions}. Schema:\n{paste schema}\n\nGenerate 4 questions that each require one of: ROW_NUMBER, RANK, LAG,\nSUM OVER with a frame clause.\nFor each of my queries answer three lines:\n1. Is the result correct?\n2. How would a database execute it: full scan or index range scan?\n3. What slows down at 10 million rows, and what would you change?\nThen one harder follow-up: the same result without a window function.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Forcing one window function per question builds fluency with each, and the execution-level analysis trains the performance reasoning that shows up in system design and senior interviews."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Generate this drill on your {orders schema}, write all four queries, and run the no-window-function follow-up as a mental exercise before checking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q17-how-do-i-turn-cs-theory-into-code",
      children: "Q17: How do I turn CS theory into code?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Theory chapters become durable knowledge only when you can build them. The theory-to-code prompt converts any OS, networking, or compiler concept into a small coding exercise with a spec and test cases, and the constraint of no external libraries forces you to implement the mechanism from first principles. The LRU cache, a token bucket, a rate limiter, or a small scheduler are all classic placements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "I want to prove I understand this concept: {concept, e.g. LRU cache}.\n1. Propose a coding exercise that tests exactly this concept using\n   nothing but TypeScript, no external libraries.\n2. Constraints: under 40 lines, one function or one class, clear spec.\n3. Give me the spec and 3 test cases with expected outputs.\n4. Do NOT write the solution.\n5. If I cannot start after 5 minutes, give me hint 1 only.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The exercise spec forces you to translate the theory's mechanisms into code, the no-library constraint removes shortcuts, and the test cases give you an objective pass/fail."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Convert {rate limiter} into this exercise, implement it in under 40 lines, and run your 3 test cases before reading any reference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q18-how-do-i-verify-my-code-matches-the-theory",
      children: "Q18: How do I verify my code matches the theory?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Building the code is step one; proving the mapping is step two. The verification prompt asks the AI to point to the line that represents each theoretical element, which forces a line-by-line reconciliation between the concept and the implementation. The session ends with the reverse direction: explaining the theory from the code without looking, which is the transfer test."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "I coded {exercise} for the concept {concept}. My solution:\n{paste code}\n\nGrade me on three things:\n1. Mapping: point to the line or block that implements each theoretical\n   element of {concept}, and flag any element missing from the code.\n2. Correctness: do the 3 test cases pass?\n3. Complexity: time and space, with one-line proofs.\nThen ask me to explain the concept from the code alone, without looking.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The element-by-element mapping exposes conceptual gaps that a green test suite hides, and the explain-from-code reversal tests whether the implementation actually changed your understanding."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Run this verification on your LRU cache exercise and write the explanation-from-code aloud; count how many theoretical elements you could name without the notes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q19-what-is-the-interview-code-style-coach",
      children: "Q19: What is the interview code style coach?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Whiteboard code is graded on more than correctness: names, structure, and the narration you speak while writing. The style coach evaluates your code the way a senior engineer would in a live session, and grades three things: naming, decomposition, and the speaking track you should have narrated. The prompt deliberately forbids code rewrites, because the coach's job is feedback on your habits, not a rewrite service."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Interview code style coach. Problem: {paste problem}.\nMy solution as I would write it on a whiteboard:\n{paste code}\n\nGrade me on:\n1. Naming: would a senior engineer accept every identifier?\n2. Structure: is the logic decomposed, or one monolith function?\n3. Verbal reasoning: give me the speaking track I SHOULD have narrated\n   while writing this code, line by line.\n4. Etiquette: what to say before, during, and after writing code.\nEach grade: good enough, or one concrete fix. Do not rewrite my code.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The fixed four-axis grade makes style review consistent, the speaking track shows you what narrated reasoning sounds like, and the no-rewrite rule keeps the feedback focused on your behavior."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Write one solution exactly as you would on a whiteboard, run this prompt, then redo the problem narrating the speaking track aloud to an empty room."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q20-how-do-i-get-complexity-drill-prompts",
      children: "Q20: How do I get complexity drill prompts?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Complexity analysis is a default interview question, so it needs its own drill: you analyze first, then the AI marks your analysis. The drill prompt forces four deliverables: an exact time complexity with a line of proof, space complexity, the worst-case input, and a verdict on whether the solution is interview-grade. Your analysis comes before the AI's, which is what makes it a drill rather than a lecture."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Complexity drill. My solution:\n{paste code}\n\nBefore you answer, I will give MY analysis first. Then mark it:\n1. Time complexity: my claim, then your verdict with a one-line proof\n   that counts the loops and the per-loop cost.\n2. Space complexity: my claim, then your verdict.\n3. Worst case: the input that makes this solution slowest, with reason.\n4. Interview verdict: is this good enough, or does it need improvement?\n   If it is worse than O(n log n), tell me to find the improvement,\n   but do not code it.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The analyze-first order forces you to count loops before seeing the answer, the one-line proof requirement prevents guesswork, and the O(n log n) threshold gives a clear quality bar."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Run this drill on five solutions you wrote this month and log the number of times your complexity claim needed correction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q21-how-do-i-track-my-pass-rate-per-pattern-with-a-solution-grader",
      children: "Q21: How do I track my pass rate per pattern with a solution grader?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Improvement is invisible unless tracked, and the right unit is per pattern: pass rate, first-try rate, and average hint level. The TypeScript grader below records every attempt and prints a per-pattern report, so you can see exactly which patterns still need work before you book a mock interview. Keep the file in your learning-playground repo and update it after every session."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Attempt {\n  problem: string;\n  pattern: string;\n  difficulty: \"easy\" | \"medium\" | \"hard\";\n  firstTry: boolean;\n  hintLevelUsed: 0 | 1 | 2 | 3;\n  verdict: \"pass\" | \"fail\";\n  date: string;\n}\n\nconst attempts: Attempt[] = [\n  { problem: \"two sum\", pattern: \"hashmap\", difficulty: \"easy\", firstTry: true, hintLevelUsed: 0, verdict: \"pass\", date: \"2026-08-10\" },\n  { problem: \"longest substring without repeats\", pattern: \"sliding window\", difficulty: \"medium\", firstTry: false, hintLevelUsed: 1, verdict: \"pass\", date: \"2026-08-11\" },\n  { problem: \"valid parentheses\", pattern: \"stack\", difficulty: \"easy\", firstTry: true, hintLevelUsed: 0, verdict: \"pass\", date: \"2026-08-11\" },\n  { problem: \"max area of container\", pattern: \"two pointers\", difficulty: \"medium\", firstTry: false, hintLevelUsed: 2, verdict: \"fail\", date: \"2026-08-12\" },\n];\n\nfunction patternReport(list: Attempt[]): void {\n  const byPattern = new Map<string, Attempt[]>();\n  for (const a of list) {\n    const bucket = byPattern.get(a.pattern);\n    if (bucket === undefined) {\n      byPattern.set(a.pattern, [a]);\n    } else {\n      bucket.push(a);\n    }\n  }\n  for (const entry of byPattern) {\n    const pattern = entry[0];\n    const items = entry[1];\n    const passed = items.filter((a) => a.verdict === \"pass\").length;\n    const passRate = Math.round((passed / items.length) * 100);\n    const avgHints = items.reduce((sum, a) => sum + a.hintLevelUsed, 0) / items.length;\n    const firstTryRate = Math.round((items.filter((a) => a.firstTry).length / items.length) * 100);\n    console.log(pattern + \": \" + passRate + \"% pass, \" + firstTryRate + \"% first try, avg hints \" + avgHints.toFixed(1));\n  }\n}\n\npatternReport(attempts);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Each attempt logs the pattern, hint usage, and verdict, and the report aggregates them per pattern; a pattern below 70% pass or above 1.5 average hints is your next study target."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Try This:"
      }), " Add 10 real attempts from your last two weeks of practice to the array, run the report with npx ts-node grader.ts, and pick the weakest pattern as tomorrow's Q5 mapper target."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The hints-only solver with three escalating hints turns every AI chat into interview-style practice"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The pattern mapper plus signature deep-dives build recognition for the dozen core DSA families"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The code reviewer's fixed rubric makes feedback consistent enough to track improvement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The debugging tutor builds hypothesis-testing skill by asking questions instead of fixing code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The 20-day language blueprint plus daily feature, idiom, and mini-project drills make language learning mechanical"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System design mock rounds and SQL drills follow the same interviewer persona with strict phase structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Theory-to-code exercises prove conceptual understanding and the verification prompt checks the mapping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The solution grader tracks pass rate and hint usage per pattern, making weak spots visible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Coach setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q1 standing-rules prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First session of every conversation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hints-only solver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q2 protocol with {problem}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every new problem, never skip the restate step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timed session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q3 setup with {25} minute limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly timed practice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern mapper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q5 mapper prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every problem before solving"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern deep-dive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q6 signature prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New pattern family, one per week"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q7 rubric prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After every accepted solution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview follow-ups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q8 four-question mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review days, before mock rounds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging tutor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q9 protocol prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real bugs from work or projects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Language blueprint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q11 20-day plan prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starting any new language"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL drill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q15 schema prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly database practice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory-to-code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q17 concept exercise prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After every theory chapter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity drill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q20 analyze-first prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Five solutions per week"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "npx ts-node grader.ts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After every practice session"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1. What does hint level 1 in the hints-only solver reveal?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. The full solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. The pattern family"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. The exact code to write"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. The time complexity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: B — the pattern family"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Level 1 names the family, level 2 names the technique, level 3 gives a pseudocode skeleton with blanks. Full code only appears after POST-MORTEM."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2. What is the first step of the hints-only protocol?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. Write the optimal solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. Ask the AI for the pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. Restate the problem and give a first idea"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. Paste the constraints into the chat"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: C — restate the problem and give a first idea"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Restating forces comprehension before any hint, which is what makes the practice session an interview simulation rather than a chat."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3. What does the pattern mapper output instead of a solution?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. A full optimized implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. The pattern family, signals, signature template, and similar problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. A test suite"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. A complexity proof"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: B — family, signals, signature, and similar problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The mapper deliberately never solves the problem because pattern recognition is the skill being trained."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4. Which axes does the code reviewer grade?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. Speed, memory, syntax, comments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. Correctness, complexity, clarity, edge cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. Length, naming, formatting, tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. Readability, lines, loops, variables"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: B — correctness, complexity, clarity, edge cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The fixed four-axis rubric makes reviews comparable across sessions so you can track improvement."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5. What is the debugging tutor's most important behavior?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. It pastes the fixed code immediately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. It asks one hypothesis-question at a time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. It rewrites the whole function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. It guesses the bug from the description"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: B — it asks one hypothesis-question at a time"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Each question narrows the search space and keeps the discovery on your side; fixes come from you, not the AI."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6. What is the phase structure of the 20-day language blueprint?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. Syntax, idioms, projects, interview drills"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. Vocabulary, grammar, reading, writing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. Easy, medium, hard, expert problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. Theory, code, review, deploy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: A — syntax, idioms, projects, interview drills"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Days 1-5 syntax, 6-10 idioms, 11-15 project patterns, 16-20 interview drills, with feature, idiom, and mini-project every day."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7. What are the six phases of the system design mock round?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. Brainstorm, code, test, deploy, monitor, scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. Requirements, estimation, high-level design, API and data model, deep dive, trade-offs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. Schema, queries, indexes, cache, queue, database"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. Frontend, backend, database, cache, CDN, monitoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: B — requirements, estimation, design, API and data, deep dive, trade-offs"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The fixed six-phase arc guarantees complete coverage, and the final grade covers structure, coverage, depth, and communication."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8. What does the SQL practice prompt grade your queries on?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. Line count and comments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. Correctness, efficiency, cleanliness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. Column naming and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. Execution time and indexes used"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: B — correctness, efficiency, cleanliness"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Each query gets a verdict on whether it is correct, whether it can use an index, and whether it is clean, mirroring what interviewers check."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9. What does the theory-to-code prompt forbid?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. Using TypeScript"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. External libraries and writing the solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. Test cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. Comments in the code"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: B — external libraries and writing the solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The no-library constraint forces implementing the mechanism from first principles, and the AI never writes the solution, only the spec and test cases."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10. In the solution grader, what indicates a pattern needs restudy?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A. Pass rate above 85%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B. Pass rate below 70% or average hints above 1.5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C. First-try rate above 80%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D. More than 10 attempts logged"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer: B — pass rate below 70% or average hints above 1.5"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Low pass rate means the pattern is not learned; high hint usage means the knowledge exists but is not retrievable under pressure."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run the Q2 hints-only protocol on two medium problems this week, one sliding window and one binary search, with a hard rule of zero POST-MORTEMs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map 5 problems with the Q5 pattern mapper, write the three signals for each in one line, then deep-dive the weakest pattern with Q6."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Submit your last three solutions to the Q7 reviewer and fix the worst issue in each yourself before re-submitting."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the Q9 debugging tutor on a real bug from your work or a personal project, and write the root-cause sentence plus regression test on paper."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate the Q11 20-day blueprint for TypeScript and run the Q12 daily drill for days 1 through 5, submitting every mini-project for review."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run a 45-minute system design mock (Q13) on a URL shortener, debrief with Q14, then feed the pattern report into the Q21 grader for the whole week's attempts."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["NeetCode: DSA patterns and problem lists — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://neetcode.io/",
          children: "https://neetcode.io/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["LeetCode problem explorer — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://leetcode.com/problemset/",
          children: "https://leetcode.com/problemset/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The System Design Primer — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/donnemartin/system-design-primer",
          children: "https://github.com/donnemartin/system-design-primer"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["TypeScript Handbook — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.typescriptlang.org/docs/handbook/intro.html",
          children: "https://www.typescriptlang.org/docs/handbook/intro.html"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Big-O Cheat Sheet — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.bigocheatsheet.com/",
          children: "https://www.bigocheatsheet.com/"
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