import React, { useState, useEffect, useCallback } from "react";

/* ===== Theme ===== */
interface ThemeVars {
  bg: string; surface: string; surface2: string; text: string;
  textSecondary: string; textTertiary: string;
  accent: string; accentLight: string; accentGreen: string;
  accentGreenLight: string; accentBlue: string;
  accentBlueLight: string; accentRed: string; accentRedLight: string;
  border: string; divider: string; shadow: string;
}

const lightVars: ThemeVars = {
  bg: "#F5F7FB", surface: "#FFFFFF", surface2: "#F8FAFC", text: "#1E293B",
  textSecondary: "#64748B", textTertiary: "#94A3B8",
  accent: "#F97316", accentLight: "#FFF7ED", accentGreen: "#22C55E",
  accentGreenLight: "#F0FDF4", accentBlue: "#3B82F6",
  accentBlueLight: "#EFF6FF", accentRed: "#EF4444", accentRedLight: "#FEF2F2",
  border: "rgba(226,232,240,0.7)", divider: "#F1F5F9",
  shadow: "0 4px 12px rgba(0,0,0,0.06)",
};
const darkVars: ThemeVars = {
  bg: "#0F172A", surface: "#1E293B", surface2: "#1a2332", text: "#F1F5F9",
  textSecondary: "#94A3B8", textTertiary: "#64748B",
  accent: "#FB923C", accentLight: "rgba(249,115,22,0.12)", accentGreen: "#4ADE80",
  accentGreenLight: "rgba(34,197,94,0.1)", accentBlue: "#60A5FA",
  accentBlueLight: "rgba(59,130,246,0.12)", accentRed: "#F87171", accentRedLight: "rgba(239,68,68,0.12)",
  border: "rgba(51,65,85,0.8)", divider: "#1E293B",
  shadow: "0 4px 12px rgba(0,0,0,0.3)",
};

const cssVars = (v: ThemeVars): string =>
  `--sd-bg:${v.bg};--sd-surface:${v.surface};--sd-surface2:${v.surface2};--sd-text:${v.text};--sd-text-secondary:${v.textSecondary};--sd-text-tertiary:${v.textTertiary};--sd-accent:${v.accent};--sd-accent-light:${v.accentLight};--sd-accent-green:${v.accentGreen};--sd-accent-green-light:${v.accentGreenLight};--sd-accent-blue:${v.accentBlue};--sd-accent-blue-light:${v.accentBlueLight};--sd-accent-red:${v.accentRed};--sd-accent-red-light:${v.accentRedLight};--sd-border:${v.border};--sd-divider:${v.divider};--sd-shadow:${v.shadow}`;

const responsiveCss = `
@media (max-width: 767px) {
  .sd-sidebar-overlay { display: block !important; }
  .sd-stats-grid { grid-template-columns: 1fr !important; }
  .sd-complexity-grid { grid-template-columns: 1fr !important; }
}
@keyframes sd-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
@keyframes sd-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
@keyframes sd-fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
button:focus-visible, [role="radio"]:focus-visible, [tabindex]:focus-visible, a:focus-visible {
  outline: 2px solid var(--sd-accent);
  outline-offset: 2px;
}`;

const ThemeScript = ({ dark }: { dark: boolean }) => {
  const v = dark ? darkVars : lightVars;
  return <style>{`:root { ${cssVars(v)} }`}</style>;
};

/* ===== Types ===== */
export interface Chapter {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  timeComplexities: { label: string; value: string }[];
  codeSnippet: string;
  flashcard: { question: string; hint: string; answer: string };
  quiz: { question: string; options: string[]; answer: number; explanation: string };
  exercises: string[];
  nextTopic: string;
}

