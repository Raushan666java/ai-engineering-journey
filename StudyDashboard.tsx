import React, { useState } from "react";

/* ===== Types ===== */
interface Chapter {
  id: string;
  title: string;
  objectives: string[];
  timeComplexities: { label: string; value: string }[];
  codeSnippet: string;
  quiz: { question: string; options: string[]; answer: number };
  exercises: string[];
}

/* ===== Data ===== */
const chapter: Chapter = {
  id: "arrays",
  title: "Arrays",
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
  quiz: {
    question: "What is the time complexity of inserting at index 0 in an array of size n?",
    options: [
      "O(1) – direct index assignment",
      "O(n) – all elements must shift right",
      "O(log n) – binary search finds the spot",
      "O(n²) – nested shift operations",
    ],
    answer: 1,
  },
  exercises: [
    "Reverse an array in-place — O(n) time, O(1) space",
    "Implement a circular buffer with head/tail pointers",
    "Find the max subarray sum (Kadane's algorithm)",
  ],
};

/* ===== Sub-components ===== */

const Sidebar = () => (
  <aside
    style={{
      width: 240,
      flexShrink: 0,
      background: "#FFFFFF",
      borderRight: "1px solid #E2E8F0",
      padding: "32px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 8,
    }}
  >
    <div style={{ fontSize: 18, fontWeight: 700, color: "#1E293B", padding: "0 12px", marginBottom: 24 }}>
      StudyFocus
    </div>
    <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {[
        { label: "Dashboard", icon: "📖", active: true },
        { label: "Notes", icon: "📝" },
        { label: "Study Timer", icon: "⏱" },
        { label: "Flashcards", icon: "🃏" },
        { label: "Progress", icon: "📊" },
      ].map((item) => (
        <a
          key={item.label}
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 12px",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: item.active ? 600 : 500,
            color: item.active ? "#F97316" : "#64748B",
            background: item.active ? "#FFF7ED" : "transparent",
            textDecoration: "none",
            transition: "all 0.15s",
          }}
        >
          <span>{item.icon}</span>
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
        color: "#94A3B8",
      }}
    >
      Subjects
    </div>
    <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {[
        { label: "Data Structures", dot: "#F97316" },
        { label: "Algorithms", dot: "#22C55E" },
        { label: "Mathematics", dot: "#3B82F6" },
      ].map((s) => (
        <a
          key={s.label}
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 12px",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            color: "#64748B",
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
          />
          {s.label}
        </a>
      ))}
    </nav>
  </aside>
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
      background: "#FFFFFF",
      border: "1px solid #E2E8F0",
      borderRadius: 12,
      padding: "20px 24px",
    }}
  >
    <div style={{ fontSize: 26, fontWeight: 700, color: "#1E293B", letterSpacing: "-0.5px" }}>
      {value}
    </div>
    <div style={{ fontSize: 13, color: "#64748B", marginTop: 2 }}>{label}</div>
    <div style={{ fontSize: 12, fontWeight: 600, color: "#22C55E", marginTop: 4 }}>
      {trend}
    </div>
  </div>
);

const QuizOption = ({
  text,
  selected,
  onSelect,
}: {
  text: string;
  selected: boolean;
  onSelect: () => void;
}) => (
  <div
    onClick={onSelect}
    style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 16px",
      border: `1px solid ${selected ? "#F97316" : "#E2E8F0"}`,
      borderRadius: 8,
      cursor: "pointer",
      background: selected ? "#FFF7ED" : "transparent",
      marginBottom: 8,
      transition: "all 0.12s",
    }}
  >
    <div
      style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        border: `2px solid ${selected ? "#F97316" : "#E2E8F0"}`,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {selected && (
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#F97316",
          }}
        />
      )}
    </div>
    <span style={{ fontSize: 14, color: "#1E293B" }}>{text}</span>
  </div>
);

/* ===== Main Component ===== */

