"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8503],{

/***/ 6674
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_coding_problems_03_linked_lists_md_673_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-coding-problems-03-linked-lists-md-673.json
const site_docs_courses_coding_problems_03_linked_lists_md_673_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/coding-problems/03-linked-lists","title":"Chapter 03: Linked Lists","description":"Linked lists test your understanding of pointer manipulation, memory management, and recursive thinking. They are deceptively simple but require careful handling of edge cases.","source":"@site/docs/courses/coding-problems/03-linked-lists.md","sourceDirName":"courses/coding-problems","slug":"/coding-problems/03-linked-lists","permalink":"/ai-engineering-journey/coding-problems/03-linked-lists","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-linked-lists","slug":"/coding-problems/03-linked-lists","title":"Chapter 03: Linked Lists","sidebar_label":"Chapter 03: Linked Lists","sidebar_position":3},"sidebar":"course-coding-problems","previous":{"title":"Chapter 02: Strings","permalink":"/ai-engineering-journey/coding-problems/02-strings"},"next":{"title":"Chapter 04: Stacks & Queues","permalink":"/ai-engineering-journey/coding-problems/04-stacks-queues"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/coding-problems/03-linked-lists.md


const frontMatter = {
	id: '03-linked-lists',
	slug: '/coding-problems/03-linked-lists',
	title: 'Chapter 03: Linked Lists',
	sidebar_label: 'Chapter 03: Linked Lists',
	sidebar_position: 3
};
const contentTitle = 'Chapter 03: Linked Lists';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Problem Classification Flow",
  "id": "problem-classification-flow",
  "level": 2
}, {
  "value": "Linked List Algorithm Patterns",
  "id": "linked-list-algorithm-patterns",
  "level": 2
}, {
  "value": "Complexity Decision Tree",
  "id": "complexity-decision-tree",
  "level": 2
}, {
  "value": "Easy Problems (7)",
  "id": "easy-problems-7",
  "level": 2
}, {
  "value": "Problem 1: Reverse Linked List",
  "id": "problem-1-reverse-linked-list",
  "level": 3
}, {
  "value": "Problem 2: Merge Two Sorted Lists",
  "id": "problem-2-merge-two-sorted-lists",
  "level": 3
}, {
  "value": "Problem 3: Linked List Cycle",
  "id": "problem-3-linked-list-cycle",
  "level": 3
}, {
  "value": "Problem 4: Remove Duplicates from Sorted List",
  "id": "problem-4-remove-duplicates-from-sorted-list",
  "level": 3
}, {
  "value": "Problem 5: Middle of the Linked List",
  "id": "problem-5-middle-of-the-linked-list",
  "level": 3
}, {
  "value": "Problem 6: Remove Linked List Elements",
  "id": "problem-6-remove-linked-list-elements",
  "level": 3
}, {
  "value": "Problem 7: Palindrome Linked List",
  "id": "problem-7-palindrome-linked-list",
  "level": 3
}, {
  "value": "Medium Problems (10)",
  "id": "medium-problems-10",
  "level": 2
}, {
  "value": "Problem 8: Add Two Numbers",
  "id": "problem-8-add-two-numbers",
  "level": 3
}, {
  "value": "Problem 9: Remove Nth Node From End of List",
  "id": "problem-9-remove-nth-node-from-end-of-list",
  "level": 3
}, {
  "value": "Problem 10: Swap Nodes in Pairs",
  "id": "problem-10-swap-nodes-in-pairs",
  "level": 3
}, {
  "value": "Problem 11: Odd Even Linked List",
  "id": "problem-11-odd-even-linked-list",
  "level": 3
}, {
  "value": "Problem 12: Intersection of Two Linked Lists",
  "id": "problem-12-intersection-of-two-linked-lists",
  "level": 3
}, {
  "value": "Problem 13: Rotate List",
  "id": "problem-13-rotate-list",
  "level": 3
}, {
  "value": "Problem 14: Reorder List",
  "id": "problem-14-reorder-list",
  "level": 3
}, {
  "value": "Problem 15: Sort List",
  "id": "problem-15-sort-list",
  "level": 3
}, {
  "value": "Problem 16: Remove Duplicates from Sorted List II",
  "id": "problem-16-remove-duplicates-from-sorted-list-ii",
  "level": 3
}, {
  "value": "Problem 17: Reverse Linked List II",
  "id": "problem-17-reverse-linked-list-ii",
  "level": 3
}, {
  "value": "Hard Problems (3)",
  "id": "hard-problems-3",
  "level": 2
}, {
  "value": "Problem 18: Merge K Sorted Lists",
  "id": "problem-18-merge-k-sorted-lists",
  "level": 3
}, {
  "value": "Problem 19: Copy List with Random Pointer",
  "id": "problem-19-copy-list-with-random-pointer",
  "level": 3
}, {
  "value": "Problem 20: Reverse Nodes in k-Group",
  "id": "problem-20-reverse-nodes-in-k-group",
  "level": 3
}, {
  "value": "Summary Table",
  "id": "summary-table",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    mermaid: "mermaid",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "chapter-03-linked-lists",
        children: "Chapter 03: Linked Lists"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Linked lists test your understanding of pointer manipulation, memory management, and recursive thinking. They are deceptively simple but require careful handling of edge cases."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master pointer manipulation: traversal, insertion, deletion, reversal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the fast & slow pointer technique for cycle detection and middle element"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement recursive and iterative solutions for common linked list operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle edge cases: empty list, single node, circular lists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply dummy node technique to simplify edge case handling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-classification-flow",
      children: "Problem Classification Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Linked List Problem] --> B{Structure change?}\r\n    B -->|Yes| C{Reversal?}\r\n    C -->|Yes| D[Iterative / Recursive Reverse]\r\n    C -->|No| E{Merge / Split?}\r\n    E -->|Yes| F[Two pointers / Dummy head]\r\n    E -->|No| G[Insertion / Deletion]\r\n    \r\n    B -->|No| H{Traversal?}\r\n    H -->|Yes| I{Need cycle?}\r\n    I -->|Yes| J[Fast & Slow Pointer]\r\n    I -->|No| K{Find specific?}\r\n    K -->|Yes| L[Runner technique]\r\n    K -->|No| M[Two passes / Hash set]\r\n    \r\n    B -->|No change| N{Deep copy?}\r\n    N -->|Yes| O[HashMap + interleaving]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "linked-list-algorithm-patterns",
      children: "Linked List Algorithm Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "mindmap\r\n  root((Linked List Patterns))\r\n    Fast & Slow\r\n      Cycle detection\r\n      Middle of list\r\n      Find kth from end\r\n      Palindrome check\r\n    Reversal\r\n      Full reverse\r\n      Reverse range\r\n      Reverse in k-groups\r\n      Reverse alternate\r\n    Dummy Node\r\n      Merge sorted lists\r\n      Remove node\r\n      Partition list\r\n    Recursion\r\n      Reverse print\r\n      Merge lists\r\n      Flatten list\r\n    In-place\r\n      Reorder list\r\n      Rotate list\r\n      Sort list\r\n    Copy\r\n      Random pointer\r\n      Deep copy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complexity-decision-tree",
      children: "Complexity Decision Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Problem] --> B{Requires random access?}\r\n    B -->|Yes| C[Use array instead]\r\n    B -->|No| D{Need to modify?}\r\n    D -->|Yes| E[\"O(n) time O(1) space\"]\r\n    D -->|No| F[\"O(n) time O(n) space for copy\"]\r\n    E --> G{Single pointer sufficient?}\r\n    G -->|Yes| H[Iterative traversal]\r\n    G -->|No| I[Fast & Slow / Dummy node]"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "easy-problems-7",
      children: "Easy Problems (7)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-reverse-linked-list",
      children: "Problem 1: Reverse Linked List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List, Recursion]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Reverse Linked List, In-place Reversal\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Iterative three-pointer (prev, curr, next) reversal — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Copy values to an array and rebuild — O(n) extra space; in-place pointer rewiring is O(1)\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/reverse-linked-list/",
        children: "Reverse Linked List"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-17-reverse-linked-list-ii",
        children: "Reverse Linked List II"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-20-reverse-nodes-in-k-group",
        children: "Reverse Nodes in k-Group"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-4-reverse-string",
        children: "Reverse String"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given the head of a singly linked list, reverse the list and return the new head."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: head = [1, 2, 3, 4, 5]\r\nOutput: [5, 4, 3, 2, 1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ nodes ≤ 5000"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "-5000 ≤ Node.val ≤ 5000"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iterative:"
        }), " Use three pointers (prev, curr, next). Time O(n), Space O(1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive:"
        }), " Reverse rest, then fix head. Time O(n), Space O(n) call stack."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ListNode {\r\n  val: number;\r\n  next: ListNode | null;\r\n  constructor(val?: number, next?: ListNode | null) {\r\n    this.val = val ?? 0;\r\n    this.next = next ?? null;\r\n  }\r\n}\r\n\r\nfunction reverseList(head: ListNode | null): ListNode | null {\r\n  let prev: ListNode | null = null;\r\n  let curr = head;\r\n\r\n  while (curr) {\r\n    const next = curr.next;\r\n    curr.next = prev;\r\n    prev = curr;\r\n    curr = next;\r\n  }\r\n\r\n  return prev;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function arrayToList(arr: number[]): ListNode | null {\r\n  if (!arr.length) return null;\r\n  const head = new ListNode(arr[0]);\r\n  let curr = head;\r\n  for (let i = 1; i < arr.length; i++) {\r\n    curr.next = new ListNode(arr[i]);\r\n    curr = curr.next;\r\n  }\r\n  return head;\r\n}\r\n\r\nfunction listToArray(head: ListNode | null): number[] {\r\n  const result: number[] = [];\r\n  while (head) {\r\n    result.push(head.val);\r\n    head = head.next;\r\n  }\r\n  return result;\r\n}\r\n\r\nconsole.log(listToArray(reverseList(arrayToList([1, 2, 3, 4, 5]))));\r\n// [5, 4, 3, 2, 1]\r\nconsole.log(listToArray(reverseList(arrayToList([1, 2]))));\r\n// [2, 1]\r\nconsole.log(listToArray(reverseList(null)));\r\n// []\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1) iterative | O(n) recursive"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-2-merge-two-sorted-lists",
      children: "Problem 2: Merge Two Sorted Lists"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List, Recursion]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Merge Lists, Dummy Head\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Dummy head + iterative merge — O(n + m) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Recursive merge — O(n + m) call-stack space; dummy-head iteration avoids the stack\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/merge-two-sorted-lists/",
        children: "Merge Two Sorted Lists"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-18-merge-k-sorted-lists",
        children: "Merge K Sorted Lists"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-16-merge-intervals",
        children: "Merge Intervals"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Merge two sorted linked lists into one sorted list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: list1 = [1, 2, 4], list2 = [1, 3, 4]\r\nOutput: [1, 1, 2, 3, 4, 4]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ nodes ≤ 50"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "-100 ≤ Node.val ≤ 100"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iterative:"
        }), " Use dummy head, compare and attach smaller node."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive:"
        }), " Return the smaller head and recurse on next."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {\r\n  const dummy = new ListNode(0);\r\n  let curr = dummy;\r\n\r\n  while (list1 && list2) {\r\n    if (list1.val <= list2.val) {\r\n      curr.next = list1;\r\n      list1 = list1.next;\r\n    } else {\r\n      curr.next = list2;\r\n      list2 = list2.next;\r\n    }\r\n    curr = curr.next;\r\n  }\r\n\r\n  curr.next = list1 || list2;\r\n  return dummy.next;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(listToArray(mergeTwoLists(\r\n  arrayToList([1, 2, 4]),\r\n  arrayToList([1, 3, 4])\r\n))); // [1, 1, 2, 3, 4, 4]\r\n\r\nconsole.log(listToArray(mergeTwoLists(null, arrayToList([0]))));\r\n// [0]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n + m)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-3-linked-list-cycle",
      children: "Problem 3: Linked List Cycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List, Two Pointers]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Fast & Slow Pointer, Tortoise & Hare, Cycle Detection\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Floyd's tortoise & hare — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Hash set of visited nodes — O(n) extra space is avoidable here\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/linked-list-cycle/",
        children: "Linked List Cycle"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-5-middle-of-the-linked-list",
        children: "Middle of the Linked List"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-14-find-the-duplicate-number",
        children: "Find the Duplicate Number"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given head of a linked list, determine if there is a cycle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: head = [3, 2, 0, -4], pos = 1 (cycle at index 1)\r\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ nodes ≤ 10⁴"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "-10⁵ ≤ Node.val ≤ 10⁵"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash Set:"
        }), " Track visited nodes. Time O(n), Space O(n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimal (Floyd's):"
        }), " Slow + fast pointer. If they meet, there's a cycle. Time O(n), Space O(1)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function hasCycle(head: ListNode | null): boolean {\r\n  let slow = head;\r\n  let fast = head;\r\n\r\n  while (fast && fast.next) {\r\n    slow = slow!.next;\r\n    fast = fast.next.next;\r\n    if (slow === fast) return true;\r\n  }\r\n\r\n  return false;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const node1 = new ListNode(3);\r\nconst node2 = new ListNode(2);\r\nconst node3 = new ListNode(0);\r\nconst node4 = new ListNode(-4);\r\nnode1.next = node2;\r\nnode2.next = node3;\r\nnode3.next = node4;\r\nnode4.next = node2; // cycle\r\nconsole.log(hasCycle(node1)); // true\r\n\r\nconst list = arrayToList([1, 2]);\r\nconsole.log(hasCycle(list)); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-4-remove-duplicates-from-sorted-list",
      children: "Problem 4: Remove Duplicates from Sorted List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Linked List, Two Pointers\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Single-pass skip over duplicates — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Hash map of seen values — O(n) extra space; sorted list needs only one pointer\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
        children: "Remove Duplicates from Sorted List"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-16-remove-duplicates-from-sorted-list-ii",
        children: "Remove Duplicates from Sorted List II"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-5-contains-duplicate",
        children: "Contains Duplicate"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a sorted linked list, delete all duplicates such that each element appears only once."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: head = [1, 1, 2]\r\nOutput: [1, 2]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ nodes ≤ 300"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function deleteDuplicates(head: ListNode | null): ListNode | null {\r\n  let curr = head;\r\n\r\n  while (curr && curr.next) {\r\n    if (curr.val === curr.next.val) {\r\n      curr.next = curr.next.next;\r\n    } else {\r\n      curr = curr.next;\r\n    }\r\n  }\r\n\r\n  return head;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(listToArray(deleteDuplicates(arrayToList([1, 1, 2]))));\r\n// [1, 2]\r\nconsole.log(listToArray(deleteDuplicates(arrayToList([1, 1, 2, 3, 3]))));\r\n// [1, 2, 3]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-5-middle-of-the-linked-list",
      children: "Problem 5: Middle of the Linked List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List, Two Pointers]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Fast & Slow Pointer, Tortoise & Hare\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Fast & slow pointers — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Two passes (count nodes, then traverse) — extra full traversal; one slow + fast pass finds it directly\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/middle-of-the-linked-list/",
        children: "Middle of the Linked List"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-3-linked-list-cycle",
        children: "Linked List Cycle"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-14-reorder-list",
        children: "Reorder List"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Return the middle node of the linked list. If there are two middle nodes, return the second middle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: head = [1, 2, 3, 4, 5]\r\nOutput: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ nodes ≤ 100"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function middleNode(head: ListNode | null): ListNode | null {\r\n  let slow = head;\r\n  let fast = head;\r\n\r\n  while (fast && fast.next) {\r\n    slow = slow!.next;\r\n    fast = fast.next.next;\r\n  }\r\n\r\n  return slow;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(middleNode(arrayToList([1, 2, 3, 4, 5]))?.val); // 3\r\nconsole.log(middleNode(arrayToList([1, 2, 3, 4, 5, 6]))?.val); // 4\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-6-remove-linked-list-elements",
      children: "Problem 6: Remove Linked List Elements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Dummy Head\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Dummy head + single pass — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Special-casing head deletion without a dummy — error-prone edge handling; dummy head unifies it\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/remove-linked-list-elements/",
        children: "Remove Linked List Elements"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-9-remove-nth-node-from-end-of-list",
        children: "Remove Nth Node From End of List"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-16-remove-duplicates-from-sorted-list-ii",
        children: "Remove Duplicates from Sorted List II"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Remove all nodes with a given value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: head = [1, 2, 6, 3, 4, 5, 6], val = 6\r\nOutput: [1, 2, 3, 4, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function removeElements(head: ListNode | null, val: number): ListNode | null {\r\n  const dummy = new ListNode(0, head);\r\n  let curr = dummy;\r\n\r\n  while (curr.next) {\r\n    if (curr.next.val === val) {\r\n      curr.next = curr.next.next;\r\n    } else {\r\n      curr = curr.next;\r\n    }\r\n  }\r\n\r\n  return dummy.next;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(listToArray(removeElements(arrayToList([1, 2, 6, 3, 4, 5, 6]), 6)));\r\n// [1, 2, 3, 4, 5]\r\nconsole.log(listToArray(removeElements(arrayToList([]), 1)));\r\n// []\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-7-palindrome-linked-list",
      children: "Problem 7: Palindrome Linked List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Easy\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List, Two Pointers, Stack]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Fast & Slow Pointer, Reverse Linked List, In-place Reversal\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Find mid, reverse second half, compare halves — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Copy values to an array or stack — O(n) extra space is avoidable with mid + reverse\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/palindrome-linked-list/",
        children: "Palindrome Linked List"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-1-reverse-linked-list",
        children: "Reverse Linked List"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-1-valid-palindrome",
        children: "Valid Palindrome"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given the head of a linked list, determine if it's a palindrome."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: head = [1, 2, 2, 1]\r\nOutput: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ nodes ≤ 10⁵"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find mid, reverse second half, compare both halves."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isPalindrome(head: ListNode | null): boolean {\r\n  const findMid = (h: ListNode | null): ListNode | null => {\r\n    let slow = h;\r\n    let fast = h;\r\n    while (fast && fast.next) {\r\n      slow = slow!.next;\r\n      fast = fast.next.next;\r\n    }\r\n    return slow;\r\n  };\r\n\r\n  const reverse = (h: ListNode | null): ListNode | null => {\r\n    let prev = null;\r\n    let curr = h;\r\n    while (curr) {\r\n      const next = curr.next;\r\n      curr.next = prev;\r\n      prev = curr;\r\n      curr = next;\r\n    }\r\n    return prev;\r\n  };\r\n\r\n  const mid = findMid(head);\r\n  let secondHalf = reverse(mid);\r\n  let firstHalf = head;\r\n\r\n  while (secondHalf) {\r\n    if (firstHalf!.val !== secondHalf.val) return false;\r\n    firstHalf = firstHalf!.next;\r\n    secondHalf = secondHalf.next;\r\n  }\r\n\r\n  return true;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(isPalindrome(arrayToList([1, 2, 2, 1]))); // true\r\nconsole.log(isPalindrome(arrayToList([1, 2]))); // false\r\nconsole.log(isPalindrome(arrayToList([1]))); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "medium-problems-10",
      children: "Medium Problems (10)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-8-add-two-numbers",
      children: "Problem 8: Add Two Numbers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List, Math]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Dummy Head, Math\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Dummy head + digit-by-digit carry — O(max(n, m)) time, O(max(n, m)) space for output\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Convert lists to numbers and add — overflows on large lists; carry propagation is required\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/add-two-numbers/",
        children: "Add Two Numbers"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-2-merge-two-sorted-lists",
        children: "Merge Two Sorted Lists"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-10-plus-one",
        children: "Plus One"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given two non-empty linked lists representing two non-negative integers (digits stored in reverse order), add them and return the sum as a linked list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: l1 = [2, 4, 3] (342), l2 = [5, 6, 4] (465)\r\nOutput: [7, 0, 8] (807)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ nodes ≤ 100"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {\r\n  const dummy = new ListNode(0);\r\n  let curr = dummy;\r\n  let carry = 0;\r\n\r\n  while (l1 || l2 || carry) {\r\n    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;\r\n    carry = Math.floor(sum / 10);\r\n    curr.next = new ListNode(sum % 10);\r\n    curr = curr.next;\r\n    if (l1) l1 = l1.next;\r\n    if (l2) l2 = l2.next;\r\n  }\r\n\r\n  return dummy.next;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(listToArray(addTwoNumbers(\r\n  arrayToList([2, 4, 3]),\r\n  arrayToList([5, 6, 4])\r\n))); // [7, 0, 8]\r\n\r\nconsole.log(listToArray(addTwoNumbers(\r\n  arrayToList([0]),\r\n  arrayToList([0])\r\n))); // [0]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(max(n, m))\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(max(n, m))"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-9-remove-nth-node-from-end-of-list",
      children: "Problem 9: Remove Nth Node From End of List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List, Two Pointers]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Two Pointers, Dummy Head\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Dummy head + two pointers with an n-node gap — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Two passes (find length, then delete) — requires a second traversal; the one-pass gap method is better\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        children: "Remove Nth Node From End of List"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-13-rotate-list",
        children: "Rotate List"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-6-remove-linked-list-elements",
        children: "Remove Linked List Elements"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Remove the nth node from the end of the list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: head = [1, 2, 3, 4, 5], n = 2\r\nOutput: [1, 2, 3, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ nodes ≤ 30"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ n ≤ nodes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Two passes:"
        }), " Find length, then remove len-n."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimal (One pass):"
        }), " Use dummy node + two pointers with gap n."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {\r\n  const dummy = new ListNode(0, head);\r\n  let slow = dummy;\r\n  let fast = dummy;\r\n\r\n  for (let i = 0; i <= n; i++) {\r\n    fast = fast.next!;\r\n  }\r\n\r\n  while (fast) {\r\n    slow = slow.next!;\r\n    fast = fast.next;\r\n  }\r\n\r\n  slow.next = slow.next!.next;\r\n  return dummy.next;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(listToArray(removeNthFromEnd(arrayToList([1, 2, 3, 4, 5]), 2)));\r\n// [1, 2, 3, 5]\r\nconsole.log(listToArray(removeNthFromEnd(arrayToList([1]), 1)));\r\n// []\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-10-swap-nodes-in-pairs",
      children: "Problem 10: Swap Nodes in Pairs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List, Recursion]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Dummy Head, In-place Reversal\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Dummy head + iterative pair swap — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Recursive swap — O(n) call-stack space; iterative dummy-head loop stays O(1)\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/swap-nodes-in-pairs/",
        children: "Swap Nodes in Pairs"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-20-reverse-nodes-in-k-group",
        children: "Reverse Nodes in k-Group"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-1-reverse-linked-list",
        children: "Reverse Linked List"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Swap every two adjacent nodes in a linked list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: head = [1, 2, 3, 4]\r\nOutput: [2, 1, 4, 3]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ nodes ≤ 100"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function swapPairs(head: ListNode | null): ListNode | null {\r\n  const dummy = new ListNode(0, head);\r\n  let prev = dummy;\r\n\r\n  while (prev.next && prev.next.next) {\r\n    const first = prev.next;\r\n    const second = prev.next.next;\r\n\r\n    first.next = second.next;\r\n    second.next = first;\r\n    prev.next = second;\r\n\r\n    prev = first;\r\n  }\r\n\r\n  return dummy.next;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(listToArray(swapPairs(arrayToList([1, 2, 3, 4]))));\r\n// [2, 1, 4, 3]\r\nconsole.log(listToArray(swapPairs(arrayToList([1, 2, 3]))));\r\n// [2, 1, 3]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-11-odd-even-linked-list",
      children: "Problem 11: Odd Even Linked List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Two Pointers, In-place Reversal\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Two-pointer odd/even weaving in place — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Build two separate lists then concatenate — extra node allocation; single-pass weaving is O(1) space\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/odd-even-linked-list/",
        children: "Odd Even Linked List"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-14-reorder-list",
        children: "Reorder List"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-4-move-zeroes",
        children: "Move Zeroes"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Group all odd-indexed nodes together followed by even-indexed nodes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: head = [1, 2, 3, 4, 5]\r\nOutput: [1, 3, 5, 2, 4]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ nodes ≤ 10⁴"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function oddEvenList(head: ListNode | null): ListNode | null {\r\n  if (!head) return null;\r\n\r\n  let odd = head;\r\n  let even = head.next;\r\n  const evenHead = even;\r\n\r\n  while (even && even.next) {\r\n    odd.next = even.next;\r\n    odd = odd.next;\r\n    even.next = odd.next;\r\n    even = even.next;\r\n  }\r\n\r\n  odd.next = evenHead;\r\n  return head;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(listToArray(oddEvenList(arrayToList([1, 2, 3, 4, 5]))));\r\n// [1, 3, 5, 2, 4]\r\nconsole.log(listToArray(oddEvenList(arrayToList([1]))));\r\n// [1]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-12-intersection-of-two-linked-lists",
      children: "Problem 12: Intersection of Two Linked Lists"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List, Two Pointers]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Two Pointers\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Two-pointer traversal switch (a/b swap) — O(n + m) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Hash set of one list's nodes — O(n) extra space is avoidable with pointer switching\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
        children: "Intersection of Two Linked Lists"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-3-linked-list-cycle",
        children: "Linked List Cycle"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-9-intersection-of-two-arrays-ii",
        children: "Intersection of Two Arrays II"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the node at which the intersection of two singly linked lists begins."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: intersectVal = 8, listA = [4, 1, 8, 4, 5], listB = [5, 6, 1, 8, 4, 5]\r\nOutput: Intersected at '8'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ nodes ≤ 3 × 10⁴"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash Set:"
        }), " Store visited nodes. Time O(n+m), Space O(n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimal (Two Pointers):"
        }), " Align lengths or use a/b traversal switch. Time O(n+m), Space O(1)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {\r\n  let a = headA;\r\n  let b = headB;\r\n\r\n  while (a !== b) {\r\n    a = a ? a.next : headB;\r\n    b = b ? b.next : headA;\r\n  }\r\n\r\n  return a;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Create intersecting lists\r\nconst common = new ListNode(8, new ListNode(4, new ListNode(5)));\r\nconst headA = new ListNode(4, new ListNode(1, common));\r\nconst headB = new ListNode(5, new ListNode(6, new ListNode(1, common)));\r\nconsole.log(getIntersectionNode(headA, headB)?.val); // 8\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n + m)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-13-rotate-list",
      children: "Problem 13: Rotate List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List, Two Pointers]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Linked List, Two Pointers\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Find length, link tail to head, advance len - k — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Rotate one node at a time k times — O(n·k); k mod len with one traversal is O(n)\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/rotate-list/",
        children: "Rotate List"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-9-remove-nth-node-from-end-of-list",
        children: "Remove Nth Node From End of List"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-19-rotate-array",
        children: "Rotate Array"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Rotate the linked list to the right by k places."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: head = [1, 2, 3, 4, 5], k = 2\r\nOutput: [4, 5, 1, 2, 3]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ nodes ≤ 500"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function rotateRight(head: ListNode | null, k: number): ListNode | null {\r\n  if (!head || !head.next || k === 0) return head;\r\n\r\n  let len = 1;\r\n  let tail = head;\r\n  while (tail.next) {\r\n    tail = tail.next;\r\n    len++;\r\n  }\r\n\r\n  k = k % len;\r\n  if (k === 0) return head;\r\n\r\n  tail.next = head; // make circular\r\n\r\n  let newTail = head;\r\n  for (let i = 0; i < len - k - 1; i++) {\r\n    newTail = newTail.next!;\r\n  }\r\n\r\n  const newHead = newTail.next;\r\n  newTail.next = null;\r\n\r\n  return newHead;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(listToArray(rotateRight(arrayToList([1, 2, 3, 4, 5]), 2)));\r\n// [4, 5, 1, 2, 3]\r\nconsole.log(listToArray(rotateRight(arrayToList([1, 2]), 1)));\r\n// [2, 1]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-14-reorder-list",
      children: "Problem 14: Reorder List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List, Two Pointers]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Fast & Slow Pointer, Reverse Linked List, Two Pointers\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Find mid, reverse second half, weave halves — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Copy nodes into an array and re-link — O(n) extra space is avoidable with mid + reverse\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/reorder-list/",
        children: "Reorder List"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-7-palindrome-linked-list",
        children: "Palindrome Linked List"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-5-middle-of-the-linked-list",
        children: "Middle of the Linked List"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given L0 → L1 → … → Ln-1 → Ln, reorder to L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: head = [1, 2, 3, 4]\r\nOutput: [1, 4, 2, 3]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function reorderList(head: ListNode | null): void {\r\n  if (!head) return;\r\n\r\n  let slow = head;\r\n  let fast = head;\r\n  while (fast && fast.next) {\r\n    slow = slow.next!;\r\n    fast = fast.next.next;\r\n  }\r\n\r\n  let prev: ListNode | null = null;\r\n  let curr: ListNode | null = slow;\r\n  while (curr) {\r\n    const next = curr.next;\r\n    curr.next = prev;\r\n    prev = curr;\r\n    curr = next;\r\n  }\r\n\r\n  let first: ListNode | null = head;\r\n  let second: ListNode | null = prev;\r\n\r\n  while (second?.next) {\r\n    const temp1 = first!.next;\r\n    const temp2 = second.next;\r\n    first!.next = second;\r\n    second.next = temp1;\r\n    first = temp1;\r\n    second = temp2;\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const list = arrayToList([1, 2, 3, 4]);\r\nreorderList(list);\r\nconsole.log(listToArray(list)); // [1, 4, 2, 3]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-15-sort-list",
      children: "Problem 15: Sort List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List, Sorting, Merge Sort]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Merge Sort, Fast & Slow Pointer, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Top-down merge sort (mid via fast & slow) — O(n log n) time, O(log n) recursion space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Copy to an array and sort — O(n) extra space; linked lists need no random access, so merge sort works in place\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/sort-list/",
        children: "Sort List"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-2-merge-two-sorted-lists",
        children: "Merge Two Sorted Lists"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-30-count-of-smaller-numbers-after-self",
        children: "Count of Smaller Numbers After Self"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Sort a linked list in O(n log n) time and O(1) space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: head = [4, 2, 1, 3]\r\nOutput: [1, 2, 3, 4]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ nodes ≤ 5 × 10⁴"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function sortList(head: ListNode | null): ListNode | null {\r\n  if (!head || !head.next) return head;\r\n\r\n  let slow = head;\r\n  let fast = head.next;\r\n  while (fast && fast.next) {\r\n    slow = slow.next!;\r\n    fast = fast.next.next;\r\n  }\r\n\r\n  const mid = slow.next;\r\n  slow.next = null;\r\n\r\n  const left = sortList(head);\r\n  const right = sortList(mid);\r\n\r\n  return mergeTwoLists(left, right);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(listToArray(sortList(arrayToList([4, 2, 1, 3]))));\r\n// [1, 2, 3, 4]\r\nconsole.log(listToArray(sortList(arrayToList([-1, 5, 3, 4, 0]))));\r\n// [-1, 0, 3, 4, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(log n) (recursion stack)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-16-remove-duplicates-from-sorted-list-ii",
      children: "Problem 16: Remove Duplicates from Sorted List II"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Dummy Head, Linked List\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Dummy head + skip duplicate runs — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Frequency hash map pass — O(n) extra space; the sorted list allows single-pass run skipping\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
        children: "Remove Duplicates from Sorted List II"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-4-remove-duplicates-from-sorted-list",
        children: "Remove Duplicates from Sorted List"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-5-contains-duplicate",
        children: "Contains Duplicate"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Remove all nodes that have duplicate numbers, leaving only distinct numbers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: head = [1, 2, 3, 3, 4, 4, 5]\r\nOutput: [1, 2, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function deleteDuplicates2(head: ListNode | null): ListNode | null {\r\n  const dummy = new ListNode(0, head);\r\n  let prev = dummy;\r\n  let curr = head;\r\n\r\n  while (curr) {\r\n    while (curr.next && curr.val === curr.next.val) {\r\n      curr = curr.next;\r\n    }\r\n    if (prev.next === curr) {\r\n      prev = prev.next;\r\n    } else {\r\n      prev.next = curr.next;\r\n    }\r\n    curr = curr.next;\r\n  }\r\n\r\n  return dummy.next;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(listToArray(deleteDuplicates2(arrayToList([1, 2, 3, 3, 4, 4, 5]))));\r\n// [1, 2, 5]\r\nconsole.log(listToArray(deleteDuplicates2(arrayToList([1, 1, 1, 2, 3]))));\r\n// [2, 3]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-17-reverse-linked-list-ii",
      children: "Problem 17: Reverse Linked List II"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Medium\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Reverse Linked List, In-place Reversal, Dummy Head\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Dummy head + in-place reversal of the [left, right] sublist — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Rebuild the list via an array — O(n) extra space; in-place pointer rewiring is O(1)\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/reverse-linked-list-ii/",
        children: "Reverse Linked List II"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-1-reverse-linked-list",
        children: "Reverse Linked List"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-10-swap-nodes-in-pairs",
        children: "Swap Nodes in Pairs"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-19-reverse-words-in-a-string",
        children: "Reverse Words in a String"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Reverse a linked list from position left to right. 1-indexed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: head = [1, 2, 3, 4, 5], left = 2, right = 4\r\nOutput: [1, 4, 3, 2, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {\r\n  const dummy = new ListNode(0, head);\r\n  let prev = dummy;\r\n\r\n  for (let i = 0; i < left - 1; i++) {\r\n    prev = prev.next!;\r\n  }\r\n\r\n  let curr = prev.next;\r\n  for (let i = 0; i < right - left; i++) {\r\n    const next = curr!.next;\r\n    curr!.next = next!.next;\r\n    next!.next = prev.next;\r\n    prev.next = next;\r\n  }\r\n\r\n  return dummy.next;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(listToArray(reverseBetween(arrayToList([1, 2, 3, 4, 5]), 2, 4)));\r\n// [1, 4, 3, 2, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hard-problems-3",
      children: "Hard Problems (3)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-18-merge-k-sorted-lists",
      children: "Problem 18: Merge K Sorted Lists"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft] [Apple]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List, Divide and Conquer, Heap]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Priority Queue/Heap, Dummy Head, Recursion\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Min-heap of k heads — O(n log k) time, O(k) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Merging two lists k−1 times sequentially — O(n·k) and slow for large k; the heap merges all lists at once\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/merge-k-sorted-lists/",
        children: "Merge K Sorted Lists"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-2-merge-two-sorted-lists",
        children: "Merge Two Sorted Lists"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-15-sort-list",
        children: "Sort List"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/01-arrays#problem-16-merge-intervals",
        children: "Merge Intervals"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Merge k sorted linked lists into one sorted list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: lists = [[1, 4, 5], [1, 3, 4], [2, 6]]\r\nOutput: [1, 1, 2, 3, 4, 4, 5, 6]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "k == lists.length"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ k ≤ 10⁴"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0 ≤ nodes per list ≤ 500"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Divide & Conquer:"
        }), " Merge pairs recursively. Time O(n log k), Space O(log k)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Min Heap:"
        }), " Priority queue of heads. Time O(n log k), Space O(k)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function mergeKLists(lists: Array<ListNode | null>): ListNode | null {\r\n  if (!lists.length) return null;\r\n\r\n  const merge = (l: number, r: number): ListNode | null => {\r\n    if (l === r) return lists[l];\r\n    if (l > r) return null;\r\n    const mid = Math.floor((l + r) / 2);\r\n    return mergeTwoLists(merge(l, mid), merge(mid + 1, r));\r\n  };\r\n\r\n  return merge(0, lists.length - 1);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const lists = [\r\n  arrayToList([1, 4, 5]),\r\n  arrayToList([1, 3, 4]),\r\n  arrayToList([2, 6])\r\n];\r\nconsole.log(listToArray(mergeKLists(lists)));\r\n// [1, 1, 2, 3, 4, 4, 5, 6]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n log k)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(log k)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-19-copy-list-with-random-pointer",
      children: "Problem 19: Copy List with Random Pointer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List, Hash Table]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Hash Map, Two Pointers\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " In-place interleaving (clone next to original, set randoms, split) — O(n) time, O(1) space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Hash map from original to clone — O(n) extra space; interleaving achieves O(1) space\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/copy-list-with-random-pointer/",
        children: "Copy List with Random Pointer"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/06-graphs#problem-7-clone-graph",
        children: "Clone Graph"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-12-intersection-of-two-linked-lists",
        children: "Intersection of Two Linked Lists"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-1-reverse-linked-list",
        children: "Reverse Linked List"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A linked list has an additional random pointer that could point to any node or null. Create a deep copy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]\r\nOutput: [[7,null],[13,0],[11,4],[10,2],[1,0]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interleaving:"
        }), " Create clones next to originals, set random pointers, separate."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class RandomNode {\r\n  val: number;\r\n  next: RandomNode | null;\r\n  random: RandomNode | null;\r\n  constructor(val?: number, next?: RandomNode | null, random?: RandomNode | null) {\r\n    this.val = val ?? 0;\r\n    this.next = next ?? null;\r\n    this.random = random ?? null;\r\n  }\r\n}\r\n\r\nfunction copyRandomList(head: RandomNode | null): RandomNode | null {\r\n  if (!head) return null;\r\n\r\n  let curr: RandomNode | null = head;\r\n  while (curr) {\r\n    const clone = new RandomNode(curr.val, curr.next, null);\r\n    curr.next = clone;\r\n    curr = clone.next;\r\n  }\r\n\r\n  curr = head;\r\n  while (curr) {\r\n    if (curr.random) {\r\n      curr.next!.random = curr.random.next;\r\n    }\r\n    curr = curr.next!.next;\r\n  }\r\n\r\n  const dummy = new RandomNode(0);\r\n  let cloneCurr: RandomNode | null = dummy;\r\n  curr = head;\r\n\r\n  while (curr) {\r\n    cloneCurr.next = curr.next;\r\n    cloneCurr = cloneCurr.next!;\r\n    curr.next = curr.next!.next;\r\n    curr = curr.next;\r\n  }\r\n\r\n  return dummy.next;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// [Implementation test with random pointers]\r\nconst n1 = new RandomNode(7);\r\nconst n2 = new RandomNode(13);\r\nconst n3 = new RandomNode(11);\r\nconst n4 = new RandomNode(10);\r\nconst n5 = new RandomNode(1);\r\nn1.next = n2; n2.next = n3; n3.next = n4; n4.next = n5;\r\nn2.random = n1; n3.random = n5; n4.random = n3; n5.random = n1;\r\n\r\nconst copied = copyRandomList(n1);\r\nconsole.log(copied?.val); // 7\r\nconsole.log(copied?.next?.random?.val); // 7\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(1) (excluding output)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-20-reverse-nodes-in-k-group",
      children: "Problem 20: Reverse Nodes in k-Group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🏷️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Companies:"
      }), " [Amazon] [Google] [Meta] [Microsoft]\r\n📊 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Difficulty:"
      }), " Hard\r\n📂 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics:"
      }), " [Linked List, Recursion]\r\n🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Reverse Linked List, Recursion, In-place Reversal\r\n✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Option:"
      }), " Iterative k-node reversal + recursion on the rest — O(n) time, O(n/k) recursion space\r\n❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Optimal:"
      }), " Copy values into an array and rebuild — O(n) extra space; in-place k-group reversal is O(1) apart from recursion\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LeetCode:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        children: "Reverse Nodes in k-Group"
      }), "\r\n🔗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-17-reverse-linked-list-ii",
        children: "Reverse Linked List II"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/03-linked-lists#problem-10-swap-nodes-in-pairs",
        children: "Swap Nodes in Pairs"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/coding-problems/02-strings#problem-4-reverse-string",
        children: "Reverse String"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Reverse nodes in groups of k. If remaining nodes < k, keep original order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: head = [1, 2, 3, 4, 5], k = 2\r\nOutput: [2, 1, 4, 3, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 ≤ k ≤ nodes ≤ 5000"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function reverseKGroup(head: ListNode | null, k: number): ListNode | null {\r\n  let count = 0;\r\n  let curr = head;\r\n\r\n  while (curr && count < k) {\r\n    curr = curr.next;\r\n    count++;\r\n  }\r\n\r\n  if (count < k) return head;\r\n\r\n  let prev: ListNode | null = null;\r\n  let currGroup: ListNode | null = head;\r\n  for (let i = 0; i < k; i++) {\r\n    const next = currGroup!.next;\r\n    currGroup!.next = prev;\r\n    prev = currGroup;\r\n    currGroup = next;\r\n  }\r\n\r\n  head!.next = reverseKGroup(currGroup, k);\r\n  return prev;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(listToArray(reverseKGroup(arrayToList([1, 2, 3, 4, 5]), 2)));\r\n// [2, 1, 4, 3, 5]\r\nconsole.log(listToArray(reverseKGroup(arrayToList([1, 2, 3, 4, 5]), 3)));\r\n// [3, 2, 1, 4, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " O(n)\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n/k) ≈ O(n) recursion stack in worst case"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary-table",
      children: "Summary Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Difficulty"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Companies"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse Linked List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge Two Sorted Lists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked List Cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove Duplicates from Sorted List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Middle of Linked List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove Linked List Elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palindrome Linked List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add Two Numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(max(n,m))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(max(n,m))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove Nth Node From End"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swap Nodes in Pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Odd Even Linked List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intersection of Two Linked Lists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotate List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reorder List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove Duplicates from Sorted List II"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse Linked List II"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge K Sorted Lists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log k)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy List with Random Pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse Nodes in k-Group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon, Google, Meta, Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n/k)"
          })]
        })]
      })]
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



/***/ }

}]);