/* ===== Data ===== */
const arrayChapter: Chapter = {
  id: "arrays",
  title: "Arrays",
  description: "Master the fundamental building blocks of efficient software. Each concept is presented in focused, digestible sections.",
  objectives: [
    "Understand contiguous memory allocation and index-based O(1) access",
    "Analyze time complexity of insertion, deletion, and traversal",
    "Implement dynamic arrays with geometric resizing",
    "Apply arrays to sliding-window and two-pointer problems",
  ],
  timeComplexities: [
    { label: "Access", value: "O(1)" },
    { label: "Search", value: "O(n)" },
    { label: "Insert (end)", value: "O(1) amortized" },
    { label: "Insert (middle)", value: "O(n)" },
    { label: "Delete", value: "O(n)" },
  ],
  codeSnippet: `class DynamicArray<T> {
  private data: T[] = [];
  private length = 0;

  push(item: T): void {
    if (this.length === this.data.length) {
      const newSize = this.data.length === 0
        ? 1 : this.data.length * 2;
      const newData = new Array(newSize);
      for (let i = 0; i < this.length; i++)
        newData[i] = this.data[i];
      this.data = newData;
    }
    this.data[this.length] = item;
    this.length++;
  }

  get(idx: number): T | undefined {
    return idx < this.length ? this.data[idx] : undefined;
  }
}`,
  flashcard: {
    question: "What is the time complexity of inserting an element at index 0 in an array of size n?",
    hint: "Think about what happens to the existing elements",
    answer: "O(n) \u2014 every element shifts right to make room at index 0.",
  },
  quiz: {
    question: "What is the time complexity of inserting at index 0 in an array of size n?",
    options: [
      "O(1) \u2013 direct index assignment",
      "O(n) \u2013 all elements must shift right",
      "O(log n) \u2013 binary search finds the spot",
      "O(n\u00b2) \u2013 nested shift operations",
    ],
    answer: 1,
    explanation: "Option 2 \u2014 O(n), all elements must shift right.",
  },
  exercises: [
    "Reverse an array in-place \u2014 O(n) time, O(1) space",
    "Implement a circular buffer with head/tail pointers",
    "Find the max subarray sum (Kadane's algorithm)",
  ],
  nextTopic: "Linked Lists \u2014 node-based structures and dynamic memory.",
};

const linkedListChapter: Chapter = {
  id: "linked-lists",
  title: "Linked Lists",
  description: "Understand node-based dynamic memory allocation and pointer manipulation for efficient data structures.",
  objectives: [
    "Understand node-based dynamic memory allocation",
    "Analyze time complexity of operations at head, tail, and middle",
    "Implement singly linked list with insertion, deletion, and traversal",
    "Apply linked lists to solve pointer-based problems",
  ],
  timeComplexities: [
    { label: "Access (head)", value: "O(1)" },
    { label: "Access (by index)", value: "O(n)" },
    { label: "Search", value: "O(n)" },
    { label: "Insert (head)", value: "O(1)" },
    { label: "Delete (head)", value: "O(1)" },
  ],
  codeSnippet: `class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;
  constructor(value: T) { this.value = value; }
}

class SinglyLinkedList<T> {
  head: ListNode<T> | null = null;

  insertHead(value: T): void {
    const node = new ListNode(value);
    node.next = this.head;
    this.head = node;
  }

  deleteHead(): T | null {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  find(predicate: (v: T) => boolean): ListNode<T> | null {
    let curr = this.head;
    while (curr) {
      if (predicate(curr.value)) return curr;
      curr = curr.next;
    }
    return null;
  }
}`,
  flashcard: {
    question: "What is the time complexity of searching for a value in a singly linked list?",
    hint: "Think about traversal requirements",
    answer: "O(n) \u2014 you must traverse from the head, following each pointer until the target is found.",
  },
  quiz: {
    question: "What is the time complexity of searching for a value in a singly linked list?",
    options: [
      "O(1) \u2014 direct pointer access",
      "O(log n) \u2014 binary search on nodes",
      "O(n) \u2014 linear traversal required",
      "O(n\u00b2) \u2014 nested loop search",
    ],
    answer: 2,
    explanation: "Option 3 \u2014 O(n), you must traverse from head to tail in the worst case.",
  },
  exercises: [
    "Reverse a singly linked list iteratively \u2014 O(n) time, O(1) space",
    "Detect a cycle in a linked list using Floyd's tortoise-and-hare algorithm",
    "Merge two sorted linked lists into one sorted list",
  ],
  nextTopic: "Recursion \u2014 divide-and-conquer and stack-based problem solving.",
};