const StudyDashboard = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleQuizSelect = (idx: number) => {
    setSelectedOption(idx);
    setShowAnswer(true);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F5F7FB" }}>
      <Sidebar />

      <main
        style={{
          flex: 1,
          maxWidth: 960,
          margin: "0 auto",
          padding: "40px 48px",
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
            borderBottom: "1px solid #F1F5F9",
          }}
        >
          <div style={{ fontSize: 13, color: "#64748B" }}>
            Dashboard / <span style={{ color: "#1E293B", fontWeight: 500 }}>{chapter.title}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 13, color: "#64748B" }}>73% complete</span>
            <div
              style={{
                width: 140,
                height: 6,
                background: "#F1F5F9",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "73%",
                  height: "100%",
                  background: "#F97316",
                  borderRadius: 3,
                }}
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px", color: "#1E293B", marginBottom: 8 }}>
          {chapter.title}
        </h1>
        <p
          style={{
            color: "#64748B",
            fontSize: 14,
            marginBottom: 24,
            maxWidth: "70ch",
            lineHeight: 1.7,
          }}
        >
          Master the fundamental building blocks of efficient software.
          Each concept is presented in focused, digestible sections.
        </p>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 24,
          }}
        >
          <StatCard value="8" label="Topics remaining" trend="↑ 2 this week" />
          <StatCard value="42" label="Flashcards reviewed" trend="↑ 89% recall" />
          <StatCard value="6h 12m" label="Study time" trend="↑ 18% vs last week" />
        </div>

        {/* Learning Objectives */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: 12,
            padding: "28px 32px",
            marginBottom: 24,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, color: "#1E293B" }}>
                Learning Objectives
              </div>
              <div style={{ fontSize: 13, color: "#64748B", marginTop: 2 }}>
                What you will master
              </div>
            </div>
            <span
              style={{
                padding: "4px 12px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 500,
                background: "#F5F7FB",
                color: "#64748B",
              }}
            >
              Arrays
            </span>
          </div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {chapter.objectives.map((obj, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "8px 0",
                  fontSize: 15,
                  color: "#1E293B",
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
                    background: "#F0FDF4",
                    color: "#22C55E",
                    borderRadius: "50%",
                    fontSize: 11,
                    fontWeight: 700,
                    marginTop: 2,
                  }}
                >
                  ✓
                </span>
                {obj}
              </li>
            ))}
          </ul>
        </div>

        {/* Theory + Complexity */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              padding: "16px 20px",
              background: "#FFF7ED",
              borderLeft: "3px solid #F97316",
              borderRadius: "0 8px 8px 0",
            }}
          >
            {chapter.timeComplexities.map((tc) => (
              <div
                key={tc.label}
                style={{
                  fontSize: 14,
                  color: "#1E293B",
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
              background: "#F0FDF4",
              borderLeft: "3px solid #22C55E",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <strong style={{ fontSize: 14, color: "#1E293B" }}>
              Key Insight
            </strong>
            <p style={{ fontSize: 14, color: "#1E293B", margin: "4px 0 0", lineHeight: 1.7 }}>
              Contiguity enables CPU cache prefetching, making array traversal
              faster than linked-list traversal in practice.
            </p>
          </div>
        </div>

        {/* Code Block */}
        <h2
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#1E293B",
            marginBottom: 12,
          }}
        >
          Implementation
        </h2>
        <pre
          style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: 8,
            padding: "20px 24px",
            overflowX: "auto",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 14,
            lineHeight: 1.7,
            color: "#1E293B",
            marginBottom: 24,
            whiteSpace: "pre",
          }}
        >
          {chapter.codeSnippet}
        </pre>

        {/* Active Recall Flashcard */}
        <h2
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#1E293B",
            marginBottom: 12,
          }}
        >
          Active Recall
        </h2>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: 12,
            padding: "32px 28px",
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          <div style={{ fontSize: 17, fontWeight: 600, color: "#1E293B", marginBottom: 4 }}>
            What is the time complexity of inserting an element at index 0 in an array of size n?
          </div>
          <div style={{ fontSize: 13, color: "#94A3B8", marginBottom: 16 }}>
            Think about what happens to the existing elements
          </div>
          <div
            style={{
              padding: 16,
              background: "#FFF7ED",
              borderRadius: 8,
              fontSize: 15,
              color: "#1E293B",
              borderLeft: "3px solid #F97316",
              textAlign: "left",
            }}
          >
            <strong>O(n)</strong> — every element shifts right to make room at index 0.
          </div>
        </div>

        {/* Quiz */}
        <h2
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#1E293B",
            marginBottom: 16,
          }}
        >
          Quick Check
        </h2>
        <p
          style={{
            fontWeight: 600,
            fontSize: 15,
            color: "#1E293B",
            marginBottom: 12,
          }}
        >
          {chapter.quiz.question}
        </p>

        {chapter.quiz.options.map((opt, idx) => (
          <QuizOption
            key={idx}
            text={opt}
            selected={selectedOption === idx}
            onSelect={() => handleQuizSelect(idx)}
          />
        ))}

        {showAnswer && (
          <div
            style={{
              marginTop: 16,
              padding: "16px 20px",
              background: "#F5F7FB",
              borderRadius: 8,
              borderLeft: "3px solid #F97316",
              fontSize: 14,
              color: "#64748B",
            }}
          >
            <strong style={{ color: "#1E293B" }}>Answer: </strong>
            Option {chapter.quiz.answer + 1} — O(n), all elements must shift right.
          </div>
        )}

        {/* Divider */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #F1F5F9",
            margin: "32px 0",
          }}
        />

        {/* Exercises */}
        <h2
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#1E293B",
            marginBottom: 16,
          }}
        >
          Practice Exercises
        </h2>
        <div
          style={{
            background: "#FFF7ED",
            border: "1px solid rgba(249,115,22,0.2)",
            borderRadius: 12,
            padding: "28px 32px",
          }}
        >
          <ol style={{ listStyle: "none", padding: 0, counterReset: "ex" }}>
            {chapter.exercises.map((ex, i) => (
              <li
                key={i}
                style={{
                  paddingLeft: 28,
                  position: "relative",
                  fontSize: 15,
                  color: "#1E293B",
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
                    color: "#F97316",
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
            color: "#94A3B8",
          }}
        >
          Next topic: Linked Lists — node-based structures and dynamic memory.
        </p>
      </main>
    </div>
  );
};

export default StudyDashboard;