const recursionChapter: Chapter = {
  id: "recursion",
  title: "Recursion",
  description: "Learn recursive problem-solving patterns and how to analyze recursive algorithms using recurrence relations.",
  objectives: [
    "Understand base case and recursive case structure",
    "Analyze the call stack and stack overflow risks",
    "Differentiate tail recursion from head recursion",
    "Apply divide-and-conquer recursion to sorting and tree problems",
  ],
  timeComplexities: [
    { label: "Factorial", value: "O(n)" },
    { label: "Fibonacci (naive)", value: "O(2\u207f)" },
    { label: "Binary Search", value: "O(log n)" },
    { label: "Merge Sort", value: "O(n log n)" },
    { label: "Tower of Hanoi", value: "O(2\u207f)" },
  ],
  codeSnippet: `function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function binarySearch(
  arr: number[], target: number,
  lo = 0, hi = arr.length - 1
): number {
  if (lo > hi) return -1;
  const mid = lo + ((hi - lo) >>> 1);
  if (arr[mid] === target) return mid;
  if (target < arr[mid])
    return binarySearch(arr, target, lo, mid - 1);
  return binarySearch(arr, target, mid + 1, hi);
}`,
  flashcard: {
    question: "What is the base case for the factorial function?",
    hint: "What condition stops the recursion?",
    answer: "n <= 1 \u2014 returns 1 and stops the recursive calls.",
  },
  quiz: {
    question: "What is the base case for the factorial function?",
    options: [
      "n === 0",
      "n <= 1",
      "n === 2",
      "n < 0",
    ],
    answer: 1,
    explanation: "Option 2 \u2014 n <= 1 returns 1 and terminates the recursion.",
  },
  exercises: [
    "Implement factorial iteratively and compare stack usage",
    "Solve the Tower of Hanoi for n disks using recursion",
    "Implement binary search recursively and identify its recurrence relation",
  ],
  nextTopic: "Trees \u2014 hierarchical data structures and recursive traversal.",
};

const chapters: Chapter[] = [arrayChapter, linkedListChapter, recursionChapter];

/* ===== Sub-components ===== */

const Sidebar = ({
  isMobile,
  sidebarOpen,
  onClose,
}: {
  isMobile: boolean;
  sidebarOpen: boolean;
  onClose: () => void;
}) => (
  <>
    {isMobile && sidebarOpen && (
      <div
        onClick={onClose}
        className="sd-sidebar-overlay"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.3)",
          zIndex: 99,
          display: "block",
        }}
        aria-hidden="true"
      />
    )}
    <aside
      role="navigation"
      aria-label="Main navigation"
      style={{
        width: 240,
        flexShrink: 0,
        background: "var(--sd-surface)",
        borderRight: "1px solid var(--sd-border)",
        padding: "32px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        ...(isMobile
          ? {
              position: "fixed" as const,
              top: 0,
              left: 0,
              bottom: 0,
              zIndex: 100,
              display: sidebarOpen ? "flex" : "none",
              boxShadow: "var(--sd-shadow)",
            }
          : {}),
      }}
    >
      <div
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: "var(--sd-text)",
          padding: "0 12px",
          marginBottom: 24,
        }}
        aria-label="StudyFocus"
      >
        StudyFocus
      </div>
      <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {[
          { label: "Dashboard", icon: "\uD83D\uDCD6", active: true },
          { label: "Notes", icon: "\uD83D\uDCDD" },
          { label: "Study Timer", icon: "\u23F1" },
          { label: "Flashcards", icon: "\uD83C\uDCCF" },
          { label: "Progress", icon: "\uD83D\uDCCA" },
        ].map((item) => (
          <a
            key={item.label}
            href="#"
            role="menuitem"
            aria-current={item.active ? "page" : undefined}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 12px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: item.active ? 600 : 500,
              color: item.active ? "var(--sd-accent)" : "var(--sd-text-secondary)",
              background: item.active ? "var(--sd-accent-light)" : "transparent",
              textDecoration: "none",
              transition: "all 0.15s",
            }}
          >
            <span aria-hidden="true">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>
      <div
        style={{
          marginTop: 24,
          padding: "0 12px 8px",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.6px",
          textTransform: "uppercase",
          color: "var(--sd-text-tertiary)",
        }}
      >
        Subjects
      </div>
      <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {[
          { label: "Data Structures", dot: "var(--sd-accent)" },
          { label: "Algorithms", dot: "var(--sd-accent-green)" },
          { label: "Mathematics", dot: "var(--sd-accent-blue)" },
        ].map((s) => (
          <a
            key={s.label}
            href="#"
            role="menuitem"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 12px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              color: "var(--sd-text-secondary)",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: s.dot,
                opacity: 0.7,
                display: "inline-block",
              }}
              aria-hidden="true"
            />
            {s.label}
          </a>
        ))}
      </nav>
    </aside>
  </>
);

const StatCard = ({
  value,
  label,
  trend,
}: {
  value: string;
  label: string;
  trend: string;
}) => (
  <div
    style={{
      background: "var(--sd-surface)",
      border: "1px solid var(--sd-border)",
      borderRadius: 12,
      padding: "20px 24px",
    }}
  >
    <div
      style={{
        fontSize: 26,
        fontWeight: 700,
        color: "var(--sd-text)",
        letterSpacing: "-0.5px",
      }}
    >
      {value}
    </div>
    <div style={{ fontSize: 13, color: "var(--sd-text-secondary)", marginTop: 2 }}>
      {label}
    </div>
    <div
      style={{
        fontSize: 12,
        fontWeight: 600,
        color: "var(--sd-accent-green)",
        marginTop: 4,
      }}
    >
      {trend}
    </div>
  </div>
);

interface QuizOptionProps {
  text: string;
  idx: number;
  selected: boolean;
  revealed: boolean;
  correctAnswer: number;
  onSelect: (idx: number) => void;
}

const QuizOption = ({
  text,
  idx,
  selected,
  revealed,
  correctAnswer,
  onSelect,
}: QuizOptionProps) => {
  const isCorrectAnswer = idx === correctAnswer;
  let borderColor = "var(--sd-border)";
  let bg = "transparent";
  let dotBg = "transparent";
  let dotBorder = "var(--sd-border)";

  if (revealed) {
    if (isCorrectAnswer) {
      borderColor = "var(--sd-accent-green)";
      bg = "var(--sd-accent-green-light)";
      dotBg = "var(--sd-accent-green)";
      dotBorder = "var(--sd-accent-green)";
    } else if (selected && !isCorrectAnswer) {
      borderColor = "var(--sd-accent-red)";
      bg = "var(--sd-accent-red-light)";
      dotBorder = "var(--sd-accent-red)";
    }
  } else if (selected) {
    borderColor = "var(--sd-accent)";
    bg = "var(--sd-accent-light)";
    dotBg = "var(--sd-accent)";
    dotBorder = "var(--sd-accent)";
  }

  return (
    <div
      role="radio"
      aria-checked={selected}
      tabIndex={0}
      onClick={() => !revealed && onSelect(idx)}
      onKeyDown={(e) => {
        if (!revealed && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onSelect(idx);
        }
      }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 16px",
        border: `1px solid ${borderColor}`,
        borderRadius: 8,
        cursor: revealed ? "default" : "pointer",
        background: bg,
        marginBottom: 8,
        transition: "all 0.12s",
      }}
    >
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          border: `2px solid ${dotBorder}`,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {(selected || (revealed && isCorrectAnswer)) && (
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: dotBg || borderColor,
            }}
          />
        )}
      </div>
      <span style={{ fontSize: 14, color: "var(--sd-text)" }}>{text}</span>
    </div>
  );
};

const StreakBadge = ({ streak }: { streak: number }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      padding: "2px 10px",
      borderRadius: 20,
      fontSize: 12,
      fontWeight: 600,
      background: "var(--sd-accent-light)",
      color: "var(--sd-accent)",
      animation: "sd-pulse 0.6s ease",
    }}
    aria-label={`${streak} day streak`}
  >
    <span aria-hidden="true">\uD83D\uDD25</span>
    {streak}
  </span>
);

const LoadingSkeleton = () => (
  <div
    style={{
      display: "flex",
      minHeight: "100vh",
      background: "var(--sd-bg)",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 16,
    }}
  >
    <div
      style={{
        width: 200,
        height: 14,
        borderRadius: 8,
        background:
          "linear-gradient(90deg, var(--sd-divider) 25%, var(--sd-border) 50%, var(--sd-divider) 75%)",
        backgroundSize: "200% 100%",
        animation: "sd-shimmer 1.5s infinite linear",
      }}
    />
    <div
      style={{
        width: 280,
        height: 14,
        borderRadius: 8,
        background:
          "linear-gradient(90deg, var(--sd-divider) 25%, var(--sd-border) 50%, var(--sd-divider) 75%)",
        backgroundSize: "200% 100%",
        animation: "sd-shimmer 1.5s infinite linear",
      }}
    />
    <div
      style={{
        width: 160,
        height: 14,
        borderRadius: 8,
        background:
          "linear-gradient(90deg, var(--sd-divider) 25%, var(--sd-border) 50%, var(--sd-divider) 75%)",
        backgroundSize: "200% 100%",
        animation: "sd-shimmer 1.5s infinite linear 0.2s",
      }}
    />
  </div>
);

/* ===== Main Component ===== */

/**
 * StudyDashboard - A comprehensive study dashboard component for engineering courses.
 *
 * Features:
 * - Multi-chapter support with dropdown selector
 * - Dark/light theme toggle
 * - Interactive quizzes with correct/incorrect feedback and scoring
 * - Active recall flashcards
 * - Time complexity visualization
 * - Code examples
 * - Streak tracking with animation
 * - Responsive mobile layout with sidebar toggle
 * - Keyboard accessible with ARIA attributes
 * - Loading skeleton on mount
 *
 * @returns {JSX.Element} The rendered dashboard
 */
const StudyDashboard = () => {
  const [activeChapterId, setActiveChapterId] = useState("arrays");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [streak, setStreak] = useState(() => Math.floor(Math.random() * 8) + 7);
  const [quizScore, setQuizScore] = useState({ correct: 0, total: 0 });

  const activeChapter = chapters.find((c) => c.id === activeChapterId) || chapters[0];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    setSidebarOpen(false);
  }, [activeChapterId]);

  const resetQuiz = useCallback(() => {
    setSelectedOption(null);
    setShowAnswer(false);
  }, []);

  useEffect(() => {
    resetQuiz();
  }, [activeChapterId, resetQuiz]);

  const handleChapterChange = (id: string) => {
    setActiveChapterId(id);
  };

  const handleQuizSelect = useCallback(
    (idx: number) => {
      if (showAnswer) return;
      setSelectedOption(idx);
      setShowAnswer(true);
      setStreak((s) => (s >= 14 ? 7 : s + 1));
      setQuizScore((prev) => ({
        correct: prev.correct + (idx === activeChapter.quiz.answer ? 1 : 0),
        total: prev.total + 1,
      }));
    },
    [showAnswer, activeChapter.quiz.answer]
  );

  if (loading) {
    return (
      <>
        <ThemeScript dark={dark} />
        <style>{responsiveCss}</style>
        <LoadingSkeleton />
      </>
    );
  }

  return (
    <>
      <ThemeScript dark={dark} />
      <style>{responsiveCss}</style>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          background: "var(--sd-bg)",
        }}
      >
        <Sidebar
          isMobile={isMobile}
          sidebarOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main
          style={{
            flex: 1,
            maxWidth: 960,
            margin: "0 auto",
            padding: isMobile ? "16px 20px" : "40px 48px",
          }}
        >
          {/* Top Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 32,
              paddingBottom: 20,
              borderBottom: "1px solid var(--sd-divider)",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              {isMobile && (
                <button
                  onClick={() => setSidebarOpen((o) => !o)}
                  aria-label="Toggle navigation sidebar"
                  aria-expanded={sidebarOpen}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 20,
                    padding: 4,
                    color: "var(--sd-text)",
                    display: "flex",
                  }}
                >
                  {sidebarOpen ? "\u2715" : "\u2630"}
                </button>
              )}
              <div style={{ fontSize: 13, color: "var(--sd-text-secondary)" }}>
                Dashboard /{" "}
                <span style={{ color: "var(--sd-text)", fontWeight: 500 }}>
                  {activeChapter.title}
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <StreakBadge streak={streak} />
              <span style={{ fontSize: 13, color: "var(--sd-text-secondary)" }}>
                Score: {quizScore.correct}/{quizScore.total}
              </span>
              <span style={{ fontSize: 13, color: "var(--sd-text-secondary)" }}>
                73% complete
              </span>
              <div
                style={{
                  width: isMobile ? 80 : 140,
                  height: 6,
                  background: "var(--sd-divider)",
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "73%",
                    height: "100%",
                    background: "var(--sd-accent)",
                    borderRadius: 3,
                  }}
                />
              </div>
              <button
                onClick={() => setDark((d) => !d)}
                aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                style={{
                  background: "none",
                  border: "1px solid var(--sd-border)",
                  borderRadius: 8,
                  padding: "4px 12px",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--sd-text-secondary)",
                  cursor: "pointer",
                }}
              >
                {dark ? "\u2600" : "\uD83C\uDF19"}
              </button>
            </div>
          </div>

          {/* Title + Chapter Selector */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 8,
            }}
          >
            <h1
              style={{
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: "-0.5px",
                color: "var(--sd-text)",
                margin: 0,
              }}
            >
              {activeChapter.title}
            </h1>
            <select
              value={activeChapterId}
              onChange={(e) => handleChapterChange(e.target.value)}
              aria-label="Select chapter"
              style={{
                padding: "6px 12px",
                borderRadius: 8,
                border: "1px solid var(--sd-border)",
                background: "var(--sd-surface)",
                color: "var(--sd-text)",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              {chapters.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
          <p
            style={{
              color: "var(--sd-text-secondary)",
              fontSize: 14,
              marginBottom: 24,
              maxWidth: "70ch",
              lineHeight: 1.7,
            }}
          >
            {activeChapter.description}
          </p>

          {/* Stats */}
          <div className="sd-stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: 20,
              marginBottom: 24,
            }}
          >
            <StatCard value="8" label="Topics remaining" trend="\u2191 2 this week" />
            <StatCard
              value="42"
              label="Flashcards reviewed"
              trend="\u2191 89% recall"
            />
            <StatCard
              value="6h 12m"
              label="Study time"
              trend="\u2191 18% vs last week"
            />
          </div>

          {/* Learning Objectives */}
          <div
            style={{
              background: "var(--sd-surface)",
              border: "1px solid var(--sd-border)",
              borderRadius: 12,
              padding: "28px 32px",
              marginBottom: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "var(--sd-text)" }}>
                  Learning Objectives
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--sd-text-secondary)",
                    marginTop: 2,
                  }}
                >
                  What you will master
                </div>
              </div>
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 500,
                  background: "var(--sd-bg)",
                  color: "var(--sd-text-secondary)",
                }}
              >
                {activeChapter.title}
              </span>
            </div>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {activeChapter.objectives.map((obj, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    padding: "8px 0",
                    fontSize: 15,
                    color: "var(--sd-text)",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 20,
                      height: 20,
                      flexShrink: 0,
                      background: "var(--sd-accent-green-light)",
                      color: "var(--sd-accent-green)",
                      borderRadius: "50%",
                      fontSize: 11,
                      fontWeight: 700,
                      marginTop: 2,
                    }}
                    aria-hidden="true"
                  >
                    \u2713
                  </span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          {/* Theory + Complexity */}
          <div className="sd-complexity-grid"
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 20,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                padding: "16px 20px",
                background: "var(--sd-accent-light)",
                borderLeft: "3px solid var(--sd-accent)",
                borderRadius: "0 8px 8px 0",
              }}
            >
              {activeChapter.timeComplexities.map((tc) => (
                <div
                  key={tc.label}
                  style={{
                    fontSize: 14,
                    color: "var(--sd-text)",
                    marginBottom: 4,
                  }}
                >
                  <strong>{tc.label}:</strong> {tc.value}
                </div>
              ))}
            </div>
            <div
              style={{
                padding: "16px 20px",
                background: "var(--sd-accent-green-light)",
                borderLeft: "3px solid var(--sd-accent-green)",
                borderRadius: "0 8px 8px 0",
              }}
            >
              <strong style={{ fontSize: 14, color: "var(--sd-text)" }}>
                Key Insight
              </strong>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--sd-text)",
                  margin: "4px 0 0",
                  lineHeight: 1.7,
                }}
              >
                {activeChapter.id === "arrays"
                  ? "Contiguity enables CPU cache prefetching, making array traversal faster than linked-list traversal in practice."
                  : activeChapter.id === "linked-lists"
                  ? "Pointer-based structures allow O(1) insertions at known positions, ideal for real-time and lock-free data structures."
                  : "Every recursive solution can be expressed iteratively, but recursion often yields cleaner divide-and-conquer code."}
              </p>
            </div>
          </div>

          {/* Code Block */}
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "var(--sd-text)",
              marginBottom: 12,
            }}
          >
            Implementation
          </h2>
          <pre
            style={{
              background: "var(--sd-surface2)",
              border: "1px solid var(--sd-border)",
              borderRadius: 8,
              padding: "20px 24px",
              overflowX: "auto",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              lineHeight: 1.7,
              color: "var(--sd-text)",
              marginBottom: 24,
              whiteSpace: "pre",
            }}
          >
            {activeChapter.codeSnippet}
          </pre>

          {/* Active Recall Flashcard */}
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "var(--sd-text)",
              marginBottom: 12,
            }}
          >
            Active Recall
          </h2>
          <div
            style={{
              background: "var(--sd-surface)",
              border: "1px solid var(--sd-border)",
              borderRadius: 12,
              padding: "32px 28px",
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            <div
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: "var(--sd-text)",
                marginBottom: 4,
              }}
            >
              {activeChapter.flashcard.question}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "var(--sd-text-tertiary)",
                marginBottom: 16,
              }}
            >
              {activeChapter.flashcard.hint}
            </div>
            <div
              style={{
                padding: 16,
                background: "var(--sd-accent-light)",
                borderRadius: 8,
                fontSize: 15,
                color: "var(--sd-text)",
                borderLeft: "3px solid var(--sd-accent)",
                textAlign: "left",
              }}
            >
              <strong>{activeChapter.flashcard.answer}</strong>
            </div>
          </div>

          {/* Quiz */}
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "var(--sd-text)",
              marginBottom: 16,
            }}
          >
            Quick Check
          </h2>
          <p
            style={{
              fontWeight: 600,
              fontSize: 15,
              color: "var(--sd-text)",
              marginBottom: 12,
            }}
          >
            {activeChapter.quiz.question}
          </p>

          <div role="radiogroup" aria-label="Quiz options">
            {activeChapter.quiz.options.map((opt, idx) => (
              <QuizOption
                key={idx}
                text={opt}
                idx={idx}
                selected={selectedOption === idx}
                revealed={showAnswer}
                correctAnswer={activeChapter.quiz.answer}
                onSelect={handleQuizSelect}
              />
            ))}
          </div>

          {showAnswer && (
            <div
              style={{
                marginTop: 16,
                padding: "16px 20px",
                background: "var(--sd-bg)",
                borderRadius: 8,
                borderLeft: `3px solid ${
                  selectedOption === activeChapter.quiz.answer
                    ? "var(--sd-accent-green)"
                    : "var(--sd-accent-red)"
                }`,
                fontSize: 14,
                color: "var(--sd-text-secondary)",
                animation: "sd-fadeIn 0.3s ease",
              }}
              role="alert"
            >
              <strong style={{ color: "var(--sd-text)" }}>Answer: </strong>
              {activeChapter.quiz.explanation}
              {selectedOption === activeChapter.quiz.answer ? (
                <span style={{ color: "var(--sd-accent-green)", fontWeight: 600, marginLeft: 8 }}>
                  \u2705 Correct
                </span>
              ) : (
                <span style={{ color: "var(--sd-accent-red)", fontWeight: 600, marginLeft: 8 }}>
                  \u274C Incorrect
                </span>
              )}
            </div>
          )}

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid var(--sd-divider)",
              margin: "32px 0",
            }}
          />

          {/* Exercises */}
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "var(--sd-text)",
              marginBottom: 16,
            }}
          >
            Practice Exercises
          </h2>
          <div
            style={{
              background: "var(--sd-accent-light)",
              border: "1px solid var(--sd-accent-light)",
              borderRadius: 12,
              padding: "28px 32px",
            }}
          >
            <ol style={{ listStyle: "none", padding: 0, counterReset: "ex" }}>
              {activeChapter.exercises.map((ex, i) => (
                <li
                  key={i}
                  style={{
                    paddingLeft: 28,
                    position: "relative",
                    fontSize: 15,
                    color: "var(--sd-text)",
                    lineHeight: 1.7,
                    counterIncrement: "ex",
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      fontWeight: 600,
                      color: "var(--sd-accent)",
                      fontSize: 14,
                    }}
                  >
                    {i + 1}.
                  </span>
                  {ex}
                </li>
              ))}
            </ol>
          </div>

          {/* Footer */}
          <p
            style={{
              marginTop: 24,
              fontSize: 13,
              color: "var(--sd-text-tertiary)",
            }}
          >
            Next topic: {activeChapter.nextTopic}
          </p>
        </main>
      </div>
    </>
  );
};

export default StudyDashboard;
